# Upgrading for Docker compose

## 0. Preparing for the upgrade

:::warning
- Make sure to backup the database before upgrading!!!
- **Version 1.4 and above**: By setting the environment variables [`NOCOBASE_PKG_USERNAME`](/welcome/getting-started/env#nocobase_pkg_username) and [`NOCOBASE_PKG_PASSWORD`](/welcome/getting-started/env#nocobase_pkg_password), you can automatically download commercial plugins during application installation or upgrade.
:::

## 1. Navigate to the directory containing `docker-compose.yml`

Example

```bash
# MacOS, Linux...
cd /your/path/my-project/
# Windows
cd C:\your\path\my-project
```

## 2. Update the image version

- 'latest' : Functional stability, more complete test version, only do bug fixes. Installing this version is recommended.
- 'beta' : contains a new feature that is about to be released, a version that has been preliminarily tested and may have some known or unknown issues.
- 'alpha' : a version in development that contains the latest feature code, may not be completed or has a lot of instability, and is mainly used for internal development and rapid iteration.
- ` 1.3.51 ` : specify a version number, the latest version of the view [] list of previous versions (https://hub.docker.com/r/nocobase/nocobase/tags).

:::warning
Images can only be upgraded, not downgraded. The next version cannot be downgraded to latest.
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
# Pull the latest image
docker-compose pull
# Start
docker-compose up -d app
# View the app process
docker-compose logs app
```

## 4. Upgrading independent plugins

After upgrading NocoBase, independent plugins installed through the interface might also need to be upgraded. Please refer to documentation [Installation and Upgrade of Plugins](/welcome/getting-started/plugin)
