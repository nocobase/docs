# 多対多

選択科目システムには、学生とコースの2つのエンティティがあります。1人の学生は複数のコースを選択でき、1つのコースには複数の学生が選択できます。これにより、多対多の関係が構成されます。関係データベースでは、学生とコース間の多対多の関係を表すために、通常は中間テーブルを使用します。たとえば、選択科目テーブルです。このテーブルは、各学生が選択したコースや、各コースを選択した学生を記録できます。このような設計は、学生とコース間の多対多の関係を効果的に表現します。

ER図は以下の通りです。

![alt text](https://static-docs.nocobase.com/0e9921228e1ee375dc639431bb89782c.png)

フィールド設定は次の通りです。

![alt text](https://static-docs.nocobase.com/8e2739ac5d44fb46f30e2da42ca87a82.png)

## パラメータ説明

### ソースコレクション

ソーステーブル、現在のフィールドが存在するテーブルです。

### ターゲットコレクション

ターゲットテーブル、関連付けるテーブルを指定します。

### スルーコレクション

中間テーブル、2つのエンティティ間に多対多の関係が存在する場合、この関係を保存するために使用します。中間テーブルには2つの外部キーがあり、2つのエンティティ間の関連を保持します。

### ソースキー

外部キー制約が参照するフィールドで、ユニークである必要があります。

### 外部キー1

中間テーブルのフィールドで、ソーステーブルとの関連を確立するために使用されます。

### 外部キー2

中間テーブルのフィールドで、ターゲットテーブルとの関連を確立するために使用されます。

### ターゲットキー

外部キー制約が参照するフィールドで、ユニークである必要があります。

### ON DELETE

ON DELETEは、親テーブルのレコードを削除する際に関連する子テーブルの外部キー参照に対する操作ルールを指し、外部キー制約を定義する際のオプションの一つです。一般的なON DELETEオプションには以下が含まれます。

- **CASCADE**：親テーブルのレコードを削除すると、自動的に子テーブル内の関連するすべてのレコードも削除されます。
- **SET NULL**：親テーブルのレコードを削除すると、子テーブル内の関連する外部キー値がNULLに設定されます。
- **RESTRICT**：デフォルトオプションで、親テーブルのレコードを削除しようとすると、関連する子テーブルのレコードが存在する場合、親テーブルのレコードの削除が拒否されます。
- **NO ACTION**：RESTRICTに似ており、関連する子テーブルのレコードが存在する場合、親テーブルのレコードの削除が拒否されます。

