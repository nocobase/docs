# Source de données - Base de données KingbaseES

<PluginInfo licenseBundled="true" name="data-source-kingbase"></PluginInfo>

## Introduction

KingbaseES peut être utilisé comme source de données, soit comme base de données principale, soit comme base de données externe.

:::warning
Actuellement, seules les bases de données KingbaseES fonctionnant en mode pg sont prises en charge.
:::

## Installation

### Utilisation en tant que base de données principale

Référez-vous à la section [Vue d'ensemble de l'installation](/welcome/getting-started/installation) pour les procédures d'installation, la principale différence réside dans les variables d'environnement.

#### Variables d'environnement

Modifiez le fichier `.env` pour ajouter ou modifier les configurations de variables d'environnement suivantes :

```bash
# Pour accéder aux plugins commerciaux
NOCOBASE_PKG_URL=https://pkg.nocobase.com/
NOCOBASE_PKG_USERNAME=your-username   # Nom d'utilisateur de la plateforme de service
NOCOBASE_PKG_PASSWORD=your-password   # Mot de passe de la plateforme de service

# Ajustez les paramètres DB si nécessaire
DB_DIALECT=kingbase
DB_HOST=localhost
DB_PORT=54321
DB_DATABASE=kingbase
DB_USER=nocobase
DB_PASSWORD=nocobase
```

#### Installation via Docker

```yml
version: "3"

networks:
  nocobase:
    driver: bridge

  app:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    restart: always
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # Pour accéder aux plugins commerciaux
      - NOCOBASE_PKG_URL=https://pkg.nocobase.com/
      - NOCOBASE_PKG_USERNAME=your-username   # Nom d'utilisateur de la plateforme de service
      - NOCOBASE_PKG_PASSWORD=your-password   # Mot de passe de la plateforme de service
      # Clé d'application pour générer des tokens utilisateurs, etc.
      # Modifier APP_KEY invalide les anciens tokens
      # Utilisez une chaîne aléatoire et gardez-la confidentielle
      - APP_KEY=your-secret-key
      # Type de base de données
      - DB_DIALECT=kingbase
      # Hôte de la base de données, remplacez par l'IP du serveur de base de données si nécessaire
      - DB_HOST=kingbase
      # Nom de la base de données
      - DB_DATABASE=kingbase
      # Utilisateur de la base de données
      - DB_USER=nocobase
      # Mot de passe de la base de données
      - DB_PASSWORD=nocobase
      # Fuseau horaire
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"

  # Service Kingbase pour test uniquement
  kingbase:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/kingbase:v009r001c001b0030_single_x86
    platform: linux/amd64
    restart: always
    privileged: true
    networks:
      - nocobase
    volumes:
      - ./storage/db/kingbase:/home/kingbase/userdata
    environment:
      ENABLE_CI: no # Doit être défini sur no
      DB_USER: nocobase
      DB_PASSWORD: nocobase
      DB_MODE: pg  # uniquement pg
      NEED_START: yes
    command: ["/usr/sbin/init"]
```

#### Installation via create-nocobase-app

```bash
yarn create nocobase-app my-nocobase-app -d kingbase \
   -e DB_HOST=localhost \
   -e DB_PORT=54321 \
   -e DB_DATABASE=kingbase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=Asia/Shanghai
```

### Utilisation en tant que base de données externe

Modifiez le fichier `.env` pour ajouter les variables d'environnement nécessaires pour accéder aux plugins commerciaux :

```bash
# Pour accéder aux plugins commerciaux
NOCOBASE_PKG_URL=https://pkg.nocobase.com/
NOCOBASE_PKG_USERNAME=your-username   # Nom d'utilisateur de la plateforme de service
NOCOBASE_PKG_PASSWORD=your-password   # Mot de passe de la plateforme de service
```

Exécutez la commande d'installation ou de mise à jour

```bash
yarn nocobase install
# ou
yarn nocobase upgrade
```

Activez le plugin

![20241024121815](https://static-docs.nocobase.com/20241024121815.png)

## Guide utilisateur

- Base de données principale : Référez-vous au [manuel](/handbook)
- Base de données externe : Consultez [Source de données / Base de données externe](/handbook/data-source-manager/external-database)
