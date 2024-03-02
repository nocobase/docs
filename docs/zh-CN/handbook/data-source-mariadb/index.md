# 数据源 - MariaDB

## 介绍

支持接入 MariaDB 数据库，并将其中的数据表作为区块展示在界面上

## 安装

该插件为商业插件，需要通过插件管理器上传并激活插件

![Alt text](./image.png)

## 使用说明

选择 MariaDB 数据源

![Alt text](./image-2.png)

填写需要接入的 MariaDB 数据库信息

![Alt text](./image-1.png)

查看并配置已接入的数据表

![Alt text](./image-3.png)

数据源支持「数据表」和「权限」的配置

![Alt text](./image-4.png)

配置字段

![Alt text](./image-6.png)

不支持的字段类型会单独展示出来，这些字段需要开发适配之后才能使用

![Alt text](./image-7.png)

作为区块展示

![Alt text](./image-8.png)

表格区块

![Alt text](./image-10.png)

:::warning{title=警告}
作为区块展示的数据表必须配置了主键，并且主键不能为联合主键
:::