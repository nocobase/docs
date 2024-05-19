# 向已有的 Add block 里添加子项

## 场景说明

Nocobase 有很多 `Add block` 按钮用于向界面添加区块，但是目前已有的区块类型不一定满足我们的需求，我们需要向已有的 `Add block` 里添加子项用于创建新的区块。

## 示例说明

我们基于 ant-design 的 [Carousel](https://ant.design/components/carousel) 组件创建一种新的区块类型，然后向已有的 `Add block` 里添加这个新的区块类型。

本文档完整的示例代码可以在 [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-initiaizer-item-to-block) 中查看。

TODO：效果展示

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
yarn pm create @nocobase-sample/plugin-add-initializer-item-to-block
yarn pm enable @nocobase-sample/plugin-add-initializer-item-to-block
```

然后启动项目即可：

```bash
yarn dev
```

然后登录后访问 [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/) 就可以看到插件已经安装并启用了。

## 功能实现

### 1. 实现新的区块类型

首先我们新建 `packages/plugins/@nocobase-sample/plugin-add-initializer-item-to-block/src/client/CarouselBlock.tsx` 文件，其内容如下：

### 2. 定义 Initializer Item

### 3. 添加到页面 Add block 中

### 4. 添加到弹窗 Add block 中


## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-add-initializer-item-to-block --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-add-initializer-item-to-block.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
