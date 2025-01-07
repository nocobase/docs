# テンプレート印刷

<PluginInfo commercial="true" name="action-template-print"></PluginInfo>

## 紹介

テンプレート印刷プラグインは、Word、Excel、PowerPointのテンプレートファイル（`.docx`、`.xlsx`、`.pptx`形式をサポート）を編集し、テンプレート内にプレースホルダーと論理構造を設定することで、動的に所定の形式のファイル（`.docx`、`.xlsx`、`.pptx`、PDFファイル）を生成する強力なツールです。このプラグインは、見積書、請求書、契約書などのビジネス文書の生成に広く使用されており、文書生成の効率と正確性を大幅に向上させます。

### 主な機能

- **多形式対応**：Word、Excel、PowerPointテンプレートに対応し、さまざまな文書生成ニーズを満たします。
- **動的データ入力**：プレースホルダーと論理構造を使用して、文書内容を自動的に入力および生成します。
- **柔軟なテンプレート管理**：テンプレートの追加、編集、削除、分類管理をサポートし、メンテナンスと使用を容易にします。
- **豊富なテンプレート構文**：基本的な置換、配列アクセス、ループ、条件出力など、複雑な文書生成ニーズに対応するさまざまなテンプレート構文をサポートします。
- **フォーマッター対応**：条件出力、日付フォーマット、数字フォーマットなどの機能を提供し、文書の可読性と専門性を向上させます。
- **効率的な出力形式**：PDFファイルの直接生成をサポートし、共有と印刷を容易にします。

## 設定説明

### テンプレート印刷機能の有効化

1. **詳細ブロックを開く**：
  - アプリケーション内で、テンプレート印刷機能を使用する詳細ブロックに移動します。

2. **設定操作メニューに入る**：
  - 画面上部の「設定操作」メニューをクリックします。

