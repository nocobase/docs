# スキーマ コンポーネントライブラリ

## ラッパーコンポーネント

- BlockItem
- FormItem
- CardItem

## レイアウト

- Page
- Grid
- Tabs
- Space

## フィールドコンポーネント

フィールドコンポーネントは一般的に単独では使用せず、データ表示コンポーネント内で利用されます。

- CollectionField：汎用コンポーネント
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

## データ表示コンポーネント

フィールドコンポーネントと組み合わせて使用する必要があります。

- Calendar
- Form
- Kanban
- Table
- TableV2

## 操作（onClick イベント型コンポーネント）

- Action
- Action.Drawer
- Action.Modal
- ActionBar：操作レイアウト用
- Menu

## その他

- G2plot
- Markdown.Void

## `x-designer` と `x-initializer` の使用シーン

`x-decorator` または `x-component` が以下のコンポーネントの場合、`x-designer` が有効になります：

- BlockItem
- CardItem
- FormItem
- Table.Column
- Tabs.TabPane

`x-decorator` または `x-component` が以下のコンポーネントの場合、`x-initializer` が有効になります：

- ActionBar
- BlockItem
- CardItem
- FormItem
- Grid
- Table
- Tabs

