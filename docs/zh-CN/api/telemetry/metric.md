# Metric

## 类方法

### `constructor()`

构造函数，创建一个 `Metric` 实例。

#### 签名

- `constructor(options?: MetricOptions)`

#### 类型

```ts
export type MetricOptions = {
  meterName?: string;
  version?: string;
  readerName?: string | string[];
};
```

#### 详细信息

- `meterName` - 默认 `nocobase-meter`.
- `version` - 默认当前 NocoBase 版本。
- `readerName` - 想启用的已注册的 `MetricReader` 的标识。

### `init()`

初始化 `MetricProvider`.

#### 签名

- `init(): void`

### `registerReader()`

注册 `MetricReader`

#### 签名

- `registerReader(name: string, reader: GetMetricReader)`

#### 类型

```ts
import { MetricReader } from '@opentelemetry/sdk-metrics';

type GetMetricReader = () => MetricReader;
```

#### 详细信息

- `name` - `MetricReader` 唯一标识。
- `reader` - 获取 `MetricReader` 的方法。

### `addView()`

添加 `View`. 参考: <a href="https://opentelemetry.io/docs/instrumentation/js/manual/#configure-metric-views" target="_blank">Configure Metric Views</a>.

#### 签名

- `addView(...view: View[])`

#### 类型

```ts
import { View } from '@opentelemetry/sdk-metrics';
```

### `getMeter()`

获取 `Meter`.

#### 签名

- `getMeter(name?: string, version?: string)`

#### 详细信息

- `name` - 默认 `nocobase-meter`.
- `version` - 默认当前 NocoBase 版本。

### `start()`

启动 `MetricReader`.

#### 签名

- `start(): void`

### `shutdown()`

停止 `MetricReader`.

#### 签名

- `shutdown(): Promise<void>`
