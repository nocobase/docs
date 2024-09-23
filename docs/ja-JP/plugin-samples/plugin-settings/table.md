# テーブル設定ページ

## シーン説明

設定インターフェースはテーブルで構成されており、テーブルを利用してデータの追加、編集、削除が可能です。

## 例の説明

メール通知のプラグインを作成すると仮定します。メール通知には複数のテンプレートがあり、各テンプレートには件名や内容などの情報が含まれます。これらのテンプレートを管理するための設定インターフェースが必要です。

この文書の完全な例コードは、[plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-settings-table) で確認できます。

## プラグインの初期化

[最初のプラグインの作成](/development/your-first-plugin)の文書に従い、プロジェクトがない場合は新しく作成し、既存のプロジェクトがある場合やソースコードをクローンした場合はこのステップをスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-settings-table
yarn pm enable @nocobase-sample/plugin-settings-table
```

プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/)にアクセスすると、プラグインがインストールされており、有効化されていることが確認できます。

## バックエンド機能の実装

### 1. データテーブルの作成

バックエンドでは、設定情報を保存するためのデータテーブルを作成します。データテーブルの作成に関して、以下の知識を理解する必要があります：

- [データテーブルとフィールド](/development/server/collections)
- [データテーブルの作成](/development/server/collections/configure#プラグインコード内で定義)
- [フィールドタイプ](/development/server/collections/options#field-type)
- [defineCollection() API](/api/database#definecollection)
- [コレクションAPI](/api/database/collection)

本例では、`packages/plugins/@nocobase-sample/plugin-settings-table/src/server/collections/email-templates.ts`ファイルを作成し、内容は以下の通りです：

```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'samplesEmailTemplates',
  fields: [
    {
      type: 'string',
      name: 'subject',
    },
    {
      type: 'text',
      name: 'content',
    },
  ],
});
```

要求に応じて、`samplesEmailTemplates`データテーブルを作成し、`subject`と`content`の2つのフィールドを含めました。これらのフィールドは、単行テキストとリッチテキストとして保存されます。

- `subject`フィールドは単行テキスト型で、type値は`string`
- `content`フィールドは長文テキスト型で、type値は`text`

### 2. 更新の実行

データテーブルの定義をデータベースに更新する必要があります。以下のコマンドを使用して更新を実行できます：

```bash
yarn nocobase upgrade
```

![img_v3_02av_eb156d0e-9f25-4702-a5de-2bfa5cde84bg](https://static-docs.nocobase.com/img_v3_02av_eb156d0e-9f25-4702-a5de-2bfa5cde84bg.jpg)

## フロントエンド機能の実装

### 1. プラグイン設定ページの作成

以前の[プラグイン設定ページの追加（単一ルート）](/plugin-samples/router/add-setting-page-single-route)で詳細に説明したため、ここでは省略します。

`packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx`ファイルを修正し、内容は以下の通りです：

```tsx | pure
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';

export class PluginSettingsTableClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'プラグイン設定テーブル',
      icon: 'TableOutlined',
      Component: () => 'TODO',
    });
  }
}

