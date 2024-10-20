# `Carousel` ブロック

## シーン説明

NocoBase にはインターフェースにブロックを追加するための多くの `Add block` ボタンがありますが、現在のブロックタイプが必ずしも私たちのニーズを満たすわけではありません。そのため、ニーズに応じて独自のブロックを開発する必要があります。

その中で、データテーブルに関連するものはデータブロック `Data Block` と呼ばれ、データテーブルに関係ないものはシンプルブロック `Simple Block` と呼ばれます。本記事ではシンプルブロック `Simple Block` の例を説明します。

## 例の説明

本例では、ant-design の [Carousel](https://ant.design/components/carousel) コンポーネントを基に `Carousel` ブロックを作成し、それを `Page`、`Table` およびモバイルの `Add block` に追加します。

このドキュメントの完全なサンプルコードは [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-block-carousel) で確認できます。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603155655_rec_.mp4" type="video/mp4" />
</video>

## プラグインの初期化

私たちは [最初のプラグインを書く](/development/your-fisrt-plugin) ドキュメントに従って、プロジェクトがない場合は新しいプロジェクトを作成し、既にある場合やクローンしたソースコードがある場合はこのステップをスキップします。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-block-carousel
yarn pm enable @nocobase-sample/plugin-block-carousel
```

その後、プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/locale/](http://localhost:13000/admin/pm/list/locale/) にアクセスすると、プラグインがインストールされ、有効になっていることが確認できます。

## 機能の実現

この例を実現する前に、いくつかの基本知識を理解する必要があります：

- [ant-design Carousel](https://ant.design/components/carousel)
- [SchemaInitializer チュートリアル](/development/client/ui-schema/initializer)：インターフェースにさまざまなブロック、フィールド、操作などを追加するために使用します。
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：インターフェースにさまざまなブロック、フィールド、操作などを追加するために使用します。
- [UI Schema プロトコル](/development/client/ui-schema/what-is-ui-schema)：Schema の構造と各属性の役割を詳しく説明します。
- [Designable デザイナー](/development/client/ui-schema/designable)：Schema を変更するために使用します。

```bash
.
├── client # クライアントプラグイン
│   ├── initializer # 初期化器
│   ├── component # ブロックコンポーネント
│   ├── index.tsx # クライアントプラグインのエントリ
│   ├── locale.ts # 多言語ツール関数
│   ├── constants.ts # 定数
│   ├── schema # Schema
│   └── settings # Schema 設定
├── locale # 多言語ファイル
│   ├── en-US.json # 英語
│   └── zh-CN.json # 中国語
├── index.ts # サーバープラグインのエントリ
└── server # サーバープラグイン
```

### 1. 名前の定義

まず、ブロックの名前を定義する必要があります。これはさまざまな場所で使用されます。

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/constants.ts` を新規作成します：

```ts
export const BlockName = 'Carousel';
export const BlockNameLowercase = BlockName.toLowerCase();
```

### 2. ブロックコンポーネントの実装

#### 2.1 ブロックコンポーネントの定義

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/component/Carousel.tsx` ファイルを新規作成し、その内容は以下の通りです：

```tsx | pure
import React, { FC } from 'react';
import { Carousel as AntdCarousel, Result, CarouselProps as AntdCarouselProps } from 'antd';
import { withDynamicSchemaProps } from '@nocobase/client';
import { BlockName } from './constants';

export interface CarouselProps extends AntdCarouselProps {
  images?: { url: string; title?: string }[];
  /**
   * @default 300
   */
  height?: number;
  /**
   * @default 'cover'
   */
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

export const Carousel: FC<CarouselProps> = withDynamicSchemaProps((props) => {
  const { images, height = 300, objectFit = 'cover', ...carouselProps } = props;
  return (images && images.length) ? (
    <AntdCarousel {...carouselProps}>
      {images.map((image) => (
        <div key={image.url}>
          <img key={image.title} src={image.url} alt={image.title} style={{ height, width: '100%', objectFit }} />
        </div>
      ))}
    </AntdCarousel>
  ) : <Result status='404' />
}, { displayName: BlockName })
```

`Carousel`コンポーネントは、全体的に`withDynamicSchemaProps`でラップされた関数コンポーネントです。[withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-と-x-use-component-props)は、スキーマ内の動的属性を処理するための高階コンポーネントです。

`withDynamicSchemaProps`を使用しない場合、`Carousel`コンポーネントは単純な関数コンポーネントとして動作します。

次に、`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/component/index.ts`でエクスポートします：

```tsx | pure
export * from './Carousel';
```

#### 2.2 ブロックコンポーネントの登録

`Carousel`をプラグインを通じてシステムに登録する必要があります。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Carousel } from './component';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel });
  }
}

export default PluginBlockCarouselClient;
```

#### 2.3 ブロックコンポーネントの検証

コンポーネントの検証方法は2種類あります：

- 一時ページ検証：一時的にページを作成し、`Carousel`コンポーネントをレンダリングして要件に合っているか確認します。
- ドキュメントサンプル検証：ドキュメントを起動し、`yarn doc plugins/@nocobase-sample/plugin-block-carousel`で、ドキュメントサンプルの方式で要件に合っているか確認します（TODO）。

一時ページ検証の例として、新しいページを作成し、プロパティパラメータに基づいて1つまたは複数の`Carousel`コンポーネントを追加して要件に合っているか確認します。

```tsx | pure
import React from 'react';
import { Plugin } from '@nocobase/client';
import { Carousel } from './component';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel });

    this.app.router.add('admin.carousel-component', {
      path: '/admin/carousel-component',
      Component: () => {
        const images = [{ url: 'https://picsum.photos/id/1/1200/300' }, { url: 'https://picsum.photos/id/2/1200/300' }];
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel images={images} />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel images={images} height={100} />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel images={images} objectFit='contain' />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel images={images} autoplay />
          </div>
        </>
      }
    });
  }
}

export default PluginBlockCarouselClient;
```

その後、`http://localhost:13000/admin/carousel-component`にアクセスすると、対応するテストページの内容が表示されます。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603155918_rec_.mp4" type="video/mp4" />
</video>

検証が完了したら、テストページを削除する必要があります。

### 3. ブロックスキーマの定義

#### 3.1 ブロックスキーマの定義

NocoBaseの動的ページはすべてSchemaを通じてレンダリングされるため、まずSchemaを定義し、その後インターフェースに`Carousel`ブロックを追加する必要があります。このセクションを実施する前に、いくつかの基礎知識を理解しておくことが重要です。

- [UI Schemaプロトコル](/development/client/ui-schema/what-is-ui-schema)：Schemaの構造や各属性の役割について詳しく説明しています。

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/schema/index.ts`ファイルを新規作成します：

```tsx | pure
import { ISchema } from '@nocobase/client';
import { useFieldSchema } from '@formily/react';

import { BlockName, BlockNameLowercase } from '../constants';

export function useCarouselBlockProps() {
  const fieldSchema = useFieldSchema();
  return fieldSchema.parent?.['x-decorator-props']?.[BlockNameLowercase];
}

export const carouselSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
  'x-decorator-props': {
    [BlockNameLowercase]: {},
  },
  properties: {
    carousel: {
      type: 'void',
      'x-component': BlockName,
      'x-use-component-props': 'useCarouselBlockProps',
    },
  },
};
```

`carouselSchema`の各部分について説明します：

- `type`：型、ここでは`void`を指定し、純粋なUIノードであり、データは存在しません。
- `'x-component': 'CardItem'`：[CardItemコンポーネント](https://client.docs.nocobase.com/components/card-item)を使用します。現在のブロックはすべてカードに包まれており、スタイルやレイアウト、ドラッグ＆ドロップなどの機能を提供します。
- `x-decorator-props`：`Carousel`コンポーネントの属性を格納するために使用されます。
- `properties`：子ノード
  - `carousel`：
    - `'x-component': BlockName`：`Carousel`コンポーネントを指定します。
    - `'x-use-component-props': 'useCarouselBlockProps'`：動的に`Carousel`コンポーネントの属性を取得するために使用します。

上記のSchemaをReactコンポーネントに変換すると、次のようになります：

```tsx | pure
<CardItem>
  <Carousel {...useCarouselBlockProps()} />
</CardItem>
```

#### 3.2 スコープの登録

`useCarouselBlockProps`をシステムに登録する必要があります。これにより、[x-use-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-と-x-use-component-props)が対応するスコープを見つけることができます。

```tsx | pure
import { Plugin } from '@nocobase/client';
import { Carousel } from './component';
import { useCarouselBlockProps } from './schema';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel });
    this.app.addScopes({ useCarouselBlockProps });
  }
}

