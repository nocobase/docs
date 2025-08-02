# Метрики (Metric)

## Методы класса

### `constructor()`

Конструктор для создания экземпляра `Metric`.

#### Сигнатура

- `constructor(options?: MetricOptions)`

#### Типы

```ts
export type MetricOptions = {
  meterName?: string;
  version?: string;
  readerName?: string | string[];
};
```

#### Детали

| Свойство     | Тип                   | Описание                                       | Значение по умолчанию       |
| ------------ | ---------------------- | --------------------------------------------- | --------------------------- |
| `meterName`  | `string`               | Идентификатор метра                          | `nocobase-meter`            |
| `version`    | `string`               | Версия                                        | Текущая версия NocoBase     |
| `readerName` | `string` \| `string[]` | Идентификатор(ы) зарегистрированного `MetricReader` | -                           |

### `init()`

Инициализирует `MetricProvider`.

#### Сигнатура

- `init(): void`

### `registerReader()`

Регистрирует `MetricReader`.

#### Сигнатура

- `registerReader(name: string, reader: GetMetricReader)`

#### Типы

```ts
import { MetricReader } from '@opentelemetry/sdk-metrics';

type GetMetricReader = () => MetricReader;
```

#### Детали

| Параметр | Тип                 | Описание                          |
| -------- | ------------------- | --------------------------------- |
| `name`   | `string`            | Уникальный идентификатор для `MetricReader` |
| `reader` | `() => MetricReader` | Функция получения `MetricReader`  |

### `addView()`

Добавляет `View`. См. [Configure Metric Views](https://opentelemetry.io/docs/instrumentation/js/manual/#configure-metric-views).

#### Сигнатура

- `addView(...view: View[])`

#### Типы

```ts
import { View } from '@opentelemetry/sdk-metrics';
```

### `getMeter()`

Получает `Meter`.

#### Сигнатура

- `getMeter(name?: string, version?: string)`

#### Детали

| Параметр | Тип     | Описание          | Значение по умолчанию       |
| -------- | ------- | ----------------- | --------------------------- |
| `name`   | `string`| Идентификатор метра | `nocobase-meter`            |
| `version`| `string`| Версия            | Текущая версия NocoBase     |

### `start()`

Запускает `MetricReader`.

#### Сигнатура

- `start(): void`

### `shutdown()`

Останавливает `MetricReader`.

#### Сигнатура

- `shutdown(): Promise<void>`

