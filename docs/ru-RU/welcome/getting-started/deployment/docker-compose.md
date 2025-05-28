# Docker

The other processes are no different from the [Docker installation](/welcome/getting-started/installation/docker-compose).

<embed src="./env-note.md"></embed>

<br />

[>>> For more information, view the complete 'Environment Variables' <<<](/welcome/getting-started/env)

## Domain Binding

Taking nginx as an example, proxy through nginx http://127.0.0.1:13000/

```bash
server {
    listen 80;
    server_name your_domain.com;  # Replace your_domain.com with your domain

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

## Deploy on Subpath

To deploy to a subpath, you need to configure the `APP_PUBLIC_PATH` environment variable.

```diff
services:
  app:
    image: nocobase/nocobase:latest
    environment:
+     - APP_PUBLIC_PATH=/nocobase/
```

The application's URL is http://127.0.0.1:13000/nocobase/, and the Nginx configuration is

```bash
server {
    listen 80;
    server_name your_domain.com;  # Replace your_domain.com with your domain

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```

Finally, you can access it through http://your_domain.com/nocobase/
