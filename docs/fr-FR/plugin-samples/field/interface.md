# Field Interface

前面已经介绍了基于已有的 `Field interface` 增加组件类型的方式实现字段组件的替换，但是某些场景下新增的组件不属于已有的 `Field interface`，这时候我们就需要自定义 `Field interface`。

## 示例说明

本文会新增一个 `Encryption` interface 类型即加解密字段。具体需求如下：

- 使用对称加密算法对字段进行加密和解密
- 加密后，以密文的方式被存储至数据库中，在查看数据时进行解密明文显示
- 加密后的字段不支持模糊搜索，只支持等于、不等于、为空、不为空等操作

此功能需要前后端配合实现，前端需要实现加密和解密的 Field interface，后端需要实现加密和解密的逻辑。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-field-interface) 中查看。

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1721993076851.mov" type="video/mp4" />
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

## 文档知识和目录结构

在实现本示例之前，我们需要先了解一些基础知识：

- [NodeJS crypto 模块](https://nodejs.org/api/crypto.html)
- [Database]( /api/database)：用于管理数据、字段、模型、操作等
- [CollectionFieldInterface](https://client.docs.nocobase.com/core/data-source/collection-field-interface)：前端数据字段类
- [CollectionFieldInterfaceManager](https://client.docs.nocobase.com/core/data-source/collection-field-interface-manager)：前端用来管理 `CollectionFieldInterface` 的类

```bash
.
├── client # 客户端插件
│   ├── EncryptionFieldInterface.tsx # 前端 Field Interface
│   ├── locale.ts # 多语言工具函数
│   └── index.ts # 前端入口文件
├── locale
│   ├── en-US.json # 英语
│   └── zh-CN.json # 中文
├── index.ts # 服务端插件入口
└── server
      ├── encryption-field.ts # 加解密字段
      ├── index.ts # 服务端入口文件
      ├── operators # 查询操作符
      │   ├── eq.ts # 等于
      │   ├── ne.ts # 不等于
      │   └── utils.ts # 工具函数
      ├── plugin.ts  # 服务端插件
      └── utils.ts # 工具函数
```

## 前端实现

### 1. 组件

由于加解密用的是字符串，所以我们可以使用 `Input` 组件，并不需要自定义组件。

如果其他需求需要自定义组件，可以参考 [有值字段组件](/plugin-samples/field/value) 文档。

### 2. Field Interface

#### 2.1 定义

我们新建 `packages/plugins/@nocobase-sample/plugin-field-interface/src/client/EncryptionFieldInterface.tsx` 文件：

```tsx | pure
import { CollectionFieldInterface, defaultProps } from '@nocobase/client';
import { uid } from '@nocobase/utils/client';
import { tStr } from './locale';

export class EncryptionFieldInterface extends CollectionFieldInterface {
  name = 'encryption';
  type = 'object';
  group = 'advanced';
  order = 10;
  title = tStr('Encryption');
  default = {
    type: 'encryption',
    iv: uid(16),
    uiSchema: {
      type: 'string',
      'x-component': 'Input',
    },
  };
  availableTypes = ['string'];
  hasDefaultValue = true;
  properties = {
    ...defaultProps,
  };
  filterable = {
    operators: [
      { label: '{{t("is")}}', value: '$encryptionEq', selected: true },
      { label: '{{t("is not")}}', value: '$encryptionNe' },
      { label: '{{t("exists")}}', value: '$exists', noValue: true },
      { label: '{{t("not exists")}}', value: '$notExists', noValue: true },
    ],
  };
}
```

所有的 Field interface 都需要继承 `CollectionFieldInterface` 类，然后实现 `name`、`type`、`group`、`order`、`title`、`default`、`availableTypes`、`hasDefaultValue`、`properties`、`filterable` 等属性，具体每个属性的含义为：

- `tStr`：生成多语言字符串模板

- `name`：Field interface 的唯一标识，用于区分不同的 Field interface
- `type`：？
- `group`：分组，用于在字段设置中分组显示，这里我们设置为 `advanced`
- `order`：排序，用于在字段设置中排序显示
- `title`：标题，用于在字段设置中显示
- `default`：字段配置，插入到数据库中的默认值
  - `iv`：初始化向量，随机字符串，用于加密
  - `uiSchema`：字段的 UI 配置，这里我们使用 `Input` 组件
- `availableTypes`：可用的字段类型
- `hasDefaultValue`：是否有默认值配置
- `properties`：属性配置，其中 `defaultProps` 包含
  - `name`：字段名
  - `displayName`：字段显示名
- `filterable`：可过滤的操作符。


其中关于 `filterable` 有 2 点注意：

- 因为存储到数据库中是密文，所以仅支持 **相等、不等、存在、不存在** 操作符
- 搜索字符串的时候，需要将字符串解密后再进行搜索，所以这里不能使用默认的 `$eq`、`$ne` 操作符，需要自定义操作符为 `$encryptionEq`、`$encryptionNe`。

更多关于 CollectionFieldInterface 的属性和方法可以查看 [CollectionFieldInterface](https://client.docs.nocobase.com/core/data-source/collection-field-interface) 文档。

#### 2.2 注册

我们修改 `packages/plugins/@nocobase-sample/plugin-field-interface/src/client/index.ts` 文件：

```ts
import { Plugin } from '@nocobase/client';
import { EncryptionFieldInterface } from './EncryptionFieldInterface';

export class PluginFieldInterfaceClient extends Plugin {
  async load() {
    this.app.dataSourceManager.collectionFieldInterfaceManager.addFieldInterfaces([EncryptionFieldInterface]);
  }
}

export default PluginFieldInterfaceClient;
```

我们通过 `collectionFieldInterfaceManager.addFieldInterfaces()` 将 `EncryptionFieldInterface` 注册到系统中。

更多关于 `CollectionFieldInterfaceManager` 的属性和方法可以查看 [文档](https://client.docs.nocobase.com/core/data-source/collection-field-interface-manager)。

![20240726193638](https://static-docs.nocobase.com/20240726193638.png)

此时界面上就可以看到 `Encryption` 字段了，但是后端还没有实现加解密逻辑，所以还**不能创建字段**。

## 后端实现

### 1. 实现加解密

我们新建 `packages/plugins/@nocobase-sample/plugin-field-interface/src/server/utils.ts` 文件：

```ts
import crypto from 'crypto';
const algorithm = 'aes-256-cbc';

const keyString = process.env.ENCRYPTION_KEY || '12345678901234567890123456789012';;

const key = Buffer.from(keyString, 'utf8');

export function encryptSync(text: string, ivString: string) {
  const iv = Buffer.from(ivString, 'utf8');
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export function decryptSync(encrypted: string, ivString: string) {
  const iv = Buffer.from(ivString, 'utf8');
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
```

我们使用 `crypto` 模块实现加解密，其中 `encryptSync` 方法用于加密，`decryptSync` 方法用于解密。具体的加密算法是 `aes-256-cbc`，密钥是 `ENCRYPTION_KEY` 环境变量，如果没有设置则使用默认值 `12345678901234567890123456789012`。

关于 `crypto` 模块的更多信息可以查看 [NodeJS crypto 模块](https://nodejs.org/api/crypto.html) 文档。

### 2. 实现 Field

#### 2.1 定义

我们新建 `packages/plugins/@nocobase-sample/plugin-field-interface/src/server/encryption-field.ts` 文件：

```ts
import { BaseColumnFieldOptions, Field, FieldContext } from '@nocobase/database';
import { DataTypes } from 'sequelize';
import { decryptSync, encryptSync } from './utils';

export interface EncryptionFieldOptions extends BaseColumnFieldOptions {
  type: 'encryption';
}

export class EncryptionField extends Field {
  get dataType() {
    return DataTypes.STRING;
  }

  constructor(options?: any, context?: FieldContext) {
    const { name, iv } = options;
    super(
      {
        get() {
          const value = this.getDataValue(name);
          if (!value) return null;
          return decryptSync(value, iv);
        },
        set(value) {
          if (!value?.length) value = null;
          else {
            value = encryptSync(value, iv);
          }
          this.setDataValue(name, value);
        },
        ...options,
      },
      context,
    );
  }
}
```

- dataType：加解密对应到数据库中是字符串，所以我们使用 `DataTypes.STRING` 类型
- get：获取字段值时，解密
- set：设置字段值时，加密

#### 2.2 注册

我们新建 `packages/plugins/@nocobase-sample/plugin-field-interface/src/server/plugin.ts` 文件：

```ts
import { Plugin } from '@nocobase/server';
import { EncryptionField } from './encryption-field';
import { $encryptionEq } from './operators/eq';
import { $encryptionNe } from './operators/ne';

export class PluginFieldInterfaceServer extends Plugin {
  async load() {
    this.db.registerFieldTypes({
      encryption: EncryptionField,
    });
  }
}

export default PluginFieldInterfaceServer;
```

我们通过 `db.registerFieldTypes()` 将 `EncryptionField` 注册到系统中，具体可以查看 [registerFieldTypes()](/api/database#registerfieldtypes) 文档。

![20240726192559](https://static-docs.nocobase.com/20240726192559.png)

此时我们已经完成了前后端的实现，可以创建字段了，但是还需要实现查询操作符。

### 3. 实现操作符

#### 3.1 定义

我们要做的就是在查询时，将字符串加密后再进行查询。

##### 3.1.1 封装公共方法

因为 `$encryptionEq`、`$encryptionNe` 都是需要在加密后再进行查询，所以我们可以将这两个操作符的逻辑抽离出来，所以我们新建 `packages/plugins/@nocobase-sample/plugin-field-interface/src/server/operators/utils.ts` 文件：

```ts
import { encryptSync } from '../utils';

export function getFieldOptions(ctx: any) {
  const fieldPathArr = ctx.fieldPath.split('.');
  const collectionName = fieldPathArr[fieldPathArr.length - 2];
  const fieldName = ctx.fieldName;

  return ctx.db.collections.get(collectionName).fields.get(fieldName).options;
}

export function encryptSearchValueSync(str: any, ctx: any) {
  const { iv } = getFieldOptions(ctx);
  let encrypted;
  if (Array.isArray(str)) {
    encrypted = str.map((item) => encryptSync(item, iv));
  } else {
    encrypted = encryptSync(str, iv);
  }
  return encrypted;
}
```

我们定义了 2 个方法：

- `getFieldOptions`：获取字段配置
- `encryptSearchValueSync`：加密搜索值

##### 3.1.2 实现 `$encryptionEq`

然后我们新建 `packages/plugins/@nocobase-sample/plugin-field-interface/src/server/operators/eq.ts` 文件：

```ts
import { encryptSearchValueSync } from './utils';

export const $encryptionEq = (str, ctx) => {
  const eq = ctx.db.operators.get('$eq');
  if (!str) return eq(str, ctx);
  const encrypted = encryptSearchValueSync(str, ctx);
  return eq(encrypted, ctx);
};
```

我们定义了 `$encryptionEq` 操作符，将搜索值加密后再进行查询。

##### 3.1.3 实现 `$encryptionNe`

然后我们新建 `packages/plugins/@nocobase-sample/plugin-field-interface/src/server/operators/ne.ts` 文件：

```ts
import { encryptSearchValueSync } from './utils';

export const $encryptionNe = (str, ctx) => {
  const eq = ctx.db.operators.get('$ne');
  if (!str) return eq(str, ctx);
  const encrypted = encryptSearchValueSync(str, ctx);
  return eq(encrypted, ctx);
};
```

我们定义了 `$encryptionNe` 操作符，将搜索值加密后再进行查询。

#### 3.2 注册操作符

我们修改 `packages/plugins/@nocobase-sample/plugin-field-interface/src/server/plugin.ts` 文件：

```ts
// ...
import { $encryptionEq } from './operators/eq';
import { $encryptionNe } from './operators/ne';

export class PluginFieldInterfaceServer extends Plugin {
  async load() {
    // ...

    this.db.registerOperators({
      $encryptionEq,
      $encryptionNe,
    });
  }
}

export default PluginFieldInterfaceServer;
```

![20240726192832](https://static-docs.nocobase.com/20240726192832.png)

## 多语言

我们可以通过 [http://localhost:13000/admin/settings/system-settings](http://localhost:13000/admin/settings/system-settings) 添加多个语言，并且在右上角切换语言。

![20240611113758](https://static-docs.nocobase.com/20240611113758.png)

### 英语

我们编辑 `packages/plugins/@nocobase-sample/plugin-field-interface/src/locale/zh-CN.json` 文件：

```diff
{
  "Encryption": "Encryption"
}
```

### 中文

我们编辑 `packages/plugins/@nocobase-sample/plugin-field-interface/src/locale/zh-CN.json` 文件：

```diff
{
  "Encryption": "加密"
}
```

![20240726193259](https://static-docs.nocobase.com/20240726193259.png)

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
