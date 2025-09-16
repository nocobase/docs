# Телеметрия (Telemetry)

## Обзор

`Telemetry` — это модуль телеметрии NocoBase, который инкапсулирует поддержку OpenTelemetry и обеспечивает регистрацию метрик и трейсов в экосистеме OpenTelemetry.

## Методы класса

### `constructor()`

Конструктор для создания экземпляра `Telemetry`.

#### Сигнатура

- `constructor(options?: TelemetryOptions)`

#### Тип

```ts
export interface TelemetryOptions {
  serviceName?: string;
  version?: string;
  trace?: TraceOptions;
  metric?: MetricOptions;
}
```

#### Параметры

| Свойство      | Тип            | Описание                                                                                              | Значение по умолчанию               |
| ------------- | --------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `serviceName` | `string`        | Необязательно. См. [Семантические соглашения](https://opentelemetry.io/docs/specs/semconv/resource/#service) | `nocobase`                          |
| `version`     | `string`        | Необязательно. См. [Семантические соглашения](https://opentelemetry.io/docs/specs/semconv/resource/#service) | Текущая версия NocoBase (опционально) |
| `trace`       | `TraceOptions`  | Необязательно. См. [Trace](./trace.md)                                                                | —                                   |
| `metric`      | `MetricOptions` | Необязательно. См. [Metric](./metric.md)                                                              | —                                   |

### `init()`

Регистрирует инструментарий (instrumentation) и инициализирует `Trace` и `Metric`.

#### Сигнатура

- `init(): void`

### `start()`

Запускает обработку данных, связанных с `Trace` и `Metric`, например, экспортирует их в Prometheus.

#### Сигнатура

- `start(): void`

### `shutdown()`

Останавливает обработку данных, связанных с `Trace` и `Metric`.

#### Сигнатура

- `shutdown(): Promise<void>`

### `addInstrumentation()`

Добавляет библиотеки инструментария (instrumentation).

#### Сигнатура

- `addInstrumentation(...instrumentation: InstrumentationOption[])`
