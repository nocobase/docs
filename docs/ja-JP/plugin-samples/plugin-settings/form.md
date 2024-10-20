# フォーム設定ページ

## シナリオ説明

設定インターフェースは、フォームで構成されています。

## 例の説明

第三者地図サービスと連携する必要があると仮定します。この場合、地図の `key` と `secret` を設定する必要があります。プラグインの方法で設定ページを追加し、これらの情報を入力できます。

この文書の完全な例コードは [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-settings-form) で確認できます。

## プラグインの初期化

まず、[最初のプラグインを書く](/development/your-fisrt-plugin) の文書に従い、プロジェクトがない場合は新しいプロジェクトを作成します。すでにプロジェクトがある場合やソースコードをクローンしている場合は、このステップをスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化してシステムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-settings-form
yarn pm enable @nocobase-sample/plugin-settings-form
```

その後、プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) にアクセスすると、プラグインがインストールされ、有効になっていることを確認できます。

## バックエンド機能の実装

### 1. データテーブルの作成

バックエンドでは、設定情報を保存するためのデータテーブルを作成することが主な目的です。データテーブルの作成について理解しておくべき知識は以下の通りです：

- [データテーブルとフィールド](/development/server/collections)
- [データテーブルの作成](/development/server/collections/configure#プラグインコード内で定義)
- [フィールドタイプ](/development/server/collections/options#field-type)
- [defineCollection() API](/api/database#definecollection)
- [コレクションAPI](/api/database/collection)

この例では、`packages/plugins/@nocobase-sample/plugin-settings-form/src/server/collections/map-configuration.ts` ファイルを作成し、内容は以下の通りです：

```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'SamplesMapConfiguration',
  fields: [
    {
      type: 'string',
      name: 'key',
    },
    {
      type: 'string',
      name: 'secret',
    },
  ],
});
```

要件に応じて、`SamplesMapConfiguration` というデータテーブルを作成し、`key` と `secret` の2つのフィールドを持ち、いずれも文字列型としました。

### 2. 更新の実行

データテーブル定義をデータベースに更新する必要があります。以下のコマンドで更新を実行できます：

```bash
yarn nocobase upgrade
```

![img_v3_02av_db5e9985-eb20-4420-a0b2-8a809ff05a5g](https://static-docs.nocobase.com/img_v3_02av_db5e9985-eb20-4420-a0b2-8a809ff05a5g.jpg)

## フロントエンド機能の実装

### 1. プラグイン設定ページの作成

以前の [プラグイン設定ページの追加（単一ルート）](/plugin-samples/router/add-setting-page-single-route) で詳細に説明しましたので、ここでは繰り返しません。

`packages/plugins/@nocobase-sample/plugin-settings-form/src/client/index.tsx` ファイルを修正し、内容は以下の通りです：

```tsx | pure
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';

export class PluginSettingsFormClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'プラグイン設定フォーム',
      icon: 'FormOutlined',
      Component: () => 'TODO',
    });
  }
}

export default PluginSettingsFormClient;
```

次に、[http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form) にアクセスすると、設定ページが表示されます。

![img_v3_02av_c90b5767-97dd-4fef-8dd0-c7ff9a136a9g](https://static-docs.nocobase.com/img_v3_02av_c90b5767-97dd-4fef-8dd0-c7ff9a136a9g.jpg)

### 2. データテーブル構造の定義

Schema に基づく記述方法に従い、データテーブルの構造を定義する必要があります。フロントエンドデータテーブル構造の定義について理解しておくべき知識は以下の通りです：

- [データテーブルとフィールド](/development/server/collections#field-component)
- [フィールドタイプ](/development/server/collections/options#field-type)
- [フィールドインターフェース](/development/server/collections/options#field-interface)
- [UIスキーマプロトコル](/development/client/ui-schema/what-is-ui-schema)
- [フィールドコンポーネント](https://client.docs.nocobase.com/components)

次に、`packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx` ファイルを新規作成し、以下の内容を記述します：

```ts
const mapConfigurationCollection = {
  name: 'SamplesMapConfiguration',
  filterTargetKey: 'id',
  fields: [
    {
      type: 'string',
      name: 'key',
      interface: 'input',
      uiSchema: {
        title: 'タイトル',
        required: true,
        'x-component': 'Input',
      },
    },
    {
      type: 'string',
      name: 'secret',
      interface: 'input',
      uiSchema: {
        title: 'シークレット',
        required: true,
        'x-component': 'Input',
      },
    },
  ],
};
```

`SamplesMapConfiguration` データテーブルは、`key` と `secret` の2つのフィールドを含んでいます。以下は `fields` フィールドの説明です：

- `type`：値は文字列であるため、`string` となり、バックエンドのデータテーブルフィールドタイプと一致する必要があります。
- `name`：フィールドの名前で、バックエンドのデータテーブルフィールド名と一致する必要があります。
- `interface`：値は文字列であるため、インターフェースに対応し、`input` となります。
- `uiSchema`：フロントエンドのフォーム項目コンポーネントのレンダリングに対応します。
  - `title`：フォーム項目のタイトル
  - `required`：必須項目であるため、値は `true` となります。
  - `x-component`：単一行テキストの [Input コンポーネント](https://client.docs.nocobase.com/components/input) を選択します。

### 3. フォームスキーマの作成

フォームスキーマの書き方について、以下の知識を理解する必要があります：

- [Form コンポーネント](https://client.docs.nocobase.com/components/form-v2)
- [CollectionField コンポーネント](https://client.docs.nocobase.com/core/data-source/collection-field)
- [CardItem コンポーネント](https://client.docs.nocobase.com/components/card-item)
- [スキーマプロトコル](/development/client/ui-schema/what-is-ui-schema)
- [DataBlockProvider コンポーネント](https://client.docs.nocobase.com/core/data-block/data-block-provider)
- [Action コンポーネント](https://client.docs.nocobase.com/components/action)

引き続き、`packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx` ファイルに記述を続けます：

```ts
import { useMemo } from 'react';
import { App as AntdApp } from 'antd';
import { createForm } from '@formily/core';
import { useForm } from '@formily/react';
import { uid } from '@formily/shared';
import { ActionProps, ISchema, useCollection, useCollectionRecordData, useDataBlockResource } from '@nocobase/client';

