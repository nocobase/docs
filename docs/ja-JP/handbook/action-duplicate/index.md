# コピー

<PluginInfo name="action-duplicate"></PluginInfo>

## 紹介

コピー操作は、ユーザーが既存のデータに基づいて新しいデータレコードを作成することを許可します。サポートされるコピー方式は2つあり、直接コピーとフォームにコピーして続けて記入する方法です。

## インストール

このプラグインは内蔵されており、別途インストールは不要です。

## コピー方式

### 直接コピー

![](https://static-docs.nocobase.com/2c0ac5d1a539de4b72b49b7d966d8c09.png)

- デフォルトで直接コピー方式によってデータをコピーします。
- 目標データテーブル：コピーを追加する対象のデータテーブルを指します（継承シナリオでは、子テーブルへのコピーが可能ですが、直接コピーは本テーブルにのみ追加できます）。
- テンプレートフィールド：コピーするフィールドを指定するために使用され、すべて選択可能で必須です。

設定が完了したらボタンをクリックしてデータをコピーします。

### フォームにコピーして続けて記入

設定されたテンプレートフィールドは、デフォルト値としてフォームに自動的に入力され、変更後に提出することでコピー操作が完了します。

本テーブルまたは子テーブルをコピー追加の目標テーブルとして設定できます（継承シナリオ）。

![](https://static-docs.nocobase.com/a072aa572fd0a0fe643eadf95471da2a.png)

テンプレートフィールドの設定：テンプレートフィールドはデフォルト値としてフォームに入力され、選択されたフィールド値のみが引き出されます。

![](https://static-docs.nocobase.com/8032fa2025180ade275da55b97774b4d.png)

「運行伝票」（o2m）はコピーの関係であり、そのフィールドコンポーネントを子フォームとして調整し、子フォーム内のフィールドを設定します。

![](https://static-docs.nocobase.com/b13c9287bae8601646727a2e78b81be7.png)

#### フォームフィールドの同期

- 現在のフォーム区画で設定されたフィールドを自動的に解析し、テンプレートフィールドとして使用します。
- フォーム区画のフィールド（関係フィールドコンポーネントの調整など）を後で変更した場合、テンプレート設定を再度開き、同期ボタンをクリックしてフォームとテンプレートの一貫性を確保します。

![](https://static-docs.nocobase.com/156b6d8d741521e63d12e49092414d58.png)

テンプレートデータはフォームのデフォルト値として入力され、データを変更して提出することでデータのコピーが完了します。

以下の図は、注文リストの設定コピー操作の完全な例です。

![](https://static-docs.nocobase.com/fa8a89abf0ba136df04b6d0d838eae4e.gif)

### 補足説明

#### コピー、引用、プリロードの説明

異なるフィールド（異なる関係タイプ）には異なる処理ロジック（コピー、引用、プリロード）があり、関係フィールドのフィールドコンポーネントの調整も処理ロジックに影響を与えます（SelectおよびRecordピッカーは引用関係の処理に、Sub-formおよびSub-tableはコピー関係の処理に使用されます）。

- **コピー**

  - 一般フィールドはコピーされます。
  - hasOneおよびhasManyの関係フィールドはコピーのみ可能です（このタイプの関係フィールドはSelectやRecordピッカーをフィールドコンポーネントとして使用できず、Sub-formやSub-tableなどを使用する必要があります）。
    - hasOneおよびhasManyのフィールドコンポーネントの変更は処理ロジック（コピー）を変更しません。
    - コピーされた関係フィールドのすべての子フィールドは選択可能です。

- **引用**

  - belongsToおよびbelongsToManyは引用です。
  - **引用はコピーに変わる可能性があります。例えば、フィールドコンポーネントがSelectからSub-formに変更されると、関係は引用からコピーに変わります（コピーに変わると、すべての子フィールドが選択可能になります）。**

- **プリロード**：引用フィールド内の関係フィールド。

  - 引用の関係フィールド下の関係フィールドはプリロードです。
  - プリロードの関係フィールドはフィールドコンポーネントの変更後、引用またはコピーに変わる可能性があります。

#### 全選択

- すべてのコピーフィールドと引用フィールドを選択します。

#### データテンプレートとして選択されたレコードは以下のフィールドのデータをフィルタリングします：

- コピーされた関係データの主キーはフィルタリングされ、引用とプリロードは主キーをフィルタリングしません。
- 外部キー
- 重複を許可しないフィールド
- ソートフィールド
- 自動エンコードフィールド
- パスワード
- 作成者
- 作成日
- 最終更新者
- 最終更新日

#### 同期フォームフィールド

- 現在のフォームブロックで設定されたフィールドを自動的に解析し、テンプレートフィールドとして使用します。
- その後、フォームブロックフィールドを変更した場合（関係フィールドコンポーネントの調整など）、再度テンプレート設定を開き、同期フォームボタンをクリックして、フォームとテンプレートの整合性を確保します。
