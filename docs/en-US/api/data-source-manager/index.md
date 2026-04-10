# DataSourceManager

`DataSourceManager` is a management class for multiple `DataSource` instances. It handles registration, initialization, and middleware of data sources.

## API

### add()

Adds a `DataSource` instance to the manager and loads it.

#### Signature

- `add(dataSource: DataSource, options: any = {}): Promise<void>`

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `dataSource` | `DataSource` | The data source instance to add |
| `options` | `any` | Optional loading options passed to the data source |

#### Example

```typescript
const ds = new MyDataSource({ name: 'my-db' });
await app.dataSourceManager.add(ds);
```

### use()

Adds a global middleware to all `DataSource` instances.

#### Example

```typescript
app.dataSourceManager.use(async (ctx, next) => {
  console.log('DataSource middleware');
  await next();
});
```

### middleware()

Returns the middleware of the current `DataSourceManager` instance, which can be mounted to the server to handle HTTP requests.

### afterAddDataSource()

A hook that is triggered after a new `DataSource` is added.

#### Signature

- `afterAddDataSource(hook: DataSourceHook)`

```typescript
type DataSourceHook = (dataSource: DataSource) => void;
```

#### Example

```typescript
app.dataSourceManager.afterAddDataSource((dataSource) => {
  console.log(`DataSource added: ${dataSource.name}`);
});
```

### registerDataSourceType()

Registers a data source type and its corresponding class so it can be created dynamically later.

#### Signature

- `registerDataSourceType(type: string, dataSourceClass: typeof DataSource)`

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `type` | `string` | A unique string identifier for the data source type |
| `dataSourceClass` | `typeof DataSource` | The class that implements the data source |

#### Example

```typescript
app.dataSourceManager.registerDataSourceType('mysql', MySQLDataSource);
```

### getDataSourceType()

Retrieves a registered data source class by type.

#### Signature

- `getDataSourceType(type: string): typeof DataSource`

#### Example

```typescript
const MySQLDataSource = app.dataSourceManager.getDataSourceType('mysql');
```

### buildDataSourceByType()

Creates a new data source instance based on a registered type and options.

#### Signature

- `buildDataSourceByType(type: string, options: any): DataSource`

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `type` | `string` | The registered data source type |
| `options` | `any` | Options passed to the data source constructor |

#### Example

```typescript
const ds = app.dataSourceManager.buildDataSourceByType('mysql', {
  name: 'my-mysql',
  host: 'localhost',
  port: 3306,
});
```
