# v1.0.0-alpha.15: 2024.05.19

## 新機能

### 新しいプラグイン：LDAP認証

ユーザーはLDAPサーバーのアカウントとパスワードを使用してNocoBaseにログインできます。詳細は[認証：LDAP](/handbook/auth-ldap)のドキュメントを参照してください。

![](https://static-docs.nocobase.com/202405191513995.png)

### 新しいプラグイン：ワークフローのカスタムアクションイベント

通常の追加、削除、更新操作では要件を満たせない場合、ワークフローのカスタムアクションイベントを使用してデータ処理ロジックを自由に編成できます。詳細は[ワークフロー / カスタムアクションイベント](/handbook/workflow-custom-action-trigger)のドキュメントを参照してください。

![](https://static-docs.nocobase.com/202405191515770.png)

### 「設定操作」インタラクションの改善

ドロップダウンメニュー内のすべての操作を1つのリストに統一表示し、「有効操作」と「カスタム」を区別しません。

- 一度だけ追加できる操作：これらの操作はスイッチ効果を保持し、ユーザーは有効または無効にできます。
- 繰り返し追加できる操作：これらの操作はもはやスイッチインタラクションを使用せず、何度でも追加できます。
- 機能が類似している操作を統合
  - 「新規追加」と「レコード追加」
  - 「提出」と「レコード保存」

![20240520153033](https://static-docs.nocobase.com/20240520153033.png)

### テーブルブロックでの固定テーブル列のサポート

![](https://static-docs.nocobase.com/202405191512587.png)

### ポップアップ内でガントチャート、カンバンブロックの追加をサポート

![](https://static-docs.nocobase.com/202405191512280.png)

### 詳細ブロックでの連動ルールのサポート

詳細ブロック内の連動ルールは、フィールドの表示/非表示を動的に設定できます。

![](https://static-docs.nocobase.com/202405191513781.png)

### ログプラグインのログリストの最適化

- マルチアプリケーション環境では、ログプラグインは現在のアプリケーションのログファイルリストのみを表示します。
- ワークフローやカスタムリクエストのフォルダパスはアプリケーションフォルダ内に配置されます。

### ワークフローHTTPリクエストノードの最適化

- `application/www-x-form-urlencoded` 形式のデータをサポート
- 値入力ボックスは文字列テンプレートをサポート
- 統一されたレスポンスの結果データ

ワークフローHTTPリクエストノードの結果データ形式は以下のように統一されます：

```js
{
  config: {},
  headers: {},
  status: 500,
  statusText: 'xxx',
  data: {}
}
```

## ドキュメント更新

### 新しいプラグインのサンプルドキュメントを追加

### ワークフロー使用マニュアルのドキュメント構造を更新

## バグ修正

- グラフは、日付フィールドを次元として集計データを照会する際に、クライアントのタイムゾーンに変換されません。<a href="https://github.com/nocobase/nocobase/pull/4366" target="_blank">fix(data-vi): 日付をフォーマットする際にローカルタイムゾーンを使用する必要があります #4366</a>
- ビューの更新が不十分で、データベースビューを同期した後は、再度ログアウトしてログインしないと更新されません。<a href="https://github.com/nocobase/nocobase/pull/4224" target="_blank">fix: コレクションフィールドはデータベースからの同期後に更新されるべきです #4224</a>
- 木構造コレクションブロックで子ノードを追加するとき、すべてのノードが折りたたまれません。<a href="https://github.com/nocobase/nocobase/pull/4289" target="_blank">fix: 木構造コレクションブロックで子ノードを追加する際にすべてのノードを折りたたまない #4289</a>
- データテーブルのタイトルフィールド設定が無効です。<a href="https://github.com/nocobase/nocobase/pull/4358" target="_blank">fix: コレクションタイトルフィールドの設定が無効です #4358</a>
- bigintフィールドの読み取り状態で数値精度が失われます。<a href="https://github.com/nocobase/nocobase/pull/4360" target="_blank">fix: bigintフィールドが読み取りモードで精度を失います #4360</a>
- サブアプリケーションが停止した後、開いているログファイルが閉じられません。<a href="https://github.com/nocobase/nocobase/pull/4380" target="_blank">fix(logger): アプリを破棄した後にログストリームを閉じるべきです #4380</a>
- ワークフロー集約ノードの関係データモード選択にバグがあります。<a href="https://github.com/nocobase/nocobase/pull/4315" target="_blank">fix(plugin-workflow-aggregate): 関連フィールド選択の修正 #4315</a>
- ワークフローHTTPリクエストノードの同期モードでエラーオプションの無視が無効です。<a href="https://github.com/nocobase/nocobase/pull/4334" target="_blank">fix(plugin-workflow-request): 同期モードにおけるignoreFailの修正 #4334</a>
- ワークフローHTTPリクエストノードの変数入力ボックスがオーバーフローします。<a href="https://github.com/nocobase/nocobase/pull/4353" target="_blank">fix(plugin-workflow-request): 値フィールドのオーバーフロー修正 #4354</a>
- 特殊文字が原因でワークフローHTTPリクエストノードがハングします。<a href="https://github.com/nocobase/nocobase/pull/4376" target="_blank">fix(plugin-workflow-request): 無効なヘッダー値でリクエストがハングする問題の修正 #4376</a>
- テーマエディタでmarginBlockを設定した後、フォームフィールドの間隔に影響を与える問題を修正しました。<a href="https://github.com/nocobase/nocobase/pull/4374" target="_blank">fix(theme-editor): トークン.marginBlockによってフォームフィールドの間隔が影響を受けないべきです #4374</a>
- ページ右上の「ライセンス」オプションをクリックした際の遷移エラーを修正しました。[PR #4415](https://github.com/nocobase/nocobase/pull/4415)
- フィルタフォームをブロックテンプレートとして保存した際、フィールドの演算子が無効になる問題を修正しました。[PR #4390](https://github.com/nocobase/nocobase/pull/4390)