const schema: ISchema = {
  type: 'void',
  name: uid(),
  'x-component': 'CardItem',
  'x-decorator': 'DataBlockProvider',
  'x-decorator-props': {
    collection: mapConfigurationCollection.name,
    action: 'get',
  },
  properties: {
    form: {
      type: 'void',
      'x-component': 'FormV2',
      'x-use-component-props': 'useFormBlockProps',
      properties: {
        key: {
          title: 'キー',
          'x-decorator': 'FormItem',
          'x-component': 'CollectionField',
        },
        secret: {
          title: 'シークレット',
          'x-decorator': 'FormItem',
          'x-component': 'CollectionField',
        },
        footer: {
          type: 'void',
          'x-component': 'Action',
          title: '送信',
          'x-use-component-props': 'useSubmitActionProps',
        },
      },
    },
  },
};

const useFormBlockProps = () => {
  const recordData = useCollectionRecordData();
  const form = useMemo(
    () => createForm({
      initialValues: recordData,
    }),
    [recordData],
  );
  return {
    form,
  };
};

const useSubmitActionProps = (): ActionProps => {
  const form = useForm();
  const { message } = AntdApp.useApp();
  const collection = useCollection();
  const resource = useDataBlockResource();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.updateOrCreate({
        values,
        filterKeys: [collection.filterTargetKey],
      });
      message.success('保存に成功しました！');
    },
  };
};
```

- [CardItem](https://client.docs.nocobase.com/components/card-item)：カードコンポーネントで、主にカードスタイルを提供します。
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)：データブロックコンポーネントで、子ノードにデータを供給するために使用されます。フォームは単一行データを取得するため、`collection` と `action` の2つの属性を提供しています。
- [FormV2](https://client.docs.nocobase.com/components/form-v2)：フォームコンポーネントで、フォームのレンダリングに使用されます。
- `useFormBlockProps`：データブロックの属性を取得し、FormV2コンポーネントに渡すために使用されます。具体的な例はFormV2の[デフォルト値](https://client.docs.nocobase.com/components/form-v2#default-values)を参照してください。
- [CollectionField](https://client.docs.nocobase.com/core/data-source/collection-field)：データテーブルフィールドコンポーネントで、Collection内のUIスキーマを取得し、レンダリングするために使用されます。
- [Action](https://client.docs.nocobase.com/components/action)：操作ボタンコンポーネントで、フォームの送信に使用されます。
- `useSubmitActionProps`：送信ボタンの属性を取得するために使用されます。
  - [useCollection](/core/data-source/collection-provider)：データテーブルの情報を取得するために使用されます。
  - [useDataBlockResource](/core/data-block/data-block-resource-provider)：DataBlockProviderが提供するフックで、データブロックのリソースを取得し、CRUD操作を簡単に行うことができます。

### 4. フォームコンポーネントの作成

Schemaをコンポーネントにレンダリングするためには、以下の知識が必要です：

- [ExtendCollectionsProvider](https://client.docs.nocobase.com/core/data-source/extend-collections-provider) コンポーネントを使用してデータテーブルを拡張します。
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component) コンポーネントを使用してフォームをレンダリングします。

引き続き `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx` ファイルに記述します：

```tsx | pure
import React from 'react';
import { ExtendCollectionsProvider, SchemaComponent } from '@nocobase/client';

