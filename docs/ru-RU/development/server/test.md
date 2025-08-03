# Тестирование

Тестирование основано на фреймворке [Jest](https://jestjs.io/). Для удобства написания тестов предоставляются `mockDatabase()` и `mockServer()` для тестирования базы данных и серверной части приложений.

:::warning
Переменные тестового окружения настраиваются в файле `.env.test`. Рекомендуется использовать отдельную тестовую базу данных.
:::

## `mockDatabase()`

По умолчанию предоставляет полностью изолированное тестовое окружение для БД.

```ts
import { mockDatabase } from '@nocobase/test';

describe('my db suite', () => {
  let db;

  beforeEach(async () => {
    db = mockDatabase();
    db.collection({
      name: 'posts',
      fields: [
        {
          type: 'string',
          name: 'title',
        },
      ],
    });
    await db.sync();
  });

  afterEach(async () => {
    await db.close();
  });

  test('my case', async () => {
    const repository = db.getRepository('posts');
    const post = await repository.create({
      values: {
        title: 'hello',
      },
    });

    expect(post.get('title')).toEqual('hello');
  });
});
```

## `mockServer()`

Предоставляет mock-экземпляр серверного приложения, где app.db является экземпляром `mockDatabase()`. Также доступен удобный `app.agent()` для тестирования HTTP API. Для Resource Action, специфичных для NocoBase, предусмотрен `app.agent().resource()` для тестирования действий ресурсов.

```ts
import { MockServer, mockServer } from '@nocobase/test';

// Минимальная конфигурация приложения для каждого плагина разная,
// необходимо добавлять требуемые плагины в зависимости от условий
async function createApp(options: any = {}) {
  const app = mockServer({
    ...options,
    plugins: [
      'acl',
      'users',
      'collection-manager',
      'error-handler',
      ...options.plugins,
    ],
    // Могут присутствовать другие параметры конфигурации
  });
  // Здесь можно добавить логику, требующую специальной обработки,
  // например, импорт тестовых данных
  return app;
}

// Большинству тестов требуется запуск приложения,
// поэтому можно предоставить общий метод запуска
async function startApp() {
  const app = createApp();
  await app.quickstart({
    // Очистка БД перед запуском тестов
    clean: true,
  });
  return app;
}

describe('test example', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await startApp();
  });

  afterEach(async () => {
    // Очистка БД после тестов
    await app.destroy();
    // Остановка без очистки БД
    await app.stop();
  });

  test('case1', async () => {
    // код теста...
  });
});
```
### Запуск с последующей установкой

Команда в терминале:

```bash
yarn start # Остается в памяти
# Выполнить в другом терминале
yarn nocobase install
```

Тестовый процесс:

```ts
const app = mockServer();
await app.runCommand('start');
await app.runCommand('install');
```

### Быстрый старт (автоматическая установка или обновление)

Команда в терминале:

```bash
yarn start --quickstart
```

Тестовый процесс:

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
```

### Переустановка уже установленного и запущенного приложения

Команда в терминале:

```bash
yarn start --quickstart
# Выполнить в другом терминале
yarn nocobase install -f
```

Тестовый процесс:

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('install', '-f');
```

### Обновление приложения (перед запуском)

Команда в терминале:

```bash
yarn nocobase upgrade
yarn start
```

Тестовый процесс:

```ts
const app = mockServer();
await app.runCommand('upgrade', '-f');
await app.runCommand('start', '--quickstart');
```

### Обновление приложения (после запуска)

Команда в терминале:

```bash
yarn start # Остается в памяти
# Выполнить в другом терминале
yarn nocobase upgrade
```

Тестовый процесс:

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('upgrade', '-f');
```

### Активация плагина

Команда в терминале:

```bash
yarn start --quickstart
yarn pm enable @my-project/plugin-hello
```

Тестовый процесс:

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('pm', 'enable', '@my-project/plugin-hello');
```

### Деактивация плагина

Команда в терминале:

```bash
yarn start --quickstart
yarn pm disable @my-project/plugin-hello
```

Тестовый процесс:

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('pm', 'disable', '@my-project/plugin-hello');
```
