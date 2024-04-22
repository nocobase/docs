# DataSourceFactory

`DataSourceFactory` 是一个用于创建数据源的工厂接口。

## API

### register

注册数据源类型。

#### 签名

- `register(type: string, dataSourceClass: typeof DataSource)`

### getClass

获取数据源类型。

#### 签名

- `getClass(type: string): typeof DataSource`


### create

创建数据源实例。

#### 签名

- `create(type: string, options: any): DataSource`
