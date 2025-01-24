# Agrégation

<PluginInfo name="workflow-aggregate" link="/handbook/workflow-aggregate"></PluginInfo>

Ce plugin est conçu pour exécuter des requêtes de fonctions d'agrégation sur des données spécifiques d'une table qui satisfont des conditions définies, retournant ainsi les résultats statistiques pertinents. Il est particulièrement utile pour générer des données statistiques à des fins de rapports.

Le nœud fonctionne en utilisant des fonctions d'agrégation de base de données et prend en charge actuellement la requête d'un seul champ dans une seule table de données. Les statistiques résultantes sont stockées dans la sortie du nœud, ce qui les rend disponibles pour les nœuds suivants dans le flux de travail.

## Installation

Il s'agit d'un plugin intégré, aucune étape d'installation n'est donc nécessaire.

## Manuel d'utilisateur

### Création d'un Nœud

Dans l'interface de configuration du flux de travail, cliquez sur le bouton plus ("+") dans le flux de processus pour ajouter un nœud "Requête d'agrégation" :

![Créer un nœud Requête d'agrégation](https://static-docs.nocobase.com/7f9d806ebf5064f80c30f8b67f316f0f.png)

### Configuration du Nœud

![Configuration du nœud Requête d'agrégation](https://static-docs.nocobase.com/57362f747b9992230567c6bb5e986fd2.png)

#### Fonctions d'Agrégation

Ce plugin prend en charge cinq fonctions d'agrégation SQL : `COUNT`, `SUM`, `AVG`, `MIN` et `MAX`. Vous pouvez sélectionner l'une de ces fonctions pour effectuer la requête d'agrégation sur vos données.

#### Type Cible

Il existe deux méthodes pour sélectionner la cible de la requête d'agrégation. La première consiste à sélectionner directement la table de données cible et l'un de ses champs. La seconde consiste à choisir une table de données liée et un champ à partir des objets de données existants dans le contexte du flux de travail pour effectuer la requête d'agrégation.

#### Distinct

Cette fonctionnalité correspond au mot-clé `DISTINCT` dans SQL. Le champ distinct doit être le même que le champ de la table de données sélectionnée, et actuellement, il n'est pas possible de sélectionner des champs différents pour les champs distinct et cible.

#### Conditions de Filtrage

Vous pouvez appliquer des conditions de filtrage similaires à celles utilisées dans une requête normale de table de données, en utilisant les variables contextuelles du flux de travail.

### Exemple

La cible d'agrégation "Données de la table de collection" est assez intuitive, illustrons donc l'utilisation de la cible d'agrégation "Données de table de collection liées" avec l'exemple de "compter le nombre total d'articles dans une catégorie après l'ajout d'un nouvel article à cette catégorie".

Tout d'abord, créez deux tables de données : "Posts" et "Categories". La collection "Posts" inclut un champ de relation plusieurs-à-un pointant vers la collection "Categories", et un champ de relation inverse permettant à une catégorie de contenir plusieurs articles :

| Nom du champ     | Type               |
| ---------------- | ------------------ |
| Titre            | Texte à une ligne  |
| Catégorie        | Plusieurs-à-un (Catégorie) |

| Nom du champ     | Type               |
| ---------------- | ------------------ |
| Nom de la catégorie | Texte à une ligne |
| Articles         | Un-à-plusieurs (Articles) |

Ensuite, créez un flux de travail déclenché par un événement dans la table de données, spécifiquement lorsque de nouvelles données sont ajoutées à la table "Articles".

Ajoutez ensuite un nœud de requête d'agrégation avec la configuration suivante :

![Exemple de configuration du nœud de requête d'agrégation](https://static-docs.nocobase.com/542272e638c6c0a567373d1b37ddda78.png)

Une fois le flux de travail déclenché, le nœud de requête d'agrégation calculera le nombre total d'articles dans la catégorie de l'article nouvellement ajouté et enregistrera ce nombre dans la sortie du nœud.

:::info{title=Astuce}
Si vous avez besoin d'accéder aux données liées dans un déclencheur d'événement de table de collection, assurez-vous de configurer les champs pertinents pour "Précharger les associations" dans le déclencheur ; sinon, ces champs ne seront pas sélectionnables.
:::
