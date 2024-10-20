# ポップアップアクションの追加

## シーンの説明

NocoBaseには、インターフェースに操作ボタンを追加するための多くの「Configure actions」が用意されています。

![img_v3_02b4_51f4918f-d344-43b2-b19e-48dca709467g](https://static-docs.nocobase.com/img_v3_02b4_51f4918f-d344-43b2-b19e-48dca709467g.jpg)

現在の操作ボタンが必ずしも私たちのニーズを満たさない場合、既存の「Configure actions」に子項目を追加して新しい操作ボタンを作成する必要があります。

## 例の説明

この例では、ボタンを作成し、クリックするとポップアップが開き、その内容はiframeで埋め込まれたブロックのドキュメントとなります。このボタンを「Table」、「Details」、および「Form」ブロックの「Configure actions」に追加します。

この文書の完全なサンプルコードは、[plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-action-modal)で確認できます。

<video controls width='100%' src="https://static-docs.nocobase.com/20240526172851_rec_.mp4"></video>

## プラグインの初期化

[最初のプラグインを書く](/development/your-fisrt-plugin)の文書に従って、プロジェクトがない場合は新しく作成し、すでにある場合やクローンしたソースコードがある場合はこのステップをスキップします。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-initializer-action-modal
yarn pm enable @nocobase-sample/plugin-initializer-action-modal
```

その後、プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/)にアクセスすると、プラグインがインストールされ有効になっていることが確認できます。

## 機能の実現

この例を実現する前に、いくつかの基礎知識を理解する必要があります：

- [Actionコンポーネント](https://client.docs.nocobase.com/components/action)
- [SchemaInitializerチュートリアル](/development/client/ui-schema/initializer)：インターフェースにさまざまなブロックやフィールド、操作を追加するために使用
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：インターフェースにさまざまなブロックやフィールド、操作を追加するために使用
- [UI Schema](/development/client/ui-schema/what-is-ui-schema)：インターフェースの構造とスタイルを定義
- [Designableデザイナー](/development/client/ui-schema/designable)：Schemaを変更するために使用

```bash
.
├── client # クライアントプラグイン
│   ├── initializer # 初期化器
│   ├── index.tsx # クライアントプラグインエントリ
│   ├── locale.ts # 多言語ツール関数
│   ├── constants.ts # 定数
│   ├── schema # Schema
│   └── settings # Schema設定
├── locale # 多言語ファイル
│   ├── en-US.json # 英語
│   └── zh-CN.json # 中国語
├── index.ts # サーバープラグインエントリ
└── server # サーバープラグイン
```

### 1. 名前の定義

まず、操作の名前を定義する必要があります。これは各所で使用されます。

`packages/plugins/@nocobase-sample/plugin-initializer-action-modal/src/client/constants.ts`を新たに作成します：

```ts
export const ActionName = 'ドキュメントを開く';
export const ActionNameLowercase = 'open-document';
```

### 2. Schemaの定義

#### 2.1 Schemaの定義

NocoBaseの動的ページはすべてSchemaを通じてレンダリングされるため、インターフェースに追加するためのSchemaを定義する必要があります。このセクションを実装する前に、いくつかの基礎知識を理解する必要があります：

- [Actionコンポーネント](https://client.docs.nocobase.com/components/action)
- [Action.Drawerコンポーネント](https://client.docs.nocobase.com/components/action#actiondrawer)
- [UI Schemaプロトコル](/development/client/ui-schema/what-is-ui-schema)：Schemaの構造と各属性の役割について詳細に説明

`packages/plugins/@nocobase-sample/plugin-initializer-action-modal/src/client/schema/index.ts`ファイルを新たに追加し、その内容は次のようになります：

```ts
import { ISchema } from "@nocobase/client";
import { tStr } from "../locale";
import { ActionName } from "../constants";

export const createDocumentActionModalSchema = (blockComponent: string): ISchema => {
  return {
    type: 'void',
    'x-component': 'Action',
    title: tStr(ActionName),
    'x-component-props': {
      type: 'primary'
    },
    properties: {
      drawer: {
        type: 'void',
        'x-component': 'Action.Drawer',
        'x-component-props': {
          size: 'large'
        },
        properties: {
          iframe: {
            type: 'void',
            'x-component': 'iframe',
            'x-component-props': {
              src: `https://client.docs.nocobase.com/components/${blockComponent}`,
              style: {
                border: 'none',
                width: '100%',
                height: '100%'
              }
            },
          }
        }
      },
    },
  }
}
```

`createDocumentActionModalSchema` コンポーネントは、`blockComponent` パラメータを受け取り、ボタンをインターフェースに追加するためのスキーマを返します。ボタンをクリックするとポップアップが開き、その内容は iframe であり、src はブロックのドキュメントとなります。

`createDocumentActionModalSchema`：
- `type`：タイプ、ここでは `void`、純粋な UI コンポーネントを示します。
- `x-component: 'Action'`：[Action コンポーネント](https://client.docs.nocobase.com/components/action) はボタンを生成するために使用されます。
- `title: 'ドキュメントを開く'`：ボタンのタイトル
- `properties`：子ノード
  - ['x-component': 'Action.Drawer'](https://client.docs.nocobase.com/components/action#actiondrawer)：Action.Drawer コンポーネント

スキーマについての詳細は [UI Schema](/development/client/ui-schema/what-is-ui-schema) ドキュメントをご覧ください。

#### 2.2 スキーマの検証

スキーマの検証方法は 2 種類あります：

- 一時ページ検証：一時的にページを作成し、スキーマをレンダリングして要件を満たすか確認します。
- ドキュメント例検証：ドキュメント `yarn doc plugins/@nocobase-sample/plugin-initializer-action-modal` を起動し、ドキュメントの例を記述することで要件を満たすか検証します（TODO）。

ここでは `一時ページ検証` の例を示します。新しいページを作成し、プロパティパラメータに基づいて一つまたは複数の例を追加し、要件を満たすか確認します。

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { createDocumentActionModalSchema } from './schema';

export class PluginInitializerActionModalClient extends Plugin {
  async load() {
    this.app.router.add('admin.open-document-schema', {
      path: '/admin/open-document-schema',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test1: createDocumentActionModalSchema('table-v2') } }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test2: createDocumentActionModalSchema('details') } }} />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerActionModalClient;
```

次に、[http://localhost:13000/admin/open-document-schema](http://localhost:13000/admin/open-document-schema) にアクセスすると、追加した一時ページが表示されます。

`SchemaComponent` の詳細については [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) ドキュメントをご覧ください。

<video controls width='100%' src="https://static-docs.nocobase.com/20240526171945_rec_.mp4"></video>

検証が完了したら、テストページを削除する必要があります。

### 3. スキーマイニシャライザーアイテムの定義

`packages/plugins/@nocobase-sample/plugin-initializer-action-modal/src/client/initializer/index.ts` ファイルを新たに作成します：

```ts
import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";
import { useT } from "../locale";
import { createDocumentActionModalSchema } from '../schema';
import { ActionName, ActionNameLowercase } from "../constants";

export const createDocumentActionModalInitializerItem = (blockComponent: string): SchemaInitializerItemType => ({
  type: 'item',
  title: ActionName,
  name: ActionNameLowercase,
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(ActionName),
      onClick: () => {
        insert(createDocumentActionModalSchema(blockComponent));
      },
    };
  },
})
```

異なる `blockComponent` に基づいて異なる `DocumentActionModal` を生成する必要があるため、対応する Schema Initializer Item を生成する `createDocumentActionModalInitializerItem` 関数を定義しました。

- `type`：タイプで、ここでは `item` であり、クリックイベントを持つテキストを表します。クリックすると新しい Schema が挿入されます。
- `name`：ユニークな識別子で、異なる Schema Item と CRUD 操作を区別するために使用されます。
- `useComponentProps`：`title` と `onClick` という2つの属性を含むオブジェクトを返します。`title` は表示されるテキストで、`onClick` はクリック後のコールバック関数です。
- [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：`SchemaInitializerContext` コンテキストを取得するために使用され、いくつかの操作メソッドが含まれています。

Schema Item の定義に関する詳細は、[Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) ドキュメントを参照してください。

### 4. Schema Settings の実装

#### 4.1 Schema Settings の定義

現在、`createDocumentActionInitializerItem()` を使用して追加した後は削除できないため、[Schema Settings](https://client.docs.nocobase.com/core/ui-schema/schema-settings) を利用して設定します。

新たに `packages/plugins/@nocobase-sample/plugin-initializer-action-modal/src/client/settings/index.ts` ファイルを追加します：

```ts
import { SchemaSettings } from "@nocobase/client";
import { ActionNameLowercase } from "../constants";

export const documentActionModalSettings = new SchemaSettings({
  name: `actionSettings:${ActionNameLowercase}`,
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
});
```

#### 4.2 Schema Settings の登録

```ts
import { Plugin } from '@nocobase/client';
import { documentActionModalSettings } from './settings';

export class PluginInitializerActionModalClient extends Plugin {
  async load() {
    this.app.schemaSettingsManager.add(documentActionModalSettings);
  }
}

export default PluginInitializerActionModalClient;
```

#### 4.3 Schema Settings の使用

`packages/plugins/@nocobase-sample/plugin-initializer-action-modal/src/client/schema/index.ts` ファイル内の `createDocumentActionModalSchema` 関数を修正し、`documentActionModalSettings` を `x-settings` に追加します。

```diff
export const createDocumentActionModalSchema = (blockComponent: string): ISchema => {
  return {
    type: 'void',
    'x-component': 'Action',
+   'x-settings': documentActionModalSettings.name,
    // ..
  }
}
```

### 5. ページの Configure actions に追加

システムには多くの `Configure actions` ボタンがありますが、それぞれの **name は異なります**。必要に応じて、`Table`、`Details`、および `Form` ブロック内の `Configure actions` に追加します。

まず、対応する name を見つけます：

TODO

次に、`packages/plugins/@nocobase-sample/plugin-initializer-action-modal/src/client/index.tsx` ファイルを修正します：

```diff
import { Plugin } from '@nocobase/client';
import { documentActionModalSettings } from './documentActionModalSettings';
import { createDocumentActionModalInitializerItem } from './documentActionModalInitializerItem';

export class PluginInitializerActionModalClient extends Plugin {
  async load() {
    this.app.schemaSettingsManager.add(documentActionModalSettings);
+   this.app.schemaInitializerManager.addItem('table:configureActions', 'open-document', createDocumentActionModalInitializerItem('table-v2'));
+   this.app.schemaInitializerManager.addItem('details:configureActions', 'open-document', createDocumentActionModalInitializerItem('details'));
+   this.app.schemaInitializerManager.addItem('createForm:configureActions', 'open-document', createDocumentActionModalInitializerItem('form-v2'));
  }
}

export default PluginInitializerActionModalClient;
```

<video controls width='100%' src="https://static-docs.nocobase.com/20240526172851_rec_.mp4"></video>

### 6. 多言語

:::warning
多言語ファイルを変更した後は、サービスを再起動する必要があります。
:::

##### 6.1 英語

`packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/locale/en-US.json` の内容を次のように編集します：

```json
{
  "Document": "Document"
}
```

##### 6.2 中国語

`packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/locale/zh-CN.json` の内容を次のように編集します：

```json
{
  "Document": "文档"
}
```

さらに多言語サポートが必要な場合は、追加の項目を加えることができます。

[http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) から複数の言語を追加でき、右上のコーナーで言語を切り替えることができます。

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

## パッケージングと本番環境へのアップロード

[プラグインのビルドとパッケージ](/development/your-fisrt-plugin#构建并打包插件) ドキュメントに従って、プラグインをパッケージングし、本番環境にアップロードします。

クローンしたソースコードを使用する場合、依存関係を構築するために全量ビルドを一度実行する必要があります。

```bash
yarn build
```

`create-nocobase-app` を使用して作成したプロジェクトの場合、次のように直接実行できます：

```bash
yarn build @nocobase-sample/plugin-initializer-action-modal --tar
```

これで `storage/tar/@nocobase-sample/plugin-initializer-action-modal.tar.gz` ファイルが生成され、[アップロードの方法](/welcome/getting-started/plugin) でインストールできます。

