# DataSource

`DataSource` 类，用于表示数据源实例。

## API

### constructor()

构造函数，创建一个 `DataSource` 实例。

#### 签名

- `constructor(options: DataSourceOptions)`

### init() 

初始化函数，在 `constructor` 之后既被调用。

#### 签名

- `init(options: DataSourceOptions)`

### collectionManager

数据源的 CollectionManager 实例，详见：

### resourceManager

数据源的 resourceManager 实例，详见：

### acl

数据源的 ACL 实例，详见：

### name

#### 签名

- `get name()`

响应数据源的实例名称

### middleware()

获得 DataSource 的中间件，用于挂载到 Server 中接收请求。

### testConnection()

静态方法，用于响应测试连接请求结果。

#### 签名

- `static testConnection(options?: any): Promise<boolean>`

### load()

### createCollectionManager()

### createResourceManager()

### createACL()

- 创建 DataSource 的 ACL 实例

