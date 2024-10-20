# データブロックの追加

## シーンの説明

NocoBase には、インターフェースにブロックを追加するための多数の `Add block` ボタンがあります。その中で、データテーブルに関連するものはデータブロック `Data Block` と呼ばれ、データテーブルに関連しないものはシンプルブロック `Simple Block` と呼ばれます。

![img_v3_02b4_170eddb5-d3b4-461e-b74b-f83250941e5g](https://static-docs.nocobase.com/img_v3_02b4_170eddb5-d3b4-461e-b74b-f83250941e5g.jpg)

ただし、現在のブロックタイプでは必ずしもニーズを満たすことができないため、必要に応じてカスタム開発が必要です。本記事では、データブロック `Data Block` について説明します。

## 例の説明

この例では、`Info` ブロックを作成し、`Page`、`Table`、およびモバイルの `Add block` に追加します。

この例は、initializer の使用を示すことを目的としており、ブロック拡張に関する詳細は [ブロック拡張](/plugin-samples/block) ドキュメントを参照してください。

このドキュメントの完全なサンプルコードは [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-block-data) で確認できます。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-182547.mp4" type="video/mp4" />
</video>

## プラグインの初期化

私たちは [最初のプラグインを書く](/development/your-fisrt-plugin) ドキュメントに従って、プロジェクトがない場合は新たにプロジェクトを作成します。すでにプロジェクトがある場合やソースコードをクローンした場合は、このステップをスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-initializer-block-data
yarn pm enable @nocobase-sample/plugin-initializer-block-data
```

その後、プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) にアクセスすると、プラグインがインストールされ有効になっていることを確認できます。

## 機能の実装

この例を実現する前に、いくつかの基礎知識を理解しておく必要があります：

- [SchemaInitializer チュートリアル](/development/client/ui-schema/initializer)：インターフェースにさまざまなブロック、フィールド、操作を追加するためのもの
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：インターフェースにさまざまなブロック、フィールド、操作を追加するためのもの
- [UI スキーマ](/development/client/ui-schema/what-is-ui-schema)：インターフェースの構造とスタイルを定義するためのもの
- [Designable デザイナー](/development/client/ui-schema/designable)：スキーマを変更するためのツール

```bash
.
├── client # クライアントプラグイン
│   ├── initializer # イニシャライザー
│   ├── component # ブロックコンポーネント
│   ├── index.tsx # クライアントプラグインのエントリ
│   ├── locale.ts # 多言語ツール関数
│   ├── constants.ts # 定数
│   ├── schema # スキーマ
│   └── settings # スキーマ設定
├── locale # 多言語ファイル
│   ├── en-US.json # 英語
│   └── zh-CN.json # 中国語
├── index.ts # サーバープラグインのエントリ
└── server # サーバープラグイン
```

### 1. 名前の定義

まず、ブロックの名前を定義する必要があります。これはさまざまな場所で使用されます。

`packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/constants.ts` を新規作成します：

```ts
export const BlockName = 'Info';
export const BlockNameLowercase = BlockName.toLowerCase();
```

### 2. ブロックコンポーネントの実装

#### 2.1 ブロックコンポーネントの定義

この例では、`Info` ブロックコンポーネントを作成します。具体的な要件は次のとおりです：

- 現在のブロックデータテーブル名を表示
- 現在のブロックデータリストを表示

まず、`packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/component/Info.tsx` ファイルを新規作成し、その内容は以下の通りです：

```tsx | pure
import React, { FC } from 'react';
import { withDynamicSchemaProps } from '@nocobase/client';
import { BlockName } from '../constants';

export interface InfoProps {
  collectionName: string;
  data?: any[];
  loading?: boolean;
}

export const Info: FC<InfoProps> = withDynamicSchemaProps(({ collectionName, data }) => {
  return (
    <div>
      <div>collection: {collectionName}</div>
      <div>data list: <pre>{JSON.stringify(data, null, 2)}</pre></div>
    </div>
  );
}, { displayName: BlockName });
```

`Info` コンポーネントは全体として `withDynamicSchemaProps` にラップされた関数コンポーネントであり、[withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-と-x-use-component-props) はスキーマ内の動的プロパティを処理するための高階コンポーネントです。

`withDynamicSchemaProps` を考慮しない場合、`Info` コンポーネントは単純な関数コンポーネントとなります。

次に、これを `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/component/index.ts` でエクスポートします：

```tsx | pure
export * from './Info';
```

#### 2.2 ブロックコンポーネントの登録

`Info` をプラグインを通じてシステムに登録する必要があります。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Info } from './component';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    this.app.addComponents({ Info });
  }
}

export default PluginInitializerBlockDataClient;
```

#### 2.3 ブロックコンポーネントの検証

コンポーネントの検証方法は2種類あります：

- 一時ページ検証：一時的にページを作成し、`Info` コンポーネントをレンダリングして要件を満たしているか確認できます。
- ドキュメント例検証：ドキュメントを起動し、`yarn doc plugins/@nocobase-sample/plugin-initializer-block-data` を実行して、ドキュメントの例を作成し、要件を満たしているか検証できます（TODO）。

ここでは `一時ページ検証` の例を示します。一つ以上の `Info` コンポーネントを属性パラメータに基づいて追加する新しいページを作成し、要件を満たしているか確認します。

```tsx | pure
import React from 'react';
import { Plugin } from '@nocobase/client';
import { Info } from './component';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    this.app.addComponents({ Info });

    this.app.router.add('admin.info-component', {
      path: '/admin/info-component',
      Component: () => {
        return (
          <>
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <Info collectionName='test' data={[{ id: 1 }, { id: 2 }]} />
            </div>
          </>
        );
      }
    });
  }
}

export default PluginInitializerBlockDataClient;
```

その後、`http://localhost:13000/admin/info-component` にアクセスすると、対応するテストページの内容が表示されます。

![20240526165834](https://static-docs.nocobase.com/20240526165834.png)

検証が完了したら、テストページを削除する必要があります。

### 3. ブロックスキーマの定義

#### 3.1 ブロックスキーマの定義

NocoBase の動的ページはすべてスキーマを通じてレンダリングされるため、`Info` ブロックをインターフェースに追加するためにスキーマを定義する必要があります。この節を実装する前に、いくつかの基本的な知識を理解しておく必要があります：

- [UI スキーマプロトコル](/development/client/ui-schema/what-is-ui-schema)：スキーマの構造と各属性の役割について詳しく説明しています。
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)：データブロック

新しく `packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/schema/index.ts` ファイルを作成します：

```ts
import { useCollection, useDataBlockRequest } from "@nocobase/client";

import { InfoProps } from "../component";
import { BlockName, BlockNameLowercase } from "../constants";

export function useInfoProps(): InfoProps {
  const collection = useCollection();
  const { data, loading } = useDataBlockRequest<any[]>();

  return {
    collectionName: collection.name,
    data: data?.data,
    loading: loading
  }
}

export function getInfoSchema({ dataSource = 'main', collection }) {
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      action: 'list',
    },
    'x-component': 'CardItem',
    "x-toolbar": "BlockSchemaToolbar",
    properties: {
      [BlockNameLowercase]: {
        type: 'void',
        'x-component': BlockName,
        'x-use-component-props': 'useInfoProps',
      }
    }
  }
}
```

ここで説明が必要な2点があります：

- `getInfoSchema()`：この関数は、`dataSource` と `collection` が動的であり、クリックされたデータテーブルによって決まるため、定義されています。
- `useInfoProps()`：`Info` コンポーネントの動的属性を処理するために使用され、データベースに保存する必要があるため、ここでの値の型は文字列型です。

`getInfoSchema()`：Info のスキーマを返します
  - `type: 'void'`：データがないことを示します
  - `x-decorator: 'DataBlockProvider'`：データブロックプロバイダーで、データを提供します。DataBlockProvider については [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider) を参照してください
  - `x-decorator-props`：`DataBlockProvider` の属性
    - `dataSource`：データソース
    - `collection`：データテーブル
    - `action: 'list'`：操作の種類で、ここでは `list` です。データリストを取得します
  - `x-component: 'CardItem'`：[CardItem コンポーネント](https://client.docs.nocobase.com/components/card-item)は、現在のブロックがすべてカード内にラップされており、スタイル、レイアウト、ドラッグ＆ドロップなどの機能を提供します
  - `properties`：子ノード
    - `info`：情報ブロック

`useInfoProps()`：Info コンポーネントの動的属性
  - [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#usecollection)：現在のデータテーブルを取得します。 [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider) によって提供されます
  - [useDataBlockRequest](https://client.docs.nocobase.com/core/data-block/data-block-request-provider#usedatablockrequest)：データブロックリクエストを取得します。 [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider) によって提供されます

上記のスキーマを React コンポーネントに変換すると次のようになります：

```tsx | pure
<DataBlockProvider collection={collection} dataSource={dataSource} action='list'>
  <CardItem>
    <Info {...useInfoProps()} />
  </CardItem>
</DataBlockProvider>
```

#### 3.2 スコープの登録

`useInfoProps` をシステムに登録する必要があります。これにより、[x-use-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-と-x-use-component-props) が対応するスコープを見つけることができます。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Info } from './component';
import { useInfoProps } from './schema';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    this.app.addComponents({ Info });
    this.app.addScopes({ useInfoProps });
  }
}

export default PluginInitializerBlockDataClient;
```

スコープに関する詳細は [全体登録 Component と Scope](/plugin-samples/component-and-scope/global) を参照してください。

#### 3.3 ブロックスキーマの検証

コンポーネントの検証と同様に、一時ページ検証またはドキュメント例によってスキーマが要求に合っているかを検証できます。ここでは一時ページ検証を例とします：

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent, SchemaComponentOptions } from '@nocobase/client';
import { Info } from './component';
import { getInfoSchema, useInfoProps } from './schema';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    // ...
    this.app.router.add('admin.info-schema', {
      path: '/admin/info-schema',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test1: getInfoSchema({ collection: 'users' }) } }} />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test2: getInfoSchema({ collection: 'roles' }) } }} />
          </div>
        </>
      }
    });
  }
}

export default PluginInitializerBlockDataClient;
```

- [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions)：Schemaに必要な`components`と`scope`を渡すために使用します。詳細は[局部登録 Component と Scope](/plugin-samples/component-and-scope/local)を参照してください。
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)：Schemaをレンダリングするために使用します。

