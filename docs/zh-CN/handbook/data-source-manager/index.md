# 数据源管理

<PluginInfo name="data-source-manager"></PluginInfo>

## 介绍

NocoBase 提供了数据源管理插件，用于管理数据源的数据表，数据源管理插件只是提供所有数据源的管理界面，并不提供接入数据源的能力，需要和适配的各种数据源插件搭配使用，目前支持接入的数据源包括：

- [Main Database](/handbook/data-source-main)：NocoBase 主数据库，支持 MySQL、PostgreSQL、SQLite 等关系型数据库。
- [External MySQL](/handbook/data-source-mysql)：使用外部的 MySQL 数据库作为数据源。
- [External MariaDB](/handbook/data-source-mariadb)：使用外部的 MariaDB 数据库作为数据源。
- [External PostgreSQL](/handbook/data-source-postgres)：使用外部的 PostgreSQL 数据库作为数据源。

除此之外，也可以扩展，可以是常见的各类数据库，也可以是提供 API（SDK）的平台。

## 安装

内置插件，无需单独安装。

## 使用手册

应用初始化安装时，会默认提供一个用于存储 NocoBase 数据的数据源，称之为主数据库。

![20240322220423](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240322220423.png)

如果安装了外部数据源插件，也可以通过 Add new 连接外部数据源。

![20240322221124](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240322221124.png)