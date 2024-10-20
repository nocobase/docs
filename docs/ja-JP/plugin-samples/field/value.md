# 値フィールドコンポーネント

値フィールドコンポーネントは、`value` 属性を持つフィールドコンポーネントで、フィールドの値を表示するために使用されます。例えば、`Input`、`Select`、`Checkbox`、`Radio`、`Switch` などのコンポーネントはすべて値フィールドコンポーネントです。

## 実例

このサンプルでは、URL フィールドの値を表示するために `QRCode` コンポーネントを新たに追加し、`サイズ`、`色`、`境界` の設定をサポートします。

この文書の完全なサンプルコードは [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-field-value) で確認できます。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1721790389902.mov" type="video/mp4" />
</video>

## プラグインの初期化

[最初のプラグインを作成する](/development/your-fisrt-plugin) 文書に従い、プロジェクトがない場合は新たにプロジェクトを作成し、既にある場合やクローンしたソースコードがある場合はこのステップをスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-field-value
yarn pm enable @nocobase-sample/plugin-field-value
```

その後、プロジェクトを起動します：

```bash
yarn dev
```

ログイン後、[http://localhost:13000/admin/pm/list/locale/](http://localhost:13000/admin/pm/list/locale/) にアクセスすると、プラグインがインストールされ有効化されていることを確認できます。

## 機能実装

このサンプルを実装する前に、いくつかの基本知識を理解しておく必要があります：

- [ant-design QRCode](https://ant.design/components/qr-code)
- [SchemaInitializer チュートリアル](/development/client/ui-schema/initializer)：インターフェースにさまざまなブロック、フィールド、操作を追加するためのもの
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：インターフェースにさまざまなブロック、フィールド、操作を追加するためのもの
- [UI Schema プロトコル](/development/client/ui-schema/what-is-ui-schema)：Schema の構造と各属性の役割について詳しく説明
- [Designable デザイナー](/development/client/ui-schema/designable)：Schema を修正するためのもの

```bash
.
├── client # クライアントプラグイン
│   ├── QRCode.tsx # コンポーネント
│   ├── settings.tsx # スキーマ設定
│   ├── locale.ts # 多言語ツール関数
│   └── index.ts # クライアントエントリーファイル
├── locale # 多言語ファイル
│   ├── en-US.json # 英語
│   └── zh-CN.json # 中国語
├── index.ts # サーバープラグインエントリー
└── server # サーバープラグイン
```

### 1. コンポーネント

![20240723211323](https://static-docs.nocobase.com/20240723211323.png)

コンポーネントに関しては、三つのモードに適応する必要があります：

- Editable：編集モード
- ReadOnly：読み取り専用モード（編集禁止）
- Easy-reading：閲覧モード

その中で、`ReadOnly` モードは編集モードの `disabled` 属性に属するため、`Editable` と `Easy-reading` の二つのモードに適応すれば十分です。

#### 1.1 編集モードコンポーネント

編集モードでは、コンポーネントは自動的に `onChange`、`value`、`disabled` および `schema` 中の [x-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-and-x-use-component-props) 属性を注入します。

`packages/plugins/@nocobase-sample/plugin-field-value/src/client/QRCode.tsx` ファイルを新規作成します：

```tsx | pure
import React, { FC } from 'react';
import { Input } from '@nocobase/client';
import { QRCode as AntdQRCode, Space, QRCodeProps as AntdQRCodeProps } from 'antd';

interface QRCodeProps extends AntdQRCodeProps {
  onChange: (value: string) => void;
  disabled?: boolean;
}

