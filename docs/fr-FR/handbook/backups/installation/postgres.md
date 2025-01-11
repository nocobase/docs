# Installation du Client PostgreSQL

## Installation via Docker

### Entrez dans le répertoire où se trouve le fichier Dockerfile de NocoBase et créez un fichier Dockerfile

```Dockerfile
# Basé sur la version suivante
FROM registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:next

# Spécifiez la version PostgreSQL souhaitée, ici nous utilisons la version 16 à titre d'exemple
ARG PG_VERSION=16

# Exécuter le script d'installation
RUN apt update && apt install -y postgresql-common gnupg \
  && /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh -y \
  && apt install -y postgresql-client-${PG_VERSION}
```

### Modifiez le fichier docker-compose.yml de NocoBase

```diff
version: "3"

networks:
  nocobase:
    driver: bridge

services:
  app:
-   image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:next
+   build:
+     dockerfile: Dockerfile
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # La clé secrète de l'application, utilisée pour générer des jetons utilisateurs, etc.
      # Si APP_KEY est modifiée, les anciens jetons deviendront invalides.
      # Elle peut être n'importe quelle chaîne aléatoire et il est important de ne pas la rendre publique.
      - APP_KEY=your-secret-key
      # Type de base de données, prend en charge postgres, mysql, mariadb
      - DB_DIALECT=postgres
      # Hôte de la base de données, peut être remplacé par l'IP d'un serveur de base de données existant
      - DB_HOST=postgres
      # Nom de la base de données
      - DB_DATABASE=nocobase
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
    # init: true

  # Si un serveur de base de données existant est utilisé, le service postgres peut être omis
  postgres:
    image: postgres:16
    restart: always
    command: postgres -c wal_level=logical
    environment:
      POSTGRES_USER: nocobase
      POSTGRES_DB: nocobase
      POSTGRES_PASSWORD: nocobase
    volumes:
      - ./storage/db/postgres:/var/lib/postgresql/data
    networks:
      - nocobase
```

### Mise à jour

Auparavant, vous deviez tirer une nouvelle image pour chaque mise à jour. Désormais, vous devez reconstruire une nouvelle image pour chaque mise à jour.

```diff
# Tirer la dernière image
- docker-compose pull app
# Reconstruire le conteneur de l'application
+ docker-compose build app --pull
# Démarrer l'application
docker-compose up -d app
# Vérifier les logs de l'application
docker-compose logs app
```

## Autres Méthodes d'Installation

Si votre NocoBase a été installé avec [create-nocobase-app](/welcome/getting-started/installation/create-nocobase-app) ou [le code source Git](/welcome/getting-started/installation/git-clone), veuillez consulter [le site de téléchargement de PostgreSQL](https://www.postgresql.org/download/), choisir la version PostgreSQL appropriée et suivre le guide d'installation officiel.
