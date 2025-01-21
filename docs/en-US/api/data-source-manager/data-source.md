# DataSource (abstract)

The `DataSource` abstract class is used to represent a type of data source, which can be a database, API, etc.

## Members

### collectionManager

The CollectionManager instance of the data source, which needs to implement the [`ICollectionManager`](/api/data-source-manager/i-collection-manager) interface.

### resourceManager

The resourceManager instance of the data source, see: [`resourceManager`](/api/resourcer/resource-manager)

### acl

The ACL instance of the data source, see: [`ACL`](/api/acl/acl)

## API

### constructor()

Constructor, creates a `DataSource` instance.

#### Signature

- `constructor(options: DataSourceOptions)`

### init()

Initialization function, called immediately after `constructor`.

#### Signature

- `init(options: DataSourceOptions)`

### name

#### Signature

- `get name()`

Returns the instance name of the data source.

### middleware()

Gets the middleware of the DataSource, used to mount to the Server to receive requests.

### testConnection()

Static method, called during the test connection operation, can be used for parameter validation, specific logic is implemented by subclasses.

#### Signature

- `static testConnection(options?: any): Promise<boolean>`

### load()

#### Signature

- `async load(options: any = {})`

The loading operation of the data source, logic is implemented by subclasses.

### createCollectionManager()

#### Signature
- `abstract createCollectionManager(options?: any): ICollectionManager`

Creates a CollectionManager instance for the data source, logic is implemented by subclasses.

### createResourceManager()

Creates a ResourceManager instance for the data source, subclasses can override the implementation, by default creates `ResourceManager` from `@nocobase/resourcer`.

### createACL()

- Creates an ACL instance for the DataSource, subclasses can override the implementation, by default creates `ACL` from `@nocobase/acl`.