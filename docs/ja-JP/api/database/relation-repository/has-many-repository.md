# HasManyRepository

`HasManyRepository` は、`HasMany` 関係を処理するための `Relation Repository` です。

## クラスメソッド

### `find()`

関連オブジェクトを検索します。

**シグネチャ**

- `async find(options?: FindOptions): Promise<M[]>`

**詳細**

クエリパラメータは [`Repository.find()`](../repository.md#find) と一致します。

### `findOne()`

関連オブジェクトを検索し、1つのレコードのみを返します。

**シグネチャ**

- `async findOne(options?: FindOneOptions): Promise<M>`

<embed src="../shared/find-one.md"></embed>

### `count()`

指定されたクエリ条件に一致するレコード数を返します。

**シグネチャ**

- `async count(options?: CountOptions)`

**タイプ**

```typescript
interface CountOptions
  extends Omit<SequelizeCountOptions, 'distinct' | 'where' | 'include'>,
    Transactionable {
  filter?: Filter;
}
```

### `findAndCount()`

データベースから特定の条件に一致するデータセットと結果数をクエリします。

**シグネチャ**

- `async findAndCount(options?: FindAndCountOptions): Promise<[any[], number]>`

**タイプ**

```typescript
type FindAndCountOptions = CommonFindOptions;
```

### `create()`

関連オブジェクトを作成します。

**シグネチャ**

- `async create(options?: CreateOptions): Promise<M>`

<embed src="../shared/create-options.md"></embed>

### `update()`

指定された条件に一致する関連オブジェクトを更新します。

**シグネチャ**

- `async update(options?: UpdateOptions): Promise<M>`

<embed src="../shared/update-options.md"></embed>

### `destroy()`

指定された条件に一致する関連オブジェクトを削除します。

**シグネチャ**

- `async destroy(options?: TK | DestroyOptions): Promise<M>`

<embed src="../shared/destroy-options.md"></embed>

### `add()`

オブジェクトの関連関係を追加します。

**シグネチャ**

- `async add(options: TargetKey | TargetKey[] | AssociatedOptions)`

**タイプ**

```typescript
interface AssociatedOptions extends Transactionable {
  tk?: TargetKey | TargetKey[];
}
```

**詳細**

- `tk` - 関連オブジェクトの targetKey 値。単一の値または配列を指定できます。
  <embed src="../shared/transaction.md"></embed>

### `remove()`

指定されたオブジェクトとの関連関係を削除します。

**シグネチャ**

- `async remove(options: TargetKey | TargetKey[] | AssociatedOptions)`

**詳細**

パラメータは [`add()`](#add) メソッドと同じです。

### `set()`

現在の関係の関連オブジェクトを設定します。

**シグネチャ**

- `async set(options: TargetKey | TargetKey[] | AssociatedOptions)`

**詳細**

パラメータは [`add()`](#add) メソッドと同じです。