export default PluginBlockCarouselClient;
```

スコープに関するさらなる説明は、[グローバルコンポーネントとスコープの登録](/plugin-samples/component-and-scope/global)をご覧ください。

#### 3.3 ブロックSchemaの検証

コンポーネントの検証と同様に、仮のページ検証またはドキュメントサンプル検証の方法でSchemaが要件に合致しているかを確認できます。ここでは仮のページ検証の例を示します：

```tsx | pure
import React from 'react';
import { Plugin, SchemaComponent } from '@nocobase/client';
import { Carousel } from './component';
import { carouselSchema } from './schema';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel });
    this.app.addScopes({ useCarouselBlockProps });

    this.app.router.add('admin.carousel-schema', {
      path: '/admin/carousel-schema',
      Component: () => {
        const images = [{ url: 'https://picsum.photos/id/1/1200/300' }, { url: 'https://picsum.photos/id/2/1200/300' }];
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test1: carouselSchema } }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test2: { ...carouselSchema, 'x-decorator-props': { carousel: { images, height: 100 } } } } }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test3: { ...carouselSchema, 'x-decorator-props': { carousel: { images, objectFit: 'contain' } } } } }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test4: { ...carouselSchema, 'x-decorator-props': { carousel: { images, autoplay: true } } } } }} />
          </div>
        </>
      }
    });
  }
}

