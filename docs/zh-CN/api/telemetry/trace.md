# Trace

## 类方法

### `constructor()`

构造函数，创建一个 `Trace` 实例。

#### 签名

- `constructor(options?: TraceOptions)`

#### 类型

```ts
export type TraceOptions = {
  tracerName?: string;
  version?: string;
  processorName?: string | string[];
};
```

#### 详细信息

- `tracerName` - 默认 `nocobase-trace`.
- `version` - 默认当前 NocoBase 版本。
- `processorName` - 想启用的已注册的 `SpanProcessor` 的标识。

### `init()`

初始化 `NodeTracerProvider`.

#### 签名

- `init(): void`

### `registerProcessor()`

注册 `SpanProcessor`

#### 签名

- `registerProcessor(name: string, processor: GetSpanProcessor)`

#### 类型

```ts
import { SpanProcessor } from '@opentelemetry/sdk-trace-base';

type GetSpanProcessor = () => SpanProcessor;
```

#### 详细信息

- `name` - `SpanProcessor` 唯一标识。
- `processor` - 获取 `SpanProcessor` 的方法。

### `getTracer()`

获取 `Tracer`.

#### 签名

- `getTracer(name?: string, version?: string)`

#### 详细信息

- `name` - 默认 `nocobase-trace`.
- `version` - 默认当前 NocoBase 版本。

### `start()`

启动 `SpanProcessor`.

#### 签名

- `start(): void`

### `shutdown()`

停止 `SpanProcessor`.

#### 签名

- `shutdown(): Promise<void>`
