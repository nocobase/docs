# `Form` ブロック

## シーン説明

`Form` ブロックは NocoBase の中で最も重要なブロックの一つであり、データテーブルのデータを表示および編集するために使用されます。本節では、`Form` ブロックの実装について詳しく説明します。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/2024-07-19-18-07-25.mov" type="video/mp4" />
</video>

## プラグインの初期化

[最初のプラグインを作成する](/development/your-fisrt-plugin) ドキュメントに従い、プロジェクトがない場合は新しいプロジェクトを作成してください。すでにプロジェクトが存在する場合や、クローンしたソースコードがある場合は、このステップをスキップできます。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-block-form
yarn pm enable @nocobase-sample/plugin-block-form
```

プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/locale/](http://localhost:13000/admin/pm/list/locale/) にアクセスすると、プラグインがインストールされ、有効になっていることを確認できます。

## 機能実装

この例を実装する前に、いくつかの基礎知識を理解する必要があります：

- [ant-design Form](https://ant.design/components/form)
- [@formily/antd-v5 Form](https://antd5.formilyjs.org/components/form)
- [SchemaInitializer チュートリアル](/development/client/ui-schema/initializer)：さまざまなブロック、フィールド、操作などをインターフェースに追加するために使用します
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：インターフェースにさまざまなブロック、フィールド、操作などを追加するために使用します
- [UI Schema プロトコル](/development/client/ui-schema/what-is-ui-schema)：Schema の構造と各属性の役割について詳細に説明します
- [Designable デザイナー](/development/client/ui-schema/designable)：Schema の変更に使用します

```bash
.
├── client # クライアントプラグイン
│   ├── FormV3.configActions # 設定初期化器
│   ├── index.ts
│   └── items
│       └── submit # 提出操作
│           ├── index.ts
│           ├── initializer.tsx
│           ├── schema.ts
│           └── settings.ts
│   ├── FormV3.configFields # フィールド初期化器
│   ├── FormV3.settings # 設定
│   ├── FormV3.initializer.ts # 初期化器
│   ├── FormV3.schema.ts # Schema
│   ├── FormV3.tsx # コンポーネント
│   ├── index.tsx # クライアントプラグインエントリ
│   └── locale.ts # 多言語ツール関数
├── locale # 多言語ファイル
│   ├── en-US.json # 英語
│   └── zh-CN.json # 中国語
├── index.ts # サーバープラグインエントリ
└── server # サーバープラグイン
```

### 1. 名前の定義

まず、ブロックの名前を定義する必要があります。これはさまざまな場所で使用されます。

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/constants.ts` を新規作成します：

```ts
export const FormV3BlockName = 'FormV3';
export const FormV3BlockNameLowercase = 'form-v3';
```

> 既存の `Form` コンポーネントと衝突しないように、ここでは `FormV3` と名付けます。

### 2. ブロックコンポーネントの実装

#### 2.1 ブロックコンポーネントの定義

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.tsx` ファイルを新規作成し、次の内容を記述します：

```tsx | pure
import React, { FC } from 'react';
import { Form, FormProps } from '@formily/antd-v5';
import { withDynamicSchemaProps } from '@nocobase/client';
import { FormV3BlockName } from './constants';

export interface FormV3Props extends FormProps {
  children?: React.ReactNode;
}

export const FormV3: FC<FormV3Props> = withDynamicSchemaProps((props) => {
  return <Form {...props} layout={props.layout || 'vertical'} />;
}, { displayName: FormV3BlockName });
```

`Form` コンポーネントは全体として `withDynamicSchemaProps` でラップされた関数コンポーネントです。[withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-と-x-use-component-props) は、Schema 内の動的属性を処理するための高階コンポーネントです。

`withDynamicSchemaProps` を考慮しなければ、`Form` コンポーネントは単純な関数コンポーネントです。

#### 2.2 ブロックコンポーネントの登録

`FormV3` をプラグインを通じてシステムに登録する必要があります。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { FormV3 } from './FormV3';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 });
  }
}

export default PluginBlockFormClient;
```

#### 2.3 ブロックコンポーネントの検証

コンポーネントの検証方法は2つあります：

- 一時ページ検証：一時的にページを作成し、`Form` コンポーネントをレンダリングして、要件を満たしているか確認します。
- ドキュメントサンプル検証：ドキュメント `yarn doc plugins/@nocobase-sample/plugin-block-form` を起動し、ドキュメントサンプルの方式で要件を満たしているか検証します（TODO）。

ここでは `一時ページ検証` の例を示します。一つまたは複数の `Form` コンポーネントを属性パラメータに基づいて追加し、要件を満たしているか確認します。

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { FormV3 } from './FormV3';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 });

    this.app.router.add('admin.block-form-component', {
      path: '/admin/block-form-component',
      Component: () => {
        return (
          <FormV3>
            <SchemaComponent 
              schema={{
                type: 'void',
                properties: {
                  username: {
                    type: 'string',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    title: 'ユーザー名',
                    required: true,
                  },
                  nickname: {
                    type: 'string',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    title: 'ニックネーム',
                  },
                  password: {
                    type: 'string',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    title: 'パスワード',
                  },
                  button: {
                    type: 'void',
                    'x-component': 'Action',
                    title: '送信',
                    'x-use-component-props': useSubmitActionProps,
                  },
                },
              }} 
            />
          </FormV3>
        );
      }
    });
  }
}

export default PluginBlockFormClient;
```

次に `http://localhost:13000/admin/form-component` にアクセスすると、対応するテストページの内容が表示されます。

