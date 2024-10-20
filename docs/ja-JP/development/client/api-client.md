# HTTPリクエスト

NocoBaseは、HTTPリクエストを発行するための`APIClient`を提供しています。クライアントアプリケーションの[プラグインライフサイクル](/development/client#プラグインの声明周期)内では、`app.apiClient`を使用してクライアントリクエストを発行でき、コンポーネント内では`useAPIClient()`と`useRequest()`を使用できます。

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

一般的なリクエストです。詳細な使用法についてはaxiosの[リクエスト設定](https://axios-http.com/docs/req_config)を参照してください。

```ts
class APIClient {
  // クライアントリクエスト。AxiosRequestConfigとResourceActionOptionsをサポート
  request<T = any, R = AxiosResponse<T>, D = any>(
    config: AxiosRequestConfig<D> | ResourceActionOptions,
  ): Promise<R>;
}
```

例:

```ts
const response = await apiClient.request({ url });
```

### apiClient.axios

`AxiosInstance`のインスタンスです。

axiosの[デフォルト設定](https://axios-http.com/docs/config_defaults)を変更するために使用できます。

```ts
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
```

リクエストやレスポンスを[インターセプト](https://axios-http.com/docs/interceptors)するためにも使用できます。

```ts
// リクエストインターセプターの追加：qsを使用してparamsパラメータを変換
axios.interceptors.request.use((config) => {
  config.paramsSerializer = (params) => {
    return qs.stringify(params, {
      strictNullHandling: true,
      arrayFormat: 'brackets',
    });
  };
  return config;
});

// リクエストインターセプターの追加：カスタムリクエストヘッダー
axios.interceptors.request.use((config) => {
  config.headers['Authorization'] = `Bearer token123`;
  config.headers['X-Hostname'] = `localhost`;
  config.headers['X-Timezone'] = `+08:00`;
  config.headers['X-Locale'] = 'ja-JP';
  config.headers['X-Role'] = 'admin';
  config.headers['X-Authenticator'] = 'basic';
  config.headers['X-App'] = 'sub1';
  return config;
});

// レスポンスインターセプターの追加
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // エラーのあるリクエストに通知を表示
    notification.error({
      message: 'リクエスト応答エラー',
    });
  },
);
```

### NocoBaseサーバーのカスタムリクエストヘッダー

- `X-App`：複数アプリの場合、`X-App`で現在アクセスしているアプリを指定
- `X-Locale`：現在の言語
- `X-Hostname`：クライアントのホスト名
- `X-Timezone`：クライアントのタイムゾーン
- `X-Role`：現在の役割
- `X-Authenticator`：現在のユーザー認証方式

## useAPIClient()

コンポーネント内部で`useAPIClient()`を使用して現在のアプリのAPIClientインスタンスを取得できます。その返り値は`app.apiClient`と等しいです。

## useRequest()

非同期データ管理です。発行したクライアントリクエストデータやカスタムの非同期関数を扱います。詳細な使用法についてはahooksの[useRequest()](https://ahooks.js.org/hooks/use-request/index)を参照してください。

```ts
function useRequest<P>(
  service: AxiosRequestConfig<P> | ResourceActionOptions<P> | FunctionService,
  options?: Options<any, any>,
);
```

例:

```ts
const { data, loading, refresh, run, params } = useRequest({ url: '/users' });

// useRequestに渡すのはAxiosRequestConfigなので、runにもAxiosRequestConfigを渡します。
run({
  params: {
    pageSize: 20,
  },
});
```

