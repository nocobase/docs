# Upgrading for Docker compose

## 0. Preparing for the upgrade

:::warning
Make sure to backup the database before upgrading!!!
:::

## 1. Navigate to the directory containing `docker-compose.yml`

For example:

```bash
# MacOS, Linux...
cd /your/path/my-project/
# Windows
cd C:\your\path\my-project
```

## 2. Update the image version

- `latest` or `main`：The most stable version to date, recommended for installation;
- `next`：Alpha version, including some unreleased new features. This version may not be completely stable and is suitable for developers or testers to experience new features in advance or conduct compatibility testing;
- `1.2.4-alpha`: Upgrade to a specific version. For the latest versions, see the [released versions list](https://hub.docker.com/r/nocobase/nocobase/tags)

:::warning
Images can only be upgraded, not downgraded. The `next` version cannot be downgraded to `latest`.
:::

```yml
# ...
services:
  app:
    image: nocobase/nocobase:main
    image: nocobase/nocobase:latest
    image: nocobase/nocobase:1.2.4-alpha
# ...
```

## 3. Restart the container

```bash
docker-compose pull
docker-compose up -d app
docker-compose logs app
```

## 4. Upgrading independent plugins

After upgrading NocoBase, independent plugins installed through the interface might also need to be upgraded. Please refer to documentation [Installation and Upgrade of Plugins](/welcome/getting-started/plugin)
