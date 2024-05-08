# 备份和还原

<PluginInfo name="plugin-manager"></PluginInfo>

## 介绍

NocoBase 应用的备份与还原插件，可用于应用的复制、迁移、升级等场景。

## 安装

内置插件无需手动安装激活。

## 使用说明

![备份还原列表页](https://static-docs.nocobase.com/071b969c4db9bdc6d2c359e1b6bef5da.png)

### 新建备份

![新建备份](https://static-docs.nocobase.com/0e3d9410e6b1cfbda38044033f0b4053.png)

### 还原备份

可以选择从本地上传备份，也可以点击某个备份文件进行还原。

![还原备份](https://static-docs.nocobase.com/e4b95a4376260fd516de7828fd9f1056.png)

选择需要还原的数据，选中的数据将全量覆盖目标应用对应的数据表

![还原备份](https://static-docs.nocobase.com/9c7cb78b51c8f949e417b5a1e0180ae2.png)

### 备份说明

点击了解更多（Learn more）查看备份说明

![备份还原说明](https://static-docs.nocobase.com/4f54eba0fde2d6481274665cb184a79e.png)

备份说明

![备份还原说明](https://static-docs.nocobase.com/bd5c68cf7e35d04e525f9b13e48e32d9.png)

备份分组

分组中的详细数据请在备份说明的表格中插件。

- 必备数据：系统运行必备数据
- 跳过的数据：跳过不备份的数据
- 用户数据：与用户有关的数据
- 日志数据：记录各种操作的日志
- 第三方服务信息：一般为各种服务商信息，如文件存储服务、地图服务、短信服务商配置信息等等
- 自建表数据：通过数据表管理界面添加的数据表的数据
- 未知数据：未配置备份规则的数据

注：可以按分组选择需要备份或还原的数据，还原时选中的数据会全量覆盖。