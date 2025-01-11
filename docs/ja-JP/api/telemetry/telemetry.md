# Telemetry

## 概要

`Telemetry` は NocoBase のテレメトリーモジュールで、<a href="https://opentelemetry.io">OpenTelemetry</a> を基にラップされており、OpenTelemetry エコシステムのメトリクス (Metric) とトレース (Trace) ツールの登録をサポートしています。

## クラスメソッド

### `constructor()`

コンストラクタ、`Telemetry` インスタンスを作成します。

#### シグネチャ

- `constructor(options?: TelemetryOptions)`

#### タイプ

```ts
export interface TelemetryOptions {
  serviceName?: string;
  version?: string;
  trace?: TraceOptions;
  metric?: MetricOptions;
}
```

#### 詳細

| プロパティ      | タイプ            | 説明                                                                                                                        | デフォルト値               |
| --------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `serviceName`   | `string`          | オプション、<a href="https://opentelemetry.io/docs/specs/semconv/resource/#service" target="_blank">Semantic Conventions</a> を参照 | `nocobase`                 |
| `version`       | `string`          | オプション、<a href="https://opentelemetry.io/docs/specs/semconv/resource/#service" target="_blank">Semantic Conventions</a> を参照 | オプション、現在の NocoBase バージョン |
| `trace`         | `TraceOptions`    | オプション、[Trace](./trace.md) を参照                                                                                      |
| `metric`        | `MetricOptions`   | オプション、[Metric](./metric.md) を参照                                                                                    |

### `init()`

Instrumention を登録し、`Trace` と `Metric` を初期化します。

#### シグネチャ

- `init(): void`

### `start()`

`Trace` と `Metric` に関連するデータの処理プログラム（例：Prometheus へのエクスポート）を開始します。

#### シグネチャ

- `start(): void`

### `shutdown()`

`Trace` と `Metric` に関連するデータの処理プログラムを停止します。

#### シグネチャ

- `shutdown(): Promise<void>`

### `addInstrumentation()`

インストルメンテーションツールライブラリを追加します。

#### シグネチャ

- `addInstrumentation(...instrumentation: InstrumentationOption[])`