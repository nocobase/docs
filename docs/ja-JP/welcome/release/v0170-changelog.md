# v0.17：2023-12-04

v0.17では、全く新しいSchemaInitializerとSchemaSettingsを提供します。

## 新機能

開発の学習コストを低減し、より良いフロントエンド開発体験を提供するために、過去数ヶ月間にわたりフロントエンドコアを段階的に再構築しました。これには以下が含まれます：

![20240115141058](https://static-docs.nocobase.com/20240115141058.png)

今回のv0.17では、UI Schemaデザイナーに関連するSchemaInitializerとSchemaSettingsを再構築しました。

![20240115141118](https://static-docs.nocobase.com/20240115141118.png)

![20240115141129](https://static-docs.nocobase.com/20240115141129.png)

ユーザーがすぐに使えるよう、各部分の文書も見直しました。

- [プラグイン開発](https://docs-cn.nocobase.com/development)（全面改訂、公開済み）
- [APIリファレンス / クライアント](https://client.docs-nocobase.com/core/application/application)（新セクション、公開済み）
- 使用マニュアル（全面改訂、今後1、2週間以内に公開予定）
- プラグイン一覧（新セクション、すべての既存プラグインの紹介、使用および拡張開発に関する説明を含む、今後1、2週間以内に公開予定）

## 非互換の変更

### SchemaInitializerの変更

- `SchemaInitializerManager`を新規追加し、`SchemaInitializer`を登録します。
- 元の`useSchemaInitializer()`の`render()`を置き換えるために、`useSchemaInitializerRender()`を新規追加します。
- 現在の初期化項目のコンテキストを取得するために、`useSchemaInitializerItem()`を新規追加します。
- `type: 'itemGroup'`のデフォルトコンポーネントとして、`SchemaInitializerItemGroup`コンポーネントを新規追加します。
- `type: 'subMenu'`のデフォルトコンポーネントとして、`SchemaInitializerSubMenu`コンポーネントを新規追加します。
- `type: 'divider'`のデフォルトコンポーネントとして、`SchemaInitializerDivider`コンポーネントを新規追加します。
- 複数のリスト項目をカスタムレンダリングするために、`SchemaInitializerChildren`コンポーネントを新規追加します。
- 単一のリスト項目をカスタムレンダリングするために、`SchemaInitializerChild`コンポーネントを新規追加します。
- `SchemaInitializerContext`の責任を変更し、現在の初期化器のコンテキストを保存します。
- `useSchemaInitializer()`の責任を変更し、現在の初期化器のコンテキストを取得します。
- `function SchemaInitializer`を`class SchemaInitializer`に変更し、初期化器を定義します。
- `SchemaInitializer`のパラメータを変更します。
  - `x-initializer`の値として必須の`name`パラメータを新規追加します。
  - カスタムレンダリングボタン用の`Component`パラメータを新規追加し、デフォルトは`SchemaInitializerButton`です。
  - `Component`の属性とスタイルを設定するための`componentProps`および`style`を新規追加します。
  - カスタムレンダリングリスト用の`ItemsComponent`パラメータを新規追加し、デフォルトは`SchemaInitializerItems`です。
  - `ItemsComponent`の属性とスタイルを設定するための`itemsComponentProps`および`itemsComponentStyle`を新規追加します。
  - `popover`効果を表示するかどうかを設定するための`popover`パラメータを新規追加します。
  - `insert`関数がhooksを使用する必要がある場合のために、`useInsert`パラメータを新規追加します。
  - `dropdown`パラメータを`popoverProps`に変更し、`Dropdown`の代わりに`Popover`を使用します。
- `SchemaInitializer`の`items`パラメータを変更します。
  - 子項目を動的に制御するための`useChildren`関数を新規追加します。
  - コンポーネント自身の属性用の`componentProps`関数を新規追加します。
  - コンポーネントのpropsを動的に処理するための`useComponentProps`関数を新規追加します。
  - リスト項目の一意の識別子として`key`パラメータを`name`に変更します。
  - 表示を動的に制御するために、`visible`パラメータを`useVisible`関数に変更します。
  - リスト項目のレンダリング用に、`component`パラメータを`Component`に変更します。
- `SchemaInitializer.Button`を`SchemaInitializerButton`に変更し、`SchemaInitializer`のComponentパラメータのデフォルト値とします。
- `SchemaInitializer.Item`を`SchemaInitializerItem`に変更し、パラメータはそのままです。
- `SchemaInitializer.ActionModal`を`SchemaInitializerActionModal`に変更し、パラメータはそのままです。
- `SchemaInitializer.SwitchItem`を`SchemaInitializer.Switch`に変更し、パラメータはそのままです。
- `SchemaInitializerProvider`を削除し、`SchemaInitializerManager`に置き換えます。
- `SchemaInitializer.itemWrap`を削除し、`item`コンポーネントを包む必要はなくなります。

### SchemaSettingsの変更

- `SchemaSettingsManager`を追加し、`SchemaSettings`を登録するために使用します。
- `useSchemaSettingsItem()`を追加しました。
- `useSchemaSettingsRender()`を追加しました。
- スキーマの設定を構成するための`x-settings`パラメータを追加しました。
- スキーマのツールバーを構成するための`x-toolbar`パラメータを追加しました。
- スキーマのツールバーをカスタマイズするための`SchemaToolbar`コンポーネントを追加しました。
- 以前の`useDesigner()`の代わりに`useSchemaToolbarRender()`を追加しました。
- `function SchemaSettings`を`class SchemaSettings`に変更し、設定器を定義します。
- 以前の`SchemaSettings`を`SchemaSettingsDropdown`に変更しました。
- `SchemaSettings.Item`を`SchemaSettingsItem`に変更しました。
- `SchemaSettings.ItemGroup`を`SchemaSettingsItemGroup`に変更しました。
- `SchemaSettings.SubMenu`を`SchemaSettingsSubMenu`に変更しました。
- `SchemaSettings.Divider`を`SchemaSettingsDivider`に変更しました。
- `SchemaSettings.Remove`を`SchemaSettingsRemove`に変更しました。
- `SchemaSettings.SelectItem`を`SchemaSettingsSelectItem`に変更しました。
- `SchemaSettings.CascaderItem`を`SchemaSettingsCascaderItem`に変更しました。
- `SchemaSettings.SwitchItem`を`SchemaSettingsSwitchItem`に変更しました。
- `SchemaSettings.ModalItem`を`SchemaSettingsModalItem`に変更しました。
- `SchemaSettings.ActionModalItem`を`SchemaSettingsActionModalItem`に変更しました。
- `x-designer`パラメータは廃止され、将来的には削除される予定ですので、`x-toolbar`を代わりに使用してください。
- `useDesigner()`は廃止され、今後削除される予定ですので、`useSchemaToolbarRender()`を代わりに使用してください。

詳細については、[NocoBase 0.17 の非互換性の変更](https://docs-cn.nocobase.com/welcome/release/upgrade-to/v017)をご覧ください。

