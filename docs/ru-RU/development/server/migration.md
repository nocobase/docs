# Миграции

В процессе обновления и итерации плагинов могут возникать несовместимые изменения. Эти критические изменения можно обработать путем написания файлов миграций, которые запускаются командой `nocobase upgrade`. Соответствующий процесс выглядит следующим образом:

<img src="./image-2.png" style="max-width: 800px; width: 800px;">

Миграции для обновлений разделяются на beforeLoad, afterSync и afterLoad:

- beforeLoad: Выполняется перед загрузкой каждого модуля, разделен на три этапа:
  - Перед загрузкой основного модуля
  - Перед загрузкой preset-плагинов
  - Перед загрузкой других плагинов
- afterSync: После синхронизации конфигураций таблиц с базой данных, разделен на три этапа:
  - После синхронизации основных таблиц с БД
  - После синхронизации таблиц preset-плагинов с БД
  - После синхронизации таблиц других плагинов с БД
- afterLoad: Выполняется после полной загрузки всех приложений

## Создание файлов миграций

Создание файлов миграций через команду create-migration

```bash
yarn nocobase create-migration -h

Usage: nocobase create-migration [options] <name>

Options:
  --pkg <pkg>  имя пакета
  --on [on]    Варианты: beforeLoad, afterSync и afterLoad
  -h, --help   показать справку
```

Пример

```bash
$ yarn nocobase create-migration update-ui --pkg=@nocobase/plugin-client

2024-01-07 17:33:13 [info ] add app main into supervisor     
2024-01-07 17:33:13 [info ] файл миграции создан в /nocobase/packages/plugins/@nocobase/plugin-client/src/server/migrations/20240107173313-update-ui.ts
✨  Готово за 5.02s.
```

Будет создан файл миграции с именем 20240107173313-update-ui.ts в директории src/server/migrations плагина @nocobase/plugin-client, с начальным содержимым:

```ts
import { Migration } from '@nocobase/server';

export default class extends Migration {
  on = 'afterLoad'; // 'beforeLoad' | 'afterSync' | 'afterLoad'
  appVersion = '<0.19.0-alpha.3';

  async up() {
    // код миграции
  }
}
```

## Запуск миграций

Запускается командой `nocobase upgrade`

```bash
$ yarn nocobase upgrade
```

## Тестирование миграций

```ts
import { createMockServer, MockServer } from '@nocobase/test';

describe('тестовый пример', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await createMockServer({
      plugins: ['my-plugin'], // Плагины
      version: '0.18.0-alpha.5', // Версия перед обновлением
    });
  });

  afterEach(async () => {
    await app.destroy();
  });

  test('case1', async () => {
    await app.runCommand('upgrade');
    // тестовый код...
  });
});
```
