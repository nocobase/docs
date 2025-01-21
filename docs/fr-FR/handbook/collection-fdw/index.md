# Connecter des tables de données étrangères (FDW)

<PluginInfo name="collection-fdw"></PluginInfo>

## Introduction

Il s'agit d'un plugin qui permet de se connecter à des tables de données distantes basées sur le wrapper de données étrangères (FDW) d'une base de données. Actuellement, il prend en charge les bases de données MySQL et PostgreSQL.

:::info{title="Connexion aux sources de données vs Connexion aux tables de données externes"}
- **Connexion aux sources de données** fait référence à l'établissement d'une connexion avec une base de données ou un service API spécifique, et vous pouvez utiliser pleinement les fonctionnalités de la base de données ou les services fournis par l'API ;
- **Connexion aux tables de données externes** fait référence à l'obtention de données provenant de l'extérieur et à leur mappage pour une utilisation locale. Dans le contexte des bases de données, cela s'appelle FDW (Foreign Data Wrapper), une technologie de base de données qui permet d'utiliser des tables distantes comme des tables locales, mais chaque connexion est faite individuellement. Étant donné qu'il s'agit d'un accès distant, il existe diverses contraintes et limitations lors de son utilisation.
- 
Les deux peuvent également être utilisés en combinaison. La première est utilisée pour établir une connexion avec la source de données, et la seconde pour accéder à des données provenant de sources multiples. Par exemple, une source de données PostgreSQL est connectée, et une table spécifique dans cette source de données est une table de données externe créée à partir de FDW.
:::

### MySQL

MySQL utilise le moteur `federated`, qui doit être activé, et prend en charge la connexion à des bases de données MySQL distantes et à des bases de données compatibles avec le protocole, telles que MariaDB. Pour plus de détails, consultez la documentation sur le [moteur de stockage fédéré](https://dev.mysql.com/doc/refman/8.0/en/federated-storage-engine.html).

### PostgreSQL

Dans PostgreSQL, différents types d'extensions `fdw` peuvent être utilisés pour prendre en charge différents types de données distantes. Les extensions actuellement prises en charge incluent :

- [postgres_fdw](https://www.postgresql.org/docs/current/postgres-fdw.html) : Se connecter à une base de données PostgreSQL distante dans PostgreSQL.
- [mysql_fdw (en développement)](https://github.com/EnterpriseDB/mysql_fdw) : Se connecter à une base de données MySQL distante dans PostgreSQL.
- Pour d'autres types d'extensions fdw, consultez [PostgreSQL Foreign Data Wrappers](https://wiki.postgresql.org/wiki/Foreign_data_wrappers). Vous devez implémenter l'interface d'adaptation correspondante dans le code.

## Installation

Prérequis

- Si la base de données principale de NocoBase est MySQL, il est nécessaire d'activer `federated`. Consultez [Comment activer le moteur fédéré dans MySQL](./enable-federated.md).

Ensuite, installez et activez le plugin via le gestionnaire de plugins.

![Installer et activer le plugin](https://static-docs.nocobase.com/f84276c5712851fb3ff33af3f1ff0f59.png)

## Manuel de l'utilisateur

Sous "Gestionnaire de collections > Créer une collection", sélectionnez "Se connecter aux données externes".

![Connecter des données externes](https://static-docs.nocobase.com/029d946a6d067d1c35a39755219d623c.png)

Dans le menu déroulant "Serveur de base de données", sélectionnez un service de base de données existant, ou cliquez sur "Créer un serveur de base de données".

![Service de base de données](https://static-docs.nocobase.com/766271708a911950a5599d60d6be4a4d.png)

Créer un serveur de base de données

![Créer un service de base de données](https://static-docs.nocobase.com/1e357216e04cc4f200bd6212827281c8.png)

Après avoir sélectionné le serveur de base de données, dans le menu déroulant "Table distante", sélectionnez la table de données à laquelle vous devez vous connecter.

![Sélectionner la table de données à connecter](https://static-docs.nocobase.com/e91fd6152b52b4fc01b3808053cc8dc4.png)

Configurer les informations de champ

![Configurer les informations de champ](https://static-docs.nocobase.com/e618fecc5fe327f6a495e61405e5f040.png)

Si la table distante subit des modifications structurelles, vous pouvez également "Synchroniser depuis la table distante".

![Synchroniser depuis la table distante](https://static-docs.nocobase.com/3751a9a39f933889fb3fcc4d85a6f4ad.png)

Synchronisation de la table distante

![Synchronisation de la table distante](https://static-docs.nocobase.com/13f18200e31ea223fdd8dadaff1e9d28.png)

Enfin, afficher sur l'interface

![Afficher sur l'interface](https://static-docs.nocobase.com/368fca27a99277d9360ca81350949357.png)
