# Variables d'environnement

## Comment définir les variables d'environnement?

### Méthode d'installation `Code source Git` ou `create-nocobase-app`

Définissez les variables d'environnement dans le fichier `.env` dans le répertoire racine du projet. Après avoir modifié les variables d'environnement, arrêtez le processus d'application et redémarrez-le.

### Méthode d'installation `Docker`

Modifiez la configuration `docker-compose.yml` et définissez les variables d'environnement dans le paramètre `environment`. Exemple:

```yml
services:
  app:
    image: nocobase/nocobase:latest
    environment:
      - APP_ENV=production
```

Vous pouvez également utiliser `env_file` pour définir les variables d'environnement dans le fichier `.env`. Exemple:

```yml
services:
  app:
    image: nocobase/nocobase:latest
    env_file: .env
```

Après avoir modifié les variables d'environnement, reconstruisez le conteneur d'application :

```yml
docker-compose up -d app
```

## Variables d'environnement globales

Enregistré dans le fichier `.env`

### TZ

Utilisé pour définir le fuseau horaire de l'application, la valeur par défaut étant le fuseau horaire du système.

https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

:::warning
Les opérations liées au temps seront traitées en fonction de ce fuseau horaire. La modification de TZ peut affecter les valeurs de date dans la base de données. Pour plus de détails, reportez-vous à [Aperçu de la date et de l'heure](/handbook/data-modeling/collection-fields/datetime).
:::

### APP_ENV

Environnement d'application, la valeur par défaut est « développement », les options incluent

- `production` environnement de production
- `development` environnement de développement

```bash
APP_ENV=production
```

### APP_KEY

Clé secrète, pour des scénarios tels que jwt

```bash
APP_KEY=app-key-test
```

### APP_PORT

Port d'application, la valeur par défaut est `13000`

```bash
APP_PORT=13000
```

### API_BASE_PATH

Préfixe d'adresse API NocoBase, la valeur par défaut est `/api/`

```bash
API_BASE_PATH=/api/
```

<!-- will be open in 1.5
### CLUSTER_MODE

The multi-core (cluster) mode for starting app. If this variable is configured, will be passed to the pm2 start command as the `-i <instances>` parameter. The options are consistent with the pm2 `-i` parameter (refer to [PM2: Cluster Mode](https://pm2.keymetrics.io/docs/usage/cluster-mode/)), including:

- `max`: Use the maximum number of CPU cores
- `-1`: Use the maximum number of CPU cores minus one
- `<number>`: Specify the number of cores

The default value is empty, meaning it is not enabled.

:::warning{title="Attention"}
This mode requires the use of plugins related to cluster mode, such as `@nocobase/plugin-sync-adapter-redis`. Otherwise, the functionality of applicaiton may encounter unexpected issues.
:::
-->

### PLUGIN_PACKAGE_PREFIX

Préfixe du package de plugin, la valeur par défaut est `@nocobase/plugin-,@nocobase/preset-`

Par exemple, ajoutez le plugin `hello` dans le projet `my-nocobase-app`, le nom du package du plugin est `@my-nocobase-app/plugin-hello`.

PLUGIN_PACKAGE_PREFIX est configuré comme suit :

```bash
PLUGIN_PACKAGE_PREFIX=@nocobase/plugin-,@nocobase-preset-,@my-nocobase-app/plugin-
```

La correspondance entre le nom du plugin et le nom du package est :

- Le nom du package du plugin `users` est `@nocobase/plugin-users`
- Le nom du package du plugin`nocobase` est `@nocobase/preset-nocobase`
- Le nom du package du plugin`hello` est `@my-nocobase-app/plugin-hello`

### DB_DIALECT

Type de base de données, la valeur par défaut est `sqlite`, les options incluent

- `sqlite`
- `mysql`
- `postgres`

```bash
DB_DIALECT=mysql
```

### DB_STORAGE

Chemin du fichier de base de données (obligatoire lors de l'utilisation d'une base de données SQLite)

```bash
### Chemin relatif
DB_STORAGE=storage/db/nocobase.db
# Chemin absolu
DB_STORAGE=/your/path/nocobase.db
```

### DB_HOST

Hôte de base de données (obligatoire lors de l'utilisation de bases de données MySQL ou PostgreSQL)

La valeur par défaut est `localhost`

```bash
DB_HOST=localhost
```

### DB_PORT

Port de base de données (obligatoire lors de l'utilisation de bases de données MySQL ou PostgreSQL)

- Le port par défaut de MySQL est 3306
- Le port par défaut de PostgreSQL est 5432

```bash
DB_PORT=3306
```

### DB_DATABASE

Nom de la base de données (obligatoire lors de l'utilisation de bases de données MySQL ou PostgreSQL)

```bash
DB_DATABASE=nocobase
```

### DB_USER

Utilisateur de la base de données (obligatoire lors de l'utilisation de bases de données MySQL ou PostgreSQL)

```bash
DB_USER=nocobase
```

### DB_PASSWORD

Mot de passe de la base de données (obligatoire lors de l'utilisation de bases de données MySQL ou PostgreSQL)

```bash
DB_PASSWORD=nocobase
```

### DB_TABLE_PREFIX

Préfixe des tables de la base de données

```bash
DB_TABLE_PREFIX=nocobase_
```

### DB_LOGGING

Commutateur de journal de base de données, la valeur par défaut est `off`, les options incluent

- `on` activer
- `off` désactiver

```bash
DB_LOGGING=on
```

### LOGGER_TRANSPORT

Mode de sortie du journal, séparez plusieurs entrées par `,`. La valeur par défaut pour l'environnement de développement est `console` et la valeur par défaut pour l'environnement de production est `console,dailyRotateFile`.
Possibilités :

- `console` - `console.log`
- `file` - `Fichier`
- `dailyRotateFile` - `Rotation de fichier quotidien`

```bash
LOGGER_TRANSPORT=console,dailyRotateFile
```

### LOGGER_BASE_PATH

Chemin de stockage des journaux basés sur des fichiers, la valeur par défaut est `storage/logs`.

```bash
LOGGER_BASE_PATH=storage/logs
```

### LOGGER_LEVEL

Au niveau du journal de sortie, la valeur par défaut pour l'environnement de développement est « debug » et la valeur par défaut pour l'environnement de production est « info ». Options facultatives :

- `error`
- `warn`
- `info`
- `debug`
- `trace`

```bash
LOGGER_LEVEL=info
```

Le niveau de sortie du journal de la base de données est `debug`, qui est contrôlé par `DB_LOGGING` et n'est pas affecté par `LOGGER_LEVEL`.

### LOGGER_MAX_FILES

Le nombre maximum de fichiers journaux à conserver.

- Lorsque `LOGGER_TRANSPORT` est `file`, la valeur par défaut est `10`.
- Lorsque `LOGGER_TRANSPORT` est `dailyRotateFile`, utilisez `[n]d` pour représenter le nombre de jours. La valeur par défaut est `14d`.

```bash
LOGGER_MAX_FILES=14d
```

### LOGGER_MAX_SIZE

Rotation du journal par taille.

- Lorsque `LOGGER_TRANSPORT` est `file`, l'unité est `byte` et la valeur par défaut est `20971520` (20 * 1024 * 1024).
- Lorsque `LOGGER_TRANSPORT` est `dailyRotateFile`, vous pouvez utiliser `[n]k`, `[n]m`, `[n]g`. Non configuré par défaut.

```bash
LOGGER_MAX_SIZE=20971520
```

### LOGGER_FORMAT

日志打印格式，开发环境默认 `console`, 生产环境默认 `json`. 可选项:
Format d'impression du journal, la valeur par défaut est `console` pour l'environnement de développement et `json` pour l'environnement de production. Options facultatives :

- `console`
- `json`
- `logfmt`
- `delimiter`

```bash
LOGGER_FORMAT=json
```

Voir：[Format du log](../plugins/logger/index.md#logformat)

### CACHE_DEFAULT_STORE

Specify the default cache method using the unique name，default is `memory`, options inlcude：
spécifiez la méthode de cache par défaut en utilisant le nom unique, la valeur par défaut est `memory`, options possibles :

- `memory`
- `redis`

```bash
CACHE_DEFAULT_STORE=memory
```

### CACHE_MEMORY_MAX

Nombre maximum d'éléments dans le cache mémoire, la valeur par défaut est `2000`.

```bash
CACHE_MEMORY_MAX=2000
```

### CACHE_REDIS_URL

URL Redis, optionnel. Exemple : `Redis://localhost:6379`.

```bash
CACHE_REDIS_URL=redis://localhost:6379
```

### TELEMETRY_ENABLED

Activer la collecte de données de télémétrie, la valeur par défaut est `off`.

- `on` activer
- `off` désactiver

```bash
TELEMETRY_ENABLED=on
```

### TELEMETRY_METRIC_READER

Le collecteur d'indicateurs de surveillance activé, la valeur par défaut est `console`. Les autres valeurs doivent faire référence au nom enregistré du plug-in de collecteur correspondant, tel que `prometheus`. Utilisez `,` pour en séparer plusieurs.

```bash
TELEMETRY_METRIC_READER=console,prometheus
```

### TELEMETRY_TRACE_PROCESSOR

Le processeur de données de lien activé est par défaut `console`. Les autres valeurs doivent faire référence au nom enregistré du plug-in du processeur correspondant. Utilisez `,` pour en séparer plusieurs.

```bash
TELEMETRY_TRACE_PROCESSOR=console
```

## variables d'environnement expérimental

### APPEND_PRESET_LOCAL_PLUGINS

Utilisé pour ajouter des plugins locaux prédéfinis, avec la valeur du nom du package (le paramètre `name` dans `package.JSON`), séparés par des virgules pour plusieurs plugins.

:::info
Ceux-ci n'apparaîtront que dans la page du gestionnaire de plugin après l'initialisation de l'installation avec `nocobase install` ou la mise à niveau avec `nocobase upgrade`.
:::

```bash
APPEND_PRESET_LOCAL_PLUGINS=@my-project/plugin-foo,@my-project/plugin-bar
```

### APPEND_PRESET_BUILT_IN_PLUGINS

Utilisé pour ajouter des plugins intégrés qui sont automatiquement installés par défaut, la valeur étant le nom du package (le paramètre `name` dans `package.json`), séparé par des virgules pour plusieurs plugins.

:::info
Ces plugins seront automatiquement installés ou mis à niveau lors de l'initialisation avec `nocobase install` ou `nocobase update`.
:::

```bash
APPEND_PRESET_LOCAL_PLUGINS=@my-project/plugin-foo,@my-project/plugin-bar
```

## Variables d'environnement temporaires

L'installation de NocoBase peut être facilitée en définissant des variables d'environnement temporaires, telles que :

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  INIT_ROOT_PASSWORD=admin123 \
  INIT_ROOT_NICKNAME="Super Admin" \
  nocobase install

# Equivalent à
yarn nocobase install \
  --lang=zh-CN \
  --root-email=demo@nocobase.com \
  --root-password=admin123 \
  --root-nickname="Super Admin"

# Equivalent à
yarn nocobase install -l zh-CN -e demo@nocobase.com -p admin123 -n "Super Admin"
```

### INIT_APP_LANG

Langue au moment de l'installation, la valeur par défaut est « en-US », les options incluent

- `en-US` Anglais
- `zh-CN` Chinois (Simplifié)

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  nocobase install
```

### INIT_ROOT_EMAIL

Email de l'utilisateur root

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  nocobase install
```

### INIT_ROOT_PASSWORD

Mot de passe root

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  INIT_ROOT_PASSWORD=admin123 \
  nocobase install
```

### INIT_ROOT_NICKNAME

Surnom root

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  INIT_ROOT_PASSWORD=admin123 \
  INIT_ROOT_NICKNAME="Super Admin" \
  nocobase install
```
