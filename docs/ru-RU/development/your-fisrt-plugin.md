# Создание первого плагина

Перед началом необходимо установить NocoBase:

- [Установка через create-nocobase-app](/welcome/getting-started/installation/create-nocobase-app)
- [Установка из исходного кода Git](/welcome/getting-started/installation/git-clone)

После установки NocoBase можно приступать к разработке плагина.

## Создание плагина

Сначала создайте пустой плагин с помощью CLI-команды:

```bash
yarn pm create @my-project/plugin-hello
```

Плагин будет создан в директории `packages/plugins/@my-project/plugin-hello` со следующей структурой:

```bash
|- /packages/plugins/@my-project/plugin-hello
  |- /src
    |- /client # клиентский код плагина
    |- /server # серверный код плагина
  |- client.d.ts
  |- client.js
  |- package.json # информация о пакете плагина
  |- server.d.ts
  |- server.js
```

Проверить добавленный плагин можно в Менеджере плагинов по адресу: http://localhost:13000/admin/pm/list/local/

<img src="https://nocobase.oss-cn-beijing.aliyuncs.com/b04d16851fc1bbc2796ecf8f9bc0c3f4.png" />

Если плагин не отображается, добавьте его вручную:

```bash
yarn pm add @my-project/plugin-hello
```

## Написание кода плагина

Создайте файл коллекции в плагине, например `. /src/server/collections/hello.ts`:

```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'hello',
  fields: [{ type: 'string', name: 'name' }],
});
```

Измените файл `. /src/server/plugin.ts`:

```ts
import { Plugin } from '@nocobase/server';

export class PluginHelloServer extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    // Пример: открыть все действия коллекции hello для публичного доступа
    this.app.acl.allow('hello', '*', 'public');
  }

  async install() {}

  async afterEnable() {}

  async afterDisable() {}

  async remove() {}
}

export default PluginHelloServer;
```

## Активация плагина

**Через командную строку:**

```bash
yarn pm enable @my-project/plugin-hello
```

**Через интерфейс:**

Откройте Менеджер плагинов по адресу http://localhost:13000/admin/pm/list/local/ и нажмите "Активировать".

<img src="https://nocobase.oss-cn-beijing.aliyuncs.com/7b7df26a8ecc32bb1ebc3f99767ff9f9.png" />

:::info{title="ИНФОРМАЦИЯ"}
При активации плагина коллекции автоматически синхронизируются с базой данных. Если плагин уже активирован, используйте команду `yarn nocobase upgrade` для синхронизации.
:::

## Отладка плагина

Если приложение не запущено, выполните:

```bash
# для разработки
yarn dev

# для production
yarn build
yarn start
```

Добавьте данные в коллекцию hello:

```bash
curl --location --request POST 'http://localhost:13000/api/hello:create' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Hello world"
}'
```

Просмотр данных:

```bash
curl --location --request GET 'http://localhost:13000/api/hello:list'
```

## Сборка плагина

Для полной сборки выполните:

```bash
yarn build @my-project/plugin-hello --tar

# или пошагово
yarn build @my-project/plugin-hello
yarn nocobase tar @my-project/plugin-hello
```

Собранный плагин сохраняется в `storage/tar/@my-project/plugin-hello.tar.gz`

## Загрузка в другие приложения NocoBase

Поддерживается в версии 0.14 и выше

<img src="https://nocobase.oss-cn-beijing.aliyuncs.com/8aa8a511aa8c1e87a8f7ee82cf8a1359.gif" />
