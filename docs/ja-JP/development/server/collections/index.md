# コアコンセプト

## コレクション

コレクションは、あらゆる種類のデータの集合であり、中文では「データテーブル」と訳されます。注文、商品、ユーザー、コメントなどがコレクションに該当します。異なるコレクションは名前で区別されます。例えば：

```ts
// 注文
{
  name: 'orders',
}
// 商品
{
  name: 'products',
}
// ユーザー
{
  name: 'users',
}
// コメント
{
  name: 'comments',
}
```

## コレクションフィールド

各コレクションには、いくつかのフィールドがあります。

```ts
// コレクション設定
{
  name: 'users',
  fields: [
    { type: 'string', name: 'name' },
    { type: 'integer', name: 'age' },
    // その他のフィールド
  ],
}
// サンプルデータ
[
  {
    name: '張三',
    age: 20,
  },
  {
    name: '李四',
    age: 18,
  }
];
```

NocoBaseにおけるコレクションフィールドの構成は以下の通りです：

<img src="./collection-field.svg" />

### フィールドタイプ

異なるフィールドは名前で区別され、`type`はフィールドのデータタイプを示します。これには属性タイプと関連タイプがあります。例えば：

**属性 - Attribute Type**

- string
- text
- date
- boolean
- time
- float
- json
- location
- password
- virtual
- ...

**関係 - Association Type**

- hasOne
- hasMany
- belongsTo
- belongsToMany
- ...

### フィールドコンポーネント

フィールドにはデータタイプが設定され、フィールド値の入出力に問題はありませんが、さらに必要な設定があります。フィールドをインターフェースに表示するには、別の次元の設定——`uiSchema`が必要です。例えば：

```tsx | pure
// メールフィールド、Inputコンポーネントを使用して表示し、email検証ルールを適用
{
  type: 'string',
  name: 'email',
  uiSchema: {
    'x-component': 'Input',
    'x-component-props': { size: 'large' },
    'x-validator': 'email',
    'x-pattern': 'editable', // 編集可能状態、またはreadonly（非編集状態）、read-pretty（閲覧状態）
  },
}

// データサンプル
{
  email: 'admin@nocobase.com',
}

// コンポーネントサンプル
<Input name={'email'} size={'large'} value={'admin@nocobase.com'} />
```

`uiSchema`は、フィールドをインターフェースに表示するためのコンポーネントを設定するために使用されます。各フィールドコンポーネントには、いくつかの維持される設定が含まれます：

- フィールドのコンポーネント
- コンポーネントのパラメータ
- フィールドの検証ルール
- フィールドのモード（editable、readonly、read-pretty）
- フィールドのデフォルト値
- その他

[詳細な情報はUIスキーマの章を参照してください](/development/client/ui-schema-designer/what-is-ui-schema)。

NocoBaseに内蔵されているフィールドコンポーネントには以下があります：

- Input
- InputNumber
- Select
- Radio
- Checkbox
- ...

### フィールドインターフェース

フィールドタイプとフィールドコンポーネントを組み合わせることで、複数のフィールドを自由に作成できます。この組み合わせ後のテンプレートをフィールドインターフェースと呼びます。例えば：

```ts
// メールフィールド string + input、email検証ルール
{
  type: 'string',
  name: 'email',
  uiSchema: {
    'x-component': 'Input',
    'x-component-props': {},
    'x-validator': 'email',
  },
}

// 電話フィールド string + input、phone検証ルール
{
  type: 'string',
  name: 'phone',
  uiSchema: {
    'x-component': 'Input',
    'x-component-props': {},
    'x-validator': 'phone',
  },
}
```

上記のemailとphoneは、毎回完全な`uiSchema`を設定する必要があるため非常に手間がかかります。設定を簡素化するために、別の概念であるフィールドインターフェースが導入され、一部のパラメータをテンプレート化できます。例えば：

```ts
// emailフィールドのテンプレート
interface email {
  type: 'string';
  uiSchema: {
    'x-component': 'Input',
    'x-component-props': {},
    'x-validator': 'email',
  };
}

// phoneフィールドのテンプレート
interface phone {
  type: 'string';
  uiSchema: {
    'x-component': 'Input',
    'x-component-props': {},
    'x-validator': 'phone',
  };
}

// 簡素化されたフィールド設定
// email
{
  interface: 'email',
  name: 'email',
}

// phone
{
  interface: 'phone',
  name: 'phone',
}
```

[さらにフィールドインターフェースについてはこちらを参照してください](https://github.com/nocobase/nocobase/tree/main/packages/core/client/src/collection-manager/interfaces)

