# 値なしフィールドコンポーネント

## シナリオの説明

特定のフォームフィールドは、特別な要件により、フィールドに直接関連付けられていない場合があります。これは、独立したフィールドであったり、他のフィールドの値を読み取って特別な処理を行い、その結果をインターフェースに表示することがあります。

## 実例

このサンプルでは、注文番号フィールドの変化をリアルタイムで検出し、注文の詳細を取得して表示するシナリオを示します。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1721721250.mov" type="video/mp4" />
</video>

このドキュメントの完全なサンプルコードは、[plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-field-component-without-value)で確認できます。

## プラグインの初期化

[最初のプラグインを作成する](/development/your-fisrt-plugin)のドキュメントに従い、プロジェクトがない場合は新しく作成します。すでにプロジェクトがある場合やソースコードをクローンした場合は、この手順をスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-field-component-without-value
yarn pm enable @nocobase-sample/plugin-field-component-without-value
```

プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/locale/](http://localhost:13000/admin/pm/list/locale/) にアクセスすると、プラグインがインストールされ、有効化されていることが確認できます。

## 機能の実装

このサンプルを実装する前に、いくつかの基本知識を理解しておく必要があります：

- [SchemaInitializer チュートリアル](/development/client/ui-schema/initializer)：インターフェースにさまざまなブロック、フィールド、操作を追加するためのもの
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：インターフェースにさまざまなブロック、フィールド、操作を追加するためのもの
- [UI Schema プロトコル](/development/client/ui-schema/what-is-ui-schema)：Schemaの構造と各属性の役割についての詳細
- [Designable デザイナー](/development/client/ui-schema/designable)：Schemaを変更するためのもの
- [FormV2](https://client.docs.nocobase.com/components/form-v2)：フォームコンポーネント
- [FormItem](https://client.docs.nocobase.com/components/form-item)：フォームアイテムコンポーネント

```bash
.
├── client # クライアントプラグイン
│   ├── initializer # 初期化器
│   ├── component # フィールドコンポーネント
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

まず、フィールド名を定義する必要があります。これはさまざまな場所で使用されます。

`packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/constants.ts`を新規作成します：

```ts
export const FieldComponentName = 'OrderDetails';
export const FieldTitle = 'Order Details';
export const FieldNameLowercase = 'orderDetails';
```

### 2. フィールドコンポーネントの実装

#### 2.1 フィールドコンポーネントの定義

`packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/component/OrderDetails.tsx`ファイルを新規作成し、内容は以下の通りです：

```tsx | pure
import { observer } from '@formily/react';
import { Spin, Empty } from 'antd';
import React, { FC } from 'react';
import { useForm } from '@formily/react';
import { FieldComponentName } from '../constants';
import { useRequest } from '@nocobase/client';

export interface OrderDetailsProps {
  orderField?: string;
}

export const OrderDetails: FC<OrderDetailsProps> = observer(({ orderField }) => {
  const form = useForm();
  const value = orderField ? form.values[orderField] : undefined;

  const { data, loading } = useRequest<{ data: any[] }>({ url: `https://jsonplaceholder.typicode.com/todos/${value}` }, {
    ready: !!value,
    refreshDeps: [orderField, value],
  });

  if (!orderField) return <div style={{ padding: 20 }}>注文フィールドを選択してください</div>;

  if (loading) {
    return <div style={{ textAlign: 'center', height: 200 }}><Spin /></div>;
  }

  if (!data?.data) return <Empty />;

  return <pre>{JSON.stringify(data?.data, null, 2)}</pre>;
}, { displayName: FieldComponentName });
```

- [observer](https://react.formilyjs.org/api/shared/observer)：関数コンポーネントをリアクティブコンポーネントに変換するために使用します。フォームデータが変更されると、コンポーネントが自動的に更新されます。
- [useForm()](https://react.formilyjs.org/api/hooks/use-form)：現在のフォームインスタンスを取得するために使用します。
  - `values`：フォームデータ
- [useRequest()](https://client.docs.nocobase.com/core/request)：データをリクエストするために使用します。

デフォルトでは、システムには `users` と `roles` のテーブルのみがあります。ここでは、渡された `orderField` に基づいて対応する `users` テーブルのデータを取得し、画面に表示します。

次に、これを `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/component/index.ts` にエクスポートします：

```tsx | pure
export * from './OrderDetails';
```

#### 2.2 フィールドコンポーネントの登録

`OrderDetails` をプラグインとしてシステムに登録する必要があります。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { OrderDetails } from './component';
import { FieldComponentName } from './constants';

export class PluginFieldComponentWithoutValueClient extends Plugin {
  async load() {
    this.app.addComponents({ [FieldComponentName]: OrderDetails });
  }
}

export default PluginFieldComponentWithoutValueClient;
```

