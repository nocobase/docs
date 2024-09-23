# 新しいシンプルブロックの追加

## シナリオ説明

NocoBaseには、インターフェースにブロックを追加するための「Add block」ボタンが多数存在します。その中で、データテーブルに関連するものはデータブロック「Data Block」と呼ばれ、データテーブルに関連しないものはシンプルブロック「Simple Block」と呼ばれます。

![img_v3_02b4_a4529308-62e3-4fa7-be4d-5dcae332c49g](https://static-docs.nocobase.com/img_v3_02b4_a4529308-62e3-4fa7-be4d-5dcae332c49g.jpg)

しかし、現在のブロックタイプが必ずしも私たちの要求を満たすわけではないため、要求に応じたカスタムブロックの開発が必要です。本記事ではシンプルブロック「Simple Block」について説明します。

## サンプル説明

本例では、画像ブロックタイプを作成し、それを「Page」、「Table」、およびモバイルの「Add block」に追加します。

本例は初期化子の使用を示すためのものであり、ブロック拡張に関する詳細は[ブロック拡張](/plugin-samples/block)のドキュメントを参照してください。

このドキュメントの完全なサンプルコードは[plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-initializer-block-simple)で確認できます。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-181816.mp4" type="video/mp4" />
</video>

## プラグインの初期化

私たちは[最初のプラグインを書く](/development/your-fisrt-plugin)のドキュメントに従い、プロジェクトがなければ新たに作成します。すでにプロジェクトがある場合やソースコードをクローンした場合はこのステップをスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-initializer-block-simple
yarn pm enable @nocobase-sample/plugin-initializer-block-simple
```

プロジェクトを起動します：

```bash
yarn dev
```

その後、ログインして[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/)にアクセスすると、プラグインがインストールされ、起動していることを確認できます。

## 機能実装

本例を実装する前に、いくつかの基本知識を理解しておく必要があります：

- [SchemaInitializer チュートリアル](/development/client/ui-schema/initializer)：インターフェース内にブロック、フィールド、操作を追加するためのもの
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：インターフェース内にブロック、フィールド、操作を追加するためのもの
- [UI Schema プロトコル](/development/client/ui-schema/what-is-ui-schema)：スキーマの構造と各属性の役割について詳細に説明
- [Designable デザイナー](/development/client/ui-schema/designable)：スキーマを変更するためのもの

```bash
.
├── client # クライアントプラグイン
│   ├── initializer # 初期化器
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

### 1. 名称の定義

まず、ブロックの名称を定義します。これはさまざまな場所で使用されます。

`packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/constants.ts`を新たに作成します：

```ts
export const BlockName = 'Image';
export const BlockNameLowercase = BlockName.toLowerCase();
```

### 2. ブロックコンポーネントの実装

#### 2.1 ブロックコンポーネントの定義

本例では、画像ブロックコンポーネントを作成し、名称を「Image」とします。

したがって、`packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/component/Image.tsx`ファイルを新たに作成し、その内容は以下の通りです：

```tsx | pure
import React, { FC } from 'react';
import { withDynamicSchemaProps } from '@nocobase/client';
import { BlockName } from '../constants';

export const Image: FC<{ height?: number }> = withDynamicSchemaProps(({ height = 500 }) => {
  return <div style={{ height }}>
    <img
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      src="https://picsum.photos/2000/500"
    />
  </div>
}, { displayName: BlockName })
```

`Image` コンポーネントは全体として `withDynamicSchemaProps` でラップされた関数コンポーネントです。[withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-と-x-use-component-props) は、スキーマ内の動的プロパティを処理するための高階コンポーネントです。

`withDynamicSchemaProps` を無視すると、`Image` コンポーネントは単純な関数コンポーネントとなります。

次に、`packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/component/index.ts` でエクスポートします：

```tsx | pure
export * from './Image';
```

#### 2.2 ブロックコンポーネントの登録

`Image` をプラグインを通じてシステムに登録する必要があります。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Image } from './component';

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image });
  }
}

export default PluginInitializerBlockSimpleClient;
```

#### 2.3 ブロックコンポーネントの検証

コンポーネントの検証方法は2種類あります：

- 一時ページ検証：一時的にページを作成し、`Image` コンポーネントをレンダリングして、要件を満たしているかを確認します。
- ドキュメントサンプル検証：ドキュメントを起動し、`yarn doc plugins/@nocobase-sample/plugin-initializer-block-simple` を通じて、ドキュメントサンプルの形式で要件を満たしているかを確認します（TODO）。

ここでは `一時ページ検証` の例を取り上げます。新しいページを作成し、プロパティパラメーターに基づいて1つまたは複数の `Image` コンポーネントを追加して、要件を満たしているかを確認します。

```tsx | pure
import React from 'react';
import { Plugin } from '@nocobase/client';
import { Image } from './component';

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image });

    this.app.router.add('admin.image-component', {
      path: '/admin/image-component',
      Component: () => {
        return (
          <>
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <Image />
            </div>

            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <Image height={400} />
            </div>
          </>
        );
      }
    });
  }
}

