# Проектирование

NocoBase предоставляет возможности проектирования для schema через метод `createDesignable()`.

```ts
import React from 'react';
import { Schema } from '@formily/json-schema';
import { createDesignable } from '@nocobase/client';

// Создание примера schema
const current = new Schema({
  name: 'root',
  type: 'void',
  'x-component': 'Page',
});

// Создание designable для текущей schema
const dn = createDesignable({
  current,
});

// Добавление узла hello внутри узла schema
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

В компоненте schema можно напрямую использовать `useDesignable()` для работы с текущим узлом schema.

```javascript
import React from 'react';
import { Button } from 'antd';
import {
  SchemaComponent,
  SchemaComponentProvider,
  useDesignable,
} from '@nocobase.client';

const Hello = () => <h1>Привет, мир!</h1>;

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
        Нажмите, чтобы добавить дочерний узел
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

- `createDesignable` требует параметр `current`, тогда как `useDesignable` используется напрямую на текущем узле без необходимости указания `current`.
- `createDesignable` можно использовать в событиях, тогда как `useDesignable` — это метод React-хук, который должен быть выполнен первым.
- `current` в `createDesignable` может быть любой schema, тогда как `useDesignable` работает только с текущей schema.

Случаи использования:

- Если очевидно, что операция выполняется на текущем узле, удобнее использовать `useDesignable`.
- Если операция выполняется не на текущем узле, более подходящим будет `createDesignable`.
- Если операция вызывается событием, например, перетаскиванием, более подходящим является `createDesignable`.

## Возможности проектирования designable

Возможности проектирования, предоставляемые designable для schema, заключаются в:

- Добавление: Вставка в соседнюю позицию текущего узла.
- Поиск: Поиск дочерних узлов.
- Изменение: Изменение параметров schema через патч.
- Удаление: Удаление текущего узла или определённого дочернего узла.
- Перемещение: Перемещение между узлами.

### Добавление: Вставка в соседнюю позицию текущего узла

Аналогично концепции [insert adjacent](https://dom.spec.whatwg.org/#insert-adjacent) в DOM, schema также предоставляет метод `insertAdjacent()` для решения задач вставки в соседние позиции.

Четыре соседние позиции:

```html
<!-- root -->
<div>
  <!-- beforeBegin Вставка перед текущим узлом -->
  <p>
    <!-- afterBegin Вставка перед первым дочерним узлом текущего узла -->
    ...
    <!-- beforeEnd Вставка после последнего дочернего узла текущего узла -->
  </p>
  <!-- afterEnd Вставка после текущего узла -->
</div>
```

Schema записывается следующим образом:

```ts
{
  type: 'void',
  'x-component': 'div',
  properties: {
    // beforeBegin Вставка перед текущим узлом
    node1: {
      type: 'void',
      'x-component': 'p',
      properties: {
        // afterBegin Вставка перед первым дочерним узлом текущего узла
        // ...
        // beforeEnd Вставка после последнего дочернего узла текущего узла
      },
    },
    // afterEnd Вставка после текущего узла
  },
}
```

Использование `useDesignable()` для вставки в соседнюю позицию текущей schema.

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
          перед началом
        </Button>
        <Button
          onClick={() => {
            insertAdjacent('afterBegin', {
              title: 'afterBegin',
              'x-component': 'Hello',
            });
          }}
        >
          после начала
        </Button>
        <Button
          onClick={() => {
            insertAdjacent('beforeEnd', {
              title: 'beforeEnd',
              'x-component': 'Hello',
            });
          }}
        >
          перед концом
        </Button>
        <Button
          onClick={() => {
            insertAdjacent('afterEnd', {
              title: 'afterEnd',
              'x-component': 'Hello',
            });
          }}
        >
          после конца
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
              title: 'Главный',
              'x-component': 'Hello',
            },
          },
        }}
      />
    </SchemaComponentProvider>
  );
};
```

Использование `createDesignable()` для вставки в соседнюю позицию указанной schema ..

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
        Добавить после Title2
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
              title: 'Заголовок1',
              'x-component': 'Hello',
            },
            hello2: {
              type: 'void',
              title: 'Заголовок2',
              'x-component': 'Hello',
            },
            hello3: {
              type: 'void',
              title: 'Заголовок3',
              'x-component': 'Hello',
            },
          },
        }}
      />
    </SchemaComponentProvider>
  );
};
```

### Поиск: Поиск дочерних узлов

JSON-schema от Formily предоставляет `reduceProperties` для обхода и поиска узлов, но его использование слишком громоздкое. Поэтому Designable предоставляет более удобные методы `findProperties` и `findProperty` для поиска дочерних узлов.

#### `findProperties`

Поиск всех дочерних узлов, соответствующих условиям, и возвращение массива.

```ts
interface FindOptions {
  // Условия фильтрации
  filter: any;
  // Элементы, которые нужно пропустить при поиске
  skipOn?: (s: Schema) => boolean;
  // Прекращение поиска при нахождении определённого элемента
  breakOn?: (s: Schema) => boolean;
  // Рекурсивный поиск
  recursive?: boolean;
}

class Designable {
  findProperties(options: FindOptions): Schema[];
}
```

Пример поиска всех узлов, соответствующих условиям:

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

Поиск первого дочернего узла, соответствующего условиям.

```ts
interface FindOptions {
  // Условия фильтрации
  filter: any;
  // Элементы, которые нужно пропустить при поиске
  skipOn?: (s: Schema) => boolean;
  // Прекращение поиска при нахождении определённого элемента
  breakOn?: (s: Schema) => boolean;
  // Рекурсивный поиск
  recursive?: boolean;
}

class Designable {
  findProperty(options: FindOptions): Schema | null;
}
```

Пример:

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

### Изменение: Изменение параметров schema

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

### Удаление: Удаление текущего узла или определённого дочернего узла

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

### Перемещение: Перемещение между узлами

`insertAdjacent` и другие методы также могут использоваться для перемещения узлов с помощью перетаскивания.

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
        Блок {fieldSchema.name}{' '}
        <Draggable id={field.address.toString()} data={{ schema: fieldSchema }}>
          Перетащить
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
