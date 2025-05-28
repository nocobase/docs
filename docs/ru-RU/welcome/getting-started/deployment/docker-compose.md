# Docker

The other processes are no different from the [Docker installation](/welcome/getting-started/installation/docker-compose).

<embed src="./env-note.md"></embed>

<br />

[>>> Для получения дополнительной информации смотрите полный список 'Переменные окружения' <<<](/welcome/getting-started/env)

## Привязка домена

На примере **nginx**: настройка проксирования через nginx http://127.0.0.1:13000/
Откройте или создайте файл конфигурации Nginx и добавьте туда конфигурацию прокси
```bash
server {
    listen 80;
    server_name your_domain.com;  # Замените на ваше доменное имя или суб домен 

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

## Развёртывание в подкаталог

Для развёртывания приложения в подкаталоге необходимо указать переменную окружения `APP_PUBLIC_PATH`.

```diff
services:
  app:
    image: nocobase/nocobase:latest
    environment:
+     - APP_PUBLIC_PATH=/nocobase/
```

URL приложения: http://127.0.0.1:13000/nocobase/  
Пример конфигурации Nginx:

```bash
server {
    listen 80;
    server_name your_domain.com;  # Замените на ваше доменное имя или суб домен 

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```

В итоге доступ к приложению будет по адресу: http://your_domain.com/nocobase/
