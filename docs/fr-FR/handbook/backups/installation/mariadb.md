# Installation du Client MariaDB

## Installation via Docker

### Entrez dans le répertoire où se trouve le fichier Dockerfile de NocoBase et créez un fichier Dockerfile

```Dockerfile
# Basé sur la version suivante
FROM registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:next

# Exécuter le script d'installation, choisir la dernière version de mysql
RUN apt-get update && apt-get install -y wget && \
 wget https://downloads.mysql.com/archives/get/p/23/file/mysql-community-client-core_8.1.0-1debian11_amd64.deb && \
 dpkg -x mysql-community-client-core_8.1.0-1debian11_amd64.deb /tmp/mysql-client && \
 cp /tmp/mysql-client/usr/bin/mysqldump /usr/bin/ &&\
 cp /tmp/mysql-client/usr/bin/mysql /usr/bin/
 ```

### Modifiez le fichier docker-compose.yml de NocoBase

```diff
version: "3"

networks:
  nocobase:
    driver: bridge

services:
  app:
-   image: nocobase/nocobase:latest
+   build:
+     dockerfile: Dockerfile
    networks:
      - nocobase
    depends_on:
      - mariadb
    environment:
      # La clé secrète de l'application, utilisée pour générer des jetons utilisateurs, etc.
      # Si APP_KEY est modifiée, les anciens jetons deviendront invalides.
      # Elle peut être n'importe quelle chaîne aléatoire et il est important de ne pas la rendre publique.
      - APP_KEY=your-secret-key
      # Type de base de données, prend en charge postgres, mysql, mariadb
      - DB_DIALECT=mariadb
      # Hôte de la base de données, peut être remplacé par l'IP d'un serveur de base de données existant
      - DB_HOST=mariadb
      # Nom de la base de données
      - DB_DATABASE=nocobase
      # Utilisateur de la base de données
      - DB_USER=root
      # Mot de passe de la base de données
      - DB_PASSWORD=nocobase
      # Si les noms de tables et de champs doivent être convertis en casse de type snake_case
      - DB_UNDERSCORED=true
      # Fuseau horaire
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"
    # init: true

  # Si un serveur de base de données existant est utilisé, le service mariadb peut être omis
  mariadb:
    image: mariadb:11
    environment:
      MYSQL_DATABASE: nocobase
      MYSQL_USER: nocobase
      MYSQL_PASSWORD: nocobase
      MYSQL_ROOT_PASSWORD: nocobase
    restart: always
    volumes:
      - ./storage/db/mariadb:/var/lib/mysql
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

Si votre NocoBase a été installé avec [create-nocobase-app](/welcome/getting-started/installation/create-nocobase-app) ou [le code source Git](/welcome/getting-started/installation/git-clone), veuillez consulter la page de publication officielle de MySQL ci-dessous et suivre le guide d'installation officiel.
- Dernières versions : https://dev.mysql.com/downloads/mysql/
