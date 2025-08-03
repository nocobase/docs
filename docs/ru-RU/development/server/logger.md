# Логирование

NocoBase использует систему логирования на основе <a href="https://github.com/winstonjs/winston" target="_blank">Winston</a>. По умолчанию логи разделяются на:

1. Логи API-запросов
2. Логи системных операций  
3. Логи выполнения SQL

Логи API и SQL генерируются внутренними механизмами приложения, а разработчикам плагинов обычно требуется только логирование операций, связанных с их плагинами.

## Стандартный метод логирования

NocoBase предоставляет метод для логирования системных операций с выводом в указанный файл:

```ts
// Базовый метод
app.log.info("сообщение");

// В middleware
async function (ctx, next) {
  ctx.log.info("сообщение");
}

// В плагине 
class CustomPlugin extends Plugin {
  async load() {
    this.log.info("сообщение");
  }
}
```

Формат записи:
- Первый параметр - сообщение
- Второй параметр (опционально) - метаданные в формате ключ-значение

```ts
app.log.info('сообщение', {
  module: 'модуль',
  submodule: 'подмодуль',
  method: 'метод',
  key1: 'значение1',
  key2: 'значение2'
});
// => level=info timestamp=2023-12-27 10:30:23 message=сообщение module=модуль submodule=подмодуль method=метод meta={"key1": "значение1", "key2": "значение2"}

app.log.debug();
app.log.warn(); 
app.log.error();
```

## Вывод в другие файлы

Для вывода в нестандартный файл:

```ts
import { createSystemLogger } from '@nocobase/logger';

const logger = createSystemLogger({
  dirname: '/путь/',
  filename: 'файл',
  separateError: true // Отдельный файл для ошибок
});
```

## Кастомные логи

### `createLogger`

```ts
import { createLogger } from '@nocobase/logger';

const logger = createLogger({
  transports: ['console', 'file', 'dailyRotateFile'],
  format: 'logfmt' | 'json' | 'delimiter' 
});
```

### `app.createLogger`

```ts
app.createLogger({
  dirname: '',
  filename: 'custom' // /storage/logs/main/custom.log
});
```

### `plugin.createLogger`

```ts
class CustomPlugin extends Plugin {
  async load() {
    const logger = this.createLogger({
      dirname: 'custom-plugin', // /storage/logs/main/custom-plugin/YYYY-MM-DD.log
      filename: '%DATE%.log',
      transports: ['dailyRotateFile']
    });
  }
}
```

## Ссылки

- [Плагин логирования](../../handbook/logger/index.md)
- [API Reference](../../api/logger.md)
