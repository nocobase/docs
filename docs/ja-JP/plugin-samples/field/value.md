# 有值字段组件

有值字段组件是组件有 `value` 属性的字段组件，用于展示字段的值。举例来说，`Input`、`Select`、`Checkbox`、`Radio`、`Switch` 等组件都是有值字段组件。

## 示例说明

本实例会新增 `QRCode` 组件，用于 URL 字段的值展示，并支持 `尺寸`、`颜色`、`边框` 的配置。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-field-value) 中查看。

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

- [ant-design QRCode](https://ant.design/components/qr-code)
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

### 1. 组件

![20240723211323](https://static-docs.nocobase.com/20240723211323.png)

对于组件而言我们需要适配三种模式：

- Editable：编辑模式
- ReadOnly：只读模式（禁止编辑）
- Easy-reading：阅览模式

其中 `ReadOnly` 模式属于编辑模式的 `disabled` 属性，所以我们只需要适配 `Editable` 和 `Easy-reading` 两种模式。

#### 1.1 编辑模式组件

在编辑模式下，组件会自动注入 `onChange`、`value`、`disabled` 以及 `schema` 中的 [x-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-and-x-use-component-props) 属性。

我们新建 `packages/plugins/@nocobase-sample/plugin-field-value/src/client/QRCode.tsx` 文件：

```tsx | pure
import React, { FC } from 'react';
import { Input } from '@nocobase/client';
import { QRCode as AntdQRCode, Space, QRCodeProps as AntdQRCodeProps } from 'antd';

interface QRCodeProps extends AntdQRCodeProps {
  onChange: (value: string) => void;
  disabled?: boolean;
}

const QRCodeEditable: FC<QRCodeProps> = ({ value, disabled, onChange, ...otherProps }) => {
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

#### 1.2 预览模式组件

在预览模式下，组件会自动注入 `value` 以及 `schema` 中的 [x-component-props](/development/client/ui-schema/what-is-ui-schema#x-component-props-and-x-use-component-props) 属性。

我们继续修改 `packages/plugins/@nocobase-sample/plugin-field-value/src/client/QRCode.tsx` 文件：

```tsx | pure
const QRCodeReadPretty: FC<QRCodeProps> = ({ value, ...otherProps }) => {
  if (!value) return null;
  return <AntdQRCode value={value} {...otherProps} />;
}
```

#### 1.3 连接组件

我们需要将 `QRCodeEditable` 和 `QRCodeReadPretty` 组件连接起来，这样在 Schema 中就能够通过 [x-pattern](https://docs.nocobase.com/development/client/ui-schema/what-is-ui-schema#x-pattern) 自动切换组件。

我们继续修改 `packages/plugins/@nocobase-sample/plugin-field-value/src/client/QRCode.tsx` 文件：

```tsx | pure
import { connect, mapReadPretty } from '@formily/react';

export const QRCode: FC<QRCodeProps>  = connect(QRCodeEditable, mapReadPretty(QRCodeReadPretty);

QRCode.displayName = 'QRCode';
```

我们使用 [connect](https://react.formilyjs.org/api/shared/connect) 函数能将 `QRCodeEditable` 和 `QRCodeReadPretty` 组件连接起来。

#### 1.4 注册组件

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

#### 1.5 添加到 field interface 的 `componentOptions` 中

我们还需要将 `QRCode` 组件添加到 `url` interface 字段的 `componentOptions` 中，这样就可以通过界面自由切换组件了。

```ts
import { Plugin } from '@nocobase/client';

import { QRCode } from './QRCode';
import { qrCodeComponentFieldSettings } from './settings';
import { tStr } from './locale';

export class PluginFieldComponentValueClient extends Plugin {
  async load() {
    this.app.addComponents({ QRCode });
    this.schemaSettingsManager.add(qrCodeComponentFieldSettings);
    this.app.addFieldInterfaceComponentOption('url', {
      label: tStr('QRCode'),
      value: 'QRCode',
    });
  }
}

export default PluginFieldComponentValueClient;
```

其中关于 `app.addFieldInterfaceComponentOption` 的使用可以参考 [文档](https://client.docs.nocobase.com/core/data-source/collection-field-interface-manager#addfieldinterfacecomponentoption)。

![编辑模式](https://static-docs.nocobase.com/20240724111012.png)

![ReadOnly 模式](https://static-docs.nocobase.com/20240724111116.png)

![预览模式](https://static-docs.nocobase.com/20240724111231.png)

### 2. 实现 Schema Settings

我们需要通过 Schema Settings 来配置 `QRCode` 组件的属性。

#### 2.1 定义 Schema Settings

我们新建 `packages/plugins/@nocobase-sample/plugin-field-value/src/client/settings.tsx` 文件：

```ts
import { createModalSettingsItem, createSelectSchemaSettingsItem, createSwitchSettingsItem, SchemaSettings } from "@nocobase/client";

import { tStr, useT } from './locale';

export const qrCodeComponentFieldSettings = new SchemaSettings({
  name: 'fieldSettings:component:QRCode',
  items: [
    // TODO
  ]
});
```

其中 `name` 的命名规则为 `fieldSettings:component:${componentName}`，`componentName` 为组件的名字。

#### 2.2 注册 Schema Settings

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

### 3. 实现 Schema Settings items

#### 3.1 实现 `Size`

`Size` 我们使用 `select` 选择框来选择 `small`、`middle`、`large`。

我们修改 `packages/plugins/@nocobase-sample/plugin-field-component-value/src/client/settings.ts`：

```ts
// ...
export const qrCodeComponentFieldSettings = new SchemaSettings({
  name: 'fieldSettings:component:QRCode',
  items: [
    createSelectSchemaSettingsItem({
      name: 'size',
      title: tStr('Size'),
      schemaKey: 'x-component-props.size',
      defaultValue: 160,
      useOptions() {
        const t = useT();
        return [
          {
            label: t('Small'),
            value: 100,
          },
          {
            label: t('Middle'),
            value: 160,
          },
          {
            label: t('Large'),
            value: 200,
          }
        ]
      }
    }),
  ],
});
```

- `name`：唯一标识
- `title`：标题
- `schemaKey`：Schema 的 key，我们这里将其存储在 `x-component-props.size` 中
- `defaultValue`：默认值
- `useOptions`：选项

![20240724111505](https://static-docs.nocobase.com/20240724111505.png)

#### 3.2 实现 `Bordered`

`Border` 我们使用 `switch` 开关来选择是否显示边框。

```ts
export const qrCodeComponentFieldSettings = new SchemaSettings({
  name: 'fieldSettings:component:QRCode',
  items: [
    // ...
    createSwitchSettingsItem({
      name: 'bordered',
      schemaKey: 'x-component-props.bordered',
      title: tStr('Bordered'),
      defaultValue: true,
    }),
  ],
});
```

- `name`：唯一标识
- `schemaKey`：Schema 的 key，我们这里将其存储在 `x-component-props.bordered` 中
- `defaultValue`：默认值

![20240724111935](https://static-docs.nocobase.com/20240724111935.png)

#### 3.3 实现 `Color`

`Color` 我们使用 `Modal` 弹窗来选择颜色。

```ts
export const qrCodeComponentFieldSettings = new SchemaSettings({
  name: 'fieldSettings:component:QRCode',
  items: [
    // ...
    createModalSettingsItem({
      name: 'color',
      title: tStr('Color'),
      parentSchemaKey: 'x-component-props',
      schema({ color }) {
        return {
          type: 'object',
          title: tStr('Color'),
          properties: {
            color: {
              type: 'string',
              title: tStr('Color'),
              default: color,
              'x-component': 'ColorPicker',
            }
          }
        }
      },
    }),
  ],
});
```

![20240724112041](https://static-docs.nocobase.com/20240724112041.png)

### 4. 多语言

我们可以通过 [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) 添加多个语言，并且在右上角切换语言。

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

#### 4.1 英语

我们编辑 `packages/plugins/@nocobase-sample/plugin-field-value/src/locale/zh-CN.json` 文件：

```diff
{
  "QRCode": "QRCode",
  "Size": "Size",
  "Bordered": "Bordered",
  "Color": "Color",
  "Small": "Small",
  "Middle": "Middle",
  "Large": "Large"
}
```

#### 4.1 中文

我们编辑 `packages/plugins/@nocobase-sample/plugin-field-value/src/locale/zh-CN.json` 文件：

```diff
{
  "QRCode": "二维码",
  "Size": "尺寸",
  "Bordered": "边框",
  "Color": "颜色",
  "Small": "小",
  "Middle": "中",
  "Large": "大"
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
yarn build @nocobase-sample/plugin-field-value --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-field-value.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
