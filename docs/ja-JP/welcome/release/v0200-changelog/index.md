# v0.20：2024-03-03

## 新機能

### 複数データソースのサポート

新たに「[データソース管理](/handbook/data-source-manager)」プラグインが追加され、すべてのデータソースのデータテーブルやフィールドを管理できます。データソース管理プラグインは中心化されたデータソース管理インターフェースを提供しますが、データソースへの接続機能はありません。各種データソースプラグインと組み合わせて使用する必要があります。現在サポートされているデータソースは以下の通りです：

- [主データベース Main](/handbook/data-source-main)：NocoBaseの主データベースで、MySQL、PostgreSQL、SQLiteなどのリレーショナルデータベースをサポートしています。
- [外部 MySQL データソース](/handbook/data-source-external-mysql)：既存のMySQLデータベースをデータソースとして接続します。
- [外部 MariaDB データソース](/handbook/data-source-external-mariadb)：既存のMariaDBデータベースをデータソースとして接続します。
- [外部 PostgreSQL データソース](/handbook/data-source-external-postgres)：既存のPostgreSQLデータベースをデータソースとして接続します。

さらに、一般的なデータベースやAPI（SDK）を提供するプラットフォームなど、より多くのデータソースを拡張することも可能です。

![データソース管理](https://static-docs.nocobase.com/fe8ecdaf640097eeb310c94a997b9090.png)

### データテーブルの管理方法の調整

従来の「データテーブル管理」を「データソース > 主データベース > 設定」に移動しました。

![Main データベース設定](https://static-docs.nocobase.com/b5ad882a131e447f78b0c22a92ec9df6.gif)

### 非IDフィールドを主キーおよびリレーション制約としてサポート

テーブル作成時にIDフィールドを作成する必要はありません。

![プレセットフィールド](https://static-docs.nocobase.com/87dc4101a884f97cbfce00f1891f7cf6.png)

整数フィールドは主キーとして使用できます。

![整数フィールドは主キーとして使用可能](https://static-docs.nocobase.com/cce37d7d8e9feaa66970da0c643a2d9d.png)

単行テキストフィールドは主キーとして使用できます。

![単行テキストフィールドは主キーとして使用できます。](https://static-docs.nocobase.com/b2c797f52bedfcfa06936a244dd9be4b.png)

関係制約は、ユニークインデックスが設定された他の非主キーフィールドの選択をサポートします。

![](https://static-docs.nocobase.com/e5515e58426c5be08ba982b0bb311410.png)

### ドラッグアンドドロップによる並べ替えの調整

「並べ替え」タイプのフィールドを新たに追加し、テーブル作成時に自動生成される並べ替えフィールドを手動で作成する必要があります。

![](https://static-docs.nocobase.com/470891c7bb34c506328c1f3824a6cf20.png)

特定のフィールドをグループ化として選択した場合、最初にグループ化を行い、その後に並べ替えが実施されます。

![](https://static-docs.nocobase.com/0794d0a9c0dc288a8fc924a3542bb86e.png)

テーブルのドラッグアンドドロップによる並べ替え時には、並べ替えフィールドを選択する必要があります。

![](https://static-docs.nocobase.com/20cf12fd7ca3d8c0aa1917a95c0a7e7c.png)

ボードブロックを作成する際にも、並べ替えフィールドを選択する必要があります。

![](https://static-docs.nocobase.com/b810265790d6a1ec099e3d88d1361271.png)

### ユーザーと権限インターフェースの調整

ユーザー管理インターフェースを新たに追加し、ユーザーとロールの管理を一つのメニューに統合しました。

![](https://static-docs.nocobase.com/7be26746652098f07ce105dbae373522.png)

ロール管理のインターフェースを調整し、ロールに関連するユーザー、権限、部門などのデータを管理しやすくしました。

![](https://static-docs.nocobase.com/4ec942af764dfcec1ddc9a244816a6ee.png)

元の「操作権限」を「データソース」タブに移動しました。

![](https://static-docs.nocobase.com/461ab881fe94a33f9a122e9734b85f4d.gif)

### 部門プラグイン

ユーザーを部門ごとに組織し、上下関係を設定し、役割をバインドして権限を制御し、ワークフローや式で変数として利用できるようにします。

### ワークフロー：承認

承認プラグインは、専用のワークフロータイプ（トリガー）「承認を開始」と、特にこのプロセスに特化した「承認」ノードを提供します。NocoBase特有のカスタムデータテーブルとカスタムブロックを組み合わせることで、さまざまな承認シナリオを迅速かつ柔軟に作成・管理できます。

承認設定

![承認設定](https://static-docs.nocobase.com/21acc5615ecc03aeeb44671ab945baea.png)

承認処理

![承認処理](https://static-docs.nocobase.com/6a879641bd15de0648cd4602779ef9fa.png)

詳細については、ドキュメントをご覧ください：[ワークフロー：承認](/handbook/workflow-approval)

### ワークフロー：終了プロセスノード

このノードが実行されると、現在実行中のワークフローが直ちに終了し、ノード設定の状態で完了します。特定のロジックに基づくプロセス制御に一般的に使用され、特定の論理条件が満たされた後に現在のワークフローを終了し、その後のプロセス処理を続行しません。プログラミング言語の return 命令に似ており、現在実行中の関数を終了します。

![](https://static-docs.nocobase.com/38d6352211d791fd4233f5cd4bdb34f2.png)

詳細については、ドキュメントをご覧ください：[ワークフロー：終了プロセスノード](/handbook/workflow/manual/nodes/end)

### ワークフロー：カスタム変数ノード

プロセス内で変数を宣言するか、既に宣言された変数に値を割り当てることができ、通常はプロセス内で一時的なデータを保存するために使用されます。分岐内で計算結果を保存し、分岐外で使用する必要があるシナリオ（例えば、ループや並列処理など）に適しています。

![](https://static-docs.nocobase.com/c19913f99968d987a52aaa53578a7318.png)

詳細については、ドキュメントをご覧ください：[ワークフロー：カスタム変数ノード](/handbook/workflow-variable)

### ワークフロー：リクエストインターセプター

リクエストインターセプタープラグインは、フォームの操作リクエストをインターセプトするメカニズムを提供します。インターセプトイベントは、対応するフォーム操作が送信された後、処理される前にトリガーされます。トリガー後のプロセスで「プロセス終了」ノードが実行されるか、他のノードが失敗した場合（エラーや他の未完了の状況）、そのフォーム操作はインターセプトされます。それ以外の場合、予定された操作は正常に実行されます。

「レスポンスメッセージ」ノードを併用することで、このプロセスにクライアントへのレスポンスメッセージを返す設定が可能となり、クライアントに適切な提示情報を提供します。リクエストインターセプターは、ビジネス検証やロジックチェックを行うために、クライアントが提出した作成、更新、削除などの操作リクエストを通過またはインターセプトするために使用できます。

![](https://static-docs.nocobase.com/3f3991aaf9d73b8c2f7c179e7702d16b.png)

さらに詳細は文書で確認できます：[ワークフロー：リクエストインターセプター](/handbook/workflow-request-interceptor)

### ワークフロー：レスポンスメッセージノード

レスポンスメッセージノードは、特定のタイプのプロセス（リクエストインターセプトやフォームイベントなど）において、操作を提出したクライアントにプロセス内でカスタマイズされたメッセージをフィードバックするために使用されます。

ノード設定

![](https://static-docs.nocobase.com/4376843af541ef6a08696e074cb6cd07.png)

ヒントメッセージ

![](https://static-docs.nocobase.com/051f12855bd0ce74b22de191b8b87cf5.png)

さらに詳細は文書で確認できます：[ワークフロー：レスポンスメッセージノード](/handbook/workflow-response-message)

## 非互換の変更

### 同名だが衝突するAPI

今回のカーネル変更により、一部の新しいAPIが従来の命名と衝突しています。これらの衝突する従来のAPIはこのバージョンでも保持されますが、統一して `_deprecated` サフィックスが付加されます。

| 元のAPI                      | 廃止されたAPI                           | 新API                                                                                                                  |
| --------------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| CollectionProvider          | CollectionProvider_deprecated        | [CollectionProvider](https://client.docs-cn.nocobase.com/core/data-source/collection-provider)                     |
| useCollection               | useCollection_deprecated             | [useCollection](https://client.docs-cn.nocobase.com/core/data-source/collection-provider#hooks)                   |
| useCollectionField          | useCollectionField_deprecated        | [useCollectionField](https://client.docs-cn.nocobase.com/core/data-source/collection-field#hooks)                 |
| useCollectionManager        | useCollectionManager_deprecated      | [useCollectionManager](https://client.docs-cn.nocobase.com/core/data-source/collection-manager-provider#hooks)    |
| useContext(CollectionManagerContext) | useCollectionManager_deprecated | [useCollectionManager](https://client.docs-cn.nocobase.com/core/data-source/collection-manager-provider#hooks)    |

関連するAPIを使用する場合、変更方法は2種類あります：

- 簡単な置き換え：元のAPIを`_deprecated`が付いたものに置き換えます。例えば、`useCollection()`を`useRecord_deprecated()`に置き換えます。
- 新しいドキュメントに従って新しいAPIを使用する：新しいAPIの名称は旧APIと同じですが、パラメータと戻り値に違いがあるため、新しいドキュメントを参照してコードを調整する必要があります。

### その他調整が必要なAPI

- `registerTemplate()`は`app.dataSourceManager.addCollectionTemplates()`に変更します。
- `registerField()`は`app.dataSourceManager.addFieldInterfaces()`に変更します。
- `registerGroup()`は`app.dataSourceManager.addFieldInterfaceGroups()`に変更します。
- `useContext(CollectionManagerContext)`は`useCollectionManager_deprecated()`に変更します。
- `ExtendCollectionsProvider`を使用してコレクションを拡張します。
- `RecordProvider`が親パラメータを必要とする場合は、明示的に渡す必要があります。

## 変更例の説明

### コレクションテンプレートの拡張

#### 定義

以前はオブジェクト定義の方式でしたが、現在はクラスの方式に変更する必要があります。例えば：

以前

```typescript
import { ICollectionTemplate } from '@nocobase/client';

const calendar: ICollectionTemplate = {
  name: 'calendar',
  title: 'Calendar collection',
  order: 2,
  color: 'orange',
  // ...
}
```

現在

```typescript
import { CollectionTemplate } from '@nocobase/client';

class CalendarCollectionTemplate extends CollectionTemplate {
  name = 'calendar';
  title = 'Calendar collection';
  order = 2;
  color = 'orange';
}
```

元のオブジェクト属性はクラスのメンバーになります。

#### 登録

以前は `registerTemplate` を使用して登録していましたが、現在はプラグインの `dataSourceManager.addCollectionTemplates` を使用して登録する必要があります。例えば：

以前

```typescript
import { registerTemplate } from '@nocobase/client';
import { calendar } from './calendar';

registerTemplate('calendar', calendar);
```

現在

```typescript
import { Plugin } from '@nocobase/client';
import { CalendarCollectionTemplate } from './calendar';

export class CalendarPluginClient extends Plugin {
  async load() {
    this.app.dataSourceManager.addCollectionTemplates([CalendarCollectionTemplate]);
  }
}
```

### フィールドインターフェースの拡張

#### 定義

以前はオブジェクト定義の方式でしたが、現在はクラスの方式に変更する必要があります。例えば：

以前

```typescript
import { IField } from '@nocobase/client';

const attachment: IField = {
  name: 'attachment',
  type: 'object',
  group: 'media',
  title: '添付ファイル',
  // ...
}
```

現在

```typescript
import { CollectionFieldInterface } from '@nocobase/client';

class AttachmentFieldInterface extends CollectionFieldInterface {
  name = 'attachment';
  type = 'object';
  group = 'media';
  title = '添付ファイル';
  // ...
}
```

元のオブジェクトプロパティはクラスのメンバーになります。

#### 登録

以前は `registerField` を使用して登録していましたが、現在はプラグインの `dataSourceManager.addFieldInterfaces` を使用して登録する必要があります。また、`CollectionManagerProvider` を再度渡す必要はありません。例えば：

以前のコード

```diff
import { registerField } from '@nocobase/client';
import { attachment } from './attachment';

- registerField(attachment.group, 'attachment', attachment);

export const FileManagerProvider: FC = (props) => {
  return (
-   <CollectionManagerProvider interfaces={{ attachment }}>
      <SchemaComponentOptions scope={hooks} components={{ UploadActionInitializer }}>
        {props.children}
      </SchemaComponentOptions>
-   </CollectionManagerProvider>
  );
};
```

現在のコード

```typescript
import { Plugin } from '@nocobase/client';
import { AttachmentFieldInterface } from './attachment';

export class FilPlugin extends Plugin {
  async load() {
    this.app.dataSourceManager.addFieldInterfaces([AttachmentFieldInterface]);
  }
}
```

### フィールドインターフェースグループの拡張

以前は `registerGroup` を使用して登録されていましたが、現在はプラグインの `dataSourceManager.addFieldInterfaceGroups` を使用して登録する必要があります。例えば：

```diff
- import { registerGroup, Plugin } from '@nocobase/client';
+ import { Plugin } from '@nocobase/client';

- registerGroup('map', {
-        label: '地図ベースの幾何学図形',
-        order: 10
- });

export class MapPlugin extends Plugin {
  async load() {
+    this.app.dataSourceManager.addFieldInterfaceGroups({
+      map: {
+        label: generateNTemplate('地図ベースの幾何学図形'),
+        order: 51,
+      },
+    });
  }
}
```

### `useContext(CollectionManagerContext)` を `useCollectionManager_deprecated()` に変更

```diff
- const ctx = useContext(CollectionManagerContext);
+ const ctx = useCollectionManager_deprecated();
```

### コレクションの拡張、`CollectionManagerProvider` の代わりに `ExtendCollectionsProvider` を使用

```diff
const Demo = () => {
-  <CollectionManagerProvider collections={[apiKeysCollection]}>
+  <ExtendCollectionsProvider collections={[apiKeysCollection]}>
...
-  </CollectionManagerProvider>
+  </ExtendCollectionsProvider>
}
```

### RecordProvider の変更

以前は、parent 属性を指定しない場合、自動的に上位の RecordProvider の値が parent として取得されていました。現在は、明示的に parent を指定する必要があります。parent を指定しない場合、parent の値は undefined になります。

```diff
- <RecordProvider record={recordData}>
+ <RecordProvider record={recordData} parent={parentRecordData}>
...
</RecordProvider>
```

歴史的な制約がない場合は、CollectionRecordProvider を直接使用して置き換えることも可能です。

```diff
- <RecordProvider record={recordData}>
+ <CollectionRecordProvider record={recordData} parent={parentRecordData}>
...
- </RecordProvider>
+ </CollectionRecordProvider>
```

:::warning{title="RecordProvider と CollectionRecordProvider の違い"}
- RecordProvider は廃止され、将来的には削除される予定です。
- RecordProvider には古い RecordContext が含まれていますが、CollectionRecordProvider には含まれていません。
:::

