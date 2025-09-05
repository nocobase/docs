# Источник данных — База данных KingbaseES

<PluginInfo licenseBundled="true" name="data-source-kingbase"></PluginInfo>

## Введение

KingbaseES можно использовать как источник данных, как в качестве основной базы данных, так и в качестве внешней базы данных.

:::warning
В настоящее время поддерживаются только базы данных KingbaseES, работающие в режиме pg.
:::

## Установка

### Использование в качестве основной базы данных

Ознакомьтесь с [Обзором установки](/welcome/getting-started/installation) для получения информации о процедурах настройки, разница в основном связана с переменными среды.

#### Переменные среды

Отредактируйте файл .env, чтобы добавить или изменить следующие конфигурации переменных среды:

```bash
# For accessing commercial plugins
NOCOBASE_PKG_URL=https://pkg.nocobase.com/
NOCOBASE_PKG_USERNAME=your-username   # Service platform username
NOCOBASE_PKG_PASSWORD=your-password   # Service platform password

# Adjust DB parameters as needed
DB_DIALECT=kingbase
DB_HOST=localhost
DB_PORT=54321
DB_DATABASE=kingbase
DB_USER=nocobase
DB_PASSWORD=nocobase
```

#### Установка через Docker compose

```yml
version: "3"

networks:
  nocobase:
    driver: bridge

  app:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    restart: always
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # For accessing commercial plugins
      - NOCOBASE_PKG_URL=https://pkg.nocobase.com/
      - NOCOBASE_PKG_USERNAME=your-username   # Service platform username
      - NOCOBASE_PKG_PASSWORD=your-password   # Service platform password
      # Application key for generating user tokens, etc.
      # Changing APP_KEY invalidates old tokens
      # Use a random string and keep it confidential
      - APP_KEY=your-secret-key
      # Database type
      - DB_DIALECT=kingbase
      # Database host, replace with existing database server IP if needed
      - DB_HOST=kingbase
      # Database name
      - DB_DATABASE=kingbase
      # Database user
      - DB_USER=nocobase
      # Database password
      - DB_PASSWORD=nocobase
      # Timezone
      - TZ=UTC
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"

  # Служба Kingbase только для целей тестирования
  kingbase:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/kingbase:v009r001c001b0030_single_x86
    platform: linux/amd64
    restart: always
    privileged: true
    networks:
      - nocobase
    volumes:
      - ./storage/db/kingbase:/home/kingbase/userdata
    environment:
      ENABLE_CI: no # Must be set to no
      DB_USER: nocobase
      DB_PASSWORD: nocobase
      DB_MODE: pg  # pg only
      NEED_START: yes
    command: ["/usr/sbin/init"]
```

#### Установка с помощью create-nocobase-app

```bash
yarn create nocobase-app my-nocobase-app -d kingbase \
   -e DB_HOST=localhost \
   -e DB_PORT=54321 \
   -e DB_DATABASE=kingbase \
   -e DB_USER=nocobase \
   -e DB_PASSWORD=nocobase \
   -e TZ=UTC
```

### Использование в качестве внешней базы данных

Отредактируйте файл .env, чтобы добавить переменные среды для доступа к коммерческим плагинам:

```bash
# For accessing commercial plugins
NOCOBASE_PKG_URL=https://pkg.nocobase.com/
NOCOBASE_PKG_USERNAME=your-username   # Service platform username
NOCOBASE_PKG_PASSWORD=your-password   # Service platform password
```

Выполните команду установки или обновления

```bash
yarn nocobase install
# or
yarn nocobase upgrade
```

Активируйте плагин

![20241024121815](https://static-docs.nocobase.com/20241024121815.png)

## Руководство пользователя

- Первичная база данных: см. [руководство](/handbook)
- Внешняя база данных: см. [Источник данных / Внешняя база данных](/handbook/data-source-manager/external-database)
