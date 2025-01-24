# v0.15: 2023-11-13

## Nouvelles fonctionnalités

![Gestionnaire de paramètres de plugin](https://static-docs.nocobase.com/20240115140600.png)

## Changements incompatibles

### API d'enregistrement de la page de configuration du plugin

Auparavant, la page de configuration du plugin était enregistrée à l'aide de `SettingsCenterProvider`. Désormais, l'enregistrement se fait directement via le plugin.

#### Cas 1 : Il n'y a qu'un seul onglet sur la page

Lorsqu'il n'y a qu'un seul onglet sur la page, la nouvelle version supprimera cet onglet, ne laissant que le titre et l'icône de la page.

Avant :

```tsx | pure
const HelloProvider = React.memo(props => {
  return (
    <SettingsCenterProvider
      settings={{
        hello: {
          title: "Hello",
          icon: "ApiOutlined",
          tabs: {
            tab1: {
              title: "Hello tab",
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

Maintenant, il faut changer en :

```tsx | pure
class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add("hello", {
      title: "Hello",
      icon: "ApiOutlined",
      Component: HelloPluginSettingPage,
      // Ce paramètre n'est pas nécessaire s'il s'agit d'un nouveau plugin
      aclSnippet: "pm.hello.tab1",
    });
  }
}
```

Le `Hello Tab` de `tab1` a été supprimé.

Le paramètre `aclSnippet` (`pm.hello.tab1`) correspond à la clé de l'objet `settings` d'origine :

```tsx
<SettingsCenterProvider
  settings={{
    hello: {
      // Ce `hello` correspond à `hello` dans `pm.hello.tab1`
      tabs: {
        tab1: {
          // Ici, `tab1` correspond à `tab1` dans `pm.hello.tab1`
        },
      },
    },
  }}
></SettingsCenterProvider>
```

#### Cas 2 : Il y a plusieurs onglets sur la page

Avant :

```tsx
const HelloProvider = React.memo(props => {
  return (
    <SettingsCenterProvider
      settings={{
        hello: {
          title: "Hello",
          icon: "ApiOutlined",
          tabs: {
            tab1: {
              title: "Hello tab1",
              component: HelloPluginSettingPage1,
            },
            tab2: {
              title: "Hello tab2",
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

Maintenant, il faut changer en :

```tsx
import { Outlet } from "react-router-dom";

class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add("hello", {
      title: "Hello",
      icon: "ApiOutlined",
      Component: Outlet,
    });

    this.app.pluginSettingsManager.add("hello.tab1", {
      title: "Hello tab1",
      Component: HelloPluginSettingPage1,
    });

    this.app.pluginSettingsManager.add("hello.tab2", {
      title: "Hello tab2",
      Component: HelloPluginSettingPage1,
    });
  }
}
```

Pour récupérer les informations de routage correspondantes au `pluginSettingsManager` :

```tsx
const baseName = app.pluginSettingsManager.getRouteName("hello");
// admin.settings.hello
const basePath = app.pluginSettingsManager.getRoutePath("hello"); // /admin/settings.
// /admin/settings/hello
```

Si un lien de navigation existe à l'intérieur de la page de configuration du plugin, il faut le mettre à jour comme suit :

Avant :

```tsx | pure
navigate("/admin/settings/hello/1").navigate("/admin/settings/hello/2");
```

Maintenant, il doit être remplacé par :

```tsx | pure
const basePath = app.pluginSettingsManager.getRoutePath("hello");
navigate(`${basePath}/1`);
navigate(`${basePath}/2`);
```

Pour plus d'informations, consultez le [gestionnaire de paramètres de plugin](https://docs.nocobase.com/development/client/plugin-settings).

## Changements

Pour un changelog complet, veuillez consulter [Changelog](https://github.com/nocobase/nocobase/blob/main/CHANGELOG.md).
