# Добавление страниц настроек плагина (несколько вкладок)

## Описание

Плагину требуется несколько страниц настроек, каждая из которых соответствует отдельной вкладке.

## Описание примера

Предположим, мы интегрируемся с сторонним почтовым сервисом и нам нужно настроить токен для этого сервиса. Также требуется страница для настройки шаблонов писем. В этом случае нам нужна страница настроек с двумя вкладками.

Этот документ не углубляется в детали разработки содержимого страниц. Он предназначен только для демонстрации добавления страницы настроек плагина. Для конкретного содержимого и логики страниц настроек обратитесь к документации [Пример плагина настроек](/plugin-samples/plugin-settings).

Полный код примера доступен в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-setting-page-tabs-routes).

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/7.mp4" type="video/mp4">
</video>

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
yarn pm create @nocobase-sample/plugin-add-setting-page-tabs-routes
yarn pm enable @nocobase-sample/plugin-add-setting-page-tabs-routes
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы убедиться, что плагин установлен и активирован.

## Реализация функциональности

Согласно руководству по разработке плагинов [Расширение страницы настроек плагина](/development/client/router#extending-plugin-settings-page), необходимо обновить файл `packages/plugins/@nocobase-sample/plugin-add-setting-page-tabs-routes/src/client/index.tsx`:

```tsx | pure
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Plugin } from '@nocobase/client';

// @ts-ignore
import { name } from '../../package.json';

const TokenPage = () => <div>Token Page</div>

const TemplatePage = () => <div>Template Page</div>

export class PluginAddSettingPageTabsRoutesClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Tabs Routes',
      icon: 'ApiOutlined',
      Component: Outlet, // Может быть опущено или использован пользовательский компонент
    });

    this.app.pluginSettingsManager.add(`${name}.token`, {
      title: 'Token Page',
      Component: TokenPage,
      sort: 1,
    });

    this.app.pluginSettingsManager.add(`${name}.template`, {
      title: 'Template Page',
      Component: TemplatePage,
      sort: 2,
    });

    this.app.pluginSettingsManager.add(`${name}.nestedRoute`, {
      title: 'Test',
      Component: Outlet, // Может быть опущено или использован пользовательский компонент
      sort: 3,
    });

    this.app.pluginSettingsManager.add(`${name}.nestedRoute.a`, {
      title: 'Test A',
      Component: () => <div>Test A page</div>
    });

    this.app.pluginSettingsManager.add(`${name}.nestedRoute.b`, {
      title: 'Test B',
      Component: () => <div>Test B page</div>
    });
  }
}

export default PluginAddSettingPageTabsRoutesClient;
```

В сценариях с несколькими страницами настроек атрибут `name` метода `pluginSettingsManager.add()` должен разделяться точкой (`.`). Например, `pluginName.pageName` позволяет реализовать несколько страниц настроек в виде вкладок.

Перейдите по адресу [http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-tabs-routes](http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-tabs-routes), чтобы просмотреть страницу настроек плагина.

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/7.mp4" type="video/mp4">
</video>

## Настройка прав доступа

По умолчанию страница настроек плагина не имеет ограничений по доступу, и любой пользователь может получить к ней доступ и изменять настройки. Чтобы настроить права доступа, необходимо задать их в настройках плагина.

Перейдите по адресу [http://localhost:13000/admin/settings/users-permissions/roles](http://localhost:13000/admin/settings/users-permissions/roles), чтобы просмотреть все роли и настроить права доступа в настройках плагина.

![20240512201446](https://static-docs.nocobase.com/20240512201446.png)

## Сборка и развертывание в продакшен

Следуйте инструкциям из документации [Сборка и упаковка плагинов](/development/your-fisrt-plugin#building-and-packaging-plugins), чтобы упаковать плагин и загрузить его в продакшен.

Для клонированного исходного кода выполните полную сборку, чтобы собрать зависимости плагина:

```bash
yarn build
```

Для проекта, созданного с помощью `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-add-setting-page-tabs-routes --tar
```

В результате будет создан файл `storage/tar/@nocobase-sample/plugin-add-setting-page-tabs-routes.tar.gz`, который можно установить с помощью [метода загрузки](/welcome/getting-started/plugin).