export default PluginSettingsTableClient;
```

次に、[http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table)にアクセスすると、設定ページが表示されます。

![img_v3_02av_c610403d-95d8-466a-a3d1-cfcab232057g](https://static-docs.nocobase.com/img_v3_02av_c610403d-95d8-466a-a3d1-cfcab232057g.jpg)

### 2. データテーブル構造の定義

スキーマに基づいてデータテーブルの構造を先に定義する必要があります。フロントエンドのデータテーブル構造の定義に関して、以下の知識を理解する必要があります：

- [データテーブルとフィールド](/development/server/collections#field-component)
- [フィールドタイプ](/development/server/collections/options#field-type)
- [フィールドインターフェース](/development/server/collections/options#field-interface)
- [UIスキーマのプロトコル](/development/client/ui-schema/what-is-ui-schema)
- [フィールドコンポーネント](https://client.docs.nocobase.com/components)

次に、`packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx` ファイルを新規作成し、その内容は以下の通りです：

```ts
const emailTemplatesCollection = {
  name: 'samplesEmailTemplates',
  filterTargetKey: 'id',
  fields: [
    {
      type: 'string',
      name: 'subject',
      interface: 'input',
      uiSchema: {
        title: '件名',
        required: true,
        'x-component': 'Input',
      },
    },
    {
      type: 'text',
      name: 'content',
      interface: 'richText',
      uiSchema: {
        title: '内容',
        required: true,
        'x-component': 'RichText',
      },
    },
  ],
};
```

`samplesEmailTemplates` データテーブルを定義し、`subject` と `content` の2つのフィールドを含みます。以下は `fields` フィールドの説明です：

- `type`：値は文字列であり、その値はバックエンドのデータテーブルフィールドタイプと一致する必要があります。
- `name`：フィールドの名称であり、バックエンドのデータテーブルフィールド名と一致する必要があります。
- `interface`
  - `subject` フィールド：単一行テキストであり、インターフェースに対応するため、その値は `input` です。
  - `content` フィールド：リッチテキストであり、インターフェースに対応するため、その値は `richText` です。
- `uiSchema`：フロントエンドのフォーム項目コンポーネントのレンダリングに対応します。
  - `type`：単一行テキストまたは長文にかかわらず、その値は文字列であり、その値は `string` です。
  - `title`：フォーム項目のタイトルです。
  - `required`：必須項目であるため、その値は `true` です。
  - `x-component`：
    - `subject` フィールド： [Input コンポーネント](https://client.docs.nocobase.com/components/input) を使用します。
    - `content` フィールド： [RichText コンポーネント](https://client.docs.nocobase.com/components/rich-text) を使用します。

### 3. テーブルスキーマの作成

フォームスキーマの記述方法について、以下の知識を理解する必要があります：

- [テーブルコンポーネント](https://client.docs.nocobase.com/components/table-v2)
- [CollectionField コンポーネント](https://client.docs.nocobase.com/core/data-source/collection-field)
- [CardItem コンポーネント](https://client.docs.nocobase.com/components/card-item)
- [スキーマプロトコル](/development/client/ui-schema/what-is-ui-schema)
- [DataBlockProvider コンポーネント](https://client.docs.nocobase.com/core/data-block/data-block-provider)

テーブルの [コレクションを拡張する](https://client.docs.nocobase.com/components/table-v2#extends-collection) の例を参考にして、`packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx` ファイルを引き続き修正します：

```tsx | pure
import { ISchema } from '@nocobase/client';
import { uid } from '@formily/shared';

