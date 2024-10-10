# 既存のSchemaSettingsに子項目を追加する

## シナリオ説明

実際の開発において、ブロック、操作、フィールドにはいくつかの属性を設定する必要がありますが、既存の設定が必ずしもニーズを満たすわけではありません。そのため、ニーズに応じて新しい設定項目を追加する必要があります。

## 例の説明

現在、Tableブロックの設定項目には `showIndex` 属性が存在しないため、序号の表示を制御するために `showIndex` 属性を追加する必要があります。

本例は主にSchemaSettingsの使用方法を示すものであり、ブロックの拡張については[ブロック拡張](/plugin-samples/block)のドキュメントを参照してください。

この文書の完全なサンプルコードは[plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-schema-settings-add-item)で確認できます。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240601161535_rec_.mp4" type="video/mp4" />
</video>

## プラグインの初期化

[最初のプラグインの作成](/development/your-fisrt-plugin)のドキュメントに従い、プロジェクトがない場合はまずプロジェクトを作成します。すでにあるか、クローンしたコードがある場合はこの手順をスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-schema-settings-add-item
yarn pm enable @nocobase-sample/plugin-schema-settings-add-item
```

その後、プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/)にアクセスすると、プラグインがインストールされ、有効になっていることが確認できます。

## 機能の実現

この例を実現する前に、いくつかの基本知識を理解しておく必要があります：

- [SchemaSettings チュートリアル](/development/client/ui-schema/settings)：ブロック、フィールド、操作などの属性を設定するために使用します。
- [SchemaSettings API](https://client.docs.nocobase.com/core/ui-schema/schema-settings)：ブロック、フィールド、操作などの属性を設定するために使用します。
- [UI Schema プロトコル](/development/client/ui-schema/what-is-ui-schema)：Schemaの構造と各属性の役割について詳しく説明しています。
- [Designable デザイナー](/development/client/ui-schema/designable)：Schemaを変更するために使用します。
- [TableV2](https://client.docs.nocobase.com/components/table-v2)：Tableブロックのドキュメントです。

既存のブロック、フィールド、操作などに新しい設定項目を追加するには、次の3つの前提条件があります：

- コンポーネントが新しい設定をサポートする必要があります。
- Schemaを正しく設定する必要があります。
- Schemaの属性がコンポーネントに渡される必要があります。

本例では、Tableブロックに `showIndex` 属性を追加し、序号の表示を制御します。

- まず、[TableV2](https://client.docs.nocobase.com/components/table-v2)ブロックが `showIndex` 属性をサポートしているかを確認します。文書を通じて、Tableブロックが `showIndex` 属性をサポートしていることがわかります。
- 次に、[Table Block Schema](https://client.docs.nocobase.com/ui-schema/blocks/data/table)内の`TableV2`コンポーネントの属性の格納位置を確認します。文書によれば、`x-decorator-props`に格納されています。
- 最後に、`showIndex` 属性の値が `TableV2` コンポーネントに渡されるかを確認します。文書によれば、`showIndex` 属性は `useTableBlockProps`を介して `TableV2` コンポーネントに渡されます。

### 1. SchemaSettingsItemの定義

`packages/plugins/@nocobase-sample/plugin-schema-settings-add-item/src/client/tableShowIndexSettingsItem.tsx` ファイルを新規作成します：

```ts
import { SchemaSettingsItemType, useDesignable } from '@nocobase/client';
import { useFieldSchema } from '@formily/react';

export const tableShowIndexSettingsItem: SchemaSettingsItemType = {
  name: 'showIndex',
  type: 'switch',
  useComponentProps() {
    return {};
  },
};
```

`showIndex` の設定項目を定義し、タイプを `switch` としました。

- `name`：設定項目の名前で、CRUD操作に使用されます。
- `type`：設定項目のタイプで、異なるコンポーネントをレンダリングします。その他のタイプについては、[SchemaSettings API](https://client.docs.nocobase.com/core/ui-schema/schema-settings#built-in-components-and-types)を参照してください。
- `useComponentProps`：コンポーネントの属性を設定するために使用します。

### 2. Schemaの変更

```diff
import { SchemaSettingsItemType, useDesignable } from '@nocobase/client';
import { useFieldSchema } from '@formily/react';

export const tableShowIndexSettingsItem: SchemaSettingsItemType = {
  name: 'showIndex',
  type: 'switch',
  useComponentProps() {
+   const fieldSchema = useFieldSchema();
+   const dn = useDesignable();
+   return {
+     title: 'インデックスを表示',
+     checked: !!fieldSchema['x-decorator-props'].showIndex,
+     onChange(v: boolean) {
+       dn.deepMerge({
+         'x-uid': fieldSchema['x-uid'],
+         'x-decorator-props': {
+           ...fieldSchema['x-decorator-props'],
+           showIndex: v,
+         },
+       });
+     },
+   };
  },
};
```

Hooks：

- [useFieldSchema](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema)：現在のフィールドのスキーマを取得するために使用します。
- [useDesignable](https://client.docs.nocobase.com/core/ui-schema/designable#usedesignable)：スキーマを変更するために使用します。

Props：

- `title`：スイッチコンポーネントのタイトル
- `checked`：スイッチコンポーネントの選択状態。`fieldSchema['x-decorator-props'].showIndex`を通じて取得します。具体的には、[テーブルブロックスキーマ](https://client.docs.nocobase.com/ui-schema/blocks/data/table)を参照してください。
- `onChange`：スイッチコンポーネントの値変更イベント。`dn.deepMerge`を使用してスキーマを変更します。

`dn.deepMerge`：スキーマを変更するために使用します。

- `x-uid`：フィールドの一意の識別子。サーバー側のクエリと変更に使用されます。
- `x-decorator-props`：フィールドの属性。コンポーネントの属性を設定するために使用されます。

### 3. スキーマ設定アイテムの登録

`packages/plugins/@nocobase-sample/plugin-schema-settings-add-item/src/client/index.ts`ファイルを修正します：

```ts
import { Plugin } from '@nocobase/client';
import { tableShowIndexSettingsItem } from './tableShowIndexSettingsItem'

export class PluginSchemaSettingsAddItemClient extends Plugin {
  async load() {
    this.schemaSettingsManager.addItem('blockSettings:table', tableShowIndexSettingsItem.name, tableShowIndexSettingsItem)
  }
}

export default PluginSchemaSettingsAddItemClient;
```

これで、テーブルブロックの設定項目に`インデックスを表示`の設定項目が追加されていることが確認できます。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240601161535_rec_.mp4" type="video/mp4" />
</video>

## パッケージ化と本番環境へのアップロード

[プラグインのビルドとパッケージ化](/development/your-fisrt-plugin#構建並打包插件)に従って、プラグインをパッケージ化して本番環境にアップロードできます。

ソースコードをクローンした場合は、依存関係もビルドするためにフルビルドを一度実行する必要があります。

```bash
yarn build
```

`create-nocobase-app`で作成したプロジェクトの場合は、直接実行できます：

```bash
yarn build nocobase-sample/plugin-schema-settings-add-item --tar
```

これで、`storage/tar/nocobase-sample/plugin-schema-settings-add-item.tar.gz`ファイルが生成され、[アップロードの方法](/welcome/getting-started/plugin)でインストールできます。

