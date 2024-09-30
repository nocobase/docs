# v0.15：2023-11-13

## 新機能

![プラグイン設定マネージャー](https://static-docs.nocobase.com/20240115140600.png)

## 非互換の変更

### プラグイン設定ページの登録方法

以前は `SettingsCenterProvider` を使用してプラグイン設定ページを登録していましたが、現在はプラグインとして登録する必要があります。

- ケース 1：ページにタブが1つだけの場合

ページにタブが1つだけの場合、新しいバージョンではタブが削除され、ページのタイトルとアイコンのみが保持されます。

```tsx | pure
const HelloProvider = React.memo((props) => {
  return (
    <SettingsCenterProvider
      settings={{
        hello: {
          title: 'Hello',
          icon: 'ApiOutlined',
          tabs: {
            tab1: {
              title: 'Helloタブ',
              component: HelloPluginSettingPage,
            },
          },
        },
      }}
    >
      {props.children}
    </SettingsCenterProvider>
  );
});
```

これを以下のように変更する必要があります：

```tsx | pure
class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add('hello', {
      title: 'Hello', // 元のタイトル
      icon: 'ApiOutlined', // 元のアイコン
      Component: HelloPluginSettingPage, // 元のタブコンポーネント
      aclSnippet: 'pm.hello.tab1', // 新しいプラグインの場合はこのパラメータを渡す必要はありません
    });
  }
}
```

`tab1` の `Helloタブ` を削除しました。

ここでのパラメータ `aclSnippet` の `pm.hello.tab1` は、元の `settings` オブジェクトのキーに対応します：

```tsx | pure
<SettingsCenterProvider
  settings={{
    hello: {
      // ここでの hello は `pm.hello.tab1` の `hello` に対応します
      tabs: {
        tab1: {
          // ここでの tab1 は `pm.hello.tab1` の tab1 に対応します
        },
      },
    },
  }}
></SettingsCenterProvider>
```

- ケース 2：元のページに複数のタブが存在する場合

```tsx | pure
const HelloProvider = React.memo((props) => {
  return (
    <SettingsCenterProvider
      settings={{
        hello: {
          title: 'Hello',
          icon: 'ApiOutlined',
          tabs: {
            tab1: {
              title: 'Helloタブ1',
              component: HelloPluginSettingPage1,
            },
            tab2: {
              title: 'Helloタブ2',
              component: HelloPluginSettingPage2,
            },
          },
        },
      }}
    >
      {props.children}
    </SettingsCenterProvider>
  );
});
```

これを以下のように変更する必要があります：

```tsx | pure
import { Outlet } from 'react-router-dom';

class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add('hello', {
      title: 'Hello', // 元のタイトル
      icon: 'ApiOutlined', // 元のアイコン
      Component: Outlet,
    });

    this.app.pluginSettingsManager.add('hello.tab1', {
      title: 'Helloタブ1', // 元のタブ1のタイトル
      Component: HelloPluginSettingPage1, // 元のタブ1のコンポーネント
    });

    this.app.pluginSettingsManager.add('hello.tab2', {
      title: 'Helloタブ2', // 元のタブ2のタイトル
      Component: HelloPluginSettingPage2, // 元のタブ2のコンポーネント
    });
  }
}
```

プラグイン設定マネージャーに対応するルート情報を取得します：

```tsx | pure
const baseName = app.pluginSettingsManager.getRouteName('hello');
// admin.settings.hello
const basePath = app.pluginSettingsManager.getRoutePath('hello');
// /admin/settings/hello
```

プラグイン設定ページ内にリンクがある場合は、適切な変更を行う必要があります。例えば：

```tsx | pure
navigate('/admin/settings/hello/1');
navigate('/admin/settings/hello/2');

// 次のように変更できます
const basePath = app.pluginSettingsManager.getRoutePath('hello');
navigate(`${basePath}/1`);
navigate(`${basePath}/2`);
```

詳細については、[プラグイン設定ページ](https://docs-cn.nocobase.com/development/client/plugin-settings)をご参照ください。

## 更新履歴

完全な更新履歴については、[更新履歴](https://github.com/nocobase/nocobase/blob/main/CHANGELOG.md)をご覧ください。

