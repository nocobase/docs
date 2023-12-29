# 遥测

NocoBase 的遥测 (Telemetry) 模块基于 <a href="https://opentelemetry.io/" target="_blank">OpenTelemetry</a> 封装。本文介绍如何在使用遥测模块收集链路 (Trace) 和监控指标 (Metric) 数据来增强 NocoBase 系统的可观测性 (Observability)。

:::info{title=提示}
NocoBase 在启动前需要配置环境变量 `TELEMETRY_ENABLED=true` 来启动遥测数据收集。其他配置参考：[环境变量 - 遥测](../../welcome/getting-started/env.md#telemetry_enabled)。
:::

## 插桩

### 指标

```ts
const meter = app.telemetry.metric.getMeter();
const counter = meter.createCounter('event_counter', {});
counter.add(1);
```

### 链路

```ts
const tracer = app.telemetry.trace.getTracer();
tracer.startActiveSpan();
tracer.startSpan();
```

### 工具库

```ts
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';

class InstrumentationPlugin extends Plugin {
  afterAdd() {
    this.app.on('beforeLoad', (app) => {
      app.telemetry.addInstrumentation(getNodeAutoInstrumentations());
    });
  }
}
```

## 采集

### 指标

```ts
import {
  PeriodicExportingMetricReader,
  ConsoleMetricExporter,
} from '@opentelemetry/sdk-metrics';

class MetricReaderPlugin extends Plugin {
  afterAdd() {
    this.app.on('beforeLoad', (app) => {
      app.telemetry.metric.registerReader(
        'console',
        () =>
          new PeriodicExportingMetricReader({
            exporter: new ConsoleMetricExporter(),
          }),
      );
    });
  }
}
```

### 链路

```ts
import {
  BatchSpanProcessor,
  ConsoleSpanExporter,
} from '@opentelemetry/sdk-trace-base';

class TraceSpanProcessorPlugin extends Plugin {
  afterAdd() {
    this.app.on('beforeLoad', (app) => {
      app.telemetry.trace.registerProcessor(
        'console',
        () => new BatchSpanProcessor(new ConsoleSpanExporter()),
      );
    });
  }
}
```
