# Сервер

## Обзор

NocoBase выполняет серверное тестирование на основе [Vitest](https://vitest.dev/). Модуль `@nocobase/test` предоставляет удобные методы для тестирования серверной части, включая моки сервисов и баз данных.

### Базовое использование

```ts
describe('actions', () => {
  let app: MockServer;
  let db: Database;
  let agent: any;

  beforeAll(async () => {
    app = await createMockServer({
      plugins: ['acl', 'users', 'data-source-manager'],
    });
    db = app.db;
    agent = app.agent();
  });

  afterAll(async () => {
    await app.destroy();
  });
});
```

## API

### `defineConfig()`

Получает конфигурацию Vitest.

```ts
import { defineConfig } from '@nocobase/test/vitest.mjs';

const config = defineConfig();
```

### `mockDatabase()`

Создает экземпляр `MockDataBase` для тестирования.

#### Сигнатура

- `mockDatabase(options: IDatabaseOptions = {}): MockDatabase`

#### Детали

| Параметр | Тип               | Описание                               |
|----------|-------------------|----------------------------------------|
| `options`| `IDatabaseOptions`| См. [DataBase](../database/index.md)   |

### `mockServer()`

Создает экземпляр `MockServer`.

#### Сигнатура

- `mockServer(options?: ApplicationOptions): MockServer`

#### Детали

| Параметр | Тип                 | Описание                                      |
|----------|---------------------|-----------------------------------------------|
| `options`| `ApplicationOptions`| См. [Application](../server/application.md)   |

### `createMockServer()`

Создает экземпляр `MockServer`, выполняет принудительную установку и запускает его.

#### Сигнатура

```ts
createMockServer(options?: ApplicationOptions & {
    version?: string;
    beforeInstall?: BeforeInstallFn;
    skipInstall?: boolean;
    skipStart?: boolean;
}): Promise<MockServer>
```

#### Детали

| Параметр               | Тип                 | Описание                                      |
|------------------------|---------------------|-----------------------------------------------|
| `options`              | `ApplicationOptions`| См. [Application](../server/application.md)   |
| `options.version`      | `string`            | Версия приложения                             |
| `options.beforeInstall`| `BeforeInstallFn`   | Функция для выполнения перед установкой       |
| `options.skipInstall`  | `boolean`           | Пропускать ли принудительную установку        |
| `options.skipStart`    | `boolean`           | Пропускать ли запуск приложения               |

### `MockServer`

`MockServer` наследуется от `Application` и представляет класс для тестирования серверных приложений.

#### Методы класса

##### `loadAndInstall()`

Загружает и устанавливает приложение.

##### `cleanDb()`

Очищает базу данных.

##### `quickstart()`

Выполняет `nocobase start --quickstart`.

##### `destroy()`

Уничтожает приложение.

##### `agent()`

Инициирует API-запросы в тестовых сценариях.

**Сигнатура**

- `agent(): ExtendedAgent`

**Тип**

```ts
interface ExtendedAgent extends SuperAgentTest {
  login: (user: any) => ExtendedAgent;
  loginUsingId: (userId: number) => ExtendedAgent;
  resource: (name: string, resourceOf?: any) => Resource;
}
```

**Детали**

- `SuperAgentTest`

См. [superagent](https://github.com/ladjs/superagent).

- `login()`

Аутентификация с моделью пользователя.

- `loginUsingId()`

Аутентификация по ID пользователя.

- `resource()`

Получает ресурс.

| Параметр    | Тип     | Описание                                                                                                                |
|-------------|---------|-------------------------------------------------------------------------------------------------------------------------|
| `name`      | `string`| 1. Имя ресурса, например `a` <br /> 2. Имя ассоциированного объекта ресурса, например `a.b`                            |
| `resourceOf`| `any`   | Первичный ключ ресурса, когда `resource` является именем ассоциированного объекта. Например, для `a.b` - ключ ресурса `a`. |

### sleep
