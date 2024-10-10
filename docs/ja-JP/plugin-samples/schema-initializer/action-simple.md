# 簡単なアクションの追加

## シーン説明

NocoBase には、インターフェースに操作ボタンを追加するための多くの `Configure actions` があります。

![img_v3_02b4_51f4918f-d344-43b2-b19e-48dca709467g](https://static-docs.nocobase.com/img_v3_02b4_51f4918f-d344-43b2-b19e-48dca709467g.jpg)

現在の操作ボタンがニーズを満たさない場合、既存の `Configure actions` にサブアイテムを追加して新しい操作ボタンを作成する必要があります。

「簡単なアクション」とは、ポップアップを必要としないアクションを指します。[ポップアップアクションの追加](/plugin-samples/schema-initializer/action-modal) を参照してください。

## 例の説明

この例では、ボタンを作成し、クリックすると該当するブロックのドキュメントを開き、このボタンを `Table`、`Details`、および `Form` ブロックの `Configure actions` に追加します。

このドキュメントの完全な例コードは [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-action-simple) で確認できます。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-185359.mp4" type="video/mp4" />
</video>

## プラグインの初期化

[最初のプラグインを書く](/development/your-first-plugin) のドキュメントに従い、プロジェクトがない場合は新しく作成し、すでにある場合やクローンしたソースコードがある場合はこのステップをスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-initializer-action-simple
yarn pm enable @nocobase-sample/plugin-initializer-action-simple
```

プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) にアクセスすることで、プラグインがインストールされ有効化されていることを確認できます。

## 機能実現

この例を実現する前に、いくつかの基本的な知識を理解する必要があります：

- [Action コンポーネント](https://client.docs.nocobase.com/components/action)
- [SchemaInitializer チュートリアル](/development/client/ui-schema/initializer)：インターフェースにさまざまなブロック、フィールド、操作などを追加するためのもの
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：インターフェースにさまざまなブロック、フィールド、操作などを追加するためのもの
- [UI Schema](/development/client/ui-schema/what-is-ui-schema)：インターフェースの構造とスタイルを定義するためのもの
- [Designable デザイナー](/development/client/ui-schema/designable)：Schemaを変更するためのもの

```bash
.
├── client # クライアントプラグイン
│   ├── initializer # 初期化器
│   ├── index.tsx # クライアントプラグインエントリ
│   ├── locale.ts # 多言語ツール関数
│   ├── constants.ts # 定数
│   ├── schema # Schema
│   └── settings # Schema 設定
├── locale # 多言語ファイル
│   ├── en-US.json # 英語
│   └── zh-CN.json # 中国語
├── index.ts # サーバープラグインエントリ
└── server # サーバープラグイン
```

### 1. 名前の定義

まず、操作の名前を定義する必要があります。これはさまざまな場所で使用されます。

`packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/constants.ts` を新規作成します：

```ts
export const ActionName = 'Document';
export const ActionNameLowercase = ActionName.toLowerCase();
```

### 2. Schema の定義

#### 2.1 Schema の定義

NocoBase の動的ページはすべて Schema を通じてレンダリングされるため、インターフェースに追加するための Schema を定義する必要があります。このセクションを実装する前に、いくつかの基本的な知識を理解する必要があります：

- [Action コンポーネント](https://client.docs.nocobase.com/components/action)
- [UI Schema プロトコル](/development/client/ui-schema/what-is-ui-schema)：Schema の構造と各属性の役割について詳しく説明しています

新たに `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/schema/index.ts` ファイルを作成し、内容は以下の通りです：

```ts
import { useFieldSchema } from '@formily/react';
import { ISchema } from "@nocobase/client"
import { useT } from '../locale';
import { ActionName } from '../constants';

export function useDocumentActionProps() {
  const fieldSchema = useFieldSchema();
  const t = useT();
  return {
    title: t(ActionName),
    type: 'primary',
    onClick() {
      window.open(fieldSchema['x-doc-url']);
    }
  };
}

export const createDocumentActionSchema = (blockComponent: string): ISchema & { 'x-doc-url': string } => {
  return {
    type: 'void',
    'x-component': 'Action',
    'x-doc-url': `https://client.docs.nocobase.com/components/${blockComponent}`,
    'x-use-component-props': 'useDocumentActionProps',
  };
}
```

`createDocumentActionSchema` コンポーネントは `blockComponent` パラメータを受け取り、Schema を返します。この Schema はインターフェースにボタンを追加し、クリックすると対応するブロックのドキュメントを開きます。

`createDocumentActionSchema`：
- `type`：タイプ。ここでは `void`、つまり純粋な UI コンポーネントを示します。
- `x-component`：`'Action'`。[Action コンポーネント](https://client.docs.nocobase.com/components/action) はボタンを生成するために使用されます。
- `title`：ボタンのタイトル。
- `x-doc-url`：カスタム Schema 属性で、ドキュメントのアドレスを表します。
- `x-use-component-props`：`'useDocumentActionProps'`。動的属性。詳細は [ドキュメント](/development/client/ui-schema/what-is-ui-schema#x-component-props-と-x-use-component-props) を参照してください。

`useDocumentActionProps()`：
- [useFieldSchema()](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema)：現在のノードの Schema を取得します。
- `type`：`'primary'`。ボタンのタイプ。
- `onClick`：クリックイベントで、対応するブロックのドキュメントを開きます。

Schema に関する詳細は [UI Schema](/development/client/ui-schema/what-is-ui-schema) ドキュメントを参照してください。

#### 2.2 スコープの登録

`useDocumentActionProps` をシステムに登録する必要があります。そうすることで `x-use-component-props` が対応するスコープを見つけることができます。

```ts
import { useDocumentActionProps } from './schema';
import { Plugin } from '@nocobase/client';

export class PluginInitializerActionSimpleClient extends Plugin {
  async load() {
    this.app.addScopes({ useDocumentActionProps });
  }
}

export default PluginInitializerActionSimpleClient;
```

#### 2.3 ブロック Schema の検証

Schema を検証する方法は 2 つあります：

- 一時ページ検証：一時的にページを作成し、Schema をレンダリングして要件に合っているか確認します。
- ドキュメントサンプル検証：ドキュメント `yarn doc plugins/@nocobase-sample/plugin-initializer-action-modal` を起動し、ドキュメントサンプルの記述を通じて要件に合っているか検証します（TODO）。

ここでは `一時ページ検証` の例を示します。新しいページを作成し、属性パラメータに基づいて 1 つまたは複数のサンプルを追加し、要件に合っているか確認します。

```tsx | pure
import { Plugin, SchemaComponent } from '@nocobase/client';
import { createDocumentActionSchema, useDocumentActionProps } from './schema';
import React from 'react';

export class PluginInitializerActionSimpleClient extends Plugin {
  async load() {
    this.app.addScopes({ useDocumentActionProps });
    this.app.router.add('admin.document-action-schema', {
      path: '/admin/document-action-schema',
      Component: () => {
        return (
          <>
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <SchemaComponent schema={{ properties: { test1: createDocumentActionSchema('table-v2') } }} />
            </div>
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <SchemaComponent schema={{ properties: { test2: createDocumentActionSchema('details') } }} />
            </div>
          </>
        );
      }
    });
  }
}

export default PluginInitializerActionSimpleClient;
```

次に、[http://localhost:13000/admin/document-action-schema](http://localhost:13000/admin/document-action-schema) にアクセスすると、追加した一時ページが表示されます。

`SchemaComponent` の詳細については、[SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) ドキュメントをご覧ください。

<video controls width='100%' src="https://static-docs.nocobase.com/20240526171318_rec_.mp4"></video>

検証が完了したら、テストページを削除する必要があります。

### 3. Schema Initializer Itemの定義

新たに `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/initializer/index.ts` ファイルを作成します：

```tsx | pure
import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";

import { createDocumentActionSchema } from '../schema';
import { ActionNameLowercase, ActionName } from "../constants";
import { useT } from "../locale";

export const createDocumentActionInitializerItem = (blockComponent: string): SchemaInitializerItemType => ({
  type: 'item',
  name: ActionNameLowercase,
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(ActionName),
      onClick: () => {
        insert(createDocumentActionSchema(blockComponent));
      },
    };
  },
});
```

異なる `blockComponent` に基づいて異なる `DocumentAction` を生成する必要があるため、対応する Schema Initializer Item を生成する `createDocumentActionInitializerItem` 関数を定義しました。

- `type`：タイプ、ここでは `item` で、クリックイベントを持つテキストを表します。クリックすると新しい Schema が挿入されます。
- `name`：ユニークな識別子で、異なる Schema Item や CRUD 操作を区別するために使用します。
- `useComponentProps`：`title` と `onClick` の2つの属性を含むオブジェクトを返します。`title` は表示されるテキスト、`onClick` はクリック後のコールバック関数です。
- [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：`SchemaInitializerContext` コンテキストを取得するために使用され、いくつかの操作メソッドが含まれています。

Schema Item の定義に関する詳細は、[Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) ドキュメントを参照してください。

### 4. Schema Settingsの実装

#### 4.1 Schema Settingsの定義

現在、`createDocumentActionInitializerItem()` を使用して追加した後に削除できないため、[Schema Settings](https://client.docs.nocobase.com/core/ui-schema/schema-settings) を使用して設定します。

新たに `packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/settings/index.ts` ファイルを作成します：

```ts
import { SchemaSettings } from "@nocobase/client";

