# Global Registration of Component and Scope

## Example Explanation

Create a new page and use the [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) to render some content. The route component and the components within the `SchemaComponent` are globally registered.

You can view the complete example code for this documentation in the [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-component-and-scope-global) repository.

## Initializing the Plugin

Following the instructions from [Creating Your First Plugin](/development/your-first-plugin), if you don’t already have a project, you can create one. If you have a project or have cloned the source code, you can skip this step.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Next, initialize a plugin and add it to the system:

```bash
yarn pm create @nocobase-sample/plugin-component-and-scope-global
yarn pm enable @nocobase-sample/plugin-component-and-scope-global
```

Then, start the project:

```bash
yarn dev
```

After logging in, visit [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) to check that the plugin has been installed and enabled.

## Function Implementation

### 1. Creating a Custom Page

Create the `packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/client/CustomPage.tsx` file with the following content:

```tsx | pure
import React from "react"

export const SamplesCustomPage = () => {
  return <div>TODO</div>
}
```

### 2. Global Registration of Components and Routes

For detailed instructions on creating a custom page, refer to the [Add Page](/plugin-samples/router/add-page) documentation.

Modify the `packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/index.ts` file as follows:

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

We register the `SamplesCustomPage` component globally using the `app.addComponents()` method, then register a route using the `app.router.add()` method. The `Component` field, being a string type, will automatically search for the globally registered component.

Afterward, visit [http://localhost:13000/admin/custom-page1](http://localhost:13000/admin/custom-page1) to see the content of the `SamplesCustomPage` component.

![img_v3_02av_55c3115b-f4b6-4c24-8ea2-914869d498bg](https://static-docs.nocobase.com/img_v3_02av_55c3115b-f4b6-4c24-8ea2-914869d498bg.jpg)

### 3. Using `SchemaComponent` to Render a Schema

We first need to understand the following concepts:

- [Schema Protocol](/development/client/ui-schema/what-is-ui-schema)
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)
- [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-and-x-use-component-props)
- [useFieldSchema()](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema)

Modify the `packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/client/CustomPage.tsx` file as follows:

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

- We defined and exported the `SamplesHello` and `useSamplesHelloProps` components.
- We defined a `schema` object that contains `'x-component': 'SamplesHello'` and `'x-use-component-props': 'useSamplesHelloProps'`, both of which are string types.
- We used the [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) component to render the `schema` object.

Next, we need to register `SamplesHello` and `useSamplesHelloProps` globally. Modify the `packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/index.ts` file as follows:

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

Afterward, visit [http://localhost:13000/admin/custom-page1](http://localhost:13000/admin/custom-page1) to see the content of the `CustomPage` component.

![img_v3_02av_79e76ad8-d697-4e3b-aaa9-46ed90e2bb9g](https://static-docs.nocobase.com/img_v3_02av_79e76ad8-d697-4e3b-aaa9-46ed90e2bb9g.jpg)

## Packaging and Uploading to Production

Following the instructions in [Building and Packaging the Plugin](/development/your-first-plugin#building-and-packaging-the-plugin), you can package the plugin and upload it to the production environment.

If you have cloned the source code, first perform a full build to include plugin dependencies.

```bash
yarn build
```

If the project was created using `create-nocobase-app`, simply run:

```bash
yarn build @nocobase-sample/plugin-component-and-scope-global --tar
```

After this, you’ll find the `storage/tar/@nocobase-sample/plugin-component-and-scope-global.tar.gz` file, which can be installed using the [upload method](/welcome/getting-started/plugin).
