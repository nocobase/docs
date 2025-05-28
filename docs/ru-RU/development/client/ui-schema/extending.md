# Extending Schema Components

In addition to native HTML tags, developers can adapt more custom components to enrich the Schema component library.

Common methods for extending components include:

- [connect](https://react.formilyjs.org/api/shared/connect): Non-intrusive integration with third-party components, generally used for adapting field components, often used in conjunction with [mapProps](https://react.formilyjs.org/api/shared/map-props) and [mapReadPretty](https://react.formilyjs.org/api/shared/map-read-pretty).
- [observer](https://react.formilyjs.org/api/shared/observer): Used when the component uses observable objects internally, and you want the component to respond to changes in the observable objects.

## Simple Extension

Register an existing React component directly.

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const Hello = () => <h1>Hello, world!</h1>;

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

## Integrating Third-Party Components with Connect

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
      suffix: 'Suffix',
    };
  }),
  mapReadPretty(ReadPretty),
);

const schema = {
  type: 'object',
  properties: {
    t1: {
      type: 'string',
      default: 'hello t1',
      'x-component': 'SingleText',
    },
    t2: {
      type: 'string',
      default: 'hello t2',
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

## Using Observer to Respond to Data Changes

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

## Nested Schema

- `props.children` nesting is suitable for `void` and `object` type properties. For examples, see [Nesting void and object type schema](#nesting-void-and-object-type-schema)
- `<RecursionField />` for custom nesting, suitable for all types. For examples, see [Nesting array type schema](#nesting-array-type-schema).

Note:

- Properties other than `void` and `object` types cannot be directly rendered through `props.children`, but you can use `<RecursionField />` to solve the nesting problem.
- Only `void` and `object` type schemas can be used with `onlyRenderProperties`.

```tsx | pure
<RecursionField schema={schema} onlyRenderProperties />
```

### Nesting void and object type schema

Properties nodes can be adapted directly through `props.children`.

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

// The Hello component adapted children, allowing nested properties.
const Hello = (props) => <h1>Hello, {props.children}!</h1>;
const World = () => <span>world</span>;

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

Rendering results comparison of various property types:

```tsx
import React from 'react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const Hello = (props) => <h1>Hello, {props.children}!</h1>;
const World = () => <span>world</span>;

const schema = {
  type: 'object',
  properties: {
    title1: {
      type: 'void',
      'x-content': 'Void schema, rendering properties',
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
      'x-content': 'Object schema, rendering properties',
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
      'x-content': 'Array schema, not rendering properties',
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
      'x-content': 'String schema, not rendering properties',
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

### Nesting array type schema

You can use `<RecursionField />` to solve custom nesting issues.

#### When array elements are string or number

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
        String Array
        <ul>
          {field.value?.map((item, index) => {
            // Only one element
            return <RecursionField name={index} schema={schema} />;
          })}
        </ul>
      </>
    );
  },
  { displayName: 'ArrayList' },
);

const Value = connect((props) => {
  return <li>value: {props.value}</li>;
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

#### When array elements are objects

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
    // Convert array schema to object schema as array type schema cannot onlyRenderProperties
    const objSchema = new Schema({
      type: 'object',
      properties: schema.properties,
    });
    return (
      <ul>
        {field.value?.map((item, index) => {
          // Array element is object
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
  return <li>value: {props.value}</li>;
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

#### Tree Structure Data

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
  return <li>value: {props.value}</li>;
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
