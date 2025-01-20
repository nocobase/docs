# v0.11 : 2023-07-08

## Nouvelles fonctionnalités

- Nouvelle application client, plugin et routeur
- Mise à niveau de Ant Design vers v5
- Nouveaux plugins :
  - Visualisation de données
  - Clés API
  - Google Maps

## Changements incompatibles

### Nouvelle application client, plugin et routeur

#### Changements de plugin

Avant, vous deviez passer un composant et ce composant devait passer `props.children`. Par exemple :

```tsx | pure
const HelloProvider = (props) => {
  // faire quelque logique
  return <div>{props.children}</div>;
};

export default HelloProvider;
```

Maintenant, vous devez changer pour la méthode des plugins, par exemple :

```diff | pure
+ import { Plugin } from '@nocobase/client';

const HelloProvider = (props) => {
  // faire quelque logique
  return <div>
    {props.children}
  </div>;
}

+ export class HelloPlugin extends Plugin {
+   async load() {
+     this.app.addProvider(HelloProvider);
+   }
+ }

- export default HelloProvider;
+ export default HelloPlugin;
```

Les plugins sont très puissants et peuvent faire beaucoup de choses lors de la phase `load` :

- modifier les routes
- ajouter des composants
- ajouter des fournisseurs
- ajouter des portées
- charger d'autres plugins

#### Changements de routage

Si vous utilisiez `RouteSwitchContext` pour modifier la route auparavant, vous devez maintenant le remplacer par un plugin :

```tsx | pure
import { RouteSwitchContext } from '@nocobase/client';

const HelloProvider = () => {
  const { routes, ...others } = useContext(RouteSwitchContext);
  routes[1].routes.unshift({
    path: '/hello',
    component: Hello,
  });

  return (
    <div>
      <RouteSwitchContext.Provider value={{ ...others, routes }}>
        {props.children}
      </RouteSwitchContext.Provider>
    </div>
  );
};
```

Maintenant, vous devez changer pour la méthode des plugins, par exemple :

```diff | pure
- import { RouteSwitchContext } from '@nocobase/client';
+ import { Plugin } from '@nocobase/client';

const HelloProvider = (props) => {
-  const { routes, ...others } = useContext(RouteSwitchContext);
-  routes[1].routes.unshift({
-    path: '/hello',
-    component: Hello,
-  });

  return <div>
-   <RouteSwitchContext.Provider value={{ ...others, routes }}>
      {props.children}
-   </RouteSwitchContext.Provider>
  </div>
}

+ export class HelloPlugin extends Plugin {
+  async load() {
+    this.app.router.add('admin.hello', {
+       path: '/hello',
+       Component: Hello,
+    });
+    this.app.addProvider(HelloProvider);
+  }
+ }
+ export default HelloPlugin;
```

Plus de détails peuvent être trouvés dans [packages/core/client/src/application/index.md](https://github.com/nocobase/nocobase/blob/main/packages/core/client/src/application/index.md)

### Mise à niveau de Ant Design vers v5

- Pour les détails concernant `antd`, consultez le site officiel [V4 vers V5](https://ant.design/docs/react/migration-v5)
- `@formily/antd` est remplacé par `@formily/antd-v5`