![20240718175735](https://static-docs.nocobase.com/20240718175735.png)

検証が完了したら、テストページを削除する必要があります。

### 3. ブロック Schema の定義

#### 3.1 ブロック Schema の定義

NocoBase の動的ページはすべて Schema を使用してレンダリングされるため、Schema を定義する必要があります。これにより、後続の操作で `Form` ブロックをインターフェースに追加できます。この節を実装する前に、いくつかの基本知識を理解しておく必要があります：

- [UI Schema プロトコル](/development/client/ui-schema/what-is-ui-schema)：Schema の構造と各属性の役割について詳しく説明しています。

新しく `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.schema.ts` ファイルを作成します：

```tsx | pure
import { ISchema, useDataBlockProps } from "@nocobase/client";

import { FormV3BlockName, FormV3BlockNameLowercase } from "./constants";
import { FormV3Props } from "./FormV3";

export function useFormV3Props(): FormV3Props {
  const blockProps = useDataBlockProps();
  return blockProps[FormV3BlockNameLowercase];
}

interface GetFormV3SchemaOptions {
  dataSource?: string;
  collection: string;
  properties?: ISchema['properties'];
}

export function getFormV3Schema(options: GetFormV3SchemaOptions): ISchema {
  const { dataSource, collection, properties = {} } = options;
  return {
    type: 'void',
    'x-component': 'CardItem',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      [FormV3BlockNameLowercase]: {},
    },
    properties: {
      [FormV3BlockNameLowercase]: {
        type: 'void',
        'x-component': FormV3BlockName,
        'x-use-component-props': 'useFormV3Props',
        properties: {
          ...properties,
        }
      },
    }
  }
}
```

`getFormV3Schema`：
  - `type`：タイプ。ここでは `void`、データのない純粋なUIノードを示します。
  - `'x-component': 'CardItem'`：[CardItem コンポーネント](https://client.docs.nocobase.com/components/card-item)。現在のブロックはすべてカード内にラップされており、スタイル、レイアウト、ドラッグ＆ドロップなどの機能を提供します。
  - `x-decorator: 'DataBlockProvider'`：データブロックプロバイダー。データを提供します。DataBlockProviderについての詳細は[こちら](https://client.docs.nocobase.com/core/data-block/data-block-provider)を参照してください。
  - `x-decorator-props`：`DataBlockProvider` のプロパティ
    - `dataSource`：データソース
    - `collection`：データテーブル
    - `[FormV3BlockNameLowercase]: {}`：`FormV3` コンポーネントのプロパティ
  - `properties: { [FormV3BlockNameLowercase]: { ... } }`：子ノード
    - `[FormV3BlockNameLowercase]`：`FormV3` コンポーネントのプロパティ
    - `'x-component': FormV3BlockName`：`FormV3` コンポーネント
    - `'x-use-component-props': 'useFormV3Props'`：[x-use-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-と-x-use-component-props) を使用して `FormV3` コンポーネントのプロパティを取得します。
  - `"x-toolbar": "BlockSchemaToolbar"`：`BlockSchemaToolbar` は左上隅に現在のデータテーブルを表示するためのもので、一般的に `DataBlockProvider` と組み合わせて使用されます。

`useFormV3Props`：Hooks。`FormV3` コンポーネントのプロパティを取得するために使用されます。
  - [useDataBlockProps](https://client.docs.nocobase.com/core/data-block/data-block-provider#usedatablockprops)：[DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider) の props 属性、つまり `x-decorator-props` の値を取得します。
  - `blockProps[FormV3BlockNameLowercase]`：`FormV3` コンポーネントのプロパティに対応します。

上記の Schema を React コンポーネントに変換すると次のようになります：

```tsx | pure
<CardItem>
  <DataBlockProvider dataSource={dataSource} collection={collection} formV3={{}}>
    <FormV3 {...useFormV3Props()}>
      {children}
    </FormV3>
  </DataBlockProvider>
</CardItem>
```

#### 3.2 スコープの登録

`useFormV3Props` をシステムに登録する必要があります。そうしないと [x-use-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-と-x-use-component-props) が対応するスコープを見つけることができません。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { FormV3 } from './FormV3';
import { useFormV3Props } from './FormV3.schema';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 });
    this.app.addScopes({ useFormV3Props });
  }
}

export default PluginBlockFormClient;
```

スコープに関する詳細は[こちら](/plugin-samples/component-and-scope/global)を参照してください。

#### 3.3 ブロック Schema の検証

コンポーネントの検証と同様に、テンポラリーページ検証またはドキュメントサンプル検証の方法で Schema が要件を満たしているかを検証できます。ここではテンポラリーページ検証を例にします：

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { FormV3 } from './FormV3';
import { useFormV3Props, getFormV3Schema } from './FormV3.schema';

import { useForm } from '@formily/react';
function useSubmitActionProps(): ActionProps {
  const form = useForm();

  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;

      console.log('values', values);
    },
  };
}

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 })
    this.app.addScopes({ useFormV3Props });

    this.app.router.add('admin.block-form-schema', {
      path: '/admin/block-form-schema',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{
              properties: {
                test: getFormV3Schema({
                  collection: 'users',
                  properties: {
                    username: {
                      type: 'string',
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    nickname: {
                      type: 'string',
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    submit: {
                      type: 'void',
                      'x-component': 'Action',
                      title: '送信',
                      'x-use-component-props': useSubmitActionProps,
                    },
                  }
                })
              }
            }} />
          </div>
        </>
      }
    })
  }
}

export default PluginBlockFormClient;
```

SchemaComponent に関する詳細な説明は、[SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) ドキュメントを参照してください。

