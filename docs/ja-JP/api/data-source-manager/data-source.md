# DataSource (抽象)

`DataSource` 抽象クラスは、データベースやAPIなどのデータソースのタイプを表すために使用されます。

## メンバー

### collectionManager

データソースの CollectionManager インスタンスで、[`ICollectionManager`](/api/data-source-manager/i-collection-manager) インターフェースを実装する必要があります。

### resourceManager

データソースの resourceManager インスタンスです。詳細はこちらをご覧ください：[`resourceManager`](/api/resourcer/resource-manager)

### acl

データソースの ACL インスタンスです。詳細はこちらをご覧ください：[`ACL`](/api/acl/acl)

## API

### constructor()

コンストラクタで、`DataSource` インスタンスを作成します。

#### シグネチャ

- `constructor(options: DataSourceOptions)`

### init() 

初期化関数で、`constructor` の後に呼び出されます。

#### シグネチャ

- `init(options: DataSourceOptions)`

### name

#### シグネチャ

- `get name()`

データソースのインスタンス名を返します。

### middleware()

DataSource のミドルウェアを取得し、Server にマウントしてリクエストを受信するために使用します。

### testConnection()

静的メソッドで、接続テスト操作時に呼び出されます。パラメータの検証に使用でき、具体的なロジックはサブクラスで実装されます。

#### シグネチャ

- `static testConnection(options?: any): Promise<boolean>`

### load()

#### シグネチャ

- `async load(options: any = {})`

データソースのロード操作で、ロジックはサブクラスで実装されます。

### createCollectionManager()

#### シグネチャ
- `abstract createCollectionManager(options?: any): ICollectionManager`

データソースの CollectionManager インスタンスを作成し、ロジックはサブクラスで実装されます。

### createResourceManager()

データソースの ResourceManager インスタンスを作成します。サブクラスでオーバーライドして実装でき、デフォルトでは `@nocobase/resourcer` の `ResourceManager` を作成します。

### createACL()

- DataSource の ACL インスタンスを作成します。サブクラスでオーバーライドして実装でき、デフォルトでは `@nocobase/acl` の `ACL` を作成します。
