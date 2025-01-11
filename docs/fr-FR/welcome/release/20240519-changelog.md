# v1.0.0-alpha.15 : 2024.05.19

## Nouvelles fonctionnalités

### Colonnes fixes dans les tableaux

Référez-vous à [Colonnes fixes dans les tableaux](https://docs-cn.nocobase.com/handbook/ui/fields/generic/table-column#%E5%9B%BA%E5%AE%9A%E5%88%97)

<img src="https://static-docs.nocobase.com/202405191512587.png"/>

### Prise en charge de l'ajout de blocs Gantt et Kanban dans les fenêtres modales/volets

Référez-vous à [Ajout de blocs dans les fenêtres modales](https://docs-cn.nocobase.com/handbook/ui/pop-up)

<img src="https://static-docs.nocobase.com/202405191512280.png"/>

### Prise en charge de l'ajout de règles de liaison dans les blocs de détails

Les règles de liaison dans les blocs de détails prennent désormais en charge la définition dynamique des champs à afficher/masquer. Référez-vous à [Règles de liaison dans les blocs de détails](https://docs-cn.nocobase.com/handbook/ui/blocks/data-blocks/details#%E8%81%94%E5%8A%A8%E8%A7%84%E5%88%99)

<img src="https://static-docs.nocobase.com/202405191513781.png"/>

### Authentification : LDAP

Ajout du plugin "Auth : LDAP" (plugin commercial), qui permet aux utilisateurs de se connecter à NocoBase en utilisant les identifiants du serveur LDAP. Référez-vous au [Manuel utilisateur](https://docs-cn.nocobase.com/handbook/auth-ldap)

<img src="https://static-docs.nocobase.com/202405191513995.png"/>

### Noeud de requête HTTP dans les workflows

#### Prise en charge du format de données `application/www-x-form-urlencoded`

Auparavant, le noeud de requête ne prenait en charge que le format JSON (`application/json`) pour la partie du corps de `Content-Type`. Après la mise à jour, il prend également en charge la configuration des données au format formulaire sous forme de paires clé-valeur.

<img src="https://static-docs.nocobase.com/202405191514472.png"/>

#### Prise en charge des modèles de chaînes pour les champs de saisie des valeurs

Auparavant, les champs de saisie des valeurs dans les sections "En-têtes" et "Paramètres" du noeud de requête ne prenaient en charge que l'entrée pure ou la sélection de variables. Après la mise à jour, vous pouvez directement saisir une chaîne avec des variables intégrées. Celle-ci sera automatiquement analysée comme la valeur finale avant l'envoi de la requête.

<img src="https://static-docs.nocobase.com/202405191514748.png"/>

### Événement d'action personnalisé dans le workflow

Le bouton d'action "Soumettre au Workflow", qui était initialement lié pour déclencher directement les événements de type "Post-action", a été séparé et créé indépendamment en tant que bouton d'action "Déclencher le Workflow" pour les "Événements d'action personnalisés" (plugin commercial). Les boutons d'action ajoutés précédemment dans la version open-source peuvent toujours être utilisés, mais ils ne seront plus pris en charge pour les nouveaux ajouts. Veuillez utiliser le nouvel "Événement d'action personnalisé". Consultez le [Manuel d'utilisation](https://docs-cn.nocobase.com/handbook/workflow-custom-action-trigger) pour plus d'informations.

<img src="https://static-docs.nocobase.com/202405191515770.png"/>

## Améliorations

### Ajustements dans la configuration des actions

#### Ajustements de l'interface utilisateur

1. Hiérarchie du menu aplatie et suppression de certaines opérations de basculement, prise en charge de l'ajout répété.

Avant :

<img src="https://static-docs.nocobase.com/202405191516585.png"/>

Après :

<img src="https://static-docs.nocobase.com/202405191516026.png"/>

2. Fusion des actions similaires

2.1. Fusion des options "Ajouter nouveau" et "Ajouter un enregistrement"

Avant :

<img src="https://static-docs.nocobase.com/202405191516874.png"/>

Après :

<img src="https://static-docs.nocobase.com/202405191516737.png"/>

2.2 Fusion des options "Soumettre" et "Enregistrer l'enregistrement"

Avant :

<img src="https://static-docs.nocobase.com/202405191517966.png"/>

Après :

<img src="https://static-docs.nocobase.com/202405191517078.png"/>

#### Impact pour les développeurs

Voir PR : <a href="https://github.com/nocobase/nocobase/pull/4336" target="_blank">refactor: flatten and merge Actions #4336</a>

### Journaux

#### Liste des fichiers du plugin de journalisation

Avant : Dans un environnement multi-applications, le plugin de journalisation affichait la liste de tous les fichiers journaux des applications.

Après : Dans un environnement multi-applications, le plugin de journalisation affiche uniquement la liste des fichiers journaux de l'application en cours.

#### Chemins des dossiers de workflow et des requêtes personnalisées

Avant : Le chemin du dossier pour les journaux de workflow et les requêtes personnalisées était au même niveau que le dossier des journaux de l'application.

Après : Le chemin du dossier pour les journaux de workflow et les requêtes personnalisées appartient désormais au dossier des journaux de l'application correspondante.

### Workflow

#### Données du noeud de requête HTTP

Auparavant, la structure des données de résultat après une requête HTTP réussie ou échouée était incohérente.

```js
// Seules les données de réponse étaient renvoyées en cas de succès
{
  // Contenu JSON quelconque
}

// L'échec renvoyait le résultat de la fonction Axios's error.toJSON().
{
  config: {},
  headers: {},
  status: 500,
  statusText: 'xxx',
}
```

Maintenant, la réponse pour le succès et l'échec sera stockée de manière cohérente dans le résultat du noeud.

```js
// Succès
{
  config: {},
  headers: {},
  status: 200,
  statusText: 'ok',
  data: {}
}

// Échec
{
  config: {},
  headers: {},
  status: 500,
  statusText: 'xxx',
  data: {}
}
```

D'autres exceptions, comme l'absence de réponse du serveur (`status` égal à `null`) ou une initialisation échouée, peuvent être observées dans les journaux du serveur pour le traitement des erreurs. Consultez plus de détails dans <a href="https://github.com/nocobase/nocobase/issues/4373" target="_blank">[Workflow : Nœuds de requête HTTP] Type de résultat de noeud non fixé #4373</a>

## Corrections de bugs

- Les champs de date dans les graphiques n'étaient pas convertis selon le fuseau horaire du client lors de l'agrégation des données avec une dimension de champ de date. <a href="https://github.com/nocobase/nocobase/pull/4366" target="_blank">fix(data-vi): should use local timezone when formatting date #4366</a>

- Mauvaise actualisation des vues ; les vues de base de données doivent être fermées et rouvertes pour se rafraîchir. <a href="https://github.com/nocobase/nocobase/pull/4224" target="_blank">fix: collection fields should refreshed after editing sync from database #4224</a>

- Les blocs de tableau d'arbre ne pliaient pas tous les nœuds lors de l'ajout d'un nœud enfant. <a href="https://github.com/nocobase/nocobase/pull/4289" target="_blank">fix: do not collapse all nodes when adding a child node in the tree table block #4289</a>

- Le paramètre de titre de collection n'était pas valide. <a href="https://github.com/nocobase/nocobase/pull/4358" target="_blank">fix: collection title field setting is invalid #4358</a>

- Le champ bigint perdait de la précision en mode "read pretty". <a href="https://github.com/nocobase/nocobase/pull/4360" target="_blank">fix: bigint field loses precision in read pretty mode #4360</a>

- Les fichiers journaux restaient ouverts après l'arrêt des sous-applications. <a href="https://github.com/nocobase/nocobase/pull/4380" target="_blank">fix(logger): should close log stream after destroying app #4380</a>

- Bug de sélection du champ d'association dans le noeud d'agrégation du workflow. <a href="https://github.com/nocobase/nocobase/pull/4315" target="_blank">fix(plugin-workflow-aggregate): fix association field select #4315</a>

- L'option "Ignorer l'erreur" était invalide dans le mode de synchronisation du noeud de requête HTTP. <

a href="https://github.com/nocobase/nocobase/pull/4334" target="_blank">fix(plugin-workflow-request): fix ignoreFail in sync mode #4334</a>

- Les champs de saisie de valeur dans le noeud de requête HTTP du workflow débordaient. <a href="https://github.com/nocobase/nocobase/pull/4353" target="_blank">fix(plugin-workflow-request): fix value fields overflowing #4354</a>

- Les caractères spéciaux entraînaient le blocage du noeud de requête HTTP du workflow. <a href="https://github.com/nocobase/nocobase/pull/4376" target="_blank">fix(plugin-workflow-request): fix request hanging when invalid header value #4376</a>

- Le paramètre `marginBlock` dans l'éditeur de thème affectait l'espacement entre les champs de formulaire. <a href="https://github.com/nocobase/nocobase/pull/4374" target="_blank">fix(theme-editor): form field spacing should not be affected by token.marginBlock #4374</a>

- Problème de redirection incorrecte lors du clic sur l'option "Licence" dans le coin supérieur droit de la page. [PR #4415](https://github.com/nocobase/nocobase/pull/4415)

- Problème où l'opérateur du champ devenait invalide après avoir enregistré le formulaire de filtre en tant que modèle de bloc. [PR #4390](https://github.com/nocobase/nocobase/pull/4390)

## Documentation

- Documentation ajoutée pour les exemples de plugins : https://docs-cn.nocobase.com/plugin-samples

- Mise à jour de la structure de la documentation pour le manuel d'utilisation des workflows : https://docs-cn.nocobase.com/handbook/workflow

