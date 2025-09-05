# Версия 0.12: 2023-08-02

## Новые возможности

- Новый инструмент для сборки плагинов. Встроенные плагины можно будет использовать непосредственно в рабочей среде без необходимости повторной сборки.

## Обновления приложений

### Обновление установки Docker

Изменений нет, обратитесь к [Руководству по обновлению образа Docker] (/welcome/начало работы/обновление/docker-compose) для получения информации об обновлении.

### Обновление установки исходного кода

Инструмент сборки плагина был недавно обновлен, и после загрузки новых исходных текстов необходимо очистить кэш.

```bash
git pull # Извлеките новый исходный код.
yarn clean # Очистите кэш.
```

Более подробную информацию смотрите в [Руководстве по обновлению исходного кода Git] (`/добро пожаловать/начало работы/обновление/git-clone`).

### Обновление установки create-nocobase-app

Повторно загрузите новую версию через `yarn create` и обновите конфигурацию .env, более подробную информацию смотрите в [руководстве по обновлению основной версии] (`/welcome/начало работы/обновление/create-nocobase-app#Обновление основной версии`).

## Несовместимые изменения

### @nocobase/app-клиент и @nocobase/app-сервер объединены в @nocobase-app

Приложения, установленные с помощью `create-nocobase-app`, больше не имеют каталога `packages/app`, и пользовательский код в `packages/app` необходимо перенести в пользовательский плагин.

### Путь к приложению dist/client изменился.

Если вы настраиваете nginx самостоятельно, вам нужно будет выполнить аналогичную настройку

```diff
server {
- root /app/nocobase/packages/app/client/dist;
+ root /app/nocobase/node_modules/@nocobase/app/dist/client;

  location / {
-       root /app/nocobase/packages/app/client/dist;
+       root /app/nocobase/node_modules/@nocobase/app/dist/client;
        try_files $uri $uri/ /index.html;
        add_header Last-Modified $date_gmt;
        add_header Cache-Control 'no-store, no-cache';
        if_modified_since off;
        expires off;
        etag off;
    }
}
```

### Необходимо перестроить плагины сторонних производителей

Обратитесь к руководству по обновлению плагинов сторонних производителей, приведенному ниже

## Руководство по обновлению плагинов сторонних производителей

### В каталоге плагинов должны быть каталоги `src/client` и `src/server`.

```js
// src/client/index.ts
import { Plugin } from '@nocobase/client';

class MyPlugin extends Plugin {
  async load() {
    // ...
  }
}

export default MyPlugin;
```

```js
// src/server/index.ts
import { Plugin } from '@nocobase/server';

class MyPlugin extends Plugin {
  async load() {
    // ...
  }
}

export default MyPlugin;
```

Конкретный демонстрационный код можно найти по ссылке: [пример-привет](https://github.com/nocobase/nocobase/tree/main/packages/samples/hello)

### Каталог многоязычного размещения плагина `src/locale`

Файлы многоязычных переводов как для внешнего, так и для внутреннего интерфейса размещаются в каталоге `src/locale`, поэтому плагину не нужно загружать многоязычные пакеты самостоятельно.

### Настройка зависимостей плагина

Зависимости плагина делятся на его собственные зависимости и глобальные зависимости. Глобальные зависимости напрямую используются во всем мире и не будут включены в продукт плагина, в то время как его собственные зависимости будут включены в продукт. После сборки подключаемого модуля производственная среда становится доступной по принципу "подключай и работай", и нет необходимости устанавливать зависимости или выполнять сборку дважды. Настройки зависимостей подключаемого модуля включают:

- Поместите связанные пакеты `@nocobase/*` в "peerDependencies" и укажите номер версии как `0.x`.;
- Поместите другие зависимости в поле `devDependencies`, а не `dependencies`, так как плагин извлечет все зависимости, необходимые производственной среде, после упаковки.

```diff
{
  "devDependencies": {
    "@formily/react": "2.x",
    "@formily/shared": "2.x",
    "ahooks": "3.x",
    "antd": "5.x",
    "dayjs": "1.x",
    "i18next": "22.x",
    "react": "18.x",
    "react-dom": "18.x",
    "react-i18next": "11.x"
  },
  "peerDependencies": {
    "@nocobase/actions": "0.x",
    "@nocobase/client": "0.x",
    "@nocobase/database": "0.x",
    "@nocobase/resourcer": "0.x",
    "@nocobase/server": "0.x",
    "@nocobase/test": "0.x",
    "@nocobase/utils": "0.x"
  }
}
```

### Выходной путь плагина был изменен с `lib` на `dist`

Структура каталогов dist:

```bash
|- dist
  |- client       # Клиентская сторона, umd
    |- index.js
    |- index.d.ts
  |- server       # Серверная часть, cjs
    |- index.js
    |- index.d.ts
    |- others
  |- locale       # многоязычный пакет
  |- node_modules # зависимости от сервера
```

Другие связанные с этим изменения включают в себя:

Изменение основного параметра package.json

```diff
{
  - "main": "./lib/server/index.js",
  + "main": "./dist/server/index.js",
}
```

client.d.ts

```ts
export * from './dist/client';
export { default } from './dist/client';
```

client.js

```js
module.exports = require('./dist/client/index.js');
```

server.d.ts

```ts
export * from './dist/server';
export { default } from './dist/server';
```

server.js

```js
module.exports = require('./dist/server/index.js');
```
