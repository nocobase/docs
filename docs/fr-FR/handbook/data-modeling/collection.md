# Vue d'ensemble

NocoBase fournit un DSL unique pour décrire la structure des données, appelé Collection, qui unifie la structure des données provenant de diverses sources, offrant ainsi une base fiable pour la gestion des données, l'analyse et l'application.

![20240512161522](https://static-docs.nocobase.com/20240512161522.png)

Pour utiliser de manière pratique divers modèles de données, NocoBase prend en charge différents types de collections :

- [Collection générale](/handbook/data-source-main/general-collection) : Champs système courants intégrés ;
- [Collection par héritage](/handbook/data-source-main/inheritance-collection) : Vous pouvez créer une collection parente, puis dériver une collection enfant de cette collection parente. La collection enfant héritera de la structure de la collection parente et pourra également définir ses propres colonnes ;
- [Collection arborescente](/handbook/collection-tree) : Collection sous forme de structure arborescente, actuellement seule la conception de collection d'adjacence est prise en charge ;
- [Collection de calendrier](/handbook/calendar/calendar-collection) : Utilisée pour créer des collections d'événements liées au calendrier ;
- [Collection de fichiers](/handbook/file-manager/file-collection) : Utilisée pour la gestion du stockage des fichiers ;
- [Collection d'expressions](/handbook/collection-expression/collection) : Utilisée pour des scénarios d'expressions dynamiques dans les flux de travail ;
- [Collection SQL](/handbook/collection-sql) : Ce n'est pas une collection de base de données réelle, mais elle permet de présenter rapidement des requêtes SQL de manière structurée ;
- [Se connecter à une vue de base de données](/handbook/collection-view) : Se connecte à des vues de base de données existantes ;
- [Se connecter à des données externes](/handbook/collection-fdw) : Permet au système de base de données d'accéder directement aux données dans des sources de données externes, basé sur la technologie FDW.
