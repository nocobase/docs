# Partial Registration of Component and Scope

## Example Description

The functionality to be implemented is similar to the [Global Registration of Component and Scope](/plugin-samples/component-and-scope/global) example, but this time, the component and scope will be registered within the plugin itself, instead of globally.

You can view the complete sample code for this document in [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-component-and-scope-local).

## Initialize the Plugin

Following the guide on [Writing Your First Plugin](/development/your-first-plugin), if you do not yet have a project, you can create one first. If you already have a project or have cloned the source code, you can skip this step.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Next, initialize a plugin and add it to the system:

```bash
yarn pm create @nocobase-sample/plugin-component-and-scope-local
yarn pm enable @nocobase-sample/plugin-component-and-scope-local
```

Then, start the project:

```bash
yarn dev
```

After logging in, go to [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) to confirm that the plugin has been installed and enabled.

---

# Functionality Implementation

## 1. Creating a Custom Page

Create a new file `packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/client/CustomPage.tsx` with the following content:

```tsx | pure
import React from "react"

export const SamplesCustomPage = () => {
  return <div>TODO</div>
}
```

## 2. Rendering Content Directly with `Component`

For more details on custom page creation, refer to the [Add New Page](/plugin-samples/router/add-page) guide.

Next, modify the file `packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/index.ts` as follows:

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

Unlike global registration, here we directly use the `Component: SamplesCustomPage` instead of passing a string as the component type.

Next, go to [http://localhost:13000/admin/custom-page2](http://localhost:13000/admin/custom-page2) to see the content of the `SamplesCustomPage` component.

![img_v3_02av_46e020ae-41d2-4bc3-a047-e28d97c20bdg](https://static-docs.nocobase.com/img_v3_02av_46e020ae-41d2-4bc3-a047-e28d97c20bdg.jpg)

## 3. Rendering Content with `SchemaComponent`

You’ll need to understand the following concepts:

- [Schema Protocol](/development/client/ui-schema/what-is-ui-schema)
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)
- [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-and-x-use-component-props)
- [useFieldSchema()](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema)

Now, modify the file `packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/client/CustomPage.tsx` as follows:

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

- We defined the `SamplesHello` and `useSamplesHelloProps` components.
- Then, we created a `schema` object where the `demo1` and `demo2` fields use corresponding components and scope, while the `demo3` and `demo4` fields use string-type components and scope.
- Finally, we used the `SchemaComponent`'s `components` and `scope` attributes to locally register `SamplesHello` and `useSamplesHelloProps`.

Visit [http://localhost:13000/admin/custom-page2](http://localhost:13000/admin/custom-page2) to see the content of the `CustomPage` component.

![img_v3_02av_e8d4d0c7-7a59-4f9e-a120-a2551e719ebg](https://static-docs.nocobase.com/img_v3_02av_e8d4d0c7-7a59-4f9e-a120-a2551e719ebg.jpg)

---

# Packaging and Uploading to Production

Following the guide on [Building and Packaging Plugins](/development/your-first-plugin#building-and-packaging-plugins), you can package the plugin and upload it to the production environment.

If you cloned the source code, you need to perform a full build to package the plugin's dependencies:

```bash
yarn build
```

If you used `create-nocobase-app` to create the project, simply run:

```bash
yarn build @nocobase-sample/plugin-component-and-scope-local --tar
```

This will generate the file `storage/tar/@nocobase-sample/plugin-component-and-scope-local.tar.gz`, which you can then upload using the [plugin upload method](/welcome/getting-started/plugin).
