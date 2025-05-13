# HTTP Request

NocoBase provides an `APIClient` for making HTTP requests. Within the [plugin lifecycle](/development/client#插件的声明周期) of a client-side application, you can use `app.apiClient` to make client-side requests. Inside components, you can use `useAPIClient()` and `useRequest()`.

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

For standard requests, refer to axios's [request config](https://axios-http.com/docs/req_config) for more details on usage.

```ts
class APIClient {
  // Client-side requests, supporting AxiosRequestConfig and ResourceActionOptions
  request<T = any, R = AxiosResponse<T>, D = any>(
    config: AxiosRequestConfig<D> | ResourceActionOptions,
  ): Promise<R>;
}
```

Example:

```ts
const response = await apiClient.request({ url });
```

### apiClient.axios

`AxiosInstance` instance

It can be used to modify axios's [default configuration](https://axios-http.com/docs/config_defaults).

```ts
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
```

It can also be used to [intercept requests or responses](https://axios-http.com/docs/interceptors).

```ts
// Add request interceptor: use qs to convert params
axios.interceptors.request.use((config) => {
  config.paramsSerializer = (params) => {
    return qs.stringify(params, {
      strictNullHandling: true,
      arrayFormat: 'brackets',
    });
  };
  return config;
});

// Add request interceptor: customize request headers
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

// Add response interceptor
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // Notify the user about the error
    notification.error({
      message: 'Request Response Error',
    });
  },
);
```

### Custom Request Headers in NocoBase Server

- `X-App`: Specify the current app when using multiple apps.
- `X-Locale`: Current language.
- `X-Hostname`: Client hostname.
- `X-Timezone`: Client timezone.
- `X-Role`: Current role.
- `X-Authenticator`: Current user authentication method.

## useAPIClient()

Within a component, you can use `useAPIClient()` to get the APIClient instance of the current app, which is equivalent to `app.apiClient`.

## useRequest()

Asynchronous data management, which can either be data from client requests or a custom asynchronous function. For detailed usage, refer to ahooks's [useRequest()](https://ahooks.js.org/hooks/use-request/index).

```ts
function useRequest<P>(
  service: AxiosRequestConfig<P> | ResourceActionOptions<P> | FunctionService,
  options?: Options<any, any>,
);
```

Example:

```ts
const { data, loading, refresh, run, params } = useRequest({ url: '/users' });

// Since useRequest accepts AxiosRequestConfig, the run function also accepts AxiosRequestConfig.
run({
  params: {
    pageSize: 20,
  },
});
```
