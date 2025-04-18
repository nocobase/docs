# Source de données API REST

<PluginInfo commercial="true" name="data-source-rest-api"></PluginInfo>

## Introduction

Ce plugin permet d'intégrer des données provenant de sources API REST de manière transparente.

## Installation

Étant un plugin commercial, il nécessite d'être téléchargé et activé via le gestionnaire de plugins.

![20240323162741](https://static-docs.nocobase.com/20240323162741.png)

## Ajouter une source API REST

Après l'activation du plugin, vous pouvez ajouter une source API REST en la sélectionnant dans le menu déroulant "Ajouter nouveau" dans la gestion des sources de données.

![20240721171420](https://static-docs.nocobase.com/20240721171420.png)

### Configurer la source API REST

![20240721171507](https://static-docs.nocobase.com/20240721171507.png)

## Ajouter une Collection

Dans NocoBase, une ressource RESTful est mappée à une Collection, telle qu'une ressource Utilisateurs.

```bash
GET /users
POST /users
GET /users/1
PUT /users/1
DELETE /users/1
```

Ces points de terminaison API sont mappés dans NocoBase comme suit :

```bash
GET /users:list
POST /users:create
POST /users:get?filterByTk=1
POST /users:update?filterByTk=1
POST /users:destroy?filterByTk=1
```

Pour un guide complet sur les spécifications de conception d'API NocoBase, consultez la documentation de l'API.

![20240716213344](https://static-docs.nocobase.com/20240716213344.png)

Consultez le chapitre "NocoBase API - Core" pour des informations détaillées.

![20240716213258](https://static-docs.nocobase.com/20240716213258.png)

La configuration de la collection pour une source de données API REST inclut les éléments suivants :

### Liste

Mappez l'interface pour afficher une liste de ressources.

![20240716211351](https://static-docs.nocobase.com/20240716211351.png)

### Obtenir

Mappez l'interface pour afficher les détails d'une ressource.

![20240716211532](https://static-docs.nocobase.com/20240716211532.png)

### Créer

Mappez l'interface pour créer une ressource.

![20240716211634](https://static-docs.nocobase.com/20240716211634.png)

### Mettre à jour

Mappez l'interface pour mettre à jour une ressource.

![20240716211733](https://static-docs.nocobase.com/20240716211733.png)

### Supprimer

Mappez l'interface pour supprimer une ressource.

![20240716211808](https://static-docs.nocobase.com/20240716211808.png)

Les interfaces Liste et Obtenir doivent être configurées.

## Débogage de l'API

### Intégration des paramètres de requête

Exemple : configurez les paramètres de pagination pour l'API Liste.

Si l'API tierce ne prend pas en charge la pagination nativement, la pagination sera implémentée sur la base des données de la liste récupérée.

![20241121205229](https://static-docs.nocobase.com/20241121205229.png)

Note : Seules les variables ajoutées à l'API fonctionneront.

| Nom des paramètres API tiers | Paramètres NocoBase            |
| ---------------------------- | ------------------------------ |
| page                         | {{request.params.page}}        |
| limit                        | {{request.params.pageSize}}    |

Vous pouvez facilement déboguer l'API en cliquant sur "Try it out".

![20241121210320](https://static-docs.nocobase.com/20241121210320.png)

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20241121211034.mp4" type="video/mp4">
</video>

### Transformation du format de réponse

Le format de réponse de l'API tierce peut ne pas être conforme aux standards de NocoBase, et il doit être transformé avant de pouvoir être correctement affiché sur l'interface.

![20241121214638](https://static-docs.nocobase.com/20241121214638.png)

Ajustez les règles de transformation en fonction du format de réponse de l'API tierce pour garantir que la sortie soit conforme au standard NocoBase.

![20241121215100](https://static-docs.nocobase.com/20241121215100.png)

### Vue d'ensemble du processus de débogage

![20250418085020](https://static-docs.nocobase.com/20250418085020.png)

## Variables

La source de données API REST prend en charge trois types de variables pour l'intégration API :

- Variables personnalisées de la source de données
- Variables de requête NocoBase
- Variables de réponse tierces

### Variables personnalisées de la source de données

![20240716221937](https://static-docs.nocobase.com/20240716221937.png)

![20240716221858](https://static-docs.nocobase.com/20240716221858.png)

### Requête NocoBase

- Params : Paramètres de requête URL (paramètres de recherche), qui varient selon l'interface.
- Headers : En-têtes de requête personnalisés, principalement pour fournir des informations spécifiques X depuis NocoBase.
- Body : Le corps de la requête.
- Token : Le token API pour la requête NocoBase actuelle.

![20240716222042](https://static-docs.nocobase.com/20240716222042.png)

### Réponses tierces

Actuellement, seule la réponse du corps est disponible.

![20240716222303](https://static-docs.nocobase.com/20240716222303.png)

Voici les variables disponibles pour chaque interface :

### Liste

| Paramètre                 | Description                                                |
| ------------------------- | ---------------------------------------------------------- |
| request.params.page       | Page actuelle                                              |
| request.params.pageSize   | Nombre d'éléments par page                                  |
| request.params.filter     | Critères de filtrage (doit suivre le format de filtrage NocoBase) |
| request.params.sort       | Critères de tri (doit suivre le format de tri NocoBase)    |
| request.params.appends    | Champs à charger à la demande, typiquement pour les champs d'association |
| request.params.fields     | Champs à inclure (liste blanche)                            |
| request.params.except     | Champs à exclure (liste noire)                              |

### Obtenir

| Paramètre                 | Description                                                |
| ------------------------- | ---------------------------------------------------------- |
| request.params.filterByTk | Obligatoire, généralement l'ID actuel de l'enregistrement |
| request.params.filter     | Critères de filtrage (doit suivre le format de filtrage NocoBase) |
| request.params.appends    | Champs à charger à la demande, typiquement pour les champs d'association |
| request.params.fields     | Champs à inclure (liste blanche)                            |
| request.params.except     | Champs à exclure (liste noire)                              |

### Créer

| Paramètre                | Description               |
| ------------------------ | ------------------------- |
| request.params.whiteList | Liste blanche             |
| request.params.blacklist | Liste noire               |
| request.body             | Données initiales pour la création |

### Mettre à jour

| Paramètre                 | Description                                        |
| ------------------------- | -------------------------------------------------- |
| request.params.filterByTk | Obligatoire, généralement l'ID actuel de l'enregistrement |
| request.params.filter     | Critères de filtrage (doit suivre le format de filtrage NocoBase) |
| request.params.whiteList  | Liste blanche                                       |
| request.params.blacklist  | Liste noire                                         |
| request.body              | Données pour la mise à jour                        |

### Supprimer

| Paramètre                 | Description                               |
| ------------------------- | ----------------------------------------- |
| request.params.filterByTk | Obligatoire, généralement l'ID actuel de l'enregistrement |
| request.params.filter     | Conditions de filtrage                    |

## Configuration des champs

Les métadonnées des champs (Fields) sont extraites des données de l'interface CRUD de la ressource adaptée pour servir de champs à la collection.

![20250418085048](https://static-docs.nocobase.com/20250418085048.png)

Extraction des métadonnées des champs.

![20241121230436](https://static-docs.nocobase.com/20241121230436.png)

Champs et aperçu.

![20240716224403](https://static-docs.nocobase.com/20240716224403.png)

Édition des champs (similaire aux autres sources de données).

![20240716224704](https://static-docs.nocobase.com/20240716224704.png)

## Ajouter des blocs de source de données API REST

Une fois la collection configurée, vous pouvez ajouter des blocs à l'interface.

![20240716225120](https://static-docs.nocobase.com/20240716225120.png)
