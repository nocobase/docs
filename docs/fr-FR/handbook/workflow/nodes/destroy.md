# Supprimer un Enregistrement

Utilisé pour supprimer des données d'une collection spécifique qui répond à certaines conditions.

L'utilisation de base du nœud de suppression est similaire à celle du nœud de mise à jour, à l'exception du fait que le nœud de suppression ne nécessite pas d'attribution de champs, mais seulement la sélection de la collection et des conditions de filtrage. Le résultat du nœud de suppression renverra le nombre de lignes supprimées avec succès, ce qui ne peut être consulté que dans l'historique d'exécution et ne peut pas être utilisé comme variable dans les nœuds suivants.

:::info{title=Note}
Actuellement, le nœud de suppression ne prend pas en charge la suppression un par un, toutes les suppressions sont effectuées par lots, de sorte que d'autres événements déclenchés par chaque suppression de données ne seront pas activés.
:::

## Création d'un Nœud

Dans l'interface de configuration du flux de travail, cliquez sur le bouton plus ("+") dans le flux pour ajouter un nœud "Supprimer un enregistrement" :

![Création d'un Nœud de Suppression d'Enregistrement](https://static-docs.nocobase.com/e1d6b8728251fcdbed6c7f50e5570da2.png)

## Configuration du Nœud

![Configuration du Nœud de Suppression](https://static-docs.nocobase.com/580600c2b13ef4e01dfa48b23539648e.png)

### Collection

Sélectionnez la collection à partir de laquelle les données seront supprimées.

### Conditions de Filtrage

Similaire aux conditions de filtrage utilisées dans les requêtes de collection classiques, des variables provenant du contexte du flux de travail peuvent être utilisées.

## Exemple

Par exemple, pour nettoyer régulièrement les données d'ordres historiques invalides qui ont été annulées, vous pouvez utiliser un nœud de suppression :

![Exemple de Configuration du Nœud de Suppression](https://static-docs.nocobase.com/b94b75077a17252f8523c3f13ce5f320.png)

Le flux de travail sera déclenché périodiquement et exécutera la suppression de toutes les données d'ordres historiques invalides qui ont été annulées.
