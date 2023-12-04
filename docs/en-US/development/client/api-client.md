# HTTP 请求

NocoBase 提供了 `APIClient` 用于发起 HTTP 请求，在客户端应用的 [插件生命周期](/development/client#插件的声明周期) 内，可以使用 `app.apiClient` 发起客户端请求，在组件内可以使用 `useAPIClient()` 和 `useRequest()`。

## app.apiClient

```ts
class PluginSampleAPIClient extends Plugin {
  async load() {
    const { data } = await this.app.apiClient.request({ url: 'test' });
  }
}
```

---

### apiClient.request()

常规请求，更多详情用法参考 axios 的 [request config](https://axios-http.com/docs/req_config)

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

### apiClient.axios

`AxiosInstance` 实例

可以用来修改 axios 的 [默认配置](https://axios-http.com/docs/config_defaults)

```ts
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
```

也可以用来 [拦截请求或响应](https://axios-http.com/docs/interceptors)

```ts
// 添加请求拦截器：使用 qs 转换 params 参数
axios.interceptors.request.use((config) => {
  config.paramsSerializer = (params) => {
    return qs.stringify(params, {
      strictNullHandling: true,
      arrayFormat: 'brackets',
    });
  };
  return config;
});

// 添加请求拦截器：自定义请求头
axios.interceptors.request.use((config) => {
  config.headers['Authorization'] = `Bearer token123`;
  config.headers['X-Hostname'] = `localhost`;
  config.headers['X-Timezone'] = `+08:00`;
  config.headers['X-Locale'] = 'zh-CN';
  config.headers['X-Role'] = 'admin';
  config.headers['X-Authenticator'] = 'basic';
  config.headers['X-App'] = 'sub1';
  return config;
});

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // 报错的请求给出通知提示
    notification.error({
      message: '请求响应错误',
    });
  },
);
```

### NocoBase Server 自定义请求头

- `X-App` 多应用时，通过 `X-App` 指定当前访问的应用
- `X-Locale` 当前语言
- `X-Hostname` 客户端 hostname
- `X-Timezone` 客户端所在时区
- `X-Role` 当前角色
- `X-Authenticator` 当前用户认证方式

## useAPIClient()

在组件内部可以使用 `useAPIClient()` 获取当前应用的 APIClient 实例，其返回结果等于 `app.apiClient`。

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
