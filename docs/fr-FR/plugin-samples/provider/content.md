# Global Content Display

We can display global content using the `Provider` component.

## Example Description

We want to implement an announcement feature. If the backend returns announcement information, it will be displayed at the top of the page.

You can view the complete example code in the [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-provider-content) repository.

![img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg](https://static-docs.nocobase.com/img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg.jpg)

## Initializing the Plugin

Follow the instructions in the [Writing Your First Plugin](/development/your-fisrt-plugin) guide. If you don't already have a project, you can create one. If you already have a project or have cloned the source code, you can skip this step.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Next, initialize a plugin and add it to the system:

```bash
yarn pm create @nocobase-sample/plugin-provider-content
yarn pm enable @nocobase-sample/plugin-provider-content
```

Now, start the project:

```bash
yarn dev
```

After logging in, visit [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) to verify that the plugin has been installed and enabled.

## Feature Implementation

### 1. Adding the `Provider` Component

The `Provider` component is a regular React component, but it is important to remember to render the `children` as part of it.

Create a new file at `packages/plugins/@nocobase-sample/plugin-provider-content/src/client/TopAnnouncement.tsx`:

```tsx | pure
import React, { FC, ReactNode } from 'react';
import { Alert, Affix, AlertProps } from 'antd';
import { useRequest } from '@nocobase/client';

const mockRequest = () => new Promise((resolve) => {
  Math.random() > 0.5 ?
    resolve({ data: { message: 'This is an important message.', type: 'info' } }) :
    resolve({ data: undefined })
})

export const TopAnnouncement: FC<{ children: ReactNode }> = ({ children }) => {
  const { data, loading } = useRequest<{ data: { message: string; type: AlertProps['type'] } }>(mockRequest)

  const onClose = () => {
    console.log('onClose')
  }

  return (
    <>
      {
        !loading && !!data.data && <Affix offsetTop={0} style={{ zIndex: 1010 }}>
          <Alert
            message={data.data.message}
            type={data.data.type}
            style={{ borderRadius: 0, borderLeft: 'none', borderRight: 'none' }}
            closable
            onClose={onClose}
          />
        </Affix>
      }
      {children}
    </>
  );
};
```

For the announcement configuration and data, you can refer to the [Plugin Form Configuration Page](/plugin-samples/plugin-settings/form). In this example, mock data is used.

Remember to render `children` within the component.

### 2. Registering It in the System

Modify the `packages/plugins/@nocobase-sample/plugin-provider-content/src/index.ts` file to register the `TopAnnouncement` component within the system.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { TopAnnouncement } from './TopAnnouncement';

export class PluginProviderContentClient extends Plugin {
  async load() {
    this.app.addProvider(TopAnnouncement)
  }
}

export default PluginProviderContentClient;
```

Now, visit [http://localhost:13000](http://localhost:13000), and you will see the announcement displayed at the top of the page.

![img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg](https://static-docs.nocobase.com/img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg.jpg)

## Packaging and Deploying to Production

Follow the instructions in the [Build and Package Plugin](/development/your-fisrt-plugin#构建并打包插件) document to package the plugin and upload it to the production environment.

If you cloned the source code, run a full build first to package the plugin’s dependencies as well:

```bash
yarn build
```

If you used `create-nocobase-app` to create the project, you can directly run:

```bash
yarn build @nocobase-sample/plugin-provider-content --tar
```

You will now see the `storage/tar/@nocobase-sample/plugin-provider-content.tar.gz` file. You can then install it by [uploading it](/welcome/getting-started/plugin).
]()
