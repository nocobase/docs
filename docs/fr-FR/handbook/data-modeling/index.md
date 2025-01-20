# Vue d'ensemble

La modélisation des données est une étape clé dans la conception des bases de données, impliquant un processus d'analyse approfondie et d'abstraction des différentes données et de leurs relations dans le monde réel. Dans ce processus, nous tentons de révéler les connexions intrinsèques entre les données et de les formaliser en modèles de données, posant ainsi les bases de la structure de la base de données du système d'information. NocoBase est une plateforme axée sur la modélisation des données avec les fonctionnalités suivantes :

## Prise en charge de l'accès aux données provenant de diverses sources

La source de données de NocoBase peut être des bases de données communes, des plateformes API (SDK) et des fichiers.

![20240512085558](https://static-docs.nocobase.com/20240512085558.png)

NocoBase fournit un [gestionnaire de sources de données](/handbook/data-source-manager) pour gérer différentes sources de données et leurs tables de données. Le plugin du gestionnaire de sources de données ne fournit qu'une interface de gestion pour toutes les sources de données et ne permet pas d'accéder aux sources de données. Il doit être utilisé en conjonction avec les divers plugins de sources de données. Les sources de données actuellement prises en charge incluent :

- [Base de données principale](/handbook/data-source-main) : La base de données principale de NocoBase, prenant en charge les bases de données relationnelles telles que MySQL, PostgreSQL, SQLite, etc.
- [MySQL externe](/handbook/data-source-external-mysql) : Utilisation d'une base de données MySQL externe comme source de données.
- [MariaDB externe](/handbook/data-source-external-mariadb) : Utilisation d'une base de données MariaDB externe comme source de données.
- [PostgreSQL externe](/handbook/data-source-external-postgres) : Utilisation d'une base de données PostgreSQL externe comme source de données.

![20240512083651](https://static-docs.nocobase.com/20240512083651.png)

## Fournit une variété d'outils de modélisation de données

**Interface simple de gestion des tables de données** : Utilisée pour créer divers modèles (tables de données) ou se connecter à des modèles (tables de données) existants.

![20240512090751](https://static-docs.nocobase.com/20240512090751.png)

**Interface visuelle similaire aux diagrammes ER** : Permet d'extraire des entités et leurs relations des exigences utilisateur et métier. Elle offre un moyen intuitif et facile à comprendre de décrire les modèles de données. Grâce aux diagrammes ER, vous pouvez mieux comprendre les principales entités de données du système et leurs relations.

![20240512091042](https://static-docs.nocobase.com/20240410075906.png)

## Prend en charge différents types de tables de données

- [Collection générale](/handbook/data-source-main/general-collection) : Champs système courants intégrés ;
- [Collection d'héritage](/handbook/data-source-main/inheritance-collection) : Vous pouvez créer une collection parente puis dériver une collection enfant de la collection parente. La collection enfant héritera de la structure de la collection parente et pourra aussi définir ses propres colonnes.
- [Collection arbre](/handbook/collection-tree) : Collection à structure arborescente, actuellement prenant en charge uniquement la conception de collection adjacente ;
- [Tableau de calendrier](/handbook/calendar/calendar-collection) : Utilisée pour créer des collections d'événements liés au calendrier ;
- [Collection de fichiers](/handbook/file-manager/file-collection) : Utilisée pour la gestion du stockage des fichiers ;
- [Collection d'expressions](/handbook/workflow-dynamic-calculation/expression) : Utilisée pour des scénarios d'expressions dynamiques dans les workflows ;
- [Collection SQL](/handbook/collection-sql) : Pas une véritable collection de base de données, mais permet de présenter rapidement les requêtes SQL de manière structurée ;
- [Connexion à la vue de base de données](/handbook/collection-view) : Se connecte aux vues de base de données existantes ;
- [Connexion aux données externes](/handbook/collection-fdw) : Permet au système de base de données d'accéder directement aux données de sources de données externes, basé sur la technologie FDW.

![20240512102212](https://static-docs.nocobase.com/20240512102212.png)

Pour plus de contenu, consultez la section "[Collection / Vue d'ensemble](/handbook/data-modeling/collection)".

## Fournit une large variété de types de champs

![20240512110352](https://static-docs.nocobase.com/20240512110352.png)

Pour plus de contenu, consultez la section "[Champs de collection / Vue d'ensemble](/handbook/data-modeling/collection-fields)".