#### 2.3 フィールドコンポーネントの検証

コンポーネントの検証方法には 2 種類あります：

- 一時的なページ検証：一時的なページを作成し、`OrderDetails` コンポーネントをレンダリングして、要件に合致しているか確認します。
- ドキュメントサンプル検証：ドキュメントを起動し、`yarn doc plugins/@nocobase-sample/plugin-field-component-without-value` を使用して、ドキュメントサンプルの形式で要件に合致しているか検証します（TODO）。

一時的なページ検証を例に、ページを新しく作成し、プロパティパラメータに基づいて1つまたは複数の `OrderDetails` コンポーネントを追加し、要件に合致しているか確認します。

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';

import { OrderDetails } from './component';
import { FieldComponentName } from './constants';

export class PluginFieldOrderDetailsClient extends Plugin {
  async load() {
    this.app.addComponents({ [FieldComponentName]: OrderDetails });

    function Demo() {
      const schema = {
        type: 'void',
        name: 'root',
        properties: {
          test: {
            type: 'void',
            'x-component': 'FormV2',
            properties: {
              username: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'ユーザー名',
                required: true,
              },
              orderDetails: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': OrderDetails,
                title: '注文の詳細',
                'x-component-props': {
                  orderField: 'username',
                },
              },
            },
          },
        },
      };

      return <SchemaComponent schema={schema} />;
    }

    this.app.router.add('admin.order-details-component', {
      path: '/admin/order-details-component',
      Component: Demo,
    });
  }
}

export default PluginFieldOrderDetailsClient;
```

私たちは [Form コンポーネント](https://client.docs.nocobase.com/components/form-v2#basic-usage) の例を参考にして `Demo` コンポーネントを新規作成し、`orderDetails` フィールドに `OrderDetails` コンポーネントを追加します。さらに、`orderField` を `username` に設定することで、`username` フィールドの値に基づいて対応する `users` テーブルのデータを取得できます。

`SchemaComponent` の詳細な説明は [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) ドキュメントをご覧ください。

その後、`http://localhost:13000/admin/order-details-component` にアクセスすると、対応するテストページの内容を確認できます。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1721721815326.mov" type="video/mp4" />
</video>

検証が完了した後は、テストページを削除する必要があります。

### 3. フィールドスキーマの定義

NocoBase の動的ページはすべてスキーマを用いてレンダリングされるため、スキーマを定義する必要があります。これは、後に `Carousel` ブロックをインターフェースに追加するために使用されます。この小節を実装する前に、いくつかの基本知識を理解しておく必要があります：

- [UI スキーマプロトコル](/development/client/ui-schema/what-is-ui-schema)：スキーマの構造と各属性の役割について詳しく説明しています。

#### 3.1 フィールドスキーマの定義

`packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/schema/index.ts` ファイルを新規作成します：

