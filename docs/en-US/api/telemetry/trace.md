# Trace

## Class Methods

### `constructor()`

构造函数，创建一个 `Trace` 实例。

#### Signature

- `constructor(options?: TraceOptions)`

#### Type

```ts
export type TraceOptions = {
  tracerName?: string;
  version?: string;
  processorName?: string | string[];
};
```

#### Details

- `tracerName` - 默认 `nocobase-trace`.
- `version` - 默认当前 NocoBase 版本。
- `processorName` - 想启用的已注册的 `SpanProcessor` 的标识。

### `init()`

初始化 `NodeTracerProvider`.

#### Signature

- `init(): void`

### `registerProcessor()`

注册 `SpanProcessor`

#### Signature

- `registerProcessor(name: string, processor: GetSpanProcessor)`

#### Type

```ts
import { SpanProcessor } from '@opentelemetry/sdk-trace-base';

type GetSpanProcessor = () => SpanProcessor;
```

#### Details

- `name` - `SpanProcessor` 唯一标识。
- `processor` - 获取 `SpanProcessor` 的方法。

### `getTracer()`

获取 `Tracer`.

#### Signature

- `getTracer(name?: string, version?: string)`

#### Details

- `name` - 默认 `nocobase-trace`.
- `version` - 默认当前 NocoBase 版本。

### `start()`

启动 `SpanProcessor`.

#### Signature

- `start(): void`

### `shutdown()`

停止 `SpanProcessor`.

#### Signature

- `shutdown(): Promise<void>`
