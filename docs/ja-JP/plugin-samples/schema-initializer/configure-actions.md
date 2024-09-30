# ブロック内蔵のイニシャライザー - 設定操作

## シナリオ説明

新しく作成されたブロックが複雑なデータブロックである場合、その内部には動的に追加される複数の部分が含まれる可能性があります。その中で、`Configure actions` に対応するイニシャライザーは、さまざまな操作を実現するためにいくつかのボタンを動的に追加する役割を担います。たとえば、`Details` ブロックでは、`Configure actions` を通じて `Edit` や `Print` などのボタンを追加できます。

![img_v3_02b4_9b80a4a0-6d9b-4e53-a544-f92c17d81d2g](https://static-docs.nocobase.com/img_v3_02b4_9b80a4a0-6d9b-4e53-a544-f92c17d81d2g.jpg)

## サンプル説明

この例では、[データブロックの追加](/plugin-samples/schema-initializer/data-block) を基に、`Details` ブロックに類似した効果を実現します。`Configure actions` を使用してボタンを設定します。

この文書の完全なサンプルコードは、[plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-configure-actions) で確認できます。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-191602.mp4" type="video/mp4" />
</video>

## プラグインの初期化

[最初のプラグインを作成する](/development/your-fisrt-plugin) 文書に従い、プロジェクトがない場合は新規にプロジェクトを作成します。すでにプロジェクトがある場合やソースコードをクローンした場合は、このステップをスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-initializer-configure-actions
yarn pm enable @nocobase-sample/plugin-initializer-configure-actions
```

その後、プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) にアクセスすると、プラグインがインストールされ、有効化されていることが確認できます。

## 機能の実現

このサンプルを実現する前に、いくつかの基本知識を理解する必要があります：

- [SchemaInitializer チュートリアル](/development/client/ui-schema/initializer)：インターフェースにさまざまなブロック、フィールド、操作を追加するためのものです。
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：インターフェースにさまざまなブロック、フィールド、操作を追加するためのものです。
- [UI Schema](/development/client/ui-schema/what-is-ui-schema)：インターフェースの構造とスタイルを定義するためのものです。
- [Designable デザイナー](/development/client/ui-schema/designable)：スキーマを変更するためのものです。

### 1. ブロックの作成

このサンプルは、[データブロックの追加](/plugin-samples/schema-initializer/data-block) を基に続行しますので、`packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client` ディレクトリをコピーして `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client` に上書きします。

次に、`packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx` を修正します：

```diff
import { Plugin } from '@nocobase/client';
- import { Info } from './component';
+ import { InfoV2 } from './component';

- export class PluginInitializerBlockDataClient extends Plugin {
+ export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
-   this.app.addComponents({ Info })
+   this.app.addComponents({ InfoV2 })
    // ...
  }
}

- export default PluginInitializerBlockDataClient;
+ export default PluginInitializerConfigureActionsClient;
```

次に、`packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/constants.ts` を修正します：

```ts
export const BlockName = 'InfoV2';
export const BlockNameLowercase = 'info-v2';
```

### 2. イニシャライザーの実装

#### 2.1 イニシャライザーの定義

新たに `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/configureActionsInitializer.ts` ファイルを作成します：

```tsx | pure
import { SchemaInitializer } from "@nocobase/client";
import { BlockNameLowercase } from "../../constants";

export const configureActionsInitializer = new SchemaInitializer({
  name: `${BlockNameLowercase}:configureActions`,
  icon: 'SettingOutlined',
  title: 'アクションの設定',
  style: {
    marginLeft: 8,
  },
  items: [

  ]
});
```

上記のコードを使用して、新しい `SchemaInitializer` を定義しましたが、そのサブアイテムは一時的に空です。

- [SchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：Schema Initializer インスタンスを作成するために使用します。
- `icon`：アイコン。他のアイコンは Ant Design [Icons](https://ant.design/components/icon/) を参照してください。
- `title`：ボタンのタイトル。
- [items](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types)：ボタンの下にあるサブアイテム。

次に、これを `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/index.ts` でエクスポートします：

```tsx | pure
export * from './configureActionsInitializer';
```

そして `packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/index.tsx` を修正して、`configureActions` をエクスポートします：

```diff
import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';
import { CodeOutlined } from '@ant-design/icons';

