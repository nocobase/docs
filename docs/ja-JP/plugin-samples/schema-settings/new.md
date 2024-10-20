# 新しい SchemaSettings の作成

## シナリオ説明

新しいブロック、フィールド、または操作を追加する際に、その表示や動作のために新たな設定項目を追加する必要がある場合があります。この時、新しい `SchemaSettings` を追加する必要があります。

## 例の説明

この例は [シンプルブロック](/plugin-samples/schema-initializer/block-simple) を基にしています。当初は `remove` のみを持つ SchemaSettings を作成しましたが、今回の例では以下の設定項目を追加します：

- `Edit block title`：ブロックタイトルの編集
- `Edit Image`：画像の編集
- `Edit height`：画像の高さの編集
- `objectFit`：img の `object-fit` 属性の選択
- `Lazy`：遅延読み込みの有無

<br />

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240602112410_rec_.mp4" type="video/mp4" />
</video>

本例は初期化子の使用を示すためのものであり、ブロックの拡張に関しては [ブロック拡張](/plugin-samples/block) のドキュメントを参照してください。

このドキュメントの完全な例のコードは [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-schema-settings-new) で確認できます。

## プラグインの初期化

[最初のプラグインを書く](/development/your-fisrt-plugin) ドキュメントに従い、プロジェクトがない場合は新規プロジェクトを作成し、すでにある場合やクローンしたソースがある場合はこのステップをスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次にプラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-schema-settings-new
yarn pm enable @nocobase-sample/plugin-schema-settings-new
```

その後、プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) にアクセスすると、プラグインがインストールされ、有効になっていることを確認できます。

## 機能の実装

### 1. ブロック/フィールド/操作の作成

前述の通り、本例は [シンプルブロック](/plugin-samples/schema-initializer/simple-block) を基に実装を続けるため、`packages/plugins/@nocobase-sample/plugin-initializer-block-simple/src/client` ディレクトリをコピーして `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client` に上書きします。

次に `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/index.tsx` を修正します：

```diff
// ...
- import { Image } from './component';
+ import { ImageV2 } from './component';

