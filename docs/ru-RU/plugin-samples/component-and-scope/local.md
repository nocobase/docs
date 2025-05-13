# Local Registration of Component and Scope

## Example Explanation

The functionality to be implemented here is identical to the example in [Global Registration of Component and Scope](/plugin-samples/component-and-scope/global), except this time the components and scopes will be registered within the plugin itself rather than globally.

The complete example code for this documentation can be found in the [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-component-and-scope-local) repository.

## Initializing the Plugin

Following the instructions in [Creating Your First Plugin](/development/your-first-plugin), if you do not already have a project, you can create one first. If you already have a project or have cloned the source code, skip this step.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Then, initialize a plugin and add it to the system:

```bash
yarn pm create @nocobase-sample/plugin-component-and-scope-local
yarn pm enable @nocobase-sample/plugin-component-and-scope-local
```

Finally, start the project:

```bash
yarn dev
```

Once logged in, visit [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) to confirm the plugin has been successfully installed and enabled.

## Function Implementation

### 1. Creating a Custom Page

Create a new file at `packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/client/CustomPage.tsx` with the following content:

```tsx | pure
import React from "react";

export const SamplesCustomPage = () => {
  return <div>TODO</div>;
};
```

### 2. Rendering Content Directly Using `Component`

For details on creating custom pages, refer to [Adding a New Page](/plugin-samples/router/add-page).

Modify the file `packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/index.ts` with the following content:

```tsx | pure
import { Plugin } from '@nocobase/client';
import { SamplesCustomPage } from './CustomPage';

export class PluginComponentAndScopeLocalClient extends Plugin {
  async load() {
    this.app.router.add('admin.custom-page2', {
      path: '/admin/custom-page2',
      Component: SamplesCustomPage,
    });
  }
}

export default PluginComponentAndScopeLocalClient;
```

Unlike global registration, here we directly use `Component: SamplesCustomPage` instead of a string.

Now, visit [http://localhost:13000/admin/custom-page2](http://localhost:13000/admin/custom-page2) to view the content of the `SamplesCustomPage` component.

![Custom Page Screenshot](https://static-docs.nocobase.com/img_v3_02av_46e020ae-41d2-4bc3-a047-e28d97c20bdg.jpg)

### 3. Rendering Content Using `SchemaComponent`

Here’s some required background knowledge:

- [Schema Protocol](/development/client/ui-schema/what-is-ui-schema)
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)
- [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-and-x-use-component-props)
- [useFieldSchema()](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema)

Modify the file `packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/client/CustomPage.tsx` as follows:

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

- The `SamplesHello` and `useSamplesHelloProps` components are defined.
- A `schema` object is created where `demo1` and `demo2` directly use the corresponding components and scopes, while `demo3` and `demo4` use string-based definitions.
- The `SchemaComponent` registers `SamplesHello` and `useSamplesHelloProps` locally using the `components` and `scope` properties.

Visit [http://localhost:13000/admin/custom-page2](http://localhost:13000/admin/custom-page2) to view the `CustomPage` component.

![SchemaComponent Screenshot](https://static-docs.nocobase.com/img_v3_02av_e8d4d0c7-7a59-4f9e-a120-a2551e719ebg.jpg)

## Packaging and Uploading to Production

Follow the [Build and Package Plugin](/development/your-first-plugin#build-and-package-plugin) guide to package the plugin for production.

If the source code is cloned, perform a full build first to ensure all plugin dependencies are built:

```bash
yarn build
```

If the project was created using `create-nocobase-app`, directly run:

```bash
yarn build @nocobase-sample/plugin-component-and-scope-local --tar
```

This generates a file at `storage/tar/@nocobase-sample/plugin-component-and-scope-local.tar.gz`. Use the [upload process](/welcome/getting-started/plugin) to install it.