[http://localhost:13000/admin/block-form-schema](http://localhost:13000/admin/block-form-schema) にアクセスすると、対応するテストページの内容が表示されます。

![20240718180826](https://static-docs.nocobase.com/20240718180826.png)

検証が完了したら、テストページを削除する必要があります。

### 4. Schema Initializer Itemの定義

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.initializer.tsx` ファイルを新規作成します：

```ts
import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';
import { FormOutlined } from '@ant-design/icons';

import { getFormV3Schema } from './FormV3.schema';
import { FormV3BlockName } from './constants';
import { useT } from './locale';

export const formV3InitializerItem: SchemaInitializerItemType = {
  name: FormV3BlockName,
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();

    return {
      title: t(FormV3BlockName),
      icon: <FormOutlined />,
      componentType: FormV3BlockName,
      onCreateBlockSchema({ item }) {
        insert(getFormV3Schema({ dataSource: item.dataSource, collection: item.name }));
      },
    };
  },
}
```

`formV3InitializerItem`：

- `Component`： [追加シンプルブロック](/plugin-samples/schema-initializer/block-simple) で使用される `type` とは異なり、こちらでは `Component` を使用します。 [2つの定義方法](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#two-ways-to-define-component-and-type) のいずれかを選択できます。
- `useComponentProps`：`DataBlockInitializer` コンポーネントのプロパティ
  - `title`：タイトル
  - `icon`：アイコン。その他のアイコンについては [Ant Design Icons](https://ant.design/components/icon/) を参照してください。
  - `componentType`：コンポーネントタイプ。ここでは `Info` です。
  - `onCreateBlockSchema`：データテーブルをクリックした際のコールバック
    - `item`：クリックしたデータテーブルの情報
      - `item.name`：データテーブル名
      - `item.dataSource`：データテーブルに関連するデータソース
  - [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：スキーマを挿入するためのメソッドを提供します。

スキーマイニシャライザーの定義については、[スキーマイニシャライザー](https://client.docs.nocobase.com/core/ui-schema/schema-initializer) ドキュメントを参照してください。

### 5. Add block に追加

システム内には多くの `Add block` ボタンがありますが、**name は異なります**。

![img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g](https://static-docs.nocobase.com/img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g.jpg)

ページレベルの `Add block` に追加する必要がある場合、対応する `name` を知る必要があります。TODO方式を使用して、適切な `name` を確認できます。

TODO

上の図から、ページレベルの `Add block` に対応する name は `page:addBlock` であり、`Data Blocks` に対応する name は `dataBlocks` です。

次に、`packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx` ファイルを修正します：

```tsx | pure
import { Plugin } from '@nocobase/client';

import { FormV3 } from './FormV3';
import { useFormV3Props } from './FormV3.schema';
import { formV3InitializerItem } from './FormV3.initializer';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 });
    this.app.addScopes({ useFormV3Props });

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${formV3InitializerItem.name}`, formV3InitializerItem);
  }
}

export default PluginBlockFormClient;
```

ここでは [app.schemaInitializerManager.addItem](https://client.docs.nocobase.com/core/ui-schema/schema-initializer-manager#schemainitializermanageradditem) を使用して、`formV3InitializerItem` を対応するイニシャライザーサブアイテムに追加します。`page:addBlock` はページ上の `Add block` の name であり、`dataBlocks` はその親の name です。

その後、`Add block` ボタンにホバーすると、新しいブロックタイプである `FormV3` が表示されます。

![20240719112105](https://static-docs.nocobase.com/20240719112105.png)

`Users` テーブルをクリックすると、新しい `FormV3` ブロックを追加できますが、現在子ノードは空です。

![20240719112149](https://static-docs.nocobase.com/20240719112149.png)

### 6. スキーマ設定の実装

現在のブロックは追加のみ可能で、削除はできません。`Schema Settings` を実装して、いくつかの属性と操作を設定する必要があります。

#### 6.1 スキーマ設定の定義

完全なブロックにはスキーマ設定が必要で、いくつかの属性と操作を設定します。

新たに `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.settings/index.ts` ファイルを作成します：

```ts | pure
import { SchemaSettings } from "@nocobase/client";
import { FormV3BlockNameLowercase } from "../constants";

export const formV3Settings = new SchemaSettings({
  name: `blockSettings:${FormV3BlockNameLowercase}`,
  items: [
    // TODO
  ]
});
```

#### 6.2 スキーマ設定の登録

```ts
import { Plugin } from '@nocobase/client';
import { formV3Settings } from './FormV3.settings';

export class PluginBlockFormClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(formV3Settings);
  }
}

export default PluginBlockFormClient;
```

#### 6.3 スキーマ設定の使用

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/schema/index.ts` の `getFormV3Schema` を修正します：

```diff
+ import { formV3Settings } from "./FormV3.settings";

export function getFormV3Schema(options: GetFormV3SchemaOptions): ISchema {
  const { dataSource, collection, properties = {} } = options;
  return {
    type: 'void',
    'x-decorator': 'CardItem',
+   'x-settings': formV3Settings.name,
    // ...
  }
};
```

### 7. スキーマ設定アイテムの実装

現在、`スキーマ設定` は実装されていますが、操作は実装されていません。要求に応じて各操作を実装する必要があります。

スキーマ設定がサポートする組み込み操作タイプについては、[スキーマ設定 - 組み込みコンポーネントとタイプ](https://client.docs.nocobase.com/core/ui-schema/schema-settings#built-in-components-and-types) ドキュメントを参照してください。

#### 7.1 `remove` 操作の実装

現在、初期化子を介して追加されたブロックは削除できません。`remove` 操作を実装する必要があります。

[NocoBase] には、[remove](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsremove-1) 操作タイプが組み込まれています。`packages/plugins/@nocobase-sample/plugin-block-form/src/client/settings/index.ts` ファイルを修正します：

```diff
import { SchemaSettings } from '@nocobase/client';
import { BlockNameLowercase } from '../constants';

export const formV3Settings = new SchemaSettings({
  name: `blockSettings:${FormV3BlockNameLowercase}`,
  items: [
+   {
+     type: 'remove',
+     name: 'remove',
+     componentProps: {
+       removeParentsIfNoChildren: true,
+       breakRemoveOn: {
+         'x-component': 'Grid',
+       },
+     }
+   }
  ]
});
```

- componentProps
  - `removeParentsIfNoChildren`：子ノードがない場合、親ノードを削除するかどうか
  - `breakRemoveOn`：削除時の中断条件。`Add Block` は自動的に子項目を `Grid` で包みますので、ここで `breakRemoveOn: { 'x-component': 'Grid' }` を設定します。`Grid` を削除する際には、上位の削除を行わないようにします。

:::warning
スキーマの変更は、以前に追加されたブロックには影響しません。新しく追加されたブロックのみが最新のスキーマを持ちます。効果を確認するために、新しいブロックを追加する必要があります。
:::

![20240719145202](https://static-docs.nocobase.com/20240719145202.png)

#### 7.2 `ブロックタイトルの編集` 操作の実装

`ブロックタイトルの編集` も一般的な操作です。`@nocobase/client` には `SchemaSettingsBlockTitleItem` コンポーネントが組み込まれており、直接使用できます。

```diff
- import { SchemaSettings } from "@nocobase/client";
+ import { SchemaSettings, SchemaSettingsBlockTitleItem } from "@nocobase/client";

export const formV3Settings = new SchemaSettings({
  name: `blockSettings:${FormV3BlockNameLowercase}`,
  items: [
+   {
+     name: 'blockTitle',
+     Component: SchemaSettingsBlockTitleItem,
+   },
    {
      type: 'remove',
      name: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn: {
          'x-component': 'Grid',
        },
      }
    },
  ]
});
```

### 8. `Configure actions` の実装

`Configure actions` は、`Submit` や `Custom request` などの操作を追加するために使用されます。

`Configure actions` に関する詳細な説明は、[ブロック内埋め込まれた Initializer - 操作の設定](/plugin-samples/schema-initializer/configure-actions) ドキュメントをご覧ください。

#### 8.1 Initializerの定義

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts` ファイルを新規作成します：

```ts
import { SchemaInitializer } from "@nocobase/client";
import { FormV3BlockNameLowercase } from "../constants";

export const formV3ConfigureActionsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureActions`,
  icon: 'SettingOutlined',
  title: tStr('Configure actions'),
  style: {
    marginLeft: 8,
  },
  items: [
    // TODO
  ]
});
```

上記のコードで、新しい `SchemaInitializer` を定義しましたが、その子項目は一時的に空です。

- [SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：Schema Initializer インスタンスを作成するためのもの
- `icon`：アイコン、詳細なアイコンは Ant Design [Icons](https://ant.design/components/icon/) を参照
- `title`：ボタンのタイトル
- [items](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types)：ボタンの下の子項目

#### 8.2 Initializerの登録

次に、`packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx` ファイルを修正し、この initializer をインポートして登録します：

```tsx | pure
// ...
import { formV3ConfigureActionsInitializer } from './FormV3.configActions';

