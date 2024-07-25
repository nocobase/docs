# Field Interface

前面已经介绍了基于已有的 `Field interface` 增加组件类型的方式实现字段组件的替换，但是某些场景下新增的组件不属于已有的 `Field interface`，这时候我们就需要自定义 `Field interface`。

## 示例说明

本实例会新增 `QRCode` 组件，用于 URL 字段的值展示，并支持 `尺寸`、`颜色`、`边框` 的配置。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-field-interface) 中查看。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1721790389902.mov" type="video/mp4" />
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
yarn pm create @nocobase-sample/plugin-field-interface
yarn pm enable @nocobase-sample/plugin-field-interface
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
│   ├── QRCode.tsx # 组件
│   ├── settings.tsx # Schema Settings
│   ├── locale.ts #  多语言工具函数
│   └── index.ts # 客户端入口文件
├── locale # 多语言文件
│   ├── en-US.json # 英语
│   └── zh-CN.json # 中文
├── index.ts # 服务端插件入口
└── server # 服务端插件
```

### 1. 多语言

#### 1.1 定义工具函数

如果插件需要支持多语言，我们需要定义多语言工具函数。

我们新建 `packages/plugins/@nocobase-sample/plugin-field-interface/src/client/locale.ts` 文件：

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

#### 1.2 多语言文件

:::warning
多语言文件变更后，需要重启服务才能生效
:::

##### 1.2.1 英语

我们新建 `packages/plugins/@nocobase-sample/plugin-field-interface/src/locale/en-US.json` 内容为：

```json
{
  "QRCode": "QRCode"
}
```

##### 1.2.2 中文

我们新建 `packages/plugins/@nocobase-sample/plugin-field-interface/src/locale/zh-CN.json` 内容为：

```json
{
  "QRCode": "二维码"
}
```

如果需要更多的多语言支持，可以继续添加。

### 2. 组件

![20240723211323](https://static-docs.nocobase.com/20240723211323.png)

对于组件而言我们需要适配三种模式：

- Editable：编辑模式
- ReadOnly：只读模式（禁止编辑）
- Easy-reading：阅览模式

其中 `ReadOnly` 模式属于编辑模式的 `disabled` 属性，所以我们只需要适配 `Editable` 和 `Easy-reading` 两种模式。

#### 2.1 编辑模式组件

在编辑模式下，组件会自动注入 `onChange`、`value`、`disabled` 以及 `schema` 中的 [x-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-and-x-use-component-props) 属性。

我们新建 `packages/plugins/@nocobase-sample/plugin-field-interface/src/client/QRCode.tsx` 文件：

```tsx | pure
import React, { FC } from 'react';
import { QRCode as AntdQRCode, Space, QRCodeProps as AntdQRCodeProps } from 'antd';
import { Input } from '@nocobase/client';

interface QRCodeProps extends AntdQRCodeProps {
  onChange: (value: string) => void;
  disabled?: boolean;
}

const EditableQRCode: FC<QRCodeProps> = ({ value, disabled, onChange, ...otherProps }) => {
  return <Space direction="vertical" align="center">
    <AntdQRCode value={value || '-'} {...otherProps} />
    <Input.URL
      maxLength={60}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
    />
  </Space>;
}
```

编辑模式下，我们使用 `Space` 组件将 `QRCode` 和 `Input.URL` 组件放在一起，`QRCode` 组件用于展示 URL 字段的值，`Input.URL` 用于编辑 URL 字段的值。

其中 `value`、`disabled`、`onChange` 是 `Editable` 模式下自动注入的属性。

#### 2.2 预览模式组件

在预览模式下，组件会自动注入 `value` 以及 `schema` 中的 [x-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-and-x-use-component-props) 属性。

我们继续修改 `packages/plugins/@nocobase-sample/plugin-field-interface/src/client/QRCode.tsx` 文件：

```tsx | pure
const ReadPrettyQRCode: FC<QRCodeProps> = ({ value, ...otherProps }) => {
  if (!value) return null;
  return <AntdQRCode value={value} {...otherProps} />;
}
```

#### 2.3 连接组件

我们需要将 `EditableQRCode` 和 `ReadPrettyQRCode` 组件连接起来，这样在 Schema 中就能够通过 [x-pattern](https://docs.nocobase.com/development/client/ui-schema/what-is-ui-schema#x-pattern) 自动切换组件。

我们继续修改 `packages/plugins/@nocobase-sample/plugin-field-interface/src/client/QRCode.tsx` 文件：

```tsx | pure
import { connect, mapReadPretty } from '@formily/react';

