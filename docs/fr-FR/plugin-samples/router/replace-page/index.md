# Replace Page

## Description

Scene where the layout of an existing page needs to be changed or the entire content of the page needs to be replaced.

## Example Description

We need to customize the layout of the login and registration pages. Currently, there is only a form, but we want to change it to a left-right layout, with an image on the left and the form on the right.

You can find the complete example code for this documentation in the [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-replace-page) repository.

![20240512200917](https://static-docs.nocobase.com/20240512200917.png)

## Initialize the Plugin

Following the instructions in the [Writing Your First Plugin](/development/your-fisrt-plugin) documentation, if you don't have a project yet, you can create one. If you already have one or have cloned the source code, you can skip this step.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Then initialize a plugin and add it to the application:

```bash
yarn pm create @nocobase-sample/plugin-replace-page
yarn pm enable @nocobase-sample/plugin-replace-page
```

Then start the project:

```bash
yarn dev
```

Then, after logging in, visit [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) to see that the plugin has been installed and enabled.

## Function Implementation

### 1. Analyzing Requirements and Source Code

The login and registration pages are registered by the [Auth plugin](/handbook/auth/dev/api#route), which registers the following routes:

- Auth layout
  - name: `auth`
  - path: `-`
  - component: `AuthLayout`

- Sign-in page
  - name: `auth.signin`
  - path: `/signin`
  - component: `SignInPage`

- Sign-up page
  - name: `auth.signup`
  - path: `/signup`
  - component: `SignUpPage`

The `AuthLayout` is the layout for the entire login and registration pages. We can achieve custom layout by replacing the `AuthLayout`.

To understand how to implement this, we need to refer to the source code of the original [AuthLayout](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-auth/src/client/pages/AuthLayout.tsx).

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

The overall source code is relatively simple. What we need to implement is a layout with a left and right side. The left side will contain an image, and the right side will contain the login and registration forms. We can either copy the existing `AuthLayout` and place it on the right side, or directly import the original `AuthLayout` and place an image on the left side.

### 2. Implementing Custom AuthLayout Component

We create `packages/plugins/@nocobase-sample/plugin-replace-page/src/client/AuthLayout.tsx` with the following content:

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

Then place the left background image [auth-image.jpg](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-replace-page/src/client/auth-image.jpg) in the `packages/plugins/@nocobase-sample/plugin-replace-page/src/client` directory.

This completes the implementation of a login page with a left and right layout.

### 3. Replacing `AuthLayout` with `CustomAuthLayout`

Next, we need to import and use `CustomAuthLayout` in `packages/plugins/@nocobase-sample/plugin-replace-page/src/client/index.tsx`.

There are two ways to replace `AuthLayout`: through route override and component override.

#### Route Override

As mentioned earlier, the route name for `AuthLayout` is `auth`. We can override it using routes:

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

The first parameter of the `router.add()` method is the name of the route. If it is added repeatedly, it will override the existing route.

#### Component Override Method

```ts
import { Plugin } from '@nocobase/client';
import { CustomAuthLayout } from './AuthLayout';

export class PluginChangePageClient extends Plugin {
  async load() {
   this.app.addComponents({ AuthLayout: CustomAuthLayout })
  }
}
```

It should be noted that this method of overriding must be done using *string Component* to register the route. For example, the source code of the [auth plugin](https://github.com/nocobase/nocobase/blob/cff530acac45cc615291c344b4a26c7bc7f410dc/packages/plugins/%40nocobase/plugin-auth/src/client/index.tsx#L47) is as follows:

```ts
this.app.router.add('auth', {
  Component: 'AuthLayout',
})

this.app.addComponents({ AuthLayout })
```

If the source code of the `auth` plugin is registered in the following way, it cannot be overridden:

```ts
this.app.router.add('auth', {
  Component: AuthLayout,
})
```

Then we log out and visit [http://localhost:13000/signin](http://localhost:13000/signin) to see that the layout of the login page has been changed.

![20240512200917](https://static-docs.nocobase.com/20240512200917.png)

## Packaging and Uploading to Production Environment

According to the documentation on [Building and Packaging Plugins](/development/your-fisrt-plugin#building-and-packaging-plugins), we can package the plugin and upload it to the production environment.

If you have cloned the source code, you need to perform a full build first to build the dependencies of the plugin as well.

```bash
yarn build
```

If you are using `create-nocobase-app` to create your project, you can directly execute:

```bash
yarn build @nocobase-sample/plugin-replace-page --tar
```

This way, you can see the `storage/tar/@nocobase-sample/plugin-replace-page.tar.gz` file, and then install it using the [upload method](/welcome/getting-started/plugin).
