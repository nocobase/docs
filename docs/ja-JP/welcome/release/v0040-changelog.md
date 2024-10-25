# v0.4：2021-04-07

## 統合された

- リファクタリング: nullの代わりにブール値を使用 #74
- リファクタリング: アプリのミドルウェア 17362a8
- 作業（バージョン）: パッケージを公開 0.4.0-alpha.2 c2f1876
- 修正: 小さな問題 [`#72`](https://github.com/nocobase/nocobase/pull/72)
- 開発 [`#68`](https://github.com/nocobase/nocobase/pull/68)
- 機能: プラグイン - 中国の行政区 [`#66`](https://github.com/nocobase/nocobase/pull/66)
- 機能: linkToフィールドのフィルター [`#64`](https://github.com/nocobase/nocobase/pull/64)
- 修正: デフォルトのビュー/タブが破棄できないようにする [`#63`](https://github.com/nocobase/nocobase/pull/63)
- 機能/プラグイン自動化 [`#65`](https://github.com/nocobase/nocobase/pull/65)
- 機能/アクションログ [`#62`](https://github.com/nocobase/nocobase/pull/62)
- 機能/アクションログ [`#61`](https://github.com/nocobase/nocobase/pull/61)
- 機能/破棄ロック [`#60`](https://github.com/nocobase/nocobase/pull/60)
- 修正: 一部のTypeScriptエラーを無視 [`#59`](https://github.com/nocobase/nocobase/pull/59)
- 機能: ルート権限 [`#58`](https://github.com/nocobase/nocobase/pull/58)
- 機能: 権限プラグインAPIを追加 [`#57`](https://github.com/nocobase/nocobase/pull/57)
- 修正: updatedBy外部キー [`#56`](https://github.com/nocobase/nocobase/pull/56)
- 機能: 権限プラグインを追加 [`#53`](https://github.com/nocobase/nocobase/pull/53)
- 修正: bulkUpdateフック内のupdatedByフィールド [`#54`](https://github.com/nocobase/nocobase/pull/54)
- テスト: CI通過のためにバグテストケースをスキップ [`#52`](https://github.com/nocobase/nocobase/pull/52)
- 修正: 他のフィールドを更新する際のバグを回避 [`#51`](https://github.com/nocobase/nocobase/pull/51)
- 機能: 日付のみのオペレーター [`#50`](https://github.com/nocobase/nocobase/pull/50)
- 機能: デフォルトを設定するためのフィールド [`#49`](https://github.com/nocobase/nocobase/pull/49)
- 機能: クエリ用のカスタムオペレーター [`#48`](https://github.com/nocobase/nocobase/pull/48)
- 修正: ネストされた関連のtoIncludeバグを修正 [`#47`](https://github.com/nocobase/nocobase/pull/47)
- 機能: 単一ファイルのアップロードを添付ファイルとして利用可能にする [`#46`](https://github.com/nocobase/nocobase/pull/46)
- 機能: ファイルマネージャーの基本アーキテクチャを追加 [`#44`](https://github.com/nocobase/nocobase/pull/44)
- 機能: コレクション管理テーブル用にcreatedBy/updatedByフィールドの設定を追加 [`#43`](https://github.com/nocobase/nocobase/pull/43)
- 修正: フィルターをマージするためにwrappedおよび論理を使用 [`#42`](https://github.com/nocobase/nocobase/pull/42)
- 修正: inputがnullのときにfilterByFieldsは同じ値を返すべき（クローズ 0） [`#41`](https://github.com/nocobase/nocobase/pull/41)
- 修正: for-inでSymbolプロパティが反復できないバグを修正 [`#39`](https://github.com/nocobase/nocobase/pull/39)
- 機能: ソート [`#38`](https://github.com/nocobase/nocobase/pull/38)
- リファクタリング: ソート戦略をオフセットからtargetIdに変更 [`#37`](https://github.com/nocobase/nocobase/pull/37)
- 機能: ソート [`#36`](https://github.com/nocobase/nocobase/pull/36)
- 機能: 破棄アクション用のフィルターとトランザクションを追加 [`#35`](https://github.com/nocobase/nocobase/pull/35)
- 修正: 作成/更新用のフィールドフィルター論理 [`#34`](https://github.com/nocobase/nocobase/pull/34)
- 機能: 作成/更新用のアクションフィールドオプション [`#32`](https://github.com/nocobase/nocobase/pull/32)
- 修正: updateAssociationsの戦略を追加から設定に変更 [`#33`](https://github.com/nocobase/nocobase/pull/33)
- テスト/CI [`#31`](https://github.com/nocobase/nocobase/pull/31)
- 機能: コレクションのフック/フィールド/アクション/ビューを改善 [`#30`](https://github.com/nocobase/nocobase/pull/30)
- 修正: モデルの更新関連 [`#29`](https://github.com/nocobase/nocobase/pull/29)
- 修正: データベーステストケースとテーブルオプション [`#28`](https://github.com/nocobase/nocobase/pull/28)
- 機能: 仮想属性のゲッター＆セッターサポートを追加 [`#27`](https://github.com/nocobase/nocobase/pull/27)
- 機能: コレクションオプションとフック [`#21`](https://github.com/nocobase/nocobase/pull/21)
- 機能（ユーザー）: ユーザーモジュールを追加 [`#26`](https://github.com/nocobase/nocobase/pull/26)
- 機能: ソートアクションを追加 [`#22`](https://github.com/nocobase/nocobase/pull/22)
- テスト/リスト [`#19`](https://github.com/nocobase/nocobase/pull/19)
- 機能: ページネーションオプション [`#20`](https://github.com/nocobase/nocobase/pull/20）
- テスト: データベースのテストをリファクタリングし、追加 [`#17`](https://github.com/nocobase/nocobase/pull/17)
- 機能: アクションとビュー [`#18`](https://github.com/nocobase/nocobase/pull/18）
- データベース用のテストケース [`#16`](https://github.com/nocobase/nocobase/pull/16）
- リファクタリング: アクションパッケージのテストのグローバルインジェクションを変更 [`#15`](https://github.com/nocobase/nocobase/pull/15）
- 機能: プラグインを改善 [`#14`](https://github.com/nocobase/nocobase/pull/14）
- ドキュメント: サーバー用のREADME.mdを追加 [`#12`](https://github.com/nocobase/nocobase/pull/12）
- 修正: parseRequestとregisterHandlers [`#10`](https://github.com/nocobase/nocobase/pull/10）
- 修正 #9 [`#11`](https://github.com/nocobase/nocobase/pull/11）
- 機能: 部分アクションの登録と呼び出しをサポート [`#7`](https://github.com/nocobase/nocobase/pull/7）
- コアフレームワークを公開 [`#6`](https://github.com/nocobase/nocobase/pull/6）

## 修正

- 修正 #9 (#11) [`#9`](https://github.com/nocobase/nocobase/issues/9) [`#11`](https://github.com/nocobase/nocobase/issues/11）
- 修正: ログインフォームのスタイルを改善 5319000
- 修正: ログインおよび登録のエラーメッセージ 214b227

## コミット

- 作業: パラメータを調整 [`b95e2da`](https://github.com/nocobase/nocobase/commit/b95e2da129aa49b5d8fb3e31ba8975818f7053cb）
- 初回コミット [`e5d30b3`](https://github.com/nocobase/nocobase/commit/e5d30b30ba4dd38de764b0e5044f836f04a03706）
- スタイル: コードフォーマット [`ce4a22f`](https://github.com/nocobase/nocobase/commit/ce4a22fbb9b1ba9b88db1dc86609e94944f9d904）

