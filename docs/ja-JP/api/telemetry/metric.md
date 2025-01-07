# Metric

## クラスメソッド

### `constructor()`

コンストラクタ。`Metric` インスタンスを作成します。

#### シグネチャ

- `constructor(options?: MetricOptions)`

#### タイプ

```ts
export type MetricOptions = {
  meterName?: string;
  version?: string;
  readerName?: string | string[];
};
```

#### 詳細

| プロパティ    | 型                     | 説明                                   | デフォルト値        |
| ------------- | ---------------------- | -------------------------------------- | ------------------- |
| `meterName`   | `string`               | meter 識別子                           | `nocobase-meter`    |
| `version`     | `string`               |                                        | NocoBase 現在のバージョン |
| `readerName`  | `string` \| `string[]` | 有効化したい登録済み `MetricReader` の識別子 |                     |

### `init()`

`MetricProvider` を初期化します。

#### シグネチャ

- `init(): void`

### `registerReader()`

`MetricReader` を登録します。

#### シグネチャ

- `registerReader(name: string, reader: GetMetricReader)`

#### タイプ

```ts
import { MetricReader } from '@opentelemetry/sdk-metrics';

type GetMetricReader = () => MetricReader;
```

#### 詳細

| パラメータ    | 型                   | 説明                       |
| ------------- | -------------------- | -------------------------- |
| `name`        | `string`             | `MetricReader` の一意な識別子 |
| `processor`   | `() => MetricReader` | `MetricReader` を取得するメソッド |

### `addView()`

`View` を追加します。参考: <a href="https://opentelemetry.io/docs/instrumentation/js/manual/#configure-metric-views" target="_blank">Configure Metric Views</a>.

#### シグネチャ

- `addView(...view: View[])`

#### タイプ

```ts
import { View } from '@opentelemetry/sdk-metrics';
```

### `getMeter()`

`Meter` を取得します。

#### シグネチャ

- `getMeter(name?: string, version?: string)`

#### 詳細

| パラメータ  | 型     | 説明       | デフォルト値        |
| ----------- | ------ | ---------- | ------------------- |
| `name`      | `string` | meter 識別子 | `nocobase-meter`    |
| `version`   | `string` |            | NocoBase 現在のバージョン |

### `start()`

`MetricReader` を起動します。

#### シグネチャ

- `start(): void`

### `shutdown()`

`MetricReader` を停止します。

#### シグネチャ

- `shutdown(): Promise<void>`
