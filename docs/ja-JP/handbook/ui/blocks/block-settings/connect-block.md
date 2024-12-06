# データブロックの接続

## 概要

データブロックの接続は、ブロック間での動的フィルタリング連動を実現します。コアとなる機能は、2つのコレクションを接続することです。一方がソースコレクション（主コレクション）となり、もう一方がターゲットコレクション（外部キーコレクション）としてデータのフィルタリング連動を行います。この接続により、シームレスなデータフィルタリングとインタラクションが可能となります。

接続ブロックのオプションは多様で、以下が含まれます：
- 現在のページやポップアップウィンドウ内の同じコレクションのデータブロック
- 外部キー制約を持つ異なるコレクションのブロック
- 継承関係にあるコレクションのブロック

ユーザーは複数のブロックを同時に接続でき、データインタラクションの柔軟性が向上します。選択した方法にかかわらず、基本的な原則は一貫しており、ソースコレクション（接続を行うコレクション）がターゲットコレクション（接続されるコレクション）にフィルターパラメータを提供し、正確なデータフィルタリングと表示を可能にします。

## 使用マニュアル

### フィルターブロックのデータブロック接続

![フィルターブロックとデータブロックの接続のイラスト](https://static-docs.nocobase.com/20240407180953.png)

### データブロックのデータブロック接続

#### 同じデータテーブルのデータブロック連動

例：注文コレクションブロックとその対応する注文詳細ブロックの間で動的な連動を作成します。

<video width="100%" height="440" controls>
    <source src="https://static-docs.nocobase.com/20240407161700.mp4" type="video/mp4">
</video>

#### 関係データコレクションブロックの連動（外部キー制約を持つ異なるコレクションブロック）

例：注文コレクションと顧客コレクションの間の多対一の関係を活用し、顧客コレクションブロックと注文コレクションブロックを接続して特定の顧客の注文データを照会します。

<video width="100%" height="440" controls>
    <source src="https://static-docs.nocobase.com/20240407163523.mp4" type="video/mp4">
</video>
