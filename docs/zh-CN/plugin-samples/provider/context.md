# 全局上下文

很多时候我们需要在全局上下文中存储一些数据，以便在任何地方都能访问到，例如主题、权限等。

## 示例说明

我们需要实现一个功能开关插件，用于控制某些功能的开关。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-provider-context) 中查看。

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
yarn pm create @nocobase-sample/plugin-provider-context
yarn pm enable @nocobase-sample/plugin-provider-context
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 功能实现

上下文的实现需要结合 React `Context` 功能。

### 第 1 步：创建上下文

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

需要注意 `children` 别忘记渲染出来。

关于 `features` 的配置和数据，可以参考 [插件表单配置页面](/plugin-samples/plugin-settings/form) 示例说明，这里只使用 Mock 数据。

### 第 2 步：注册到系统中

我们修改 `packages/plugins/@nocobase-sample/plugin-provider-context/src/index.ts` 文件，将 `FeaturesProvider` 组件注册到系统中。

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

### 3. 访问上下文数据

在需要访问上下文的地方，可以使用 `useFeatures` 和 `useFeature` 方法。

但是这里也分两种情况，一种是在本插件中使用，一种是在其他插件中使用。

#### 3.1 本插件中使用

我们修改 `packages/plugins/@nocobase-sample/plugin-provider-context/src/index.ts` 文件，添加一个测试页面，用于测试上下文数据。

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

然后我们访问 [http://localhost:13000/admin/features-test](http://localhost:13000/admin/features-test) 就可以看到上下文数据了。

![img_v3_02av_51b7cb08-1b42-42f4-b553-49b4e3f217bg](https://static-docs.nocobase.com/img_v3_02av_51b7cb08-1b42-42f4-b553-49b4e3f217bg.jpg)

#### 3.2 其他插件中使用

如果需要在其他插件中使用，那就需要将 `useFeatures` 和 `useFeature` 方法导出。

我们修改 `packages/plugins/@nocobase-sample/plugin-provider-context/src/index.ts` 文件：

```tsx | pure
export { useFeatures, useFeature } from './FeaturesProvider';
```

然后使用 `useFeatures` 和 `useFeature` 方法即可。

```tsx | pure
import { useFeature } from '@nocobase-sample/plugin-provider-context/client';
```

注意，这里是 `'@nocobase-sample/plugin-provider-context/client'` 而不是 `'@nocobase-sample/plugin-provider-context'`。

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-provider-context --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-provider-context.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
