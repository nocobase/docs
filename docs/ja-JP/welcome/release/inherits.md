# v0.9.0: データテーブルの継承

データテーブルの継承は、[PostgreSQL の INHERITS 構文](https://www.postgresql.org/docs/current/tutorial-inheritance.html) に基づいて実装されており、PostgreSQL データベースがインストールされた NocoBase のみで提供されます。

## 例

例として、教育システムを作成することを考えます。ユーザーは学生、保護者、教師の三つのカテゴリに分かれます。

継承がない場合、三つのユーザーそれぞれに対してテーブルを作成する必要があります：

- 学生：名前、年齢、性別、身分証明書
- 保護者：名前、年齢、性別、職業、学歴
- 教師：名前、年齢、性別、教職年数、既婚

データテーブルの継承を使用することで、共通の情報を抽出できます：

- ユーザー：名前、年齢、性別
- 学生：身分証明書
- 保護者：職業、学歴
- 教師：教職年数、既婚

ER 図は以下の通りです：

<img src="./inherits/er.svg" style="max-width: 700px;" />

注：子テーブルの ID と親テーブルの ID は自動エンコードを共有します。

## データテーブルの継承の設定

Inherits フィールドで継承するデータテーブルを選択します。

<img src="./inherits/inherit.jpg" />

コードでの設定は以下の通りです：

```ts
db.collection({
  name: 'users',
});

db.collection({
  name: 'students',
  inherits: 'users',
});
```

注意：

- 継承するテーブルは自由に選択できず、主キーはユニークな自動エンコードである必要があります。例えば、UUID またはすべての継承経路上のテーブルの ID 自動エンコードを同じにする必要があります。
- Inherits パラメータは編集できません。
- 継承関係がある場合、親テーブルは削除できません。

## データテーブルのフィールドリスト

フィールドリストには、継承された親テーブルのフィールドが同期表示されます。親テーブルのフィールドは変更できませんが、オーバーライド（Override）することは可能です。

<img src="./inherits/inherit-fields.jpg" />

親テーブルのフィールドをオーバーライドする際の注意事項：

- 子テーブルのフィールド識別子が親テーブルのフィールドと同じ場合はオーバーライドとなります。
- オーバーライドするフィールドの型は一致させる必要があります。
- リレーションフィールドは target collection 以外の他のパラメータを一致させる必要があります。

## 親テーブルの子テーブルブロック

親テーブルのブロック内で子テーブルのブロックを設定できます。

<img src="./inherits/inherited-blocks.jpg" />

## 継承された親テーブルフィールドの設定

継承された親テーブルが存在する場合、フィールドを設定する際に親テーブルから継承されたフィールドの設定が提供されます。

<img src="./inherits/configure-fields.jpg" />
