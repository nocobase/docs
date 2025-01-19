# Vue d'ensemble

<PluginInfo name="workflow-action-trigger" link="/handbook/workflow-action-trigger"></PluginInfo>

Dans le système, toutes les modifications de données générées par l'utilisateur sont généralement effectuées par le biais d'une action, souvent en cliquant sur un bouton. Ce bouton peut être un bouton de soumission dans un formulaire ou un bouton d'action dans un bloc de données. Les événements post-action sont conçus pour lier des workflows spécifiques à ces actions de bouton, garantissant qu'un processus particulier est déclenché après une interaction utilisateur réussie.

Par exemple, lorsqu'une donnée est ajoutée ou mise à jour, les utilisateurs peuvent configurer l'option "Lier des Workflows" sur un bouton. Une fois l'action effectuée, le workflow lié sera automatiquement déclenché.

D'un point de vue implémentation, puisque le traitement des événements post-action se produit au niveau du middleware (en utilisant le middleware Koa), même un appel API HTTP à NocoBase peut déclencher les événements post-action définis.

:::info{title="Note"}
L'événement post-action était initialement appelé "Événement de formulaire". Dans les versions antérieures, cette fonctionnalité était limitée aux boutons de formulaire. Cependant, à partir de la version `v0.20`, elle est également disponible pour les boutons d'action dans d'autres blocs de données, ce qui a conduit à son changement de nom en "Événement post-action".
:::

## FAQ

### Différence entre les événements Post-action et Pre-action

La distinction entre les événements Post-action et Pre-action réside dans le moment où ils sont déclenchés pendant le cycle de la requête et de la réponse de l'opération. L'un est déclenché avant que l'opération ne soit traitée, tandis que l'autre est déclenché après, comme illustré ci-dessous :

![Séquence d'opération](https://static-docs.nocobase.com/Handbook/20240916013804.png)

Les événements Pre-action sont déclenchés avant l'exécution de l'opération, ce qui signifie qu'ils se produisent avant le traitement de la requête. Ces événements peuvent être utilisés pour valider ou manipuler les données de la requête, et si la requête est bloquée, l'opération ne sera pas exécutée.

En revanche, les événements Post-action sont déclenchés après que l'action de l'utilisateur a été réussie. À ce moment-là, les données ont déjà été soumises avec succès, et les processus associés peuvent se poursuivre en fonction de ce résultat.

### Différence entre les événements Post-action et les événements de table

Les événements Post-action et les événements de table se ressemblent dans la mesure où les deux sont déclenchés après des modifications de données. Cependant, leurs implémentations diffèrent. Les événements Post-action sont centrés sur le niveau API, tandis que les événements de table sont concernés par les modifications de données dans les tables.

Les événements de table sont plus proches du cœur du système. Dans certains cas, un seul événement peut entraîner des modifications de données qui déclenchent un autre événement, créant ainsi une réaction en chaîne. Cela est particulièrement vrai lorsque des données de table liées sont modifiées lors d'opérations sur la table actuelle, ce qui peut déclencher des événements dans les tables associées.

Les événements de table ne contiennent pas d'informations relatives à l'utilisateur. En revanche, les événements Post-action sont plus étroitement liés à l'utilisateur, car ils reflètent les résultats des actions de l'utilisateur. Le contexte de ces processus inclura des informations liées à l'utilisateur, ce qui les rend adaptés à la gestion des workflows résultant des actions de l'utilisateur. Dans la conception future de NocoBase, davantage d'événements Post-action pourraient être ajoutés pour étendre les déclencheurs disponibles, il est donc **recommandé d'utiliser les événements Post-action** pour gérer les workflows générés par des changements de données dus à des actions de l'utilisateur.

Une autre différence clé est que les événements Post-action peuvent être liés sélectivement à des formulaires spécifiques. S'il y a plusieurs formulaires, certains peuvent déclencher l'événement lors de leur soumission, tandis que d'autres ne le feront pas. En revanche, les événements de table sont liés aux modifications de données de toute la table et ne peuvent pas être liés de manière sélective.

## Installation

Ce plugin est intégré et ne nécessite pas d'installation.

## Manuel de l'utilisateur

L'utilisation des événements Post-action est divisée en plusieurs parties :

- [Configuration du déclencheur](./trigger.md)
- [Configuration de l'action](./action.md)

Vous pouvez également vous référer à [Exemples](./example.md) pour comprendre leur application dans des scénarios réels.

Si des appels externes au système sont nécessaires, veuillez consulter [Appels externes](./http-api.md).
