# ログ

NocoBaseのログは、<a href="https://github.com/winstonjs/winston" target="_blank">Winston</a>を基にしています。デフォルトでは、NocoBaseはログをインターフェースリクエストログ、システム実行ログ、SQL実行ログの3種類に分類します。インターフェースリクエストログおよびSQL実行ログはアプリ内で出力され、プラグイン開発者は通常、プラグインに関連するシステム実行ログのみを出力します。

この文書では、プラグイン開発時にログを作成し出力する方法について説明します。ログに関する詳細は、[ログプラグイン](../../handbook/logger/index.md)を参照してください。

## デフォルトの出力方法

NocoBaseはシステム実行ログの出力方法を提供しており、ログは定義されたフィールドに従って出力され、指定されたファイルにも書き込まれます。参照：[ログプラグイン - システムログ](../../handbook/logger/index.md#システムログ)。

```ts
// デフォルトの出力方法
app.log.info("メッセージ");

// ミドルウェアでの使用
async function (ctx, next) {
  ctx.log.info("メッセージ");
}

// プラグインでの使用
class CustomPlugin extends Plugin {
  async load() {
    this.log.info("メッセージ");
  }
}
```

上記の方法は以下の使用法に従います：

最初のパラメータはログメッセージで、2番目のパラメータはオプションのメタデータオブジェクトです。任意のキーと値のペアを指定でき、`module`, `submodule`, `method`は個別のフィールドとして抽出され、その他のフィールドは`meta`フィールドに格納されます。

```ts
app.log.info('メッセージ', {
  module: 'モジュール',
  submodule: 'サブモジュール',
  method: 'メソッド',
  key1: '値1',
  key2: '値2',
});
// => level=info timestamp=2023-12-27 10:30:23 message=メッセージ module=モジュール submodule=サブモジュール method=メソッド meta={"key1": "値1", "key2": "値2"}

app.log.debug();
app.log.warn();
app.log.error();
```

## 他のファイルへの出力

システムのデフォルトの出力方法を使用したいが、デフォルトのファイルに出力したくない場合は、`createSystemLogger`を使用してカスタムシステムログインスタンスを作成できます。

```ts
import { createSystemLogger } from '@nocobase/logger';

const logger = createSystemLogger({
  dirname: '/pathto/',
  filename: 'xxx',
  separateError: true, // エラーレベルのログを 'xxx_error.log' に別々に出力するかどうか
});
```

## カスタムログ

システム提供の出力方法を使用したくない場合、Winstonのネイティブな方法を使用してログを作成できます。

### `createLogger`

```ts
import { createLogger } from '@nocobase/logger';

const logger = createLogger({
  // オプション
});
```

`options`は元の`winston.LoggerOptions`に基づいて拡張されています。

- `transports` - `'console' | 'file' | 'dailyRotateFile'`のプリセット出力方法を使用できます。
- `format` - `'logfmt' | 'json' | 'delimiter'`のプリセット出力フォーマットを使用できます。

### `app.createLogger`

複数アプリケーションのシナリオでは、カスタムの出力ディレクトリとファイルを設定して、現在のアプリ名のディレクトリに出力することがあります。参照：[ログプラグイン - ログディレクトリ](../../handbook/logger/index.md#ログディレクトリ)。

```ts
app.createLogger({
  dirname: '',
  filename: 'custom', // /storage/logs/main/custom.log に出力
});
```

### `plugin.createLogger`

使用シナリオと使用法は`app.createLogger`と同様です。

```ts
class CustomPlugin extends Plugin {
  async load() {
    const logger = this.createLogger({
      // /storage/logs/main/custom-plugin/YYYY-MM-DD.log に出力
      dirname: 'custom-plugin',
      filename: '%DATE%.log',
      transports: ['dailyRotateFile'],
    });
  }
}
```

## 関連文書

- [ログプラグイン](../../plugins/logger/index.md)
- [APIリファレンス](../../api/logger.md)

