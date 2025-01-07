# IRepository

`Repository` インターフェースは、データソースに対する追加、削除、更新、検索操作を適応させるための一連のモデル操作方法を定義します。

## API

### find()

クエリパラメータに基づいて、条件に一致するモデルのリストを返します。

#### 署名

- `find(options?: any): Promise<IModel[]>`

### findOne()

クエリパラメータに基づいて、条件に一致するモデルを返します。複数のモデルが条件に一致する場合、最初のモデルのみを返します。

#### 署名

- `findOne(options?: any): Promise<IModel>`

### count()

クエリパラメータに基づいて、条件に一致するモデルの数を返します。

#### 署名

- `count(options?: any): Promise<Number>`

### findAndCount()

クエリパラメータに基づいて、条件に一致するモデルのリストと数を返します。

#### 署名

- `findAndCount(options?: any): Promise<[IModel[], Number]>`

### create()

モデルデータオブジェクトを作成します。

#### 署名

- `create(options: any): void`

### update()

クエリ条件に基づいて、モデルデータオブジェクトを更新します。

#### 署名

- `update(options: any): void`

### destroy()

クエリ条件に基づいて、モデルデータオブジェクトを削除します。

#### 署名

- `destroy(options: any): void`
