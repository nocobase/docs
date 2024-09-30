# 部分登録コンポーネントとスコープ

## サンプル説明

実現する機能は[グローバル登録コンポーネントとスコープ](/plugin-samples/component-and-scope/global)のサンプルと同じですが、今回はコンポーネントとスコープをプラグイン内部に登録します。

この文書の完全なサンプルコードは、[plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-component-and-scope-local)で確認できます。

## プラグインの初期化

私たちは[最初のプラグインを作成する](/development/your-fisrt-plugin)文書に従います。プロジェクトがまだない場合は、最初にプロジェクトを作成してください。すでにある場合やクローンしたソースコードがある場合は、このステップをスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-component-and-scope-local
yarn pm enable @nocobase-sample/plugin-component-and-scope-local
```

プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/)にアクセスすると、プラグインがインストールされ、有効になっていることが確認できます。

## 機能実装

### 1. カスタムページの作成

新しく`packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/client/CustomPage.tsx`ファイルを作成し、内容は以下の通りです：

```tsx | pure
import React from "react";

export const SamplesCustomPage = () => {
  return <div>TODO</div>;
};
```

### 2. `Component`を直接使用して内容をレンダリング

カスタムページの作成については、[ページの追加](/plugin-samples/router/add-page)文書を参照してください。

`packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/index.ts`ファイルを修正し、内容は以下の通りです：

```tsx | pure
import { Plugin } from '@nocobase/client';
import { SamplesCustomPage } from './CustomPage';

export class PluginComponentAndScopeLocalClient extends Plugin {
  async load() {
    this.app.router.add('admin.custom-page2', {
      path: '/admin/custom-page2',
      Component: SamplesCustomPage,
    });
  }
}

export default PluginComponentAndScopeLocalClient;
```

グローバル登録とは異なり、ここでは直接`Component: SamplesCustomPage`コンポーネントを使用しています。

その後、[http://localhost:13000/admin/custom-page2](http://localhost:13000/admin/custom-page2)にアクセスすると、`SamplesCustomPage`コンポーネントの内容が表示されます。

![img_v3_02av_46e020ae-41d2-4bc3-a047-e28d97c20bdg](https://static-docs.nocobase.com/img_v3_02av_46e020ae-41d2-4bc3-a047-e28d97c20bdg.jpg)

### 3. `SchemaComponent`を使用して内容をレンダリング

以下の知識を理解する必要があります：

- [Schema プロトコル](/development/client/ui-schema/what-is-ui-schema)
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)
- [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-と-x-use-component-props)
- [useFieldSchema()](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema)

`packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/client/CustomPage.tsx`ファイルを修正し、内容は以下の通りです：

```tsx | pure
import { ISchema, SchemaComponent, withDynamicSchemaProps } from "@nocobase/client";
import { uid } from '@formily/shared';
import { useFieldSchema } from '@formily/react';
import React, { FC } from "react";

const SamplesHello: FC<{ name: string }> = withDynamicSchemaProps(({ name }) => {
  return <div>hello {name}</div>;
});

const useSamplesHelloProps = () => {
  const schema = useFieldSchema();
  return { name: schema.name };
};

const schema: ISchema = {
  type: 'void',
  name: uid(),
  properties: {
    demo1: {
      type: 'void',
      'x-component': SamplesHello,
      'x-component-props': {
        name: 'demo1',
      },
    },
    demo2: {
      type: 'void',
      'x-component': SamplesHello,
      'x-use-component-props': useSamplesHelloProps,
    },
    demo3: {
      type: 'void',
      'x-component': 'SamplesHello',
      'x-component-props': {
        name: 'demo3',
      },
    },
    demo4: {
      type: 'void',
      'x-component': 'SamplesHello',
      'x-use-component-props': 'useSamplesHelloProps',
    },
  }
}

export const SamplesCustomPage = () => {
  return <SchemaComponent schema={schema} components={{ SamplesHello }} scope={{ useSamplesHelloProps }}></SchemaComponent>
}
```

- `SamplesHello` と `useSamplesHelloProps` コンポーネントを定義しました。
- 次に、`schema` オブジェクトを定義し、`demo1` と `demo2` フィールドはそれぞれのコンポーネントとスコープを使用し、`demo3` と `demo4` フィールドは文字列型のコンポーネントとスコープを使用します。
- 最後に、`SchemaComponent` の `components` と `scope` プロパティを使用して、`SamplesHello` と `useSamplesHelloProps` をローカルに登録します。

その後、[http://localhost:13000/admin/custom-page2](http://localhost:13000/admin/custom-page2) にアクセスすると、`CustomPage` コンポーネントの内容を確認できます。

![img_v3_02av_e8d4d0c7-7a59-4f9e-a120-a2551e719ebg](https://static-docs.nocobase.com/img_v3_02av_e8d4d0c7-7a59-4f9e-a120-a2551e719ebg.jpg)

## パッケージ化と本番環境へのアップロード

[プラグインの構築とパッケージ化](/development/your-fisrt-plugin#構築とパッケージ化) ドキュメントに従って、プラグインをパッケージ化し、本番環境にアップロードできます。

クローンしたソースコードの場合、最初にフルビルドを実行し、プラグインの依存関係も構築する必要があります。

```bash
yarn build
```

`create-nocobase-app` を使用して作成したプロジェクトの場合、次のコマンドを直接実行できます：

```bash
yarn build @nocobase-sample/plugin-component-and-scope-local --tar
```

これにより、`storage/tar/@nocobase-sample/plugin-component-and-scope-local.tar.gz` ファイルが生成され、その後[アップロードの方法](/welcome/getting-started/plugin)でインストールします。

