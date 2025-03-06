# 権限管理

## 紹介

NocoBaseのACLモジュールは主に2つの部分で構成されています：

- コア内の `@nocobase/acl`：コア機能を提供します。
- プラグイン内の `@nocobase/plugin-acl`：動的設定機能を提供します。

## インストール

このモジュールは組み込みプラグインのため、別途インストールは不要です。

## 開発ガイド

### 新しい権限設定タブの拡張

以下に「モバイルメニュー」設定項目を例に、新しい権限設定タブの拡張方法を示します。効果は下の図のようになります：

![20240903210248](https://static-docs.nocobase.com/20240903210248.png)

コードは以下の通りです：

```typescript
import { Plugin } from '@nocobase/client';
import PluginACLClient from '@nocobase/plugin-acl/client';

class PluginMobileClient extends Plugin {
  async load() {
    const aclInstance = this.app.pm.get(PluginACLClient);

    aclInstance?.settingsUI.addPermissionsTab(({ t, TabLayout, activeKey }) => ({
      key: 'mobile-menu',
      label: t('Mobile menu', {
        ns: 'plugin-mobile',
      }),
      children: (
        <TabLayout>
          <MenuPermissions />
        </TabLayout>
      ),
    }));
  }
}
```

まず、`PluginACLClient` プラグインのインスタンスを取得する必要があります（[プラグインインスタンスの取得方法](https://docs.nocobase.com/development/client/life-cycle#%E8%8E%B7%E5%8F%96%E6%8F%92%E4%BB%B6)）。次に、`settingsUI.addPermissionsTab` メソッドを使用して、新しい権限設定タブを追加します。この例では、「モバイルメニュー」という名前の権限設定タブを追加しました。

`settingsUI` プロパティの値は、`ACLSettingsUI` クラスのインスタンスであり、型情報は以下の通りです：

```typescript
import { TabsProps } from 'antd/es/tabs/index';

interface ACLSettingsUI {
  addPermissionsTab(tab: Tab | TabCallback): void;
  getPermissionsTabs(props: PermissionsTabsProps): Tab[];
}

type Tab = TabsProps['items'][0];

type TabCallback = (props: PermissionsTabsProps) => Tab;

interface PermissionsTabsProps {
  /**
   * 現在アクティブなタブパネルのキー
   */
  activeKey: string;
  /**
   * 現在選択されているロール
   */
  role: Role;
  /**
   * 翻訳関数
   */
  t: TFunction;
  /**
   * タブ内のコンテナのサイズを制約するために使用
   */
  TabLayout: React.FC;
}
```

