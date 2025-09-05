# Docker (👍 Рекомендуется)

## 0. Предварительные требования

⚡⚡ Убедитесь, что у вас установлен [Docker](https://docs.docker.com/get-docker/)

## 1. Создание файла `docker-compose.yml`

```bash
# Создайте папку (например, my-project) для хранения системных файлов NocoBase
mkdir my-project && cd my-project

# Создайте пустой файл docker-compose.yml
vi docker-compose.yml
```

## 2. Настройка `docker-compose.yml`

Параметры конфигурации немного отличаются в зависимости от используемой базы данных. Выберите нужную конфигурацию и вставьте её в docker-compose.yml.

<Tabs>

<div label="PostgreSQL" name="postgres">

```yml
version: '3'

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: nocobase/nocobase:latest
    restart: always
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      - APP_KEY=your-secret-key           # Секретный ключ приложения (используется для токенов и т.д.)
      - DB_DIALECT=postgres               # Тип базы данных
      - DB_HOST=postgres                  # Имя сервиса БД или IP-адрес внешнего сервера
      - DB_PORT=5432                      # Порт БД
      - DB_DATABASE=nocobase             # Название базы
      - DB_USER=nocobase                 # Имя пользователя
      - DB_PASSWORD=nocobase             # Пароль пользователя
      - TZ=UTC                           # Часовой пояс
      - NOCOBASE_PKG_USERNAME=           # Учетные данные для скачивания коммерческих плагинов
      - NOCOBASE_PKG_PASSWORD=
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - '13000:80'
    # init: true

  # If using an existing database server, postgres service can be omitted
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

</div>

<div label="MySQL" name="mysql">

```yml
version: '3'

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: nocobase/nocobase:latest
    restart: always
    networks:
      - nocobase
    depends_on:
      - mysql
    environment:
      # The application's secret key, used to generate user tokens, etc.
      # If APP_KEY is changed, old tokens will also become invalid.
      # It can be any random string, and make sure it is not exposed.
      - APP_KEY=your-secret-key
      # Database type, supports postgres, mysql, mariadb
      - DB_DIALECT=mysql
      # Database host, can be replaced with the IP of an existing database server
      - DB_HOST=mysql
      # Database port
      - DB_PORT=3306
      # Database name
      - DB_DATABASE=nocobase
      # Database user
      - DB_USER=root
      # Database password
      - DB_PASSWORD=nocobase
      # Whether to convert table and field names to snake case
      - DB_UNDERSCORED=true
      # Timezone
      - TZ=UTC
      # Service platform username and password,
      # used for automatically downloading and updating plugins.
      - NOCOBASE_PKG_USERNAME=
      - NOCOBASE_PKG_PASSWORD=
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - '13000:80'
    # init: true

  # If using an existing database server, mysql service can be omitted
  mysql:
    image: mysql:8
    environment:
      MYSQL_DATABASE: nocobase
      MYSQL_USER: nocobase
      MYSQL_PASSWORD: nocobase
      MYSQL_ROOT_PASSWORD: nocobase
    restart: always
    volumes:
      - ./storage/db/mysql:/var/lib/mysql
    networks:
      - nocobase
```

</div>

<div label="MariaDB" name="mariadb">

```yml
version: '3'

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: nocobase/nocobase:latest
    restart: always
    networks:
      - nocobase
    depends_on:
      - mariadb
    environment:
      # The application's secret key, used to generate user tokens, etc.
      # If APP_KEY is changed, old tokens will also become invalid.
      # It can be any random string, and make sure it is not exposed.
      - APP_KEY=your-secret-key
      # Database type, supports postgres, mysql, mariadb
      - DB_DIALECT=mariadb
      # Database host, can be replaced with the IP of an existing database server
      - DB_HOST=mariadb
      # Database port
      - DB_PORT=3306
      # Database name
      - DB_DATABASE=nocobase
      # Database user
      - DB_USER=root
      # Database password
      - DB_PASSWORD=nocobase
      # Whether to convert table and field names to snake case
      - DB_UNDERSCORED=true
      # Timezone
      - TZ=UTC
      # Service platform username and password,
      # used for automatically downloading and updating plugins.
      - NOCOBASE_PKG_USERNAME=
      - NOCOBASE_PKG_PASSWORD=
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - '13000:80'
    # init: true

  # If using an existing database server, mariadb service can be omitted
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

</div>
</Tabs>

Выбор версии NocoBase [versions](./index.md#which-version-to-install)

- `latest`: Стабильная, протестированная версия. Рекомендуется.
- `beta`: Включает новые функции, может содержать ошибки.
- `alpha`: Разработка, нестабильная версия.
- `1.3.51`: Указание конкретной версии. [list of released versions](https://hub.docker.com/r/nocobase/nocobase/tags).

:::warning
**Для версии 1.4 и выше**: укажите переменные окружения [`NOCOBASE_PKG_USERNAME`](/welcome/getting-started/env#nocobase_pkg_username) и [`NOCOBASE_PKG_PASSWORD`](/welcome/getting-started/env#nocobase_pkg_password), чтобы автоматически загружать коммерческие плагины во время установки или обновления.
:::

Пример:

```yml
#...
services:
  app:
    # Docker Hub image
    image: nocobase/nocobase:latest
    image: nocobase/nocobase:beta
    image: nocobase/nocobase:alpha
    image: nocobase/nocobase:1.3.51
# ...
```

## 3. Установка и запуск NocoBase

Процесс может занять несколько минут:

```bash
# Загрузка образов
$ docker compose pull
# Запуск в фоновом режиме
$ docker compose up -d
# Просмотр логов
$ docker compose logs app

app-postgres-app-1  | nginx started
app-postgres-app-1  | yarn run v1.22.15
app-postgres-app-1  | $ cross-env DOTENV_CONFIG_PATH=.env node -r dotenv/config packages/app/server/lib/index.js install -s
app-postgres-app-1  | Done in 2.72s.
app-postgres-app-1  | yarn run v1.22.15
app-postgres-app-1  | $ pm2-runtime start --node-args="-r dotenv/config" packages/app/server/lib/index.js -- start
app-postgres-app-1  | 2022-04-28T15:45:38: PM2 log: Launching in no daemon mode
app-postgres-app-1  | 2022-04-28T15:45:38: PM2 log: App [index:0] starting in -fork mode-
app-postgres-app-1  | 2022-04-28T15:45:38: PM2 log: App [index:0] online
app-postgres-app-1  | 🚀 NocoBase server running at: http://localhost:13000/
```

## 4. Вход в систему

Откройте [http://localhost:13000](http://localhost:13000) в браузере. Стандартный логин: `admin@nocobase.com` , пароль: `admin123`
