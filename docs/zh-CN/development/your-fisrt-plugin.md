# 编写第一个插件

在开始前，需要先安装好 NocoBase：

- [create-nocobase-app 安装](/welcome/getting-started/installation/create-nocobase-app)
- [Git 源码安装](/welcome/getting-started/installation/git-clone)

安装好 NocoBase 之后，我们就可以开始插件开发之旅了。

## 创建插件

通过 CLI 快速地创建一个空插件，命令如下：

```bash
yarn pm create @my-project/plugin-hello
```

插件所在目录 `./packages/plugins/@my-project/plugin-hello`，插件目录结构为：

```bash
|- /packages/plugins/@my-project/plugin-hello
  |- /src
    |- /client      # 插件客户端代码
    |- /server      # 插件服务端代码
  |- client.d.ts
  |- client.js
  |- package.json   # 插件包信息
  |- server.d.ts
  |- server.js
```

访问插件管理器界面，查看刚添加的插件，默认地址为 http://localhost:13000/admin/pm/list/local/

<img src="https://nocobase.oss-cn-beijing.aliyuncs.com/b04d16851fc1bbc2796ecf8f9bc0c3f4.png" />

如果创建的插件未在插件管理器里显示，可以通过 `pm add` 命令手动添加

```bash
yarn pm add @my-project/plugin-hello
```

## 编写插件

在插件里新建 collection 文件，如 `./src/server/collections/hello.ts`，内容如下：

```ts
import { defineCollection } '@nocobase/database';

export default defineCollection({
  name: 'hello',
  fields: [{ type: 'string', name: 'name' }],
});
```

修改 `./src/server/plugin.ts` 文件，内容如下

```ts
import { Plugin } from '@nocobase/server';

export class PluginHelloServer extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    // 这是一段示例，表示将 hello 表的所有操作对外公开
    this.app.acl.allow('hello', '*', 'public');
  }

  async install() {}

  async afterEnable() {}

  async afterDisable() {}

  async remove() {}
}

export default PluginHelloServer;
```

## 激活插件

**通过命令操作**

```bash
yarn pm enable @my-project/plugin-hello
```

**通过界面操作**

访问插件管理器界面，查看刚添加的插件，点击激活。
插件管理器页面默认为 http://localhost:13000/admin/pm/list/local/

<img src="https://nocobase.oss-cn-beijing.aliyuncs.com/7b7df26a8ecc32bb1ebc3f99767ff9f9.png" />

:::info{title="提示"}
在插件里配置的 collection，插件激活时自动与数据库同步，生成相对应的数据表和字段。如果插件已经激活，需要通过升级命令 `yarn nocobase upgrade` 来处理数据表的同步问题。
:::

## 调试插件

如果应用未启动，需要先启动应用

```bash
# for development
yarn dev

# for production
yarn build
yarn start
```

向插件的 hello 表里插入数据

```bash
curl --location --request POST 'http://localhost:13000/api/hello:create' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Hello world"
}'
```

查看 hello 表数据

```bash
curl --location --request GET 'http://localhost:13000/api/hello:list'
```

## 构建并打包插件

如果是 clone 的源码，在源码仓库创建的插件，需要执行 `yarn build` 进行一次全量构建，否则会报类型错误。

```bash
yarn build @my-project/plugin-hello --tar

# 分步骤
yarn build @my-project/plugin-hello
yarn nocobase tar @my-project/plugin-hello
```

打包的插件默认保存路径为 `storage/tar/@my-project/plugin-hello.tar.gz`

## 上传至其他 NocoBase 应用

仅 v0.14 及以上版本支持

<img src="https://nocobase.oss-cn-beijing.aliyuncs.com/8aa8a511aa8c1e87a8f7ee82cf8a1359.gif" />
