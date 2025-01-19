# v0.17 : 4 décembre 2023

## Nouvelles fonctionnalités

Afin de réduire les coûts d'apprentissage pour les développeurs et d'offrir une meilleure expérience de développement frontend, nous avons entrepris une refonte progressive du cœur frontend au cours des derniers mois, ce qui inclut :

![20240115141058](https://static-docs.nocobase.com/20240115141058.png)

Cette version v0.17 a refactorisé les éléments liés au **UI Schema Designer**, notamment **SchemaInitializer** et **SchemaSettings**.

![20240115141118](https://static-docs.nocobase.com/20240115141118.png)

![20240115141129](https://static-docs.nocobase.com/20240115141129.png)

### Refonte de la documentation

Pour faciliter la prise en main par les utilisateurs, nous avons également réorganisé diverses sections de la documentation :

- **Développement de plugins** : La section a été complètement révisée et publiée. Consultez-la [ici](https://docs.nocobase.com/development).
- **Référence API / Client** : Une nouvelle section dédiée à l'[API Client](https://client.docs.nocobase.com/core/application/application), déjà publiée.
- **Manuel Utilisateur** : Une version complètement révisée sera publiée dans une à deux semaines.
- **Liste des plugins** : Nouvelle section qui comprendra des introductions, des instructions d'utilisation et des guides pour le développement d'extensions pour tous les plugins existants, prévue pour être publiée dans une à deux semaines.

## Modifications incompatibles

### Modifications de `SchemaInitializer`

- Ajout de `SchemaInitializerManager` pour enregistrer les `SchemaInitializer`.
- Ajout de `useSchemaInitializerRender()` pour remplacer l'ancienne méthode `useSchemaInitializer()` et sa fonction `render()`.
- Ajout de `useSchemaInitializerItem()` pour obtenir le contexte de l'élément d'initialisation actuel.
- Ajout du composant `SchemaInitializerItemGroup` comme composant par défaut pour `type: 'itemGroup'`.
- Ajout du composant `SchemaInitializerSubMenu` comme composant par défaut pour `type: 'subMenu'`.
- Ajout du composant `SchemaInitializerDivider` comme composant par défaut pour `type: 'divider'`.
- Ajout du composant `SchemaInitializerChildren` pour rendre de manière personnalisée plusieurs éléments de liste.
- Ajout du composant `SchemaInitializerChild` pour rendre de manière personnalisée un seul élément de liste.
- Changement des responsabilités de `SchemaInitializerContext` pour stocker le contexte de l'initialiseur actuel.
- Changement des responsabilités de `useSchemaInitializer()` pour obtenir le contexte de l'initialiseur actuel.
- Transformation de `SchemaInitializer` de fonction en `class` pour définir l'initialiseur.
- Modifications des paramètres de `SchemaInitializer` :
  - Ajout du paramètre requis `name` pour la valeur de `x-initializer`.
  - Ajout du paramètre `Component` pour personnaliser le rendu du bouton. Par défaut, c'est `SchemaInitializerButton`.
  - Ajout des paramètres `componentProps`, `style` pour configurer les propriétés et le style du `Component`.
  - Ajout du paramètre `ItemsComponent` pour personnaliser le rendu de la liste. Par défaut, c'est `SchemaInitializerItems`.
  - Ajout des paramètres `itemsComponentProps`, `itemsComponentStyle` pour configurer les propriétés et le style de `ItemsComponent`.
  - Ajout du paramètre `popover` pour configurer l'affichage de l'effet `popover`.
  - Ajout du paramètre `useInsert` pour les cas où la fonction `insert` nécessite l'utilisation de hooks.
  - Changement du paramètre `dropdown` en `popoverProps`, utilisant `Popover` au lieu de `Dropdown`.
- Modifications des paramètres de `items` pour `SchemaInitializer` :
  - Ajout de la fonction `useChildren` pour contrôler dynamiquement les éléments enfants.
  - Ajout de la fonction `componentProps` pour les propriétés du composant lui-même.
  - Ajout de la fonction `useComponentProps` pour traiter dynamiquement les propriétés du composant.
  - Changement du paramètre `key` en `name` pour l'identification unique des éléments de la liste.
  - Changement du paramètre `visible` en fonction `useVisible` pour contrôler dynamiquement l'affichage.
  - Changement du paramètre `component` en `Component` pour rendre les éléments de la liste.
- Changement de `SchemaInitializer.Button` en `SchemaInitializerButton`, qui devient la valeur par défaut pour le paramètre `Component` de `SchemaInitializer`.
- Changement de `SchemaInitializer.Item` en `SchemaInitializerItem`, sans modification des paramètres.
- Changement de `SchemaInitializer.ActionModal` en `SchemaInitializerActionModal`, sans modification des paramètres.
- Changement de `SchemaInitializer.SwitchItem` en `SchemaInitializer.Switch`, sans modification des paramètres.
- Suppression de `SchemaInitializerProvider`, remplacé par `SchemaInitializerManager`.
- Suppression de `SchemaInitializer.itemWrap`, inutile désormais pour envelopper le composant `item`.

### Modifications de `SchemaSettings`

- Ajout de `SchemaSettingsManager` pour enregistrer les `SchemaSettings`.
- Ajout de `useSchemaSettingsItem()`.
- Ajout de `useSchemaSettingsRender()`.
- Ajout du paramètre `x-settings` pour configurer les paramètres du schéma.
- Ajout du paramètre `x-toolbar` pour configurer la barre d'outils du schéma.
- Ajout du composant `SchemaToolbar` pour personnaliser la barre d'outils du schéma.
- Ajout de `useSchemaToolbarRender()` pour remplacer l'ancienne méthode `useDesigner()`.
- Transformation de `function SchemaSettings` en `class SchemaSettings` pour définir les paramètres.
- Changement de l'ancien `SchemaSettings` en `SchemaSettingsDropdown`.
- Changement de `SchemaSettings.Item` en `SchemaSettingsItem`.
- Changement de `SchemaSettings.ItemGroup` en `SchemaSettingsItemGroup`.
- Changement de `SchemaSettings.SubMenu` en `SchemaSettingsSubMenu`.
- Changement de `SchemaSettings.Divider` en `SchemaSettingsDivider`.
- Changement de `SchemaSettings.Remove` en `SchemaSettingsRemove`.
- Changement de `SchemaSettings.SelectItem` en `SchemaSettingsSelectItem`.
- Changement de `SchemaSettings.CascaderItem` en `SchemaSettingsCascaderItem`.
- Changement de `SchemaSettings.SwitchItem` en `SchemaSettingsSwitchItem`.
- Changement de `SchemaSettings.ModalItem` en `SchemaSettingsModalItem`.
- Changement de `SchemaSettings.ActionModalItem` en `SchemaSettingsActionModalItem`.
- Suppression du paramètre `x-designer`, obsolète, qui sera supprimé dans les futures versions, à remplacer par `x-toolbar`.
- Suppression de `useDesigner()`, obsolète, qui sera supprimé dans les futures versions, à remplacer par `useSchemaToolbarRender()`.

Pour plus de détails, consultez [les modifications incompatibles dans NocoBase 0.17](https://docs.nocobase.com/welcome/release/upgrade-to/v017).