+ export * from './configureActions';
// ...
```

#### 2.2 初期化子の登録

次に、`packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx` ファイルを修正して、この初期化子をインポートし、登録します：

```tsx | pure
// ...
import { infoInitializerItem, configureActionsInitializer } from './initializer';

export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(configureActionsInitializer);

    // ...
  }
}
```

#### 2.3 初期化子の使用

`packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/schema/index.ts` ファイルを修正し、`actions` サブノードを追加します：

```diff
// ...
+ import { configureActionsInitializer } from "../initializer";

function getInfoBlockSchema({ dataSource, collection }) {
  return {
    // ...
    properties: {
      info: {
        'x-component': BlockName,
        'x-use-component-props': 'useInfoProps',
+       properties: {
+         actions: {
+           type: 'void',
+           'x-component': 'ActionBar',
+           'x-component-props': {
+             layout: 'two-column',
+             style: { marginBottom: 20 },
+           },
+           'x-initializer': configureActionsInitializer.name,
+         },
+       },
      },
    },
  };
}
```

`アクションの設定` は一般的に [ActionBar](https://client.docs.nocobase.com/components/action#actionbar) コンポーネントと組み合わせて使用されます。

`Info` のサブノードに `actions` フィールドを追加しました：

- `type: 'void'`：タイプが `void` の場合、これはコンテナを示します。
- `x-component: 'ActionBar'`：ボタンを表示するために [ActionBar](https://client.docs.nocobase.com/components/action#actionbar) コンポーネントを使用します。
- `x-initializer: configureActionsInitializer.name`：作成したスキーマイニシャライザーを使用します。
- `x-component-props.layout: 'two-column'`：左右のレイアウトです。具体的な例については [ActionBar two-column](https://client.docs.nocobase.com/components/action#two-column) を参照してください。

#### 2.4 ブロックのレンダリングサブノード

`packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/component/Info.tsx` ファイルを修正し、`Info` コンポーネントを以下のように変更します：

```diff
import React, { FC } from 'react';
import { withDynamicSchemaProps } from '@nocobase/client'

export interface InfoV2Props {
  collectionName: string;
  data?: any[];
  loading?: boolean;
+ children?: React.ReactNode;
}

export const InfoV2: FC<InfoV2Props> = withDynamicSchemaProps(({ children, collectionName, data }) => {
  return <div>
+   {children}
-   <div>collection: {collectionName}</div>
-   <div>data list: <pre>{JSON.stringify(data, null, 2)}</pre></div>
+   <div>data length: {data?.length}</div>
  </div>
}, { displayName: BlockName })
```

- `children`：`properties` の内容は `InfoV2` コンポーネントの `children` に渡されるため、直接 `children` をレンダリングします。

![img_v3_02b4_4c6cb675-789e-48d5-99ce-072984dcfc9g](https://static-docs.nocobase.com/img_v3_02b4_4c6cb675-789e-48d5-99ce-072984dcfc9g.jpg)

### 3. イニシャライザーアイテムの実装

#### 3.1 再利用：`Custom request` アクション

`packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/configureActionsInitializer.ts` ファイルをさらに修正します：

```diff
export const configureActions = new SchemaInitializer({
  name: 'info:configureActions',
  title: 'アクションの設定',
  icon: 'SettingOutlined',
  items: [
+   {
+     name: 'customRequest',
+     title: '{{t("カスタムリクエスト")}}',
+     Component: 'CustomRequestInitializer',
+   },
  ]
});
```

`Custom request` は、ここで `CustomRequestInitializer` コンポーネントを直接再利用しています。再利用可能なイニシャライザーアイテムについては *TODO* を参照してください。

![img_v3_02b4_0d439087-cfe1-4681-bfab-4e4bc3e34cbg](https://static-docs.nocobase.com/img_v3_02b4_0d439087-cfe1-4681-bfab-4e4bc3e34cbg.jpg)

#### 3.2 カスタマイズ：`Custom Refresh` アクション

既存のイニシャライザーアイテムを再利用するだけでなく、アクションをカスタマイズすることもできます。カスタムアクションの詳細な手順については [簡単なアクションの追加](/plugin-samples/schema-initializer/action-simple) と [ポップアップアクションの追加](/plugin-samples/schema-initializer/action-modal) を参照してください。

ここでは、`Custom Refresh` アクションを実装します。

#### 3.2.1 名前の定義

`packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/constants.ts` を新規作成します：

```ts
export const ActionName = 'カスタムリクエスト';
export const ActionNameLowercase = 'customRequest';
```

#### 3.2.2 スキーマの定義

##### 3.2.2.1 スキーマの定義

`packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/schema.ts` ファイルを新規作成します：

```ts
import { ActionProps, useDataBlockRequest, ISchema } from "@nocobase/client";
import { useT } from "../../../../locale";

