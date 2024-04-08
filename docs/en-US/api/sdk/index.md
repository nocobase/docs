# APIClient

## Overview

`APIClient` is a wrapper based on <a href="https://axios-http.com/" target="_blank">`axios`</a>, used for making HTTP requests to perform resource operations in NocoBase from the client-side.

### Basic Usage

```ts
class PluginSampleAPIClient extends Plugin {
  async load() {
    const res = await this.app.apiClient.request({
      // ...
    });
  }
}
```

## Instance Properties

### `axios`

An `axios` instance that provides access to the `axios` API, such as `apiClient.axios.interceptors`.

### `auth`

A client-side authentication class, refer to [Auth](./auth.md).

### `storage`

A client-side storage class, refer to [Storage](./storage.md).

## Class Methods

### `constructor()`

Constructor to create an `APIClient` instance.

#### Signature

- `constructor(instance?: APIClientOptions)`

#### Type

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

Makes an HTTP request.

#### Signature

- `request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D> | ResourceActionOptions): Promise<R>`

#### Type

```ts
type ResourceActionOptions<P = any> = {
  resource?: string;
  resourceOf?: any;
  action?: string;
  params?: P;
};
```

#### Details

##### AxiosRequestConfig

Common axios request parameters. Refer to <a href="https://axios-http.com/docs/req_config" target="_blank">Request Config</a>.

```ts
const res = await apiClient.request({ url: '' });
```

##### ResourceActionOptions

Parameters for NocoBase resource operations.

```ts
const res = await apiClient.request({
  resource: 'users',
  action: 'list',
  params: {
    pageSize: 10,
  },
});
```

| Property        | Type     | Description                                                                                                                                                |
| --------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resource`      | `string` | 1. Resource name, such as `a`<br />2. Name of the associated object, such as `a.b`                                                                         |
| `resourceOf`    | `any`    | Primary key value of the resource when `resource` is the name of an associated object. For example, for `a.b`, it represents the primary key value of `a`. |
| `action`        | `string` | Action name                                                                                                                                                |
| `params`        | `any`    | Request parameter object, mainly URL parameters, request body is put into `params.values`                                                                  |
| `params.values` | `any`    | Request body object                                                                                                                                        |

### `resource()`

Gets the object containing NocoBase resource operation methods.

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

#### Signature

- `resource(name: string, of?: any, headers?: AxiosRequestHeaders): IResource`

#### Type

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

#### Details

| Parameter | Type                  | Description                                                                                                                                                |
| --------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`    | `string`              | Resource name, such as `a`<br />2. Name of the associated object, such as `a.b`                                                                            |
| `of`      | `any`                 | Primary key value of the resource when `resource` is the name of an associated object. For example, for `a.b`, it represents the primary key value of `a`. |
| `headers` | `AxiosRequestHeaders` | HTTP request headers to be sent with subsequent resource operation requests                                                                                |
