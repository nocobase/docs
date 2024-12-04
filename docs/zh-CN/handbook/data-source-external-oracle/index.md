# 外部数据源 - Oracle

<PluginInfo commercial="true" name="data-source-external-oracle"></PluginInfo>

## 介绍

使用外部的 Oracle 数据库作为数据源。目前支持的版本 Oracle >= 11g

## 安装

### 前提条件：安装 Oracle 客户端

Linux 的示例：

```bash
apt-get update
apt-get install -y unzip wget
wget --no-check-certificate https://download.oracle.com/otn_software/linux/instantclient/1925000/instantclient-basic-linux.x64-19.25.0.0.0dbru.zip
unzip instantclient-basic-linux.x64-19.25.0.0.0dbru.zip -d /opt/
echo /opt/instantclient_19_25 > /etc/ld.so.conf.d/oracle-instantclient.conf
ldconfig
```

后续插件的安装与激活参考 [商业插件的安装与升级](/welcome/getting-started/plugin)

## 使用说明

查看 [数据源 / 外部数据库](/handbook/data-source-manager/external-database) 章节
