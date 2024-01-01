# Telemetry

## Class Methods

### `constructor()`

构造函数，创建一个 `Telemetry` 实例。

#### Signature

- `constructor(options?: TelemetryOptions)`

#### Type

```ts
export interface TelemetryOptions {
  serviceName?: string;
  version?: string;
  trace?: TraceOptions;
  metric?: MetricOptions;
}
```

#### Details

- `serviceName` - 默认 `nocobase`。参考：<a href="https://opentelemetry.io/docs/specs/semconv/resource/#service" target="_blank">Semantic Conventions</a>
- `version` - 默认当前 NocoBase 版本。参考：<a href="https://opentelemetry.io/docs/specs/semconv/resource/#service" target="_blank">Semantic Conventions</a>
- `trace` - 参考: [Trace](./trace.md)
- `Metric` - 参考: [Metric](./metric.md)

### `init()`

注册 Instrumention, 初始化 `Trace`, `Metric`.

#### Signature

- `init(): void`

### `start()`

启动 `Trace`, `Metric` 相关数据的处理程序，如：导出到 Prometheus.

#### Signature

- `start(): void`

### `shutdown()`

停止 `Trace`, `Metric` 相关的数据处理程序。

#### Signature

- `shutdown(): Promise<void>`

### `addInstrumentation()`

添加插桩工具库

#### Signature

- `addInstrumentation(...instrumentation: InstrumentationOption[])`
