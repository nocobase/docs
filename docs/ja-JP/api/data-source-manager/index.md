# DataSourceManager

`DataSourceManager` は複数の `dataSource` インスタンスを管理するクラスです。

## API

### add()
`dataSource` インスタンスを追加します。

#### シグネチャ

- `add(dataSource: DataSource, options: any = {}): Promise<void>`

### use()

`dataSource` インスタンスにグローバルミドルウェアを追加します。

### middleware()

現在の `dataSourceManager` インスタンスのミドルウェアを取得します。HTTPリクエストのレスポンスに使用できます。

### afterAddDataSource()

`dataSource` 追加後のフック関数を追加します。

#### シグネチャ

- `afterAddDataSource(hook: DataSourceHook)`

```typescript
type DataSourceHook = (dataSource: DataSource) => void;
```

### registerDataSourceType()

データソースタイプとそのクラスを登録します。

#### シグネチャ

- `registerDataSourceType(type: string, dataSourceClass: typeof DataSource)`

### getDataSourceType()

データソースクラスを取得します。

#### シグネチャ

- `getDataSourceType(type: string): typeof DataSource`

### buildDataSourceByType()

登録されたデータソースタイプとインスタンスパラメータに基づいて、データソースインスタンスを作成します。

#### シグネチャ

- `buildDataSourceByType(type: string, options: any): DataSource`