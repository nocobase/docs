# @nocobase/logger

## ログの作成

### `createLogger()`

カスタムログを作成します。

#### シグネチャ

- `createLogger(options: LoggerOptions)`

#### タイプ

```ts
interface LoggerOptions
  extends Omit<winston.LoggerOptions, 'transports' | 'format'> {
  dirname?: string;
  filename?: string;
  format?: 'logfmt' | 'json' | 'delimiter' | 'console' | winston.Logform.Format;
  transports?: ('console' | 'file' | 'dailyRotateFile' | winston.transport)[];
}
```

#### 詳細

| プロパティ     | 説明           |
| -------------- | -------------- |
| `dirname`      | ログ出力ディレクトリ |
| `filename`     | ログファイル名   |
| `format`       | ログフォーマット   |
| `transports`   | ログ出力方法     |

### `createSystemLogger()`

規定の方法で出力するシステムログを作成します。参照 [ログ - システムログ](../handbook/logger/index.md#システムログ)

#### シグネチャ

- `createSystemLogger(options: SystemLoggerOptions)`

#### タイプ

```ts
export interface SystemLoggerOptions extends LoggerOptions {
  seperateError?: boolean; // エラーログを別途出力するかどうか、デフォルトは true
}
```

#### 詳細

| プロパティ        | 説明                            |
| ----------------- | ------------------------------- |
| `seperateError`   | `error` レベルのログを別途出力するかどうか |

### `requestLogger()`

APIリクエストとレスポンスのログミドルウェア。

```ts
app.use(requestLogger(app.name));
```

#### シグネチャ

- `requestLogger(appName: string, options?: RequestLoggerOptions): MiddewareType`

#### タイプ

```ts
export interface RequestLoggerOptions extends LoggerOptions {
  skip?: (ctx?: any) => Promise<boolean>;
  requestWhitelist?: string[];
  responseWhitelist?: string[];
}
```

#### 詳細

| プロパティ            | タイプ                              | 説明                           | デフォルト値                                                                                                                                                  |
| --------------------- | ----------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `skip`                | `(ctx?: any) => Promise<boolean>` | リクエストコンテキストに基づいて特定のリクエストログをスキップする | -                                                                                                                                                       |
| `requestWhitelist`    | `string[]`                        | ログに出力するリクエスト情報のホワイトリスト | `[ 'action', 'header.x-role', 'header.x-hostname', 'header.x-timezone', 'header.x-locale','header.x-authenticator', 'header.x-data-source', 'referer']` |
| `responseWhitelist`   | `string[]`                        | ログに出力するレスポンス情報のホワイトリスト | `['status']`                                                                                                                                            |

### app.createLogger()

#### 定義

```ts
class Application {
  createLogger(options: LoggerOptions) {
    const { dirname } = options;
    return createLogger({
      ...options,
      dirname: getLoggerFilePath(this.name || 'main', dirname || ''),
    });
  }
}
```

`dirname` が相対パスの場合、現在のアプリケーション名のディレクトリにログファイルを出力します。

### plugin.createLogger()

`app.createLogger()` と同じ使用方法です。

#### 定義

```ts
class Plugin {
  createLogger(options: LoggerOptions) {
    return this.app.createLogger(options);
  }
}
```

## ログ設定

### getLoggerLevel()

`getLoggerLevel(): 'debug' | 'info' | 'warn' | 'error'`

現在のシステム設定のログレベルを取得します。

### getLoggerFilePath()

`getLoggerFilePath(...paths: string[]): string`

現在のシステム設定のログディレクトリを基準に、ディレクトリパスを結合します。

### getLoggerTransports()

`getLoggerTransports(): ('console' | 'file' | 'dailyRotateFile')[]`

現在のシステム設定のログ出力方法を取得します。

### getLoggerFormat()

`getLoggerFormat(): 'logfmt' | 'json' | 'delimiter' | 'console'`

現在のシステム設定のログフォーマットを取得します。

## ログ出力

### Transports

プリセットの出力方法。

- `Transports.console`
- `Transports.file`
- `Transports.dailyRotateFile`

```ts
import { Transports } from '@nocobase/logger';

const transport = Transports.console({
  //...
});
```

## 関連ドキュメント

- [開発ガイド - ログ](../development/server/logger.md)
- [ログ](../handbook/logger/index.md)