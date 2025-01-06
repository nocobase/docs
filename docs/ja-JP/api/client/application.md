# アプリケーション

## コンストラクタ

### `constructor()`

アプリケーションインスタンスを作成します。

**シグネチャ**

- `constructor(options: ApplicationOptions)`

**例**

```ts
const app = new Application({
  apiClient: {
    baseURL: process.env.API_BASE_URL,
  },
  dynamicImport: (name: string) => {
    return import(`../plugins/${name}`);
  },
});
```

## メソッド

### use()

プロバイダを追加します。組み込みのプロバイダには以下があります：

- APIClientProvider
- I18nextProvider
- AntdConfigProvider
- SystemSettingsProvider
- PluginManagerProvider
- SchemaComponentProvider
- SchemaInitializerProvider
- BlockSchemaComponentProvider
- AntdSchemaComponentProvider
- ACLProvider
- RemoteDocumentTitleProvider

### render()

Appコンポーネントをレンダリングします。

```ts
import { Application } from '@nocobase/client';

export const app = new Application({
  apiClient: {
    baseURL: process.env.API_BASE_URL,
  },
  dynamicImport: (name: string) => {
    return import(`../plugins/${name}`);
  },
});

export default app.render();
```