# **Компоненты схемы (Schema components)**

# **Обёрточные компоненты**

- BlockItem
- FormItem
- CardItem

## **Макет (Layout)**

- Page
- Grid
- Tabs
- Space

## **Компоненты полей**

Компоненты полей, как правило, не используются отдельно, а применяются внутри компонентов отображения данных.

- CollectionField: универсальный компонент
- Cascader
- Checkbox
- ColorSelect
- DatePicker
- Filter
- Formula
- IconPicker
- Input
- InputNumber
- Markdown
- Password
- Percent
- Radio
- RecordPicker
- RichText
- Select
- TimePicker
- TreeSelect
- Upload

## **Компоненты отображения данных**

Используются совместно с компонентами полей.

- Calendar
- Form
- Kanban
- Table
- TableV2

## **Действия (компоненты с событием onClick)**

- Action
- Action.Drawer
- Action.Modal
- ActionBar: используется для компоновки действий
- Menu

## **Прочие**

- G2plot
- Markdown.Void

## **Сценарии использования `x-designer` и `x-initializer`**

`x-designer` действует, когда `x-decorator` или `x-component` является одним из следующих компонентов:

- BlockItem
- CardItem
- FormItem
- Table.Column
- Tabs.TabPane

`x-initializer` действует, когда `x-decorator` или `x-component` является одним из следующих компонентов:

- ActionBar
- BlockItem
- CardItem
- FormItem
- Grid
- Table
- Tabs
