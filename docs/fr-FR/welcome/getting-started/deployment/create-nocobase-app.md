# create-nocobase-app

Les autres processus ne sont pas différents de [create-nocobase-app](/welcome/getting-started/installation/create-nocobase-app).

<embed src="./env-note.md"></embed>
- Lors d'un déploiement dans un environnement de production, pour réduire le volume, vous pouvez installer uniquement les dépendances nécessaires avec `yarn install --production`

<br />

[>>> Pour plus d'informations, consultez les « Variables d'environnement » complètes. <<<](/welcome/getting-started/env)

## Gérer les processus d'application

NocoBase a déjà intégré [PM2](https://pm2.keymetrics.io/) pour gérer les processus. Dans un environnement de production, vous pouvez directement utiliser `yarn start`. Si vous avez besoin qu'il s'exécute en arrière-plan, ajoutez simplement le paramètre `-d`, par exemple :

```bash
# Exécuter en arrière-plan
yarn start -d
```

Redémarrer

```bash
yarn nocobase pm2-restart
```

Arrêter

```bash
yarn nocobase pm2-stop
```

Plus de commandes PM2

```bash
yarn nocobase pm2 -h
```

## Configurer Nginx

Dans un environnement de production, vous pouvez envisager de demander à Nginx de "proxifier" les fichiers statiques. NocoBase fournit la commande `create-nginx-conf` pour générer les fichiers de configuration Nginx.

```bash
yarn nocobase create-nginx-conf
```

Le chemin du fichier est `./storage/nocobase.conf`. Ajustez-le en fonction de la situation réelle, et enfin ajoutez-le à `/etc/nginx/sites-enabled`, par exemple :

```bash
ln -s /app/nocobase/storage/nocobase.conf /etc/nginx/sites-enabled/nocobase.conf
```

**Remarques**

- Lors du déploiement dans un sous-chemin, vous devez configurer la variable d'environnement `APP_PUBLIC_PATH`. Après la configuration, vous devez réexécuter la commande `create-nginx-conf` ;
- Modifier le fichier généré `nocobase.conf` en fonction de la situation réelle, comme la configuration du nom de domaine, etc. ;
- `/app/nocobase/` est le répertoire où se trouve l'exemple d'application, et il doit être ajusté en fonction de la situation réelle ;
- `/etc/nginx/sites-enabled` est le chemin de configuration par défaut de Nginx, la situation réelle peut varier, vous pouvez le vérifier avec `nginx -V` ;
- Si vous n'utilisez pas Nginx, vous pouvez effectuer quelques ajustements en vous référant à la configuration de Nginx.
