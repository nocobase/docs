# Панель инструментов схемы

После активации конфигурации пользовательского интерфейса при наведении мыши на указанный блок, поле или действие появляется панель инструментов, соответствующая схеме.

![Alt text](https://static-docs.nocobase.com/e6d327da8e85d6548529e1051d06c31a.png)

Панель инструментов состоит из:

- Заголовок, по умолчанию пустой
- Элемент управления перетаскиванием, обеспечивает возможность перетаскивания, по умолчанию включено
- Инициализатор, по умолчанию пустой
- Настройки, по умолчанию пустые

```tsx | pure
<SchemaToolbar
  title="Заголовок"
  draggable
  initialize={'myInitializer'}
  settings={'mySettings'}
/>
```

## Использование

Компонент SchemaToolbar используется в `x-toolbar`, например:

```ts
// Использование встроенного SchemaToolbar
{
  'x-toolbar': 'SchemaToolbar',
  'x-toolbar-props': {},
}
// Пользовательский SchemaToolbar
{
  'x-toolbar': 'MySchemaToolbar',
  'x-toolbar-props': {},
}
```

## Компоненты схемы, поддерживающие `x-toolbar`

- `BlockItem` (обёрточный компонент, обычно используется в `x-decorator`)
- `CardItem` (обёрточный компонент, обычно используется в `x-decorator`)
- `FormItem` (обёрточный компонент, обычно используется в `x-decorator`)
- `Action` (компонент кнопки действия, используется в `x-component`)

Если `x-component` или `x-decorator` схемы используют вышеуказанные компоненты и настроен `x-settings`, то `x-toolbar` можно опустить, и по умолчанию будет использоваться встроенный `SchemaToolbar`.

<code src="./demos/schema-toolbar-basic/index.tsx"></code>

Также можно настроить пользовательский компонент панели инструментов.

<code src="./demos/schema-toolbar-basic/custom.tsx"></code>

При использовании в макете Grid схемы внутри строк и столбцов наследуют `x-initializer` от Grid.

<code src="./demos/schema-toolbar-basic/grid.tsx"></code>

## Поддержка `x-toolbar` для пользовательских компонентов

<code src="./demos/schema-toolbar-basic/button.tsx"></code>
