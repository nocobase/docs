# データテーブルの概要

NocoBaseは、データ構造を記述するための独自のDSL（ドメイン固有言語）を提供しており、これを「コレクション」と呼びます。さまざまなソースからのデータ構造を統一し、後続のデータ管理、分析、アプリケーションのための信頼できる基盤を提供します。

![20240512161522](https://static-docs.nocobase.com/20240512161522.png)

多様なデータモデルを便利に利用できるように、さまざまなデータテーブルの作成をサポートしています：

- [一般コレクション](/handbook/data-source-main/general-collection)：一般的なシステムフィールドを内蔵しています。
- [継承コレクション](/handbook/data-source-main/inheritance-collection)：親テーブルを作成し、その親テーブルから子テーブルを派生させることができます。子テーブルは親テーブルの構造を継承し、独自の列を定義することも可能です。
- [木構造コレクション](/handbook/collection-tree)：木構造のテーブルで、現在は隣接リスト設計のみをサポートしています。
- [カレンダーコレクション](/handbook/calendar/calendar-collection)：カレンダーに関連するイベントテーブルを作成するために使用します。
- [ファイルコレクション](/handbook/file-manager/file-collection)：ファイルストレージの管理に使用します。
- [式コレクション](/handbook/collection-expression/collection)：ワークフローの動的式シナリオに使用します。
- [SQLコレクション](/handbook/collection-sql)：実際のデータベーステーブルではなく、SQLクエリを迅速に構造化して表示します。
- [ビューコレクション](/handbook/collection-view)：既存のデータベースビューを接続します。
- [外部コレクション](/handbook/collection-fdw)：FDWテクノロジーに基づき、データベースシステムが外部データソースのデータを直接にアクセスし、クエリを実行できるようになっている。
