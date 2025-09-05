# Замена страницы

## Описание

Сценарий, при котором необходимо изменить макет существующей страницы или полностью заменить её содержимое.

## Описание примера

Нам нужно настроить макет страниц входа и регистрации. В настоящее время эти страницы содержат только форму, но мы хотим изменить их на макет с двумя колонками: слева — изображение, справа — форма.

Полный код примера доступен в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-replace-page).

![20240512200917](https://static-docs.nocobase.com/20240512200917.png)

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
yarn pm create @nocobase-sample/plugin-replace-page
yarn pm enable @nocobase-sample/plugin-replace-page
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы убедиться, что плагин установлен и активирован.

## Реализация функциональности

### 1. Анализ требований и исходного кода

Страницы входа и регистрации регистрируются плагином [Auth plugin](/handbook/auth/dev/api#route), который определяет следующие маршруты:

- Макет авторизации
  - имя: `auth`
  - путь: `-`
  - компонент: `AuthLayout`

- Страница входа
  - имя: `auth.signin`
  - путь: `/signin`
  - компонент: `SignInPage`

- Страница регистрации
  - имя: `auth.signup`
  - путь: `/signup`
  - компонент: `SignUpPage`

`AuthLayout` — это макет для страниц входа и регистрации. Мы можем настроить макет, заменив `AuthLayout`.

Для реализации необходимо изучить исходный код оригинального [AuthLayout](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-auth/src/client/pages/AuthLayout.tsx):

```tsx | pure
export function AuthLayout() {
  const { data } = useSystemSettings();

  return (
    <div
      style={{
        maxWidth: 320,
        margin: '0 auto',
        paddingTop: '20vh',
      }}
    >
      <h1>{data?.data?.title}</h1>
      <AuthenticatorsContextProvider>
        <Outlet />
      </AuthenticatorsContextProvider>
      <div
        className={css`
          position: absolute;
          bottom: 24px;
          width: 100%;
          left: 0;
          text-align: center;
        `}
      >
        <PoweredBy />
      </div>
    </div>
  );
}
```

Исходный код относительно прост. Нам нужно реализовать макет с двумя сторонами: слева — изображение, справа — формы входа и регистрации. Мы можем либо скопировать существующий `AuthLayout` и разместить его справа, либо импортировать оригинальный `AuthLayout` и добавить изображение слева.

### 2. Реализация пользовательского компонента AuthLayout

Создайте файл `packages/plugins/@nocobase-sample/plugin-replace-page/src/client/AuthLayout.tsx` со следующим содержимым:

```tsx | pure
import React from 'react';
import { Col, Row } from 'antd';
import { Outlet } from 'react-router-dom';
import { PoweredBy, css, useSystemSettings } from '@nocobase/client';
import { AuthenticatorsContextProvider } from '@nocobase/plugin-auth/client'

import authImg from './auth-image.jpg'

export function CustomAuthLayout() {
  const { data } = useSystemSettings();

  return <Row style={{ height: '100%' }}>
    <Col xs={{ span: 0 }} md={{ span: 12 }}>
      <img src={authImg} style={{
        objectFit: 'cover',
        objectPosition: 'center',
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        display: 'block',
        verticalAlign: 'middle'
      }} />
    </Col>
    <Col xs={{ span: 24 }} md={{ span: 12 }}>
      <div
        style={{
          maxWidth: 320,
          margin: '0 auto',
          paddingTop: '20vh',
        }}
      >
        <h1>{data?.data?.title}</h1>
        <AuthenticatorsContextProvider>
          <Outlet />
        </AuthenticatorsContextProvider>
        <div
          className={css`
          position: absolute;
          bottom: 24px;
          width: 100%;
          left: 0;
          text-align: center;
        `}
        >
          <PoweredBy />
        </div>
      </div>
    </Col>
  </Row>
}
```

Поместите изображение для левой части [auth-image.jpg](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-replace-page/src/client/auth-image.jpg) в директорию `packages/plugins/@nocobase-sample/plugin-replace-page/src/client`.

Это завершает реализацию страницы входа с двухколоночным макетом.

### 3. Замена `AuthLayout` на `CustomAuthLayout`

Далее необходимо импортировать и использовать `CustomAuthLayout` в файле `packages/plugins/@nocobase-sample/plugin-replace-page/src/client/index.tsx`.

Существует два способа замены `AuthLayout`: через переопределение маршрута и через переопределение компонента.

#### Переопределение маршрута

Как упомянуто ранее, имя маршрута для `AuthLayout` — `auth`. Мы можем переопределить его с помощью маршрутов:

```ts
import { Plugin } from '@nocobase/client';
import { CustomAuthLayout } from './AuthLayout';

export class PluginReplacePageClient extends Plugin {
  async load() {
    this.app.router.add('auth', {
      Component: CustomAuthLayout,
    })
  }
}

export default PluginReplacePageClient;
```

Первый параметр метода `router.add()` — это имя маршрута. Если маршрут добавляется повторно, он перезапишет существующий маршрут.

#### Переопределение компонента

```ts
import { Plugin } from '@nocobase/client';
import { CustomAuthLayout } from './AuthLayout';

export class PluginChangePageClient extends Plugin {
  async load() {
   this.app.addComponents({ AuthLayout: CustomAuthLayout })
  }
}
```

Важно отметить, что этот метод переопределения работает только при использовании *строкового компонента* для регистрации маршрута. Например, исходный код [плагина auth](https://github.com/nocobase/nocobase/blob/cff530acac45cc615291c344b4a26c7bc7f410dc/packages/plugins/%40nocobase/plugin-auth/src/client/index.tsx#L47) выглядит следующим образом:

```ts
this.app.router.add('auth', {
  Component: 'AuthLayout',
})

this.app.addComponents({ AuthLayout })
```

Если исходный код плагина `auth` зарегистрирован следующим образом, переопределение не сработает:

```ts
this.app.router.add('auth', {
  Component: AuthLayout,
})
```

Выйдите из системы и перейдите по адресу [http://localhost:13000/signin](http://localhost:13000/signin), чтобы увидеть измененный макет страницы входа.

![20240512200917](https://static-docs.nocobase.com/20240512200917.png)

## Сборка и развертывание в продакшен

Следуйте инструкциям из документации [Сборка и упаковка плагинов](/development/your-fisrt-plugin#building-and-packaging-plugins), чтобы упаковать плагин и загрузить его в продакшен.

Для клонированного исходного кода выполните полную сборку, чтобы собрать зависимости плагина:

```bash
yarn build
```

Для проекта, созданного с помощью `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-replace-page --tar
```

В результате будет создан файл `storage/tar/@nocobase-sample/plugin-replace-page.tar.gz`, который можно установить с помощью [метода загрузки](/welcome/getting-started/plugin).
