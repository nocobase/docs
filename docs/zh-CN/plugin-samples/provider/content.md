# 全局内容展示

我们可以通过 `Provider` 来进行全局内容展示。

## 示例说明

我们要实现一个公告功能，如果后端返回了公告信息，那么我们就在页面的顶部展示这个公告。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-provider-content) 中查看。

![img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg](https://static-docs.nocobase.com/img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg.jpg)

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
yarn pm create @nocobase-sample/plugin-provider-content
yarn pm enable @nocobase-sample/plugin-provider-content
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 功能实现

### 第 1 步：新增 `Provider` 组件

Provider 组件就是普通的 React 组件，但是需要注意，要将 `children` 渲染出来。

我们新建 `packages/plugins/@nocobase-sample/plugin-provider-content/src/client/TopAnnouncement.tsx`

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

关于公告的配置和数据，可以参考 [插件表单配置页面](/plugin-samples/plugin-settings/form) 示例说明，这里只使用 Mock 数据。

需要注意 `children` 别忘记渲染出来。

### 第 2 步：注册到系统中

我们修改 `packages/plugins/@nocobase-sample/plugin-provider-content/src/index.ts` 文件，将 `TopAnnouncement` 组件注册到系统中。

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

然后我们访问 [http://localhost:13000](http://localhost:13000)，就能看到页面顶部展示了公告了。

![img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg](https://static-docs.nocobase.com/img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg.jpg)

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-provider-content --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-provider-content.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
