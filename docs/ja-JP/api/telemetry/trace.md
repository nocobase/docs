# Trace

## クラスメソッド

### `constructor()`

コンストラクタ、`Trace` インスタンスを作成します。

#### シグネチャ

- `constructor(options?: TraceOptions)`

#### タイプ

```ts
export type TraceOptions = {
  tracerName?: string;
  version?: string;
  processorName?: string | string[];
};
```

#### 詳細

| プロパティ         | タイプ                   | 説明                                    | デフォルト値        |
| ------------------ | ------------------------ | --------------------------------------- | ------------------- |
| `traceName`        | `string`                | トレース識別子                          | `nocobase-trace`    |
| `version`          | `string`                |                                         | NocoBase 現在のバージョン番号 |
| `processorName`    | `string` \| `string[]`  | 有効化したい登録済みの `SpanProcessor` の識別子 |                     |

### `init()`

`NodeTracerProvider` を初期化します。

#### シグネチャ

- `init(): void`

### `registerProcessor()`

`SpanProcessor` を登録します。

#### シグネチャ

- `registerProcessor(name: string, processor: GetSpanProcessor)`

#### タイプ

```ts
import { SpanProcessor } from '@opentelemetry/sdk-trace-base';

type GetSpanProcessor = () => SpanProcessor;
```

#### 詳細

| パラメータ      | タイプ                  | 説明                        |
| --------------- | ----------------------- | --------------------------- |
| `name`          | `string`               | `SpanProcessor` の一意の識別子 |
| `processor`     | `() => SpanProcessor`  | `SpanProcessor` を取得する方法 |

### `getTracer()`

`Tracer` を取得します。

#### シグネチャ

- `getTracer(name?: string, version?: string)`

#### 詳細

| パラメータ    | タイプ     | 説明       | デフォルト値        |
| ------------- | ---------- | ---------- | ------------------- |
| `name`        | `string`   | トレース識別子 | `nocobase-trace`    |
| `version`     | `string`   |            | NocoBase 現在のバージョン番号 |

### `start()`

`SpanProcessor` を起動します。

#### シグネチャ

- `start(): void`

### `shutdown()`

`SpanProcessor` を停止します。

#### シグネチャ

- `shutdown(): Promise<void>`