export default PluginBlockCarouselClient;
```

`SchemaComponent` に関する詳細な説明は [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) ドキュメントを参照してください。

[http://localhost:13000/admin/carousel-schema](http://localhost:13000/admin/carousel-schema) にアクセスすると、対応するテストページの内容が表示されます。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603155918_rec_.mp4" type="video/mp4" />
</video>

検証が完了したら、テストページを削除してください。

### 4. Schema Initializer Item の定義

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/initializer/index.ts` ファイルを新規作成します：

```ts
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';

import { carouselSchema } from '../schema';
import { BlockName, BlockNameLowercase } from '../constants';
import { useT } from '../locale';

export const carouselInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: BlockNameLowercase,
  icon: 'PlayCircleOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(BlockName),
      onClick: () => {
        insert(carouselSchema);
      },
    };
  },
}
```

- `type`：タイプ。ここでは `item` で、クリックイベントがあるテキストを示します。クリックすると新しい Schema を挿入します。
- `name`：ユニークな識別子で、異なる Schema Item および CRUD 操作を区別するために使用されます。
- `icon`：アイコン。その他のアイコンは [Ant Design Icons](https://ant.design/components/icon) を参照してください。
- `useComponentProps`：`title` と `onClick` の2つの属性を含むオブジェクトを返します。`title` は表示されるテキスト、`onClick` はクリック後のコールバック関数です。
- [useSchemaInitializer()](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#useschemainitializer)：`SchemaInitializerContext` のコンテキストを取得するために使用されます。
  - `insert`：新しい Schema を挿入します。
- `useT()`：多言語ツール関数を取得するために使用されます。

Schema Item の定義に関する詳細は [Schema Initializer Item](https://client.docs.nocobase.com/core/ui-schema/schema-initializer#built-in-components-and-types) ドキュメントを参照してください。

### 5. Add block への追加

システムには多くの `Add block` ボタンがありますが、それぞれの **name は異なります**。

![img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g](https://static-docs.nocobase.com/img_v3_02b4_049b0a62-8e3b-420f-adaf-a6350d84840g.jpg)

#### 5.1 ページレベルの Add block に追加する

ページレベルの `Add block` に追加する必要がある場合、対応する `name` を知る必要があります。TODO 方法で対応する `name` を確認できます。

TODO

上の図から、ページレベルの `Add block` に対応する name は `page:addBlock` であり、`Other Blocks` に対応する name は `otherBlocks` です。

次に `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/index.tsx` ファイルを修正します：

```tsx | pure
import { Plugin } from '@nocobase/client';

import { Carousel } from './component';
import { carouselSchema, useCarouselBlockProps } from './schema';
import { carouselSettings } from './settings';
import { carouselInitializerItem } from './initializer';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel });
    this.app.schemaSettingsManager.add(carouselSettings);
    this.app.addScopes({ useCarouselBlockProps });

    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${carouselInitializerItem.name}`, carouselInitializerItem);
  }
}

export default PluginBlockCarouselClient;
```

上記のコードでは、まず `Carousel` コンポーネントをシステムに登録します。これにより、前に定義された `carouselSchema` の `x-component: 'Carousel'` が対応するコンポーネントを見つけることができるようになります。詳細な説明は [全体登録 Component と Scope](/plugin-samples/component-and-scope/global) を参照してください。

次に、`carouselSettings` を [app.schemaSettingsManager.add](https://client.docs.nocobase.com/core/ui-schema/schema-settings-manager#schemasettingsmanageradd) を通じてシステムに追加します。

そして [app.schemaInitializerManager.addItem](https://client.docs.nocobase.com/core/ui-schema/schema-initializer-manager#schemainitializermanageradditem) を使用して、`carouselInitializerItem` を対応する Initializer 子項目に追加します。この際、`page:addBlock` はページ上の `Add block` の name であり、`otherBlocks` はその親の name です。

その後、`Add block` ボタンにホバーすると、新しいブロックタイプ `Image` が表示されます。`Image` をクリックすると、新しい `Carousel` ブロックを追加できます。

![20240603161730](https://static-docs.nocobase.com/20240603161730.png)

#### 5.2 ポップアップ Add block に追加する

ページレベルの `Add block` に追加するだけでなく、`Table` ブロックの `Add new` ポップアップの `Add block` にも追加する必要があります。

![img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg](https://static-docs.nocobase.com/img_v3_02b4_fc47fe3a-35a1-4186-999c-0b48e6e001dg.jpg)

ページレベルで `name` を取得する方法に従い、`Table` ブロックの `Add block` の `name` は `popup:addNew:addBlock` であり、`Other Blocks` に対応する name は `otherBlocks` です。

次に `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/index.tsx` ファイルを修正します：

```diff
export class PluginBlockCarouselClient extends Plugin {
  async load() {
    // ...
+   this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${carouselInitializerItem.name}`, carouselInitializerItem);
  }
}
```

![20240603161814](https://static-docs.nocobase.com/20240603161814.png)

#### 5.3 モバイル端末の Add block に追加する

> まず、モバイル端末プラグインを有効化する必要があります。参照 [プラグインの有効化](/welcome/getting-started/plugin#3-activate-the-plugin) ドキュメント。

モバイル端末の `Add block` に追加することもできます。`name` を取得する方法についてはここでは詳しく説明しません。

次に `packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/index.tsx` ファイルを修正します：

```diff
export class PluginBlockCarouselClient extends Plugin {
  async load() {
    // ...
+   this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `otherBlocks.${carouselInitializerItem.name}`, carouselInitializerItem)
  }
}
```

![20240603161913](https://static-docs.nocobase.com/20240603161913.png)

`Add block` を追加する必要がある場合は、対応する `name` を知っていれば、追加を続けることができます。

### 6. スキーマ設定の実装

#### 6.1 スキーマ設定の定義

完全なブロックには、いくつかの属性や操作を設定するためのスキーマ設定が必要です。

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts` ファイルを新規作成します：

```ts | pure
import { SchemaSettings } from "@nocobase/client";
import { BlockNameLowercase } from '../constants';

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    // TODO
  ]
});
```

#### 6.2 スキーマ設定の登録

```ts
import { Plugin } from '@nocobase/client';
import { carouselSettings } from './settings';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    // ...
    this.app.schemaSettingsManager.add(carouselSettings);
  }
}

export default PluginBlockCarouselClient;
```

#### 6.3 スキーマ設定の使用

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/schema/index.ts` の `carouselSchema` を修正します：

```diff
+ import { carouselSettings } from "../settings";

const carouselSchema: ISchema = {
  type: 'void',
  'x-decorator': 'CardItem',
+ 'x-settings': carouselSettings.name,
  // ...
};
```

![20240603162037](https://static-docs.nocobase.com/20240603162037.png)

### 7. スキーマ設定アイテムの実装

現在、私たちは `スキーマ設定` を実装しましたが、まだ何の操作も実装していません。必要に応じて各操作を実装する必要があります。

スキーマ設定がサポートする組み込み操作タイプについては、[スキーマ設定 - 組み込みコンポーネントおよびタイプ](https://client.docs.nocobase.com/core/ui-schema/schema-settings#built-in-components-and-types) ドキュメントを参照してください。

#### 7.1 `remove` 操作の実装

現在、初期化子を通じて追加されたブロックは削除できません。`remove` 操作を実装する必要があります。

[NocoBase] には [remove](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsremove-1) 操作タイプが組み込まれています。`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts` ファイルを修正します：

```diff
import { SchemaSettings } from '@nocobase/client';
import { BlockNameLowercase } from '../constants';

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
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
  - `breakRemoveOn`：削除時の中断条件。`Add Block` は自動的に子項目を `Grid` で包むため、ここでは `breakRemoveOn: { 'x-component': 'Grid' }` を設定し、`Grid` を削除する際に、上に向かっては削除しないようにします。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162229_rec_.mp4" type="video/mp4" />
</video>

#### 7.2 `Edit Block title` 操作の実装

ブロックのタイトルを変更するための `Edit Block title` 操作を実装できます。

ブロックタイトルの編集は一般的な論理であるため、NocoBaseはSchemaSettingsBlockTitleItem（文書TODO）コンポーネントを提供しており、私たちは直接使用できます。

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`を修正します：

```diff
- import { SchemaSettingsBlockTitleItem } from "@nocobase/client";
+ import { SchemaSettings, SchemaSettingsBlockTitleItem } from "@nocobase/client";

import { SchemaSettings, SchemaSettingsBlockTitleItem } from '@nocobase/client';
import { BlockNameLowercase } from '../constants';
import { heightSchemaSettingsItem } from './items/height';
import { objectFitSchemaSettingsItem } from './items/objectFit';
import { imagesSchemaSettingsItem } from './items/images';
import { autoplaySchemaSettingsItem } from './items/autoplay';

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
+   {
+     name: 'editBlockTitle',
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
    }
  ]
});
```

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162340_rec_.mp4" type="video/mp4" />
</video>

再利用可能なSchemaSettingsアイテムの詳細はTODOをご覧ください。

#### 7.3 `Edit Images`操作の実装

画像を変更するための`Edit Images`操作を実装できます。

##### 7.3.1 Schema Settingsアイテムの定義

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/images.ts`ファイルを新規作成します：

```ts
import { SchemaSettingsItemType, useDesignable } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';

import { BlockNameLowercase } from "../../constants";
import { useT } from "../../locale";

export const imagesSchemaSettingsItem: SchemaSettingsItemType = {
  name: 'images',
  type: 'actionModal',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('Edit Images'),
      schema: {
        type: 'object',
        title: t('Edit Images'),
        properties: {
          src: {
            title: t('Images'),
            type: 'string',
            default: filedSchema['x-decorator-props'][BlockNameLowercase]?.images ?? [],
            'x-decorator': 'FormItem',
            'x-component': 'Upload.Attachment',
            'x-component-props': {
              action: 'attachments:create',
              multiple: true
            },
          },
        },
      },
      onSubmit({ src: images }: any) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[BlockNameLowercase],
              images,
            },
          },
        });
      }
    };
  },
};
```

SchemaSettings Item の定義については、[SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems)を参照してください。

- `type`：組み込み型。`actionModal`はポップアップ型です。
- `name`：一意の識別子で、CRUD 操作に使用されます。
- `useComponentProps`：`actionModal` に対応するコンポーネント `SchemaSettingsActionModalItem` のプロパティを返します。

`useComponentProps`：

- Hooks
  - `useFieldSchema`：現在のノードのスキーマを取得します。
  - `useDesignable`：現在の Designable インスタンスを取得し、deepMerge を使用してスキーマをマージします。
    - `x-uid`：現在のノードの一意の識別子です。
    - `x-decorator-props`：現在のノードのプロパティで、`carousel` のプロパティを格納しています。

- Props
  - `title`：ポップアップのタイトルです。
  - `schema`：ポップアップのフォームスキーマです。
    - [Upload.Attachment](https://client.docs.nocobase.com/components/upload)：アップロードコンポーネント
    - [FormItem](https://client.docs.nocobase.com/components/form-item)：フォーム項目
  - `onSubmit`：フォーム送信イベントです。

##### 7.3.2 SchemaSettings Item の使用

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`を修正します：

