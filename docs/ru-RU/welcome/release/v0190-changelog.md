# Версия 0.19: 2024-01-08

## Новые функции

### Телеметрия

- Документация по разработке: https://docs.nocobase.com/development/server/telemetry
- API ядра: https://docs.nocobase.com/api/telemetry/telemetry
- Плагин Prometheus: https://docs.nocobase.com/plugins/telemetry-prometheus

### Резервное копирование и восстановление приложений

- Документация по плагину: https://docs.nocobase.com/plugins/backup-restore

## Оптимизация ядра

### Оптимизация командной строки

Для NocoBase 0.19 и выше пользовательские команды плагина должны быть размещены в каталоге плагина `src/server/commands/*.ts` со следующим содержимым:

```typescript
export default function(app) {
  app.command('custom1').action();
}
```

Процесс выполнения командной строки:

![20240115141900](https://static-docs.nocobase.com/20240115141900.png)

Специальная конфигурация команды

- `ipc()` Когда приложение запущено, командная строка отправляет команды через ipc для управления запущенным экземпляром приложения, когда ipc() не настроен, будет создан новый экземпляр приложения, а затем операция будет выполнена (это не повлияет на работу запущенного экземпляра приложения)
- `auth()` выполняет проверку базы данных, если конфигурация базы данных неверна, эта команда выполнена не будет.
- `preload()` следует ли предварительно загрузить конфигурацию приложения, то есть выполнить app.load()

Это может быть настроено в соответствии с фактическим использованием команды, примерами являются следующие:

```typescript
app.command('a').ipc().action()
app.command('a').auth().action()
app.command('a').preload().action()
```

### Оптимизация процесса установки

![20240115141914](https://static-docs.nocobase.com/20240115141914.png)

### Оптимизация процесса запуска

![20240115141922](https://static-docs.nocobase.com/20240115141922.png)

### Оптимизация процесса обновления

![20240115141933](https://static-docs.nocobase.com/20240115141933.png)

Миграции обновлений подразделяются на beforeLoad, afterSync и afterLoad после загрузки:

- Предварительная загрузка: Выполняется перед загрузкой каждого модуля, разделена на три этапа:

  - Перед загрузкой модулей ядра
  - Перед загрузкой предустановленных плагинов
  - Перед загрузкой других плагинов

- Последующая синхронизация: Выполняется после синхронизации конфигураций таблиц данных с базой данных, разделенной на три этапа:

  - После синхронизации таблиц ядра с базой данных
  - После синхронизации предустановленных таблиц подключаемого модуля с базой данных
  - После синхронизации других таблиц подключаемого модуля с базой данных.

```typescript
export default class extends Migration {
  // Когда следует выполнить миграцию
  on = 'beforeLoad';
  // Выполняется только при выполнении следующего номера версии приложения.
  appVersion = '<=0.13.0-alpha.5';
  // Выполняется только при выполнении следующего номера версии плагина.
  pluginVersion = '<=0.13.0-alpha.5';
  // Сценарий обновления.
  async up() {}
}
```

### Добавьте команду create-migration

Создадим файл миграции:

```bash
yarn nocobase create-migration -h

Usage: nocobase create-migration [options] <name>

Options:
  --pkg <pkg>  package name
  --on [on]    Options include beforeLoad, afterSync and afterLoad
  -h, --help   display help for command
```

Например:

```bash
$ yarn nocobase create-migration update-ui --pkg=@nocobase/plugin-client

2024-01-07 17:33:13 [info ] add app main into supervisor     
2024-01-07 17:33:13 [info ] migration file in /nocobase/packages/plugins/@nocobase/plugin-client/src/server/migrations/20240107173313-update-ui.ts
✨  Done in 5.02s.
```

Файл миграции будет сгенерирован в `src/server/migrations` пакета плагинов `@nocobase/plugin-client` как `20240107173313-update-ui.ts` со следующим исходным содержимым:

```typescript
import { Migration } from '@nocobase/server';

export default class extends Migration {
  on = 'afterLoad'; // 'beforeLoad' | 'afterSync' | 'afterLoad'
  appVersion = '<0.18.0-alpha.10';

  async up() {
    // coding
  }
}
```

### Каталоги плагина, основанные на соглашениях

```bash
|- /plugin-sample-hello
  |- /dist             # Каталог для скомпилированного плагина
  |- /src              # Исходный код для плагина
    |- /client
      |- plugin.ts
      |- index.ts      # Точка входа на стороне клиента
    |- /locale         # Обычный каталог для обмена многоязычными файлами между интерфейсом и серверной частью
    |- /swagger        # Обычный каталог для документации Swagger
    |- /server
      |- collections   # Обычный каталог для конфигураций таблиц данных плагина
      |- commands      # Обычный каталог для пользовательских команд
      |- migrations    # Обычный каталог для переноса файлов
      |- plugin.ts     # Класс подключаемого модуля
      |- index.ts      # Точка входа на стороне сервера
    |- index.ts
  |- .npmignore
  |- client.d.ts
  |- client.js
  |- package.json
  |- server.d.ts
  |- server.js
```

Оптимизация процесса тестирования

Добавлены более удобные для пользователя методы `createMockServer()` и `startMockServer()` для написания тестовых примеров:

- `createMockServer()` Быстро создает и запускает приложение.
- `startMockServer()` Быстро запускает приложение (без переустановки).

```typescript
import { createMockServer } from '@nocobase/server';

describe('test example', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await createMockServer({
      plugins: ['nocobase'],
    });
  });

  afterEach(async () => {
    await app.destroy();
  });

  test('case1', async () => {
    // coding...
  });
});
```

## Важные изменения

### Коллекции, команды, миграции изменяют конфигурацию в каталогах, основанных на соглашениях

Пример 1: Коллекции загружаются с помощью importCollections, код удаляется напрямую, а файл конфигурации коллекций должен быть помещен в каталог `src/server/collections`.

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   await this.importCollections(resolve(__dirname, 'collections'));
  }
}
```

Пример 2: Коллекции загружены через this.db.import, код удаляется напрямую, файл конфигурации коллекций должен быть помещен в каталог `src/server/collections`

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   await this.db.import({
-     directory: resolve(__dirname, 'collections')
-   });
  }
}
```

Пример 3: Коллекцию, определенную с помощью db.collection(), рекомендуется поместить в каталог `src/server/collections`.

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.collection({
-     name: 'examples',
-   });
  }
}
```

Добавьте новый файл `src/server/collections/examples.ts` со следующим содержимым:

```typescript
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

Пример 4. Удалите db.addMigrations() и поместите файл миграции в каталог `src/server/migrations`.

```diff
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.addMigrations({
-     namespace: 'auth',
-     directory: resolve(__dirname, 'migrations'),
-     context: {
-       plugin: this,
-     },
-   });
  }
}
```

Пример 5. Настройка командной строки

```diff
export class MyPlugin extends Plugin {
  load() {
-   this.app
-      .command('echo')
-      .option('-v, --version');
-      .action(async ([options]) => {
-        console.log('Hello World!');
-        if (options.version) {
-          console.log('Current version:', app.getVersion());
-        }
-      });
-  }
}
```

Добавьте новый файл `src/server/collections/echo.ts` со следующим содержимым:

```typescript
export default function(app) {
  app
    .command('echo')
    .option('-v, --version');
    .action(async ([options]) => {
      console.log('Hello World!');
      if (options.version) {
        console.log('Current version:', await app.version.get());
      }
    });
}
```