3. **「テンプレート印刷」を選択**：
  - ドロップダウンメニューで「テンプレート印刷」オプションをクリックしてプラグイン機能を有効にします。

   ![テンプレート印刷の有効化](https://static-docs.nocobase.com/20241212150539-2024-12-12-15-05-43.png)

### テンプレートの設定

1. **テンプレート設定ページに入る**：
  - 「テンプレート印刷」ボタンの設定メニューで、「テンプレート設定」オプションを選択します。

   ![テンプレート設定オプション](https://static-docs.nocobase.com/20241212151858-2024-12-12-15-19-01.png)

2. **新しいテンプレートを追加**：
  - 「テンプレート追加」ボタンをクリックして、テンプレート追加ページに移動します。

   ![テンプレート追加ボタン](https://static-docs.nocobase.com/20241212151243-2024-12-12-15-12-46.png)

3. **テンプレート情報を入力**：
  - テンプレートフォームで、テンプレート名を入力し、テンプレートタイプ（Word、Excel、PowerPoint）を選択します。
  - 対応するテンプレートファイル（`.docx`、`.xlsx`、`.pptx`形式をサポート）をアップロードします。

   ![テンプレート名とファイルの設定](https://static-docs.nocobase.com/20241212151518-2024-12-12-15-15-21.png)

4. **テンプレートの編集と保存**：
  - 「フィールドリスト」ページに移動し、フィールドをコピーしてテンプレートに入力します。
    ![フィールドリスト](https://static-docs.nocobase.com/20250107141010.png)
    ![20241212152743-2024-12-12-15-27-45](https://static-docs.nocobase.com/20241212152743-2024-12-12-15-27-45.png)
  - 入力が完了したら、「保存」ボタンをクリックしてテンプレートの追加を完了します。

5. **テンプレート管理**：
  - テンプレートリストの右側にある「使用」ボタンをクリックすると、テンプレートを有効にできます。
  - 「編集」ボタンをクリックすると、テンプレート名を変更したり、テンプレートファイルを置き換えたりできます。
  - 「ダウンロード」ボタンをクリックすると、設定済みのテンプレートファイルをダウンロードできます。
  - 「削除」ボタンをクリックすると、不要なテンプレートを削除できます。誤って削除しないように、システムが確認を求めます。
  ![テンプレート管理](https://static-docs.nocobase.com/20250107140436.png)

## テンプレート構文

テンプレート印刷プラグインは、テンプレート内に動的データと論理構造を柔軟に挿入するためのさまざまな構文を提供します。以下に詳細な構文説明と使用例を示します。

### 基本的な置換

`{d.xxx}`形式のプレースホルダーを使用してデータを置換します。例：

- `{d.title}`：データセット内の`title`フィールドを読み取ります。
- `{d.date}`：データセット内の`date`フィールドを読み取ります。

**例**：

テンプレート内容：
```
お客様へ

当社製品をご購入いただきありがとうございます：{d.productName}。
注文番号：{d.orderId}
注文日：{d.orderDate}

ご利用いただきありがとうございます！
```

データセット：
```json
{
  "productName": "スマートウォッチ",
  "orderId": "A123456789",
  "orderDate": "2025-01-01"
}
```

レンダリング結果：
```
お客様へ

当社製品をご購入いただきありがとうございます：スマートウォッチ。
注文番号：A123456789
注文日：2025-01-01

ご利用いただきありがとうございます！
```

### 子オブジェクトへのアクセス

データセットに子オブジェクトが含まれている場合、ドット記法を使用して子オブジェクトのプロパティにアクセスできます。

**構文**：`{d.parent.child}`

**例**：

データセット：
```json
{
  "customer": {
    "name": "李雷",
    "contact": {
      "email": "lilei@example.com",
      "phone": "13800138000"
    }
  }
}
```

テンプレート内容：
```
顧客名：{d.customer.name}
メールアドレス：{d.customer.contact.email}
電話番号：{d.customer.contact.phone}
```

レンダリング結果：
```
顧客名：李雷
メールアドレス：lilei@example.com
電話番号：13800138000
```

### 配列へのアクセス

データセットに配列が含まれている場合、予約キーワード`i`を使用して配列内の要素にアクセスできます。

**構文**：`{d.arrayName[i].field}`

**例**：

データセット：
```json
{
  "staffs": [
    { "firstname": "James", "lastname": "Anderson" },
    { "firstname": "Emily", "lastname": "Roberts" },
    { "firstname": "Michael", "lastname": "Johnson" }
  ]
}
```

テンプレート内容：
```
最初の従業員の姓は {d.staffs[i=0].lastname}、名は {d.staffs[i=0].firstname}
```

レンダリング結果：
```
最初の従業員の姓は Anderson、名は James
```

### ループ出力

テンプレート印刷プラグインは、配列内のデータをループ出力することをサポートしており、ループの開始と終了位置を明示的に指定する必要はありません。テンプレート内で予約キーワード`i`と`i+1`を使用するだけで、プラグインが自動的にループ部分を認識して処理します。

#### 単純な配列ループ

**例**：会社の従業員データテーブルを生成

**データセット**：
```json
{
  "staffs": [
    { "firstname": "James", "lastname": "Anderson" },
    { "firstname": "Emily", "lastname": "Roberts" },
    { "firstname": "Michael", "lastname": "Johnson" }
  ]
}
```

**テンプレート**：

| 従業員名 | 従業員姓 |
|---|---|
| {d.staffs[i].firstname} | {d.staffs[i].lastname} |
| {d.staffs[i+1]} |  |

**レンダリング結果**：

| 従業員名  | 従業員姓   |
|---|---|
| James | Anderson |
| Emily | Roberts |
| Michael | Johnson |

**説明**：テンプレート内の`{d.staffs[i].firstname}`と`{d.staffs[i].lastname}`を使用して、各従業員の名と姓をループして入力します。`{d.staffs[i+1]}`は次の行のループ開始を示します。

#### ネストされた配列ループ

テンプレート印刷プラグインは、ネストされた配列を処理することをサポートしており、無限レベルのループネストが可能で、複雑なデータ構造の表示に適しています。

**例**：自動車ブランドとそのモデルを表示

**データセット**：
```json
{
  "cars": [
    {
      "brand": "Toyota",
      "models": [{ "size": "Prius 2" }, { "size": "Prius 3" }]
    },
    {
      "brand": "Tesla",
      "models": [{ "size": "S" }, { "size": "X" }]
    }
  ]
}
```

**テンプレート**：

```
ブランド：{d.cars[i].brand}
モデル：
{d.cars[i].models[j].size}
{d.cars[i].models[j+1].size}

---
```
![20241203152028-2024-12-03-15-20-29](https://static-docs.nocobase.com/20241203152028-2024-12-03-15-20-29.png)

**レンダリング結果**：
```
ブランド：Toyota
モデル：
Prius 2
Prius 3

---
ブランド：Tesla
モデル：
S
X

---
```
    
**説明**：外側のループで`i`を使用して各ブランドを巡回し、内側のループで`j`を使用して各ブランドのモデルを巡回します。`{d.cars[i].models[j].size}`と`{d.cars[i].models[j+1].size}`は、現在と次のモデルを入力するために使用されます。この方法で、複雑なデータ構造に適応するために無限レベルでループをネストできます。

### ソート機能

テンプレート印刷プラグインは、イテレータ`i`だけでなく、オブジェクトのプロパティに基づいて配列をソートすることを許可します。現在、指定されたプロパティで昇順にソートすることができ、降順ソートはまだサポートされていません。

**例**：「power」プロパティで自動車を昇順にソート

**データセット**：
```json
{
  "cars" : [
    { "brand" : "Lumeneo" , "power" : 3 },
    { "brand" : "Tesla"   , "power" : 1 },
    { "brand" : "Toyota"  , "power" : 2 }
  ]
}
```

**テンプレート**：
```
{d.cars:sort(power)}
ブランド：{d.cars[i].brand}
パワー：{d.cars[i].power} kW

---
```

**レンダリング結果**：
```
ブランド：Tesla
パワー：1 kW

---
ブランド：Toyota
パワー：2 kW

---
ブランド：Lumeneo
パワー：3 kW

---
```

**説明**：`:sort(power)`を使用して`cars`配列を`power`プロパティで昇順にソートし、各車のブランドとパワーを順にレンダリングします。

## フォーマッター

フォーマッターは、データを特定の形式に変換または条件判断を行うために使用され、テンプレートの柔軟性と表現力を向上させます。

### 条件出力

`showBegin`と`showEnd`を使用して特定の内容の表示と非表示を制御します。

**構文**：
```
{d.field:condition:showBegin}
内容
{d.field:showEnd}
```

**例**：契約テンプレートで、顧客タイプに基づいて特別条項を表示

**データセット**：
```json
{
  "customerType": "VIP"
}
```

**テンプレート内容**：
```
{d.customerType:ifEQ('VIP'):showBegin}
特別条項：
当社のVIP顧客として、追加の特典と専用サービスを享受できます。無料アップグレード、優先サポートなどが含まれます。
{d.customerType:showEnd}
```

**レンダリング結果**（`customerType`が"VIP"の場合）：
```
特別条項：
当社のVIP顧客として、追加の特典と専用サービスを享受できます。無料アップグレード、優先サポートなどが含まれます。
```

**説明**：`customerType`フィールドの値が"VIP"の場合、`showBegin`と`showEnd`の間の内容がレンダリングされ、それ以外の場合は非表示になります。

### 日付フォーマット

フォーマッターを使用して日付フィールドをフォーマット変換し、日付の可読性を向上させます。

**構文**：
```
{d.dateField:format(YYYY年MM月DD日)}
```

**例**：

**データセット**：
```json
{
  "orderDate": "2025-01-03T10:30:00Z"
}
```

**テンプレート内容**：
```
注文日：{d.orderDate:format(YYYY年MM月DD日)}
```

**レンダリング結果**：
```
注文日：2025年01月03日
```

**説明**：`format`フォーマッターを使用して、ISO形式の日付をより読みやすい形式に変換します。

### 数字フォーマット

フォーマッターを使用して数字をフォーマットし、千単位の区切りや小数点の桁数制御を行います。

**構文**：
```
{d.numberField:format(0,0.00)}
```

**例**：

**データセット**：
```json
{
  "totalAmount": 1234567.89
}
```

**テンプレート内容**：
```
総額：{d.totalAmount:format('0,0.00')} 元
```

**レンダリング結果**：
```
総額：1,234,567.89 元
```

**説明**：`format`フォーマッターを使用して、数字を千単位で区切り、小数点以下2桁を保持します。


## 文字列フォーマッターの例

### 1. lowerCase( )

**構文**：
```
{d.someField:lowerCase()}
```

**例**：

**データセット**：
```json
{
  "title": "My Car"
}
```

**テンプレート内容**：
```
車名：{d.title:lowerCase()}
```

**レンダリング結果**：
```
車名：my car
```

**説明**：すべての英字を小文字に変換します。値が文字列でない場合（数字、nullなど）、そのまま出力します。

---

### 2. upperCase( )

**構文**：
```
{d.someField:upperCase()}
```

**例**：

**データセット**：
```json
{
  "title": "my car"
}
```

**テンプレート内容**：
```
車名：{d.title:upperCase()}
```

**レンダリング結果**：
```
車名：MY CAR
```

**説明**：すべての英字を大文字に変換します。値が文字列でない場合、そのまま出力します。

---

### 3. ucFirst( )

**構文**：
```
{d.someField:ucFirst()}
```

**例**：

**データセット**：
```json
{
  "note": "hello world"
}
```

**テンプレート内容**：
```
備考：{d.note:ucFirst()}
```

**レンダリング結果**：
```
備考：Hello world
```

**説明**：最初の文字のみを大文字に変換し、他の文字はそのままにします。値がnullまたはundefinedの場合、nullまたはundefinedを返します。

---

### 4. ucWords( )

**構文**：
```
{d.someField:ucWords()}
```

**例**：

**データセット**：
```json
{
  "description": "my cAR"
}
```

**テンプレート内容**：
```
説明：{d.description:ucWords()}
**レンダリング結果**（DOCX シーン）：
```
変換後内容：
複数行テキスト：
1行目
2行目
3行目
```
> 実際のXMLには `<w:br/>` などの改行タグが挿入されます。

**説明**：`\n` または `\r\n` をドキュメントの正しい改行タグに変換し、最終ファイルで複数行テキストを正確に表示します。

---

### 10. substr( begin, end, wordMode )

**構文**：
```
{d.someField:substr(begin, end, wordMode)}
```

**例**：

**データセット**：
```json
{
  "text": "abcdefg hijklmnop"
}
```

**テンプレート内容**：
```
切り取り内容（インデックス0から5）：{d.text:substr(0, 5)}
切り取り内容（インデックス6から末尾）：{d.text:substr(6)}
```

**レンダリング結果**：
```
切り取り内容（インデックス0から5）：abcde
切り取り内容（インデックス6から末尾）：fg hijklmnop
```

**説明**：
- `begin` は開始インデックス、`end` は終了インデックス（含まれない）。
- `wordMode=true` の場合、単語を分割しないようにする。`wordMode='last'` の場合、`begin` から文字列の最後まで切り取る。

---

### 11. split( delimiter )

**構文**：
```
{d.someField:split(delimiter)}
```

**例**：

**データセット**：
```json
{
  "path": "ab/cd/ef"
}
```

**テンプレート内容**：
```
分割後の配列：{d.path:split('/')}
```

**レンダリング結果**：
```
分割後の配列：["ab","cd","ef"]
```

**説明**：指定された `delimiter` を使用して文字列を配列に分割します。`arrayJoin` やインデックスアクセスなどの他の配列操作と組み合わせて使用できます。

---

### 12. padl( targetLength, padString )

**構文**：
```
{d.someField:padl(targetLength, padString)}
```

**例**：

**データセット**：
```json
{
  "code": "abc"
}
```

**テンプレート内容**：
```
左側埋め（長さ8、文字'0'）：{d.code:padl(8, '0')}
```

**レンダリング結果**：
```
左側埋め（長さ8、文字'0'）：00000abc
```

**説明**：`targetLength` が元の文字列の長さより短い場合、元の文字列をそのまま返します。デフォルトの埋め文字はスペースです。

---

### 13. padr( targetLength, padString )

**構文**：
```
{d.someField:padr(targetLength, padString)}
```

**例**：

**データセット**：
```json
{
  "code": "abc"
}
```

**テンプレート内容**：
```
右側埋め（長さ10、文字'#'）：{d.code:padr(10, '#')}
```

**レンダリング結果**：
```
右側埋め（長さ10、文字'#'）：abc#######
```

**説明**：`padl` とは逆に、文字列の末尾を埋めます。デフォルトの埋め文字はスペースです。

---

### 14. ellipsis( maximum )

**構文**：
```
{d.someField:ellipsis(maximum)}
```

**例**：

**データセット**：
```json
{
  "articleTitle": "Carbone Report Extended Version"
}
```

**テンプレート内容**：
```
記事タイトル（最大5文字）：{d.articleTitle:ellipsis(5)}
```

**レンダリング結果**：
```
記事タイトル（最大5文字）：Carbo...
```

**説明**：文字列の長さが `maximum` を超える場合、切り詰めて `...` を追加します。

---

### 15. prepend( textToPrepend )

**構文**：
```
{d.someField:prepend(textToPrepend)}
```

**例**：

**データセット**：
```json
{
  "username": "john"
}
```

**テンプレート内容**：
```
ユーザー名：{d.username:prepend('Mr. ')}
```

**レンダリング結果**：
```
ユーザー名：Mr. john
```

**説明**：元の文字列の前に指定されたテキストを追加します。プレフィックスを追加する際に使用されます。

---

### 16. append( textToAppend )

**構文**：
```
{d.someField:append(textToAppend)}
```

**例**：

**データセット**：
```json
{
  "filename": "document"
}
```

**テンプレート内容**：
```
ファイル名：{d.filename:append('.pdf')}
```

**レンダリング結果**：
```
ファイル名：document.pdf
```

**説明**：元の文字列の後に指定されたテキストを追加します。サフィックスを追加する際に使用されます。

---

### 17. replace( oldText, newText )

**構文**：
```
{d.someField:replace(oldText, newText)}
```

**例**：

**データセット**：
```json
{
  "sentence": "abcdef abcde"
}
```

**テンプレート内容**：
```
置換結果：{d.sentence:replace('cd', 'OK')}
```

**レンダリング結果**：
```
置換結果：abOKef abOKe
```

**説明**：`oldText` に一致する部分をすべて `newText` に置き換えます。`newText` が指定されていないか `null` の場合、一致部分を削除します。

---

### 18. len( )

**構文**：
```
{d.someField:len()}
```

**例**：

**データセット**：
```json
{
  "greeting": "Hello World",
  "numbers": [1, 2, 3, 4, 5]
}
```

**テンプレート内容**：
```
テキストの長さ：{d.greeting:len()}
配列の長さ：{d.numbers:len()}
```

**レンダリング結果**：
```
テキストの長さ：11
配列の長さ：5
```

**説明**：文字列や配列の長さや要素数を返します。

---

### 19. t( )

**構文**：
```
{d.someField:t()}
```

**例**：

Carbone 設定で翻訳辞書を定義し、テキスト `"Submit"` を `"提出"` に翻訳するとします。

**データセット**：
```json
{
  "buttonLabel": "Submit"
}
```

**テンプレート内容**：
```
ボタン：{d.buttonLabel:t()}
```

**レンダリング結果**：
```
ボタン：提出
```

**説明**：翻訳辞書に基づいて文字列を翻訳します。レンダリング時に適切な翻訳マッピングを提供する必要があります。

---

### 20. preserveCharRef( )

**構文**：
```
{d.someField:preserveCharRef()}
```

**例**：

**データセット**：
```json
{
  "legalSymbol": "&#xa7;" 
}
```

**テンプレート内容**：
```
記号：{d.legalSymbol:preserveCharRef()}
```

**レンダリング結果**：
```
記号：&#xa7;
```

**説明**：`&#xxx;` または `&#xXXXX;` 形式の文字参照を保持し、XML でエスケープや置換されないようにします。特定の文字セットや特殊記号を生成する際に有用です。

---
以下の例は、前述のドキュメントスタイルに従って記述されており、**数値操作**に関連するフォーマッタを理解し活用するのに役立ちます。例には**構文**、**例**（「データセット」「テンプレート内容」「レンダリング結果」を含む）、および簡単な**説明**が含まれます。一部の例では、出力に影響を与えるオプションのレンダリング設定（`options`）についても言及しています。

---

## 数値操作フォーマッタの例

### 1. convCurr( target, source )

**構文**：
```
{d.numberField:convCurr(target, source)}
```

**例**：

**データセット**：
```json
{
  "amount": 1000
}
```

> `Carbone.render(data, options)` 時に、`options` が以下のように設定されているとします：
> ```json
> {
>   "currency": {
>     "source": "EUR",
>     "target": "USD",
>     "rates": {
>       "EUR": 1,
>       "USD": 2
>     }
>   }
> }
> ```

**テンプレート内容**：
```
EUR から USD にデフォルトで変換：{d.amount:convCurr()}
直接 USD を指定：{d.amount:convCurr('USD')}
直接 EUR を指定：{d.amount:convCurr('EUR')}
EUR->USD を経由し、強制的に USD->USD：{d.amount:convCurr('USD','USD')}
```

**レンダリング結果**：
```
EUR から USD にデフォルトで変換：2000
直接 USD を指定：2000
直接 EUR を指定：1000
EUR->USD を経由し、強制的に USD->USD：1000
```

**説明**：
- `target` が指定されていない場合、デフォルトで `options.currencyTarget`（例では "USD"）が使用されます。
- `source` が指定されていない場合、デフォルトで `options.currencySource`（例では "EUR"）が使用されます。
- `options.currencySource` が定義されていない場合、変換は行われず、元の値が出力されます。

---

### 2. round( precision )

**構文**：
```
{d.numberField:round(precision)}
```

**例**：

**データセット**：
```json
{
  "price": 10.05123,
  "discount": 1.05
}
```

**テンプレート内容**：
```
価格を小数点以下2桁に丸める：{d.price:round(2)}
割引を小数点以下1桁に丸める：{d.discount:round(1)}
```

**レンダリング結果**：
```
価格を小数点以下2桁に丸める：10.05
割引を小数点以下1桁に丸める：1.1
```

**説明**：  
`toFixed()` とは異なり、`round()` は正しい四捨五入方式で小数を処理します。例えば、`1.05` を小数点以下1桁に丸めると `1.1` になります。

---

### 3. formatN( precision )

**構文**：
```
{d.numberField:formatN(precision)}
```

**例**：

**データセット**：
```json
{
  "total": 1000.456
}
```

> `Carbone.render(data, options)` 時に、`options.lang` が `en-us` で、ドキュメントタイプが ODS/XLSX 以外（DOCX、PDF など）であるとします。

**テンプレート内容**：
```
数値フォーマット：{d.total:formatN()}
数値フォーマット（小数点以下2桁）：{d.total:formatN(2)}
```

**レンダリング結果**：
```
数値フォーマット：1,000.456
数値フォーマット（小数点以下2桁）：1,000.46
```

**説明**：
- `formatN()` は `options.lang` 設定に基づいて数値をローカライズ表示します（千の位区切り、小数点またはカンマの使用など）。
- ODS/XLSX ファイルの場合、数値の精度は主にセルのフォーマット設定に依存します。

---

### 4. formatC( precisionOrFormat, targetCurrencyCode )

**構文**：
```
{d.numberField:formatC(precisionOrFormat, targetCurrencyCode)}
```

**例**：

**データセット**：
```json
{
  "amount": 1000.456
}
```

> `Carbone.render(data, options)` 時に、以下のように設定されているとします：
> ```json
> {
>   "lang": "en-us",
>   "currency": {
>     "source": "EUR",
>     "target": "USD",
>     "rates": {
>       "EUR": 1,
>       "USD": 2
>     }
>   }
> }
> ```

**テンプレート内容**：
```
デフォルトで変換し、通貨記号を表示：{d.amount:formatC()}
通貨名のみ表示（M）：{d.amount:formatC('M')}
通貨名のみ表示（単数形）：{1:formatC('M')}
数値+記号（L）：{d.amount:formatC('L')}
数値+通貨名（LL）：{d.amount:formatC('LL')}
```

**レンダリング結果**：
```
デフォルトで変換し、通貨記号を表示：$2,000.91
通貨名のみ表示（M）：dollars
通貨名のみ表示（単数形）：dollar
数値+記号（L）：$2,000.00
数値+通貨名（LL）：2,000.00 dollars
```

**説明**：
- `precisionOrFormat` は数値（小数点以下の桁数を指定）または文字列（"M"、"L"、"LL"）を指定できます。
- 他の通貨に切り替える場合は、`targetCurrencyCode` を指定できます。例：`formatC('L', 'EUR')`。

---

### 5. add( )

**構文**：
```
{d.numberField:add(value)}
```

**例**：

**データセット**：
```json
{
  "base": 1000.4
}
```

**テンプレート内容**：
```
数値に2を加算：{d.base:add(2)}
```

**レンダリング結果**：
```
数値に2を加算：1002.4
```

**説明**：`d.base` に指定された値を加算します。文字列形式の数値または純粋な数値に対応します。

---

### 6. sub( )

**構文**：
```
{d.numberField:sub(value)}
```

**例**：

**データセット**：
```json
{
  "base": 1000.4
}
```

**テンプレート内容**：
```
数値から2を減算：{d.base:sub(2)}
```

**レンダリング結果**：
```
数値から2を減算：998.4
```

**説明**：`d.base` から指定された値を減算します。

---

### 7. mul( )

**構文**：
```
{d.numberField:mul(value)}
```

**例**：

**データセット**：
```json
{
  "base": 1000.4
}
```

**テンプレート内容**：
```
数値に2を乗算：{d.base:mul(2)}
```

**レンダリング結果**：
```
数値に2を乗算：2000.8
```

**説明**：`d.base` に指定された値を乗算します。

---

### 8. div( )

**構文**：
```
{d.numberField:div(value)}
```

**例**：

**データセット**：
```json
{
  "base": 1000.4
}
```

**テンプレート内容**：
```
数値を2で除算：{d.base:div(2)}
```

**レンダリング結果**：
```
数値を2で除算：500.2
```

**説明**：`d.base` を指定された値で除算します。

---

### 9. mod( value )

**構文**：
```
{d.numberField:mod(value)}
```

**例**：

**データセット**：
```json
{
  "num1": 4,
  "num2": 3
}
```

**テンプレート内容**：
```
4 mod 2：{d.num1:mod(2)}
3 mod 2：{d.num2:mod(2)}
```

**レンダリング結果**：
```
4 mod 2：0
3 mod 2：1
```

**説明**：`num1 % 2` および `num2 % 2` の結果を計算し、剰余演算を行います。

---

### 10. abs( )

**構文**：
```
{d.numberField:abs()}
```

**例**：

**データセット**：
```json
{
  "value1": -10,
  "value2": -10.54
}
```

**テンプレート内容**：
```
絶対値1：{d.value1:abs()}
絶対値2：{d.value2:abs()}
```

**レンダリング結果**：
```
絶対値1：10
絶対値2：10.54
```

**説明**：数値の絶対値を返します。文字列形式の負数も処理できます。

---

### 11. ceil( )

**構文**：
```
{d.numberField:ceil()}
```

**例**：

**データセット**：
```json
{
  "dataA": 10.05123,
  "dataB": 1.05,
  "dataC": -1.05
}
```

**テンプレート内容**：
```
ceil(10.05123)：{d.dataA:ceil()}
ceil(1.05)：{d.dataB:ceil()}
ceil(-1.05)：{d.dataC:ceil()}
```

**レンダリング結果**：
```
ceil(10.05123)：11
ceil(1
以下是将给定中文文本翻译成日语的版本，保留了原文的意思，并使用了正确的语法和用法。所有Markdown语法（例如，标题、列表、表格、代码块和图片引用）保持不变。

---

> **構文**：
```
{d.numberField:toFixed(decimalCount)}
```

**説明**：数値を文字列に変換し、指定された小数桁数を保持しますが、不正確な丸めが発生する可能性があります。`round()` または `formatN()` の使用を推奨します。

---

### 16. toFR( )

> **注意**：**非推奨**。  
> **構文**：
```
{d.numberField:toFR()}
```

**説明**：数値をフランス語形式の小数点 `,` で区切って変換しますが、それ以上のローカライズ処理は行いません。多言語や通貨のシナリオでより柔軟に対応するため、`formatN()` または `formatC()` の使用を推奨します。

---

## 配列操作（Array manipulation）

### 1. aggStr( separator )
> **バージョン**：ENTERPRISE FEATURE，NEWv4.17.0+  
> **機能**：配列内の値を1つの文字列に結合し、オプションの区切り文字 `separator` で連結します。区切り文字が指定されない場合、デフォルトは `,` です。

**構文**：
```
{d.arrayField[].someAttr:aggStr(separator)}
```

**例**：

**データセット**：
```json
{
  "cars": [
    {"brand":"Tesla","qty":1,"sort":1},
    {"brand":"Ford","qty":4,"sort":4},
    {"brand":"Jeep","qty":3,"sort":3},
    {"brand":"GMC","qty":2,"sort":2},
    {"brand":"Rivian","qty":1,"sort":1},
    {"brand":"Chevrolet","qty":10,"sort":5}
  ]
}
```

**テンプレート内容**：
```
すべてのブランド（デフォルトのカンマ区切り）：
{d.cars[].brand:aggStr}

すべてのブランド（ハイフン区切りを指定）：
{d.cars[].brand:aggStr(' - ')}

qty が 3 より大きいブランドをフィルタリング：
{d.cars[.qty > 3].brand:aggStr()}
```

**レンダリング結果**：
```
すべてのブランド（デフォルトのカンマ区切り）：
Tesla, Ford, Jeep, GMC, Rivian, Chevrolet

すべてのブランド（ハイフン区切りを指定）：
Tesla - Ford - Jeep - GMC - Rivian - Chevrolet

qty が 3 より大きいブランドをフィルタリング：
Ford, Chevrolet
```

**説明**：
- `:aggStr` を使用して配列内のフィールドを抽出し結合します。フィルタ条件（例：`[.qty > 3]`）と組み合わせることで、より柔軟な出力が可能です。
- `separator` パラメータは省略可能で、デフォルトはカンマ + スペース（`, `）です。

---

### 2. arrayJoin( separator, index, count )
> **バージョン**：NEWv4.12.0+  
> **機能**：配列要素（`String` または `Number`）を1つの文字列に結合します。配列のどの部分から結合を開始するかを指定することもできます。

**構文**：
```
{d.arrayField:arrayJoin(separator, index, count)}
```

**例**：

**データセット**：
```json
{
  "names": ["homer", "bart", "lisa"],
  "emptyArray": [],
  "notArray": 20
}
```

**テンプレート内容**：
```
デフォルトのカンマ区切り：{d.names:arrayJoin()}
" | " 区切りを使用：{d.names:arrayJoin(' | ')}
空文字区切りを使用：{d.names:arrayJoin('')}
2番目以降のすべてを結合：{d.names:arrayJoin('', 1)}
2番目から1つの要素を結合：{d.names:arrayJoin('', 1, 1)}
1番目から最後の1つ前の要素を結合：{d.names:arrayJoin('', 0, -1)}

空の配列：{d.emptyArray:arrayJoin()}
配列でないデータ：{d.notArray:arrayJoin()}
```

**レンダリング結果**：
```
デフォルトのカンマ区切り：homer, bart, lisa
" | " 区切りを使用：homer | bart | lisa
空文字区切りを使用：homerbartlisa
2番目以降のすべてを結合：bartlisa
2番目から1つの要素を結合：bart
1番目から最後の1つ前の要素を結合：homerbart

空の配列：
配列でないデータ：20
```

**説明**：
- `separator` のデフォルトはカンマ + スペース（`, `）です。
- `index` と `count` は配列の一部を切り取るために使用されます。`count` は負の値を指定することで末尾から逆方向に要素を取得できます。
- 配列でないデータ（`null`、`undefined`、オブジェクト、数字など）の場合、そのまま出力されます。

---

### 3. arrayMap( objSeparator, attributeSeparator, attributes )
> **バージョン**：v0.12.5+  
> **機能**：オブジェクト配列を文字列にマッピングします。オブジェクト間の区切り文字、属性間の区切り文字、および出力する属性を指定できます。

**構文**：
```
{d.arrayField:arrayMap(objSeparator, attributeSeparator, attributes)}
```

**例**：

```json
{
  "people": [
    { "id": 2, "name": "homer" },
    { "id": 3, "name": "bart" }
  ],
  "numbers": [10, 50],
  "emptyArray": [],
  "mixed": {"id":2,"name":"homer"}
}
```

**テンプレート内容**：
```
デフォルトのマッピング（カンマ+スペースをオブジェクト区切り、コロンを属性区切りとして使用）：
{d.people:arrayMap()}

オブジェクト間で " - " 区切りを使用：
{d.people:arrayMap(' - ')}

オブジェクト属性で " | " 区切りを使用：
{d.people:arrayMap(' ; ', '|')}

id のみをマッピング：
{d.people:arrayMap(' ; ', '|', 'id')}

数字の配列：
{d.numbers:arrayMap()}

空の配列：
{d.emptyArray:arrayMap()}

配列でないデータ：
{d.mixed:arrayMap()}
```

**レンダリング結果**：
```
デフォルトのマッピング：
2:homer, 3:bart

オブジェクト間で " - " 区切りを使用：
2:homer - 3:bart

オブジェクト属性で " | " 区切りを使用：
2|homer ; 3|bart

id のみをマッピング：
2 ; 3

数字の配列：
10, 50

空の配列：

配列でないデータ：
{ "id": 2, "name": "homer" }
```

**説明**：
- オブジェクト配列の場合、デフォルトで**すべて**の利用可能な1次属性が `属性名:属性値` の形式で出力されます。
- `objSeparator` は異なるオブジェクトの出力を区切るために使用され、デフォルトはカンマ + スペースです。`attributeSeparator` は属性を区切るために使用され、デフォルトはコロン `:` です。`attributes` はオブジェクトの一部の属性のみを出力するために指定できます。
- 配列でないデータが渡された場合、そのまま出力されます。

---

### 4. count( start )
> **バージョン**：v1.1.0+  
> **機能**：ループ（例：`{d.array[i].xx}`）内で**行番号**または**シーケンス番号**を表示します。デフォルトでは1から始まります。  
> **注意**：v4.0.0 以降、この機能は内部的に `:cumCount` に置き換えられました。

**構文**：
```
{d.array[i].someField:count(start)}
```

**例**：

**データセット**：
```json
{
  "employees": [
    { "name": "James" },
    { "name": "Emily" },
    { "name": "Michael" }
  ]
}
```

**テンプレート内容**：
```
従業員リスト：
番号 | 名前
{d.employees[i].name:count()}. {d.employees[i].name}
{d.employees[i+1]}
```

**レンダリング結果**：
```
従業員リスト：
番号 | 名前
1. James
2. Emily
3. Michael
```

**説明**：
- ループ（例：`{d.array[i].xx}` などのシナリオ）内でのみ有効で、現在の行インデックスのカウントを表示します。
- `start` を指定することで、特定の数からカウントを開始できます。例えば、`:count(5)` の場合、最初の行は5から始まります。
- Carbone 4.0+ では、より柔軟な `:cumCount` の使用を推奨します。

---

# 条件付き出力（Conditioned output）

Carbone は、テンプレート内で特定の条件に基づいてコンテンツを**非表示**または**表示**するための一連の条件付き出力フォーマッタを提供します。ビジネス要件に応じて、**`drop`/`keep`**（簡潔な使用法）または**`showBegin`/`showEnd`**、**`hideBegin`/`hideEnd`**（大規模なコンテンツに適した）などを選択できます。

### 1. drop(element)
> **バージョン**：ENTERPRISE FEATURE，UPDATEDv4.22.10+  
> **機能**：条件が真の場合、ドキュメント内の特定の要素（段落、テーブル行、画像、チャートなど）を**削除**します。

**構文**：
```
{d.data:ifEM():drop(element, nbrToDrop)}
```
- `element`：`p`（段落）、`row`（テーブル行）、`img`（画像）、`table`（テーブル全体）、`chart`（チャート）、`shape`（形状）、`slide`（スライド、ODPのみ）、`item`（リスト項目、ODP/ODTのみ）などを指定できます。
- `nbrToDrop`：オプション、整数、現在の要素とそれ以降の削除する要素数を指定します。

**例**：

**データセット**：
```json
{
  "imgUrl": null
}
```

**テンプレート内容**（DOCX シナリオ、簡略化された例）：
```
ここに画像があります：{d.imgUrl:ifEM:drop(img)}
```

- Word テンプレートで、このプレースホルダーを画像のタイトルまたは説明に配置します。

**レンダリング結果**：
```
ここに画像があります：
```
> `imgUrl` が空の場合（`ifEM` が真）、画像が削除されます。

**説明**：
- `ifEM` 条件が成立すると、`drop(img)` が実行され、画像とその段落内容が削除されます。
- `drop` は DOCX/ODT/ODS/ODP/PPTX/PDF/HTML のみをサポートします。`drop` が実行されると、それ以降のフォーマッタは実行されません。

---

### 2. keep(element)
> **バージョン**：ENTERPRISE FEATURE，NEWv4.17.0+  
> **機能**：条件が真の場合、ドキュメント内の特定の要素を**保持/表示**し、それ以外の場合は表示しません。

**構文**：
```
{d.data:ifNEM:keep(element, nbrToKeep)}
```
- `element`：`drop` と同様に、`p`、`row`、`img`、`table`、`chart`、`shape`、`slide`、`item` などを指定できます。
- `nbrToKeep`：オプション、整数、現在の要素とそれ以降の保持する要素数を指定します。

**例**：

**データセット**：
```json
{
  "tableData": []
}
```

**テンプレート内容**（DOCX シナリオ、簡略化された例）：
```
{d.tableData:ifNEM:keep(table)}
```

- Word テンプレートで、このプレースホルダーをテーブル内のセルに配置します。

**レンダリング結果**：
```
（空白）
```
> `tableData` が空の場合、`ifNEM` が偽（not empty 失敗）となり、テーブルが保持されず、テーブル全体が削除されます。

**説明**：
- 条件が成立すると、対応する要素が保持されます。それ以外の場合、要素とその内容が削除されます。
- `drop` とは逆に、`keep` は条件が満たされない場合に要素を削除します。

---

### 3. showBegin()/showEnd()
> **バージョン**：COMMUNITY FEATURE，v2.0.0+  
> **機能**：`showBegin` と `showEnd` の間のコンテンツ（複数のテキスト、テーブル、画像など）を表示します。条件が真の場合、この部分が保持され、偽の場合、削除されます。

**構文**：
```
{d.someData:ifEQ(someValue):showBegin}
...表示するコンテンツ...
{d.someData:showEnd}
```

**例**：

**データセット**：
```json
{
  "toBuy": true
}
```

**テンプレート内容**：
```
Banana{d.toBuy:ifEQ(true):showBegin}
Apple
Pineapple
{d.toBuy:showEnd}grapes
```

**レンダリング結果**：
```
Banana
Apple
Pineapple
grapes
```
> `toBuy` が `true` の場合、`showBegin` と `showEnd` の間のすべてのコンテンツが表示されます。

**説明**：
- **複数行または複数ページ**のコンテンツの表示と非表示に適しています。1行のみの場合は、より簡潔な `keep`/`drop` の使用を検討してください。
- `showBegin` と `showEnd` の間では、**改行（Shift+Enter）**のみを使用することを推奨します。

---

### 4. hideBegin()/hideEnd()
> **バージョン**：COMMUNITY FEATURE，v2.0.0+  
> **機能**：`hideBegin` と `hideEnd` の間のコンテンツを非表示にします。条件が真の場合、この部分が削除され、偽の場合、保持されます。

**構文**：
```
{d.someData:ifEQ(someValue):hideBegin}
...非表示にするコンテンツ...
{d.someData:hideEnd}
```

**例**：

**データセット**：
```json
{
  "toBuy": true
}
```

**テンプレート内容**：
```
Banana{d.toBuy:ifEQ(true):hideBegin}
Apple
Pineapple
{d.toBuy:hideEnd}grapes
```

**レンダリング結果**：
```
Banana
grapes
```
> `toBuy` が `true` の場合、`hideBegin` と `hideEnd` の間の Apple と Pineapple のコンテンツが非表示になります。

**説明**：
- `showBegin()/showEnd()` とは逆に、複数のテキスト、テーブル、画像などを非表示にするために使用されます。
- 同様に、`hideBegin` と `hideEnd` の間では**改行（Shift+Enter）**のみを使用することを推奨します。

---

## 日付と時刻の操作フォーマッタの例

> **注意**：v3.0.0 以降、Carbone は日付処理に [Day.js](https://day.js.org/docs/en/display/format) を使用しています。Moment.js に関連するほとんどの形式は Day.js でも使用可能ですが、基盤となるライブラリは Day.js に置き換えられました。

### 1. {c.now} の使用

テンプレート内で `{c.now}` を使用して現在の UTC 時間（`now`）を取得できます。ただし、`options.complement` を通じてカスタムデータが渡されていない場合に限ります。例：

**データセット**（空または `c` フィールドを含まない）：
```json
{}
```

**テンプレート内容**：
```
現在の時刻：{c.now:formatD('YYYY-MM-DD HH:mm:ss')}
```

**レンダリング結果**（例）：
```
現在の時刻：2025-01-07 10:05:30
```

**説明**：
- `{c.now}` は予約タグで、システムの現在の UTC 時間を自動的に挿入します。
- `:formatD()` などのフォーマッタと組み合わせて指定された形式で出力します。

---
```
2000 ミリ秒を秒に変換：{d.intervalMs:formatI('second')}
3600000 ミリ秒を分に変換：{d.longIntervalMs:formatI('minute')}
3600000 ミリ秒を時間に変換：{d.longIntervalMs:formatI('hour')}
```

**レンダリング結果**：
```
2000 ミリ秒を秒に変換：2
3600000 ミリ秒を分に変換：60
3600000 ミリ秒を時間に変換：1
```

**説明**：
- 時間間隔の単位変換を行い、人間が読みやすい形式（例：`human`/`human+`）で「何秒前」や「何分後」を表示することも可能です。
- 正負の値の処理において、`human+` は「...ago」または「in a few ...」を出力し、`human` は方向性のない「a few seconds」などを出力します。

---

### 4. addD( amount, unit, patternIn )

**構文**：
```
{d.dateField:addD(amount, unit, patternIn)}
```

- `amount`：数値または文字列で、追加する量を指定します。
- `unit`：`day`、`week`、`month`、`year`、`hour`、`minute`、`second`、`millisecond` などを使用できます（大文字小文字を区別せず、複数形や省略形もサポート）。
- `patternIn`：オプションで、入力日付のフォーマットを指定します。デフォルトは ISO8601 です。

**例**：

**データセット**：
```json
{
  "startDate": "2017-05-10T15:57:23.769561+03:00"
}
```

> `Carbone.render(data, options)` の際に以下の設定を想定：
> ```json
> {
>   "lang": "fr",
>   "timezone": "Europe/Paris"
> }
> ```

**テンプレート内容**：
```
startDate に3日を追加：{d.startDate:addD('3', 'day')}
startDate に3ヶ月を追加：{d.startDate:addD('3', 'month')}
```

**レンダリング結果**：
```
startDate に3日を追加：2017-05-13T12:57:23.769Z
startDate に3ヶ月を追加：2017-08-10T12:57:23.769Z
```

**説明**：
- 結果はUTC時間で表示されます。ローカライズされた出力が必要な場合は、`formatD('YYYY-MM-DD HH:mm')` などのフォーマッタを併用してください。
- 入力日付が `20160131` のような形式で `patternIn` が明示されていない場合、Day.js が自動的に認識する場合もありますが、正確性を確保するために `{d.field:addD('...', '...', 'YYYYMMDD')}` を使用することが推奨されます。

---

### 5. subD( amount, unit, patternIn )

**構文**：
```
{d.dateField:subD(amount, unit, patternIn)}
```

- 使用方法は `addD()` と同様ですが、時間を過去に遡ります。

**例**：

**データセット**：
```json
{
  "myDate": "2017-05-10T15:57:23.769561+03:00"
}
```

**テンプレート内容**：
```
myDate から3日を減算：{d.myDate:subD('3', 'day')}
myDate から3ヶ月を減算：{d.myDate:subD('3', 'month')}
```

**レンダリング結果**：
```
myDate から3日を減算：2017-05-07T12:57:23.769Z
myDate から3ヶ月を減算：2017-02-10T12:57:23.769Z
```

**説明**：
- `addD` とは逆に、`subD` は日付を過去に移動させます。
- 同じ単位とフォーマット設定がサポートされています。

---

### 6. startOfD( unit, patternIn )

**構文**：
```
{d.dateField:startOfD(unit, patternIn)}
```

- `unit`：`day`、`month`、`year`、`week` などを指定し、日付をその単位の開始時刻に設定します（例：`day`=午前0時、`month`=1日 00:00:00 など）。
- `patternIn`：オプションで、入力日付のフォーマットを指定します。

**例**：

**データセット**：
```json
{
  "someDate": "2017-05-10T15:57:23.769561+03:00"
}
```

**テンプレート内容**：
```
someDate を当日の開始時刻に設定：{d.someDate:startOfD('day')}
someDate を当月の開始時刻に設定：{d.someDate:startOfD('month')}
```

**レンダリング結果**：
```
someDate を当日の開始時刻に設定：2017-05-10T00:00:00.000Z
someDate を当月の開始時刻に設定：2017-05-01T00:00:00.000Z
```

**説明**：
- レポートの統計や特定の時間粒度への整列など、よく使用されます。

---

### 7. endOfD( unit, patternIn )

**構文**：
```
{d.dateField:endOfD(unit, patternIn)}
```

- `unit`：`day`、`month`、`year` などを指定し、日付をその単位の終了時刻に設定します（例：`day`=23:59:59.999、`month`=最終日 23:59:59.999 など）。
- `patternIn`：オプションで、入力日付のフォーマットを指定します。

**例**：

**データセット**：
```json
{
  "someDate": "2017-05-10T15:57:23.769561+03:00"
}
```

**テンプレート内容**：
```
someDate を当日の終了時刻に設定：{d.someDate:endOfD('day')}
someDate を当月の終了時刻に設定：{d.someDate:endOfD('month')}
```

**レンダリング結果**：
```
someDate を当日の終了時刻に設定：2017-05-10T23:59:59.999Z
someDate を当月の終了時刻に設定：2017-05-31T23:59:59.999Z
```

**説明**：
- `startOfD` と対応し、日付をその日、月、年の最終時刻に「押し上げ」ます。

---

### 8. diffD( toDate, unit, patternFromDate, patternToDate )

**構文**：
```
{d.fromDate:diffD(toDate, unit, patternFromDate, patternToDate)}
```

- `toDate`：比較対象の日付で、文字列または数値（Unix タイムスタンプ）を指定できます。
- `unit`：オプションで、`day/d`、`week/w`、`month/M`、`year/y`、`hour/h`、`minute/m`、`second/s`、`millisecond/ms` をサポートし、デフォルトはミリ秒です。
- `patternFromDate` / `patternToDate`：オプションで、入力日付のフォーマットを指定します。

**例**：

**データセット**：
```json
{
  "start": "20101001"
}
```
**テンプレート内容**：
```
デフォルトのミリ秒間隔：{d.start:diffD('20101201')}
秒単位で表示：{d.start:diffD('20101201', 'second')}
日単位で表示：{d.start:diffD('20101201', 'days')}
```

**レンダリング結果**：
```
デフォルトのミリ秒間隔：5270400000
秒単位で表示：5270400
日単位で表示：61
```

**説明**：
- 元の日付フォーマットと対象日付フォーマットが異なる場合、`patternFromDate` と `patternToDate` をそれぞれ指定できます。
- 差が正の場合は `toDate` が `fromDate` より後または大きいことを示し、負の場合は `toDate` が `fromDate` より前または小さいことを示します。

---

### 9. convDate( patternIn, patternOut )

> **注意**：**非推奨**  
> v3.0.0 以降、公式では `formatD(patternOut, patternIn)` の使用を推奨しており、より柔軟な機能と Day.js との互換性を提供します。

**構文**：
```
{d.dateField:convDate(patternIn, patternOut)}
```

- `patternIn`：入力日付のフォーマット。
- `patternOut`：出力日付のフォーマット。

**例**：

**データセット**：
```json
{
  "myDate": "20160131"
}
```

> `Carbone.render(data, options)` の際に以下の設定を想定：
> ```json
> {
>   "lang": "en",
>   "timezone": "Europe/Paris"
> }
> ```

**テンプレート内容**：
```
短い日付形式：{d.myDate:convDate('YYYYMMDD', 'L')}
完全な日付形式：{d.myDate:convDate('YYYYMMDD', 'LLLL')}
```

**レンダリング結果**：
```
短い日付形式：01/31/2016
完全な日付形式：Sunday, January 31, 2016 12:00 AM
```

**説明**：
- `formatD` と同様の使用方法ですが、**非推奨**（UNRECOMMENDED）とされています。
- 新規プロジェクトでは `formatD` を統一して使用することを推奨します。

---

### Day.js 日付フォーマット早見表

`patternOut` では以下の一般的なフォーマットを使用できます（一部の例）：

| フォーマット  | サンプル出力                 | 説明                                             |
|:----  |:------------------------ |:------------------------------------------------ |
| `X`   | `1360013296`            | Unix タイムスタンプ（秒単位）                    |
| `x`   | `1360013296123`         | Unix ミリ秒タイムスタンプ                        |
| `YYYY`| `2025`                  | 4桁の年                                          |
| `MM`  | `01-12`                 | 2桁の月                                          |
| `DD`  | `01-31`                 | 2桁の日                                          |
| `HH`  | `00-23`                 | 24時間制の2桁の時間                              |
| `mm`  | `00-59`                 | 2桁の分                                          |
| `ss`  | `00-59`                 | 2桁の秒                                          |
| `dddd`| `Sunday-Saturday`       | 曜日の完全名                                     |
| `ddd` | `Sun-Sat`               | 曜日の略称                                       |
| `A`   | `AM` / `PM`             | 午前/午後（大文字）                              |
| `a`   | `am` / `pm`             | 午前/午後（小文字）                              |
| `L`   | `MM/DD/YYYY`            | ローカライズされた短い日付形式                   |
| `LL`  | `MMMM D, YYYY`          | ローカライズされた日付（月の完全名付き）         |
| `LLL` | `MMMM D, YYYY h:mm A`   | ローカライズされた日付（時間と月の完全名付き）   |
| `LLLL`| `dddd, MMMM D, YYYY h:mm A` | ローカライズされた完全な日付（曜日付き）   |

その他のフォーマットは [Day.js 公式ドキュメント](https://day.js.org/docs/en/display/format) または上記のリストを参照してください。

---
| {d.staffs[i].name} | {d.staffs[i].department} | {d.staffs[i].position} |
| {d.staffs[i+1].name} | {d.staffs[i+1].department} | {d.staffs[i+1].position} |

*「部門」列でセルを結合すると、レンダリングに異常が発生する可能性があります。*

**正しい例**：

| 名前 | 部門 | 役職 |
|---|---|---|
| {d.staffs[i].name} | {d.staffs[i].department} | {d.staffs[i].position} |
| {d.staffs[i+1].name} | {d.staffs[i+1].department} | {d.staffs[i+1].position} |

*各セルを独立させ、セルの結合を避けてください。*

### 3. テンプレートレンダリング中にエラーメッセージが表示される

**問題の説明**：テンプレートレンダリング中にシステムがエラーメッセージを表示し、レンダリングが失敗する。

**考えられる原因**：

- **プレースホルダーエラー**：プレースホルダー名がデータセットのフィールドと一致しないか、構文エラーがある。
- **データの欠落**：データセットにテンプレートで参照されているフィールドが欠落している。
- **フォーマッタの不適切な使用**：フォーマッタのパラメータが誤っているか、サポートされていないフォーマットタイプを使用している。

**解決方法**：

- **プレースホルダーの確認**：テンプレート内のプレースホルダー名がデータセットのフィールド名と一致し、構文が正しいことを確認する。
- **データセットの検証**：データセットにテンプレートで参照されているすべてのフィールドが含まれていること、およびデータ形式が要件に合っていることを確認する。
- **フォーマッタの調整**：フォーマッタの使用方法を確認し、パラメータが正しいこと、およびサポートされているフォーマットタイプを使用していることを確認する。

**例**：

**エラーテンプレート**：
```
注文番号：{d.orderId}
注文日：{d.orderDate:format('YYYY/MM/DD')}
総金額：{d.totalAmount:format('0.00')}
```

**データセット**：
```json
{
  "orderId": "A123456789",
  "orderDate": "2025-01-01T10:00:00Z"
  // totalAmount フィールドが欠落
}
```

**解決方法**：データセットに `totalAmount` フィールドを追加するか、テンプレートから `totalAmount` の参照を削除する。

### 4. テンプレートファイルのアップロードが失敗する

**問題の説明**：テンプレート設定ページでテンプレートファイルをアップロードする際、アップロードが失敗する。

**考えられる原因**：

- **サポートされていないファイル形式**：アップロードされたファイル形式がサポートされていない（`.docx`、`.xlsx`、`.pptx` のみサポート）。
- **ファイルサイズが大きすぎる**：テンプレートファイルが大きすぎて、システムが許可するアップロードサイズ制限を超えている。
- **ネットワークの問題**：ネットワーク接続が不安定で、アップロードが中断または失敗する。

**解決方法**：

- **ファイル形式の確認**：アップロードするテンプレートファイルが `.docx`、`.xlsx`、`.pptx` 形式であることを確認する。
- **ファイルサイズの圧縮**：ファイルが大きすぎる場合は、テンプレートファイルを圧縮するか、テンプレート内容を最適化してファイルサイズを削減する。
- **ネットワーク接続の安定化**：ネットワーク接続が安定していることを確認し、再度アップロードを試みる。