```diff
// ...
+ import { imagesSchemaSettingsItem } from "./items/images";

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
+   imagesSchemaSettingsItem,
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

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162436_rec_.mp4" type="video/mp4" />
</video>

#### 7.4 Edit Height の実装

##### 7.4.1 SchemaSettings Item の実装

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/height.ts`ファイルを新規作成します：

```ts
import { SchemaSettingsItemType, useDesignable } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';

import { BlockNameLowercase } from "../../constants";
import { useT } from "../../locale";

export const heightSchemaSettingsItem: SchemaSettingsItemType = {
  name: 'height',
  type: 'actionModal',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('Edit Height'),
      schema: {
        type: 'object',
        title: t('Edit Height'),
        properties: {
          height: {
            title: t('Height'),
            type: 'number',
            default: filedSchema['x-decorator-props']?.[BlockNameLowercase]?.height,
            'x-decorator': 'FormItem',
            'x-component': 'InputNumber',
          },
        },
      },
      onSubmit({ height }: any) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[BlockNameLowercase],
              height,
            },
          },
        });
      }
    };
  },
};
```

SchemaSettings Item の定義については、[SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems)を参照してください。

- `type`：組み込み型。`actionModal`はポップアップ型です。
- `name`：一意の識別子で、CRUD 操作に使用されます。
- `useComponentProps`：`actionModal` に対応するコンポーネント `SchemaSettingsActionModalItem` のプロパティを返します。

