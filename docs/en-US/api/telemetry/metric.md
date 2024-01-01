# Metric

## Class Methods

### `constructor()`

构造函数，创建一个 `Metric` 实例。

#### Signature

- `constructor(options?: MetricOptions)`

#### Type

```ts
export type MetricOptions = {
  meterName?: string;
  version?: string;
  readerName?: string | string[];
};
```

#### Details

- `meterName` - 默认 `nocobase-meter`.
- `version` - 默认当前 NocoBase 版本。
- `readerName` - 想启用的已注册的 `MetricReader` 的标识。

### `init()`

初始化 `MetricProvider`.

#### Signature

- `init(): void`

### `registerReader()`

注册 `MetricReader`

#### Signature

- `registerReader(name: string, reader: GetMetricReader)`

#### Type

```ts
import { MetricReader } from '@opentelemetry/sdk-metrics';

type GetMetricReader = () => MetricReader;
```

#### Details

- `name` - `MetricReader` 唯一标识。
- `reader` - 获取 `MetricReader` 的方法。

### `addView()`

添加 `View`. 参考: <a href="https://opentelemetry.io/docs/instrumentation/js/manual/#configure-metric-views" target="_blank">Configure Metric Views</a>.

#### Signature

- `addView(...view: View[])`

#### Type

```ts
import { View } from '@opentelemetry/sdk-metrics';
```

### `getMeter()`

获取 `Meter`.

#### Signature

- `getMeter(name?: string, version?: string)`

#### Details

- `name` - 默认 `nocobase-meter`.
- `version` - 默认当前 NocoBase 版本。

### `start()`

启动 `MetricReader`.

#### Signature

- `start(): void`

### `shutdown()`

停止 `MetricReader`.

#### Signature

- `shutdown(): Promise<void>`
