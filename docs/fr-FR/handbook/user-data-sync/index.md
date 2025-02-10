# Synchronisation des Données Utilisateur

<PluginInfo name="user-data-sync"></PluginInfo>

## Introduction

Cette fonctionnalité permet d'enregistrer et de gérer les sources de synchronisation des données utilisateur. Par défaut, une API HTTP est fournie, mais d'autres sources de données peuvent être prises en charge via des plugins. Elle permet de synchroniser les données avec les tables **Utilisateurs** et **Départements** par défaut, avec la possibilité d'étendre la synchronisation à d'autres ressources cibles via des plugins.

## Installation

Il s'agit d'un plugin intégré qui ne nécessite pas d'installation séparée.

## Gestion des Sources de Données et Synchronisation

![](https://static-docs.nocobase.com/202412041043465.png)

:::info
Si aucun plugin fournissant des sources de synchronisation des données utilisateur n'est installé, les données utilisateur peuvent être synchronisées via l'API HTTP. Consultez la documentation de [Source de Données - API HTTP](./sources/api).
:::

## Ajouter une Source de Données

Une fois qu'un plugin fournissant une source de synchronisation des données utilisateur est installé, vous pouvez ajouter la source de données correspondante. Seules les sources de données activées afficheront les boutons "Synchroniser" et "Tâche".

> Exemple : WeCom (WeChat Entreprise)

![](https://static-docs.nocobase.com/202412041053785.png)

## Synchroniser les Données

Cliquez sur le bouton **Synchroniser** pour commencer la synchronisation des données.

![](https://static-docs.nocobase.com/202412041055022.png)

Cliquez sur le bouton **Tâche** pour afficher l'état de la synchronisation. Après une synchronisation réussie, vous pourrez voir les données dans les listes Utilisateurs et Départements.

![](https://static-docs.nocobase.com/202412041202337.png)

Pour les tâches de synchronisation échouées, vous pouvez cliquer sur **Réessayer**.

![](https://static-docs.nocobase.com/202412041058337.png)

En cas d'échec de synchronisation, vous pouvez résoudre le problème via les journaux système. De plus, les enregistrements bruts de la synchronisation sont stockés dans le répertoire `user-data-sync` sous le dossier des journaux de l'application.

![](https://static-docs.nocobase.com/202412041205655.png)