`useComponentProps`：

- Hooks
  - `useFieldSchema`：現在のノードのスキーマを取得します。
  - `useDesignable`：現在の Designable インスタンスを取得し、deepMerge を使用してスキーマをマージします。
    - `x-uid`：現在のノードの一意の識別子です。
    - `x-decorator-props`：現在のノードのプロパティで、`carousel` のプロパティを格納しています。

- Props
  - `title`：ポップアップのタイトルです。
  - `schema`：ポップアップのフォームスキーマです。
    - [InputNumber](https://client.docs.nocobase.com/components/input-number)：数字入力ボックス
    - [FormItem](https://client.docs.nocobase.com/components/form-item)：フォーム項目
  - `onSubmit`：フォーム送信イベントです。

##### 7.4.2 SchemaSettings Item の使用

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`を修正します：

```diff
// ...
+ import { heightSchemaSettingsItem } from "./items/height";

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    imagesSchemaSettingsItem,
+   heightSchemaSettingsItem,
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

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162555_rec_.mp4" type="video/mp4" />
</video>

#### 7.5 ObjectFit の実装

##### 7.5.1 SchemaSettings Item の実装

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/objectFit.ts` ファイルを新規作成します：

```ts
import { SchemaSettingsItemType, useDesignable } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { BlockNameLowercase } from "../../constants";
import { useT } from "../../locale";

export const objectFitSchemaSettingsItem: SchemaSettingsItemType = {
  name: 'objectFit',
  type: 'select',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('Object Fit'),
      options: [
        { label: 'Cover', value: 'cover' },
        { label: 'Contain', value: 'contain' },
        { label: 'Fill', value: 'fill' },
        { label: 'None', value: 'none' },
        { label: 'Scale Down', value: 'scale-down' },
      ],
      value: filedSchema['x-decorator-props']?.[BlockNameLowercase]?.objectFit || 'cover',
      onChange(v) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[BlockNameLowercase],
              objectFit: v,
            },
          },
        });
      },
    };
  },
};
```

SchemaSettings Item の定義については、[SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems)を参照してください。

- `type`：組み込み型。`select`は選択型です。
- `name`：一意の識別子で、CRUD 操作に使用されます。
- `useComponentProps`：`select` に対応するコンポーネント `SchemaSettingsSelectItem` のプロパティを返します。

`useComponentProps`：

- Hooks
  - `useFieldSchema`：現在のノードのスキーマを取得します。
  - `useDesignable`：現在の Designable インスタンスを取得し、deepMerge を使用してスキーマをマージします。
    - `x-uid`：現在のノードの一意の識別子です。
    - `x-decorator-props`：現在のノードのプロパティで、`carousel` のプロパティを格納しています。

- Props
  - `title`：ポップアップのタイトルです。
  - `options`：選択肢です。
  - `value`：デフォルト値です。
  - `onChange`：選択イベントです。

##### 7.5.2 SchemaSettings Item の使用

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`を修正します：

