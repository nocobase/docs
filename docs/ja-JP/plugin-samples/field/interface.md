# フィールドインターフェース

前述のように、既存の `Field interface` に基づいてコンポーネントタイプを追加することでフィールドコンポーネントを置き換えることが可能ですが、特定のシナリオでは新たに追加されたコンポーネントが既存の `Field interface` に属さない場合があります。このような場合には、カスタム `Field interface` を定義する必要があります。

## 実例

本記事では、`Encryption` interface タイプ、すなわち暗号化および復号化フィールドを追加します。具体的な要件は以下の通りです：

- 対称暗号化アルゴリズムを使用してフィールドを暗号化および復号化すること
- 暗号化後、密文の形式でデータベースに保存し、データを表示する際には復号化して平文として表示すること
- 暗号化されたフィールドは曖昧検索をサポートせず、等しい、不等しい、空である、空でないなどの操作のみをサポートすること

この機能はフロントエンドとバックエンドの連携が必要であり、フロントエンドは暗号化および復号化のフィールドインターフェースを実装し、バックエンドは暗号化および復号化のロジックを実装する必要があります。

本ドキュメントの完全なサンプルコードは [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-field-interface) で確認できます。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1721993076851.mov" type="video/mp4" />
</video>

## プラグインの初期化

[初めてのプラグインを書く](/development/your-fisrt-plugin) ドキュメントの説明に従い、プロジェクトがない場合は新たにプロジェクトを作成します。すでにプロジェクトがある場合やソースコードをクローンした場合はこのステップをスキップしてください。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

次に、プラグインを初期化し、システムに追加します：

```bash
yarn pm create @nocobase-sample/plugin-field-interface
yarn pm enable @nocobase-sample/plugin-field-interface
```

プロジェクトを起動します：

```bash
yarn dev
```