export const PluginSettingsForm = () => {
  return (
    <ExtendCollectionsProvider collections={[mapConfigurationCollection]}>
      <SchemaComponent schema={schema} scope={{ useFormBlockProps, useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

### 5. プラグイン設定ページの登録

`packages/plugins/@nocobase-sample/plugin-settings-form/src/client/index.tsx` ファイルを次のように修正します。

```diff
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';
+ import { PluginSettingsForm } from './PluginSettingsForm';

export class PluginSettingFormClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'プラグイン設定フォーム',
      icon: 'FormOutlined',
-     Component: () => 'TODO',
+     Component: PluginSettingsForm,
    });
  }
}

export default PluginSettingFormClient;
```

次に、[http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form) にアクセスすると、設定ページが表示されます。

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-182716.mp4" type="video/mp4">
</video>

### 6. ページ内部での設定データの使用

フォームデータの使用には、ページ内部とグローバルでの使用の2つのシーンがあります。両者の違いは以下の通りです。

- グローバル使用：フォームデータの更新後にデータをグローバルステートに同期し、リアルタイム更新を実現する必要があります。
- ページ内部使用：ページの切り替えで自動的に破棄および作成されるため、データの同期は不要です。

このステップでは、ページ内部でのフォームデータの使用について説明します。

`packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsFormPage.tsx` ファイルを次のように作成します。

```tsx | pure
import { useRequest } from '@nocobase/client';
import React from 'react';

export const PluginSettingsFormPage = () => {
  const { data, loading } = useRequest<{ data?: { key: string; secret: string } }>({
    url: 'SamplesMapConfiguration:get',
  });

  if (loading) return null;

  return <pre>{JSON.stringify(data?.data, null, 2)}</pre>;
};
```

次に、`PluginSettingsForm` コンポーネント内で `PluginSettingsFormPage` コンポーネントをインポートします。

```tsx | pure
import { PluginSettingsFormPage } from './PluginSettingsFormPage';
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...

    this.app.router.add(`admin.${name}-page`, {
      path: '/admin/plugin-settings-form-page',
      Component: PluginSettingsFormPage,
    });
  }
}
```

その後、[http://localhost:13000/admin/plugin-settings-form-page](http://localhost:13000/admin/plugin-settings-form-page) にアクセスすると、フォームデータが表示されます。

![img_v3_02av_70ade722-7069-4fc7-a2c3-c080f85ff30g](https://static-docs.nocobase.com/img_v3_02av_70ade722-7069-4fc7-a2c3-c080f85ff30g.jpg)

### 7. グローバルでの設定データの使用

グローバルに使用し、リアルタイムで更新が必要な場合は、`Context` および NocoBase [Provider](/development/client/providers) 機能を使用します。

`packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsFormProvider.tsx` ファイルを次のように作成します。

```tsx | pure
import React, { createContext, FC } from 'react';
import { useRequest, UseRequestResult } from '@nocobase/client';

const PluginSettingsFormContext = createContext<UseRequestResult<{ data?: { key: string; secret: string } }>>(null as any);

export const PluginSettingsFormProvider: FC<{ children: React.ReactNode }> = ({children}) => {
  const request = useRequest<{ data?: { key: string; secret: string } }>({
    url: 'SamplesMapConfiguration:get',
  });

  console.log('PluginSettingsFormProvider', request.data?.data);

  return <PluginSettingsFormContext.Provider value={request}>{children}</PluginSettingsFormContext.Provider>;
}

export const usePluginSettingsFormRequest = () => {
  return React.useContext(PluginSettingsFormContext);
};
```

次に `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/index.tsx` ファイルを修正し、グローバルに登録します：

```ts
import { PluginSettingsFormProvider } from './PluginSettingsFormProvider';
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...
    this.app.addProvider(PluginSettingsFormProvider);
  }
}
```

次に、フォームの更新後にグローバルデータを再取得する必要があります。`packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx` を修正します：

```diff
+ import { usePluginSettingsFormRequest } from './PluginSettingsFormProvider';

const useSubmitActionProps = (): ActionProps => {
  const form = useForm();
  const { message } = AntdApp.useApp();
  const collection = useCollection();
  const resource = useDataBlockResource();
+ const globalSettingsFormRequest = usePluginSettingsFormRequest();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.updateOrCreate({
        values,
        filterKeys: [collection.filterTargetKey],
      });
+     await globalSettingsFormRequest.runAsync();
      message.success('保存に成功しました！');
    },
  };
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-182717.mp4" type="video/mp4">
</video>

## パッケージ化と本番環境へのアップロード

[プラグインのビルドとパッケージ化](/development/your-fisrt-plugin#構建并打包插件) ドキュメントに従い、プラグインをパッケージ化して本番環境にアップロードします。

ソースコードをクローンした場合は、最初に全体ビルドを実行し、プラグインの依存関係を構築する必要があります。

```bash
yarn build
```

`create-nocobase-app` を使用して作成したプロジェクトの場合は、直接実行できます：

```bash
yarn build @nocobase-sample/plugin-settings-form --tar
```

これで `storage/tar/@nocobase-sample/plugin-settings-form.tar.gz` ファイルが生成され、[アップロードの方法](/welcome/getting-started/plugin)でインストールすることができます。

