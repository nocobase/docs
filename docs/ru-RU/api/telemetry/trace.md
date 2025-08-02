# Трассировка (Trace)

## Методы класса

### `constructor()`

Конструктор для создания экземпляра `Trace`.

#### Сигнатура
- `constructor(options?: TraceOptions)`

#### Типы
```ts
export type TraceOptions = {
  tracerName?: string;
  version?: string;
  processorName?: string | string[];
};
```

#### Детали

| Свойство        | Тип                   | Описание                                        | Значение по умолчанию      |
|-----------------|-----------------------|------------------------------------------------|----------------------------|
| `tracerName`    | `string`              | Идентификатор трассировки                      | `nocobase-trace`           |
| `version`       | `string`              | Версия системы                                 | Текущая версия NocoBase    |
| `processorName` | `string` \| `string[]`| Идентификатор(ы) зарегистрированного процессора | -                          |

### `init()`

Инициализирует `NodeTracerProvider`.

#### Сигнатура
- `init(): void`

### `registerProcessor()`

Регистрирует процессор спанов (`SpanProcessor`).

#### Сигнатура
- `registerProcessor(name: string, processor: GetSpanProcessor)`

#### Типы
```ts
import { SpanProcessor } from '@opentelemetry/sdk-trace-base';

type GetSpanProcessor = () => SpanProcessor;
```

#### Детали

| Параметр    | Тип                   | Описание                           |
|-------------|-----------------------|------------------------------------|
| `name`      | `string`              | Уникальный идентификатор процессора |
| `processor` | `() => SpanProcessor` | Функция получения процессора       |

### `getTracer()`

Получает экземпляр трассировщика (`Tracer`).

#### Сигнатура
- `getTracer(name?: string, version?: string)`

#### Детали

| Параметр | Тип      | Описание               | Значение по умолчанию      |
|----------|----------|------------------------|----------------------------|
| `name`   | `string` | Идентификатор трассировки | `nocobase-trace`           |
| `version`| `string` | Версия системы         | Текущая версия NocoBase    |

### `start()`

Запускает процессор спанов.

#### Сигнатура
- `start(): void`

### `shutdown()`

Останавливает процессор спанов.

#### Сигнатура
- `shutdown(): Promise<void>`