const schema: ISchema = {
  type: 'void',
  name: uid(),
  'x-component': 'CardItem',
  'x-decorator': 'TableBlockProvider',
  'x-decorator-props': {
    collection: emailTemplatesCollection.name,
    action: 'list',
    showIndex: true,
    dragSort: false,
  },
  properties: {
    table: {
      type: 'array',
      'x-component': 'TableV2',
      'x-use-component-props': 'useTableBlockProps',
      'x-component-props': {
        rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
        },
      },
      properties: {
        subject: {
          type: 'void',
          title: '件名',
          'x-component': 'TableV2.Column',
          properties: {
            subject: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-pattern': 'readPretty',
            },
          },
        },
        content: {
          type: 'void',
          title: '内容',
          'x-component': 'TableV2.Column',
          properties: {
            content: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-pattern': 'readPretty',
            },
          },
        },
      },
    },
  },
}
```

- [CardItem](https://client.docs.nocobase.com/components/card-item)：カードコンポーネントで、主にカードスタイルを提供します。
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)：データブロックコンポーネントで、子ノードにデータを提供するために使用されます。フォームは単一行データを取得するため、`collection` と `action` の2つの属性を提供しています。
- [TableV2](https://client.docs.nocobase.com/components/table-v2)：Tableコンポーネントで、フォームをレンダリングするために使用されます。
- `useTableBlockProps`：データブロックの属性を取得し、TableV2コンポーネントに渡すために使用されます。一般的には変更する必要はありません。
- `TableV2.Column`：Table列コンポーネントで、フォーム列をレンダリングするために使用されます。
- [CollectionField](https://client.docs.nocobase.com/core/data-source/collection-field)：データテーブルフィールドコンポーネントで、Collection内の`UI Schema`を読み取り、レンダリングします。

### 4. Tableコンポーネントの作成

スキーマをコンポーネントにレンダリングするには、以下の知識を理解する必要があります：

- [ExtendCollectionsProvider](https://client.docs.nocobase.com/core/data-source/extend-collections-provider)コンポーネントでデータテーブルを拡張します。
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component)コンポーネントでフォームをレンダリングします。

次に、`packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx`ファイルに以下を記述します：

```tsx | pure
import React from 'react';
import { ExtendCollectionsProvider, SchemaComponent } from '@nocobase/client';
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
      <SchemaComponent schema={schema} scope={{ useFormBlockProps, useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

### 5. プラグイン設定ページの登録

`packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx`ファイルを修正し、内容は以下のようになります：

```diff
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';
+ import { PluginSettingsTable } from './PluginSettingsTable';
```

```javascript
export class PluginSettingFormClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'プラグイン設定フォーム',
      icon: 'FormOutlined',
      Component: PluginSettingsTable,
    });
  }
}

export default PluginSettingFormClient;
```

次に、[http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table) にアクセスすると、設定ページを表示できます。

![img_v3_02av_97fd272d-1333-4faf-9ce1-6363c6a049dg](https://static-docs.nocobase.com/img_v3_02av_97fd272d-1333-4faf-9ce1-6363c6a049dg.jpg)

### 6. 新機能の実装

現在のテーブルにはデータがありませんので、新機能を追加する必要があります。新機能を実装するには、以下のドキュメントを参考にしてください：

- テーブルコンポーネント [With ActionToolbar の例](https://client.docs.nocobase.com/components/table-v2)
- [フォームコンポーネント](https://client.docs.nocobase.com/components/form-v2)
- [アクションコンポーネント](https://client.docs.nocobase.com/components/action)

引き続き `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx` ファイルに記述していきます：

```tsx | pure
import React from 'react';
import { ISchema, useActionContext, useDataBlockRequest, useDataBlockResource } from '@nocobase/client';
import { App as AntdApp } from 'antd';
import { useForm } from '@formily/react';

const schema: ISchema = {
  // ...
  properties: {
    actions: {
      type: 'void',
      'x-component': 'ActionBar',
      'x-component-props': {
        style: {
          marginBottom: 20,
        },
      },
      properties: {
        add: {
          type: 'void',
          'x-component': 'Action',
          title: '新規追加',
          'x-align': 'right',
          'x-component-props': {
            type: 'primary',
          },
          properties: {
            drawer: {
              type: 'void',
              'x-component': 'Action.Drawer',
              title: '新規追加',
              properties: {
                form: {
                  type: 'void',
                  'x-component': 'FormV2',
                  properties: {
                    subject: {
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    content: {
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    footer: {
                      type: 'void',
                      'x-component': 'Action.Drawer.Footer',
                      properties: {
                        submit: {
                          title: '送信',
                          'x-component': 'Action',
                          'x-use-component-props': 'useSubmitActionProps',
                        },
                      }
                    }
                  },
                },
              },
            },
          },
        },
      }
    },

    table: {
      // ...
    }
  }
}


const useSubmitActionProps = () => {
  const { setVisible } = useActionContext();
  const { message } = AntdApp.useApp();
  const form = useForm();
  const resource = useDataBlockResource();
  const { runAsync } = useDataBlockRequest();

  return {
    type: 'primary',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.create({ values });
      await runAsync();
      message.success('保存に成功しました');
      setVisible(false);
    },
  };
};
```

その後：

- [ActionBar](https://client.docs.nocobase.com/components/action#actionbar)：操作ボタンのレイアウトを提供します。
- [Action](https://client.docs.nocobase.com/components/action)：新しいボタンを追加します。
- [Action.Drawer](https://client.docs.nocobase.com/components/action#actiondrawer)：クリック後にポップアップが表示されます。
- [FormV2](https://client.docs.nocobase.com/components/form-v2)：フォームコンポーネントです。
- [FormItem](https://client.docs.nocobase.com/components/form-v2#formitem)：フォーム項目コンポーネントです。
- [Action.Drawer.Footer](https://client.docs.nocobase.com/components/action#actiondrawerfooter)：ポップアップの底部です。
- [useSubmitActionProps](https://client.docs.nocobase.com/core/data-block/use-data-block-request#use-submit-action-props)：フォームを提出するために使用します。
  - `useActionContext()`：アクションコンテキストを取得します。
  - [useDataBlockResource()](https://client.docs.nocobase.com/core/data-block/data-block-resource-provider)：データのCRUD操作に使用される `TableBlockProvider` が提供する `resource` を取得します。
  - [useDataBlockRequest()](https://client.docs.nocobase.com/core/data-block/data-block-request-provider)：テーブルブロックのリクエストオブジェクトで、`runAsync` を呼び出すとリクエストが再実行され、テーブルデータを更新します。

次に、`useSubmitActionProps` をコンテキストに追加する必要があります：

```diff
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
-     <SchemaComponent schema={schema} />
+     <SchemaComponent schema={schema} scope={{ useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-190400.mp4" type="video/mp4">
</video>

### 7. 編集機能を実装する

編集機能は新規作成機能と似ていますが、テーブルに編集ボタンを追加し、ポップアップ内でデータを変更する必要があります。編集機能を実現するには、以下のドキュメントを参考にしてください：

- テーブルコンポーネント [View Or Edit Record](https://client.docs.nocobase.com/components/table-v2#view-or-edit-record)
- フォームコンポーネント [Default Values](https://client.docs.nocobase.com/components/form-v2#default-values)
- [useCollectionRecord()](https://client.docs.nocobase.com/core/data-block/collection-record-provider)：現在の行のデータを取得するために使用されます。

次に、`packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx` ファイルに以下を記述します：

```tsx | pure
import { useCollectionRecordData } from '@nocobase/client';
import { useMemo } from 'react';

const useEditFormProps = () => {
  const recordData = useCollectionRecordData();
  const form = useMemo(
    () =>
      createForm({
        values: recordData,
      }),
    [recordData],
  );

  return {
    form,
  };
}
```

`Table` は、各行のデータを [CollectionRecordProvider](https://client.docs.nocobase.com/core/data-block/collection-record-provider) を通じて子ノードに渡します。

`useEditFormProps` 内で `useCollectionRecordData()` を使用して現在の行のデータを取得し、そのデータをデフォルト値としてフォームを作成するために `createForm` を使用します。

次に、`useSubmitActionProps()` のロジックを修正し、新規作成と編集をサポートします。

```diff
const useSubmitActionProps = () => {
  // ...
+ const collection = useCollection();
  return {
    type: 'primary',
    async onClick() {
      await form.submit();
      const values = form.values;
-     await resource.create({ values })
+     if (values[collection.filterTargetKey]) {
+       await resource.update({
+         values,
+         filterByTk: values[collection.filterTargetKey],
+       });
+     } else {
+       await resource.create({
+         values,
+       });
+     }
      // ...
    },
  };
};
```

- [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#usecollection): DataBlockProviderによって提供されるデータテーブルオブジェクト

最後に、`useEditFormProps`をコンテキストに登録します：

```diff
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
-     <SchemaComponent schema={schema} scope={{ useSubmitActionProps }} />
+     <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps }} />
    </ExtendCollectionsProvider>
  );
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-190849.mp4" type="video/mp4">
</video>

### 8. 削除機能の実装

削除機能は比較的簡単で、アクション列に`Delete`ボタンを追加し、クリック後に`resource.destroy()`を呼び出してテーブルデータを更新するだけです。

- アクション [Confirm](https://client.docs.nocobase.com/components/action#confirm)

次に、`packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx`ファイルに記述します：

```ts
import { ActionProps } from '@nocobase/client';

function useDeleteActionProps(): ActionProps {
  const { message } = AntdApp.useApp();
  const record = useCollectionRecordData();
  const resource = useDataBlockResource();
  const collection = useCollection();
  const { runAsync } = useDataBlockRequest();
  return {
    confirm: {
      title: '削除',
      content: '本当に削除してもよろしいですか？',
    },
    async onClick() {
      await resource.destroy({
        filterByTk: record[collection.filterTargetKey]
      });
      await runAsync();
      message.success('削除しました！');
    },
  };
}

const schema: ISchema = {
  // ...
  properties: {
    // ...
    table: {
      // ...
      properties: {
        // ...
        actions: {
          // ...
          properties: {
            // ...
            delete: {
              type: 'void',
              title: '削除',
              'x-component': 'Action.Link',
              'x-use-component-props': 'useDeleteActionProps',
            }
          }
        }
      }
    }
  }
}
```

次に、`useDeleteActionProps`をコンテキストに登録します。

```diff
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
-     <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps }} />
+     <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps, useDeleteActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-191110.mp4" type="video/mp4">
</video>

### 9. ページ内での設定データの使用

フォームデータの利用には、ページ内での使用とグローバルでの使用の2つのシナリオがあります。両者の違いは以下の通りです：

- グローバル使用：フォームデータが更新された後、データをグローバル状態に同期させ、リアルタイムで更新される効果を得る必要があります。
- ページ内使用：ページの切り替えによって自動的に破棄され、新たに生成されるため、データの同期は不要です。

本ステップでは、主にページ内でのフォームデータの使用について説明します。

`packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTablePage.tsx` ファイルを作成し、その内容は以下の通りです：

```tsx | pure
import { useRequest } from '@nocobase/client';
import React from 'react';

export const PluginSettingsTablePage = () => {
  const { data, loading } = useRequest<{ data?: any[] }>({
    url: 'samplesEmailTemplates:list',
  });

  if (loading) return null;

  return <pre>{JSON.stringify(data?.data, null, 2)}</pre>
}
```

次に、`PluginSettingsTable` コンポーネント内で `PluginSettingsTablePage` コンポーネントをインポートします：

```tsx | pure
import { PluginSettingsTablePage } from './PluginSettingsTablePage'
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...

    this.app.router.add(`admin.${name}-page`, {
      path: '/admin/plugin-settings-table-page',
      Component: PluginSettingsTablePage,
    })
  }
}
```

その後、[http://localhost:13000/admin/plugin-settings-table-page](http://localhost:13000/admin/plugin-settings-table-page) にアクセスすると、フォームデータが表示されます。

![img_v3_02av_753dd9f1-9e8c-43c5-a1c6-1fb217844cag](https://static-docs.nocobase.com/img_v3_02av_753dd9f1-9e8c-43c5-a1c6-1fb217844cag.jpg)

### 10. グローバルでの設定データの使用

グローバルで使用し、リアルタイムで更新が必要な場合は、`Context` と NocoBase [Provider](/development/client/providers) の機能を使用します。

`packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTableProvider.tsx` ファイルを作成し、その内容は以下の通りです：

```tsx | pure
import React, { createContext, FC } from 'react';
import { useRequest, UseRequestResult } from '@nocobase/client';

const PluginSettingsTableContext = createContext<UseRequestResult<{ data?: any[] }>>(null as any);

export const PluginSettingsTableProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const request = useRequest<{ data?: any[] }>({
    url: 'samplesEmailTemplates:list',
  });

  console.log('PluginSettingsTableProvider', request.data?.data);

  return <PluginSettingsTableContext.Provider value={request}>{children}</PluginSettingsTableContext.Provider>;
}

export const usePluginSettingsTableRequest = () => {
  return React.useContext(PluginSettingsTableContext);
};
```

次に、`packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx` ファイルを修正し、グローバルに登録します：

```ts
import { PluginSettingsTableProvider } from './PluginSettingsTableProvider'
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...
    this.app.addProvider(PluginSettingsTableProvider)
  }
}
```

その後、フォームが更新された後、グローバルデータを再取得する必要があります。`packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx` を修正します：

```diff
import { usePluginSettingsTableRequest } from './PluginSettingsTableProvider';

// ...

const useSubmitActionProps = (): ActionProps => {
  // ...
+ const globalSettingsTableRequest = usePluginSettingsTableRequest();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      // ...
+     await globalSettingsTableRequest.runAsync();
      message.success('保存に成功しました！');
    },
  };
};

function useDeleteActionProps(): ActionProps {
+ const globalSettingsTableRequest = usePluginSettingsTableRequest();

  return {
    // ...
    async onClick() {
      // ...
+     await globalSettingsTableRequest.runAsync();
      message.success('削除しました！');
    }
  }
}
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-191452.mp4" type="video/mp4">
</video>

### パッケージ化と本番環境へのアップロード

[プラグインの構築とパッケージ化](/development/your-fisrt-plugin#build-and-package-plugin)の文書に従って、プラグインをパッケージ化し、本番環境にアップロードできます。

ソースコードをクローンした場合は、最初にフルビルドを行い、プラグインの依存関係も構築する必要があります。

```bash
yarn build
```

`create-nocobase-app` を使用してプロジェクトを作成した場合は、次のコマンドを直接実行できます：

```bash
yarn build @nocobase-sample/plugin-settings-table --tar
```

これにより、`storage/tar/@nocobase-sample/plugin-settings-table.tar.gz` ファイルが生成されます。その後、[アップロードの方法](/welcome/getting-started/plugin)でインストールします。

## パッケージングと本番環境へのアップロード

[プラグインのビルドとパッケージング](/development/your-fisrt-plugin#ビルドとパッケージング)に従って、プラグインをパッケージングし、本番環境にアップロードできます。

ソースコードをクローンした場合は、最初に全量ビルドを実行し、プラグインの依存関係を構築する必要があります。

```bash
yarn build
```

`create-nocobase-app` で作成したプロジェクトの場合は、以下のコマンドを直接実行できます：

```bash
yarn build @nocobase-sample/plugin-settings-table --tar
```

これにより、`storage/tar/@nocobase-sample/plugin-settings-table.tar.gz` ファイルが作成され、その後[アップロードの方法](/welcome/getting-started/plugin)に従ってインストールできます。

