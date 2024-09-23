# データテーブルの概要

NocoBaseは、データ構造を記述するための独自のDSL（ドメイン固有言語）を提供しており、これを「コレクション」と呼びます。さまざまなソースからのデータ構造を統一し、後続のデータ管理、分析、アプリケーションのための信頼できる基盤を提供します。

![20240512161522](https://static-docs.nocobase.com/20240512161522.png)

多様なデータモデルを便利に利用できるように、さまざまなデータテーブルの作成をサポートしています：

- [一般テーブル](/handbook/data-source-main/general-collection)：一般的なシステムフィールドを内蔵しています。
- [継承テーブル](/handbook/data-source-main/inheritance-collection)：親テーブルを作成し、その親テーブルから子テーブルを派生させることができます。子テーブルは親テーブルの構造を継承し、独自の列を定義することも可能です。
- [ツリーテーブル](/handbook/collection-tree)：ツリー構造のテーブルで、現在は隣接リスト設計のみをサポートしています。
- [カレンダーテーブル](/handbook/calendar/calendar-collection)：カレンダーに関連するイベントテーブルを作成するために使用します。
- [ファイルテーブル](/handbook/file-manager/file-collection)：ファイルストレージの管理に使用します。
- [式テーブル](/handbook/workflow-dynamic-calculation/expression)：ワークフローの動的式シナリオに使用します。
- [SQLテーブル](/handbook/collection-sql)：実際のデータベーステーブルではなく、SQLクエリを迅速に構造化して表示します。
- [ビューテーブル](/handbook/collection-view)：既存のデータベースビューを接続します。
- [外部テーブル](/handbook/collection-fdw)：データベースシステムがFDW技術に基づいて外部データソース内のデータに直接アクセスし、クエリを実行できるようにします。