import { ActionNameLowercase } from "../constants";

export const documentActionSettings = new SchemaSettings({
  name: `actionSettings:${ActionNameLowercase}`,
  items: [
    {
      name: 'remove',
      type: 'remove',
    },
  ],
});
```

#### 4.2 Schema Settingsの登録

```diff
import { Plugin } from '@nocobase/client';
import { useDocumentActionProps } from './schema';
+ import { documentActionSettings } from './settings';

export class PluginInitializerActionSimpleClient extends Plugin {
  async load() {
    this.app.addScopes({ useDocumentActionProps });
+   this.app.schemaSettingsManager.add(documentActionSettings);
  }
}

export default PluginInitializerActionSimpleClient;
```

#### 4.3 Schema Settingsの使用

`packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/schema/index.ts` ファイルの `createDocumentActionSchema` を以下のように修正します：

```diff
+ import { documentActionSettings } from '../settings';

export const createDocumentActionSchema = (blockComponent: string): ISchema & { 'x-doc-url': string } => {
  return {
    type: 'void',
    'x-component': 'Action',
+   'x-settings': documentActionSettings.name,
    // ...
  }
}
```

### 5. ページの Configure actions への追加

システムには多くの `Configure actions` ボタンがありますが、それぞれの **name は異なります**。必要に応じて、`Table`、`Details`、および `Form` ブロックの `Configure actions` に追加します。

まず、対応する name を見つけます：

TODO

次に、`packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/client/index.tsx` ファイルを修正します：

```diff
import { Plugin } from '@nocobase/client';
import { useDocumentActionProps } from './schema';
import { documentActionSettings } from './settings';
+ import { createDocumentActionInitializerItem } from './initializer';

