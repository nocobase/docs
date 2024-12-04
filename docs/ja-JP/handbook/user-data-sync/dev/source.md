# 拡張された同期データソース

## 概要

NocoBase では、ユーザーのデータ同期ソースタイプを必要に応じて拡張することができます。

## サーバーサイド

### データソースインターフェース

組み込みのユーザーデータ同期プラグインは、データソースタイプの登録と管理を提供します。データソースタイプを拡張するには、プラグインが提供する `SyncSource` 抽象クラスを継承し、対応する標準インターフェースを実装します。

```ts
import { SyncSource, UserData } from '@nocobase/plugin-user-data-sync';

class CustomSyncSource extends SyncSource {
  async pull(): Promise<UserData[]> {
    return [];
  }
}
```

`SyncSource` クラスには、データソースのカスタム設定を取得するための `options` プロパティが含まれています。

```ts
import { SyncSource, UserData } from '@nocobase/plugin-user-data-sync';

class CustomSyncSource extends SyncSource {
  async pull(): Promise<UserData[]> {
    //...
    const { appid, secret } = this.options;
    //...
    return [];
  }
}
```

### `UserData` フィールドの説明

| フィールド    | 説明                                 |
| ------------- | ------------------------------------ |
| `dataType`   | データタイプ、選択肢は `user` と `department` |
| `uniqueKey`  | 一意な識別子フィールド               |
| `records`    | データレコード                       |
| `sourceName` | データソースの名前                   |

`dataType` が `user` の場合、`records` には次のフィールドが含まれます：

| フィールド    | 説明              |
| ------------- | ----------------- |
| `id`          | ユーザーID        |
| `nickname`    | ユーザーのニックネーム |
| `avatar`      | ユーザーのアバター |
| `email`       | メールアドレス     |
| `phone`       | 電話番号           |
| `departments` | 所属部署IDの配列   |

`dataType` が `department` の場合、`records` には次のフィールドが含まれます：

| フィールド   | 説明                  |
| ------------ | --------------------- |
| `id`         | 部門ID                |
| `name`       | 部門名                |
| `parentId`   | 親部門ID              |

### データソースインターフェースの実装例

```ts
import { SyncSource, UserData } from '@nocobase/plugin-user-data-sync';

class CustomSyncSource extends SyncSource {
  async pull(): Promise<UserData[]> {
    // ...
    const ThirdClientApi = new ThirdClientApi(
      this.options.appid,
      this.options.secret,
    );
    const departments = await this.clientapi.getDepartments();
    const users = await this.clientapi.getUsers();
    // ...
    return [
      {
        dataType: 'department',
        uniqueKey: 'id',
        records: departments,
        sourceName: this.instance.name,
      },
      {
        dataType: 'user',
        uniqueKey: 'id',
        records: users,
        sourceName: this.instance.name,
      },
    ];
  }
}
```

### データソースタイプの登録

拡張したデータソースは、データ管理モジュールに登録する必要があります。

```ts
import UserDataSyncPlugin from '@nocobase/plugin-user-data-sync';

class CustomSourcePlugin extends Plugin {
  async load() {
    const syncPlugin = this.app.pm.get(
      UserDataSyncPlugin,
    ) as UserDataSyncPlugin;
    if (syncPlugin) {
      syncPlugin.sourceManager.registerType('custom-source-type', {
        syncSource: CustomSyncSource,
        title: 'Custom Source',
      });
    }
  }
}
```

---

## クライアントサイド

クライアントユーザーインターフェースは、ユーザーデータ同期プラグインのクライアント提供インターフェースである `registerType` メソッドを使ってデータソースタイプを登録します：

```ts
import SyncPlugin from '@nocobase/plugin-user-data-sync/client';

class CustomSourcePlugin extends Plugin {
  async load() {
    const sync = this.app.pm.get(SyncPlugin);
    sync.registerType(authType, {
      components: {
        AdminSettingsForm, // 管理者向けの設定フォーム
      },
    });
  }
}
```

### 管理者向けフォーム

![管理者向けフォーム](https://static-docs.nocobase.com/202412041429835.png)

上部は一般的なデータソースの設定を提供し、下部はカスタム設定フォームを登録できる部分です。
