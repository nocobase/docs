# Actions SQL

Dans certains scénarios où les nœuds d'opération sur les tables de données standard ne sont pas suffisants pour des tâches plus complexes, vous pouvez utiliser directement le nœud **Action SQL** pour exécuter des requêtes SQL sophistiquées dans la base de données.

Contrairement à l'exécution des opérations SQL en se connectant directement à la base de données, au sein du flux de travail, vous pouvez utiliser des variables provenant du contexte du flux de travail comme paramètres dans vos instructions SQL.

## FAQ

### Comment les résultats d'un nœud d'Action SQL peuvent-ils être utilisés ?

Lorsque vous utilisez une instruction `SELECT`, les résultats de la requête sont stockés dans le nœud au format JSON de Sequelize. Vous pouvez analyser et utiliser ces résultats via le plugin [JSON-query](/handbook/workflow-json-query).

### Les actions SQL déclenchent-elles des événements de table ?

**Non**. Les actions SQL exécutent directement des commandes SQL sur la base de données. Des actions telles que `CREATE` / `UPDATE` / `DELETE` se produisent dans la base de données, tandis que les événements de table sont gérés au niveau de l'application Node.js (traitement ORM). En conséquence, ces opérations ne déclenchent pas d'événements de table.

## Installation

Ce plugin est intégré, donc aucune installation n'est nécessaire.

## Manuel de l'utilisateur

### Création d'un Nœud

Dans l'interface de configuration du flux de travail, cliquez sur le signe plus (“+”) dans le flux pour ajouter un nœud "Action SQL" :

![Ajout d'Actions SQL](https://static-docs.nocobase.com/0ce40a226d7a5bf3717813e27da40e62.png)

### Configuration du Nœud

![Configuration du Nœud SQL](https://static-docs.nocobase.com/98611dc13bcda04348bd0856561a7b04.png)

#### Source de données

Sélectionnez la source de données pour exécuter la requête SQL.

La source de données doit être de type base de données, comme la source de données principale, de type PostgreSQL, ou toute autre source compatible avec Sequelize.

#### Contenu SQL

Modifiez l'instruction SQL. Actuellement, seule une instruction SQL est prise en charge.

Vous pouvez insérer les variables nécessaires en cliquant sur le bouton de variables en haut à droite de l'éditeur. Avant l'exécution, les variables seront remplacées par leurs valeurs correspondantes dans le texte, et l'instruction SQL finale sera envoyée à la base de données pour interrogation.

### Résultats d'exécution du Nœud

À partir de la version `v1.3.15-beta`, le résultat de l'exécution du nœud SQL est un tableau composé uniquement de données. Avant cette version, le résultat était une structure native de Sequelize incluant des métadonnées de requête (pour plus de détails, consultez : [`sequelize.query()`](https://sequelize.org/api/v6/class/src/sequelize.js~sequelize#instance-method-query)).

Par exemple, la requête suivante :

```sql
select count(id) from posts;
```

Résultat avant `v1.3.15-beta` :

```json
[
    [
        { "count": 1 }
    ],
    {
        // méta-informations
    }
]
```

Résultat après `v1.3.15-beta` :

```json
[
    { "count": 1 }
]
```
