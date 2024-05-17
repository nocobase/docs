# 全局注册 Component 和 Scope

## 示例说明

新建一个页面，页面内使用 [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) 渲染一些内容。其中路由组件和 `SchemaComponent` 中的组件都是全局注册的。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-component-and-scope-global) 中查看。

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
yarn pm create @nocobase-sample/plugin-component-and-scope-global
yarn pm enable @nocobase-sample/plugin-component-and-scope-global
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 功能实现

### 1. 创建自定义页面

我们新建 `packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/client/CustomPage.tsx` 文件，内容如下：

```tsx | pure
import React from "react"

export const SamplesCustomPage = () => {
  return <div>TODO</div>
}
```

### 2. 全局注册组件和注册路由

关于自定义页面的创建，详细说明可以参考 [新增页面](/plugin-samples/router/add-page) 文档。

我们修改 `packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/index.ts` 文件，内容如下：

```tsx | pure
import { Plugin } from '@nocobase/client';
import { SamplesCustomPage } from './CustomPage'

export class PluginComponentAndScopeGlobalClient extends Plugin {
  async load() {
    this.app.router.add('admin.custom-page1', {
      path: '/admin/custom-page1',
      Component: 'SamplesCustomPage',
    })

    this.app.addComponents({ SamplesCustomPage })
  }
}

export default PluginComponentAndScopeGlobalClient;
```

我们通过 `app.addComponents()` 方法将 `SamplesCustomPage` 组件注册到全局，然后 `app.router.add()` 方法注册一个路由，其中的 `Component` 字段是**字符串类型**，会自动查找全局注册的组件。

然后我们访问 [http://localhost:13000/admin/custom-page1](http://localhost:13000/admin/custom-page1) 就可以看到 `SamplesCustomPage` 组件的内容了。

![img_v3_02av_55c3115b-f4b6-4c24-8ea2-914869d498bg](https://static-docs.nocobase.com/img_v3_02av_55c3115b-f4b6-4c24-8ea2-914869d498bg.jpg)

### 3. 使用 `SchemaComponent` 渲染 Schema

我们需要先了解以下知识：

- [Schema 协议](/development/client/ui-schema/what-is-ui-schema)
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)
- [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props)
- [useFieldSchema()](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema)

我们修改 `packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/client/CustomPage.tsx` 文件，内容如下：

```tsx | pure
import { ISchema, SchemaComponent, withDynamicSchemaProps } from "@nocobase/client"
import { uid } from '@formily/shared'
import { useFieldSchema } from '@formily/react'
import React, { FC } from "react"

export const SamplesHello: FC<{ name: string }> = withDynamicSchemaProps(({ name }) => {
  return <div>hello {name}</div>
})

export const useSamplesHelloProps = () => {
  const schema = useFieldSchema();
  return { name: schema.name }
}

const schema: ISchema = {
  type: 'void',
  name: uid(),
  properties: {
    demo1: {
      type: 'void',
      'x-component': 'SamplesHello',
      'x-component-props': {
        name: 'demo1',
      },
    },
    demo2: {
      type: 'void',
      'x-component': 'SamplesHello',
      'x-use-component-props': 'useSamplesHelloProps',
    },
  }
}

export const SamplesCustomPage = () => {
  return <SchemaComponent schema={schema}></SchemaComponent>
}
```

- 我们定义并导出了 `SamplesHello` 和 `useSamplesHelloProps` 组件
- 然后定义了一个 `schema` 对象，其中包含了 `'x-component': 'SamplesHello'` 和 `'x-use-component-props': 'useSamplesHelloProps'`，两者的属性值都是字符串类型
- 使用 [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) 组件渲染 `schema` 对象

然后我们需要将  `SamplesHello` 和 `useSamplesHelloProps` 注册到全局。我们修改 `packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/index.ts` 文件，内容如下：

```diff
import { Plugin } from '@nocobase/client';
- import { SamplesCustomPage } from './CustomPage'
+ import { SamplesCustomPage, SamplesHello, useSamplesHelloProps } from './CustomPage'

export class PluginComponentAndScopeGlobalClient extends Plugin {
  async load() {
    this.app.router.add('admin.custom-page1', {
      path: '/admin/custom-page1',
      Component: 'SamplesCustomPage',
    })

-   this.app.addComponents({ SamplesCustomPage })
+   this.app.addComponents({ SamplesCustomPage, SamplesHello })
+   this.app.addScopes({ useSamplesHelloProps })
  }
}

export default PluginComponentAndScopeGlobalClient;
```

然后我们访问 [http://localhost:13000/admin/custom-page1](http://localhost:13000/admin/custom-page1) 就可以看到 `CustomPage` 组件的内容了。

![img_v3_02av_79e76ad8-d697-4e3b-aaa9-46ed90e2bb9g](https://static-docs.nocobase.com/img_v3_02av_79e76ad8-d697-4e3b-aaa9-46ed90e2bb9g.jpg)

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-component-and-scope-global --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-component-and-scope-global.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
