# Base de données principale

<PluginInfo name="data-source-main"></PluginInfo>

## Introduction

La base de données principale de NocoBase peut être utilisée pour stocker à la fois les données métiers et les métadonnées de l'application, y compris les données des tables système et des tables personnalisées. La base de données principale prend en charge des bases de données relationnelles telles que MySQL, PostgreSQL, etc. Lors de l'installation de l'application NocoBase, la base de données principale doit être installée simultanément et ne peut pas être supprimée.

## Installation

Il s'agit d'un plugin intégré, aucune installation séparée n'est requise.

## Manuel utilisateur

![20240322230134](https://static-docs.nocobase.com/20240322230134.png)

### Prise en charge de la création de diverses tables de données

- [Collection générale](/handbook/data-source-main/general-collection): champs système couramment utilisés intégrés ;
- [Collection d'héritage](/handbook/data-source-main/inheritance-collection): permet la création d'une table parent à partir de laquelle des tables enfants peuvent être dérivées. Les tables enfants hériteront de la structure de la table parent, et pourront également définir leurs propres colonnes.
- [Collection arborescente](/handbook/collection-tree): table de structure arborescente, prend actuellement en charge uniquement la conception de table adjacente ;
- [Collection de calendrier](/handbook/calendar/calendar-collection): pour créer des tables d'événements liées au calendrier ;
- [Collection de fichiers](/handbook/file-manager/file-collection): pour la gestion du stockage de fichiers ;
- [Collection d'expressions](/handbook/collection-expression/collection): pour les scénarios d'expressions dynamiques dans les flux de travail ;
- [Collection SQL](/handbook/collection-sql): Pas une table de base de données réelle, mais pour présenter rapidement la requête SQL de manière structurée ;
- [Collection de vues de base de données](/handbook/collection-view): se connecte à une vue de base de données existante ;
- [Collection FDW](/handbook/collection-fdw): permet au système de base de données d'accéder directement et d'interroger les données dans des sources de données externes, sur la base de la technologie FDW ;

### Prise en charge de la gestion par classification des collections

![20240322231520](https://static-docs.nocobase.com/20240322231520.png)

### Offre une large gamme de types de champs

![20240322230950](https://static-docs.nocobase.com/20240322230950.png)

Voir plus dans la section [Champs de table de données / Vue d'ensemble](/handbook/data-modeling/collection-fields).
