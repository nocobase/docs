# デザイン可能なデザイナー

NocoBaseは`createDesignable()`メソッドを使用して、Schemaにデザイン機能を提供します。

```ts
import React from 'react';
import { Schema } from '@formily/json-schema';
import { createDesignable } from '@nocobase/client';

// Schemaの例を作成
const current = new Schema({
  name: 'root',
  type: 'void',
  'x-component': 'Page',
});

// 現在のSchemaにデザイン可能を作成
const dn = createDesignable({
  current,
});

// Schemaノード内にhelloノードを追加
dn.insertAfterBegin({
  name: 'hello',
  type: 'void',
  'x-component': 'Hello',
});

console.log(current.toJSON());
{
  "name": "root",
  "type": "void",
  "x-component": "Page",
  "properties": {
    "hello": {
      "type": "void",
      "name": "hello",
      "x-component": "Hello",
      "x-index": 0
    }
  }
}
```

Schemaコンポーネント内で、`useDesignable()`を直接使用して現在のSchemaノードを処理できます。

```tsx
import React from 'react';
import { Button } from 'antd';
import {
  SchemaComponent,
  SchemaComponentProvider,
  useDesignable,
} from '@nocobase/client';

const Hello = () => <h1>こんにちは、世界！</h1>;

const Page = (props) => {
  const dn = useDesignable();
  return (
    <div>
      <Button
        onClick={() => {
          dn.insertAfterBegin({
            type: 'void',
            'x-component': 'Hello',
          });
        }}
      >
        子ノードを追加するにはここをクリック
      </Button>
      {props.children}
    </div>
  );
};

const schema = {
  type: 'void',
  name: 'page',
  'x-component': 'Page',
};

export default () => {
  return (
    <SchemaComponentProvider components={{ Page, Hello }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

## createDesignableとuseDesignableの違い

- `createDesignable`は`current`パラメータを必要とし、`useDesignable`は現在のノードに直接使用でき、`current`を渡す必要はありません。
- `createDesignable`はイベント内で使用でき、`useDesignable`はReactフックメソッドであり、最初に実行する必要があります。
- `createDesignable`の`current`は任意のSchemaであり、`useDesignable`は現在のSchemaのみです。

### 使用シーン

- 明確に現在のノードを操作する場合は、`useDesignable`を使用する方が便利です。
- 現在のノードでない操作を行う場合は`createDesignable`がより適切です。
- ドラッグ＆ドロップなどのイベントトリガーの場合は`createDesignable`がより適切です。

## designableのデザイン機能

designableがSchemaに提供するデザイン機能は以下の通りです。

- 増：現在のノードの隣接位置に挿入
- 查：子ノードを検索
- 改：patchを通じてSchemaパラメータを変更
- 删：現在のノードまたは特定の子ノードを削除
- 移：ノード間の移動

### 増：現在のノードの隣接位置に挿入

DOMの[insert adjacent](https://dom.spec.whatwg.org/#insert-adjacent)の概念に似て、Schemaも`insertAdjacent()`メソッドを提供して隣接位置の挿入問題を解決します。

4つの隣接位置

```html
<!-- root -->
<div>
  <!-- beforeBegin：現在のノードの前に挿入 -->
  <p>
    <!-- afterBegin：現在のノードの最初の子ノードの前に挿入 -->
    ...
    <!-- beforeEnd：現在のノードの最後の子ノードの後に挿入 -->
  </p>
  <!-- afterEnd：現在のノードの後に挿入 -->
</div>
```

Schemaの書き方は以下の通りです。

```ts
{
  type: 'void',
  'x-component': 'div',
  properties: {
    // beforeBegin：現在のノードの前に挿入
    node1: {
      type: 'void',
      'x-component': 'p',
      properties: {
        // afterBegin：現在のノードの最初の子ノードの前に挿入
        // ...
        // beforeEnd：現在のノードの最後の子ノードの後に挿入
      },
    },
    // afterEnd：現在のノードの後に挿入
  },
}
```

`useDesignable()`を使用して現在のSchemaの隣接位置に挿入します。

```tsx
import React from 'react';
import {
  SchemaComponentProvider,
  SchemaComponent,
  useDesignable,
} from '@nocobase/client';
import { observer, Schema, useFieldSchema } from '@formily/react';
import { Button, Space } from 'antd';
import { uid } from '@formily/shared';

