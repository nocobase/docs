# Gestionnaire de sources de données

<PluginInfo name="data-source-manager"></PluginInfo>

## Introduction

NocoBase fournit un plugin de gestion des sources de données pour gérer les sources de données et leurs tables de données. Le plugin de gestion des sources de données ne fournit qu'une interface de gestion pour toutes les sources de données et ne permet pas l'accès aux données sources. Il doit être utilisé en combinaison avec divers plugins de sources de données. Les sources de données actuellement prises en charge pour l'accès incluent :

- [Base de données principale](/handbook/data-source-main) : la base de données principale de NocoBase, prenant en charge des bases de données relationnelles telles que MySQL, PostgreSQL, SQLite, etc.
- [MySQL externe](/handbook/data-source-external-mysql) : utiliser une base de données MySQL externe comme source de données.
- [MariaDB externe](/handbook/data-source-external-mariadb) : utiliser une base de données MariaDB externe comme source de données.
- [PostgreSQL externe](/handbook/data-source-external-postgres) : utiliser une base de données PostgreSQL externe comme source de données.

En outre, davantage de types peuvent être étendus via des plugins, qui peuvent inclure des bases de données courantes ou des plateformes fournissant des API (SDK).

## Installation

Plugin intégré, aucune installation séparée requise.

## Instructions d'utilisation

Lorsque l'application est initialisée et installée, une source de données est fournie par défaut pour stocker les données de NocoBase, appelée base de données principale. Pour plus d'informations, consultez la section [Base de données principale](/handbook/data-source-main).

![20240322220423](https://static-docs.nocobase.com/20240322220423.png)

Elle prend également en charge les bases de données externes comme sources de données. Pour plus d'informations, consultez la section [Base de données externe / Introduction](/handbook/data-source-manager/external-database).

![20240507204316](https://static-docs.nocobase.com/20240507204316.png)

Vous pouvez également accéder aux données via des sources API HTTP. Pour plus d'informations, consultez la section [Source de données API HTTP](/handbook/data-source-http-api).
