# スキーマコンポーネントの拡張

ネイティブの HTML タグに加え、開発者はスキーマコンポーネントライブラリを充実させるために、より多くのカスタムコンポーネントに対応できます。

コンポーネントを拡張する一般的な方法は以下の通りです：

- [connect](https://react.formilyjs.org/api/shared/connect): 第三者コンポーネントに非侵襲的に接続するために使用され、主にフィールドコンポーネントの適応に利用されます。通常、[mapProps](https://react.formilyjs.org/api/shared/map-props) や [mapReadPretty](https://react.formilyjs.org/api/shared/map-read-pretty) と組み合わせて使用します。
- [observer](https://react.formilyjs.org/api/shared/observer): コンポーネント内部で observable オブジェクトが使用されている場合、コンポーネントがその変化に応答する必要があるときに使用します。
- [withDynamicSchemaProps](#): 非侵襲的に動的 props を実現するために使用されます。

## 最もシンプルな拡張

既存の React コンポーネントを直接登録します。

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const Hello = () => <h1>こんにちは、世界！</h1>;

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

## connect を使用して第三者コンポーネントに接続

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
      suffix: 'サフィックス',
    };
  }),
  mapReadPretty(ReadPretty),
);

const schema = {
  type: 'object',
  properties: {
    t1: {
      type: 'string',
      default: 'こんにちは t1',
      'x-component': 'SingleText',
    },
    t2: {
      type: 'string',
      default: 'こんにちは t2',
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

## observer を使用してデータに応答

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

## withDynamicSchemaPropsを使用して動的propsを実現する

## ネストされたスキーマ

- `props.children`をネストでき、voidおよびobjectタイプのプロパティに適用されます。例については[voidとobjectタイプのスキーマのネスト](#voidとobjectタイプのスキーマのネスト)を参照してください。
- `<RecursionField />`はカスタムネストであり、すべてのタイプに適用されます。例については[arrayタイプのスキーマのネスト](#arrayタイプのスキーマのネスト)を参照してください。

注意：

- voidおよびobjectタイプ以外のスキーマの`properties`は直接`props.children`を通じてレンダリングできませんが、ネストの問題は`<RecursionField />`を使用して解決できます。
- voidおよびobjectタイプのスキーマのみが`onlyRenderProperties`と使用できます。

```tsx | pure
<RecursionField schema={schema} onlyRenderProperties />
```

### voidおよびobjectタイプのスキーマのネスト

直接`props.children`を通じてpropertiesノードに適用できます。

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

// Helloコンポーネントはchildrenを適用しており、propertiesをネストできます。
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

各タイプのpropertiesレンダリング結果の比較

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
      'x-content': 'Voidスキーマ、propertiesをレンダリング',
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
      'x-content': 'Objectスキーマ、propertiesをレンダリング',
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
      'x-content': 'Arrayスキーマ、propertiesをレンダリングしない',
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
      'x-content': 'Stringスキーマ、propertiesをレンダリングしない',
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

### array 型 schema のネスト

カスタムネストの問題は `<RecursionField />` で解決できます。

#### Array 要素が string または number の場合

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
        文字列の配列
        <ul>
          {field.value?.map((item, index) => {
            // 要素が1つだけ
            return <RecursionField name={index} schema={schema} />;
          })}
        </ul>
      </>
    );
  },
  { displayName: 'ArrayList' },
);

const Value = connect((props) => {
  return <li>値: {props.value}</li>;
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

#### Array 要素が Object の場合

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
    // array 型の schema は onlyRenderProperties を使用できないため、object 型に変換します
    const objSchema = new Schema({
      type: 'object',
      properties: schema.properties,
    });
    return (
      <ul>
        {field.value?.map((item, index) => {
          // array 要素は object
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
  return <li>値: {props.value}</li>;
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

#### ツリー構造データ

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
  return <li>値: {props.value}</li>;
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

