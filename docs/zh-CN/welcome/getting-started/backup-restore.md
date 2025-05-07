# 应用的备份和还原

## 背景

自 NocoBase v0.19 起，我们推出了 `@nocobase/plugin-backup-restore` 插件，用于应用备份和还原。但在实际使用中，体验并不理想，主要存在以下问题：

1. 无法备份和还原数据库字段的默认值、唯一索引等数据库层面的元数据；
2. 数据库的视图、存储过程、函数、触发器等无法进行备份或还原；
3. 每个插件表单需要单独配置 `dumpRules`，并可能需要插件开发者自定义逻辑，否则备份和还原容易失败；
4. 备份分组设计复杂，理解成本较高，选择不当可能导致备份失败或数据丢失；
5. 备份和还原过程发生在应用层，一旦应用无法启动，备份或还原也会失败。

经过慎重考虑，从 v1.4 版本起，我们决定废弃该插件。那么在新版本中，如何进行应用备份和还原呢？本文将为你详细介绍新的备份方案。

## 应该备份哪些数据？

在 NocoBase 的备份和还原过程中，主要涉及以下几类数据：

* **主数据库数据**：支持的主数据库类型包括 PostgreSQL、MySQL、MariaDB 和 KingbaseES；
* **外部数据库数据**：支持的外部数据库类型包括 PostgreSQL、MySQL、MariaDB、MSSQL、Oracle 和 KingbaseES；
* **子应用数据库数据**：每个子应用都是独立的数据库，若使用 PostgreSQL 也支持通过 schema 区分不同子应用；
* **storage 目录的数据**：可以整个文件夹全部备份，也可以只备份一些重要的数据，如：
  * **附件数据**：`./storage/uploads` 目录的文件，文件管理器本地存储的文件；
  * **插件代码**：`./storage/plugins` 目录的插件，包括商业插件和第三方插件。

## 备份和还原的流程

### 1. 备份数据库数据

各数据库的备份命令如下：

#### PostgreSQL

```bash
pg_dump -U [用户名] -h [主机地址] -p [端口] -F c -b --quote-all-identifiers -f [备份文件路径] [数据库名]
```

#### MySQL/MariaDB

```bash
mysqldump -u [用户名] -p -h [主机地址] -P [端口] --databases [数据库名] --replace --single-transaction --column-statistics=0 --skip-lock-tables --routines --triggers > [备份文件路径].sql
```

### 2. 将备份还原到目标应用的数据库里

各数据库的还原命令如下：

#### PostgreSQL

```bash
pg_restore -U [用户名] -h [主机地址] -p [端口] -d [数据库名] --clean --if-exists --no-owner [备份文件路径]
```

#### MySQL/MariaDB

```bash
mysql -u [用户名] -p -h [主机地址] -P [端口] [数据库名] < [备份文件路径].sql
```

### 3. 用备份的 storage 覆盖掉目标应用的 storage

```bash
# 1. 将 /app2/storage/ 目录备份到 /app2/storage-bak/
mv /app2/storage /app2/storage-bak

# 2. 复制 /app1/storage/ 的所有内容到 /app2/storage/
cp -r /app1/storage/. /app2/storage/
```

### 4. 执行升级命令并启动应用

```bash
# 升级应用
yarn nocobase upgrade

# 生产环境启动应用
yarn start

# 本地环境启动应用
yarn dev
```

备注：
* 如果是 Docker 环境，直接重启容器即可

## 总结

本文为所有使用 NocoBase 的用户提供了详细的备份与还原步骤，你可以根据实际需求进行调整和封装，也可以结合 `crontab` 实现自动化备份功能。

此外，从 NocoBase v1.4 起，企业版用户也可以直接使用全新的 「[备份管理器](/handbook/backups)」 插件，轻松实现应用数据的备份与还原。