export default PluginInitializerBlockSimpleClient;
```

その後、`http://localhost:13000/admin/image-component` にアクセスすると、対応するテストページの内容が表示されます。

![20240526165057](https://static-docs.nocobase.com/20240526165057.png)

検証が完了したら、テストページを削除する必要があります。

### 3. ブロックスキーマの定義

#### 3.1 ブロックスキーマの定義

NocoBase の動的ページはすべてスキーマを通じてレンダリングされるため、スキーマを定義する必要があります。これにより、インターフェースに `Image` ブロックを追加できます。この節を実装する前に、いくつかの基本知識を理解する必要があります：

- [UI スキーマプロトコル](/development/client/ui-schema/what-is-ui-schema)：スキーマの構造と各プロパティの役割について詳しく説明します。

`packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/schema/index.ts` ファイルを新規作成します：

```tsx | pure
import { ISchema } from "@nocobase/client";
import { BlockName, BlockNameLowercase } from "../constants";

export const imageSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
  properties: {
    [BlockNameLowercase]: {
      'x-component': BlockName,
    }
  }
};
```

`imageSchema` の詳細説明：

- `type`：タイプ、ここでは `void` で、純粋な UI ノードを示します。
- `x-decorator`：デコレーター、ここでは [CardItem コンポーネント](https://client.docs.nocobase.com/components/card-item) で、現在のブロックはすべてカード内にラップされ、スタイル、レイアウト、ドラッグ＆ドロップの機能を提供します。
- `x-component`：コンポーネント、ここでは `Image`、つまり私たちが定義したコンポーネントです。

上記のスキーマを React コンポーネントに変換すると、次のようになります：

```tsx | pure
<CardItem>
  <Image />
</CardItem>
```

#### 3.2 ブロックスキーマの検証

コンポーネントの検証と同様に、スキーマが要件を満たしているかを確認するために、一時ページ検証またはドキュメントサンプル検証を行うことができます。ここでは、一時ページ検証の例を取り上げます。

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { Image } from './component';
import { imageSchema } from './schema';

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image });

    this.app.router.add('admin.image-schema', {
      path: '/admin/image-schema',
      Component: () => {
        return (
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test: imageSchema } }} />
          </div>
        );
      },
    });
  }
}

export default PluginInitializerBlockSimpleClient;

`SchemaComponent` の詳細については [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) ドキュメントをご覧ください。

私たちは [http://localhost:13000/admin/image-schema](http://localhost:13000/admin/image-schema) にアクセスすることで、対応するテストページの内容を見ることができます。

![20240526165408](https://static-docs.nocobase.com/20240526165408.png)

検証が完了したら、テストページを削除する必要があります。

### 4. Schema Initializer Item の定義

`packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/initializer/index.ts` ファイルを新たに作成します：

```ts
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';

import { useT } from '../locale';
import { imageSchema } from '../schema';
import { BlockName, BlockNameLowercase } from '../constants';

export const imageInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: BlockNameLowercase,
  icon: 'FileImageOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(BlockName),
      onClick: () => {
        insert(imageSchema);
      },
    };
  },
};
```

- `type`：タイプで、ここでは `item` となり、クリックイベントがあるテキストを示します。クリックすると新しい Schema が挿入されます。
- `name`：ユニーク識別子で、異なる Schema Item と CRUD 操作を区別します。
- `icon`：アイコンで、さらに多くのアイコンについては [Ant Design Icons](https://ant.design/components/icon) を参照してください。
- `useComponentProps`：`title` と `onClick` の2つの属性を含むオブジェクトを返します。`title` は表示されるテキストで、`onClick` はクリック後のコールバック関数です。
- [useSchemaInitializer()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：`SchemaInitializerContext` コンテキストを取得するために使用されます。
  - `insert`：新しい Schema を挿入します。

Schema Item の定義についての詳細は [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) ドキュメントを参照してください。

### 5. Schema Settings の実装

#### 5.1 Schema Settings の定義

完全な Block には Schema Settings が必要で、いくつかの属性や操作を設定しますが、Schema Settings はこの例の重点ではないため、ここでは `remove` 操作のみを持ちます。

`packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/settings/index.ts` ファイルを新たに作成します：

```ts | pure
import { SchemaSettings } from "@nocobase/client";
import { BlockNameLowercase } from "../constants";

export const imageSettings = new SchemaSettings({
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

- componentProps
  - `removeParentsIfNoChildren`：子ノードがない場合に親ノードを削除するかどうか
  - `breakRemoveOn`：削除時の中断条件。`Add Block` が自動的に子項目を `Grid` でラップするため、ここで `breakRemoveOn: { 'x-component': 'Grid' }` を設定します。`Grid` を削除する際には、上位の削除を行わないようにします。

#### 5.2 スキーマ設定の登録

```ts
import { Plugin } from '@nocobase/client';
import { imageSettings } from './settings';

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(imageSettings);
  }
}

export default PluginInitializerBlockSimpleClient;
```

#### 5.3 スキーマ設定の使用

`packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/schema/index.ts` の `imageSchema` を修正します：

```diff
+ import { imageSettings } from "../settings";

const imageSchema: ISchema = {
  type: 'void',
  'x-decorator': 'CardItem',
+ 'x-settings': imageSettings.name,
  // ...
};
```

### 6. Add Block への追加

システムには多くの `Add Block` ボタンがありますが、それぞれの **name は異なります**。

#### 6.1 ページレベルの Add Block への追加

ページレベルの `Add Block` に追加する必要がある場合、対応する `name` を知る必要があります。TODO の方法で対応する `name` を確認できます。

TODO

上の図から、ページレベルの `Add Block` に対応する name は `page:addBlock`、`Other Blocks` に対応する name は `otherBlocks` であることがわかります。

次に `packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/index.tsx` ファイルを修正します：

```tsx | pure
import { Plugin } from '@nocobase/client';

import { Image } from './component';
import { imageSettings } from './settings';
import { imageInitializerItem } from './initializer';

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image });
    this.app.schemaSettingsManager.add(imageSettings);
    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem);
  }
}