export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(formV3ConfigureActionsInitializer);

    // ...
  }
}
```

#### 8.3 Initializerの使用

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.schema.ts` ファイルを修正し、`actionBar` 子ノードを追加します：

```diff
// ...
+ import { formV3ConfigureActionsInitializer } from "./FormV3.configActions";

export function getFormV3Schema(options: GetFormV3SchemaOptions): ISchema {
  const { dataSource, collection, properties = {} } = options;
  return {
    type: 'void',
    'x-component': 'CardItem',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      [FormV3BlockNameLowercase]: {},
    },
    'x-settings': formV3Settings.name,
    "x-toolbar": "BlockSchemaToolbar",
    properties: {
      [FormV3BlockNameLowercase]: {
        type: 'void',
        'x-component': FormV3BlockName,
        'x-use-component-props': 'useFormV3Props',
        properties: {
          ...properties as any,
+         actionBar: {
+           type: 'void',
+           "x-initializer": formV3ConfigureActionsInitializer.name,
+           "x-component": "ActionBar",
+           "x-component-props": {
+             "layout": "one-column",
+             "style": {
+               "marginTop": 24
+             }
+           },
+         },
        }
      }
    }
  }
}
```

`configure actions` は一般に [ActionBar](https://client.docs.nocobase.com/components/action#actionbar) コンポーネントと組み合わせて使用されます。

`FormV3` の子ノードに `actionBar` ノードを追加しました。

- `type: 'void'`：タイプは `void` で、これはコンテナであることを示します。
- `x-component: 'ActionBar'`：ボタンを表示するために [ActionBar](https://client.docs.nocobase.com/components/action#actionbar) コンポーネントを使用します。
- `x-initializer: formV3ConfigureActionsInitializer.name`：作成した Initializer を使用します。
- `x-component-props.layout: 'one-column'`：左側のレイアウトで、具体例は [ActionBar one-column](https://client.docs.nocobase.com/components/action#one-column) を参照してください。

![20240719152528](https://static-docs.nocobase.com/20240719152528.png)

### 9. `Configure actions` アイテムを実装する

```bash
.
├── FormV3.configActions
├── index.ts
└── items
    └── submit # 提出操作
        ├── index.ts
        ├── initializer.tsx
        ├── schema.ts
        └── settings.ts
```

#### 9.1 `Submit` 操作を実装する

##### 9.1.1 スキーマを定義する

新しく `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/schema.ts` ファイルを作成します：

```ts
import { useForm } from '@formily/react';
import { App } from 'antd';
import { ActionProps, useDataBlockResource } from "@nocobase/client";
import { tStr } from '../../../locale';

export const useFormV3SubmitActionProps = (): ActionProps => {
  const resource = useDataBlockResource();
  const form = useForm();
  const { message } = App.useApp();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.create({ values });
      await form.reset();
      message.success('作成成功');
    },
  };
};

export const submitActionSchema = {
  type: 'void',
  title: tStr('Submit'),
  'x-component': 'Action',
  'x-use-component-props': 'useFormV3SubmitActionProps',
  'x-toolbar': 'ActionSchemaToolbar'
};
```

`submitActionSchema`：
  - `type: 'void'`：タイプは `void` で、通常のUIであり、データを含まないことを示します。
  - `x-component: 'Action'`：ボタンを表示するために [Action](https://client.docs.nocobase.com/components/action) コンポーネントを使用します。
  - `title: 'Submit'`：ボタンのタイトルです。
  - `x-use-component-props: 'useFormV3SubmitActionProps'`：`useFormV3SubmitActionProps` フックから返されるプロパティを使用します。スキーマはサーバーに保存されるため、ここでは文字列の形式を使用する必要があります。
  - `'x-toolbar': 'ActionSchemaToolbar'`：一般的に `Action` コンポーネントと組み合わせて使用され、デフォルトの ToolBar とは異なり、Action の右上隅の `Initializer` を隠し、ドラッグと設定のみを保持します。

`useFormV3SubmitActionProps`：これは React フックで、Action コンポーネントのプロパティを返す必要があります。
  - [useDataBlockResource()](https://client.docs.nocobase.com/core/data-block/data-block-request-provider)：データブロックのリクエストオブジェクトで、`DataBlockProvider` 内部から提供され、データブロックのデータを自動的に取得するために使用されます。
    - `resource.create`：データを作成するためのメソッドです。
  - `useForm`：Formily のフォームオブジェクトを取得します。
    - `form.submit()`：フォームを提出し、バリデーションをトリガーします。
    - `form.values`：フォームデータを取得します。
    - `form.reset()`：フォームをリセットします。
  - `type: 'primary'`：ボタンのタイプは `primary` です。
  - `onClick`：クリックイベントです。

次に、これを `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/index.ts` でエクスポートします：

```ts
export * from './schema';
```

##### 9.1.2 スコープを登録する

`useFormV3SubmitActionProps` をコンテキストに登録する必要があります。`packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx` ファイルを修正します：

```diff
// ...
+ import { useFormV3SubmitActionProps } from './FormV3.configActions/items/submit';

export class PluginBlockFormClient extends Plugin {
  async load() {
    // ...
-   this.app.addScopes({ useFormV3Props });
+   this.app.addScopes({ useFormV3Props, useFormV3SubmitActionProps });
  }
}
```

`SchemaComponentOptions` の使用方法については、[SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions) ドキュメントや [全体的なコンポーネントおよびスコープの登録](/plugin-samples/component-and-scope/global) を参照してください。

##### 9.1.3 SchemaInitializer アイテムを定義する

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/initializer.tsx` ファイルを新規作成します：

```tsx | pure
import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";
import { submitActionSchema } from "./schema";
import { tStr } from '../../../locale';

export const submitActionInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: 'submit',
  title: tStr('Submit'),
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      onClick() {
        insert(submitActionSchema);
      },
    };
  },
};
```

- `type: 'item'`：タイプは `item` で、クリック時に `onClick` イベントをトリガーします。
- `name: 'submit'`：一意の識別子で、異なるスキーマアイテムや CRUD 操作を区別します。
- `title: 'Submit'`：ボタンのタイトルです。

スキーマアイテムの定義についての詳細は、[Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) ドキュメントを参照してください。

次に、`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/index.ts` ファイルを修正してエクスポートします：

```tsx | pure
export * from './initializer';
```

###### 9.1.4 スキーマイニシャライザーアイテムを使用する

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/index.ts` ファイルを修正し、`submitActionInitializerItem` をアイテムに追加します：

```diff
// ...
+ import { submitActionInitializerItem } from "./items/submit";

export const formV3ConfigureActionsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureActions`,
  icon: 'SettingOutlined',
  title: tStr('Configure actions'),
  style: {
    marginLeft: 8,
  },
  items: [
+   submitActionInitializerItem,
  ]
});
```

##### 9.1.4 設定を定義する

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/settings.ts` ファイルを新規作成します：

```tsx | pure
import { ButtonEditor, SchemaSettings, useSchemaToolbar } from "@nocobase/client";

export const formV3SubmitActionSettings = new SchemaSettings({
  name: `actionSettings:formV3Submit`,
  items: [
    {
      name: 'editButton',
      Component: ButtonEditor,
      useComponentProps() {
        const { buttonEditorProps } = useSchemaToolbar();
        return buttonEditorProps;
      },
    },
    {
      name: 'remove',
      type: 'remove',
    },
  ]
});
```

`formV3SubmitActionSettings`：
  - `editButton`：ボタンのスタイルを編集するために使用します。
  - `remove`：削除するために使用します。

スキーマ設定の定義についての詳細は、[Schema Settings](https://client.docs.nocobase.com/core/ui-schema/schema-settings) ドキュメントを参照してください。

次に、`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/index.ts` ファイルを修正してエクスポートします：

```tsx | pure
export * from './settings';
```

##### 9.1.5 設定を登録する

次に、`formV3SubmitActionSettings` をシステムに登録します。`packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx` ファイルを修正します：

```diff
- import { useFormV3SubmitActionProps } from './FormV3.configActions/items/submit';
+ import { formV3SubmitActionSettings, useFormV3SubmitActionProps } from './FormV3.configActions/items/submit';

export class PluginBlockFormClient extends Plugin {
  async load() {
+   this.app.schemaSettingsManager.add(formV3SubmitActionSettings);
  }
}
```

##### 9.1.6 設定を使用する

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/schema.ts` ファイルの `submitActionSchema` メソッドを修正し、`x-settings` を `formV3SubmitActionSettings.name` に設定します。

```diff
+ import { formV3SubmitActionSettings } from './settings';

export const submitActionSchema = {
  type: 'void',
  title: tStr('Submit'),
  'x-component': 'Action',
+ 'x-settings': formV3SubmitActionSettings.name,
  'x-use-component-props': 'useFormV3SubmitActionProps',
  'x-toolbar': 'ActionSchemaToolbar'
};
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240719160328.mov" type="video/mp4" />
</video>

#### 9.2 `Custom request` の実装

`Custom request` は一般的な操作であり、NocoBase には `CustomRequest` コンポーネントが組み込まれています。これを直接使用することができます。

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/index.ts` ファイルを修正します：

```diff
import { SchemaInitializer } from "@nocobase/client";
import { FormV3BlockNameLowercase } from "../constants";
import { submitActionInitializerItem } from "./items/submit";
+ import { tStr } from '../locale';

export const formV3ConfigureActionsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureActions`,
  icon: 'SettingOutlined',
  title: tStr('Configure actions'),
  style: {
    marginLeft: 8,
  },
  items: [
    submitActionInitializerItem,
+   {
+     name: 'customRequest',
+     title: tStr('Custom request'),
+     Component: 'CustomRequestInitializer',
+   },
  ]
});
```

![20240719165222](https://static-docs.nocobase.com/20240719165222.png)

### 10. `Configure fields` の実装

`Configure fields` の役割は、FormV3 ブロックにデータフィールドを追加することです。

#### 10.1 Initializerの定義

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts` ファイルを新規作成します：

```ts
import { gridRowColWrap, SchemaInitializer } from "@nocobase/client";
import { FormV3BlockNameLowercase } from '../constants';

export const formV3ConfigureFieldsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureFields`,
  icon: 'SettingOutlined',
  wrap: gridRowColWrap,
  title: tStr('Configure fields'),
  items: [
    // TODO
  ]
});
```

`formV3ConfigureFieldsInitializer`：
  - `name`：一意の識別子
  - `icon`：アイコン
  - `wrap`：各フィールドを `Grid` で包むことで、レイアウトやドラッグ＆ドロップが容易になります。
  - `title`：タイトル
  - `items`：子項目

スキーマアイテムの定義に関する詳細は、[スキーマイニシャライザーアイテム](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) ドキュメントを参照してください。

#### 10.2 Initializerの登録

次に、`packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx` ファイルを修正し、この initializer をインポートして登録します：

```diff
+ import { formV3ConfigureFieldsInitializer } from './FormV3.configFields';

export class PluginBlockFormClient extends Plugin {
  async load() {
-   this.app.schemaInitializerManager.add(formV3ConfigureActionsInitializer);
+   this.app.schemaInitializerManager.add(formV3ConfigureActionsInitializer, formV3ConfigureFieldsInitializer);
    // ...
  }
}
```

#### 10.3 Initializerの使用

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.schema.ts` ファイルを修正し、`fields` 子ノードを追加します：

```diff
// ...
+ import { formV3ConfigureFieldsInitializer } from "./FormV3.configFields";

export function getFormV3Schema(options: GetFormV3SchemaOptions): ISchema {
  const { dataSource, collection, properties = {} } = options;
  return {
    type: 'void',
    'x-component': 'CardItem',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      [FormV3BlockNameLowercase]: {},
    },
    'x-settings': formV3Settings.name,
    "x-toolbar": "BlockSchemaToolbar",
    properties: {
      [FormV3BlockNameLowercase]: {
        type: 'void',
        'x-component': FormV3BlockName,
        'x-use-component-props': 'useFormV3Props',
        properties: {
          ...properties as any,
+         fields: {
+           "type": "void",
+           "x-component": "Grid",
+           "x-initializer": formV3ConfigureFieldsInitializer.name
+         },
          actionBar: {
            type: 'void',
            "x-initializer": formV3ConfigureActionsInitializer.name,
            "x-component": "ActionBar",
            "x-component-props": {
              "layout": "one-column",
              "style": {
                "marginTop": 24
              }
            },
          },
        }
      }
    }
  }
}
```

レイアウトを容易にするために、これを `Grid` で包んで、レイアウトやドラッグ＆ドロップを簡単にします。

![20240719171211](https://static-docs.nocobase.com/20240719171211.png)

### 11. `Configure fields` アイテムを実装する

#### 11.1 `Collection Fields` の実装

`Configure fields` は、[CollectionFieldsToInitializerItems](https://client.docs-en.nocobase.com/core/data-source/collection-fields-to-initializer-items#collectionfieldstoinitializeritems) を基に実装されます。

ここでは、内蔵の `CollectionFieldsToFormInitializerItems` を直接使用することができます。このコンポーネントは、データテーブルのフィールドを `Initializer` の子項目に変換します。

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts` ファイルを修正します：

```diff
- import { gridRowColWrap, SchemaInitializer } from "@nocobase/client";
+ import { gridRowColWrap, SchemaInitializer, CollectionFieldsToFormInitializerItems } from "@nocobase/client";

export const formV3ConfigureFieldsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureFields`,
  icon: 'SettingOutlined',
  wrap: gridRowColWrap,
  title: tStr('Configure fields'),
  items: [
+   {
+     name: 'collectionFields',
+     Component: CollectionFieldsToFormInitializerItems,
+   },
  ]
});
```

- `name: 'collectionFields'`：一意の識別子
- `Component: CollectionFieldsToFormInitializerItems`：内蔵のコンポーネントで、データテーブルのフィールドを FormItem タイプの Initializer 子項目に変換します。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/2024-07-19-17-17-38.mov" type="video/mp4" />
</video>

#### 11.2 `Add text` の実装

テキストをインターフェースに追加することは一般的なニーズであり、NocoBase では `@nocobase/client` に `MarkdownFormItemInitializer` が提供されています。

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts` ファイルを修正します：

