# RelationRepository

`RelationRepository` はリレーションタイプの `Repository` オブジェクトです。`RelationRepository` を使用すると、関連データをロードせずに操作することができます。`RelationRepository` に基づいて、各関連は対応する実装を派生させます。それぞれ以下の通りです。

- [`HasOneRepository`](#has-one-repository)
- `HasManyRepository`
- `BelongsToRepository`
- `BelongsToManyRepository`

## コンストラクタ

**シグネチャ**

- `constructor(sourceCollection: Collection, association: string, sourceKeyValue: string | number)`

**パラメータ**

| パラメータ名         | タイプ               | デフォルト値 | 説明                                                      |
| -------------------- | -------------------- | ------------ | --------------------------------------------------------- |
| `sourceCollection`   | `Collection`         | -            | 関連中の参照関係（referencing relation）に対応する Collection |
| `association`        | `string`             | -            | 関連名                                                    |
| `sourceKeyValue`     | `string \| number`   | -            | 参照関係中の対応する key 値                               |

## 基底クラスのプロパティ

### `db: Database`

データベースオブジェクト

### `sourceCollection`

関連中の参照関係（referencing relation）に対応する Collection

### `targetCollection`

関連中の被参照関係（referenced relation）に対応する Collection

### `association`

sequelize 中の現在の関連に対応する association オブジェクト

### `associationField`

collection 中の現在の関連に対応するフィールド

### `sourceKeyValue`

参照関係中の対応する key 値