const QRCodeEditable: FC<QRCodeProps> = ({ value, disabled, onChange, ...otherProps }) => {
  return (
    <Space direction="vertical" align="center">
      <AntdQRCode value={value || '-'} {...otherProps} />
      <Input.URL
        maxLength={60}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />
    </Space>
  );
}
```

編集モードでは、`Space` コンポーネントを使用して `QRCode` と `Input.URL` コンポーネントを一緒に配置し、`QRCode` コンポーネントは URL フィールドの値を表示し、`Input.URL` は URL フィールドの値を編集します。

`value`、`disabled`、`onChange` は `Editable` モードで自動的に注入されるプロパティです。

#### 1.2 プレビュー モード コンポーネント

プレビュー モードでは、コンポーネントは自動的に `value` と `schema` にある [x-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-and-x-use-component-props) プロパティを注入します。

`packages/plugins/@nocobase-sample/plugin-field-value/src/client/QRCode.tsx` ファイルを引き続き修正します：

```tsx | pure
const QRCodeReadPretty: FC<QRCodeProps> = ({ value, ...otherProps }) => {
  if (!value) return null;
  return <AntdQRCode value={value} {...otherProps} />;
}
```

#### 1.3 接続コンポーネント

`QRCodeEditable` と `QRCodeReadPretty` コンポーネントを接続する必要があります。これにより、Schema で [x-pattern](https://docs.nocobase.com/development/client/ui-schema/what-is-ui-schema#x-pattern) を通じてコンポーネントを自動的に切り替えることができます。

引き続き `packages/plugins/@nocobase-sample/plugin-field-value/src/client/QRCode.tsx` ファイルを修正します：

```tsx | pure
import { connect, mapReadPretty } from '@formily/react';

export const QRCode: FC<QRCodeProps> = connect(QRCodeEditable, mapReadPretty(QRCodeReadPretty));

QRCode.displayName = 'QRCode';
```

`connect` 関数を使用して `QRCodeEditable` と `QRCodeReadPretty` コンポーネントを接続しています。

#### 1.4 コンポーネントの登録

`QRCode` をプラグインを通じてシステムに登録する必要があります。

```ts
import { Plugin } from '@nocobase/client';

import { QRCode } from './QRCode';

export class PluginFieldComponentValueClient extends Plugin {
  async load() {
    this.app.addComponents({ QRCode });
  }
}

export default PluginFieldComponentValueClient;
```

これにより、Schema で文字列形式で `QRCode` コンポーネントを使用できるようになります。

```json
{
  "type": "string",
  "x-component": "QRCode"
}
```

#### 1.5 field interface の `componentOptions` への追加

`QRCode` コンポーネントを `url` インターフェースフィールドの `componentOptions` に追加する必要があります。これにより、インターフェースを通じてコンポーネントを自由に切り替えられるようになります。

```ts
import { Plugin } from '@nocobase/client';

import { QRCode } from './QRCode';
import { qrCodeComponentFieldSettings } from './settings';
import { tStr } from './locale';

export class PluginFieldComponentValueClient extends Plugin {
  async load() {
    this.app.addComponents({ QRCode });
    this.schemaSettingsManager.add(qrCodeComponentFieldSettings);
    this.app.addFieldInterfaceComponentOption('url', {
      label: tStr('QRCode'),
      value: 'QRCode'
    });
  }
}

export default PluginFieldComponentValueClient;
```

`app.addFieldInterfaceComponentOption` の使用については、[ドキュメント](https://client.docs.nocobase.com/core/data-source/collection-field-interface-manager#addfieldinterfacecomponentoption)を参照してください。

![編集モード](https://static-docs.nocobase.com/20240724111012.png)

![ReadOnly モード](https://static-docs.nocobase.com/20240724111116.png)

![プレビュー モード](https://static-docs.nocobase.com/20240724111231.png)

### 2. Schema Settings の実装

Schema Settings を通じて `QRCode` コンポーネントのプロパティを設定する必要があります。

#### 2.1 Schema Settings の定義

`packages/plugins/@nocobase-sample/plugin-field-value/src/client/settings.tsx` ファイルを新しく作成します：

```ts
import { createModalSettingsItem, createSelectSchemaSettingsItem, createSwitchSettingsItem, SchemaSettings } from "@nocobase/client";

import { tStr, useT } from './locale';

export const qrCodeComponentFieldSettings = new SchemaSettings({
  name: 'fieldSettings:component:QRCode',
  items: [
    // TODO
  ]
});
```

`name` の命名規則は `fieldSettings:component:${componentName}` で、`componentName` はコンポーネントの名前です。

#### 2.2 スキーマ設定の登録

`qrCodeComponentFieldSettings` をシステムに登録します。

`packages/plugins/@nocobase-sample/plugin-field-component-value/src/client/index.tsx` ファイルを修正します：

```ts
// ...
import { qrCodeComponentFieldSettings } from './settings';

