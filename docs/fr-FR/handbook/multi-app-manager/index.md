# Gestionnaire Multi-Applications

<PluginInfo name="multi-app-manager"></PluginInfo>

## Introduction

Gérez dynamiquement plusieurs applications sans nécessiter de déploiements séparés, chaque application étant une instance indépendante.

:::warning
Le plugin de gestion multi-applications ne fournit pas la capacité de partage des utilisateurs. Il peut être intégré via le "[plugin d'authentification](/handbook/auth)" ou géré avec le "[plugin de changement d'application](/handbook/app-switching)".
:::

## Installation

Il s'agit d'un plugin prédéfini qui doit être activé avant d'être utilisé.

![20240327144151](https://static-docs.nocobase.com/20240327144151.png)

## Manuel d'utilisation

![20240327144327](https://static-docs.nocobase.com/20240327144327.png)

### Ajouter des Applications

![20240327150722](https://static-docs.nocobase.com/20240327150722.png)

### Méthodes de Démarrage

Deux méthodes de démarrage sont proposées :

- Démarrage à la première visite : L'application secondaire démarre uniquement lorsqu'un utilisateur visite l'URL de l'application secondaire pour la première fois.
- Démarrage avec l'application principale : Lorsque l'application principale démarre, les applications secondaires démarrent également, ce qui augmente le temps de démarrage de l'application principale.

![20240327170218](https://static-docs.nocobase.com/20240327170218.png)

### Nom de Domaine Personnalisé

Les sous-applications peuvent être accessibles via des sous-chemins `/apps/:appName/admin/`, par exemple :

```bash
http://localhost:13000/apps/a_7zkxoarusnx/admin/z45sjaukasd
```

De plus, les sous-applications peuvent être configurées avec des sous-domaines indépendants, ce qui nécessite une résolution de domaine vers l'IP actuelle. Si nginx est utilisé, le domaine doit également être ajouté à la configuration de nginx.

![20240327170301](https://static-docs.nocobase.com/20240327170301.png)

### Affichage dans le Menu

:::warning
La liste des sous-applications affichée dans le menu déroulant droit actuel n'est qu'un ensemble de liens rapides. Les utilisateurs ne sont pas partagés ; les sous-applications nécessitent une connexion et peuvent uniquement être utilisées par le compte racine de l'application principale. Des capacités complètes de changement d'application seront fournies dans le plugin commercial "[Changement d'Application](//handbook/app-switching)".
:::

![20240327151239](https://static-docs.nocobase.com/20240327151239.png)