```diff
// ...
+ import { tStr } from '../locale';

export const formV3ConfigureFieldsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureFields`,
  icon: 'SettingOutlined',
  wrap: gridRowColWrap,
  title: tStr('Configure fields'),
  items: [
    {
      name: 'collectionFields',
      Component: CollectionFieldsToFormInitializerItems,
    },
+   {
+     name: 'divider',
+     type: 'divider',
+   },
+   {
+     name: 'addText',
+     title: tStr('Add text'),
+     Component: 'MarkdownFormItemInitializer',
+   },
  ]
});
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/2024-07-19-17-27-21.mov" type="video/mp4" />
</video>

### 12. 権限

TODO

### 13. 多言語

[http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) にアクセスして、複数の言語を追加し、右上で言語を切り替えることができます。

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

FormV3 で使用される文言は FormV2 と同じであり、多言語対応は既に行われているため、ここでの変更は必要ありません。

## パッケージ化と本番環境へのアップロード

[プラグインのビルドとパッケージ化](/development/your-fisrt-plugin#プラグインのビルドとパッケージ化) ドキュメントに従って、プラグインをパッケージ化し、本番環境にアップロードできます。

クローンしたソースコードの場合、最初にイニシャルビルドを実行し、プラグインの依存関係を構築する必要があります。

```bash
yarn build
```

`create-nocobase-app` で作成したプロジェクトの場合、次のコマンドを直接実行できます：

```bash
yarn build @nocobase-sample/plugin-block-form --tar
```

これで `storage/tar/@nocobase-sample/plugin-block-form.tar.gz` ファイルが生成され、[アップロードの方法](/welcome/getting-started/plugin) を通じてインストールできます。

```plaintext
##### 9.1.2 スコープの登録

`useFormV3SubmitActionProps` をコンテキストに登録する必要があります。`packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx` ファイルを修正します：

```diff
// ...
+ import { useFormV3SubmitActionProps } from './FormV3.configActions/items/submit';
```

```plaintext
`SchemaComponentOptions` の使用については、[SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions) ドキュメントおよび [グローバル登録 Component と Scope](/plugin-samples/component-and-scope/global) を参照してください。

##### 9.1.3 SchemaInitializer Item の定義

新たに `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/initializer.tsx` ファイルを作成します：

```tsx | pure
import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";
import { submitActionSchema } from "./schema";
import { tStr } from '../../../locale';

export const submitActionInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: 'submit',
  title: tStr('Submit'),
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      onClick() {
        insert(submitActionSchema);
      },
    };
  },
};
```

- `type: 'item'`：タイプは `item` で、クリック時に `onClick` イベントが発生します。
- `name: 'submit'`：ユニークな識別子で、異なる Schema Item と CRUD 操作を区別します。
- `title: 'Submit'`：ボタンのタイトルです。

Schema Item の定義については、[Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) ドキュメントを参照してください。

次に、`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/index.ts` を修正し、エクスポートします：

```tsx | pure
export * from './initializer';
```

###### 10.1.4 SchemaInitializer Item の使用

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/index.ts` ファイルを修正し、`submitActionInitializerItem` を `items` に追加します：

```diff
// ...
+ import { submitActionInitializerItem } from "./items/submit";

export const formV3ConfigureActionsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureActions`,
  icon: 'SettingOutlined',
  title: 'Configure actions',
  style: {
    marginLeft: 8,
  },
  items: [
+   submitActionInitializerItem,
  ]
});
```

##### 9.1.4 settings の定義

新たに `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/settings.ts` ファイルを作成します：

```tsx | pure
import { ButtonEditor, SchemaSettings, useSchemaToolbar } from "@nocobase/client";

export const formV3SubmitActionSettings = new SchemaSettings({
  name: `actionSettings:formV3Submit`,
  items: [
    {
      name: 'editButton',
      Component: ButtonEditor,
      useComponentProps() {
        const { buttonEditorProps } = useSchemaToolbar();
        return buttonEditorProps;
      },
    },
    {
      name: 'remove',
      type: 'remove',
    }
  ]
});
```

`formV3SubmitActionSettings`：
  - `editButton`：ボタンのスタイルを編集するためのものです。
  - `remove`：削除に使用します。

Schema Settings の定義については、[Schema Settings](https://client.docs.nocobase.com/core/ui-schema/schema-settings) ドキュメントを参照してください。

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/index.ts` を修正し、以下をエクスポートします：

```tsx | pure
export * from './settings';
```

##### 9.1.5 settings の登録

次に、`formV3SubmitActionSettings` をシステムに登録します。`packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx` ファイルを修正します：

```diff
- import { useFormV3SubmitActionProps } from './FormV3.configActions/items/submit';
+ import { formV3SubmitActionSettings, useFormV3SubmitActionProps } from './FormV3.configActions/items/submit';

export class PluginBlockFormClient extends Plugin {
  async load() {
+   this.app.schemaSettingsManager.add(formV3SubmitActionSettings);
  }
}
```

##### 9.1.6 settings の使用

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/items/submit/schema.ts` ファイルの `submitActionSchema` メソッドを修正し、`x-settings` を `formV3SubmitActionSettings.name` に設定します。

```diff
+ import { formV3SubmitActionSettings } from './settings';

export const submitActionSchema = {
  type: 'void',
  title: tStr('Submit'),
  'x-component': 'Action',
+ 'x-settings': formV3SubmitActionSettings.name,
  'x-use-component-props': 'useFormV3SubmitActionProps',
  'x-toolbar': 'ActionSchemaToolbar'
};
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240719160328.mov" type="video/mp4" />
</video>

#### 9.2 `Custom request` の実装

`Custom request` は一般的な操作で、NocoBase には `CustomRequest` コンポーネントが内蔵されているため、直接使用できます。

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configActions/index.ts` を修正します：

```diff
import { SchemaInitializer } from "@nocobase/client";
import { FormV3BlockNameLowercase } from "../constants";
import { submitActionInitializerItem } from "./items/submit";
+ import { tStr } from '../locale';

export const formV3ConfigureActionsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureActions`,
  icon: 'SettingOutlined',
  title: 'Configure actions',
  style: {
    marginLeft: 8,
  },
  items: [
    submitActionInitializerItem,
+   {
+     name: 'customRequest',
+     title: tStr('Custom request'),
+     Component: 'CustomRequestInitializer',
+   },
  ]
});
```

![20240719165222](https://static-docs.nocobase.com/20240719165222.png)

### 10. `Configure fields` の実装

`Configure fields` の役割は、FormV3 ブロックにデータフィールドを追加することです。

#### 10.1 initializerの定義

新たに `packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts` ファイルを作成します：

```ts
import { gridRowColWrap, SchemaInitializer } from "@nocobase/client";
import { FormV3BlockNameLowercase } from '../constants';