- export class PluginInitializerBlockSimpleClient extends Plugin {
+ export class PluginSchemaSettingsNewClient extends Plugin {
  async load() {
-   this.app.addComponents({ Image })
+   this.app.addComponents({ ImageV2 })
    // ...
  }
}

- export default PluginInitializerBlockSimpleClient;
+ export default PluginSchemaSettingsNewClient;
```

次に `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/component/Image.tsx` の `Image` コンポーネントを修正します：

```diff
- export const Image: FC<{ height?: number }> = withDynamicSchemaProps(({ height = 500 }) => {
+ export const ImageV2: FC<{ height?: number }> = withDynamicSchemaProps(({ height = 500 }) => {
```

次に `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/constants.ts` を修正します：

```ts
export const BlockName = 'ImageV2';
export const BlockNameLowercase = 'image-v2';
```

### 2. コンポーネントの属性

#### 2.1 コンポーネントの実装

まず、コンポーネントが必要な属性をサポートするようにします。

`packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/component/Image.tsx` ファイルを修正します：

```tsx | pure
import React, { FC } from 'react';
import { withDynamicSchemaProps } from '@nocobase/client';
import { BlockName } from '../constants';

export interface ImageV2Props {
  src?: { url: string; title?: string };
  /**
   * @default 500
   */
  height?: number;
  /**
   * @default 'cover'
   */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  /**
   * @default false
   */
  lazy?: boolean;
}

export const ImageV2: FC<ImageV2Props> = withDynamicSchemaProps((props) => {
  const { src, height = 500, objectFit = 'cover', lazy = false } = props;
  return <div style={{ height }}>
    {
      src ? <img
        loading={lazy ? 'lazy' : 'eager'}
        style={{ width: '100%', height: '100%', objectFit }}
        src={src.url}
        alt={src.title}
      /> : null
    }
  </div>
}, { displayName: BlockName })
```

#### 2.2 コンポーネントの検証

コンポーネントの検証方法は2種類あります：

- 一時ページ検証：一時的にページを作成し、`ImageV2`コンポーネントをレンダリングして、要件に合致しているか確認します。
- ドキュメント例検証：ドキュメントを起動し、`yarn doc plugins/@@nocobase-sample/plugin-schema-settings-new`を実行することで、ドキュメント例を通じて要件に合致しているか検証できます（TODO）。

ここでは、一時ページ検証の例を示します。新しいページを作成し、属性パラメータに基づいて1つまたは複数の`Image`コンポーネントを追加して、要件に合致しているか確認します。

```tsx | pure
// ...
export class PluginSchemaSettingsNewClient extends Plugin {
  async load() {
    // ...
    this.app.router.add('admin.image-component', {
      path: '/admin/image-component',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <ImageV2 />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <ImageV2 src={{ url: 'https://picsum.photos/1200/500' }} height={200} />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <ImageV2 src={{ url: 'https://picsum.photos/1200/500' }} objectFit='contain' />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <ImageV2 src={{ url: 'https://picsum.photos/1200/500' }} lazy />
          </div>
        </>
      }
    })
  }
}
```

[http://localhost:3000/admin/image-component](http://localhost:3000/admin/image-component)にアクセスして、要件に合致しているか確認します。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240601171433_rec_.mp4" type="video/mp4" />
</video>

検証が完了したら、テストページを削除する必要があります。

### 3. スキーマの実装

#### 3.1 スキーマの定義

`packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/schema/index.ts`を修正します：

```diff
import { ISchema } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { imageSettings } from "../settings";
import { BlockName, BlockNameLowercase } from "../constants";

+ import { ImageV2Props } from "../component";

+ export function useImageV2Props(): ImageV2Props {
+  const fieldSchema = useFieldSchema();
+  return fieldSchema.parent?.['x-decorator-props']?.[BlockNameLowercase];
+ }

export const imageSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
+ 'x-decorator-props': {
+   [BlockNameLowercase]: {}
+ },
  properties: {
    [BlockNameLowercase]: {
      'x-component': BlockName,
+     'x-use-component-props': 'useImageV2Props'
    }
  },
  'x-settings': imageSettings.name
};
```

`Image` の属性は `x-decorator-props` の `image` 属性に保存され、その後 `x-use-component-props` を使用して取得します。

`useImageV2Props()`：`Image` コンポーネントに対応する属性を返します。

- `useFieldSchema()`：現在のフィールドのスキーマを取得し、`parent` を通じて親のスキーマを取得します。データブロックの場合は、[useDataBlockProps](https://client.docs.nocobase.com/core/data-block/data-block-provider#usedatablockprops) を使用して属性を取得できます。

#### 3.2 スキーマの検証

```tsx | pure
// ...
export class PluginSchemaSettingsNewClient extends Plugin {
  async load() {
    // ...
    this.app.router.add('admin.image-schema', {
      path: '/admin/image-schema',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{
              properties: {
                test1: {
                  ...imageSchema,
                  'x-decorator-props': { [BlockNameLowercase]: {} }
                }
              }
            }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{
              properties: {
                test1: {
                  ...imageSchema,
                  'x-decorator-props': { [BlockNameLowercase]: { src: { url: 'https://picsum.photos/1200/500' }, height: 200 } }
                }
              }
            }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{
              properties: {
                test1: {
                  ...imageSchema,
                  'x-decorator-props': { [BlockNameLowercase]: { src: { url: 'https://picsum.photos/1200/500' }, objectFit: 'contain' } }
                }
              }
            }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{
              properties: {
                test1: {
                  ...imageSchema,
                  'x-decorator-props': { [BlockNameLowercase]: { src: { url: 'https://picsum.photos/1200/500' }, lazy: true } }
                }
              }
            }} />
          </div>
        </>
      }
    })
  }
}
```

[http://localhost:3000/admin/image-component](http://localhost:3000/admin/image-component) にアクセスし、要件を満たしているか確認します。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240601171433_rec_.mp4" type="video/mp4" />
</video>

検証が完了したら、テストページを削除してください。

### 4. SchemaSettingsの実装

[簡単区画文書](/plugin-samples/schema-initializer/block-simple#4-実装-schema-settings) では、`SchemaSettings` の実装方法について説明されています。

### 5. SchemaSettings itemsの実装

#### 5.1 編集ブロックタイトルの実装

編集ブロックタイトルは一般的なロジックであるため、NocoBaseは `SchemaSettingsBlockTitleItem`（文書TODO）コンポーネントを提供しており、直接使用できます。

`packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/InfoBlock.tsx` を修正します：

```diff
- import { SchemaSettingsBlockTitleItem } from "@nocobase/client";
+ import { SchemaSettings, SchemaSettingsBlockTitleItem } from "@nocobase/client";

export const imageSettings = new SchemaSettings({
  name: 'blockSettings:image',
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
  <source src="https://static-docs.nocobase.com/20240602105024_rec_.mp4" type="video/mp4" />
</video>

再利用可能なSchemaSettingsのアイテムについてはTODOを参照してください。

#### 5.2 画像編集の実装

##### 5.2.1 SchemaSettingsアイテムの実装

新たに `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/settings/items/image.ts` ファイルを作成します：

```ts
import { SchemaSettingsItemType, useDesignable } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { useT } from "../../locale";
import { BlockNameLowercase } from "../../constants";

export const imageSchemaSettingsItem: SchemaSettingsItemType = {
  name: 'src',
  type: 'actionModal',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('画像編集'),
      schema: {
        type: 'object',
        title: t('画像編集'),
        properties: {
          src: {
            title: t('画像'),
            type: 'string',
            default: filedSchema['x-decorator-props']?.[BlockNameLowercase]?.src,
            'x-decorator': 'FormItem',
            'x-component': 'Upload.Attachment',
            'x-component-props': {
              action: 'attachments:create',
            },
          },
        },
      },
      onSubmit(image: any) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[BlockNameLowercase],
              src: image.src,
            },
          },
        });
      }
    };
  },
};
```

SchemaSettingsアイテムの定義については[SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems)を参照してください。

- `type`：ビルトインタイプ。[actionModal](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsactionmodalitem)はダイアログタイプです。
- `name`：一意の識別子で、CRUD操作に使用されます。
- `useComponentProps`：`actionModal`に対応するコンポーネント`SchemaSettingsActionModalItem`のプロパティを返します。

`useComponentProps`：

- フックス
  - `useFieldSchema`：現在のノードのスキーマを取得します。
  - `useDesignable`：現在のDesignableインスタンスを取得し、deepMergeはスキーマをマージします。
    - `x-uid`：現在のノードの一意の識別子。
    - `x-decorator-props`：現在のノードのプロパティで、`image`のプロパティを保存します。

- プロップス
  - `title`：ダイアログのタイトル。
  - `schema`：ダイアログのフォームスキーマ。
    - [Upload.Attachment](https://client.docs.nocobase.com/components/upload)：アップロードコンポーネント。
    - [FormItem](https://client.docs.nocobase.com/components/form-item)：フォーム項目。
  - `onSubmit`：フォーム送信イベント。

##### 5.2.2 SchemaSettingsアイテムの使用

`packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/settings/index.ts` を修正します：

```diff
// ...
+ import { imageSchemaSettingsItem } from "./items/image";

export const imageSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
+   imageSchemaSettingsItem,
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
  <source src="https://static-docs.nocobase.com/20240611173015_rec_.mp4" type="video/mp4" />
</video>

#### 5.3 高さの編集を実現する

##### 5.3.1 SchemaSettings Itemを実装する

`packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/settings/items/height.ts` ファイルを新規作成します：

```ts
import { SchemaSettingsItemType, useDesignable } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { useT } from '../../locale';
import { BlockNameLowercase } from "../../constants";

export const heightSchemaSettingsItem: SchemaSettingsItemType = {
  name: 'height',
  type: 'actionModal',
  useComponentProps() {
    const filedSchema = useFieldSchema();
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

SchemaSettings Itemの定義に関しては、[SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems)を参照してください。

- `type`：組み込み型。[actionModal](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsactionmodalitem) はポップアップ形式です。
- `name`：一意の識別子で、CRUD操作に使用されます。
- `useComponentProps`：`actionModal` に対応するコンポーネント `SchemaSettingsActionModalItem` の属性を返します。

`useComponentProps`：

- Hooks
  - `useFieldSchema`：現在のノードのスキーマを取得します。
  - `useDesignable`：現在のDesignableインスタンスを取得し、deepMergeを使用してスキーマをマージします。
    - `x-uid`：現在のノードの一意の識別子。
    - `x-decorator-props`：現在のノードの属性で、`image`の属性を保存します。

- Props
  - `title`：ポップアップのタイトル。
  - `schema`：ポップアップのフォームスキーマ。
    - [InputNumber](https://client.docs.nocobase.com/components/input-number)：数字入力ボックス。
    - [FormItem](https://client.docs.nocobase.com/components/form-item)：フォーム項目。
  - `onSubmit`：フォームの送信イベント。

##### 5.3.2 SchemaSettings Itemを使用する

`packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/settings/index.ts` を修正します：

```diff
// ...
+ import { heightSchemaSettingsItem } from "./items/height";

export const imageSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    imageSchemaSettingsItem,
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
  <source src="https://static-docs.nocobase.com/20240602110936_rec_.mp4" type="video/mp4" />
</video>

#### 5.4 ObjectFitの実装

##### 5.4.1 SchemaSettings Itemの実装

`packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/items/objectFit.ts` ファイルを新規作成します：

```ts
import { SchemaSettingsItemType, useDesignable } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { useT } from "../../locale";
import { BlockNameLowercase } from "../../constants";

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

SchemaSettings Itemの定義については [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems) を参照してください。

- `type`：組み込みタイプ。[select](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsselectitem) は選択タイプです。
- `name`：一意の識別子で、CRUD操作に使用します。
- `useComponentProps`：`select` に対応するコンポーネント `SchemaSettingsSelectItem` のプロパティを返します。

`useComponentProps`：

- Hooks
  - `useFieldSchema`：現在のノードのスキーマを取得します。
  - `useDesignable`：現在のDesignableインスタンスを取得し、deepMergeを使用してスキーマをマージします。
    - `x-uid`：現在のノードの一意の識別子です。
    - `x-decorator-props`：現在のノードの属性で、`image` の属性を保存します。

- Props
  - `title`：ポップアップのタイトルです。
  - `options`：選択肢です。
  - `value`：デフォルト値です。
  - `onChange`：選択イベントです。

##### 5.4.2 SchemaSettings Itemの使用

`packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/settings/index.ts` を修正します：

```diff
// ...
+ import { objectFitSchemaSettingsItem } from "./items/objectFit";

export const imageSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    imageSchemaSettingsItem,
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
  <source src="https://static-docs.nocobase.com/20240602111256_rec_.mp4" type="video/mp4" />
</video>

#### 5.5 Lazyの実装

##### 5.5.1 SchemaSettings Itemの実装

新しく `packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/items/lazy.ts` ファイルを作成します：

```ts
import { SchemaSettingsItemType, useDesignable } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { useT } from "../../locale";
import { BlockNameLowercase } from "../../constants";

export const lazySchemaSettingsItem: SchemaSettingsItemType = {
  name: 'lazy',
  type: 'switch',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const t = useT();

    return {
      title: t('Lazy'),
      checked: !!filedSchema['x-decorator-props']?.[BlockNameLowercase]?.lazy,
      onChange(v) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[BlockNameLowercase],
              lazy: v,
            },
          },
        });
      },
    };
  },
};
```

SchemaSettings Itemの定義については [SchemaSettingsItem](https://client.docs.nocobase.com/core/ui-schema/schema-settings#optionsitems) を参照してください。

- `type`：組み込みタイプ。[switch](https://client.docs.nocobase.com/core/ui-schema/schema-settings#schemasettingsswitchitem) はスイッチタイプです。
- `name`：ユニークな識別子で、CRUD操作に使用されます。
- `useComponentProps`：`switch` に対応するコンポーネント `SchemaSettingsSwitchItem` のプロパティを返します。

`useComponentProps`：

- Hooks
  - `useFieldSchema`：現在のノードスキーマを取得します。
  - `useDesignable`：現在のDesignableインスタンスを取得し、deepMergeはスキーマをマージするために使用されます。
    - `x-uid`：現在のノードのユニークな識別子。
    - `x-decorator-props`：現在のノードの属性で、`image` の属性を保持します。

- Props
  - `title`：ポップアップのタイトル。
  - `checked`：デフォルト値。
  - `onChange`：スイッチイベント。

##### 5.5.2 SchemaSettings Itemの使用

`packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/settings/index.ts` を修正します：

```diff
// ...
+ import { lazySchemaSettingsItem } from "./items/lazy";

export const imageSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    imageSchemaSettingsItem,
    heightSchemaSettingsItem,
    objectFitSchemaSettingsItem,
+   lazySchemaSettingsItem,
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
  <source src="https://static-docs.nocobase.com/20240602111748_rec_.mp4" type="video/mp4" />
</video>

#### 5.6 Dividerの追加

`editBlockTitle` と `remove` は一般的なロジックであり、`src`、`height`、`objectFit`、`lazy` は `Image` に特化した設定です。これらを区別するために `divider` を使用します。

`packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/settings/index.ts` を修正します：

```diff
// ...
export const imageSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
+   {
+     name: 'divider1',
+     type: 'divider'
+   },
    imageSchemaSettingsItem,
    heightSchemaSettingsItem,
    objectFitSchemaSettingsItem,
    lazySchemaSettingsItem,
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

![20240602112229](https://static-docs.nocobase.com/20240602112229.png)

### 6. 多言語対応

:::warning
多言語ファイルの変更後は、サービスを再起動する必要があります。
:::

#### 6.1 英語

`packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/locale/en-US.json` ファイルを編集します：

```json
{
  "Image": "Image",
  "Edit Image": "Edit Image",
  "Images": "Images",
  "Autoplay": "Autoplay",
  "Edit height": "Edit Height",
  "Height": "Height",
  "Lazy": "Lazy"
}
```

#### 6.2 中国語

`packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/locale/zh-CN.json` ファイルを編集します：

```json
{
  "Image": "图片",
  "Edit Image": "编辑图片",
  "Images": "图片",
  "Edit height": "编辑高度",
  "Height": "高度",
  "Lazy": "懒加载"
}
```

さらに多言語のサポートが必要な場合は、追加で作成できます。

## パッケージングと本番環境へのアップロード

[プラグインの構築とパッケージング](/development/your-fisrt-plugin#构建并打包插件) ドキュメントに従って、プラグインをパッケージングして本番環境にアップロードできます。

クローンしたソースの場合は、依存関係も構築するために全体をビルドする必要があります。

```bash
yarn build
```

`create-nocobase-app` を使用して作成したプロジェクトの場合は、次のように直接実行できます：

```bash
yarn build @nocobase-sample/plugin-schema-settings-new --tar
```

これにより、`storage/tar/@nocobase-sample/plugin-schema-settings-new.tar.gz` ファイルが生成され、その後 [アップロードの方法](/welcome/getting-started/plugin) に従ってインストールします。

#### 5.6 ディバイダーの追加

`editBlockTitle` と `remove` は一般的なロジックであり、`src`、`height`、`objectFit`、`lazy` は `Image` に特化した設定です。これらを区別するために `divider` を使用します。

`packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/client/settings/index.ts` を次のように変更します：

```diff
// ...
export const imageSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
+   {
+     name: 'divider1',
+     type: 'divider'
+   },
    imageSchemaSettingsItem,
    heightSchemaSettingsItem,
    objectFitSchemaSettingsItem,
    lazySchemaSettingsItem,
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

![20240602112229](https://static-docs.nocobase.com/20240602112229.png)

### 6. 多言語対応

:::warning
多言語ファイルの変更後、サービスを再起動する必要があります。
:::

#### 6.1 英語

`packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/locale/en-US.json` ファイルを編集します：

```json
{
  "Image": "Image",
  "Edit Image": "Edit Image",
  "Images": "Images",
  "Autoplay": "Autoplay",
  "Edit height": "Edit Height",
  "Height": "Height",
  "Lazy": "Lazy"
}
```

#### 6.2 中国語

`packages/plugins/@nocobase-sample/plugin-schema-settings-new/src/locale/zh-CN.json` ファイルを編集します：

```json
{
  "Image": "图片",
  "Edit Image": "编辑图片",
  "Images": "图片",
  "Edit height": "编辑高度",
  "Height": "高度",
  "Lazy": "懒加载"
}
```
さらに多くの多言語サポートが必要な場合は、追加できます。

## パッケージを作成して本番環境にアップロード

[プラグインのビルドとパッケージ化](/development/your-fisrt-plugin#構建並打包插件) の説明に従って、プラグインをパッケージ化し、本番環境にアップロードできます。

クローンしたソースコードの場合は、最初に全体ビルドを実行し、プラグインの依存関係を構築する必要があります。

```bash
yarn build
```

`create-nocobase-app` を使用して作成したプロジェクトの場合は、次のコマンドを直接実行できます：

```bash
yarn build @nocobase-sample/plugin-schema-settings-new --tar
```

これにより、`storage/tar/@nocobase-sample/plugin-schema-settings-new.tar.gz` ファイルが生成され、[アップロードの方法](/welcome/getting-started/plugin)でインストールできます。

