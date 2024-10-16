# 概要

データモデリングはデータベース設計における重要なステップであり、現実世界のさまざまなデータとその相互関係を深く分析し、抽象化するプロセスです。このプロセスでは、データ間の内在的な関係を明らかにし、それをデータモデルとして形式化することで、情報システムのデータベース構造の基礎を築くことを目指します。NocoBaseはデータモデル駆動型のプラットフォームであり、以下の特徴を持っています：

## 様々なデータソースの接続をサポート

NocoBaseのデータソースは、一般的なデータベース、API（SDK）プラットフォーム、およびファイルをサポートしています。

![20240512085558](https://static-docs.nocobase.com/20240512085558.png)

NocoBaseは[データソース管理プラグイン](/handbook/data-source-manager)を提供しており、各データソースおよびそのデータテーブルを管理します。データソース管理プラグインは、すべてのデータソースの管理インターフェースを提供しますが、データソースを接続する機能はなく、さまざまなデータソースプラグインと組み合わせて使用する必要があります。現在サポートされているデータソースには以下が含まれます：

- [Main Database](/handbook/data-source-main)：NocoBaseの主データベースで、MySQL、PostgreSQL、SQLiteなどのリレーショナルデータベースをサポートします。
- [External MySQL](/handbook/data-source-external-mysql)：外部のMySQLデータベースをデータソースとして使用します。
- [External MariaDB](/handbook/data-source-external-mariadb)：外部のMariaDBデータベースをデータソースとして使用します。
- [External PostgreSQL](/handbook/data-source-external-postgres)：外部のPostgreSQLデータベースをデータソースとして使用します。

![20240512083651](https://static-docs.nocobase.com/20240512083651.png)

## 多様なデータモデリングツールを提供

**簡易なデータテーブル管理インターフェース**：さまざまなモデル（データテーブル）を作成したり、既存のモデル（データテーブル）を接続したりするためのインターフェースです。

![20240512090751](https://static-docs.nocobase.com/20240512090751.png)

**ERライクなダイアグラムのための視覚化インターフェイス**：ユーザーとビジネスニーズに基づいてエンティティとその関係を抽出するためのツールです。直感的で理解しやすいデータモデルの記述方法を提供します。ER図を通じて、システム内の主要なデータエンティティとそれらの関係をより明確に理解できます。

![20240512091042](https://static-docs.nocobase.com/20240410075906.png)

## 様々なデータテーブルの作成をサポート

| データテーブル | 説明 |
| - | - |
| [一般コレクション](/handbook/data-source-main/general-collection) | 一般的なシステムフィールドを内蔵しています。 |
| [継承コレクション](/handbook/data-source-main/inheritance-collection) | 親テーブルを作成し、その親テーブルから子テーブルを派生させます。子テーブルは親テーブルのフィールドを継承し、独自のフィールドを定義することも可能です。 |
| [木構造コレクション](/handbook/collection-tree) | 木構造のテーブルで、現在は隣接リストデザインのみをサポートしています。 |
| [カレンダーコレクション](/handbook/calendar/calendar-collection) | カレンダー関連のイベントテーブルを作成するために使用します。 |
| [ファイルコレクション](/handbook/file-manager/file-collection) | ファイルストレージの管理に使用します。 |
| [コメントテーブル](/handbook/comments/comment-collection) | データに対するコメントやフィードバックを保存するために使用します。 |
| [式コレクション](/handbook/workflow-dynamic-calculation/expression) | ワークフローの動的式シナリオに使用します。 |
| [SQLコレクション](/handbook/collection-sql) | 実際のデータベーステーブルではなく、SQLクエリを迅速に構造化して表示します。 |
| [ビューコレクション](/handbook/collection-view) | 既存のデータベースビューを接続します。 |
| [外部データテーブル（FDW）](/handbook/collection-fdw) | データベースのFDW技術を基にしてリモートデータテーブルを接続します。 |

より詳しい内容は「[データ表 / 概要](/handbook/data-modeling/collection)」の章をご覧ください。

## 豊富なフィールドタイプを提供

![20240512110352](https://static-docs.nocobase.com/20240512110352.png)

詳細については「[データテーブルのフィールド／概要](/handbook/data-modeling/collection-fields)」の章をご覧ください。

