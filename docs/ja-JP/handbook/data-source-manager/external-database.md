# 外部データベース

## 概要

外部に存在するデータベースをデータソースとして使用します。現在サポートされている外部データベースは、MySQL、MariaDB、PostgreSQLです。

## 使用説明

### 外部データベースの追加

プラグインを有効化した後、データソース管理の「新規追加」ドロップダウンメニューから選択して追加できます。

![20240507204316](https://static-docs.nocobase.com/20240507204316.png)

接続するデータベースの情報を入力します。

![20240507204820](https://static-docs.nocobase.com/20240507204820.png)

### データテーブルの同期

外部データベースとの接続が確立されると、データソース内のすべてのデータテーブルが直接読み込まれます。外部データベースでは、データテーブルを直接追加したり、テーブル構造を変更することはできません。変更が必要な場合は、データベースクライアントを使用して操作し、インターフェース上で「更新」ボタンをクリックして同期します。

![20240507204725](https://static-docs.nocobase.com/20240507204725.png)

### フィールドの設定

外部データベースは、既存のデータテーブルのフィールドを自動的に読み取り、表示します。フィールドのタイトル、データタイプ（フィールドタイプ）、UIタイプ（フィールドインターフェース）を迅速に確認し、設定できます。また、「編集」ボタンをクリックすることで、さらに多くの設定を変更できます。

![20240507210537](https://static-docs.nocobase.com/20240507210537.png)

外部データベースではテーブル構造の変更がサポートされていないため、新しいフィールドを追加する際には、選択可能なタイプはリレーションフィールドのみです。リレーションフィールドは実際のフィールドではなく、テーブル間の接続を確立するために使用されます。

![20240507220140](https://static-docs.nocobase.com/20240507220140.png)

詳細については、[データテーブルフィールド/概要](/handbook/data-modeling/collection-fields)の章を参照してください。

### フィールドタイプのマッピング

NocoBaseは、外部データベースのフィールドタイプに対して、対応するデータタイプ（フィールドタイプ）とUIタイプ（フィールドインターフェース）を自動的にマッピングします。

- データタイプ（Field type）：フィールドが格納できるデータの種類、形式、および構造を定義するために使用されます。
- フィールドインターフェース（Field interface）：ユーザーインターフェースでフィールド値を表示および入力するために使用されるコントロールの種類を指します。

| PostgreSQL | MySQL/MariaDB | NocoBase データ型 | NocoBase インターフェース型 |
| - | - | - | - |
| BOOLEAN | BOOLEAN<br/>TINYINT(1) | boolean | checkbox <br/> switch |
| SMALLINT<br/>INTEGER<br/>SERIAL<br/>SMALLSERIAL | TINYINT<br/>SMALLINT<br/>MEDIUMINT<br/>INTEGER | integer<br/>boolean<br/>sort | integer<br/>sort<br/>checkbox<br/>switch<br/>select<br/>radioGroup |
| BIGINT<br/>BIGSERIAL | BIGINT | bigInt<br/>sort | integer<br/>sort<br/>checkbox<br/>switch<br/>select<br/>radioGroup<br/>unixTimestamp<br/>createdAt<br/>updatedAt |
| REAL | FLOAT | float | number<br/>percent |
| DOUBLE PRECISION | DOUBLE PRECISION | double | number<br/>percent |
| DECIMAL<br/>NUMERIC | DECIMAL | decimal | number<br/>percent<br/>currency |
| VARCHAR<br/>CHAR | VARCHAR<br/>CHAR | string<br/>password<br/>uuid<br/>nanoid | input<br/>email<br/>phone<br/>password<br/>color<br/>icon<br/>select<br/>radioGroup<br/>uuid<br/>nanoid |
| TEXT | TEXT<br/>TINYTEXT<br/>MEDIUMTEXT<br/>LONGTEXT | text<br/>json | textarea<br/>markdown<br/>vditor<br/>richText<br/>url<br/>json |
| UUID | - | uuid | uuid |
| JSON<br/>JSONB | JSON | json | json |
| TIMESTAMP | DATETIME<br/>TIMESTAMP | date | date<br/>time<br/>createdAt<br/>updatedAt |
| DATE | DATE | dateOnly | datetime |
| TIME | TIME | time | time |
| - | YEAR |  | datetime |
| CIRCLE |  | circle | json<br/>circle |
| PATH<br/>GEOMETRY(LINESTRING) | LINESTRING | lineString | json<br/>lineString |
| POINT<br/>GEOMETRY(POINT) | POINT | point | json<br/>point |
| POLYGON<br/>GEOMETRY(POLYGON) | POLYGON | polygon | json<br/>polygon |
| GEOMETRY | GEOMETRY | - | - |
| BLOB | BLOB | blob | - |
| ENUM | ENUM | enum | select<br/>radioGroup |
| ARRAY | - | array | multipleSelect<br/>checkboxGroup |
| BIT | BIT | - | - |
| SET | SET | set | multipleSelect<br/>checkboxGroup |
| RANGE | - | - | - |

### サポートされていないフィールドタイプ

サポートされていないフィールドタイプは別途表示されます。これらのフィールドは、開発者による適応が必要です。

![20240507221854](https://static-docs.nocobase.com/20240507221854.png)

### フィルター対象キーの設定

ブロックとして表示されるデータテーブルには、フィルター対象キーを設定する必要があります。フィルター対象キーとは、特定のフィールドに基づいてデータをフィルタリングするためのもので、フィールドの値は一意である必要があります。フィルター対象キーはデータテーブルの主キーフィールドがデフォルトですが、ビューや主キーのないデータテーブル、複合主キーのデータテーブルの場合は、カスタムフィルター対象キーを設定する必要があります。

![20240507210230](https://static-docs.nocobase.com/20240507210230.png)

フィルター対象キーが設定されたデータテーブルのみがページに追加できます。

![20240507222827](https://static-docs.nocobase.com/20240507222827.png)

