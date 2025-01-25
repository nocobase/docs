# Documentation API

<PluginInfo name="api-doc"></PluginInfo>

## Introduction

Ce plugin génère la documentation API HTTP de NocoBase basée sur Swagger.

## Installation

Ce plugin est intégré, il n'est donc pas nécessaire de l'installer. Il suffit de l'activer pour l'utiliser.

## Instructions d'utilisation

### Accéder à la page de documentation API

Vous pouvez accéder à la documentation API à l'adresse suivante :
```
http://localhost:13000/admin/settings/api-doc/documentation
```

![](https://static-docs.nocobase.com/8db51cf50e3c666aba5a850a0fb664a0.png)

### Aperçu de la documentation

![](https://static-docs.nocobase.com/5bb4d3e5bba6c6fdfcd830592e72385b.png)

- Documentation API complète : `/api/swagger:get`
- Documentation API de base : `/api/swagger:get?ns=core`
- Documentation API de tous les plugins : `/api/swagger:get?ns=plugins`
- Documentation API de chaque plugin : `/api/swagger:get?ns=plugins/{name}`
- Documentation API des collections personnalisées par l'utilisateur : `/api/swagger:get?ns=collections`
- Ressources spécifiques de `${collection}` et `${collection}.${association}` : `/api/swagger:get?ns=collections/{name}`

## Guide du développeur

### Comment écrire la documentation Swagger pour les plugins

Ajoutez un fichier `swagger/index.ts` dans le dossier `src` du plugin avec le contenu suivant :

```typescript
export default {
  info: {
    title: 'NocoBase API - Auth plugin',
  },
  tags: [],
  paths: {},
  components: {
    schemas: {},
  },
};
```

Pour des règles d'écriture détaillées, veuillez vous référer à la [documentation officielle Swagger](https://swagger.io/docs/specification/about/).
