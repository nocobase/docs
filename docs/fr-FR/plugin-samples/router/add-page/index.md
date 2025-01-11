# Add Page

## Description

Add some pages for personalized display.

## Example Description

This example will add 4 pages:

- `/about`: About page, used to display system-related information, accessible without logging in.
- `/admin/data-view`: Data dashboard page, requires login to access.
- `/admin/material-manage`: Material management center, including image and video management, is a parent route page.
  - `/admin/material-manage/image`: Image management.
  - `/admin/material-manage/video`: Video management.

However, the content development will not be extensive, only for demonstration purposes.

You can find the complete example code in the [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-page) repository.

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
yarn pm create @nocobase-sample/plugin-add-page
yarn pm enable @nocobase-sample/plugin-add-page
```

Then start the project:

```bash
yarn dev
```

Then, after logging in, visit [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) to see that the plugin has been installed and enabled.

## Function Implementation

### 1.  Add `/about` page

According to the [Page Routing and Extension](/development/client/router) documentation in the plugin development tutorial, we need to modify the `packages/plugins/@nocobase-sample/plugin-add-page/src/client/index.tsx` file of the plugin:

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

The `router.add()` function takes two parameters. The first parameter is the name of the page, which is used for CRUD operations and hierarchical nesting. The second parameter is the configuration of the page, where `path` is the path of the page and `Component` is the component of the page.

`useDocumentTitle()` is used to modify the title of the page.

Then, when we visit [http://localhost:13000/about](http://localhost:13000/about), we can see that the page displays "About Page".

![20240512200508](https://static-docs.nocobase.com/20240512200508.png)

### 2.  Add `/admin/data-view` page

According to the [Existing Page Routes](/development/client/router#existing-page-routes) documentation, we know that `/admin/*` corresponds to the `name` `admin`. If we want to add a new page under it, we can use the `admin.` prefix, for example `admin.dataView`.

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

Then we visit [http://localhost:13000/admin/data-view](http://localhost:13000/admin/data-view), we can see that the page displays "DataView", and if we visit it again after logging out, it will redirect to the login page.

![20240512200555](https://static-docs.nocobase.com/20240512200555.png)

### 3.  Add `/admin/material-manage` and its sub-pages

We can create a `packages/plugins/@nocobase-sample/plugin-add-page/src/client/MaterialPage.tsx` file with the following content:

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

Then in `packages/plugins/@nocobase-sample/plugin-add-page/src/client/index.tsx` import and use:

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

If `MaterialPage` is used as a parent page and does not need a custom layout, the `Component` property can be omitted.

```ts
this.app.router.add('admin.material', {
  path: '/admin/material',
})
```

Then we visit [http://localhost:13000/admin/material](http://localhost:13000/admin/material) and we can see that the `Material Page` is already displayed on the page, and clicking on the `Video` and `Img` links can switch to the corresponding pages.

<video width="100%" controls>
      <source src="https://static-docs.nocobase.com/3.mp4" type="video/mp4">
</video>

## Packaging and Uploading to Production Environment

According to the documentation on [Building and Packaging Plugins](/development/your-fisrt-plugin#building-and-packaging-plugins), we can package the plugin and upload it to the production environment.

If you have cloned the source code, you need to perform a full build first to build the dependencies of the plugin as well.

```bash
yarn build
```

If you are using `create-nocobase-app` to create your project, you can directly execute:

```bash
yarn build @nocobase-sample/plugin-add-page --tar
```

This way you can see the `storage/tar/@nocobase-sample/plugin-add-page.tar.gz` file, and then install it through the [upload method](/welcome/getting-started/plugin).