export class PluginInitializerActionSimpleClient extends Plugin {
  async load() {
    this.app.addScopes({ useDocumentActionProps });
    this.app.schemaSettingsManager.add(documentActionSettings);
+   this.app.schemaInitializerManager.addItem('table:configureActions', 'document', createDocumentActionInitializerItem('table-v2'));
+   this.app.schemaInitializerManager.addItem('details:configureActions', 'document', createDocumentActionInitializerItem('details'));
+   this.app.schemaInitializerManager.addItem('createForm:configureActions', 'document', createDocumentActionInitializerItem('form-v2'));
  }
}

export default PluginInitializerActionSimpleClient;
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-185359.mp4" type="video/mp4" />
</video>

### 6. 多言語対応

:::warning
多言語ファイルが変更された後は、サービスを再起動する必要があります。
:::

##### 6.1 英語

`packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/locale/en-US.json` の内容を以下のように編集します：

```json
{
  "Document": "Document"
}
```

##### 6.2 中国語

`packages/plugins/@nocobase-sample/plugin-initializer-action-simple/src/locale/zh-CN.json` の内容を以下のように編集します：

```json
{
  "Document": "文档"
}
```

さらに多言語サポートが必要な場合は、追加できます。

[http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) から複数の言語を追加でき、右上角で言語を切り替えられます。

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

## パッケージ化と本番環境へのアップロード

[プラグインのビルドとパッケージ化](/development/your-first-plugin#構建并打包插件) のドキュメントに従って、プラグインをパッケージ化し、本番環境にアップロードできます。

クローンしたソースコードの場合は、最初にフルビルドを実行し、プラグインの依存関係も構築します。

```bash
yarn build
```

`create-nocobase-app` で作成したプロジェクトの場合は、次のように直接実行できます：

```bash
yarn build @nocobase-sample/plugin-initializer-action-simple --tar
```

これで `storage/tar/@nocobase-sample/plugin-initializer-action-simple.tar.gz` ファイルが生成され、[アップロードの方法](/welcome/getting-started/plugin) でインストールできます。

