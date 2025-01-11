# v0.20 : 2024-03-03

## Nouvelles fonctionnalités

### Support de plusieurs sources de données

Ajout du plugin "[Gestionnaire de sources de données](/handbook/data-source-manager)", utilisé pour gérer toutes les collections et champs des sources de données. Le plugin Gestionnaire de sources de données offre une interface centralisée pour gérer les sources de données, mais ne fournit pas la capacité d'accéder directement à ces sources. Il doit être utilisé en combinaison avec divers plugins de sources de données. Les sources de données actuellement prises en charge incluent :

- [Base de données principale](/handbook/data-source-main) : Base de données principale de NocoBase, prenant en charge les bases de données relationnelles telles que MySQL, PostgreSQL, SQLite, etc.
- [Source de données MySQL externe](/handbook/data-source-external-mysql) : Accès à une base de données MySQL existante en tant que source de données.
- [Source de données MariaDB externe](/handbook/data-source-external-mariadb) : Accès à une base de données MariaDB existante en tant que source de données.
- [Source de données PostgreSQL externe](/handbook/data-source-external-postgres) : Accès à une base de données PostgreSQL existante en tant que source de données.

De plus, d'autres sources de données peuvent être étendues, qu'il s'agisse de types de bases de données courants ou de plateformes offrant des API (SDK).

