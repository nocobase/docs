# v0.9.0：NocoBase のロギングシステム

## `@nocobase/logger`

Winston を基に実装されており、logger インスタンスを簡単に作成する方法を提供します。

```ts
const logger = createLogger();
logger.info('分散ログファイルへようこそ！');

const { instance, middleware } = createAppLogger(); // @nocobase/server 用
app.logger = instance;
app.use(middleware);
```

## 新しい環境変数

logger に関連する環境変数は以下の通りです：

- [LOGGER_TRANSPORT](../getting-started/env.md#logger_transport)
- [LOGGER_BASE_PATH](../getting-started/env.md#logger_base_path)

## アプリケーションの logger 設定

```ts
const app = new Application({
  logger: {
    async skip(ctx) {
      return false;
    },
    requestWhitelist: [],
    responseWhitelist: [],
    transports: ['console', 'dailyRotateFile'],
  },
});
```

詳細な設定オプションについては [Winston ドキュメント](https://github.com/winstonjs/winston#table-of-contents) を参照してください。

## app.logger & ctx.logger

ctx.logger には reqId が含まれており、ctx の全期間にわたって同じ reqId が保持されます。

```ts
ctx.logger = app.logger.child({ reqId: ctx.reqId });
```

`app.logger` と `ctx.logger` は両方とも Winston インスタンスです。詳細な使用法については [Winston ドキュメント](https://github.com/winstonjs/winston#table-of-contents) を参照してください。

## カスタムトランスポート

Winston の標準的な方法に加えて、NocoBase ではより便利な方法も提供しています。

```ts
import { Transports } from '@nocobase/logger';

Transports['custom'] = () => {
  return new winston.transports.Console();
};

const app = new Application({
  logger: {
    transports: ['custom'],
  },
});
```