export class PluginFieldComponentValueClient extends Plugin {
  async load() {
    // ...
    this.schemaSettingsManager.add(qrCodeComponentFieldSettings);
  }
}
```

### 3. スキーマ設定項目の実装

#### 3.1 `Size` の実装

`Size` は `select` ドロップダウンを使用して `small`、`middle`、`large` を選択します。

`packages/plugins/@nocobase-sample/plugin-field-component-value/src/client/settings.ts` を修正します：

```ts
// ...
export const qrCodeComponentFieldSettings = new SchemaSettings({
  name: 'fieldSettings:component:QRCode',
  items: [
    createSelectSchemaSettingsItem({
      name: 'size',
      title: tStr('Size'),
      schemaKey: 'x-component-props.size',
      defaultValue: 160,
      useOptions() {
        const t = useT();
        return [
          {
            label: t('Small'),
            value: 100,
          },
          {
            label: t('Middle'),
            value: 160,
          },
          {
            label: t('Large'),
            value: 200,
          }
        ];
      }
    }),
  ],
});
```

- `name`：一意の識別子
- `title`：タイトル
- `schemaKey`：スキーマのキー（ここでは `x-component-props.size` に保存します）
- `defaultValue`：デフォルト値
- `useOptions`：オプション

#### 3.2 `Bordered` の実装

`Bordered` は `switch` スイッチを使用して、境界線の表示を選択します。

```ts
export const qrCodeComponentFieldSettings = new SchemaSettings({
  name: 'fieldSettings:component:QRCode',
  items: [
    // ...
    createSwitchSettingsItem({
      name: 'bordered',
      schemaKey: 'x-component-props.bordered',
      title: tStr('Bordered'),
      defaultValue: true,
    }),
  ],
});
```

- `name`：一意の識別子
- `schemaKey`：スキーマのキー（ここでは `x-component-props.bordered` に保存します）
- `defaultValue`：デフォルト値

#### 3.3 `Color` の実装

`Color` は `Modal` ポップアップを使用して色を選択します。

```ts
export const qrCodeComponentFieldSettings = new SchemaSettings({
  name: 'fieldSettings:component:QRCode',
  items: [
    // ...
    createModalSettingsItem({
      name: 'color',
      title: tStr('Color'),
      parentSchemaKey: 'x-component-props',
      schema({ color }) {
        return {
          type: 'object',
          title: tStr('Color'),
          properties: {
            color: {
              type: 'string',
              title: tStr('Color'),
              default: color,
              'x-component': 'ColorPicker',
            }
          }
        };
      },
    }),
  ],
});
```

### 4. 多言語

私たちは [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) を通じて複数の言語を追加し、右上隅で言語を切り替えることができます。

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

#### 4.1 英語

`packages/plugins/@nocobase-sample/plugin-field-value/src/locale/zh-CN.json` ファイルを編集します：

```diff
{
  "QRCode": "QRCode",
  "Size": "Size",
  "Bordered": "Bordered",
  "Color": "Color",
  "Small": "Small",
  "Middle": "Middle",
  "Large": "Large"
}
```

#### 4.2 中国語

`packages/plugins/@nocobase-sample/plugin-field-value/src/locale/zh-CN.json` ファイルを編集します：

```diff
{
  "QRCode": "二维码",
  "Size": "尺寸",
  "Bordered": "边框",
  "Color": "颜色",
  "Small": "小",
  "Middle": "中",
  "Large": "大"
}
```

![TODO：スクリーンショット](https://static-docs.nocobase.com/TODO：スクリーンショット.png)

## パッケージ化とプロダクション環境へのアップロード

[プラグインのビルドとパッケージ化](/development/your-fisrt-plugin#プラグインのビルドとパッケージ化) ドキュメントの説明に従って、プラグインをパッケージ化し、プロダクション環境にアップロードできます。

クローンしたソースコードの場合、最初に全体をビルドして依存関係を構築する必要があります。

```bash
yarn build
```

`create-nocobase-app` を使用して作成したプロジェクトの場合は、直接実行できます：

```bash
yarn build @nocobase-sample/plugin-field-value --tar
```

これにより、`storage/tar/@nocobase-sample/plugin-field-value.tar.gz` ファイルが生成され、その後[アップロードの方法](/welcome/getting-started/plugin)に従ってインストールできます。