export const formV3ConfigureFieldsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureFields`,
  icon: 'SettingOutlined',
  wrap: gridRowColWrap,
  title: tStr('Configure fields'),
  items: [
    // TODO
  ]
});
```

`formV3ConfigureFieldsInitializer`：
- `name`：ユニークな識別子
- `icon`：アイコン
- `wrap`：各フィールドを `Grid` でラップし、レイアウトとドラッグアンドドロップを容易にします
- `title`：タイトル
- `items`：サブアイテム

Schema Item の定義についての詳細は、[Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) ドキュメントを参照してください。

#### 10.2 初期化子の登録

次に `packages/plugins/@nocobase-sample/plugin-block-form/src/client/index.tsx` ファイルを修正し、この初期化子をインポートして登録します：

```diff
+ import { formV3ConfigureFieldsInitializer } from './FormV3.configFields';

export class PluginBlockFormClient extends Plugin {
  async load() {
-   this.app.schemaInitializerManager.add(formV3ConfigureActionsInitializer);
+   this.app.schemaInitializerManager.add(formV3ConfigureActionsInitializer, formV3ConfigureFieldsInitializer);
    // ...
  }
}
```

#### 10.3 初期化子の使用

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.schema.ts` ファイルを修正し、`fields` サブノードを追加します：

```diff
// ...
+ import { formV3ConfigureFieldsInitializer } from "./FormV3.configFields";