export const useCustomRefreshActionProps = (): ActionProps => {
  const { runAsync } = useDataBlockRequest();
  const t = useT();
  return {
    type: 'primary',
    title: t('カスタムリフレッシュ'),
    async onClick() {
      await runAsync();
    },
  }
}

export const customRefreshActionSchema: ISchema = {
  type: 'void',
  'x-component': 'Action',
  'x-toolbar': 'ActionSchemaToolbar',
  'x-use-component-props': 'useCustomRefreshActionProps'
}
```

`customRefreshActionSchema` と動的属性 `useCustomRefreshActionProps` を定義しました。

`customRefreshActionSchema`：
- `type: 'void'`：タイプは `void` で、通常のUIではデータを含まないことを示します。
- `x-component: 'Action'`：ボタンを表示するために [Action](https://client.docs.nocobase.com/components/action) コンポーネントを使用します。
- `title: 'カスタムリフレッシュ'`：ボタンのタイトルです。
- `x-use-component-props: 'useCustomRefreshActionProps'`：`useCustomRefreshActionProps` フックが返す属性を使用します。スキーマはサーバーに保存されるため、ここでは文字列として使用する必要があります。
- `'x-toolbar': 'ActionSchemaToolbar'`：通常、`Action` コンポーネントと組み合わせて使用され、デフォルトの ToolBar とは異なり、Action の右上隅にある `Initializer` を隠し、Drag と Settings のみを保持します。

`useCustomRefreshActionProps`：これは React Hooks で、Action コンポーネントの属性を返す必要があります。
- [useDataBlockRequest()](https://client.docs.nocobase.com/core/data-block/data-block-request-provider)：データブロックのリクエストオブジェクトで、`DataBlockProvider` 内部から提供され、データブロックのデータを自動的に取得します。
  - `runAsync`：データブロックのデータを更新するための非同期リクエストメソッドです。
- `type: 'primary'`：ボタンのタイプは `primary` です。
- `onClick`：クリックイベントです。

次に、`packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/index.ts` でこれをエクスポートします：

```ts
export * from './schema';
```

そして、`packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/index.ts` を修正して `customRefresh` をエクスポートします：

```diff
export * from './configureActionsInitializer';
+ export * from './items/customRefresh';
```

##### 3.2.2.2 コンテキストの登録

`useCustomRefreshActionProps` をコンテキストに登録する必要があります。`packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx` ファイルを修正します：

```diff
// ...
- import { infoInitializerItem } from './initializer';
+ import { infoInitializerItem, useCustomRefreshActionProps } from './initializer';

export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
    // ...
-   this.app.addScopes({ useInfoProps });
+   this.app.addScopes({ useInfoProps, useCustomRefreshActionProps });
  }
}
```

`SchemaComponentOptions` の使用については [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions) ドキュメントや [グローバル登録 Component と Scope](/plugin-samples/component-and-scope/global) を参照してください。

#### 3.3.2 settings の実装

##### 3.3.2.1 settings の定義

`packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/settings.ts` を新しく作成します：

```tsx | pure
import { SchemaSettings } from "@nocobase/client";
import { ActionNameLowercase } from "./constants";

