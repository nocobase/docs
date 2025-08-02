# Структура директорий

Независимо от того, создано ли приложение NocoBase через [исходный код Git](/welcome/getting-started/installation/git-clone) или [create-nocobase-app](/welcome/getting-started/installation/create-nocobase-app), структура директорий будет одинаковой:

```bash
├── my-nocobase-app
  ├── packages        # Разрабатываемые пакеты
    ├── plugins       # Разрабатываемые плагины
  ├── storage         # Хранилище для файлов БД, вложений, кэша и т.д.
    ├── backups       # Директория для резервных копий
    ├── plugins       # Готовые к использованию плагины (уже скомпилированные)
    ├── tar           # Место хранения результатов сборки yarn build --tar
    ├── uploads       # Локальное хранилище файлов
  ├── .env            # Переменные окружения
  ├── .env.e2e        # Переменные для e2e-тестов yarn e2e test
  ├── .env.test       # Переменные для unit-тестов yarn test
  ├── lerna.json
  ├── package.json
  ├── playwright.config.ts
  ├── tsconfig.json
  ├── tsconfig.server.json
  ├── vitest.config.mts
```

## Директория плагинов

Разрабатываемые плагины хранятся в директории `packages/plugins` и организованы как npm-пакеты:

```bash
|- /packages/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
```

Плагины, добавленные через интерфейс, хранятся в `storage/plugins`:

```bash
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
```

Встроенные плагины или плагины, объявленные в `dependencies` файла `package.json`, находятся в `node_modules`:

```bash
|- /node_modules/
  |- /@nocobase/
    |- /plugin-acl/
    |- /plugin-auth/
```

## Структура директории плагина

Пустой плагин можно создать командой `yarn pm create @my-project/plugin-hello`. Структура директории:

```bash
|- /packages/plugins/@my-project/plugin-hello
  |- /dist          # Результаты сборки
  |- /src
    |- /client      # Клиентский код плагина
    |- /server      # Серверный код плагина
  |- .npmignore     # Файлы/директории, игнорируемые при публикации пакета
  |- client.d.ts
  |- client.js
  |- package.json   # Информация о пакете плагина
  |- server.d.ts
  |- server.js
```
