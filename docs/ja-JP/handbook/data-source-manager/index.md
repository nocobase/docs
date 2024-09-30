# データソース管理

<PluginInfo name="data-source-manager"></PluginInfo>

## 概要

NocoBaseは、データソースおよびそのデータテーブルを管理するためのデータソース管理プラグインを提供します。このプラグインは、すべてのデータソースを管理するためのインターフェースを提供しますが、データソースへの接続機能は持っていません。さまざまなデータソースプラグインと組み合わせて使用する必要があります。現在サポートされている接続可能なデータソースは以下の通りです：

- [メインデータベース](/handbook/data-source-main)：NocoBaseの主データベースで、MySQL、PostgreSQL、SQLiteなどのリレーショナルデータベースをサポートしています。
- [外部MySQL](/handbook/data-source-external-mysql)：外部のMySQLデータベースをデータソースとして使用します。
- [外部MariaDB](/handbook/data-source-external-mariadb)：外部のMariaDBデータベースをデータソースとして使用します。
- [外部PostgreSQL](/handbook/data-source-external-postgres)：外部のPostgreSQLデータベースをデータソースとして使用します。

さらに、さまざまなタイプをプラグインで拡張することができ、一般的なデータベースやAPI（SDK）を提供するプラットフォームなども含まれます。

## インストール

内蔵プラグインのため、別途インストールする必要はありません。

## 使用説明

アプリケーションの初期インストール時には、NocoBaseデータを保存するためのデータソースがデフォルトで提供され、これを主データベースと呼びます。詳細については、[主データベース](/handbook/data-source-main)のドキュメントを参照してください。

![20240322220423](https://static-docs.nocobase.com/20240322220423.png)

また、外部データベースをデータソースとして使用することもサポートされています。詳細については、[外部データベース / 概要](/handbook/data-source-manager/external-database)のドキュメントを参照してください。

![20240507204316](https://static-docs.nocobase.com/20240507204316.png)

HTTP APIソースのデータに接続することも可能です。詳細については、[HTTP API データソース](/handbook/data-source-http-api)のドキュメントをご覧ください。