```diff
// ...
+ import { objectFitSchemaSettingsItem } from "./items/objectFit";

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    imagesSchemaSettingsItem,
    heightSchemaSettingsItem,
+   objectFitSchemaSettingsItem,
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

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162655_rec_.mp4" type="video/mp4" />
</video>

#### 7.6 Autoplay の実装

##### 7.6.1 SchemaSettings Item の実装

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/autoplay.ts` ファイルを新規作成します：

```ts
import { SchemaSettingsItemType, useDesignable } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';

import { BlockNameLowercase } from "../../constants";
import { useT } from "../../locale";

export const autoplaySchemaSettingsItem: SchemaSettingsItemType = {
  name: 'autoplay',
  type: 'switch',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('Autoplay'),
      checked: !!filedSchema['x-decorator-props']?.[BlockNameLowercase]?.autoplay,
      onChange(v) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[BlockNameLowercase],
              autoplay: v,
            },
          },
        });
      },
    };
  },
};
```

SchemaSettings Item の定義については、[SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems)を参照してください。

- `type`：組み込み型。`switch`はトグル型です。
- `name`：一意の識別子で、CRUD 操作に使用されます。
- `useComponentProps`：`switch` に対応するコンポーネント `SchemaSettingsSwitchItem` のプロパティを返します。

`useComponentProps`：

- Hooks
  - `useFieldSchema`：現在のノードのスキーマを取得します。
  - `useDesignable`：現在の Designable インスタンスを取得し、deepMerge を使用してスキーマをマージします。
    - `x-uid`：現在のノードの一意の識別子です。
    - `x-decorator-props`：現在のノードのプロパティで、`carousel` のプロパティを格納しています。

- Props
  - `title`：ポップアップのタイトルです。
  - `checked`：デフォルト値です。
  - `onChange`：トグルイベントです。

##### 7.6.2 SchemaSettings Item の使用

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`を修正します：

```diff
// ...
+ import { autoplaySchemaSettingsItem } from "./items/autoplay";

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    imagesSchemaSettingsItem,
    heightSchemaSettingsItem,
    objectFitSchemaSettingsItem,
+   autoplaySchemaSettingsItem,
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

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162803_rec_.mp4" type="video/mp4" />
</video>

#### 7.7 ディバイダーの追加

`editBlockTitle` と `remove` は一般的なロジックですが、`src`、`height`、`objectFit`、`autoplay` は `Image` に特化した設定です。これを区別するために `divider` を使用できます。

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts` を修正します：

```diff
// ...
export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
+   {
+     name: 'divider1',
+     type: 'divider'
+   },
    imagesSchemaSettingsItem,
    heightSchemaSettingsItem,
    objectFitSchemaSettingsItem,
    autoplaySchemaSettingsItem,
+   {
+     name: 'divider2',
+     type: 'divider'
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
    }
  ]
});
```

![20240603162933](https://static-docs.nocobase.com/20240603162933.png)

### 8. 権限

TODO

### 9. 多言語

#### 9.1 英語

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/locale/en-US.json` ファイルを編集します：

```json
{
  "Carousel": "Carousel",
  "Edit Images": "Edit Images",
  "Images": "Images",
  "Autoplay": "Autoplay",
  "Edit Height": "Edit Height",
  "Height": "Height"
}
```

#### 9.2 中国語

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/locale/zh-CN.json` ファイルを編集します：

```json
{
  "Carousel": "走马灯",
  "Edit Images": "编辑图片",
  "Images": "图片",
  "Autoplay": "自动播放",
  "Edit Height": "编辑高度",
  "Height": "高度"
}
```

私たちは [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) を通じて複数の言語を追加し、右上で言語を切り替えることができます。

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

![20240611114018](https://static-docs.nocobase.com/20240611114018.png)

## パッケージ化と本番環境へのアップロード

[プラグインの構築とパッケージ化](/development/your-fisrt-plugin#構建並打包插件) ドキュメントに従って、プラグインをパッケージ化し、本番環境にアップロードできます。

クローンしたソースコードの場合は、最初にフルビルドを実行して、プラグインの依存関係を構築する必要があります。

```bash
yarn build
```

`create-nocobase-app` で作成したプロジェクトの場合は、次のコマンドを直接実行できます：

```bash
yarn build @nocobase-sample/plugin-block-carousel --tar
```

そうすることで、`storage/tar/@nocobase-sample/plugin-block-carousel.tar.gz` ファイルが生成されます。その後、[アップロードの方法](/welcome/getting-started/plugin)でインストールします。

```markdown
##### 7.3.2 SchemaSettings Item の使用

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts` を修正します：

```diff
// ...
+ import { imagesSchemaSettingsItem } from "./items/images";

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
+   imagesSchemaSettingsItem,
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

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162436_rec_.mp4" type="video/mp4" />
</video>

