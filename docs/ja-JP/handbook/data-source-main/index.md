# 主データベース

<PluginInfo name="data-source-main"></PluginInfo>

## イントロダクション

NocoBaseの主データベースは、ビジネスデータの保存だけでなく、アプリケーションのメタデータ（システムテーブルデータやカスタムテーブルデータなど）の保存にも利用されます。主データベースは、MySQL、PostgreSQL、SQLiteなどのリレーショナルデータベースをサポートしています。NocoBaseアプリケーションをインストールする際には、主データベースも同時にインストールされ、削除することはできません。

## インストール

内蔵プラグインのため、個別のインストールは不要です。

## データテーブル管理

![20240322230134](https://static-docs.nocobase.com/20240322230134.png)

### 様々なデータテーブルの作成をサポート

- [一般テーブル](/handbook/data-source-main/general-collection)：よく使われるシステムフィールドが内蔵されています。
- [継承テーブル](/handbook/data-source-main/inheritance-collection)：親テーブルを作成し、その親テーブルから子テーブルを派生させることが可能です。子テーブルは親テーブルの構造を継承し、自分の列を定義できます。
- [ツリーテーブル](/handbook/collection-tree)：ツリー構造のテーブルで、現在は隣接リスト設計のみをサポートしています。
- [カレンダーテーブル](/handbook/calendar/calendar-collection)：カレンダー関連のイベントテーブルを作成するために使用します。
- [ファイルテーブル](/handbook/file-manager/file-collection)：ファイルストレージの管理に使用されます。
- [式テーブル](/handbook/workflow-dynamic-calculation/expression)：ワークフローの動的式シナリオに利用されます。
- [SQLテーブル](/handbook/collection-sql)：実際のデータベーステーブルではなく、SQLクエリを迅速に構造化して表示するためのものです。
- [ビューテーブル](/handbook/collection-view)：既存のデータベースビューに接続します。
- [外部テーブル](/handbook/collection-fdw)：データベースシステムが外部データソース内のデータに直接アクセスし、クエリを実行できるようにします。FDW技術に基づいています。

### データテーブルの分類管理をサポート

![20240322231520](https://static-docs.nocobase.com/20240322231520.png)

### 豊富なデータテーブルフィールドタイプを提供

![20240322230950](https://static-docs.nocobase.com/20240322230950.png)

詳細については「[データテーブルフィールド / 概要](/handbook/data-modeling/collection-fields)」セクションをご覧ください。

