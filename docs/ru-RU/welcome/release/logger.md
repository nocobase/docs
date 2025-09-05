# Версия 0.9.0
# Cистема ведения журнала NocoBase

## `@nocobase/регистратор`

Основанный на реализации Winston, он предоставляет удобный способ создания экземпляра регистратора.

```ts
const logger = createLogger();
logger.info('Hello distributed log files!');

const { instance, middleware } = createAppLogger(); // 用于 @nocobase/server
app.logger = instance;
app.use(middleware);
```

## Новые переменные среды

связанными с регистратором переменными среды являются：

- [LOGGER_TRANSPORT](../начало работы/env.md#logger_transport)
- [ПУТЬ к БАЗЕ РЕГИСТРАТОРА](./начало работы/env.md#путь к базе регистратора)

## Приложение для ведения журнала событий 

```ts
const app = new Application({
  logger: {
    async skip(ctx) {
      return false;
    },
    requestWhitelist: [],
    responseWhitelist: [],
    transports: ['console', 'dailyRotateFile'],
  },
});
```

Обратитесь к дополнительным элементам конфигурации [Winston 文档](https://github.com/winstonjs/winston#table-of-contents)

## app.logger & ctx.logger

В контексте `ctx` логгер `logger` использует уникальный идентификатор запроса (reqId), который остается постоянным на протяжении всего жизненного цикла контекста.

```ts
ctx.logger = app.logger.child({ reqId: ctx.reqId });
```

`app.logger` и `ctx.logger` являются экземплярами Winston. Подробное использование см. в [документации Winston](https://github.com/winstonjs/winston#table-of-contents).

## Кастомные Transports

Помимо стандартного подхода Winston, NocoBase предоставляет более удобный способ настройки.

```ts
import { Transports } from '@nocobase/logger';

Transports['custom'] = () => {
  return new winston.transports.Console();
};

const app = new Application({
  logger: {
    transports: ['custom'],
  },
});
```