#### 7.4 高さの編集の実装

##### 7.4.1 SchemaSettings Item の実装

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/height.ts` ファイルを新規作成します：

```ts
import { SchemaSettingsItemType, useDesignable } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';

import { BlockNameLowercase } from "../../constants";
import { useT } from "../../locale";

export const heightSchemaSettingsItem: SchemaSettingsItemType = {
  name: 'height',
  type: 'actionModal',
  useComponentProps() {
    const fieldSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('高さを編集'),
      schema: {
        type: 'object',
        title: t('高さを編集'),
        properties: {
          height: {
            title: t('高さ'),
            type: 'number',
            default: fieldSchema['x-decorator-props']?.[BlockNameLowercase]?.height,
            'x-decorator': 'FormItem',
            'x-component': 'InputNumber',
          },
        },
      },
      onSubmit({ height }: any) {
        deepMerge({
          'x-uid': fieldSchema['x-uid'],
          'x-decorator-props': {
            ...fieldSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...fieldSchema['x-decorator-props']?.[BlockNameLowercase],
              height,
            },
          },
        });
      }
    };
  },
};

SchemaSettings Item の定義については [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems) を参照してください。

- `type`：組み込みタイプ。`actionModal` はポップアップタイプです。
- `name`：一意の識別子で、CRUD 操作に使用されます。
- `useComponentProps`：`actionModal` に対応するコンポーネント `SchemaSettingsActionModalItem` の属性を返します。

`useComponentProps`：

- Hooks
  - `useFieldSchema`：現在のノードのスキーマを取得します。
  - `useDesignable`：現在の Designable インスタンスを取得し、deepMerge を使用してスキーマをマージします。
    - `x-uid`：現在のノードの一意の識別子。
    - `x-decorator-props`：現在のノードの属性で、`carousel` の属性が保存されています。

- Props
  - `title`：ポップアップのタイトル。
  - `schema`：ポップアップのフォームスキーマ。
    - [InputNumber](https://client.docs.nocobase.com/components/input-number)：数値入力ボックス。
    - [FormItem](https://client.docs.nocobase.com/components/form-item)：フォーム項目。
  - `onSubmit`：フォーム送信イベント。

##### 7.4.2 SchemaSettings Item の使用

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts` を修正します：

```diff
// ...
+ import { heightSchemaSettingsItem } from "./items/height";

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    imagesSchemaSettingsItem,
+   heightSchemaSettingsItem,
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

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162555_rec_.mp4" type="video/mp4" />
</video>

#### 7.5 ObjectFit の実装

##### 7.5.1 SchemaSettings Item の実装

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/objectFit.ts` ファイルを新規作成します：

```ts
import { SchemaSettingsItemType, useDesignable } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { BlockNameLowercase } from "../../constants";
import { useT } from "../../locale";

export const objectFitSchemaSettingsItem: SchemaSettingsItemType = {
  name: 'objectFit',
  type: 'select',
  useComponentProps() {
    const fieldSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('オブジェクトフィット'),
      options: [
        { label: 'カバー', value: 'cover' },
        { label: 'コンテイン', value: 'contain' },
        { label: 'フィル', value: 'fill' },
        { label: 'なし', value: 'none' },
        { label: 'スケールダウン', value: 'scale-down' },
      ],
      value: fieldSchema['x-decorator-props']?.[BlockNameLowercase]?.objectFit || 'cover',
      onChange(v) {
        deepMerge({
          'x-uid': fieldSchema['x-uid'],
          'x-decorator-props': {
            ...fieldSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...fieldSchema['x-decorator-props']?.[BlockNameLowercase],
              objectFit: v,
            },
          },
        });
      },
    };
  },
};

SchemaSettings Itemの定義については[SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems)を参照してください。

- `type`：組み込みタイプです。[select](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsselectitem)は選択タイプです。
- `name`：一意の識別子で、CRUD操作に使用されます。
- `useComponentProps`：`select`に対応するコンポーネント`SchemaSettingsSelectItem`のプロパティを返します。

`useComponentProps`：

- フック
  - `useFieldSchema`：現在のノードのスキーマを取得します。
  - `useDesignable`：現在のデザイン可能なインスタンスを取得し、deepMergeを使用してスキーマをマージします。
    - `x-uid`：現在のノードの一意の識別子です。
    - `x-decorator-props`：現在のノードのプロパティで、`carousel`のプロパティを保持します。

- プロパティ
  - `title`：ポップアップタイトルです。
  - `options`：選択肢のリストです。
  - `value`：デフォルト値です。
  - `onChange`：選択イベントを処理します。