export function getFormV3Schema(options: GetFormV3SchemaOptions): ISchema {
  const { dataSource, collection, properties = {} } = options;
  return {
    type: 'void',
    'x-component': 'CardItem',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      [FormV3BlockNameLowercase]: {},
    },
    'x-settings': formV3Settings.name,
    "x-toolbar": "BlockSchemaToolbar",
    properties: {
      [FormV3BlockNameLowercase]: {
        type: 'void',
        'x-component': FormV3BlockName,
        'x-use-component-props': 'useFormV3Props',
        properties: {
          ...properties as any,
+         fields: {
+           "type": "void",
+           "x-component": "Grid",
+           "x-initializer": formV3ConfigureFieldsInitializer.name
+         },
          actionBar: {
            type: 'void',
            "x-initializer": formV3ConfigureActionsInitializer.name,
            "x-component": "ActionBar",
            "x-component-props": {
              "layout": "one-column",
              "style": {
                "marginTop": 24
              }
            },
          },
        }
      }
    }
  }
}
```

レイアウトを簡素化するために、これを `Grid` で包み、レイアウトやドラッグアンドドロップを容易にします。

![20240719171211](https://static-docs.nocobase.com/20240719171211.png)

### 11. `Configure fields` アイテムの実装

#### 11.1 `Collection Fields` の実装

`Configure fields` は主に [CollectionFieldsToInitializerItems](https://client.docs-en.nocobase.com/core/data-source/collection-fields-to-initializer-items#collectionfieldstoinitializeritems) に基づいて実装されます。

ここでは、コア提供の `CollectionFieldsToFormInitializerItems` を直接使用できます。これはデータベースのフィールドを `Initializer` のサブアイテムに変換する役割を持ちます。

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts` ファイルを修正します：

