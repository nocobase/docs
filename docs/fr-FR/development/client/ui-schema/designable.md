# Designable

NocoBase provides design capabilities for Schema through the `createDesignable()` method.

```ts
import React from 'react';
import { Schema } from '@formily/json-schema';
import { createDesignable } from '@nocobase/client';

// Create a schema example
const current = new Schema({
  name: 'root',
  type: 'void',
  'x-component': 'Page',
});

// Create a designable for the current schema
const dn = createDesignable({
  current,
});

// Add a hello node inside the schema node
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

In the Schema component, `useDesignable()` can be directly used to handle the current Schema node.

```javascript
import React from 'react';
import { Button } from 'antd';
import {
  SchemaComponent,
  SchemaComponentProvider,
  useDesignable,
} from '@nocobase.client';

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
        Click to add a child node
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

- `createDesignable` requires the `current` parameter, while `useDesignable` is used directly on the current node without needing `current`.
- `createDesignable` can be used in events, while `useDesignable` is a React hook method that must be executed first.
- `createDesignable`'s `current` can be any schema, while `useDesignable` can only be the current schema.

Use cases:

- If it's clear that the operation is on the current node, using `useDesignable` is more convenient.
- If the operation is not on the current node, `createDesignable` is more appropriate.
- If the operation is triggered by an event, such as drag and drop, `createDesignable` is more suitable.

## Design capabilities of designable

The design capabilities provided by designable for schema are reflected in:

- Add: Insert at an adjacent position of the current node.
- Query: Find child nodes.
- Modify: Change schema parameters via patch.
- Delete: Delete the current node or a specific child node.
- Move: Move between nodes.

### Add: Insert at an adjacent position of the current node

Similar to the DOM's [insert adjacent](https://dom.spec.whatwg.org/#insert-adjacent) concept, Schema also provides the `insertAdjacent()` method for resolving adjacent position insertion issues.

Four adjacent positions:

```html
<!-- root -->
<div>
  <!-- beforeBegin Insert before the current node -->
  <p>
    <!-- afterBegin Insert before the first child of the current node -->
    ...
    <!-- beforeEnd Insert after the last child of the current node -->
  </p>
  <!-- afterEnd Insert after the current node -->
</div>
```

The Schema is written as follows:

```ts
{
  type: 'void',
  'x-component': 'div',
  properties: {
    // beforeBegin Insert before the current node
    node1: {
      type: 'void',
      'x-component': 'p',
      properties: {
        // afterBegin Insert before the first child of the current node
        // ...
        // beforeEnd Insert after the last child of the current node
      },
    },
    // afterEnd Insert after the current node
  },
}
```

Use `useDesignable()` to insert at an adjacent position of the current schema.

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

Use `createDesignable()` to insert at an adjacent position of a specified schema.

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
        Add after Title2
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

### Query: Find child nodes

formily's json-schema provides `reduceProperties` for traversing and finding nodes, but it's too cumbersome to use. Therefore, Designable provides easier-to-use `findProperties` and `findProperty` methods to find child nodes.

#### `findProperties`

Find all child nodes that meet the conditions and return an array.

```ts
interface FindOptions {
  // Filter conditions
  filter: any;
  // Elements to skip during the search
  skipOn?: (s: Schema) => boolean;
  // Exit when finding a certain element
  breakOn?: (s: Schema) => boolean;
  // Recursive search
  recursive?: boolean;
}

class Designable {
  findProperties(options: FindOptions): Schema[];
}
```

Example to find all nodes that meet the conditions:

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

Find the first child node that meets the conditions.

```ts
interface FindOptions {
  // Filter conditions
  filter: any;
  // Elements to skip during the search
  skipOn?: (s: Schema) => boolean;
  // Exit when finding a certain element
  breakOn?: (s: Schema) => boolean;
  // Recursive search
  recursive?: boolean;
}

class Designable {
  findProperty(options: FindOptions): Schema | null;
}
```

Example:

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

### Modify: Change schema parameters

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

### Delete: Delete the current node or a specific child node

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

### Move: Move between nodes

`insertAdjacent` and other methods can also be used for node drag and drop movement.

```javascript
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

    if (!activeSchema or !overSchema) {
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