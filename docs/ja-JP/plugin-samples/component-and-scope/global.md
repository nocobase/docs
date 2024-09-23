# グローバルにコンポーネントとスコープを登録

## 例の説明

新しいページを作成し、そのページ内で [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) を使用していくつかの内容をレンダリングします。この際、ルーティングコンポーネントと `SchemaComponent` 内のコンポーネントはすべてグローバルに登録されています。

このドキュメントの完全なサンプルコードは [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-component-and-scope-global) で確認できます。

## プラグインの初期化

[最初のプラグインを書く](/development/your-first-plugin) のドキュメントに従い、プロジェクトがない場合は新たに作成し、すでにプロジェクトがある場合やコードをクローンした場合はこのステップをスキップします。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-component-and-scope-global
yarn pm enable @nocobase-sample/plugin-component-and-scope-global
```

その後、プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) にアクセスすると、プラグインがインストールされ有効化されていることが確認できます。

## 機能実装

### 1. カスタムページの作成

`packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/client/CustomPage.tsx` ファイルを新規作成し、以下の内容を追加します：

```tsx | pure
import React from "react"

export const SamplesCustomPage = () => {
  return <div>TODO</div>
}
```

### 2. コンポーネントとルーティングのグローバル登録

カスタムページの作成に関する詳細は、[ページ追加](/plugin-samples/router/add-page) のドキュメントを参照してください。

`packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/index.ts` ファイルを修正し、以下の内容を追加します：

```tsx | pure
import { Plugin } from '@nocobase/client';
import { SamplesCustomPage } from './CustomPage'

export class PluginComponentAndScopeGlobalClient extends Plugin {
  async load() {
    this.app.router.add('admin.custom-page1', {
      path: '/admin/custom-page1',
      Component: 'SamplesCustomPage',
    });

    this.app.addComponents({ SamplesCustomPage });
  }
}

export default PluginComponentAndScopeGlobalClient;
```

`app.addComponents()` メソッドを使って `SamplesCustomPage` コンポーネントをグローバルに登録し、`app.router.add()` メソッドでルートを登録します。この際、`Component` フィールドは**文字列型**であり、グローバルに登録されたコンポーネントを自動的に探します。

その後、[http://localhost:13000/admin/custom-page1](http://localhost:13000/admin/custom-page1) にアクセスすると `SamplesCustomPage` コンポーネントの内容が表示されます。

![img_v3_02av_55c3115b-f4b6-4c24-8ea2-914869d498bg](https://static-docs.nocobase.com/img_v3_02av_55c3115b-f4b6-4c24-8ea2-914869d498bg.jpg)

### 3. `SchemaComponent` を使用してスキーマをレンダリング

以下の知識を理解する必要があります：

- [スキーマプロトコル](/development/client/ui-schema/what-is-ui-schema)
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)
- [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-と-x-use-component-props)
- [useFieldSchema()](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema)

`packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/client/CustomPage.tsx` ファイルを修正し、以下の内容を追加します：

```tsx | pure
import { ISchema, SchemaComponent, withDynamicSchemaProps } from "@nocobase/client";
import { uid } from '@formily/shared';
import { useFieldSchema } from '@formily/react';
import React, { FC } from "react";

export const SamplesHello: FC<{ name: string }> = withDynamicSchemaProps(({ name }) => {
  return <div>hello {name}</div>
});

export const useSamplesHelloProps = () => {
  const schema = useFieldSchema();
  return { name: schema.name }
};

const schema: ISchema = {
  type: 'void',
  name: uid(),
  properties: {
    demo1: {
      type: 'void',
      'x-component': 'SamplesHello',
      'x-component-props': {
        name: 'demo1',
      },
    },
    demo2: {
      type: 'void',
      'x-component': 'SamplesHello',
      'x-use-component-props': 'useSamplesHelloProps',
    },
  }
};

export const SamplesCustomPage = () => {
  return <SchemaComponent schema={schema}></SchemaComponent>
};
```

- `SamplesHello` と `useSamplesHelloProps` コンポーネントを定義し、エクスポートしました。
- 次に、`schema` オブジェクトを定義し、その中に `'x-component': 'SamplesHello'` と `'x-use-component-props': 'useSamplesHelloProps'` を含めました。両者の属性値は文字列型です。
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) コンポーネントを使用して `schema` オブジェクトをレンダリングします。

その後、`SamplesHello` と `useSamplesHelloProps` をグローバルに登録する必要があります。`packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/index.ts` ファイルを以下のように修正します：

```diff
import { Plugin } from '@nocobase/client';
- import { SamplesCustomPage } from './CustomPage'
+ import { SamplesCustomPage, SamplesHello, useSamplesHelloProps } from './CustomPage'

export class PluginComponentAndScopeGlobalClient extends Plugin {
  async load() {
    this.app.router.add('admin.custom-page1', {
      path: '/admin/custom-page1',
      Component: 'SamplesCustomPage',
    });

-   this.app.addComponents({ SamplesCustomPage })
+   this.app.addComponents({ SamplesCustomPage, SamplesHello });
+   this.app.addScopes({ useSamplesHelloProps });
  }
}

export default PluginComponentAndScopeGlobalClient;
```

次に、[http://localhost:13000/admin/custom-page1](http://localhost:13000/admin/custom-page1) にアクセスすると、`CustomPage` コンポーネントの内容を確認できます。

![img_v3_02av_79e76ad8-d697-4e3b-aaa9-46ed90e2bb9g](https://static-docs.nocobase.com/img_v3_02av_79e76ad8-d697-4e3b-aaa9-46ed90e2bb9g.jpg)

## パッケージ化と本番環境へのアップロード

[プラグインのビルドとパッケージ化](/development/your-first-plugin#building-and-packaging-the-plugin) ドキュメントに従って、プラグインをパッケージ化し、本番環境にアップロードできます。

クローンしたソースコードの場合、最初に全量ビルドを実行し、プラグインの依存関係も構築する必要があります。

```bash
yarn build
```

`create-nocobase-app` を使用して作成したプロジェクトの場合、次のように直接実行できます：

```bash
yarn build @nocobase-sample/plugin-component-and-scope-global --tar
```

これで `storage/tar/@nocobase-sample/plugin-component-and-scope-global.tar.gz` ファイルが生成され、[アップロードの方法](/welcome/getting-started/plugin)でインストールできます。

