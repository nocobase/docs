### **Телеметрия**

:::warning{title=Экспериментальная функция}
:::

Модуль телеметрии в NocoBase построен на основе [OpenTelemetry](https://opentelemetry.io/). В данной статье описывается, как использовать модуль телеметрии для сбора данных трассировки (Trace) и метрик (Metric), чтобы повысить наблюдаемость системы NocoBase.

:::info{title=Подсказка}
Перед запуском NocoBase необходимо установить переменную окружения `TELEMETRY_ENABLED=true`, чтобы включить сбор телеметрических данных. Другие настройки см. в разделе: [Переменные окружения — Телеметрия](../../welcome/getting-started/env.md#telemetry_enabled).
:::

#### **Инструментирование**

##### **Метрики**

```js
const meter = app.telemetry.metric.getMeter();
const counter = meter.createCounter('event_counter', {});
counter.add(1);
```

**Ссылки:**
[https://opentelemetry.io/docs/instrumentation/js/manual/#acquiring-a-meter](https://opentelemetry.io/docs/instrumentation/js/manual/#acquiring-a-meter)

##### **Трассировка (Traces)**

```js
const tracer = app.telemetry.trace.getTracer();
tracer.startActiveSpan();
tracer.startSpan();
```

**Ссылки:**
[https://opentelemetry.io/docs/instrumentation/js/manual/#acquiring-a-tracer](https://opentelemetry.io/docs/instrumentation/js/manual/#acquiring-a-tracer)

##### **Библиотеки**

```js
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

:::warning
В NocoBase модуль телеметрии инициализируется на этапе `app.beforeLoad`. Подробнее см.: [Жизненный цикл](../life-cycle.md). Поэтому не все библиотеки инструментирования подходят для использования в NocoBase.  
Например, [instrumentation-koa](https://www.npmjs.com/package/@opentelemetry/instrumentation-koa) должна подключаться до создания экземпляра `Koa`, однако, хотя `Application` в NocoBase и основан на `Koa`, модуль телеметрии инициализируется уже после создания экземпляра `Application`, поэтому его использование невозможно.
:::

**Ссылки:**
[https://opentelemetry.io/docs/instrumentation/js/libraries/](https://opentelemetry.io/docs/instrumentation/js/libraries/)

#### **Сбор данных**

##### **Метрики**

```js
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

##### **Трассировка**

```js
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

**Ссылки:**
[https://opentelemetry.io/docs/instrumentation/js/exporters](https://opentelemetry.io/docs/instrumentation/js/exporters)
