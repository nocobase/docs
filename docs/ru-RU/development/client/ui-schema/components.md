# Schema components

## Wrapper Components

- BlockItem
- FormItem
- CardItem

## Layout

- Page
- Grid
- Tabs
- Space

## Field Components

Field components are generally not used alone but are utilized within data display components.

- CollectionField: Universal component
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

## Data Display Components

These need to be used in conjunction with field components.

- Calendar
- Form
- Kanban
- Table
- TableV2

## Actions (onClick Event Components)

- Action
- Action.Drawer
- Action.Modal
- ActionBar: Used for action layout
- Menu

## Others

- G2plot
- Markdown.Void

## Use Cases of `x-designer` and `x-initializer`

`x-designer` is effective when `x-decorator` or `x-component` is one of the following components:

- BlockItem
- CardItem
- FormItem
- Table.Column
- Tabs.TabPane

`x-initializer` is effective when `x-decorator` or `x-component` is one of the following components:

- ActionBar
- BlockItem
- CardItem
- FormItem
- Grid
- Table
- Tabs
