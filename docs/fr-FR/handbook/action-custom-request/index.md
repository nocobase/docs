# **Demande personnalisée**
<PluginInfo name="action-custom-request"></PluginInfo>

## Aperçu

Le plugin **Demande personnalisée** permet aux utilisateurs de configurer des demandes HTTP personnalisées au sein de l'application. Ce plugin est intégré et ne nécessite pas d'installation séparée.

## Installation

Ce plugin est intégré, il n'est donc pas nécessaire d'effectuer une installation séparée.

## Instructions d'utilisation

![Interface de configuration des demandes personnalisées](https://static-docs.nocobase.com/20240426120014.png)

### Configuration des autorisations

Lorsque l'option "Permet de configurer l'interface" est sélectionnée, vous pouvez configurer des demandes personnalisées.

![Interface de configuration des autorisations](https://static-docs.nocobase.com/20240426114957.png)

La table **customRequests** est au niveau système et les autorisations sont contrôlées via la méthode **acl.registerSnippet**.

```typescript
this.app.acl.registerSnippet({
  name: 'ui.customRequests', // Autorisation pour configurer l'interface liée à ui.*
  actions: ['customRequests:*'],
});
```

### Variables

Vous pouvez configurer des variables à la fois dans l'URL et dans le corps de la requête.

- Enregistrement actuel
- Utilisateur actuel
- Heure actuelle
- Jeton API (pris en charge depuis la version v1.3.22-beta et supérieure)

![Exemple de configuration de variables](https://static-docs.nocobase.com/20240426120953.png)

![Exemple de variables dans le corps de la requête](https://static-docs.nocobase.com/20240426121051.png)

## Éléments de configuration de l'opération

### Paramètres de la demande

![Paramètres de la demande personnalisée](https://static-docs.nocobase.com/20240426120131.png)

### Contrôle d'accès

Chaque demande personnalisée peut avoir des autorisations basées sur des rôles personnalisés, avec des autorisations par défaut accordées à tous les utilisateurs.

![Interface de configuration du contrôle d'accès](https://static-docs.nocobase.com/20240426120451.png)