その後、ログインして [http://localhost:13000/admin/pm/list/locale/](http://localhost:13000/admin/pm/list/locale/) にアクセスすると、プラグインがインストールされ有効化されていることが確認できます。

## ドキュメント知識とディレクトリ構造

本サンプルを実装する前に、いくつかの基礎知識を理解する必要があります：

- [NodeJS crypto モジュール](https://nodejs.org/api/crypto.html)
- [Database]( /api/database)：データ、フィールド、モデル、操作などを管理するためのもの
- [CollectionFieldInterface](https://client.docs.nocobase.com/core/data-source/collection-field-interface)：フロントエンドデータフィールドクラス
- [CollectionFieldInterfaceManager](https://client.docs.nocobase.com/core/data-source/collection-field-interface-manager)：フロントエンドで `CollectionFieldInterface` を管理するためのクラス

```bash
.
├── client # クライアントプラグイン
│   ├── EncryptionFieldInterface.tsx # フロントエンドフィールドインターフェース
│   ├── locale.ts # 多言語ツール関数
│   └── index.ts # フロントエンドエントリファイル
├── locale
│   ├── en-US.json # 英語
│   └── zh-CN.json # 中国語
├── index.ts # サーバープラグインエントリ
└── server
      ├── encryption-field.ts # 暗号化フィールド
      ├── index.ts # サーバーエントリファイル
      ├── operators # クエリ演算子
      │   ├── eq.ts # 等しい
      │   ├── ne.ts # 等しくない
      │   └── utils.ts # ツール関数
      ├── plugin.ts  # サーバープラグイン
      └── utils.ts # ツール関数
```

## フロントエンド実装

### 1. コンポーネント

暗号化と復号化に文字列を使用するため、`Input` コンポーネントを使用することができ、カスタムコンポーネントは必要ありません。

他の要件でカスタムコンポーネントが必要な場合は、[値フィールドコンポーネント](/plugin-samples/field/value) ドキュメントを参照してください。

### 2. フィールドインターフェース

#### 2.1 定義

新たに `packages/plugins/@nocobase-sample/plugin-field-interface/src/client/EncryptionFieldInterface.tsx` ファイルを作成します：

```tsx | pure
import { CollectionFieldInterface, defaultProps } from '@nocobase/client';
import { uid } from '@nocobase/utils/client';
import { tStr } from './locale';

export class EncryptionFieldInterface extends CollectionFieldInterface {
  name = 'encryption';
  type = 'object';
  group = 'advanced';
  order = 10;
  title = tStr('Encryption');
  default = {
    type: 'encryption',
    iv: uid(16),
    uiSchema: {
      type: 'string',
      'x-component': 'Input',
    },
  };
  availableTypes = ['string'];
  hasDefaultValue = true;
  properties = {
    ...defaultProps,
  };
  filterable = {
    operators: [
      { label: '{{t("is")}}', value: '$encryptionEq', selected: true },
      { label: '{{t("is not")}}', value: '$encryptionNe' },
      { label: '{{t("exists")}}', value: '$exists', noValue: true },
      { label: '{{t("not exists")}}', value: '$notExists', noValue: true },
    ],
  };
}
```

すべての Field インターフェースは `CollectionFieldInterface` クラスを継承する必要があります。また、`name`、`type`、`group`、`order`、`title`、`default`、`availableTypes`、`hasDefaultValue`、`properties`、`filterable` などの属性を実装する必要があります。それぞれの属性の意味は以下の通りです。

- `tStr`：多言語文字列テンプレートを生成します。
- `name`：Field インターフェースの唯一の識別子であり、異なる Field インターフェースを区別するために使用されます。
- `type`：データ型を指定します。
- `group`：フィールド設定でのグループ表示のためのカテゴリです。ここでは `advanced` に設定します。
- `order`：フィールド設定での表示順序を指定します。
- `title`：フィールド設定で表示されるタイトルです。
- `default`：データベースに挿入されるフィールドのデフォルト値の設定です。
  - `iv`：初期化ベクトルで、暗号化に使用するランダムな文字列です。
  - `uiSchema`：フィールドの UI 設定で、ここでは `Input` コンポーネントを使用します。
- `availableTypes`：利用可能なフィールドタイプです。
- `hasDefaultValue`：デフォルト値の設定があるかどうかを示します。
- `properties`：属性の設定で、`defaultProps` には以下が含まれます。
  - `name`：フィールド名
  - `displayName`：フィールド表示名
- `filterable`：フィルタリング可能な演算子です。

`filterable` に関する注意点は以下の 2 点です。

- データベースに保存されるのは暗号文であるため、**等価、不等価、存在、不存在**の演算子のみをサポートします。
- 文字列を検索する際は、先に文字列を復号化してから検索を行う必要があるため、ここではデフォルトの `$eq`、`$ne` 演算子を使用できず、カスタム演算子として `$encryptionEq`、`$encryptionNe` を使用する必要があります。

`CollectionFieldInterface` の属性とメソッドに関する詳細は [CollectionFieldInterface](https://client.docs.nocobase.com/core/data-source/collection-field-interface) のドキュメントを参照してください。

#### 2.2 登録

`packages/plugins/@nocobase-sample/plugin-field-interface/src/client/index.ts` ファイルを修正します。

```ts
import { Plugin } from '@nocobase/client';
import { EncryptionFieldInterface } from './EncryptionFieldInterface';

export class PluginFieldInterfaceClient extends Plugin {
  async load() {
    this.app.dataSourceManager.collectionFieldInterfaceManager.addFieldInterfaces([EncryptionFieldInterface]);
  }
}

export default PluginFieldInterfaceClient;
```

`collectionFieldInterfaceManager.addFieldInterfaces()` を使用して `EncryptionFieldInterface` をシステムに登録します。

`CollectionFieldInterfaceManager` の属性とメソッドに関する詳細は [ドキュメント](https://client.docs.nocobase.com/core/data-source/collection-field-interface-manager) を参照してください。

![20240726193638](https://static-docs.nocobase.com/20240726193638.png)

この時点でインターフェース上に `Encryption` フィールドが表示されますが、バックエンドではまだ暗号化および復号化のロジックが実装されていないため、**フィールドを作成することはできません**。

## バックエンドの実装

### 1. 暗号化と復号化の実装

`packages/plugins/@nocobase-sample/plugin-field-interface/src/server/utils.ts` ファイルを新規作成します。

```ts
import crypto from 'crypto';
const algorithm = 'aes-256-cbc';

const keyString = process.env.ENCRYPTION_KEY || '12345678901234567890123456789012';

const key = Buffer.from(keyString, 'utf8');

export function encryptSync(text: string, ivString: string) {
  const iv = Buffer.from(ivString, 'utf8');
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export function decryptSync(encrypted: string, ivString: string) {
  const iv = Buffer.from(ivString, 'utf8');
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
```

`crypto` モジュールを使用して暗号化と復号化を実装します。`encryptSync` メソッドは暗号化に、`decryptSync` メソッドは復号化に使用されます。具体的な暗号化アルゴリズムは `aes-256-cbc` で、キーは `ENCRYPTION_KEY` 環境変数から取得されます。未設定の場合はデフォルト値 `12345678901234567890123456789012` が使用されます。

`crypto` モジュールに関する詳細情報は、[NodeJS crypto モジュール](https://nodejs.org/api/crypto.html) ドキュメントをご覧ください。

### 2. フィールドの実装

#### 2.1 定義

新しく `packages/plugins/@nocobase-sample/plugin-field-interface/src/server/encryption-field.ts` ファイルを作成します：

```ts
import { BaseColumnFieldOptions, Field, FieldContext } from '@nocobase/database';
import { DataTypes } from 'sequelize';
import { decryptSync, encryptSync } from './utils';

export interface EncryptionFieldOptions extends BaseColumnFieldOptions {
  type: 'encryption';
}

export class EncryptionField extends Field {
  get dataType() {
    return DataTypes.STRING;
  }

  constructor(options?: any, context?: FieldContext) {
    const { name, iv } = options;
    super(
      {
        get() {
          const value = this.getDataValue(name);
          if (!value) return null;
          return decryptSync(value, iv);
        },
        set(value) {
          if (!value?.length) value = null;
          else {
            value = encryptSync(value, iv);
          }
          this.setDataValue(name, value);
        },
        ...options,
      },
      context,
    );
  }
}
```

- **dataType**：暗号化と復号化はデータベースにおいて文字列として扱われるため、`DataTypes.STRING` 型を使用します。
- **get**：フィールド値を取得する際に復号化を行います。
- **set**：フィールド値を設定する際に暗号化を行います。

非同期のシナリオ、例えばデータ検証や非同期データ変換が必要な場合には、さまざまな [データベースイベント](/api/database#beforesync--aftersync) を使用する必要がありますが、本例では非同期操作が不要なため、実装は必要ありません。

### 3. インポートとエクスポート

特定の状況では、インポート、エクスポートとインターフェース表示が一致しない場合があるため、その際にはバックエンドの [Interface](/api/database/interfaces/base-interface) を実装する必要があります。

本例ではインポートとエクスポートのロジックがインターフェース表示のロジックと一致しているため、実装は不要です。

#### 2.2 登録

新しく `packages/plugins/@nocobase-sample/plugin-field-interface/src/server/plugin.ts` ファイルを作成します：

```ts
import { Plugin } from '@nocobase/server';
import { EncryptionField } from './encryption-field';
import { $encryptionEq } from './operators/eq';
import { $encryptionNe } from './operators/ne';

export class PluginFieldInterfaceServer extends Plugin {
  async load() {
    this.db.registerFieldTypes({
      encryption: EncryptionField,
    });
  }
}

export default PluginFieldInterfaceServer;
```

`db.registerFieldTypes()` を使用して `EncryptionField` をシステムに登録します。詳細については、[registerFieldTypes()](/api/database#registerfieldtypes) ドキュメントをご覧ください。

![20240726192559](https://static-docs.nocobase.com/20240726192559.png)

これで前後端の実装が完了し、フィールドを作成できるようになりましたが、クエリ操作子の実装がまだ必要です。

### 3. 操作子の実装

#### 3.1 定義

私たちが行うべきことは、クエリ時に文字列を暗号化してからクエリを実行することです。

##### 3.1.1 公共メソッドの封装

`$encryptionEq` と `$encryptionNe` は、暗号化後にクエリを実行する必要があるため、これらのロジックを抽出します。そのため、新たに `packages/plugins/@nocobase-sample/plugin-field-interface/src/server/operators/utils.ts` ファイルを作成します：

```ts
import { encryptSync } from '../utils';

export function getFieldOptions(ctx: any) {
  const fieldPathArr = ctx.fieldPath.split('.');
  const collectionName = fieldPathArr[fieldPathArr.length - 2];
  const fieldName = ctx.fieldName;

  return ctx.db.collections.get(collectionName).fields.get(fieldName).options;
}

export function encryptSearchValueSync(str: any, ctx: any) {
  const { iv } = getFieldOptions(ctx);
  let encrypted;
  if (Array.isArray(str)) {
    encrypted = str.map((item) => encryptSync(item, iv));
  } else {
    encrypted = encryptSync(str, iv);
  }
  return encrypted;
}
```

2 つのメソッドを定義しました：

- `getFieldOptions`：フィールド設定を取得します。
- `encryptSearchValueSync`：検索値を暗号化します。

##### 3.1.2 `$encryptionEq` の実装

次に、`packages/plugins/@nocobase-sample/plugin-field-interface/src/server/operators/eq.ts` ファイルを新たに作成します：

```ts
import { encryptSearchValueSync } from './utils';

export const $encryptionEq = (str, ctx) => {
  const eq = ctx.db.operators.get('$eq');
  if (!str) return eq(str, ctx);
  const encrypted = encryptSearchValueSync(str, ctx);
  return eq(encrypted, ctx);
};
```

検索値を暗号化してからクエリを実行する `$encryptionEq` オペレーターを定義しました。

##### 3.1.3 `$encryptionNe` の実装

次に、`packages/plugins/@nocobase-sample/plugin-field-interface/src/server/operators/ne.ts` ファイルを新たに作成します：

```ts
import { encryptSearchValueSync } from './utils';

export const $encryptionNe = (str, ctx) => {
  const ne = ctx.db.operators.get('$ne');
  if (!str) return ne(str, ctx);
  const encrypted = encryptSearchValueSync(str, ctx);
  return ne(encrypted, ctx);
};
```

検索値を暗号化してからクエリを実行する `$encryptionNe` オペレーターを定義しました。

#### 3.2 オペレーターの登録

`packages/plugins/@nocobase-sample/plugin-field-interface/src/server/plugin.ts` ファイルを修正します：

```ts
// ...
import { $encryptionEq } from './operators/eq';
import { $encryptionNe } from './operators/ne';

export class PluginFieldInterfaceServer extends Plugin {
  async load() {
    // ...

    this.db.registerOperators({
      $encryptionEq,
      $encryptionNe,
    });
  }
}

export default PluginFieldInterfaceServer;
```

![20240726192832](https://static-docs.nocobase.com/20240726192832.png)

## 多言語対応

[http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) を通じて複数の言語を追加し、右上の角で言語を切り替えることができます。

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

### 英語

`packages/plugins/@nocobase-sample/plugin-field-interface/src/locale/zh-CN.json` ファイルを編集します：

```diff
{
  "Encryption": "Encryption"
}
```

### 中国語

`packages/plugins/@nocobase-sample/plugin-field-interface/src/locale/zh-CN.json` ファイルを編集します：

```diff
{
  "Encryption": "加密"
}
```

![20240726193259](https://static-docs.nocobase.com/20240726193259.png)

## パッケージ作成と本番環境へのアップロード

[プラグインのビルドとパッケージ化](/development/your-fisrt-plugin#构建并打包插件) のドキュメントに従い、プラグインをパッケージ化し、本番環境にアップロードします。

クローンしたソースコードの場合、最初に全量ビルドを実行して、プラグインの依存関係を構築する必要があります。

```bash
yarn build
```

`create-nocobase-app`を使用して作成したプロジェクトの場合、次のコマンドを実行してください：

```bash
yarn build @nocobase-sample/plugin-field-interface --tar
```

これにより、`storage/tar/@nocobase-sample/plugin-field-interface.tar.gz`ファイルが生成されます。その後、[アップロードの方法](/welcome/getting-started/plugin)に従ってインストールを行ってください。

