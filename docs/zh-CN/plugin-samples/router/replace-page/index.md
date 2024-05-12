# 替换页面

## 场景说明

需要更改已有页面的布局或者直接替换整个页面的内容的场景。

## 示例说明

我们需要定制登录和注册页面的布局，目前是只有一个表单，我们需要改为左右布局，左侧是一个图片，右侧是表单。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-replace-page) 中查看。

![20240512200917](https://static-docs.nocobase.com/20240512200917.png)

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
yarn pm create @nocobase-sample/plugin-replace-page
yarn pm enable @nocobase-sample/plugin-replace-page
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 实现功能

### 1. 分析需求和源码

登录和注册页面是由 [Auth 插件](/handbook/auth/dev/api#route)注册的，其注册了如下路由：

- Auth 布局
  - name: `auth`
  - path: `-`
  - component: `AuthLayout`

- 登录页
  - name: `auth.signin`
  - path: `/signin`
  - component: `SignInPage`

- 注册页
  - name: `auth.signup`
  - path: `/signup`
  - component: `SignUpPage`

其中 `AuthLayout` 是整个登录和注册页的布局，我们可以通过替换 `AuthLayout` 来实现自定义布局。

关于如何实现，我们是需要参考原 [AuthLayout](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-auth/src/client/pages/AuthLayout.tsx) 的源码。

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

源码整体来说还是比较简单的，我们需要实现的是左右布局，左侧是一个图片，右侧是登录和注册的表单，那么可以直接把现有的 `AuthLayout` 拷贝过来放在右侧或者是直接导入原 `AuthLayout`，然后在左侧放一个图片即可。

### 2. 实现自定义的 AuthLayout 组件

我们新建 `packages/plugins/@nocobase-sample/plugin-replace-page/src/client/AuthLayout.tsx`，其内容如下：

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

然后将左侧背景图 [auth-image.jpg](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-replace-page/src/client/auth-image.jpg) 放到 `packages/plugins/@nocobase-sample/plugin-replace-page/src/client` 目录下。

这样就实现了一个左右布局的登录页。


### 3. 使用 `CustomAuthLayout` 替换 `AuthLayout`

然后我们需要在 `packages/plugins/@nocobase-sample/plugin-replace-page/src/client/index.tsx` 中引入 `CustomAuthLayout` 并使用。

我们有 2 种方式实现替换 `AuthLayout`，一种方式是通过[路由的覆盖](/development/client/router#常规页面扩展)，另一种方式是通过[组件的覆盖](/development/client/ui-schema/rendering#注册-components-和-scopes)。

#### 路由覆盖的方式

上面已经介绍过了 `AuthLayout` 对应的路由名称是 `auth`，我们可以通过路由的方式进行覆盖：

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

其中 `router.add()` 方法的第一个参数是路由的名称，如果重复添加会覆盖原有的路由。

#### 组件覆盖的方式

```ts
import { Plugin } from '@nocobase/client';
import { CustomAuthLayout } from './AuthLayout';

export class PluginChangePageClient extends Plugin {
  async load() {
   this.app.addComponents({ AuthLayout: CustomAuthLayout })
  }
}
```

需要注意的是这种方式的覆盖必须是采用 *字符串 Component* 注册的路由，例如[auth 插件的源码](https://github.com/nocobase/nocobase/blob/cff530acac45cc615291c344b4a26c7bc7f410dc/packages/plugins/%40nocobase/plugin-auth/src/client/index.tsx#L47)如下：

```ts
this.app.router.add('auth', {
  Component: 'AuthLayout',
})

this.app.addComponents({ AuthLayout })
```

如果是 auth 插件的源码是安装如下方式注册的，则无法覆盖：

```ts
this.app.router.add('auth', {
  Component: AuthLayout,
})
```

然后我们退出登录，访问 [http://localhost:13000/signin](http://localhost:13000/signin) 就可以看到登录页的布局已经改变了。

![20240512200917](https://static-docs.nocobase.com/20240512200917.png)

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-replace-page --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-replace-page.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
