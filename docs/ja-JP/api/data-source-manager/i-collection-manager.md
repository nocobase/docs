# ICollectionManager

`ICollectionManager` インターフェースは、データソースの `Collection` インスタンスを管理するために使用されます。

## API

### registerFieldTypes()

`Collection` 内のフィールドタイプを登録します。

#### 署名

- `registerFieldTypes(types: Record<string, any>): void`

### registerFieldInterfaces()

`Collection` の `Interface` を登録します。

#### 署名

- `registerFieldInterfaces(interfaces: Record<string, any>): void`

### registerCollectionTemplates()

`Collection Template` を登録します。

#### 署名

- `registerCollectionTemplates(templates: Record<string, any>): void`

### registerModels()

`Model` を登録します。

#### 署名

- `registerModels(models: Record<string, any>): void`

### registerRepositories()

`Repository` を登録します。

#### 署名

- `registerRepositories(repositories: Record<string, any>): void`

### getRegisteredRepository()

登録済みのリポジトリインスタンスを取得します。

#### 署名

- `getRegisteredRepository(key: string): IRepository`

### defineCollection()

`Collection` を定義します。

#### 署名

- `defineCollection(options: CollectionOptions): ICollection`

### extendCollection()

既存の `Collection` プロパティを変更します。

#### 署名

- `extendCollection(collectionOptions: CollectionOptions, mergeOptions?: MergeOptions): ICollection`

### hasCollection()

`Collection` が存在するかどうかを判断します。

#### 署名

- `hasCollection(name: string): boolean`

### getCollection()

`Collection` インスタンスを取得します。

#### 署名

- `getCollection(name: string): ICollection`

### getCollections()

すべての `Collection` インスタンスを取得します。

#### 署名

- `getCollections(): Array<ICollection>`

### getRepository()

`Repository` インスタンスを取得します。

#### 署名

- `getRepository(name: string, sourceId?: string | number): IRepository`

### sync()

データソースを同期します。ロジックはサブクラスで実装されます。

#### 署名

- `sync(): Promise<void>`