export const customRefreshActionSettings = new SchemaSettings({
  name: `actionSettings:${ActionNameLowercase}`,
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
});
```

`customRefreshActionSettings`：ここでは簡単に `remove` 操作を定義しています。Schema Settings の詳細については [Schema Settings](https://client.docs.nocobase.com/core/ui-schema/schema-settings) ドキュメントをご参照ください。

`packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/index.ts` を修正してエクスポートします：

```tsx | pure
export * from './settings';
```

##### 3.3.2.2 settingsの登録

次に、`customRefreshActionSettings` をシステムに登録します。`packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/index.tsx` ファイルを修正します：

```diff
- import { infoInitializerItem, useCustomRefreshActionProps } from './initializer';
+ import { infoInitializerItem, useCustomRefreshActionProps, customRefreshActionSettings } from './initializer';

export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
+   this.app.schemaSettingsManager.add(customRefreshActionSettings);
  }
}
```

##### 3.3.2.2 settingsの使用

`packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/schema.ts` ファイルの `customRefreshActionSchema` メソッドを修正し、`x-settings` を `customRefreshActionSettings.name` に設定します。

```diff
+ import { customRefreshActionSettings } from "./settings";

export const customRefreshActionSchema: ISchema = {
  type: 'void',
  'x-component': 'Action',
+ "x-settings": customRefreshActionSettings.name,
  title: 'カスタムリフレッシュ',
  'x-use-component-props': 'useCustomRefreshActionProps'
}
```

##### 3.3.3 SchemaInitializer itemの定義

###### 3.3.3.1 SchemaInitializer itemの定義

`packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/items/customRefresh/initializer.ts` ファイルをさらに修正します：

```tsx | pure
import { SchemaInitializerItemType, useSchemaInitializer } from "@nocobase/client";
import { customRefreshActionSchema } from "./schema";
import { ActionName } from "./constants";
import { useT } from "../../../../locale";

export const customRefreshActionInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: ActionName,
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(ActionName),
      onClick() {
        insert(customRefreshActionSchema)
      },
    };
  },
};
```

- `type: 'item'`：タイプは `item` で、テキストを示し、クリックすると `onClick` イベントがトリガーされます。
- `name: 'カスタムリフレッシュ'`：ユニークな識別子で、異なる Schema Item と CRUD 操作を区別するために使用されます。
- `title: 'カスタムリフレッシュ'`：ボタンのタイトルです。

Schema Item の詳細については [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) ドキュメントをご参照ください。

次に、`packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/index.ts` を修正してエクスポートします：

```tsx | pure
export * from './initializer';
```

###### 3.3.3.2 スキーマイニシャライザーアイテムの使用

`packages/plugins/@nocobase-sample/plugin-initializer-configure-actions/src/client/initializer/configureActions/configureActionsInitializer.ts` ファイルを修正し、`items` に `customRefreshActionInitializerItem` を追加します：

```diff
import { SchemaInitializer } from "@nocobase/client";
+ import { customRefreshActionInitializerItem } from "./items/customRefresh";

export const configureActionsInitializer = new SchemaInitializer({
  name: 'info:configureActions',
  title: 'アクションの設定',
  icon: 'SettingOutlined',
  style: {
    marginLeft: 8,
  },
  items: [
    {
      name: 'customRequest',
      title: '{{t("カスタムリクエスト")}}',
      Component: 'CustomRequestInitializer',
      'x-align': 'right',
    },
+   customRefreshActionInitializerItem
  ]
});
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-191602.mp4" type="video/mp4" />
</video>

必要に応じて、さらに多くの `Action` を実装できます。

## パッケージ化と本番環境へのアップロード

[プラグインのビルドとパッケージ化](/development/your-fisrt-plugin#构建并打包插件) ドキュメントに従い、プラグインをパッケージ化し、本番環境へアップロードします。

クローンしたソースコードの場合、最初に全量ビルドを実行し、プラグインの依存関係もビルドする必要があります。

```bash
yarn build
```

`create-nocobase-app` を使用して作成したプロジェクトの場合、直接以下を実行できます：

```bash
yarn build @nocobase-sample/plugin-initializer-configure-actions --tar
```

これで `storage/tar/@nocobase-sample/plugin-initializer-configure-actions.tar.gz` ファイルが作成され、[アップロードの方法](/welcome/getting-started/plugin) でインストールできます。