```tsx | pure
import { ISchema } from "@nocobase/client"
import { FieldComponentName } from '../constants';

export const getOrderDetailsSchema = (orderField: string): ISchema => ({
  type: 'void',
  'x-decorator': 'FormItem',
  'x-toolbar': 'FormItemSchemaToolbar',
  'x-component': FieldComponentName,
  'x-component-props': {
    'orderField': orderField,
  }
})
```

`getOrderDetailsSchema`：

- `type`：タイプ、ここでは `void`、純粋な UI ノードを示します。
- `'x-decorator': 'FormItem'`：[FormItem コンポーネント](https://client.docs.nocobase.com/components/form-item)を使用してフィールドコンポーネントを包みます。
- `'x-toolbar': 'FormItemSchemaToolbar'`：`x-decorator` と組み合わせて使用し、右上隅に操作と設定を表示します。
- `'x-component': FieldComponentName`：上で定義した `OrderDetails` コンポーネントです。
- `x-component-props`：`OrderDetails` コンポーネントのプロパティで、コンポーネントに自動的に渡されます。
  - `orderField`：注文フィールド

上記のスキーマを React コンポーネントに変換すると、次のようになります：

```tsx | pure
<FormItem>
  <OrderDetails orderField />
</FormItem>
```

#### 3.2 フィールドスキーマの検証

コンポーネントの検証と同様に、仮のページ検証やドキュメント例検証の方法でスキーマが要件を満たしているかを確認できます。ここでは仮のページ検証の例を示します：

```tsx | pure
import { Plugin, SchemaComponent } from '@nocobase/client';
import { OrderDetails } from './component';
import { FieldComponentName } from './constants';

import React from 'react';

export class PluginFieldOrderDetailsClient extends Plugin {
  async load() {
    this.app.addComponents({ [FieldComponentName]: OrderDetails });

    function Demo() {
      const schema = {
        type: 'void',
        name: 'root',
        properties: {
          test: {
            type: 'void',
            'x-component': 'FormV2',
            properties: {
              username: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'ユーザー名',
                required: true,
              },
              orderDetails: getOrderDetailsSchema('username')
            },
          },
        },
      };

      return <SchemaComponent schema={schema} />;
    }

    this.app.router.add('admin.order-details-schema', {
      path: '/admin/order-details-schema',
      Component: Demo
    });
  }
}

export default PluginFieldOrderDetailsClient;
```

私たちは [http://localhost:13000/admin/order-details-schema](http://localhost:13000/admin/order-details-schema) にアクセスすることで、対応するテストページの内容を確認できます。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1721721815326.mov" type="video/mp4" />
</video>

### 4. スキーマイニシャライザーアイテムの定義

新しく `packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/initializer/index.tsx` ファイルを作成します：

```ts
import React from "react";
import { SchemaInitializerActionModal, SchemaInitializerItemType, SelectProps, useCollection, useCompile, useSchemaInitializer } from "@nocobase/client";
import { MenuOutlined } from "@ant-design/icons";

import { FieldNameLowercase } from "../constants";
import { useT } from "../locale";
import { getOrderDetailsSchema } from '../schema';

export function useFieldOptions(): SelectProps['options'] {
  const collection = useCollection();

  const compile = useCompile();
  return collection
    .getFields()
    .map(field => ({ label: field.uiSchema?.title ? compile(field.uiSchema.title) : field.name, value: field.name }));
}

const OrderDetailsSchemaInitializer = () => {
  const t = useT();
  const { insert } = useSchemaInitializer();
  const options = useFieldOptions();
  return (
    <SchemaInitializerActionModal
      buttonText={t("Order Details")}
      title={t("Select Order Field")}
      icon={<MenuOutlined />}
      isItem
      onSubmit={({ orderField }) => {
        insert(getOrderDetailsSchema(orderField));
      }}
      schema={{
        orderField: {
          type: 'string',
          title: 'orderField',
          required: true,
          'x-component': 'Select',
          'x-decorator': 'FormItem',
          enum: options
        },
      }}
    />
  );
}

export const orderDetailsInitializerItem: SchemaInitializerItemType = {
  name: FieldNameLowercase,
  Component: OrderDetailsSchemaInitializer
};
```

`orderDetailsInitializerItem`：
  - `name`：ユニークな識別子で、異なるスキーマアイテムやCRUD操作を区別します。
  - `Component`：スキーマイニシャライザーアイテムに対応するコンポーネントです。

`OrderDetailsSchemaInitializer`：
  - [SchemaInitializerActionModal](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#type-actionmodal---schemainitializeractionmodal)：ポップアップ付きのスキーマイニシャライザーアイテム。
    - `buttonText`：ボタンテキスト。
    - `title`：ポップアップのタイトル。
    - `isItem`：アイテムかどうか。ここは必ず true でなければなりません。
    - `schema`：ポップアップ内のフォームスキーマ。
    - `onSubmit`：フォーム送信イベント。
  - `useFieldOptions`：フィールドオプションを取得します。
  - `useT`：多言語ツール関数を取得します。
  - [useSchemaInitializer()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：スキーマイニシャライザーのコンテキストを取得します。
    - `insert`：スキーマアイテムを挿入します。

`useFieldOptions`：
  - [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#usecollection)：現在のテーブルのコレクションを取得します。
  - `useCompile`：コンパイル関数を取得します。

スキーマアイテムの定義についての詳細は [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) ドキュメントを参照してください。

### 5. フォームブロック `Configure fields` への追加

フォームブロックの `Configure fields` に対応する名前は `form:configureFields` です。

`packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/index.tsx` ファイルを修正します：

```diff
// ...
+ import { orderDetailsInitializerItem } from './initializer';

export class PluginFieldComponentWithoutValueClient extends Plugin {
  async load() {
    // ...
+   this.app.schemaInitializerManager.addItem('form:configureFields', orderDetailsInitializerItem.name, orderDetailsInitializerItem);
  }
}

export default PluginFieldComponentWithoutValueClient;
```

`app.schemaInitializerManager.addItem` を使用して `orderDetailsInitializerItem` を対応する Initializer サブアイテムに追加します。

![20240723161400](https://static-docs.nocobase.com/20240723161400.png)

### 6. スキーマ設定の実装

#### 6.1 スキーマ設定の定義

完全なブロックにはスキーマ設定が必要で、いくつかの属性や操作を設定するために使用されます。

`packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/settings/index.ts` ファイルを新規作成します：

```ts | pure
import { SchemaSettings } from "@nocobase/client";
import { FieldNameLowercase } from '../constants';
import { orderFieldSchemaSettingsItem } from "./items/orderField";

export const orderDetailsSettings = new SchemaSettings({
  name: `blockSettings:${FieldNameLowercase}`,
  items: [
    // TODO
  ]
});
```

#### 6.2 スキーマ設定の登録

```ts
import { Plugin } from '@nocobase/client';
import { orderDetailsSettings } from './settings';

export class PluginFieldComponentWithoutValueClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(orderDetailsSettings);
  }
}

export default PluginFieldComponentWithoutValueClient;
```

#### 6.3 スキーマ設定の使用

`packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/schema/index.ts` の `carouselSchema` を修正します：

```diff
+ import { orderDetailsSettings } from "../settings";

export const getOrderDetailsSchema = (orderField: string): ISchema => ({
  type: 'void',
  'x-decorator': 'FormItem',
+ 'x-settings': orderDetailsSettings.name,
  // ...
});
```

### 7. スキーマ設定アイテムの実装

現在、スキーマ設定は実装されていますが、操作は実装されていません。必要に応じて各操作を実装する必要があります。

スキーマ設定がサポートしているビルトイン操作タイプについては、[スキーマ設定 - ビルトインコンポーネントとタイプ](https://client.docs.nocobase.com/core/ui-schema/schema-settings#built-in-components-and-types) ドキュメントを参照してください。

#### 7.1 `remove` 操作の実装

現在、initializers を通じて追加されたフィールドは削除できないため、`remove` 操作を実装する必要があります。

[NocoBase] には [remove](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsremove-1) 操作タイプがビルトインされています。`packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/settings/index.ts` ファイルを修正します：

```diff
export const orderDetailsSettings = new SchemaSettings({
  name: `blockSettings:${FieldNameLowercase}`,
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
  - `breakRemoveOn`：削除時の中断条件。`Configure fields`は自動的に子項目を`Grid`でラップするため、ここで`breakRemoveOn: { 'x-component': 'Grid' }`を設定します。`Grid`を削除すると、上位の削除は行われません。

![20240613183852](https://static-docs.nocobase.com/20240613183852.png)

#### 7.2 `Order field`の選択を実現する

フィールドを追加する際に`Order field`を選択するだけでなく、`Schema Settings`の中でも`Order field`を選択できます。

##### 7.2.1 Schema Settings itemの定義

新しく`packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/settings/items/orderField.ts`ファイルを作成します：

```ts
import { createSelectSchemaSettingsItem } from "@nocobase/client";
import { generateNTemplate } from "../../locale";
import { useFieldOptions } from '../../initializer'

export const orderFieldSchemaSettingsItem = createSelectSchemaSettingsItem({
  name: 'orderField',
  title: generateNTemplate('Order field'),
  useOptions: useFieldOptions,
  schemaKey: `x-component-props.orderField`,
});
```

SchemaSettings Itemの定義については[SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems)をご覧ください。

`createSelectSchemaSettingsItem`：選択タイプのSchemaSettings Itemを迅速に作成するためのものです。

- `name`：一意の識別子で、CRUD操作に使用されます
- `title`：タイトル
- `useOptions`：オプションを取得します
- `schemaKey`：対応するスキーマのキー

##### 7.3.2 SchemaSettings Itemの使用

`packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/client/settings/index.ts`を修正します：

```diff
import { SchemaSettings } from "@nocobase/client";
import { FieldNameLowercase } from '../constants';
+ import { orderFieldSchemaSettingsItem } from "./items/orderField";

export const orderDetailsSettings = new SchemaSettings({
  name: `blockSettings:${FieldNameLowercase}`,
  items: [
+   orderFieldSchemaSettingsItem,
    {
      name: 'remove',
      type: 'remove',
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

![20240723161525](https://static-docs.nocobase.com/20240723161525.png)

必要に応じて、さらに多くの設定を実現できます。

### 8. 多言語対応

#### 8.1 英語

`packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/locale/en-US.json`ファイルを編集します：

```ts
{
  "Order Details": "Order Details",
  "Order field": "Order field"
}
```

#### 8.2 中国語

`packages/plugins/@nocobase-sample/plugin-field-component-without-value/src/locale/zh-CN.json`ファイルを編集します：

```ts
{
  "Order Details": "订单详情",
  "Order field": "订单字段"
}
```

[http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings)を通じて複数の言語を追加し、右上の言語を切り替えることができます。

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

## パッケージ化と本番環境へのアップロード

[プラグインの構築とパッケージ化](/development/your-fisrt-plugin#プラグインの構築とパッケージ化) ドキュメントに従って、プラグインをパッケージ化し、プロダクション環境にアップロードします。

ソースコードをクローンした場合は、最初に全体をビルドし、プラグインの依存関係も構築する必要があります。

```bash
yarn build
```

`create-nocobase-app` を使用して作成したプロジェクトの場合は、次のコマンドを直接実行できます：

```bash
yarn build @nocobase-sample/plugin-field-component-without-value --tar
```

これにより、`storage/tar/@nocobase-sample/plugin-field-component-without-value.tar.gz` ファイルが生成され、その後、[アップロードによる方法](/welcome/getting-started/plugin)でインストールできます。

