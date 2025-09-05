# Добавление страницы настроек плагина (разные макеты)

## Описание

Плагину требуется несколько страниц настроек, некоторые из которых не используют макет [AdminSettingsLayout](/development/client/router#existing-page-routes), обычно для страниц с деталями, например, в плагинах `@nocobase/plugin-mobile-client` или `@nocobase/plugin-workflow`.

## Описание примера

В этом примере будет создана страница настроек, внутри которой будет ссылка на страницу с деталями, переход на которую осуществляется при клике.

Этот документ не углубляется в детали разработки содержимого. Он предназначен только для демонстрации добавления страницы настроек плагина. Для конкретного содержимого и логики страницы настроек обратитесь к документации [Пример плагина настроек](/plugin-samples/plugin-settings).

Полный код примера доступен в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-setting-page-layout-routes).

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/10.mp4" type="video/mp4">
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
yarn pm create @nocobase-sample/plugin-add-setting-page-layout-routes
yarn pm enable @nocobase-sample/plugin-add-setting-page-layout-routes
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы убедиться, что плагин установлен и активирован.

## Реализация функциональности

### 1. Регистрация страницы настроек плагина

Согласно руководству по разработке плагинов [Расширение страницы настроек плагина](/development/client/router#plugin-setting-page-extension), необходимо обновить файл `packages/plugins/@nocobase-sample/plugin-add-setting-page-layout-routes/src/client/index.tsx`:

```tsx | pure
import React from 'react';
import { Plugin } from '@nocobase/client';

// @ts-ignore
import { name } from '../../package.json';

const PluginSettingPage = () => <div>
  details
</div>

export class PluginAddSettingPageLayoutRoutesClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Different Layout',
      icon: 'ApiOutlined',
      Component: PluginSettingPage,
    });
  }
}

export default PluginAddSettingPageLayoutRoutesClient;
```

Перейдите по адресу [http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-layout-routes](http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-layout-routes), чтобы просмотреть страницу настроек плагина.

### 2. Добавление страницы с деталями

Мы добавим страницу с деталями под `AdminLayout`. Обновите файл `packages/plugins/@nocobase-sample/plugin-add-setting-page-layout-routes/src/client/index.tsx`:

```diff
+ import { Link } from 'react-router-dom'

const PluginSettingPage = () => <div>
- details
+ <Link to={`/admin/${name}-detail`}>details</Link>
</div>

export class PluginAddSettingPageLayoutRoutesClient extends Plugin {
  async load() {
    // ...
+   this.app.router.add(`admin.${name}-details`, {
+     path: `/admin/${name}-detail`,
+     Component: () => <div>detail</div>,
+   });
  }
}
```

При клике на ссылку `details` произойдет переход на страницу `/admin/@nocobase-sample/plugin-add-setting-page-layout-routes-detail`.

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/10.mp4" type="video/mp4">
</video>

## Настройка прав доступа

По умолчанию страница настроек плагина не имеет ограничений по доступу, и любой пользователь может получить к ней доступ и изменять настройки. Чтобы настроить права доступа, необходимо задать их в настройках плагина.

Перейдите по адресу [http://localhost:13000/admin/settings/users-permissions/roles](http://localhost:13000/admin/settings/users-permissions/roles), чтобы просмотреть все роли и настроить права доступа в настройках плагина.

![20240512201624](https://static-docs.nocobase.com/20240512201624.png)

## Сборка и развертывание в продакшен

Следуйте инструкциям из документации [Сборка и упаковка плагинов](/development/your-fisrt-plugin#building-and-packaging-plugins), чтобы упаковать плагин и загрузить его в продакшен.

Для клонированного исходного кода выполните полную сборку, чтобы собрать зависимости плагина:

```bash
yarn build
```

Для проекта, созданного с помощью `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-add-setting-page-layout-routes --tar
```

В результате будет создан файл `storage/tar/@nocobase-sample/plugin-add-setting-page-layout-routes.tar.gz`, который можно установить с помощью [метода загрузки](/welcome/getting-started/plugin).
