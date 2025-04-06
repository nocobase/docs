# Contrôle d'accès (ACL)

## Introduction

Le module ACL de NocoBase se compose principalement de deux parties :

- `@nocobase/acl` dans le noyau, qui fournit les fonctions principales
- `@nocobase/plugin-acl` dans le plugin, qui fournit des capacités de configuration dynamique

## Installation

Plugin intégré, aucune installation séparée requise.

## Guide de développement

### Extension d'un nouvel onglet de configuration des permissions

Ci-dessous un exemple de l'élément de configuration "Menu mobile", montrant comment étendre un nouvel onglet de configuration des permissions. L'effet est illustré dans l'image ci-dessous :

![20240903210248](https://static-docs.nocobase.com/20240903210248.png)

Le code est le suivant :

```typescript
import { Plugin } from '@nocobase/client';
import PluginACLClient from '@nocobase/plugin-acl/client';

class PluginMobileClient extends Plugin {
  async load() {
    const aclInstance = this.app.pm.get(PluginACLClient);

    aclInstance?.settingsUI.addPermissionsTab(({ t, TabLayout, activeKey }) => ({
      key: 'mobile-menu',
      label: t('Menu mobile', {
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

Tout d'abord, nous devons obtenir une instance du plugin `PluginACLClient` ([autres méthodes pour obtenir des instances de plugins](https://docs.nocobase.com/development/client/life-cycle#%E8%8E%B7%E5%8F%96%E6%8F%92%E4%BB%B6)), puis ajouter un nouvel onglet de configuration des permissions à l'aide de la méthode `settingsUI.addPermissionsTab`. Dans cet exemple, nous avons ajouté un onglet de configuration des permissions nommé "Menu mobile".

La valeur de la propriété `settingsUI` est une instance d'une classe nommée `ACLSettingsUI`, et ses informations de type sont les suivantes :

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
   * la clé de l'onglet actuellement actif
   */
  activeKey: string;
  /**
   * le rôle actuellement sélectionné
   */
  role: Role;
  /**
   * fonction de traduction
   */
  t: TFunction;
  /**
   * utilisée pour contraindre la taille du conteneur dans l'onglet
   */
  TabLayout: React.FC;
}
```