##### 7.5.2 SchemaSettings Itemの使用

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts`を修正します：

```diff
// ...
+ import { objectFitSchemaSettingsItem } from "./items/objectFit";

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    imagesSchemaSettingsItem,
    heightSchemaSettingsItem,
+   objectFitSchemaSettingsItem,
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

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162655_rec_.mp4" type="video/mp4" />
</video>

#### 7.6 自動再生の実装

##### 7.6.1 SchemaSettings Itemの実装

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/items/autoplay.ts`ファイルを新規作成します：

```ts
import { SchemaSettingsItemType, useDesignable } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';

import { BlockNameLowercase } from "../../constants";
import { useT } from "../../locale";

export const autoplaySchemaSettingsItem: SchemaSettingsItemType = {
  name: 'autoplay',
  type: 'switch',
  useComponentProps() {
    const fieldSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('自動再生'),
      checked: !!fieldSchema['x-decorator-props']?.[BlockNameLowercase]?.autoplay,
      onChange(v) {
        deepMerge({
          'x-uid': fieldSchema['x-uid'],
          'x-decorator-props': {
            ...fieldSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...fieldSchema['x-decorator-props']?.[BlockNameLowercase],
              autoplay: v,
            },
          },
        });
      },
    };
  },
};

スキーマ設定アイテムの定義については [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems) を参照してください。

- `type`：組み込みタイプ。[switch](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsswitchitem) はスイッチタイプを示します。
- `name`：一意の識別子で、CRUD 操作に使用されます。
- `useComponentProps`：`switch` に対応するコンポーネント `SchemaSettingsSwitchItem` のプロパティを返します。

`useComponentProps`：

- フック
  - `useFieldSchema`：現在のノードのスキーマを取得します。
  - `useDesignable`：現在のデザイン可能インスタンスを取得し、`deepMerge` はスキーマをマージするために使用されます。
    - `x-uid`：現在のノードの一意の識別子です。
    - `x-decorator-props`：現在のノードのプロパティで、`carousel` のプロパティが保存されます。

- プロパティ
  - `title`：ポップアップのタイトル
  - `checked`：デフォルト値
  - `onChange`：スイッチイベント

##### 7.6.2 SchemaSettingsアイテムの使用

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts` を変更します：

```diff
// ...
+ import { autoplaySchemaSettingsItem } from "./items/autoplay";

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    imagesSchemaSettingsItem,
    heightSchemaSettingsItem,
    objectFitSchemaSettingsItem,
+   autoplaySchemaSettingsItem,
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

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603162803_rec_.mp4" type="video/mp4" />
</video>

#### 7.7 ディバイダーの追加

`editBlockTitle` と `remove` は一般的なロジックであり、`src`、`height`、`objectFit`、`autoplay` は `Image` に対する設定です。ディバイダーを使用して区別できます。

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/client/settings/index.ts` を変更します：

```diff
// ...
export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
+   {
+     name: 'divider1',
+     type: 'divider'
+   },
    imagesSchemaSettingsItem,
    heightSchemaSettingsItem,
    objectFitSchemaSettingsItem,
    autoplaySchemaSettingsItem,
+   {
+     name: 'divider2',
+     type: 'divider'
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
    }
  ]
});
```

![20240603162933](https://static-docs.nocobase.com/20240603162933.png)

### 8. 権限

TODO

### 9. 多言語

#### 9.1 英語

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/locale/en-US.json` ファイルを編集します：

```json
{
  "Carousel": "Carousel",
  "Edit Images": "Edit Images",
  "Images": "Images",
  "Autoplay": "Autoplay",
  "Edit Height": "Edit Height",
  "Height": "Height"
}
```

#### 9.2 中国語

`packages/plugins/@nocobase-sample/plugin-block-carousel/src/locale/zh-CN.json` ファイルを編集します：

```json
{
  "Carousel": "走马灯",
  "Edit Images": "画像を編集",
  "Images": "画像",
  "Autoplay": "自動再生",
  "Edit Height": "高さを編集",
  "Height": "高さ"
}
```

私たちは [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) を通じて複数の言語を追加し、右上隅で言語を切り替えることができます。

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

![20240611114018](https://static-docs.nocobase.com/20240611114018.png)

## パッケージ化と本番環境へのアップロード

[プラグインのビルドとパッケージ化](/development/your-fisrt-plugin#構建并打包插件) ドキュメントに従って、プラグインをパッケージ化し、本番環境にアップロードできます。

クローンしたソースコードの場合、一度フルビルドを実行し、プラグインの依存関係も構築する必要があります。

```bash
yarn build
```

`create-nocobase-app` を使用して作成したプロジェクトの場合、次のように直接実行できます：

```bash
yarn build @nocobase-sample/plugin-block-carousel --tar
```

これにより、`storage/tar/@nocobase-sample/plugin-block-carousel.tar.gz` ファイルが生成され、[アップロードの方法](/welcome/getting-started/plugin)を通じてインストールできます。
```

