# Docker

Les autres processus ne sont pas différents de l'installation[Docker](/welcome/getting-started/installation/docker-compose).

<embed src="./env-note.md"></embed>

<br />

[>>> Pour plus d'informations, consultez les « Variables d'environnement » complètes. <<<](/welcome/getting-started/env)

## Domaine Binding

En prenant nginx comme exemple, proxy via nginx http://127.0.0.1:13000/

```bash
server {
    listen 80;
    server_name votre_domaine.com;  # Remplacer votre_domaine.com avec votre domaine

    location / {
        proxy_pass http://127.0.0.1:13000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
        proxy_buffering off;
    }
}
```

## Déployer dans un sous-chemin

Pour déployer dans un sous-chemin, vous devez configurer la variable d'environnement `APP_PUBLIC_PATH`:

```diff
services:
  app:
    image: nocobase/nocobase:latest
    environment:
+     - APP_PUBLIC_PATH=/nocobase/
```

L'URL de l'application est http://127.0.0.1:13000/nocobase/ et la configuration Nginx est:

```bash
server {
    listen 80;
    server_name votre_domaine.com;  # Remplacer votre_domaine.com avec votre domaine

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```

Enfin, vous pouvez y accéder via http://votre_domaine.com/nocobase/
