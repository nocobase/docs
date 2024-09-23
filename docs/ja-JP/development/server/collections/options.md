# コレクションプロトコル

コレクションは NocoBase の中核を成す概念であり、データ構造（データテーブルおよびフィールド）を定義するためのプロトコルです。リレーショナルデータベースの概念に非常に近いですが、リレーショナルデータベースに限らず、NoSQL データベースや HTTP API などのデータソースも含まれます。

<img src="./schema.svg" style="max-width: 800px;" >

現段階では、コレクションプロトコルに基づいてリレーショナルデータベースとの接続（db.collections）が実現されており、将来的には NoSQL データベースや HTTP API などのデータソースも徐々に実装される予定です。

コレクションプロトコルは主に CollectionOptions と FieldOptions の二つの部分から成り立っており、Field は拡張可能であるため、FieldOptions のパラメータは非常に柔軟です。

## CollectionOptions

```ts
interface CollectionOptions {
  name: string;
  title?: string;
  // ツリーストラクチャーテーブル、TreeRepository
  tree?:
    | 'adjacency-list'
    | 'closure-table'
    | 'materialized-path'
    | 'nested-set';
  // 親子継承
  inherits?: string | string[];
  fields?: FieldOptions[];
  timestamps?: boolean;
  paranoid?: boolean;
  sortable?: CollectionSortable;
  model?: string;
  repository?: string;
  [key: string]: any;
}

type CollectionSortable =
  | string
  | boolean
  | { name?: string; scopeKey?: string };
```

## FieldOptions

汎用フィールドパラメータ

```ts
interface FieldOptions {
  name: string;
  type: string;
  hidden?: boolean;
  index?: boolean;
  interface?: string;
  uiSchema?: ISchema;
```

[UI スキーマの紹介はこちらをご覧ください](/development/client/ui-schema-designer/what-is-ui-schema)

### フィールドタイプ

フィールドタイプは Attribute Type と Association Type の二種類があります：

**Attribute Type**

- 'boolean'
- 'integer'
- 'bigInt'
- 'double'
- 'real'
- 'decimal'
- 'string'
- 'text'
- 'password'
- 'date'
- 'time'
- 'array'
- 'json'
- 'jsonb'
- 'uuid'
- 'uid'
- 'formula'
- 'radio'
- 'sort'
- 'virtual'

**Association Type**

- 'belongsTo'
- 'hasOne'
- 'hasMany'
- 'belongsToMany'

### フィールドインターフェース

**基本**

- input
- textarea
- phone
- email
- integer
- number
- percent
- password
- icon

**選択肢**

- checkbox
- select
- multipleSelect
- radioGroup
- checkboxGroup
- chinaRegion

**メディア**

- attachment
- markdown
- richText

**日付と時間**

- datetime
- time

**関係**

- linkTo - `type: 'belongsToMany'`
- oho - `type: 'hasOne'`
- obo - `type: 'belongsTo'`
- o2m - `type: 'hasMany'`
- m2o - `type: 'belongsTo'`
- m2m - `type: 'belongsToMany'`

**高度な機能**

- formula
- sequence

**システム情報**

- id
- createdAt
- createdBy
- updatedAt
- updatedBy

