# Добавление страницы настроек плагина (один маршрут)

## Описание

Плагину требуется простая страница настроек с одним маршрутом.

## Описание примера

Предположим, мы интегрируемся с сторонним почтовым сервисом и нам нужно настроить токен этого сервиса. Для этого требуется страница настроек.

Этот документ не углубляется в детали разработки, а лишь демонстрирует, как добавить страницу настроек плагина. Для конкретного содержимого и логики страницы настроек обратитесь к документации [Пример плагина настроек](/plugin-samples/plugin-settings).

Полный код примера доступен в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-setting-page-single-route).

![20240512201126](https://static-docs.nocobase.com/20240512201126.png)

## Инициализация плагина

Следуйте инструкциям из документации [Создание первого плагина](/development/your-fisrt-plugin). Если у вас нет проекта, создайте его. Если проект уже существует или вы клонировали исходный код, пропустите этот шаг.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Инициализируйте плагин и добавьте его в систему:

```bash
yarn pm create @nocobase-sample/plugin-add-setting-page-single-route
yarn pm enable @nocobase-sample/plugin-add-setting-page-single-route
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы убедиться, что плагин установлен и активирован.

## Реализация функциональности

Согласно руководству по разработке плагинов [Расширение страницы настроек плагина](/development/client/router#extending-plugin-settings-page), необходимо обновить файл `packages/plugins/@nocobase-sample/plugin-add-setting-page-single-route/src/client/index.tsx`:

```ts
import React from 'react';
import { Plugin } from '@nocobase/client';

// @ts-ignore
import { name } from '../../package.json';

const MySettingPage = () => <div>Hello Setting page</div>;

export class PluginAddSettingPageSingleRouteClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Single Route',
      icon: 'ApiOutlined',
      Component: MySettingPage,
    });
  }
}

export default PluginAddSettingPageSingleRouteClient;
```

- `name`: Имя плагина, используемое для уникальной идентификации плагина.
- `title`: Заголовок меню страницы настроек плагина.
- `icon`: Иконка меню страницы настроек плагина. Дополнительные иконки можно найти в [Ant Design Icons](https://ant.design/components/icon/).
- `Component`: Содержимое страницы настроек.

Перейдите по адресу [http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-single-route](http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-single-route), чтобы просмотреть страницу настроек плагина.

![20240512201126](https://static-docs.nocobase.com/20240512201126.png)

## Настройка прав доступа

По умолчанию страница настроек плагина не имеет ограничений по доступу, и любой пользователь может получить к ней доступ и изменять настройки. Чтобы настроить права доступа, необходимо задать их в настройках плагина.

Перейдите по адресу [http://localhost:13000/admin/settings/users-permissions/roles](http://localhost:13000/admin/settings/users-permissions/roles), чтобы просмотреть все роли и настроить права доступа в настройках плагина.

![20240512201234](https://static-docs.nocobase.com/20240512201234.png)

## Сборка и развертывание в продакшен

Следуйте инструкциям из документации [Сборка и упаковка плагинов](/development/your-fisrt-plugin#building-and-packaging-plugins), чтобы упаковать плагин и загрузить его в продакшен.

Для клонированного исходного кода выполните полную сборку, чтобы собрать зависимости плагина:

```bash
yarn build
```

Для проекта, созданного с помощью `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-add-setting-page-single-route --tar
```

В результате будет создан файл `storage/tar/@nocobase-sample/plugin-add-setting-page-single-route.tar.gz`, который можно установить с помощью [метода загрузки](/welcome/getting-started/plugin).
