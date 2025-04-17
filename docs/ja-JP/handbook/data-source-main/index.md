# 主データベース

<PluginInfo name="data-source-main"></PluginInfo>

## 紹介

NocoBase のマスターデータベースは、システムテーブルのデータやカスタムテーブルのデータなど、ビジネスデータとアプリケーションのメタデータの両方を保存するために使用できます。主データベースは、MySQL、PostgreSQL などのリレーショナルデータベースをサポートしています。NocoBaseアプリケーションをインストールする際には、主データベースも同時にインストールされ、削除することはできません。

## インストール

内蔵プラグインのため、個別のインストールは不要です。

## データテーブル管理

![20240322230134](https://static-docs.nocobase.com/20240322230134.png)

### 様々なデータテーブルの作成をサポート

- [一般コレクション](/handbook/data-source-main/general-collection)：よく使われるシステムフィールドが内蔵されています。
- [継承コレクション](/handbook/data-source-main/inheritance-collection)：親テーブルを作成し、その親テーブルから子テーブルを派生させることが可能です。子テーブルは親テーブルの構造を継承し、自分の列を定義できます。
- [木構造コレクション](/handbook/collection-tree)：木構造のテーブルで、現在は隣接リスト設計のみをサポートしています。
- [カレンダーコレクション](/handbook/calendar/calendar-collection)：カレンダー関連のイベントテーブルを作成するために使用します。
- [ファイルコレクション](/handbook/file-manager/file-collection)：ファイルストレージの管理に使用されます。
- [式コレクション](/handbook/workflow-dynamic-calculation/expression)：ワークフローの動的式シナリオに利用されます。
- [SQLコレクション](/handbook/collection-sql)：実際のデータベーステーブルではなく、SQLクエリを迅速に構造化して表示するためのものです。
- [ビューコレクション](/handbook/collection-view)：既存のデータベースビューに接続します。
- [外部コレクション](/handbook/collection-fdw)：データベースシステムが外部データソース内のデータに直接アクセスし、クエリを実行できるようにします。FDW技術に基づいています。

### データテーブルの分類管理をサポート

![20240322231520](https://static-docs.nocobase.com/20240322231520.png)

### 豊富なデータテーブルフィールドタイプを提供

![20240322230950](https://static-docs.nocobase.com/20240322230950.png)

詳細については「[データテーブルフィールド / 概要](/handbook/data-modeling/collection-fields)」セクションをご覧ください。

