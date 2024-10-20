# v0.9.4：2023-05-25

## 統合された内容

- 作業: ソースが見つからない場合にビューコレクションをロードする [`#1930`](https://github.com/nocobase/nocobase/pull/1930)
- 機能: データスコープとタイトルフィールドの設定をサポート [`#1918`](https://github.com/nocobase/nocobase/pull/1918)
- 機能: フィールド選択の無制限レベルをサポート [`#1910`](https://github.com/nocobase/nocobase/pull/1910)
- 作業: ピッカーモードで関連フィールドを使用する際にオープンサイズを変更可能にする [`#1926`](https://github.com/nocobase/nocobase/pull/1926)
- 修正(ConfigurationTabs): エラーを回避するための修正 [`#1782`](https://github.com/nocobase/nocobase/pull/1782)
- 修正: 子を追加するアクションにおけるtableFieldクエリデータの問題を修正 [`#1876`](https://github.com/nocobase/nocobase/pull/1876)
- リファクタリング: vitestを用いたフロントエンドテストの実施 [`#1900`](https://github.com/nocobase/nocobase/pull/1900)
- 修正: add-modal内のポップアップボタンを無効化する [`#1808`](https://github.com/nocobase/nocobase/pull/1808)
- 修正: aclリソースパラメータを追加する修正 [`#1923`](https://github.com/nocobase/nocobase/pull/1923)
- 作業: nullを含む配列のガードを更新する [`#1922`](https://github.com/nocobase/nocobase/pull/1922)
- リファクタリング: フィールドコンポーネント切り替え時の初期化処理を見直す [`#1915`](https://github.com/nocobase/nocobase/pull/1915)
- 修正(association-field): 新しいデータが正常に作成された場合のみデータを関連付けることができるように修正 [`#1884`](https://github.com/nocobase/nocobase/pull/1884)
- 修正: カスタムソースキーを持つbelongs to manyのイージーロードを修正 [`#1913`](https://github.com/nocobase/nocobase/pull/1913)
- 修正: サブフォームのタイトルを隠すと、すべての埋め込まれたタイトルが隠れる問題を修正 [`#1904`](https://github.com/nocobase/nocobase/pull/1904)
- 修正: updateAssociationValuesの問題を修正 [`#1903`](https://github.com/nocobase/nocobase/pull/1903)
- 修正(plugin-formula): 結果にread-prettyコンポーネントを使用する修正 [`#1911`](https://github.com/nocobase/nocobase/pull/1911)
- 修正: フォームフィールドが必須の際にデフォルト値を設定できない問題を修正 [`#1887`](https://github.com/nocobase/nocobase/pull/1887)
- 修正(Data-template): フィールド削除時のバグを修正 [`#1907`](https://github.com/nocobase/nocobase/pull/1907)
- 機能: キャッシュクリアボタンを追加 [`#1909`](https://github.com/nocobase/nocobase/pull/1909)
- 修正: belongs to manyの関連付けをイージーロードする際の問題を修正 [`#1906`](https://github.com/nocobase/nocobase/pull/1906)
- 機能: 複数フィールド変数のサポート [`#1680`](https://github.com/nocobase/nocobase/pull/1680)
- 修正: フィールドを持つbelongs to関連付けを追加する修正 [`#1894`](https://github.com/nocobase/nocobase/pull/1894)
- 修正: belongs to関連付けの追加 [`#1893`](https://github.com/nocobase/nocobase/pull/1893)
- 修正: 関係データをプレロードする [`#1847`](https://github.com/nocobase/nocobase/pull/1847)
- 機能: アプリケーションを手動で再起動するサポート [`#1889`](https://github.com/nocobase/nocobase/pull/1889)
- リファクタリング: フィールドの追加 [`#1883`](https://github.com/nocobase/nocobase/pull/1883)
- 作業: pg sqlパーサー [`#1890`](https://github.com/nocobase/nocobase/pull/1890)
- 修正(plugin-workflow): 言語の修正 [`#1886`](https://github.com/nocobase/nocobase/pull/1886)
- 修正: ソートルール設定時のフィールド必須の問題を修正 [`#1885`](https://github.com/nocobase/nocobase/pull/1885)
- 機能(plugin-workflow): ノード編集時にダイアログにノード説明を追加 [`#1882`](https://github.com/nocobase/nocobase/pull/1882)
- 修正(plugin-workflow): ループ内の変数APIコーラーを修正 [`#1877`](https://github.com/nocobase/nocobase/pull/1877)
- 作業: GitHubテンプレートのコメントを整理し、フォーマットを整える [`#1878`](https://github.com/nocobase/nocobase/pull/1878)
- 機能(association-field): 多対一関連のデフォルトデータを追加 [`#1873`](https://github.com/nocobase/nocobase/pull/1873)
- 修正(plugin-workflow): ワークフローが読み込まれていない場合のトリガータイトルを修正 [`#1875`](https://github.com/nocobase/nocobase/pull/1875)
- 機能(plugin-workflow): 集約 [`#1852`](https://github.com/nocobase/nocobase/pull/1852)
- 機能(translation es_ES): 翻訳追加 [`#1801`](https://github.com/nocobase/nocobase/pull/1801)
- 修正: 追加が変更された場合にデータが更新されない問題を修正 [`#1872`](https://github.com/nocobase/nocobase/pull/1872）
- 修正: フィルターをクリアした際に関連付け選択肢が表示されない問題を修正 [`#1866`](https://github.com/nocobase/nocobase/pull/1866）
- 修正(acl): repeated createdByIdフィールドの問題を修正 [`#1871`](https://github.com/nocobase/nocobase/pull/1871）
- 機能(client): コレクション選択時にタイトルで検索を可能にする [`#1869`](https://github.com/nocobase/nocobase/pull/1869）
- 作業: スタンドアロンデプロイメントサブアプリケーションの取得をスキップ [`#1868`](https://github.com/nocobase/nocobase/pull/1868）
- 修正(plugin-workflow): 不要なコンテキストオプションを削除 [`#1867`](https://github.com/nocobase/nocobase/pull/1867）
- 修正: 外部キーフィールドのフィルターを継承する [`#1864`](https://github.com/nocobase/nocobase/pull/1864）
- 機能(plugin-workflow): ループ機能の追加 [`#1787`](https://github.com/nocobase/nocobase/pull/1787）
- 修正: insertAdjacentが見つからない問題を修正 [`#1861`](https://github.com/nocobase/nocobase/pull/1861）
- リファクタリング(add-new): 新しい関連フィールドを追加するボタンの編集サポート [`#1854`](https://github.com/nocobase/nocobase/pull/1854）
- 機能: リストおよびグリッドカードブロックのサポート [`#1753`](https://github.com/nocobase/nocobase/pull/1753）
- 修正: マルチセレクトフィールドで「複数を許可」スイッチが表示されない問題を修正 [`#1857`](https://github.com/nocobase/nocobase/pull/1857）
- 修正: アタッチメントインターフェイスタイプのフィールドが追加なしで表示されない問題を修正 [`#1856`](https://github.com/nocobase/nocobase/pull/1856）
- 修正: フィールド削除時のアクションエラーを修正 [`#1849`](https://github.com/nocobase/nocobase/pull/1849）
- 機能: 単一サブアプリの実行をサポート [`#1853`](https://github.com/nocobase/nocobase/pull/1853）
- 修正: 削除フィールドに値を割り当てる問題を修正 [`#1850`](https://github.com/nocobase/nocobase/pull/1850）
- 修正: 割り当てフィールドのタイトル値の問題を修正 [`#1848`](https://github.com/nocobase/nocobase/pull/1848）
- 修正: 関連付けの追加 [`#1842`](https://github.com/nocobase/nocobase/pull/1842）
- 機能(plugin-workflow): ワークフローキャンバスページに削除ボタンを追加 [`#1844`](https://github.com/nocobase/nocobase/pull/1844）
- 修正(block-provider): getNesterAppendsフィルターの修正 [`#1839`](https://github.com/nocobase/nocobase/pull/1839）
- 機能: リポジトリの集約メソッドを追加 [`#1829`](https://github.com/nocobase/nocobase/pull/1829）

## コミット

- 機能(docs): ドキュメントを更新 [`0b0a8d2`](https://github.com/nocobase/nocobase/commit/0b0a8d2be5f007c94c2050ddf28767100eba2ea8）
- 作業(versions): 😊 v0.9.4-alpha.1 を公開 [`9c94840`](https://github.com/nocobase/nocobase/commit/9c94840c6b8cafa7dfc37bb660a7269c2480f995）
- 作業: チェンジログを更新 [`a6c7b41`](https://github.com/nocobase/nocobase/commit/a6c7b417dee9b45006b77459a29ebbdb8428dfc5）

