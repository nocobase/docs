# Data Source Manager

<PluginInfo name="data-source-manager"></PluginInfo>

## Introduction

NocoBase provides a data source manager plugin for managing data sources and data tables. The data source manager plugin only provides a management interface for all data sources, and does not provide the ability to access data sources. It needs to be used in conjunction with various data source plugins. The currently supported data sources include:

- [Main Database](/handbook/data-source-main): NocoBase's main database, which supports relational databases such as MySQL, PostgreSQL, SQLite, etc.
- [External MySQL](/handbook/data-source-mysql): Uses an external MySQL database as a data source.
- [External MariaDB](/handbook/data-source-mariadb): Uses an external MariaDB database as a data source.
- [External PostgreSQL](/handbook/data-source-postgres): Uses an external PostgreSQL database as a data source.

In addition, more types can be expanded through plugins, which can be common databases or platforms providing an API (SDK).

## Installation

This is a built-in plugin and does not need to be installed separately.

## User Manual

When the application is initialized and installed, a data source for storing NocoBase data is provided by default, referred to as the main database.

![20240322220423](https://static-docs.nocobase.com/20240322220423.png)

If external data source plugins are installed, you can also connect to external data sources via Add new.

![20240322221124](https://static-docs.nocobase.com/20240322221124.png)