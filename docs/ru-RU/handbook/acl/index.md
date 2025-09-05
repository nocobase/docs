# Контроль доступа

## Введение

Модуль ACL (Access Control List) в NocoBase состоит из двух основных частей:

- `@nocobase/acl` — модуль в ядре, предоставляющий базовые функции управления доступом
- `@nocobase/plugin-acl` — плагин, реализующий возможности динамической настройки

## Установка

Плагин встроен в систему — отдельная установка не требуется.

## Руководство по разработке

### Расширение вкладок конфигурации прав доступа

Ниже приведён пример расширения интерфейса конфигурации прав — добавление новой вкладки **«Мобильное меню»**. Результат показан на изображении:

![20240903210248](https://static-docs.nocobase.com/20240903210248.png)

Пример кода:

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

Сначала необходимо получить экземпляр плагина `PluginACLClient`  
([другие способы получения экземпляров плагинов](https://docs.nocobase.com/development/client/life-cycle#%E8%8E%B7%E5%8F%96%E6%8F%92%E4%BB%B6)),  
а затем добавить новую вкладку конфигурации прав доступа с помощью метода `settingsUI.addPermissionsTab`.  
В приведённом примере добавляется вкладка с названием **«Mobile Menu»**.

Свойство `settingsUI` является экземпляром класса `ACLSettingsUI`, тип которого выглядит следующим образом:

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
   * the key of the currently active tab panel
   */
  activeKey: string;
  /**
   * the currently selected role
   */
  role: Role;
  /**
   * translation function
   */
  t: TFunction;
  /**
   * used to constrain the size of the container in the Tab
   */
  TabLayout: React.FC;
}
```
