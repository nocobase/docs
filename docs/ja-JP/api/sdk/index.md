# APIClient

## 概要

`APIClient` は <a href="https://axios-http.com/" target="_blank">`axios`</a> を基にラップされており、クライアント側で HTTP を通じて NocoBase のリソース操作をリクエストするために使用されます。

### 基本使用

```ts
class PluginSampleAPIClient extends Plugin {
  async load() {
    const res = await this.app.apiClient.request({
      // ...
    });
  }
}
```

## インスタンスプロパティ

### `axios`

`axios` インスタンス。`apiClient.axios.interceptors` のように `axios` API にアクセスできます。

### `auth`

クライアント認証クラス。[Auth](./auth.md) を参照してください。

### `storage`

クライアントストレージクラス。[Storage](./storage.md) を参照してください。

## クラスメソッド

### `constructor()`

コンストラクタ。`APIClient` インスタンスを作成します。

#### シグネチャ

- `constructor(instance?: APIClientOptions)`

#### タイプ

```ts
interface ExtendedOptions {
  authClass?: any;
  storageClass?: any;
}

export type APIClientOptions =
  | AxiosInstance
  | (AxiosRequestConfig & ExtendedOptions);
```

### `request()`

HTTP リクエストを発行します。

#### シグネチャ

- `request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D> | ResourceActionOptions): Promise<R>`

#### タイプ

```ts
type ResourceActionOptions<P = any> = {
  resource?: string;
  resourceOf?: any;
  action?: string;
  params?: P;
};
```

#### 詳細

##### AxiosRequestConfig

一般的な axios リクエストパラメータ。<a href="https://axios-http.com/docs/req_config" target="_blank">Request Config</a> を参照してください。

```ts
const res = await apiClient.request({ url: '' });
```

##### ResourceActionOptions

NocoBase リソース操作リクエストパラメータ。

```ts
const res = await apiClient.request({
  resource: 'users',
  action: 'list',
  params: {
    pageSize: 10,
  },
});
```

| プロパティ        | タイプ     | 説明                                                                                 |
| ----------------- | ---------- | ------------------------------------------------------------------------------------ |
| `resource`        | `string`   | 1. リソース名、例: `a`<br />2. リソースの関連オブジェクト名、例: `a.b`               |
| `resourceOf`      | `any`      | `resource` がリソースの関連オブジェクト名の場合、リソースの主キー値。例: `a.b` の場合、`a` の主キー値 |
| `action`          | `string`   | 操作名                                                                               |
| `params`          | `any`      | リクエストパラメータオブジェクト、主に URL パラメータ、リクエストボディは `params.values` に配置 |
| `params.values`   | `any`      | リクエストボディオブジェクト                                                         |

### `resource()`

NocoBase リソース操作方法オブジェクトを取得します。

```ts
const resource = apiClient.resource('users');

await resource.create({
  values: {
    username: 'admin',
  },
});

const res = await resource.list({
  page: 2,
  pageSize: 20,
});
```

#### シグネチャ

- `resource(name: string, of?: any, headers?: AxiosRequestHeaders): IResource`

#### タイプ

```ts
export interface ActionParams {
  filterByTk?: any;
  [key: string]: any;
}

type ResourceAction = (params?: ActionParams) => Promise<any>;

export type IResource = {
  [key: string]: ResourceAction;
};
```

#### 詳細

| パラメータ名 | タイプ                  | 説明                                                                                 |
| ------------ | ----------------------- | ------------------------------------------------------------------------------------ |
| `name`       | `string`                | 1. リソース名、例: `a`<br />2. リソースの関連オブジェクト名、例: `a.b`               |
| `of`         | `any`                   | `resource` がリソースの関連オブジェクト名の場合、リソースの主キー値。例: `a.b` の場合、`a` の主キー値 |
| `headers`    | `AxiosRequestHeaders`   | 後続のリソース操作リクエスト時に付与する HTTP リクエストヘッダー                     |
