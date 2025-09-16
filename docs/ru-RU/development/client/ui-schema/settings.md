# Настройки Schema

После активации конфигурации пользовательского интерфейса при наведении мыши на определённый блок, поле или действие отображается соответствующая панель инструментов Schema. Кнопка настроек на панели инструментов является компонентом настроек для текущей Schema.

![Alt text](https://static-docs.nocobase.com/3f37519ddd9ba1a99f1fdbfe32b4a454.png)

## Встроенные настройки

<img src="./image-4.png" />

## Добавление элементов настроек к существующим настройкам

Рекомендуется использовать метод `schemaSettingsManager.addItem()` для добавления элементов настроек. Для подробной конфигурации элементов обратитесь к [API элементов SchemaSettings](#).

```ts
class PluginDemoAddSchemaSettingsItem extends Plugin {
  async load() {
    this.schemaSettingsManager.addItem(
      'mySettings', // Пример существующих настроек Schema
      'customItem',
      {
        type: 'item',
        useComponentProps() {},
      },
    );
  }
}
```

<code src="./demos/schema-settings-manager-add-item/index.tsx"></code>

## Добавление новых настроек

Для подробных параметров SchemaSettings обратитесь к [API SchemaSettingsOptions](https://client.docs-cn.nocobase.com/core/ui-schema/schema-settings#new-schemasettingsoptions).

```ts
const mySettings = new SchemaSettings({
  // Должен быть уникальным идентификатором
  name: 'mySettings',
  // Элементы выпадающего меню
  items: [
    {
      name: 'edit',
      type: 'item',
      useComponentProps() {},
    },
  ],
});
```

### Добавление в методе load плагина

Рекомендуется использовать `schemaSettingsManager.add()` для добавления новых настроек в приложение.

```ts
class PluginDemoAddSchemaSettings extends Plugin {
  async load() {
    // Регистрация глобальных компонентов
    this.app.addComponents({ CardItem, HomePage });
    const mySettings = new SchemaSettings({
      name: 'mySettings',
      items: [
        {
          type: 'item',
          name: 'edit',
          useComponentProps() {
            // TODO: Добавить логику настроек
            return {
              title: 'Редактировать',
              onClick() {
                // todo
              },
            };
          },
        },
      ],
    });
    this.schemaSettingsManager.add(mySettings);
  }
}
```

### Как использовать добавленные настройки

Добавленные SchemaSettings можно использовать в параметре `x-settings` Schema. Не все компоненты поддерживают `x-settings`; обычно он используется в сочетании с обёрточными компонентами, такими как BlockItem, FormItem, CardItem. В пользовательских компонентах также можно использовать `useSchemaSettingsRender()` для независимой обработки рендеринга `x-settings`.

#### Компоненты Schema, поддерживающие `x-settings`

В большинстве случаев `x-settings` необходимо использовать в сочетании с обёрточными компонентами, такими как BlockItem, FormItem, CardItem. Например:

```ts
{
  type: 'void',
  'x-settings': 'mySettings',
  'x-decorator': 'CardItem',
  'x-component': 'Hello',
}
```

<code src="./demos/schema-settings-manager-add/index.tsx"></code>

#### Как поддерживать `x-settings` в пользовательских компонентах

Если обёрточные компоненты, такие как BlockItem, FormItem, CardItem, не удовлетворяют вашим потребностям, вы можете использовать `useSchemaSettingsRender()` для обработки рендеринга `x-settings`.

<code src="./demos/use-schema-settings-render/index.tsx"></code>

В большинстве случаев настройки размещаются на SchemaToolbar, поэтому поддержка `x-toolbar` для пользовательских компонентов также может косвенно поддерживать `x-settings`. Для получения дополнительных сведений об использовании обратитесь к [Панель инструментов Schema](/development/client/ui-schema/toolbar).

<code src="./demos/schema-toolbar-basic/button.tsx"></code>

## Как реализовать настройки Schema?

Используйте `useSchemaSettings()` для получения `Designable` текущей Schema и управляйте ей через `Designable`. Общие API включают:

- `dn.insertAdjacent()`
- `dn.getSchemaAttribute()`
- `dn.shallowMerge()`
- `dn.deepMerge()`
- `dn.findOne()`
- `dn.find()`
- `dn.remove()`
- `dn.remove()`

Для получения дополнительных сведений обратитесь к:

- [Дизайнер Designable](/development/client/ui-schema/designable)
- [API Designable](https://client.docs-cn.nocobase.com/core/ui-schema/designable)

<code src="./demos/schema-settings-basic/index.tsx"></code>

## Справочник API

- [SchemaSettingsManager](https://client.docs-cn.nocobase.com/core/ui-schema/schema-settings-manager)
- [SchemaSettings](https://client.docs-cn.nocobase.com/core/ui-schema/schema-settings)
- [Designable](https://client.docs-cn.nocobase.com/core/ui-schema/designable)
