# Agrégat

<PluginInfo name="workflow-aggregate" link="/handbook/workflow-aggregate"></PluginInfo>

Ce plugin est conçu pour exécuter des requêtes de fonctions d'agrégation sur des données spécifiques dans une table qui répondent à des conditions définies, renvoyant ainsi les résultats statistiques pertinents. Il est particulièrement utile pour générer des données statistiques pour des rapports.

Le nœud fonctionne en utilisant des fonctions d'agrégation de base de données et prend en charge la requête d'un seul champ au sein d'une seule table de données. Les statistiques résultantes sont stockées dans la sortie du nœud, les rendant disponibles pour les nœuds suivants dans le flux de travail.

## Installation

Ce plugin est intégré, il n'est donc pas nécessaire d'effectuer des étapes d'installation.

## Manuel Utilisateur

### Création d'un Nœud

Dans l'interface de configuration du workflow, cliquez sur le bouton plus ("+") dans le flux de processus pour ajouter un nœud "Requête d'agrégation" :

![Créer un Nœud de Requête d'Agrégation](https://static-docs.nocobase.com/7f9d806ebf5064f80c30f8b67f316f0f.png)

### Configuration du Nœud

![Configuration du Nœud de Requête d'Agrégation](https://static-docs.nocobase.com/57362f747b9992230567c6bb5e986fd2.png)

#### Fonctions d'Agrégation

Ce plugin prend en charge cinq fonctions d'agrégation SQL : `COUNT`, `SUM`, `AVG`, `MIN`, et `MAX`. Vous pouvez choisir l'une de ces fonctions pour effectuer la requête d'agrégation sur vos données.

#### Type de Cible

Il existe deux méthodes pour sélectionner la cible de la requête d'agrégation. La première consiste à sélectionner directement la table de données cible et l'un de ses champs. La deuxième consiste à choisir une table de données liée et un champ à partir des objets de données existants dans le contexte du workflow pour effectuer la requête d'agrégation.

#### Distinct

Cette fonctionnalité correspond au mot-clé `DISTINCT` en SQL. Le champ distinct doit être le même que le champ de table de données sélectionné, et actuellement, différents champs ne peuvent pas être sélectionnés pour les champs distincts et cibles.

#### Conditions de Filtre

Vous pouvez appliquer des conditions de filtre similaires à celles d'une requête standard sur une table de données, en utilisant les variables de contexte du workflow.

### Exemple

La cible d'agrégation "Données de Table de Collection" est assez intuitive, voyons donc l'utilisation de la cible d'agrégation comme "Données de Table de Collection Liée" avec l'exemple "compter le nombre total d'articles dans une catégorie après avoir ajouté un nouvel article à cette catégorie."

Commencez par créer deux tables de données : "Posts" et "Categories." La collection "Posts" inclut un champ de relation "Many-to-One" pointant vers la collection "Categories", ainsi qu'un champ de relation inverse permettant à une catégorie de contenir plusieurs articles :

| Nom du Champ      | Type               |
| ----------------- | ------------------ |
| Titre             | Texte sur une ligne|
| Catégorie         | Many-to-One (Catégorie) |

| Nom du Champ      | Type               |
| ----------------- | ------------------ |
| Nom de la Catégorie | Texte sur une ligne |
| Articles          | One-to-Many (Articles) |

Ensuite, créez un workflow déclenché par un événement dans la table de données, spécifiquement lorsqu'une nouvelle donnée est ajoutée à la table "Articles".

Ajoutez ensuite un nœud de requête d'agrégation avec la configuration suivante :

![Exemple de Configuration du Nœud de Requête d'Agrégation](https://static-docs.nocobase.com/542272e638c6c0a567373d1b37ddda78.png)

Une fois le workflow déclenché, le nœud de requête d'agrégation calculera le nombre total d'articles dans la catégorie de l'article nouvellement ajouté et enregistrera ce nombre comme la sortie du nœud.

:::info{title=Conseil}
Si vous devez accéder aux données liées dans un déclencheur d'événement de table de collection, assurez-vous de configurer les champs pertinents pour "Précharger les associations" dans le déclencheur ; sinon, ces champs ne seront pas sélectionnables.
:::