export const QRCode: FC<QRCodeProps>  = connect(EditableQRCode, mapReadPretty(ReadPrettyQRCode)
```

我们使用 [connect](https://react.formilyjs.org/api/shared/connect) 函数能将 `EditableQRCode` 和 `ReadPrettyQRCode` 组件连接起来。


#### 2.4 将 `ReadPrettyQRCode` 添加到 `QRCode` 的属性上

为了外部其他组件更简单的复用，我们可以将 `ReadPrettyQRCode` 组件添加到 `QRCode` 的属性上。

```tsx | pure
export const QRCode: FC<QRCodeProps> & {
  ReadPretty: typeof ReadPrettyQRCode;
} = Object.assign(connect(EditableQRCode, mapReadPretty(ReadPrettyQRCode)),{
    ReadPretty: ReadPrettyQRCode,
})
```

这样外部就可以通过 `QRCode.ReadPretty` 来使用 `ReadPrettyQRCode` 组件了。

#### 2.5 注册组件

我们需要将 `QRCode` 通过插件注册到系统中。

```ts
import { Plugin } from '@nocobase/client';

import { QRCode } from './QRCode';

export class PluginFieldComponentValueClient extends Plugin {
  async load() {
    this.app.addComponents({ QRCode });
  }
}

export default PluginFieldComponentValueClient;
```

这样就可以在 Schema 中以字符串的方式使用 `QRCode` 组件了。

```json
{
  "type": "string",
  "x-component": "QRCode",
}
```

#### 2.6 添加到 field interface 的 `componentOptions` 中

我们还需要将 `QRCode` 组件添加到 `url` interface 字段的 `componentOptions` 中，这样就可以通过界面自由切换组件了。

```ts
import { Plugin } from '@nocobase/client';

import { QRCode } from './QRCode';
import { qrCodeComponentFieldSettings } from './settings';
import { generatePluginTranslationTemplate } from './locale';

export class PluginFieldComponentValueClient extends Plugin {
  async load() {
    this.app.addComponents({ QRCode });
    this.schemaSettingsManager.add(qrCodeComponentFieldSettings);
    this.dataSourceManager.collectionFieldInterfaceManager.addFieldInterfaceComponentOption('url', {
      label: generatePluginTranslationTemplate('QRCode'),
      value: 'QRCode',
    });
  }
}

export default PluginFieldComponentValueClient;
```

其中关于 `dataSourceManager.collectionFieldInterfaceManager.addFieldInterfaceComponentOption` 的使用可以参考 [SchemaInitializer 教程](https://client.docs.nocobase.com/core/data-source/collection-field-interface-manager)。

![编辑模式](https://static-docs.nocobase.com/20240724111012.png)

![ReadOnly 模式](https://static-docs.nocobase.com/20240724111116.png)

![预览模式](https://static-docs.nocobase.com/20240724111231.png)

### 3. Field interface


### 4. Schema Settings

我们需要通过 Schema Settings 来配置 `QRCode` 组件的属性。

#### 4.1 定义 Schema Settings

我们新建 `packages/plugins/@nocobase-sample/plugin-field-interface/src/client/settings.tsx` 文件：

```ts
import { createModalSettingsItem, createSelectSchemaSettingsItem, createSwitchSettingsItem, SchemaSettings } from "@nocobase/client";

import { generatePluginTranslationTemplate, usePluginTranslation } from './locale';

export const qrCodeComponentFieldSettings = new SchemaSettings({
  name: 'fieldSettings:component:QRCode',
  items: [
    // TODO
  ]
});
```

其中 `name` 的命名规则为 `fieldSettings:component:${componentName}`，`componentName` 为组件的名字。

#### 4.2 注册 Schema Settings

我们将 `qrCodeComponentFieldSettings` 注册到系统中。

我们修改 `packages/plugins/@nocobase-sample/plugin-field-component-value/src/client/index.tsx` 文件：

```ts
// ...
import { qrCodeComponentFieldSettings } from './settings';

export class PluginFieldComponentValueClient extends Plugin {
  async load() {
    // ...
    this.schemaSettingsManager.add(qrCodeComponentFieldSettings);
  }
}
```

### 5. 实现 Schema Settings items

### 6. 完善多语言

我们可以通过 [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) 添加多个语言，并且在右上角切换语言。

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

#### 6.1 英语

我们编辑 `packages/plugins/@nocobase-sample/plugin-field-interface/src/client/locale/zh.ts` 文件：

```diff
{
  "QRCode": "QRCode",
+ "Size": "Size",
+ "Bordered": "Bordered",
+ "Color": "Color",
+ "Small": "Small",
+ "Middle": "Middle",
+ "Large": "Large"
}
```

#### 6.2 中文

我们编辑 `packages/plugins/@nocobase-sample/plugin-field-interface/src/client/locale/zh.ts` 文件：

```diff
{
  "QRCode": "二维码",
+ "Size": "尺寸",
+ "Bordered": "边框",
+ "Color": "颜色",
+ "Small": "小",
+ "Middle": "中",
+ "Large": "大"
}
```

![TODO：截图](https://static-docs.nocobase.com/TODO：截图.png)

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-field-interface --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-field-interface.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
