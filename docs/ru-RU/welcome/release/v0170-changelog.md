# Версия 0.17: 2023-12-04

## Новые возможности

Чтобы сократить затраты на обучение разработчиков и повысить качество разработки интерфейса, за последние несколько месяцев мы провели поэтапную реконструкцию ядра интерфейса, включая:

![20240115141058](https://static-docs.nocobase.com/20240115141058.png)

На этот раз в версии 0.17 был переработан конструктор схем пользовательского интерфейса, связанный с инициализатором схем и настройками схем.

![20240115141118](https://static-docs.nocobase.com/20240115141118.png)

![20240115141129](https://static-docs.nocobase.com/20240115141129.png)

Чтобы пользователям было проще приступить к работе, мы также реорганизовали различные разделы документации:

- [Разработка плагинов](https://docs.nocobase.com/development) (полностью переработан и опубликован)
- [Ссылка на API / клиент](https://client.docs.nocobase.com/core/application/application) (новый раздел, уже опубликован)
- Руководство пользователя (полностью переработанное, будет выпущено в ближайшие одну-две недели)
- Список плагинов (новый раздел, включающий введение, инструкции по использованию и разработке расширений для всех существующих плагинов, будет выпущен в ближайшие одну-две недели)

## Несовместимые изменения

### Изменения в SchemaInitializer

- Добавлен `SchemaInitializerManager` для регистрации `SchemaInitializer`
- Добавлен `useSchemaInitializerRender()`, чтобы заменить исходный `useSchemaInitializer()` на `render()`.
- Добавлен компонент `useSchemaInitializerItem()` для получения контекста текущего элемента инициализации
- Добавлен компонент `SchemaInitializerItemGroup` в качестве компонента по умолчанию для `type: `ItemGroup``.
- Добавлен компонент `SchemaInitializerSubMenu` в качестве компонента по умолчанию для подменю `type: `
- Добавлен компонент `SchemaInitializerDivider` в качестве компонента по умолчанию для разделителя `type: `
- Добавлен компонент `SchemaInitializerChildren` для пользовательского отображения нескольких элементов списка
- Добавлен компонент `Schemainitializerchildren` для пользовательского отображения одного элемента списка
- Изменены обязанности `SchemaInitializerContext` по сохранению контекста текущего инициализатора
- Изменены обязанности `useSchemaInitializer()` по получению контекста текущего инициализатора.
- Изменен `function SchemaInitializer` на `class SchemaInitializer` для определения инициализатора
- Изменены параметры `SchemaInitializer`
- Добавлен обязательный параметр `name` для значения `x-initializer`
  - Добавлен параметр `Component` для пользовательского отображения кнопки. По умолчанию используется `SchemaInitializerButton`.
  - Добавлены `componentProps`, `style` для настройки свойств и стиля `Component`
  - Добавлен параметр `ItemsComponent` для пользовательского отображения списка. По умолчанию используется `SchemaInitializerItems`.
  - Добавлены `itemsComponentProps`, `itemsComponentStyle` для настройки свойств и стиля `ItemsComponent`
  - Добавлен параметр `popover` для настройки отображения эффекта `popover`.
  - Добавлен параметр `useInsert` для случаев, когда функция `insert` должна использовать перехватчики
  - Изменен параметр `dropdown` на `popoverProps`, используя `Popover` вместо `Dropdown`
- Изменены параметры `items` для `SchemaInitializer`
- Добавлена функция `useChildren` для динамического управления дочерними элементами
  - Добавлена функция `componentProps` для управления свойствами самого компонента
  - Добавлена функция `useComponentProps` для динамической обработки реквизитов компонента
  - Изменен параметр `key` на `name` для уникальной идентификации элементов списка
  - Изменен параметр `visible` на `useVisible` для функции динамического управления отображением
  - Изменен параметр `component` на `Component` для отображения элементов списка
- Изменено значение `SchemaInitializer.Кнопка` на `SchemaInitializerButton`, значение по умолчанию для параметра компонента SchemaInitializer
- Изменено значение `SchemaInitializer.Элемент` на `SchemaInitializerItem` с неизменными параметрами.
- Изменен `SchemaInitializer.ActionModal` на `SchemaInitializerActionModal` с неизменными параметрами
- Изменен `SchemaInitializer.SwitchItem` на `SchemaInitializer.Switch` с неизменными параметрами
- Удален `SchemaInitializerProvider`, заменен на `SchemaInitializerManager`
- Удален `SchemaInitializer.itemWrap`, больше не нужно обертывать компонент `item`

### Изменения в настройках схемы

- Добавлен `SchemaSettingsManager` для регистрации `SchemaSettings`
- Добавлен `useSchemaSettingsItem()`
- Добавлен `useSchemaSettingsRender()`
- Добавлен параметр `x-settings` для настройки параметров схемы
- Добавлен параметр `x-toolbar` для настройки панели инструментов схемы
- Добавлен компонент `SchemaToolbar` для настройки панели инструментов схемы
- Добавлен `useSchemaToolbarRender()` вместо исходного `useDesigner()`.
- Изменены `настройки функций` на `настройки классов` для определения параметров
- Изменены исходные `Настройки схем` на `Настройки выпадающего списка`
- Изменено `SchemaSettings.Item` на `SchemaSettingsItem`
- Изменено `SchemaSettings.ItemGroup` на `SchemaSettingsItemGroup`
- Изменено `SchemaSettings.SubMenu` на `SchemaSettingsSubMenu`
- Изменено `SchemaSettings.Divider` на `SchemaSettingsDivider`
- Изменено `SchemaSettings.Remove` на `SchemaSettingsRemove`
- Изменено `SchemaSettings.SelectItem` на `SchemaSettingsSelectItem`
- Изменено `SchemaSettings.CascaderItem` на `SchemaSettingsCascaderItem`
- Изменено `SchemaSettings.SwitchItem` на `SchemaSettingsSwitchItem`
- Изменено `SchemaSettings.ModalItem` на `SchemaSettingsModalItem`
- Изменено `SchemaSettings.ActionModalItem` на `SchemaSettingsActionModalItem`
- Удалён параметр `x-designer` (устарел, будет удалён в будущем, используйте `x-toolbar`)
- Удалён хук `useDesigner()` (устарел, будет удалён в будущем, используйте `useSchemaToolbarRender()`)

Подробнее см. [Критические изменения в NocoBase 0.17](https://docs.nocobase.com/welcome/release/upgrade-to/v017)

