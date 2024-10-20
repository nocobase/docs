# テレメトリ

:::warning{title=実験的}
:::

NocoBaseのテレメトリモジュールは、<a href="https://opentelemetry.io/" target="_blank">OpenTelemetry</a>を基盤としています。本記事では、テレメトリモジュールを使用してトレース（Trace）やメトリック（Metric）データを収集し、NocoBaseシステムの可観測性（Observability）を向上させる方法について説明します。

:::info{title=ヒント}
NocoBaseを起動する前に、環境変数`TELEMETRY_ENABLED=true`を設定してテレメトリデータの収集を有効にする必要があります。その他の設定については、[環境変数 - テレメトリ](../../welcome/getting-started/env.md#telemetry_enabled)を参照してください。
:::

## インストゥルメンテーション

### メトリック

```ts
const meter = app.telemetry.metric.getMeter();
const counter = meter.createCounter('event_counter', {});
counter.add(1);
```

参考：

- <a href="https://opentelemetry.io/docs/instrumentation/js/manual/#acquiring-a-meter" target="_blank">https://opentelemetry.io/docs/instrumentation/js/manual/#acquiring-a-meter</a>

### トレース

```ts
const tracer = app.telemetry.trace.getTracer();
tracer.startActiveSpan();
tracer.startSpan();
```

参考：

- <a href="https://opentelemetry.io/docs/instrumentation/js/manual/#acquiring-a-tracer" target="_blank">https://opentelemetry.io/docs/instrumentation/js/manual/#acquiring-a-tracer</a>

### ライブラリ

```ts
import { Plugin } from '@nocobase/server';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';

class InstrumentationPlugin extends Plugin {
  afterAdd() {
    this.app.on('beforeLoad', (app) => {
      app.telemetry.addInstrumentation(getNodeAutoInstrumentations());
    });
  }
}
```

:::warning{title=注意}
NocoBaseにおけるテレメトリモジュールの初期化位置は`app.beforeLoad`です。詳細は[ライフサイクル](../life-cycle.md)を参照してください。したがって、すべてのインストゥルメンテーションライブラリがNocoBaseに適用されるわけではありません。  
例えば、<a href="https://www.npmjs.com/package/@opentelemetry/instrumentation-koa" target="_blank">instrumentation-koa</a>は`Koa`のインスタンス化前にインポートする必要がありますが、NocoBaseの`Application`は`Koa`を基盤としており、テレメトリモジュールは`Application`のインスタンス化後に初期化されるため、適用できません。
:::

参考：

- <a href="https://opentelemetry.io/docs/instrumentation/js/libraries/" target="_blank">https://opentelemetry.io/docs/instrumentation/js/libraries/</a>

## データ収集

### メトリック

```ts
import { Plugin } from '@nocobase/server';
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

### トレース

```ts
import { Plugin } from '@nocobase/server';
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

参考：

- <a href="https://opentelemetry.io/docs/instrumentation/js/exporters" target="_blank">https://opentelemetry.io/docs/instrumentation/js/exporters</a>

