# Расширение компонентов Schema

Помимо нативных HTML-тегов, разработчики могут адаптировать дополнительные пользовательские компоненты для обогащения библиотеки компонентов schema.

Общие методы расширения компонентов включают:

- [connect](https://react.formilyjs.org/api/shared/connect): Неинтрузивная интеграция с компонентами сторонних разработчиков, обычно используется для адаптации компонентов полей, часто применяется вместе с [mapProps](https://react.formilyjs.org/api/shared/map-props) и [mapReadPretty](https://react.formilyjs.org/api/shared/map-read-pretty).
- [observer](https://react.formilyjs.org/api/shared/observer): Используется, когда компонент внутренне использует наблюдаемые объекты, и вы хотите, чтобы компонент реагировал на изменения этих объектов.

## Простое расширение

Прямое регистрирование существующего React-компонента.

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const Hello = () => <h1>Привет, мир!</h1>;

const schema = {
  type: 'void',
  name: 'hello',
  'x-component': 'Hello',
};

export default () => {
  return (
    <SchemaComponentProvider components={{ Hello }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

## Интеграция сторонних компонентов с Connect

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { Input } from 'antd';
import { connect, mapProps, mapReadPretty } from '@formily/react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const ReadPretty = (props) => {
  return <div>{props.value}</div>;
};

const SingleText = connect(
  Input,
  mapProps((props, field) => {
    return {
      ...props,
      suffix: 'Суффикс',
    };
  }),
  mapReadPretty(ReadPretty),
);

const schema = {
  type: 'object',
  properties: {
    t1: {
      type: 'string',
      default: 'привет t1',
      'x-component': 'SingleText',
    },
    t2: {
      type: 'string',
      default: 'привет t2',
      'x-component': 'SingleText',
      'x-pattern': 'readPretty',
    },
  },
};

export default () => {
  return (
    <SchemaComponentProvider components={{ SingleText }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

## Использование Observer для реакции на изменения данных

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { Input } from 'antd';
import { connect, observer, useForm } from '@formily/react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const SingleText = connect(Input);

const UsedObserver = observer(
  (props) => {
    const form = useForm();
    return <div>UsedObserver: {form.values.t1}</div>;
  },
  { displayName: 'UsedObserver' },
);

const NotUsedObserver = (props) => {
  const form = useForm();
  return <div>NotUsedObserver: {form.values.t1}</div>;
};

const schema = {
  type: 'object',
  properties: {
    t1: {
      type: 'string',
      'x-component': 'SingleText',
    },
    t2: {
      type: 'string',
      'x-component': 'UsedObserver',
    },
    t3: {
      type: 'string',
      'x-component': 'NotUsedObserver',
    },
  },
};

const components = {
  SingleText,
  UsedObserver,
  NotUsedObserver,
};

export default () => {
  return (
    <SchemaComponentProvider components={components}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

## Вложенные Schema

- Вложение через `props.children` подходит для свойств типа `void` и `object`. Примеры см. в [Вложение schema типа void и object](#nesting-void-and-object-type-schema).
- `<RecursionField />` для пользовательского вложения, подходит для всех типов. Примеры см. в [Вложение schema типа array](#nesting-array-type-schema).

Примечание:

- Свойства, кроме типов `void` и `object`, нельзя напрямую рендерить через `props.children`, но можно использовать `<RecursionField />` для решения проблемы вложения.
- Только schema типов `void` и `object` могут использоваться с `onlyRenderProperties`.

```tsx | pure
<RecursionField schema={schema} onlyRenderProperties />
```

### Вложение schema типа void и object

Узлы properties можно адаптировать напрямую через `props.children`.

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

// Компонент Hello адаптирует children, позволяя вложение properties.
const Hello = (props) => <h1>Привет, {props.children}!</h1>;
const World = () => <span>мир</span>;

const schema = {
  type: 'object',
  name: 'hello',
  'x-component': 'Hello',
  properties: {
    world: {
      type: 'string',
      'x-component': 'World',
    },
  },
};

export default () => {
  return (
    <SchemaComponentProvider components={{ Hello, World }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

Сравнение результатов рендеринга для различных типов свойств:

```tsx
import React from 'react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const Hello = (props) => <h1>Привет, {props.children}!</h1>;
const World = () => <span>мир</span>;

const schema = {
  type: 'object',
  properties: {
    title1: {
      type: 'void',
      'x-content': 'Schema типа void, рендеринг properties',
    },
    void: {
      type: 'void',
      name: 'hello',
      'x-component': 'Hello',
      properties: {
        world: {
          type: 'void',
          'x-component': 'World',
        },
      },
    },
    title2: {
      type: 'void',
      'x-content': 'Schema типа object, рендеринг properties',
    },
    object: {
      type: 'object',
      name: 'hello',
      'x-component': 'Hello',
      properties: {
        world: {
          type: 'string',
          'x-component': 'World',
        },
      },
    },
    title3: {
      type: 'void',
      'x-content': 'Schema типа array, не рендерит properties',
    },
    array: {
      type: 'array',
      name: 'hello',
      'x-component': 'Hello',
      properties: {
        world: {
          type: 'string',
          'x-component': 'World',
        },
      },
    },
    title4: {
      type: 'void',
      'x-content': 'Schema типа string, не рендерит properties',
    },
    string: {
      type: 'string',
      name: 'hello',
      'x-component': 'Hello',
      properties: {
        world: {
          type: 'string',
          'x-component': 'World',
        },
      },
    },
  },
};

export default () => {
  return (
    <SchemaComponentProvider components={{ Hello, World }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

### Вложение schema типа array

Можно использовать `<RecursionField />` для решения проблем с пользовательским вложением.

#### Когда элементы массива — string или number

```tsx
import React from 'react';
import {
  useFieldSchema,
  Schema,
  RecursionField,
  useField,
  observer,
  connect,
} from '@formily/react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const useValueSchema = () => {
  const schema = useFieldSchema();
  return schema.reduceProperties((buf, s) => {
    if (s['x-component'] === 'Value') {
      return s;
    }
    return buf;
  });
};

const ArrayList = observer(
  (props) => {
    const field = useField();
    const schema = useValueSchema();
    return (
      <>
        Массив строк
        <ul>
          {field.value?.map((item, index) => {
            // Только один элемент
            return <RecursionField name={index} schema={schema} />;
          })}
        </ul>
      </>
    );
  },
  { displayName: 'ArrayList' },
);

const Value = connect((props) => {
  return <li>значение: {props.value}</li>;
});

const schema = {
  type: 'object',
  properties: {
    strArr: {
      type: 'array',
      default: [1, 2, 3],
      'x-component': 'ArrayList',
      properties: {
        value: {
          type: 'number',
          'x-component': 'Value',
        },
      },
    },
  },
};

export default () => {
  return (
    <SchemaComponentProvider components={{ ArrayList, Value }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

#### Когда элементы массива — объекты

```tsx
import React from 'react';
import {
  useFieldSchema,
  Schema,
  RecursionField,
  useField,
  observer,
  connect,
} from '@formily/react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const ArrayList = observer(
  (props) => {
    const field = useField();
    const schema = useFieldSchema();
    // Преобразование schema массива в schema объекта, так как schema типа array не может использовать onlyRenderProperties
    const objSchema = new Schema({
      type: 'object',
      properties: schema.properties,
    });
    return (
      <ul>
        {field.value?.map((item, index) => {
          // Элемент массива — объект
          return (
            <RecursionField
              name={index}
              schema={objSchema}
              onlyRenderProperties
            />
          );
        })}
      </ul>
    );
  },
  { displayName: 'ArrayList' },
);

const Value = connect((props) => {
  return <li>значение: {props.value}</li>;
});

const schema = {
  type: 'object',
  properties: {
    objArr: {
      type: 'array',
      default: [{ value: 't1' }, { value: 't2' }, { value: 't3' }],
      'x-component': 'ArrayList',
      properties: {
        value: {
          type: 'number',
          'x-component': 'Value',
        },
      },
    },
  },
};

export default () => {
  return (
    <SchemaComponentProvider components={{ ArrayList, Value }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

#### Данные древовидной структуры

```tsx
import { ArrayField } from '@formily/core';
import {
  connect,
  ISchema,
  observer,
  RecursionField,
  useField,
  useFieldSchema,
} from '@formily/react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';
import { Table, TableColumnType } from 'antd';
import React from 'react';

const ArrayTable = observer(
  (props: any) => {
    const { rowKey } = props;
    const field = useField<ArrayField>();
    const schema = useFieldSchema();
    const columnSchemas = schema.reduceProperties((buf, s) => {
      if (s['x-component'] === 'ArrayTable.Column') {
        buf.push(s);
      }
      return buf;
    }, []);

    const columns = columnSchemas.map((s) => {
      return {
        render: (value, record) => {
          return (
            <RecursionField
              name={record.__path}
              schema={s}
              onlyRenderProperties
            />
          );
        },
      } as TableColumnType<any>;
    });

    return <Table rowKey={rowKey} columns={columns} dataSource={field.value} />;
  },
  { displayName: 'ArrayTable' },
);

const Value = connect((props) => {
  return <li>значение: {props.value}</li>;
});

const schema: ISchema = {
  type: 'object',
  properties: {
    objArr: {
      type: 'array',
      default: [
        { __path: '0', id: 1, value: 't1' },
        {
          __path: '1',
          id: 2,
          value: 't2',
          children: [
            {
              __path: '1.children.0',
              id: 5,
              value: 't5',
              parentId: 2,
            },
          ],
        },
        {
          __path: '2',
          id: 3,
          value: 't3',
          children: [
            {
              __path: '2.children.0',
              id: 4,
              value: 't4',
              parentId: 3,
              children: [
                {
                  __path: '2.children.0.children.0',
                  id: 6,
                  value: 't6',
                  parentId: 4,
                },
                {
                  __path: '2.children.0.children.1',
                  id: 7,
                  value: 't7',
                  parentId: 4,
                },
              ],
            },
          ],
        },
      ],
      'x-component': 'ArrayTable',
      'x-component-props': {
        rowKey: 'id',
      },
      properties: {
        c1: {
          type: 'void',
          'x-component': 'ArrayTable.Column',
          properties: {
            value: {
              type: 'string',
              'x-component': 'Value',
            },
          },
        },
      },
    },
  },
};

export default () => {
  return (
    <SchemaComponentProvider components={{ ArrayTable, Value }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```
