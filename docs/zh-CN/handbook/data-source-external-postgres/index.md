# 外部数据源 - PostgreSQL

<PluginInfo commercial="true" name="data-source-external-postgres"></PluginInfo>

## 介绍

使用外部的 PostgreSQL 数据库作为数据源。

## 安装

该插件为商业插件，需要通过插件管理器上传并激活插件

![20240323162741](https://static-docs.nocobase.com/20240323162741.png)

## 数据源管理

### 添加 PostgreSQL 数据源

激活插件之后，就可以在数据源管理的 Add new 下拉菜单中选择并添加 PostgreSQL 了。

![20240507204316](https://static-docs.nocobase.com/20240507204316.png)

填写需要接入的 PostgreSQL 数据库信息

![20240507204820](https://static-docs.nocobase.com/20240507204820.png)

查看数据源里的数据表

![20240507225321](https://static-docs.nocobase.com/20240507225321.png)

:::warning
如果数据库里的表结构变更了，需要点击右上角的刷新按钮进行同步。
:::

### 配置字段

数据库中真实的字段会直接罗列出来，可以快速查看并配置字段的标题、存储类型（Field type）和 UI 类型（Field interface），复杂的字段，可以点击「编辑」，修改更多配置。

![20240507210537](https://static-docs.nocobase.com/20240507210537.png)

关系字段配置需要新增字段

![20240507220140](https://static-docs.nocobase.com/20240507220140.png)

更多字段的配置查看 「[数据表字段/概述](/handbook/data-modeling/collection-fields)」 章节介绍

### PostgreSQL 字段类型映射

| PostgreSQL | NocoBase Field Type | NocoBase Field Interface |
|  -------------------------------  |  ------------------------  |  ------------------------------------------------------------------------  |
| BOOLEAN<br/>TINYINT(1) | boolean | checkbox <br/> switch |
| TINYINT<br/>SMALLINT<br/>MEDIUMINT<br/>INTEGER | integer<br/>boolean<br/>sort | integer<br/>sort<br/>checkbox<br/>switch<br/>select<br/>radioGroup |
| BIGINT | bigInt<br/>sort | integer<br/>sort<br/>checkbox<br/>switch<br/>select<br/>radioGroup<br/>unixTimestamp<br/>createdAt<br/>updatedAt |
| FLOAT | float | number<br/>percent |
| DOUBLE PRECISION | double | number<br/>percent |
| DECIMAL | decimal | number<br/>percent<br/>currency |
| VARCHAR<br/>CHAR | string<br/>password<br/>uuid<br/>nanoid | input<br/>email<br/>phone<br/>password<br/>color<br/>icon<br/>select<br/>radioGroup<br/>uuid<br/>nanoid |
| TEXT<br/>TINYTEXT<br/>MEDIUMTEXT<br/>LONGTEXT | text<br/>json | textarea<br/>markdown<br/>vditor<br/>richText<br/>url<br/>json |
| - | uuid | uuid |
| JSON | json | json |
| DATETIME<br/>TIMESTAMP | date | date<br/>time<br/>createdAt<br/>updatedAt |
| DATE | dateOnly | datetime |
| TIME | time | time |
| YEAR |  | datetime |
|  | circle | json<br/>circle |
| LINESTRING | lineString | Json<br/>lineString |
| POINT | point | json<br/>point |
| POLYGON | polygon | json<br/>polygon |
| GEOMETRY |  -  |  -  |
| BLOB | blob |  -  |
| ENUM | enum | select<br/>radioGroup |
|  -  | array | multipleSelect<br/>checkboxGroup |
| BIT | - | - |
| SET | set | multipleSelect<br/>checkboxGroup |

### 不支持的字段类型

不支持的字段类型会单独展示出来，这些字段需要开发适配之后才能使用

![20240507221854](https://static-docs.nocobase.com/20240507221854.png)

## 使用场景

### 作为数据区块的数据源

:::warning{title=警告}
作为区块展示的数据表必须配置了筛选目标键（Filter target key），筛选目标键指的是根据特定字段筛选数据，字段值必须具备唯一性。筛选目标键默认为数据表主键字段，如果是视图或者无主键数据表、联合主键的数据表，需要自定义筛选目标键。
:::

![20240507225457](https://static-docs.nocobase.com/20240507225457.png)

设置了筛选目标键的数据表就可以在页面里添加了

![20240507225726](https://static-docs.nocobase.com/20240507225726.png)

数据区块的左上角会显示对应的 `数据源 > 数据表` 信息

![20240507225636](https://static-docs.nocobase.com/20240507225636.png)

### 作为工作流的数据来源

![20240507225821](https://static-docs.nocobase.com/20240507225821.png)

更多内容查看 [工作流](/handbook/workflow) 手册