# 日付計算

<PluginInfo name="workflow-date-calculation" link="/handbook/workflow-date-calculation" commercial="true"></PluginInfo>

日付計算ノードは、時間の追加、時間の減算、時間文字列のフォーマット出力、時間単位の変換を含む9種類の計算関数を提供します。各関数には特定の入力値タイプと出力値タイプがあり、他のノードの結果をパラメータ変数として受け取ることができます。計算パイプラインを使用して設定された関数の計算結果を連結することで、最終的に期待される出力を得ることが可能です。

## 使用マニュアル

### ノードの作成

ワークフロー設定画面で、プロセス内のプラス（“+”）ボタンをクリックして「日付計算」ノードを追加します：

![日付計算ノード_ノード作成](https://static-docs.nocobase.com/[画像].png)

### ノード設定

![日付計算ノード_ノード設定](https://static-docs.nocobase.com/20240817184423.png)

#### 入力値

入力値は変数または日付の定数を選択できます。変数はこのワークフローをトリガーするデータや、上流ノードの結果であり、定数は任意の日付を指定できます。

#### 入力値タイプ

入力値のタイプは、次の2種類に分かれます。

* **日付タイプ：** 入力値が最終的に日付時間に変換できるタイプで、数値タイプのタイムスタンプや時間を指す文字列を含みます。
* **数値タイプ：** 入力値のタイプは後の時間計算ステップの選択に影響を与えるため、正しく入力値のタイプを選択する必要があります。

#### 計算ステップ

各計算ステップは、計算関数とそのパラメータ設定から構成されており、パイプラインデザインを採用しています。前の関数で計算された結果は次の関数の入力値として引き続き使用されます。この方法で、一連の時間計算と変換を完了することができます。

各計算ステップの後、出力タイプは固定されており、次の計算で使用できる関数に影響を与えます。タイプが一致しない場合、1つのステップの結果は最終ノードの出力結果となります。

### 計算関数

#### 時間を追加する

- **受け取る入力値の型：** 日付
- **パラメータ：**
  - 追加する数量（数値またはノード内の変数を選択可能）。
  - 時間単位。
- **出力値の型：** 日付
- **例：** 入力値が `2024-7-15 00:00:00`、数量が `1`、単位が「日」の場合、計算結果は `2024-7-16 00:00:00` になります。

#### 時間を減算する

- **受け取る入力値の型：** 日付
- **パラメータ：**
  - 減少する数量（数値またはノード内の変数を選択可能）。
  - 時間単位。
- **出力値の型：** 日付
- **例：** 入力値が `2024-7-15 00:00:00`、数量が `1`、単位が「日」の場合、計算結果は `2024-7-14 00:00:00` になります。

#### 別の日付との差を計算する

- **受け取る入力値の型：** 日付
- **パラメータ：**
  - 比較する日付（定数またはワークフロー内の変数を選択可能）。
  - 時間単位。
  - 絶対値を取るかどうか。
  - 切り捨て操作：小数点を保持、四捨五入、切上げまたは切下げから選択。
- **出力値の型：** 数値
- **例：** 入力値が `2024-7-15 00:00:00`、比較対象が `2024-7-16 06:00:00`、単位が「日」で、絶対値を取らず小数点を保持する場合、計算結果は `-1.25` になります。

:::info{title=注意}
絶対値と切り捨てを同時に設定した場合、まず絶対値を取得し、その後切り捨てが適用されます。
:::

#### 特定の単位における時間の値を取得する

- **受け取る入力値の型：** 日付
- **パラメータ：**
  - 時間単位。
- **出力値の型：** 数値
- **例：** 入力値が `2024-7-15 00:00:00`、単位が「日」の場合、計算結果は `15` になります。

#### 日付を特定の単位の開始時間に設定する

- **受け取る入力値の型：** 日付
- **パラメータ：**
  - 時間単位。
- **出力値の型：** 日付
- **例：** 入力値が `2024-7-15 14:26:30`、単位が「日」の場合、計算結果は `2024-7-15 00:00:00` になります。

#### 日付を特定の単位の終了時間に設定する

- **受け取る入力値の型：** 日付
- **パラメータ：**
  - 時間単位。
- **出力値の型：** 日付
- **例：** 入力値が `2024-7-15 14:26:30`、単位が「日」の場合、計算結果は `2024-7-15 23:59:59` になります。

#### 閏年を判定する

- **受け取る入力値の型：** 日付
- **パラメータ：** なし
- **出力値の型：** ブール
- **例：** 入力値が `2024-7-15 14:26:30` の場合、計算結果は `true` になります。

#### 文字列にフォーマットする

- **受け取る入力値の型：** 日付
- **パラメータ：**
  - フォーマット（[Day.js: Format](https://day.js.org/docs/zh-CN/display/format)を参考）。
- **出力値の型：** 文字列
- **例：** 入力値が `2024-7-15 14:26:30`、フォーマットが `the time is YYYY/MM/DD HH:mm:ss` の場合、計算結果は `the time is 2024/07/15 14:26:30` になります。

#### 単位を変換する

- **受け取る入力値の型：** 数値
- **パラメータ：**
  - 変換前の時間単位。
  - 変換後の時間単位。
  - 切り捨て操作のオプション（小数点を保持、四捨五入、切上げ、切下げ）。
- **出力値の型：** 数値
- **例：** 入力値が `2`、変換前の単位が「週」、変換後の単位が「日」で、小数点を保持しない場合、計算結果は `14` になります。

### 例

![日付計算ノード_例](https://static-docs.nocobase.com/20240817184137.png)

プロモーション活動があると仮定し、各商品が作成される際に商品フィールドにプロモーション活動の終了時間を追加したいとします。この終了時間は商品作成時間の次の週の最終日の夜 23:59:59 です。これを実現するために、2つの時間関数を作成し、パイプライン方式で実行します：

1. 次の週の日付を計算する。
2. 得られた結果をその週の最終日の 23:59:59 にリセットする。

このようにして期待する時間値が得られ、次のノード、例えばデータテーブルの変更ノードに渡し、プロモーション活動の終了時間をデータテーブルに追加します。
