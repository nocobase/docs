# Global Context

In many situations, we need to store data in a global context so that it can be accessed anywhere, such as themes, permissions, and more.

## Example Overview

We need to implement a feature toggle plugin to control the activation or deactivation of certain functions.

The full sample code for this document can be viewed in the [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-provider-context) repository.

## Plugin Initialization

Following the instructions in [Writing Your First Plugin](/development/your-first-plugin), if you don’t already have a project, you can create one. If you already have a project or have cloned the source code, you can skip this step.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Next, initialize a plugin and add it to the system:

```bash
yarn pm create @nocobase-sample/plugin-provider-context
yarn pm enable @nocobase-sample/plugin-provider-context
```

Then, start the project:

```bash
yarn dev
```

After logging in, you can visit [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) to verify that the plugin has been installed and enabled.

## Feature Implementation

The implementation of the global context requires utilizing React’s `Context` API.

### 1. Creating the Context

```tsx | pure
import { useRequest } from '@nocobase/client';
import { Spin } from 'antd';
import React, { FC, createContext, ReactNode } from 'react';

const FeaturesContext = createContext<Record<string, boolean>>({});

const mockRequest = () => new Promise((resolve) => {
  resolve({ data: { feature1: true, feature2: false } })
})

export const FeaturesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { loading, data } = useRequest<{ data: Record<string, boolean> }>(mockRequest);

  if (loading) return <Spin />;

  return <FeaturesContext.Provider value={data.data}>{children}</FeaturesContext.Provider>;
};

export const useFeatures = () => React.useContext(FeaturesContext);

export const useFeature = (feature: string) => {
  const features = useFeatures();
  return features[feature];
}
```

Don’t forget to render the `children` component.

For configuration and data related to `features`, refer to the [Plugin Form Configuration Page](/plugin-samples/plugin-settings/form) for example usage. In this case, we're using mock data.

### 2. Registering the Plugin into the System

Modify the `packages/plugins/@nocobase-sample/plugin-provider-context/src/index.ts` file to register the `FeaturesProvider` component into the system.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { FeaturesProvider } from './FeaturesProvider';

export class PluginProviderContextClient extends Plugin {
  async load() {
    this.app.addProvider(FeaturesProvider)
  }
}

export default PluginProviderContextClient;
```

### 3. Accessing Context Data

To access the context data, you can use the `useFeatures` and `useFeature` methods.

There are two cases: using it within this plugin or in other plugins.

#### 3.1 Using it Within This Plugin

Modify the `packages/plugins/@nocobase-sample/plugin-provider-context/src/index.ts` file to add a test page for checking the context data.

```tsx | pure
import React from 'react';
import { Plugin } from '@nocobase/client';

import { FeaturesProvider, useFeature } from './FeaturesProvider';

const TestPage = () => {
  const feature1 = useFeature('feature1');
  const feature2 = useFeature('feature2');

  return (
    <div>
      <h1>Feature1: {feature1 ? 'Enabled' : 'Disabled'}</h1>
      <h1>Feature2: {feature2 ? 'Enabled' : 'Disabled'}</h1>
    </div>
  );
};

export class PluginProviderContextClient extends Plugin {
  async load() {
    this.app.addProvider(FeaturesProvider)

    this.app.router.add(`admin.features-test`, {
      path: '/admin/features-test',
      Component: TestPage,
    })
  }
}

export default PluginProviderContextClient;
```

Now, visit [http://localhost:13000/admin/features-test](http://localhost:13000/admin/features-test) to see the context data.

![img_v3_02av_51b7cb08-1b42-42f4-b553-49b4e3f217bg](https://static-docs.nocobase.com/img_v3_02av_51b7cb08-1b42-42f4-b553-49b4e3f217bg.jpg)

#### 3.2 Using it in Other Plugins

If you need to use the context in other plugins, you should export the `useFeatures` and `useFeature` methods.

Modify the `packages/plugins/@nocobase-sample/plugin-provider-context/src/index.ts` file:

```tsx | pure
export { useFeatures, useFeature } from './FeaturesProvider';
```

Then, you can use the `useFeatures` and `useFeature` methods as shown below:

```tsx | pure
import { useFeature } from '@nocobase-sample/plugin-provider-context/client';
```

Note that the import path should be `'@nocobase-sample/plugin-provider-context/client'` rather than `'@nocobase-sample/plugin-provider-context'`.

## Packaging and Deploying to Production

Following the [Build and Package Plugin](/development/your-first-plugin#build-and-package-plugin) guide, you can package the plugin and upload it to the production environment.

If you cloned the source code, you’ll need to perform a full build to include the plugin's dependencies.

```bash
yarn build
```

If the project was created using `create-nocobase-app`, simply run:

```bash
yarn build @nocobase-sample/plugin-provider-context --tar
```

This will generate the `storage/tar/@nocobase-sample/plugin-provider-context.tar.gz` file, which can then be installed by following the [upload process](/welcome/getting-started/plugin).