![Gestionnaire de sources de données](https://static-docs.nocobase.com/fe8ecdaf640097eeb310c94a997b9090.png)

### Ajustement de la gestion des collections

Le gestionnaire de collections d'origine a été déplacé vers "Source de données > Base de données principale > Configuration".

![Configuration de la base de données principale](https://static-docs.nocobase.com/b5ad882a131e447f78b0c22a92ec9df6.gif)

### Support des champs non-ID comme clés primaires et contraintes de relation

Lors de la création d'une collection, vous pouvez choisir de ne pas créer de champ ID.

![Champs prédéfinis](https://static-docs.nocobase.com/87dc4101a884f97cbfce00f1891f7cf6.png)

Les champs de type entier peuvent être utilisés comme clés primaires.

![Les champs de type entier peuvent être utilisés comme clés primaires](https://static-docs.nocobase.com/cce37d7d8e9feaa66970da0c643a2d9d.png)

Les champs de texte à une ligne peuvent également être utilisés comme clés primaires.

![Les champs de texte à une ligne peuvent également être utilisés comme clés primaires](https://static-docs.nocobase.com/b2c797f52bedfcfa06936a244dd9be4b.png)

Les contraintes de relation prennent en charge la sélection d'autres champs avec des index uniques définis en tant que champs non-clés primaires.

![](https://static-docs.nocobase.com/e5515e58426c5be08ba982b0bb311410.png)

### Ajustement du tri par glisser-déposer

Ajout d'un champ de type "Tri". Les champs de tri ne sont plus générés automatiquement lors de la création des collections et doivent être créés manuellement.

![Champ de tri](https://static-docs.nocobase.com/470891c7bb34c506328c1f3824a6cf20.png)

Lors de la sélection d'un champ en tant que groupe, le regroupement sera effectué avant le tri.

![Tri avant le regroupement](https://static-docs.nocobase.com/0794d0a9c0dc288a8fc924a3542bb86e.png)

Lorsque le tri par glisser-déposer est activé dans le bloc de table, il est nécessaire de sélectionner le champ de tri.

![Sélectionner le champ de tri](https://static-docs.nocobase.com/20cf12fd7ca3d8c0aa1917a95c0a7e7c.png)

Lors de la création d'un bloc Kanban, vous devez sélectionner le champ de tri.

![Sélectionner le champ de tri pour Kanban](https://static-docs.nocobase.com/b810265790d6a1ec099e3d88d1361271.png)

### Ajustement des interfaces utilisateur et des permissions

Ajout de l'interface de gestion des utilisateurs et unification de la gestion des utilisateurs et des rôles sous un même menu.

![Interface de gestion des utilisateurs](https://static-docs.nocobase.com/7be26746652098f07ce105dbae373522.png)

Ajustement de l'interface de gestion des rôles pour faciliter la gestion des rôles associés aux utilisateurs, des permissions, des départements, etc.

![Interface de gestion des rôles](https://static-docs.nocobase.com/4ec942af764dfcec1ddc9a244816a6ee.png)

Déplacement des "Permissions d'action" vers l'onglet "Source de données".

![Permissions d'action](https://static-docs.nocobase.com/461ab881fe94a33f9a122e9734b85f4d.gif)

### Plugin Département

Organisez les utilisateurs en départements, définissez des relations hiérarchiques, associez des rôles pour contrôler les permissions et utilisez les départements comme variables dans les workflows et expressions.

![Plugin Département](https://static-docs.nocobase.com/093473d9c23a789d41899df9bcaf3389.png)

### Workflow : Approvisionnement

Le plugin d'approbation fournit des types de workflow dédiés (déclencheurs) "Initier une approbation" et "Approuver" pour ce processus. Combiné avec les tables de données personnalisées et les blocs personnalisés de NocoBase, il est possible de créer et gérer rapidement divers scénarios d'approbation de manière flexible.

Configuration de l'approbation

![Configuration de l'approbation](https://static-docs.nocobase.com/21acc5615ecc03aeeb44671ab945baea.png)

Processus d'approbation

![Processus d'approbation](https://static-docs.nocobase.com/6a879641bd15de0648cd4602779ef9fa.png)

Plus de détails sont disponibles dans la documentation : [Workflow Approvisionnement](/handbook/workflow-approval)

### Workflow : Noeud de fin de processus

Ce noeud met immédiatement fin à l'exécution en cours du workflow lorsqu'il est exécuté et se termine avec le statut configuré dans le noeud. Il est généralement utilisé pour contrôler le flux logique spécifique, pour sortir du workflow actuel après avoir satisfait certaines conditions logiques, sans continuer avec les traitements suivants. Cela peut être comparé à la commande de retour dans les langages de programmation, utilisée pour sortir de la fonction en cours d'exécution.

![Noeud de fin de processus](https://static-docs.nocobase.com/38d6352211d791fd4233f5cd4bdb34f2.png)

Plus de détails sont disponibles dans la documentation : [Noeud de fin de processus](/handbook/workflow/manual/nodes/end)

### Workflow : Noeud de variable personnalisée

Les variables peuvent être déclarées dans le workflow ou affecter des valeurs aux variables précédemment déclarées, généralement utilisées pour stocker des données temporaires dans le workflow. Il est adapté aux scénarios où les résultats de calcul doivent être stockés pour une utilisation ultérieure en dehors des branches (comme les boucles, le parallélisme, etc.).

![Noeud de variable personnalisée](https://static-docs.nocobase.com/c19913f99968d987a52aaa53578a7318.png)

Plus de détails sont disponibles dans la documentation : [Noeud de variable personnalisée](/handbook/workflow-variable)

### Workflow: Intercepteur de requêtes

Le plugin **intercepteur de requêtes** fournit un mécanisme pour intercepter les opérations sur les formulaires, où l'événement d'interception est déclenché après que l'opération de formulaire correspondante ait été soumise, mais avant qu'elle ne soit traitée. Si un nœud **"Fin de processus"** est exécuté dans le flux de processus suivant après le déclenchement, ou si d'autres nœuds échouent à s'exécuter (erreurs ou autres exécutions incomplètes), l'opération de formulaire sera interceptée. Sinon, l'opération prévue sera exécutée normalement. Cela peut être utilisé pour la validation métier ou les vérifications logiques pour approuver ou intercepter les opérations de création, mise à jour et suppression soumises par le client.

![Intercepteur de requêtes](https://static-docs.nocobase.com/3f3991aaf9d73b8c2f7c179e7702d16b.png)

Plus de détails sont disponibles dans la documentation : [Intercepteur de requêtes](/handbook/workflow-request-interceptor)

### Workflow: Nœud de message de réponse

Le nœud **message de réponse** est utilisé pour fournir un retour au client avec des messages personnalisés dans des types de workflows spécifiques (comme l'interception de requêtes et les événements de formulaire).

**Configuration du nœud**

![Configuration du nœud](https://static-docs.nocobase.com/4376843af541ef6a08696e074cb6cd07.png)

**Message de notification**

![Message de notification](https://static-docs.nocobase.com/051f12855bd0ce74b22de191b8b87cf5.png)

Plus de détails sont disponibles dans la documentation : [Nœud de message de réponse](/handbook/workflow-response-message)

## Changements incompatibles

### API avec des noms conflictuels

Dans ce changement du noyau, certaines nouvelles API versionnées sont en conflit avec les anciens noms des API. Ces anciennes API conflictuelles seront conservées dans cette version mais auront toutes le suffixe `_deprecated`.

| API d'origine           | API obsolète                  | Nouvelle API                                                                                                         |
| ----------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| CollectionProvider      | CollectionProvider_deprecated | [CollectionProvider](https://client.docs.nocobase.com/core/data-source/collection-provider)               |
| useCollection           | useCollection_deprecated      | [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#hooks)              |
| useCollectionField      | useCollectionField_deprecated | [useCollectionField](https://client.docs.nocobase.com/core/data-source/collection-field#hooks)                |
| useCollectionManager    | useCollectionManager_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks) |
| useContext(CollectionManagerContext) | useCollectionManager_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks) |

Si vous utilisez les API ci-dessus, vous avez deux options pour effectuer la modification :

- **Remplacement simple** : Remplacez l'API d'origine par celle suffixée avec `_deprecated`, par exemple, remplacez `useCollection()` par `useRecord_deprecated()`.
- **Utilisez la nouvelle API** en suivant la nouvelle documentation : Bien que les noms des nouvelles API soient les mêmes que ceux des anciennes API, il existe des différences dans les paramètres et les valeurs de retour. Vous devez vous référer à la nouvelle documentation pour ajuster le code correspondant.

### Autres ajustements d'API

- `registerTemplate()` a été remplacé par `app.dataSourceManager.addCollectionTemplates()`
- `registerField()` a été remplacé par `app.dataSourceManager.addFieldInterfaces()`
- `registerGroup()` a été remplacé par `app.dataSourceManager.addFieldInterfaceGroups()`
- `useContext(CollectionManagerContext)` a été remplacé par `useCollectionManager_deprecated()`
- Pour étendre les collections, utilisez `ExtendCollectionsProvider`
- `RecordProvider` nécessite maintenant de passer explicitement le paramètre parent lorsqu'il est nécessaire.

### Exemples de changements

### Extension du modèle de collection

#### Définition

Auparavant défini en tant qu'objet, il doit maintenant être modifié pour être une classe. Par exemple :

Avant :

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

Maintenant :

```typescript
import { CollectionTemplate } from '@nocobase/client';

class CalendarCollectionTemplate extends CollectionTemplate {
  name = 'calendar';
  title = 'Calendar collection';
  order = 2;
  color = 'orange';
}
```

Les propriétés de l'objet d'origine deviennent des membres de la classe.

#### Enregistrement

Auparavant enregistré via `registerTemplate`, il doit maintenant être enregistré via `dataSourceManager.addCollectionTemplates` du plugin. Par exemple :

Avant :

```typescript
import { registerTemplate } from '@nocobase/client';
import { calendar } from './calendar'

registerTemplate('calendar', calendar);
```

Maintenant :

```typescript
import { Plugin } from '@nocobase/client';
import { CalendarCollectionTemplate } from './calendar'

export class CalendarPluginClient extends Plugin {
  async load() {
    this.app.dataSourceManager.addCollectionTemplates([CalendarCollectionTemplate]);
  }
}
```

### Extension de l'interface de champ

#### Définition

Auparavant définie comme un objet, elle doit maintenant être modifiée pour être une classe. Par exemple :

Avant :

```typescript
import { IField } from '@nocobase/client';

const attachment: IField = {
  name: 'attachment',
  type: 'object',
  group: 'media',
  title: 'Attachment',
  // ...
}
```

Maintenant :

```typescript
import { CollectionFieldInterface } from '@nocobase/client';

class AttachmentFieldInterface extends CollectionFieldInterface {
  name = 'attachment';
  type = 'object';
  group = 'media';
  title = 'Attachment';
  // ...
}
```

Les propriétés de l'objet d'origine deviennent des membres de la classe.

#### Enregistrement

Auparavant enregistré via `registerField`, il doit maintenant être enregistré via `dataSourceManager.addFieldInterfaces` du plugin et ne nécessite plus de passer `CollectionManagerProvider` à nouveau. Par exemple :

Avant :

```diff
import { registerField } from '@nocobase/client';
import { attachment } from './attachment'

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

Maintenant :

```typescript
import { Plugin } from '@nocobase/client';
import { AttachmentFieldInterface } from './attachment'

export class FilePlugin extends Plugin {
  async load() {
    this.app.dataSourceManager.addFieldInterfaces([AttachmentFieldInterface]);
  }
}
```

### Extension de l'interface de groupe de champs

Auparavant enregistré via `registerGroup`, il doit maintenant être enregistré via `dataSourceManager.addFieldInterfaceGroups` du plugin. Par exemple :

```diff
- import { registerGroup, Plugin } from '@nocobase/client';
+ import { Plugin } from '@nocobase/client';

- registerGroup('map', {
-        label: 'Map-based geometry',
-        order: 10
- })

export class MapPlugin extends Plugin {
  async load() {
+    this.app.dataSourceManager.addFieldInterfaceGroups({
+      map: {
+        label: generateNTemplate('Map-based geometry'),
+        order: 51,
+      },
+    });
  }
}
```

### `useContext(CollectionManagerContext)` modifié en `useCollectionManager_deprecated()`

```diff
- const ctx = useContext(CollectionManagerContext);
+ const ctx = useCollectionManager_deprecated();
```

### Étendre les collections, utiliser `ExtendCollectionsProvider` au lieu de `CollectionManagerProvider`

```diff
const Demo = () => {
-  <CollectionManagerProvider collections={[apiKeysCollection]}>
+  <ExtendCollectionsProvider collections={[apiKeysCollection]}>
...
-  </CollectionManagerProvider>
+  </ExtendCollectionsProvider>
}
```

### Changements dans RecordProvider

Auparavant, lorsque la propriété parent n'était pas passée, la valeur du dernier `RecordProvider` était automatiquement récupérée comme parent. Maintenant, le parent doit être explicitement passé, et lorsque le parent n'est pas passé, la valeur du parent sera `undefined`.

```diff
- <RecordProvider record={recordData}>
+ <RecordProvider record={recordData} parent={parentRecordData}>
...
</RecordProvider>
```

Si vous n'avez pas de compatibilité historique, vous pouvez également utiliser directement `CollectionRecordProvider` pour remplacer.

```diff
- <RecordProvider record={recordData}>
+ <CollectionRecordProvider record={recordData} parent={parentRecordData}>
...
- </RecordProvider>
+ </CollectionRecordProvider>
```

:::warning{title="Différence entre RecordProvider et CollectionRecordProvider"}
- `RecordProvider` est obsolète et sera supprimé dans le futur.
- `RecordProvider` utilise l'ancien `RecordContext`, tandis que `CollectionRecordProvider` ne le fait pas.
:::
