# Designable 设计器

NocoBase 通过 `createDesignable()` 方法为 Schema 提供设计能力

```ts
import React from 'react';
import { Schema } from '@formily/json-schema';
import { createDesignable } from '@nocobase/client';

// 创建一个 schema 示例
const current = new Schema({
  name: 'root',
  type: 'void',
  'x-component': 'Page',
});

// 为当前 schema 创建 designable
const dn = createDesignable({
  current,
});

// 在 schema 节点内部新增一个 hello 节点
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

在 Schema 组件中，可以直接使用 `useDesignable()` 来处理当前 Schema 节点

```tsx
import React from 'react';
import { Button } from 'antd';
import {
  SchemaComponent,
  SchemaComponentProvider,
  useDesignable,
} from '@nocobase/client';

const Hello = () => <h1>Hello, world!</h1>;

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
        点此新增子节点
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

## createDesignable vs useDesignable

- createDesignable 需要传 current 参数，useDesignable 直接用于当前节点，不需要传 current
- createDesignable 可以用在事件中，useDesignable 是 react hook 方法，必须先执行
- createDesignable 的 current 可以是任意 schema，useDesignable 只能是当前 schema

使用场景

- 如果明确就是当前节点操作，直接用 useDesignable 更加便捷
- 如果操作的不是当前节点，用 createDesignable 更合适
- 如果是事件触发，如拖拽移动等，用 createDesignable 更合适

## designable 的设计能力

designable 为 schema 提供的设计能力体现在

- 增：当前节点相邻位置插入
- 查：查找子节点
- 改：通过 patch 修改 schema 参数
- 删：删除当前节点或者某个子节点
- 移：节点间的移动

### 增：当前节点相邻位置插入

与 DOM 的 [insert adjacent](https://dom.spec.whatwg.org/#insert-adjacent) 概念相似，Schema 也提供了 `insertAdjacent()` 方法用于解决邻近位置的插入问题。

四个邻近位置

```html
<!-- root -->
<div>
  <!-- beforeBegin 在当前节点的前面插入 -->
  <p>
    <!-- afterBegin 在当前节点的第一个子节点前面插入 -->
    ...
    <!-- beforeEnd 在当前节点的最后一个子节点后面 -->
  </p>
  <!-- afterEnd 在当前节点的后面 -->
</div>
```

Schema 的写法如下

```ts
{
  type: 'void',
  'x-component': 'div',
  properties: {
    // beforeBegin 在当前节点的前面插入
    node1: {
      type: 'void',
      'x-component': 'p',
      properties: {
        // afterBegin 在当前节点的第一个子节点前面插入
        // ...
        // beforeEnd 在当前节点的最后一个子节点后面
      },
    },
    // afterEnd 在当前节点的后面
  },
}
```

使用 `useDesignable()` 在当前 schema 相邻位置插入

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

使用 `createDesignable()` 在指定 schema 相邻位置插入

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
        在 Title2 后面添加
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

### 查：查找子节点

formily 的 json-schema 提供了 `reduceProperties` 遍历查找节点，但是太难用了，为此 Designable 提供了更易用的 `findProperties` 和 `findProperty` 方法来查找子节点

#### `findProperties`

查找满足条件的全部子节点，返回一个数组

```ts
interface FindOptions {
  // 过滤条件
  filter: any;
  // 跳过查找的元素
  skipOn?: (s: Schema) => boolean;
  // 当查到什么元素时退出
  breakOn?: (s: Schema) => boolean;
  // 递归查找
  recursive?: boolean;
}

class Designable {
  findProperties(options: FindOptions): Schema[];
}
```

示例查找满足条件的所有节点

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

查找满足条件的第一个子节点

```ts
interface FindOptions {
  // 过滤条件
  filter: any;
  // 跳过查找的元素
  skipOn?: (s: Schema) => boolean;
  // 当查到什么元素时退出
  breakOn?: (s: Schema) => boolean;
  // 递归查找
  recursive?: boolean;
}

class Designable {
  findProperty(options: FindOptions): Schema | null;
}
```

示例

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

### 改：修改 schema 参数

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

### 删：删除当前节点或者某个子节点

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

### 移：节点间的移动

insertAdjacent 等方法也可用于节点的拖拽移动

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
        Block {fieldSchema.name}{' '}
        <Draggable id={field.address.toString()} data={{ schema: fieldSchema }}>
          Drag
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
