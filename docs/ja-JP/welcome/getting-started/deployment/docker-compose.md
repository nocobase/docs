# Docker Composeによるデプロイ

他のプロセスは、[Dockerインストール](/welcome/getting-started/installation/docker-compose)と同様です。

<embed src="./env-note.md"></embed>

<br />

[>>> 詳細については、「環境変数」の完全なリストを参照してください <<<](/welcome/getting-started/env)

## ドメインのバインディング

nginxを例にとると、nginxを介して http://127.0.0.1:13000/ をプロキシします。

```bash
server {
    listen 80;
    server_name your_domain.com;  # your_domain.comをあなたのドメインに置き換えてください

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

## サブパスへのデプロイ

サブパスにデプロイするには、`APP_PUBLIC_PATH` 環境変数を設定する必要があります。

```diff
services:
  app:
    image: nocobase/nocobase:latest
    environment:
+     - APP_PUBLIC_PATH=/nocobase/
```

アプリケーションのURLは http://127.0.0.1:13000/nocobase/ であり、Nginxの設定は以下の通りです。

```bash
server {
    listen 80;
    server_name your_domain.com;  # your_domain.comをドメインに置き換えてください

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```

そして、http://your_domain.com/nocobase/ にアクセスできるようになります。

