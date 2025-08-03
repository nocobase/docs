# Schema Initializer

После активации конфигурации пользовательского интерфейса различные видимые оранжевые кнопки на интерфейсе представляют собой schema initializers, используемые для добавления различных блоков, полей, действий и т.д. в интерфейс.

<img src="./image-5.png" style="width: 960px;">

## Встроенные initializers

<img src="./image-3.png" style="width: 960px;"/>

## Добавление элементов в существующие initializers

Рекомендуется использовать метод [`schemaInitializerManager.addItem()`](#) для добавления элементов. Для подробной конфигурации элементов обратитесь к [SchemaInitializer Item API](#).

```ts
class PluginDemoAddSchemaInitializerItem extends Plugin {
  async load() {
    this.schemaInitializerManager.addItem(
      'myInitializer', // Пример существующего schema initializer
      'otherBlocks.custom', // Добавление custom в группу otherBlocks
      {
        type: 'item',
        useComponentProps() {},
      },
    );
  }
}
```

<!-- <code src="./demos/schema-initializer-manager-add-item/index.tsx"></code> -->

## Добавление новых initializers

Для подробных параметров SchemaInitializer обратитесь к [SchemaInitializerOptions API](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer#new-schemainitializeroptions).

```ts
const myInitializer = new SchemaInitializer({
  // Уникальный идентификатор для initializer
  name: 'myInitializer',
  title: 'Добавить блок',
  // Обёртка, например, вставка в Grid требует использования Grid.wrap (добавляет теги строки и столбца)
  wrap: Grid.wrap,
  // Позиция вставки, по умолчанию beforeEnd, поддерживает 'beforeBegin' | 'afterBegin' | 'beforeEnd' | 'afterEnd'
  insertPosition: 'beforeEnd',
  // Элементы выпадающего меню
  items: [
    {
      name: 'a',
      type: 'item',
      useComponentProps() {},
    },
  ],
});
```

### Регистрация в методе load плагина

Рекомендуется использовать `schemaInitializerManager.add()` для добавления нового initializer в приложение.

```ts
class PluginDemoAddSchemaInitializer extends Plugin {
  async load() {
    const myInitializer = new SchemaInitializer({
      name: 'myInitializer',
      title: 'Добавить блок',
      wrap: Grid.wrap,
      items: [
        {
          name: 'helloBlock',
          type: 'item',
          useComponentProps() {
            const { insert } = useSchemaInitializer();
            return {
              title: 'Привет',
              onClick: () => {
                insert({
                  type: 'void',
                  'x-decorator': 'CardItem',
                  'x-component': 'h1',
                  'x-content': 'Привет, мир!',
                });
              },
            };
          },
        },
      ],
    });
    this.schemaInitializerManager.add(myInitializer);
  }
}
```

### Как использовать добавленный initializer

SchemaInitializer используется в параметре `x-initializer` schema.

#### Компоненты schema, поддерживающие `x-initializer`

Общие компоненты schema, поддерживающие `x-initializer`, включают Grid, ActionBar, Tabs. Например:

```ts
{
  type: 'void',
  'x-component': 'Grid',
  'x-initializer': 'myInitializer',
}
```

<code src="./demos/schema-initializer-manager-add/index.tsx"></code>

#### Как поддерживать `x-initializer` в пользовательских компонентах

Если Grid, ActionBar, Tabs и подобные компоненты не удовлетворяют вашим потребностям, вы можете использовать [useSchemaInitializerRender()](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer#useschemainitializerrender) для обработки рендеринга `x-initializer` в пользовательских компонентах.

<code src="./demos/use-schema-initializer-render/index.tsx"></code>

## Справочник API

- [SchemaInitializerManager](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer-manager)
- [SchemaInitializer](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer)
