# 有值字段组件

有值字段组件是组件有 `value` 属性的字段组件，用于展示字段的值。举例来说，`Input`、`Select`、`Checkbox`、`Radio`、`Switch` 等组件都是有值字段组件。

## 示例说明

本实例会新增 `Video` 组件，用于展示视频，支持自动播放、编辑图片、编辑高度等配置属性。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-field-value) 中查看。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/20240603155655_rec_.mp4" type="video/mp4" />
</video>

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
yarn pm create @nocobase-sample/plugin-field-value
yarn pm enable @nocobase-sample/plugin-field-value
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/locale/](http://localhost:13000/admin/pm/list/locale/) 就可以看到插件已经安装并启用了。

## 功能实现

在实现本示例之前，我们需要先了解一些基础知识：

- [ant-design Carousel](https://ant.design/components/carousel)
- [SchemaInitializer 教程](/development/client/ui-schema/initializer)：用于向界面内添加各种区块、字段、操作等
- [SchemaInitializer API](https://client.docs.nocobase.com/core/ui-schema/schema-initializer)：用于向界面内添加各种区块、字段、操作等
- [UI Schema 协议](/development/client/ui-schema/what-is-ui-schema)：详细介绍 Schema 的结构和每个属性的作用
- [Designable 设计器](/development/client/ui-schema/designable)：用于修改 Schema


```bash
.
├── client # 客户端插件
│   ├── initializer # 初始化器
│   ├── component # 区块组件
│   ├── index.tsx # 客户端插件入口
│   ├── locale.ts # 多语言工具函数
│   ├── constants.ts # 常量
│   ├── schema # Schema
│   └── settings # Schema Settings
├── locale # 多语言文件
│   ├── en-US.json # 英语
│   └── zh-CN.json # 中文
├── index.ts # 服务端插件入口
└── server # 服务端插件
```

### 1. 定义名称

我们首先需要定义区块名称，它将会使用在各个地方。

我们新建 `packages/plugins/@nocobase-sample/plugin-field-value/src/client/constants.ts`：

```ts
export const BlockName = 'Carousel';
export const BlockNameLowercase = BlockName.toLowerCase();
```

### 2. 多语言

#### 2.1 定义工具函数

如果插件需要支持多语言，我们需要定义多语言工具函数。

我们新建 `packages/plugins/@nocobase-sample/plugin-field-value/src/client/locale.ts` 文件：

```ts
import { useTranslation } from 'react-i18next';

// @ts-ignore
import pkg from './../../package.json';

export function usePluginTranslation() {
  return useTranslation([pkg.name, 'client'], { nsMode: 'fallback' });
}

export function generatePluginTranslationTemplate(key: string) {
  return `{{t('${key}', { ns: ['${pkg.name}', 'client'], nsMode: 'fallback' })}}`;
}
```

- [useTranslation()](https://react.i18next.com/latest/usetranslation-hook)：用于获取多语言工具函数
- `usePluginTranslation()`：获取 Carousel 组件的多语言工具函数，需要将插件的名字作为命名空间
- `generatePluginTranslationTemplate()`：用于生成 Carousel 组件的多语言模板

#### 2.2 多语言文件

:::warning
多语言文件变更后，需要重启服务才能生效
:::

##### 2.2.1 英语

我们新建 `packages/plugins/@nocobase-sample/plugin-field-value/src/locale/en-US.json` 内容为：

```json
{
  "Carousel": "Carousel"
}
```

##### 2.2.2 中文

我们新建 `packages/plugins/@nocobase-sample/plugin-field-value/src/locale/zh-CN.json` 内容为：

```json
{
  "Carousel": "走马灯"
}
```

如果需要更多的多语言支持，可以继续添加。


### 10. 完善多语言

#### 10.1 英文

我们编辑 `packages/plugins/@nocobase-sample/plugin-field-value/src/client/locale/en.ts` 文件：

```diff
{
  "Carousel": "Carousel",
+ "Edit Images": "Edit Images",
+ "Images": "Images",
+ "Autoplay": "Autoplay",
+ "Edit Height": "Edit Height",
+ "Height": "Height"
}
```

#### 10.2 中文

我们编辑 `packages/plugins/@nocobase-sample/plugin-field-value/src/client/locale/zh.ts` 文件：

```diff
{
  "Carousel": "走马灯",
+ "Edit Images": "编辑图片",
+ "Images": "图片",
+ "Autoplay": "自动播放",
+ "Edit Height": "编辑高度",
+ "Height": "高度"
}
```

我们可以通过 [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) 添加多个语言，并且在右上角切换语言。

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

![20240611114018](https://static-docs.nocobase.com/20240611114018.png)

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-field-value --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-field-value.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