const Hello = (props) => {
  const { insertAdjacent } = useDesignable();
  const fieldSchema = useFieldSchema();
  return (
    <div>
      <h1>
        {fieldSchema.title} - {fieldSchema.name}
      </h1>
      <Space>
        <Button
          onClick={() => {
            insertAdjacent('beforeBegin', {
              title: 'beforeBegin',
              'x-component': 'Hello',
            });
          }}
        >
          before begin
        </Button>
        <Button
          onClick={() => {
            insertAdjacent('afterBegin', {
              title: 'afterBegin',
              'x-component': 'Hello',
            });
          }}
        >
          after begin
        </Button>
        <Button
          onClick={() => {
            insertAdjacent('beforeEnd', {
              title: 'beforeEnd',
              'x-component': 'Hello',
            });
          }}
        >
          before end
        </Button>
        <Button
          onClick={() => {
            insertAdjacent('afterEnd', {
              title: 'afterEnd',
              'x-component': 'Hello',
            });
          }}
        >
          after end
        </Button>
      </Space>
      <div style={{ margin: 50 }}>{props.children}</div>
    </div>
  );
};

const Page = (props) => {
  return <div>{props.children}</div>;
};

export default () => {
  return (
    <SchemaComponentProvider components={{ Page, Hello }}>
      <SchemaComponent
        schema={{
          type: 'void',
          name: 'page',
          'x-component': 'Page',
          properties: {
            hello1: {
              type: 'void',
              title: 'Main',
              'x-component': 'Hello',
            },
          },
        }}
      />
    </SchemaComponentProvider>
  );
};
```

`createDesignable()`を使用して、指定されたSchemaの隣接位置に挿入します。

```tsx
import React from 'react';
import {
  SchemaComponentProvider,
  SchemaComponent,
  createDesignable,
  useSchemaComponentContext,
} from '@nocobase/client';
import { observer, Schema, useFieldSchema } from '@formily/react';
import { Button } from 'antd';
import { uid } from '@formily/shared';

const Hello = (props) => {
  const fieldSchema = useFieldSchema();
  return (
    <h1>
      {fieldSchema.title} - {fieldSchema.name}
    </h1>
  );
};

const Page = (props) => {
  const fieldSchema = useFieldSchema();
  const { refresh } = useSchemaComponentContext();

  return (
    <div>
      <Button
        onClick={() => {
          const dn = createDesignable({
            refresh,
            current: fieldSchema.properties.hello2,
          });
          dn.on('insertAdjacent', refresh);
          dn.insertAdjacent('afterEnd', {
            title: 'afterEnd',
            'x-component': 'Hello',
          });
        }}
      >
        Title2の後に追加
      </Button>
      {props.children}
    </div>
  );
};

export default () => {
  return (
    <SchemaComponentProvider components={{ Page, Hello }}>
      <SchemaComponent
        schema={{
          type: 'void',
          name: 'page',
          'x-component': 'Page',
          properties: {
            hello1: {
              type: 'void',
              title: 'Title1',
              'x-component': 'Hello',
            },
            hello2: {
              type: 'void',
              title: 'Title2',
              'x-component': 'Hello',
            },
            hello3: {
              type: 'void',
              title: 'Title3',
              'x-component': 'Hello',
            },
          },
        }}
      />
    </SchemaComponentProvider>
  );
};
```

### 子ノードの検索

formilyのjson-schemaは`reduceProperties`を使用してノードを走査し検索しますが、使いにくいため、Designableはより使いやすい`findProperties`および`findProperty`メソッドを提供します。

#### `findProperties`

条件を満たすすべての子ノードを検索し、配列を返します。

```ts
interface FindOptions {
  // フィルター条件
  filter: any;
  // 検索をスキップする要素
  skipOn?: (s: Schema) => boolean;
  // 検索した要素が見つかったら終了
  breakOn?: (s: Schema) => boolean;
  // 再帰的に検索
  recursive?: boolean;
}