私たちは [http://localhost:13000/admin/info-schema](http://localhost:13000/admin/info-schema) にアクセスすることで、対応するテストページの内容を見ることができます。

![20240526170053](https://static-docs.nocobase.com/20240526170053.png)

検証が完了したら、テストページを削除する必要があります。

### 4. Schema Initializer Itemの定義

新しく`packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/initializer/index.tsx`ファイルを作成します：

```tsx | pure
import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';
import { CodeOutlined } from '@ant-design/icons';

import { getInfoSchema } from '../schema';
import { useT } from '../locale';
import { BlockName, BlockNameLowercase } from '../constants';

export const infoInitializerItem: SchemaInitializerItemType = {
  name: BlockNameLowercase,
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(BlockName),
      icon: <CodeOutlined />,
      componentType: BlockName,
      useTranslationHooks: useT,
      onCreateBlockSchema({ item }) {
        insert(getInfoSchema({ dataSource: item.dataSource, collection: item.name }));
      },
    };
  },
}
```

データブロックの効果を実現するための核心はDataBlockInitializerです（文書 TODO）。

`infoInitializerItem`：
  - `Component`：`[追加シンプルブロック Simple Block](/plugin-samples/schema-initializer/block-simple)`で使用される`type`と同様に、ここでは`Component`を使用します。いずれの定義方法も[2つの定義方法](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#two-ways-to-define-component-and-type)で使用可能です。
  - `useComponentProps`：`DataBlockInitializer`コンポーネントのプロパティ
    - `title`：タイトル
    - `icon`：アイコン。その他のアイコンは[Ant Design Icons](https://ant.design/components/icon/)で確認できます。
    - `componentType`：コンポーネントの種類。ここでは`Info`です。
    - `onCreateBlockSchema`：データ表をクリックしたときのコールバック
      - `item`：クリックされたデータ表の情報
        - `item.name`：データ表名
        - `item.dataSource`：データ表が所属するデータソース
    - [useSchemaInitializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：Schemaを挿入する方法を提供します。
  - `"x-toolbar": "BlockSchemaToolbar"`：`BlockSchemaToolbar`は左上に現在のデータ表を表示するために使用され、一般的に`DataBlockProvider`と組み合わせて使用されます。

Schema Initializerに関する詳細な定義については、[Schema Initializer](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)のドキュメントを参照してください。

### 5. Schema Settingsの実装

#### 5.1 Schema Settingsの定義

完全なBlockにはSchema Settingsが必要で、属性や操作の設定に使用されます。しかし、Schema Settingsはこの例の重点ではないため、ここでは`remove`操作のみが存在します。

`packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/settings/index.ts`ファイルを新規作成します：

```ts
import { SchemaSettings } from "@nocobase/client";
import { BlockNameLowercase } from "../constants";

export const infoSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      type: 'remove',
      name: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn: {
          'x-component': 'Grid',
        },
      }
    }
  ]
});
```

#### 5.2 Schema Settingsの登録

```ts
import { Plugin } from '@nocobase/client';
import { infoSettings } from './settings';

export class PluginInitializerBlockDataClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(infoSettings);
  }
}

export default PluginInitializerBlockDataClient;
```

#### 5.3 Schema Settingsの使用

`packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/schema/index.ts`ファイルの`getInfoSchema`メソッドを修正し、`x-settings`を`infoSettings.name`に設定します。

```diff
+ import { infoSettings } from "../settings";

export function getInfoSchema({ dataSource = 'main', collection }) {
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
+   'x-settings': infoSettings.name,
    // ...
  };
}
```

### 6. Add blockに追加する

システムには多くの`Add block`ボタンがありますが、それぞれの**nameは異なります**。

![img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g](https://static-docs.nocobase.com/img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g.jpg)

#### 6.1 ページレベルのAdd blockに追加する

ページレベルの`Add block`に追加する必要がある場合、対応する`name`を知っておく必要があります。対応する`name`はTODO方式で確認できます。

TODO

上の図から、ページレベルの`Add block`に対応するnameは`page:addBlock`であり、`Data Blocks`に対応するnameは`dataBlocks`です。

次に、`packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/index.tsx`ファイルを修正します：

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Info } from './component';
import { useInfoProps } from './schema';
import { infoSettings } from './settings';
import { infoInitializerItem } from './initializer';

export class PluginDataBlockInitializerClient extends Plugin {
  async load() {
    this.app.addComponents({ Info });
    this.app.addScopes({ useInfoProps });

    this.app.schemaSettingsManager.add(infoSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem);
  }
}

export default PluginDataBlockInitializerClient;
```

<video controls width='100%' src="https://static-docs.nocobase.com/20240526170424_rec_.mp4"></video>

#### 6.2 ポップアップの「ブロックを追加」への追加

ページレベルの「ブロックを追加」に加えて、「テーブル」ブロックの「新規追加」ポップアップの「ブロックを追加」にも追加する必要があります。

![img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg](https://static-docs.nocobase.com/img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg.jpg)

ページレベルから取得した「name」で、テーブルブロックの「ブロックを追加」の「name」は「popup:addNew:addBlock」であり、「データブロック」に対応する「name」は「dataBlocks」です。

次に、`packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/index.tsx`ファイルを変更します：

```diff
import { Plugin } from '@nocobase/client';
import { Info } from './component';
import { useInfoProps } from './schema';
import { infoSettings } from './settings';
import { infoInitializerItem } from './initializer';

export class PluginDataBlockInitializerClient extends Plugin {
  async load() {
    this.app.addComponents({ Info });
    this.app.addScopes({ useInfoProps });

    this.app.schemaSettingsManager.add(infoSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem);
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem);
  }
}

export default PluginDataBlockInitializerClient;
```

![img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g](https://static-docs.nocobase.com/img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g.jpg)

#### 6.3 モバイル端末の「ブロックを追加」への追加

> まず、モバイル端末プラグインを有効にする必要があります。詳細は[プラグインの有効化](/welcome/getting-started/plugin#3-activate-the-plugin)のドキュメントを参照してください。

モバイル端末の「ブロックを追加」にも追加することができます。「name」を取得する方法についてはここでは省略します。

次に、`packages/plugins/@nocobase-sample/plugin-initializer-block-data/src/client/index.tsx`ファイルを変更します：

```diff
import { Plugin } from '@nocobase/client';
import { Info } from './component';
import { useInfoProps } from './schema';
import { infoSettings } from './settings';
import { infoInitializerItem } from './initializer';

export class PluginDataBlockInitializerClient extends Plugin {
  async load() {
    this.app.addComponents({ Info });
    this.app.addScopes({ useInfoProps });

    this.app.schemaSettingsManager.add(infoSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem);
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem);
+   this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem);
  }
}

export default PluginDataBlockInitializerClient;
```

もし追加の `Add block` が必要な場合は、対応する `name` を知っていれば、引き続き追加できます。

## パッケージ化と本番環境へのアップロード

[プラグインの構築とパッケージ化](/development/your-fisrt-plugin#構建并打包插件) のドキュメントに従って、プラグインをパッケージ化し、本番環境にアップロードできます。

クローンしたソースコードの場合は、最初に全体ビルドを実行し、プラグインの依存関係も構築する必要があります。

```bash
yarn build
```

`create-nocobase-app` を使用して作成されたプロジェクトの場合は、次のコマンドを直接実行できます。

```bash
yarn build @nocobase-sample/plugin-initializer-block-data --tar
```

これにより、`storage/tar/@nocobase-sample/plugin-initializer-block-data.tar.gz` ファイルが生成され、その後、[アップロードの方法](/welcome/getting-started/plugin) に従ってインストールできます。

