# API 客户端

用于在应用里发起客户端请求。在[插件生命周期](/development/client#插件的声明周期)内，可以使用 `app.apiClient` 发起客户端请求，在组件内可以使用 `useAPIClient()` 和 `useRequest()`。

## app.apiClient

```ts
class PluginSampleAPIClient extends Plugin {
  async load() {
    const { data } = await this.app.apiClient.request({ url: 'test' });
  }
}
```

### apiClient.request()

常规请求

```ts
class APIClient {
  // 客户端请求，支持 AxiosRequestConfig 和 ResourceActionOptions
  request<T = any, R = AxiosResponse<T>, D = any>(
    config: AxiosRequestConfig<D> | ResourceActionOptions,
  ): Promise<R>;
}
```

示例

```ts
const response = await apiClient.request({ url });
```

### apiClient.resource()

NocoBase 特有的资源操作

```ts
class APIClient {
  resource<R = IResource>(name: string, of?: any): R;
}
```

示例

```ts
const response = await apiClient.resource('posts').list();
const response = await apiClient.resource('posts').get();
const response = await apiClient.resource('posts').create();
const response = await apiClient.resource('posts').update();
const response = await apiClient.resource('posts').destroy();
```

### apiClient.axios

`AxiosInstance` 实例

## useAPIClient()

在组件内部可以使用 `useAPIClient()` 获取当前应用的 APIClient 实例

## useRequest()

异步数据管理，可以是发起的客户端请求数据，也可以是自定义的异步函数。详细用法参考 ahooks 的 [useRequest()](https://ahooks.js.org/hooks/use-request/index)

```ts
function useRequest<P>(
  service: AxiosRequestConfig<P> | ResourceActionOptions<P> | FunctionService,
  options?: Options<any, any>,
);
```

示例

```ts
const { data, loading, refresh, run, params } = useRequest({ url: '/users' });

// useRequest 里传的是 AxiosRequestConfig，所以 run 里传的也是 AxiosRequestConfig
run({
  params: {
    pageSize: 20,
  },
});
```