class Designable {
  findProperties(options: FindOptions): Schema[];
}
```

条件を満たすすべてのノードを検索する例

```ts
const items = dn.findProperties({
  filter: {
    'x-component': 'Hello',
  },
});
// [current.properties.hello1, current.properties.hello2]
console.log(items.map((s) => schema.toJSON()));
[
  {
    name: 'hello1',
    type: 'void',
    'x-component': 'Hello',
  },
  {
    name: 'hello2',
    type: 'void',
    'x-component': 'Hello',
  },
];
```

#### `findProperty`

条件を満たす最初の子ノードを検索します。

```ts
interface FindOptions {
  // フィルター条件
  filter: any;
  // 検索をスキップする要素
  skipOn?: (s: Schema) => boolean;
  // 検索した要素が見つかったら終了
  breakOn?: (s: Schema) => boolean;
  // 再帰的に検索
  recursive?: boolean;
}

class Designable {
  findProperty(options: FindOptions): Schema | null;
}
```

例

```ts
const current = new Schema({
  name: 'root',
  type: 'void',
  'x-component': 'Page',
  properties: {
    hello1: {
      type: 'void',
      'x-component': 'Hello',
    },
    hello2: {
      type: 'void',
      'x-component': 'Hello',
    }
  }
});

const dn = createDesignable({ current });

const schema = dn.findProperty({
  filter: {
    'x-component': 'Hello',
  },
});
// current.properties.hello1
console.log(schema.toJSON());
{
  name: 'hello1',
  type: 'void',
  'x-component': 'Hello',
}
```

### schemaパラメータの変更

```ts
const current = new Schema({
  name: 'root',
  type: 'void',
  'x-component': 'Page',
});

const dn = createDesignable({
  current,
});

dn.deepMerge({
  'x-component-props': {},
});

dn.shallowMerge({
  'x-component-props': {},
});
```

### 削除：現在のノードまたは特定の子ノードを削除

```ts
const current = new Schema({
  name: 'root',
  type: 'void',
  'x-component': 'Page',
});

const dn = createDesignable({
  current,
});

dn.remove();

dn.remove({
  filter: (s) => boolean,
  skipOn: (s) => boolean,
  breakOn: (s) => boolean,
  recursive: true,
  removeParentsIfNoChildren: true,
});
```

### 移動：ノード間の移動

`insertAdjacent`などのメソッドもノードのドラッグ移動に使用できます。

```tsx
import React from 'react';
import { uid } from '@formily/shared';
import { observer, useField, useFieldSchema } from '@formily/react';
import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core';
import {
  SchemaComponent,
  SchemaComponentProvider,
  createDesignable,
  useSchemaComponentContext,
} from '@nocobase/client';

const useDragEnd = () => {
  const { refresh } = useSchemaComponentContext();

  return ({ active, over }: DragEndEvent) => {
    const activeSchema = active?.data?.current?.schema;
    const overSchema = over?.data?.current?.schema;

    if (!activeSchema || !overSchema) {
      return;
    }

    if (activeSchema === overSchema) {
      return;
    }

    const dn = createDesignable({
      current: overSchema,
    });

    dn.on('insertAdjacent', refresh);
    dn.insertBeforeBeginOrAfterEnd(activeSchema);
  };
};

const Page = observer((props) => {
  return <DndContext onDragEnd={useDragEnd()}>{props.children}</DndContext>;
});

function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
    data: props.data,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}

function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
    data: props.data,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

const Block = observer((props) => {
  const field = useField();
  const fieldSchema = useFieldSchema();
  return (
    <Droppable id={field.address.toString()} data={{ schema: fieldSchema }}>
      <div style={{ marginBottom: 20, padding: '20px', background: '#f1f1f1' }}>
        ブロック {fieldSchema.name}{' '}
        <Draggable id={field.address.toString()} data={{ schema: fieldSchema }}>
          ドラッグ
        </Draggable>
      </div>
    </Droppable>
  );
});

export default function App() {
  return (
    <SchemaComponentProvider components={{ Page, Block }}>
      <SchemaComponent
        schema={{
          type: 'void',
          name: 'page',
          'x-component': 'Page',
          properties: {
            block1: {
              'x-component': 'Block',
            },
            block2: {
              'x-component': 'Block',
            },
            block3: {
              'x-component': 'Block',
            },
          },
        }}
      />
    </SchemaComponentProvider>
  );
}
```