export default PluginInitializerBlockSimpleClient;
```

上記のコードはまず `Image` コンポーネントをシステムに登録します。これにより、前述の `imageSchema` で定義された `x-component: 'Image'` が対応するコンポーネントを見つけられるようになります。詳細な説明は [グローバル登録コンポーネントとスコープ](/plugin-samples/component-and-scope/global) を参照してください。

次に、`imageSettings` を [app.schemaSettingsManager.add](https://client.docs.nocobase.com/core/ui-schema/schema-settings-manager#schemasettingsmanageradd) を通じてシステムに追加します。

そして [app.schemaInitializerManager.addItem](https://client.docs.nocobase.com/core/ui-schema/schema-initializer-manager#schemainitializermanageradditem) を使用して、`imageInitializerItem` を対応するイニシャライザー子項目に追加します。その際、`page:addBlock` はページ上の `Add Block` の name、`otherBlocks` はその親の name です。

最後に、`Add Block` ボタンにホバーすると、新しいブロックタイプ `Image` が表示され、`Image` をクリックすることで新しい `Image` ブロックを追加できます。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240522-175523.mp4" type="video/mp4" />
</video>

#### 6.2 ポップアップに追加する Add block

ページレベルの `Add block` に追加するだけでなく、`Table` ブロックの `Add new` ポップアップ内の `Add block` にも追加する必要があります。

![img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg](https://static-docs.nocobase.com/img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg.jpg)

ページレベルで取得した `name` に基づき、`Table` ブロックの `Add block` の `name` は `popup:addNew:addBlock` であり、`Other Blocks` に対応する `name` は `otherBlocks` です。

次に、`packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/index.tsx` ファイルを修正します：

```diff
export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image });
    this.app.schemaSettingsManager.add(imageSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem);
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem);
  }
}
```

![img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g](https://static-docs.nocobase.com/img_v3_02b4_7062bfab-5a7b-439c-b385-92c5704b6b3g.jpg)

#### 6.3 モバイル端末に追加する Add block

> まず、モバイルプラグインを有効化する必要があります。 [プラグインを有効化する](/welcome/getting-started/plugin#3-activate-the-plugin) ドキュメントを参照してください。

モバイル端末の `Add block` に追加することができますが、`name` の取得方法についてはここでは詳しく説明しません。

次に、`packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client/index.tsx` ファイルを修正します：

```diff
export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ Image });
    this.app.schemaSettingsManager.add(imageSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem);
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem);
+   this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem);
  }
}
```

![img_v3_02b4_ec873b25-5a09-4f3a-883f-1d722035799g](https://static-docs.nocobase.com/img_v3_02b4_ec873b25-5a09-4f3a-883f-1d722035799g.jpg)

さらに `Add block` が必要な場合は、対応する `name` が分かっていれば追加できます。

## パッケージ化と本番環境へのアップロード

[プラグインを構築しパッケージ化する](/development/your-fisrt-plugin#構建并打包插件) ドキュメントに従って、プラグインをパッケージ化し、本番環境にアップロードできます。

クローンしたソースコードの場合、最初に全体ビルドを実行して、プラグインの依存関係を構築する必要があります。

```bash
yarn build
```

`create-nocobase-app` を使用して作成したプロジェクトであれば、次のコマンドを直接実行できます：

```bash
yarn build @nocobase-sample/plugin-initializer-block-simple --tar
```

これで `storage/tar/@nocobase-sample/plugin-initializer-block-simple.tar.gz` ファイルが生成され、その後 [アップロード方法](/welcome/getting-started/plugin) に従ってインストールできます。

