# DataSourceManager

`DataSourceManager` 是多 `dataSource ` 实例的管理类。


## 成员

### factory

`DataSource` 实例的工厂类，可在其中注册 `dataSource` 类型，以及创建 `dataSource` 实例。

## API

### add()
添加一个 `dataSource` 实例。

#### 签名

- `add(dataSource: DataSource, options: any = {}): Promise<void>`

### use()

给 `dataSource` 实例添加全局中间件。

### middleware()

获取当前 `dataSourceManager` 实例的中间件，可用于响应 http 请求。

### afterAddDataSource()

新增`dataSource` 添加后的钩子函数。

#### 签名

- `afterAddDataSource(hook: DataSourceHook)`

```typescript
type DataSourceHook = (dataSource: DataSource) => void;
```
