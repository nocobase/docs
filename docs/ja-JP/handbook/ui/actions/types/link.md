# リンク

## 概要

リンク操作は、ルーティングジャンプの形式で変数を渡すことをサポートしています。ターゲットページは渡されたデータに基づいて内容を動的に調整でき、データブロック内での設定が可能です。

![20240603150755](https://static-docs.nocobase.com/20240603150755.png)

## 操作設定項目

![20240603150823](https://static-docs.nocobase.com/20240603150823.png)

### リンクの編集

![20240603150944](https://static-docs.nocobase.com/20240603150944.png)

![20240603224322](https://static-docs.nocobase.com/20240603224322.png)

### 使用シーン

例：著者テーブルと記事テーブルは一対多の関係にあります。著者テーブルに「著者の記事を見る」というリンク操作を設定します。このリンクをクリックすると、著者のIDがパラメータとして記事テーブルに渡され、ターゲットページの記事テーブルは渡された著者IDに基づいて記事リストをフィルタリングします。

![20240603151934](https://static-docs.nocobase.com/20240603151934.png)

### 新しいウィンドウで開く

「新しいウィンドウで開く」にチェックを入れると、リンクは新しいウィンドウで開きます。

![20240718160541](https://static-docs.nocobase.com/20240718160541.png)

完全な設定例は以下の通りです：

<video width="100%" height="440" controls>

 <source src="https://static-docs.nocobase.com/20240603224044.mp4" type="video/mp4">

</video>

- [編集ボタン](/handbook/ui/actions/action-settings/edit-button)：ボタンのタイトル、色、アイコンをカスタマイズ；
- [連動ルール](/handbook/ui/actions/action-settings/linkage-rule)：ボタンの状態を動的に制御；