```diff
- import { gridRowColWrap, SchemaInitializer } from "@nocobase/client";
+ import { gridRowColWrap, SchemaInitializer, CollectionFieldsToFormInitializerItems } from "@nocobase/client";

export const formV3ConfigureFieldsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureFields`,
  icon: 'SettingOutlined',
  wrap: gridRowColWrap,
  title: 'フィールドの設定',
  items: [
    {
      name: 'collectionFields',
      Component: CollectionFieldsToFormInitializerItems,
    },
  ]
});
```

- `name: 'collectionFields'`：ユニークな識別子
- `Component: CollectionFieldsToFormInitializerItems`：データテーブルのフィールドをFormItemタイプのInitializerサブアイテムに変換するためのコアコンポーネント

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/2024-07-19-17-17-38.mov" type="video/mp4" />
</video>

#### 11.2 `テキストを追加`の実装

インターフェースにテキストを追加します。これは一般的なニーズです。そのため、NocoBaseは`@nocobase/client`に`MarkdownFormItemInitializer`を提供してこの機能を実現します。

`packages/plugins/@nocobase-sample/plugin-block-form/src/client/FormV3.configFields/index.ts`ファイルを修正します：

```diff
// ...
+ import { tStr } from '../locale'

export const formV3ConfigureFieldsInitializer = new SchemaInitializer({
  name: `${FormV3BlockNameLowercase}:configureFields`,
  icon: 'SettingOutlined',
  wrap: gridRowColWrap,
  title: 'フィールドの設定',
  items: [
    {
      name: 'collectionFields',
      Component: CollectionFieldsToFormInitializerItems,
    },
    {
      name: 'divider',
      type: 'divider',
    },
    {
      name: 'addText',
      title: tStr('テキストを追加'),
      Component: 'MarkdownFormItemInitializer',
    },
  ]
});
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/2024-07-19-17-27-21.mov" type="video/mp4" />
</video>

### 12. 権限

TODO

### 13. 多言語

[http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings)を通じて複数の言語を追加し、右上隅で言語を切り替えることができます。

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

FormV3で使用されている文言はFormV2と同じで、すでに多言語処理が行われているため、ここで特に変更する必要はありません。

## パッケージ化と本番環境へのアップロード

[プラグインのビルドとパッケージ化](/development/your-fisrt-plugin#プラグインのビルドとパッケージ化)のドキュメントに従って、プラグインをパッケージ化し、本番環境にアップロードできます。

クローンしたソースコードの場合は、最初に全量ビルドを実行して、プラグインの依存関係を構築する必要があります。

```bash
yarn build
```

`create-nocobase-app`を使用して作成したプロジェクトの場合は、直接以下を実行できます：

```bash
yarn build @nocobase-sample/plugin-block-form --tar
```

これにより、`storage/tar/@nocobase-sample/plugin-block-form.tar.gz`ファイルが生成され、その後[アップロードの方法](/welcome/getting-started/plugin)でインストールできます。
```

