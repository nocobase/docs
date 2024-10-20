# クイックスタート

## 1. スキーマコンポーネントの作成

`x-component` を設定して、登録済みのコンポーネントをレンダリングします。

関連情報：

- [UIスキーマプロトコル](/development/client/ui-schema/what-is-ui-schema)
- [スキーマレンダリング](/development/client/ui-schema/rendering)
- [スキーマコンポーネントの拡張](/development/client/ui-schema/extending)

<code src="./demos/demo1.tsx"></code>

## 2. スキーマコンポーネントをページに追加する

`x-initializer` を設定して、新しいコンポーネントを既存のスキーマの隣接位置に挿入します。

関連情報：

- [デザイナブルデザイナー](/development/client/ui-schema/designable)
- [UIスキーマプロトコル - x-initializerパラメータ](/development/client/ui-schema/what-is-ui-schema#x-initializer)
- [SchemaInitializerイニシャライザー](/development/client/ui-schema/initializer)

<code src="./demos/demo2.tsx"></code>

## 3. スキーマにデザイナーツールバーを追加する

`x-settings` を設定して、スキーマコンポーネントにパラメータ設定機能を提供します。デザイナーツールバーはデフォルトでドラッグアンドドロップ機能が有効になっています。

関連情報：

- [UIスキーマプロトコル - x-settingsパラメータ](/development/client/ui-schema/what-is-ui-schema#x-settings)
- [SchemaSettingsセッター](/development/client/ui-schema/settings)
- [既存スキーマノードのドラッグ移動](/development/client/ui-schema/designable#move-between-nodes)

<code src="./demos/demo3.tsx"></code>

