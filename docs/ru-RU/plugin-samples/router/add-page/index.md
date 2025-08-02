# Добавление страницы

## Описание

Добавление страниц для персонализированного отображения.

## Описание примера

В этом примере будут добавлены 4 страницы:

- `/about`: Страница "О нас", предназначенная для отображения информации о системе, доступна без входа в систему.
- `/admin/data-view`: Страница дашборда данных, требует входа в систему.
- `/admin/material-manage`: Центр управления материалами, включающий управление изображениями и видео, является родительской страницей маршрута.
  - `/admin/material-manage/image`: Управление изображениями.
  - `/admin/material-manage/video`: Управление видео.

Однако разработка содержимого страниц будет минимальной и предназначена только для демонстрации.

Полный код примера доступен в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-page).

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
yarn pm create @nocobase-sample/plugin-add-page
yarn pm enable @nocobase-sample/plugin-add-page
```

Запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы убедиться, что плагин установлен и активирован.

## Реализация функциональности

### 1. Добавление страницы `/about`

Согласно документации [Маршрутизация и расширение страниц](/development/client/router), необходимо обновить файл `packages/plugins/@nocobase-sample/plugin-add-page/src/client/index.tsx`:

```ts
import React, { useEffect } from 'react';
import { Plugin, useDocumentTitle } from '@nocobase/client';

const AboutPage = () => {
  const { setTitle } = useDocumentTitle();

  useEffect(() => {
    setTitle('About');
  }, [])

  return <div>About Page</div>;
}

export class PluginAddPageClient extends Plugin {
  async load() {
    this.app.router.add('about', {
      path: '/about',
      Component: AboutPage,
    })
  }
}

export default PluginAddPageClient;
```

Функция `router.add()` принимает два параметра. Первый параметр — это имя страницы, используемое для операций CRUD и иерархического вложения. Второй параметр — конфигурация страницы, где `path` — это путь страницы, а `Component` — компонент страницы.

`useDocumentTitle()` используется для изменения заголовка страницы.

При посещении [http://localhost:13000/about](http://localhost:13000/about) отобразится страница с текстом "About Page".

![20240512200508](https://static-docs.nocobase.com/20240512200508.png)

### 2. Добавление страницы `/admin/data-view`

Согласно документации [Существующие маршруты страниц](/development/client/router#existing-page-routes), известно, что `/admin/*` соответствует имени `admin`. Чтобы добавить новую страницу под этим маршрутом, можно использовать префикс `admin.`, например `admin.dataView`.

```tsx | pure
// ...
const DataViewPage = () => {
  const { setTitle } = useDocumentTitle();

  useEffect(() => {
    setTitle('DataView');
  }, [])

  return <div>DataView</div>
};

export class PluginAddPageClient extends Plugin {
  async load() {
    // ...
    this.app.router.add('admin.dataView', {
      path: '/admin/data-view',
      Component: DataViewPage,
    })
  }
}

export default PluginAddPageClient;
```

При посещении [http://localhost:13000/admin/data-view](http://localhost:13000/admin/data-view) отобразится страница с текстом "DataView". Если попытаться зайти на эту страницу после выхода из системы, произойдет перенаправление на страницу входа.

![20240512200555](https://static-docs.nocobase.com/20240512200555.png)

### 3. Добавление страницы `/admin/material-manage` и её подстраниц

Создайте файл `packages/plugins/@nocobase-sample/plugin-add-page/src/client/MaterialPage.tsx` со следующим содержимым:

```tsx | pure
import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDocumentTitle } from '@nocobase/client';

export const MaterialPage = () => {
  return <div>
    <h1>Material Page</h1>
    <ul>
      <li>
        <Link to="video">Video</Link>
      </li>
      <li>
        <Link to="img">Img</Link>
      </li>
    </ul>
    <Outlet />
  </div>
}

export const MaterialVideo = () => {
  const { setTitle } = useDocumentTitle();

  useEffect(() => {
    setTitle('Material Video');
  }, [])

  return <div>Material Video</div>
}
export const MaterialImg = () => {
  const { setTitle } = useDocumentTitle();

  useEffect(() => {
    setTitle('Material Img');
  }, [])

  return <div>Material Img</div>;
}
```

Затем в файле `packages/plugins/@nocobase-sample/plugin-add-page/src/client/index.tsx` импортируйте и используйте:

```ts
// ...
import { MaterialImg, MaterialPage, MaterialVideo } from './MaterialPage';

export class PluginAddPageClient extends Plugin {
  async load() {
    // ...

    this.app.router.add('admin.material', {
      path: '/admin/material',
      Component: MaterialPage,
    })

    this.app.router.add('admin.material.video', {
      path: '/admin/material/video',
      Component: MaterialVideo,
    })

    this.app.router.add('admin.material.img', {
      path: '/admin/material/img',
      Component: MaterialImg,
    })
  }
}
```

Если `MaterialPage` используется как родительская страница и не требует пользовательского макета, свойство `Component` можно опустить:

```ts
this.app.router.add('admin.material', {
  path: '/admin/material',
})
```

При посещении [http://localhost:13000/admin/material](http://localhost:13000/admin/material) отобразится страница `Material Page`, а при клике на ссылки `Video` и `Img` можно переключиться на соответствующие подстраницы.

<video width="100%" controls>
      <source src="https://static-docs.nocobase.com/3.mp4" type="video/mp4">
</video>

## Сборка и развертывание в продакшен

Согласно документации [Сборка и упаковка плагинов](/development/your-fisrt-plugin#building-and-packaging-plugins), можно упаковать плагин и загрузить его в продакшен.

Для клонированного исходного кода выполните полную сборку, чтобы собрать зависимости плагина:

```bash
yarn build
```

Для проекта, созданного с помощью `create-nocobase-app`, выполните:

```bash
yarn build @nocobase-sample/plugin-add-page --tar
```

В результате будет создан файл `storage/tar/@nocobase-sample/plugin-add-page.tar.gz`, который можно установить с помощью [метода загрузки](/welcome/getting-started/plugin).
