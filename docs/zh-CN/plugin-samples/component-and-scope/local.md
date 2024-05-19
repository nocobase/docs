# 局部注册 Component 和 Scope

## 示例说明

需要实现的功能和 [全局注册 Component 和 Scope](/plugin-samples/component-and-scope/global) 示例一样，只是这次我们将组件和 scope 注册到插件内部，而不是全局注册。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-component-and-scope-local) 中查看。

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
yarn pm create @nocobase-sample/plugin-component-and-scope-local
yarn pm enable @nocobase-sample/plugin-component-and-scope-local
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 功能实现

### 1. 创建自定义页面

我们新建 `packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/client/CustomPage.tsx` 文件，内容如下：

```tsx | pure
import React from "react"

export const SamplesCustomPage = () => {
  return <div>TODO</div>
}
```

### 2. 直接使用 `Component` 渲染内容

关于自定义页面的创建，可以参考 [新增页面](/plugin-samples/router/add-page) 文档。

我们修改 `packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/index.ts` 文件，内容如下：

```tsx | pure
import { Plugin } from '@nocobase/client';
import { SamplesCustomPage } from './CustomPage'

export class PluginComponentAndScopeLocalClient extends Plugin {
  async load() {
    this.app.router.add('admin.custom-page2', {
      path: '/admin/custom-page2',
      Component: SamplesCustomPage,
    })
  }
}

export default PluginComponentAndScopeLocalClient;
```

与全局注册不同的是，这里直接使用了 `Component: SamplesCustomPage` 组件，而不是字符串类型。

然后我们访问 [http://localhost:13000/admin/custom-page2](http://localhost:13000/admin/custom-page2) 就可以看到 `SamplesCustomPage` 组件的内容了。

![img_v3_02av_46e020ae-41d2-4bc3-a047-e28d97c20bdg](https://static-docs.nocobase.com/img_v3_02av_46e020ae-41d2-4bc3-a047-e28d97c20bdg.jpg)

### 3. 使用 `SchemaComponent` 渲染内容

我们需要先了解以下知识：

- [Schema 协议](/development/client/ui-schema/what-is-ui-schema)
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)
- [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-和-x-use-component-props)
- [useFieldSchema()](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema)

我们修改 `packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/client/CustomPage.tsx` 文件，内容如下：

```tsx | pure
import { ISchema, SchemaComponent, withDynamicSchemaProps } from "@nocobase/client"
import { uid } from '@formily/shared'
import { useFieldSchema } from '@formily/react'
import React, { FC } from "react"

const SamplesHello: FC<{ name: string }> = withDynamicSchemaProps(({ name }) => {
  return <div>hello {name}</div>
})

const useSamplesHelloProps = () => {
  const schema = useFieldSchema();
  return { name: schema.name }
}

const schema: ISchema = {
  type: 'void',
  name: uid(),
  properties: {
    demo1: {
      type: 'void',
      'x-component': SamplesHello,
      'x-component-props': {
        name: 'demo1',
      },
    },
    demo2: {
      type: 'void',
      'x-component': SamplesHello,
      'x-use-component-props': useSamplesHelloProps,
    },
    demo3: {
      type: 'void',
      'x-component': 'SamplesHello',
      'x-component-props': {
        name: 'demo3',
      },
    },
    demo4: {
      type: 'void',
      'x-component': 'SamplesHello',
      'x-use-component-props': 'useSamplesHelloProps',
    },
  }
}

export const SamplesCustomPage = () => {
  return <SchemaComponent schema={schema} components={{ SamplesHello }} scope={{ useSamplesHelloProps }}></SchemaComponent>
}
```

- 我们定义了 `SamplesHello` 和 `useSamplesHelloProps` 组件
- 然后定义了一个 `schema` 对象，`demo1` 和 `demo2` 字段使用对应的组件和 scope，而 `demo3` 和 `demo4` 字段使用字符串类型的组件和 scope
- 最后我们使用 `SchemaComponent` 的 `components` 和 `scope` 属性局部注册 `SamplesHello` 和 `useSamplesHelloProps`

然后我们访问 [http://localhost:13000/admin/custom-page2](http://localhost:13000/admin/custom-page2) 就可以看到 `CustomPage` 组件的内容了。

![img_v3_02av_e8d4d0c7-7a59-4f9e-a120-a2551e719ebg](https://static-docs.nocobase.com/img_v3_02av_e8d4d0c7-7a59-4f9e-a120-a2551e719ebg.jpg)

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-component-and-scope-local --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-component-and-scope-local.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
