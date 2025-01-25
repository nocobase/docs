# Clé API

## Introduction

Les clés API sont utilisées pour authentifier et autoriser l'accès à certaines parties du système via des requêtes API. Elles peuvent être générées et gérées par les utilisateurs, selon leurs rôles et permissions.

## Installation

Aucune installation supplémentaire n'est requise pour utiliser ce plugin, il est déjà intégré dans votre système.

## Instructions d'utilisation

Accédez à la page de configuration des clés API à l'adresse suivante :
```
http://localhost:13000/admin/settings/api-keys/configuration
```

![](https://static-docs.nocobase.com/d64ccbdc8a512a0224e9f81dfe14a0a8.png)

### Ajouter une clé API

Pour ajouter une clé API, cliquez sur le bouton approprié et suivez les étapes affichées.

![](https://static-docs.nocobase.com/46141872fc0ad9a96fa5b14e97fcba12.png)

**Notes**

- La clé API ajoutée est associée à l'utilisateur actuel, et le rôle de cette clé est celui de l'utilisateur auquel il appartient.
- Assurez-vous que la variable d'environnement `APP_KEY` est configurée et qu'elle est gardée secrète. Si `APP_KEY` est modifiée, toutes les clés API ajoutées deviendront invalides.

### Comment configurer APP_KEY

Pour la version Docker, modifiez le fichier `docker-compose.yml` comme suit :

```diff
services:
  app:
    image: nocobase/nocobase:main
    environment:
+     - APP_KEY=4jAokvLKTJgM0v_JseUkJ
```

Pour une installation à partir du code source ou via `create-nocobase-app`, vous pouvez directement modifier la variable `APP_KEY` dans le fichier `.env` :

```bash
APP_KEY=4jAokvLKTJgM0v_JseUkJ
```
