# 外部データ表に接続する（FDW）

<PluginInfo name="collection-fdw"></PluginInfo>

## イントロダクション

データベースに基づいたフェデレーテッドデータラッパー（Foreign Data Wrapper）を用いて、リモートデータ表に接続する機能プラグインです。現在、MySQLおよびPostgreSQLデータベースをサポートしています。

:::info{title="データソースに接続する vs 外部データ表に接続する"}
- **データソースに接続する** とは、特定のデータベースまたはAPIサービスと接続を確立し、データベースの機能やAPIが提供するサービスをフルに利用することを指します。
- **外部データ表に接続する** とは、外部からデータを取得し、ローカルで使用するためにマッピングすることを指します。データベースではFDW（Foreign Data Wrapper）と呼ばれ、リモートテーブルをローカルテーブルのように使用することに重点を置いたデータベース技術であり、個別にテーブルを接続することができます。リモートアクセスに基づくため、使用時にはさまざまな制約や限界が存在します。

両者は併用可能であり、前者はデータソースとの接続を確立するために、後者はデータソース間のアクセスを可能にします。たとえば、あるPostgreSQLデータソースに接続した場合、そのデータソース内にFDWを使用して作成された外部データ表が存在することがあります。
:::

### MySQL

MySQLでは、`federated`エンジンを通じてリモートMySQLおよびそのプロトコル互換データベース（MariaDBなど）に接続することができます。詳細な情報は [Federated Storage Engine](https://dev.mysql.com/doc/refman/8.0/en/federated-storage-engine.html)を参照してください。

### PostgreSQL

PostgreSQLでは、さまざまなタイプの`fdw`拡張を使用して異なるリモートデータタイプをサポートします。現在サポートされている拡張は：

- [postgres_fdw](https://www.postgresql.org/docs/current/postgres-fdw.html)：PostgreSQLでリモートのPostgreSQLデータベースに接続します。
- [mysql_fdw(開発中)](https://github.com/EnterpriseDB/mysql_fdw)：PostgreSQLでリモートのMySQLデータベースに接続します。
- その他のタイプのFDW拡張については、[PostgreSQL Foreign Data Wrappers](https://wiki.postgresql.org/wiki/Foreign_data_wrappers)を参照してください。NocoBaseに接続するには、コード内で対応するインターフェースを実装する必要があります。

## インストール

### 前提条件

- NocoBaseの主データベースがMySQLである場合、`federated`を有効にする必要があります。詳細は[MySQLでのfederatedエンジンの有効化](./enable-federated.md)を参照してください。

次に、プラグインマネージャーを通じてプラグインをインストールし、有効にします。

![プラグインのインストールと有効化](https://static-docs.nocobase.com/f84276c5712851fb3ff33af3f1ff0f59.png)

## 使用マニュアル

「データテーブル管理 > データテーブルの作成」ドロップダウンから「外部データに接続」を選択します。

![外部データに接続](https://static-docs.nocobase.com/029d946a6d067d1c35a39755219d623c.png)

「データベースサービス」のドロップダウンオプションから、既存のデータベースサービスを選択するか、「データベースサービスを作成」を選択します。

![データベースサービス](https://static-docs.nocobase.com/766271708a911950a5599d60d6be4a4d.png)

データベースサービスを作成します。

![データベースサービスの作成](https://static-docs.nocobase.com/1e357216e04cc4f200bd6212827281c8.png)

データベースサービスを選択した後、「リモートテーブル」のドロップダウンオプションから接続するデータテーブルを選択します。

![接続するデータテーブルを選択](https://static-docs.nocobase.com/e91fd6152b52b4fc01b3808053cc8dc4.png)

フィールド情報の設定

![フィールド情報の設定](https://static-docs.nocobase.com/e618fecc5fe327f6a495e61405e5f040.png)

リモートテーブルに構造の変更があった場合は、「リモートテーブルから同期」を行うことができます。

![リモートテーブルから同期](https://static-docs.nocobase.com/3751a9a39f933889fb3fcc4d85a6f4ad.png)

リモートテーブルの同期

![リモートテーブルの同期](https://static-docs.nocobase.com/13f18200e31ea223fdd8dadaff1e9d28.png)

最後に、インターフェースに表示されます。

![インターフェースに表示](https://static-docs.nocobase.com/368fca27a99277d9360ca81350949357.png)

