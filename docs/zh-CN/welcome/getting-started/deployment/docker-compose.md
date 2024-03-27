# 通过 Docker Compose 部署

与 [Docker 安装](/welcome/getting-started/installation/docker-compose) 流程无异。

<embed src="./env-note.md"></embed>

## 绑定域名

以 nginx 为例，通过 nginx 代理 http://127.0.0.1:13000/

```bash
server {
    listen 80;
    server_name your_domain.com;  # 将 your_domain.com 替换为您的域名

    location / {
        proxy_pass http://127.0.0.1:13000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 子路径部署

部署到子路径，需要配置 `APP_PUBLIC_PATH` 环境变量。

```diff
services:
  app:
    image: nocobase/nocobase:latest
    environment:
+     - APP_PUBLIC_PATH=/nocobase/
```

应用访问的 URL 为 http://127.0.0.1:13000/nocobase/ ，Nginx 配置为

```bash
server {
    listen 80;
    server_name your_domain.com;  # 将 your_domain.com 替换为您的域名

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
