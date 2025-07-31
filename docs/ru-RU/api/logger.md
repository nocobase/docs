# @nocobaselogger

## Создание логгера

### `createLogger()`

Создаёт пользовательский логгер.

#### Сигнатура

```ts
createLogger(options: LoggerOptions)
```

#### Тип

```ts
interface LoggerOptions extends Omit<winston.LoggerOptions, 'transports' | 'format'> {
  dirname?: string;
  filename?: string;
  format?: 'logfmt' | 'json' | 'delimiter' | 'console' | winston.Logform.Format;
  transports?: ('console' | 'file' | 'dailyRotateFile' | winston.transport)[];
}
```

#### Параметры

- `dirname`: Каталог для сохранения логов.
- `filename`: Имя файла логов.
- `format`: Формат вывода логов.
- `transports`: Методы (каналы) вывода логов.

---

### `createSystemLogger()`

Создаёт системные логи выполнения приложения, выводимые указанным способом. См. [Плагин логгера — Системный лог](../plugins/logger/index.md#system-log).

#### Сигнатура

```ts
createSystemLogger(options: SystemLoggerOptions)
```

#### Тип

```ts
export interface SystemLoggerOptions extends LoggerOptions {
  seperateError?: boolean; // выводить ошибки отдельно, по умолчанию true
}
```

#### Параметры

- `seperateError`: Определяет, следует ли отдельно выводить логи уровня `error`.

---

### `app.createLogger()`

#### Определение

```ts
class Application {
  createLogger(options: LoggerOptions) {
    const { dirname } = options;
    return createLogger({
      ...options,
      dirname: getLoggerFilePath(this.name || 'main', dirname || ''),
    });
  }
}
```

Если `dirname` задан как относительный путь, файлы логов будут сохраняться в каталоге, названном по имени текущего приложения.

---

### `plugin.createLogger()`

Использование аналогично `app.createLogger()`.

#### Определение

```ts
class Plugin {
  createLogger(options: LoggerOptions) {
    return this.app.createLogger(options);
  }
}
```

---

## Конфигурация

### `getLoggerLevel()`

```ts
getLoggerLevel(): 'debug' | 'info' | 'warn' | 'error'
```

Возвращает текущий уровень логирования, заданный в системе.

---

### `getLoggerFilePath()`

```ts
getLoggerFilePath(...paths: string[]): string
```

Объединяет переданные пути в один, на основе каталога логов, заданного в конфигурации системы.

---

### `getLoggerTransports()`

```ts
getLoggerTransports(): ('console' | 'file' | 'dailyRotateFile')[]
```

Возвращает методы (каналы) вывода логов, настроенные в системе.

---

### `getLoggerFormat()`

```ts
getLoggerFormat(): 'logfmt' | 'json' | 'delimiter' | 'console'
```

Возвращает формат логов, заданный в системе.

---

## Каналы вывода (Transports)

Предопределённые методы вывода логов.

- `Transports.console`
- `Transports.file`
- `Transports.dailyRotateFile`

#### Пример использования

```ts
import { Transports } from '@nocobase/logger';

const transport = Transports.console({
  // ...
});
```

---

## Ссылки

- [Руководство — Логгер](../handbook/logger/index.md)
- [Плагин логгера](../plugins/logger/index.md)
