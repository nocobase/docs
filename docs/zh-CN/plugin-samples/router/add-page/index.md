# 新增页面

## 场景说明

新增一些页面，用于个性化的展示。

## 示例说明

本示例会新增 4 个页面，分别为：

- `/about`：关于页面，用于展示系统的相关信息，不需要登录即可访问
- `/admin/data-view`：数据大屏页面，需要登录后才能访问
- `/admin/material-manage`：素材管理中心，包含图片和视频管理，是一个父路由页面
  - `/admin/material-manage/image`：图片管理
  - `/admin/material-manage/video`：视频管理

但不会对内容过多开发，仅用于演示如何新增页面。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-page) 中查看。

## 初始化插件

我们按照 [编写第一个插件](/development/your-fisrt-plugin) 文档说明，如果没有一个项目，可以先创建一个项目，如果已经有了或者是 clone 的源码，则跳过这一步。

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

然后初始化一个插件，并添加到系统中：

```bash
yarn pm create @nocobase-sample/plugin-add-page
yarn pm enable @nocobase-sample/plugin-add-page
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。


## 实现功能

### 第 1 步：新增 `/about` 页面

按照插件开发教程中 [页面路由及扩展](/development/client/router)，我们需要修改插件的 `packages/plugins/@nocobase-sample/plugin-add-page/src/client/index.tsx`：

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

其中 `router.add()` 第一个参数是页面的名称，仅用于增删改查和层级嵌套，第二个参数是页面的配置，其中 `path` 是页面的路径，`Component` 是页面的组件。

`useDocumentTitle()` 用于修改页面的标题。

然后我们访问 [http://localhost:13000/about](http://localhost:13000/about) 就可以看到页面上已经显示了 `About Page` 了。

![20240512200508](https://static-docs.nocobase.com/20240512200508.png)

### 第 2 步：新增 `/admin/data-view` 页面

根据 [已有页面路由](/development/client/router#已有页面路由) 文档得知，`/admin/*` 对应的 `name` 为 `admin`，如果我们需要再其下面新增一个页面，可以使用 `admin.` 前缀，例如 `admin.dataView`。

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

然后我们访问 [http://localhost:13000/admin/data-view](http://localhost:13000/admin/data-view) 就可以看到页面上已经显示了 `DataView` 了，并且如果退出登录后再访问，会跳转到登录页。

![20240512200555](https://static-docs.nocobase.com/20240512200555.png)

### 第 3 步：新增 `/admin/material-manage` 以及其子页面

我们可以新建 `packages/plugins/@nocobase-sample/plugin-add-page/src/client/MaterialPage.tsx` 文件，其内容如下：

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

然后在 `packages/plugins/@nocobase-sample/plugin-add-page/src/client/index.tsx` 中引入并使用：

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

如果 `MaterialPage` 作为父级页面不需要自定义布局，则可以省略 `Component` 属性。

```ts
this.app.router.add('admin.material', {
  path: '/admin/material',
})
```

然后我们访问 [http://localhost:13000/admin/material](http://localhost:13000/admin/material) 就可以看到页面上已经显示了 `Material Page` 了，并且点击 `Video` 和 `Img` 链接可以切换到对应的页面。

<video width="100%" controls>
      <source src="https://static-docs.nocobase.com/3.mp4" type="video/mp4">
</video>

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-add-page --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-add-page.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
