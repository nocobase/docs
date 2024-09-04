# Backup manager

<PluginInfo commercial="true" name="backups"></PluginInfo>

## Introduction

The NocoBase backup manager plugin provides features for fully backing up of the NocoBase database and user uploaded files, including backup's scheduling, downloading, deleting, and restoring operation.

## Installation

This plugin is a commercial plugin, which needs to be uploaded and activated through the plugin manager.

![20240323162741](https://static-docs.nocobase.com/20240323162741.png)

:::warning{title="Attention"}
- This plugin is based on the native database client. Before using it, the corresponding database client must be installed in the NocoBase server environment.
- During the restore operation, the version of the target database should not be lower than the version of the database that created the backup.
:::

### MySQL/MariaDB Client Installation

Please select the database version that will be used when restoring backups to ensure compatibility.

#### Docker Environment

1. Visit the official MySQL release page, choose the appropriate MySQL version, and copy the download link.
- Historical versions: https://downloads.mysql.com/archives/community/
- Latest version: https://dev.mysql.com/downloads/mysql/

The NocoBase image is built on the Debian 11 system, so select the corresponding MySQL client version for Debian 11. For example, to download version 8.1.0, find the download link from the above pages: https://downloads.mysql.com/archives/get/p/23/file/mysql-community-client-core_8.1.0-1debian11_amd64.deb

2. Enter the NocoBase container
```bash
docker exec -it nocobase bash
```

3. Install the MySQL client:
```bash
apt-get update && apt-get install -y wget
wget https://downloads.mysql.com/archives/get/p/23/file/mysql-community-client-core_8.1.0-1debian11_amd64.deb
dpkg -x mysql-community-client-core_8.1.0-1debian11_amd64.deb /tmp/mysql-client
cp /tmp/mysql-client/usr/bin/mysqldump /usr/bin/
cp /tmp/mysql-client/usr/bin/mysql /usr/bin/
```

#### Other server environments

Please visit the official MySQL release page, choose the appropriate MySQL version, and follow the official MySQL documentation for installation.
- Historical versions: https://downloads.mysql.com/archives/community/
- Latest version: https://dev.mysql.com/downloads/mysql/

### PostgreSQL Client Installation

Please select the database version that will be used when restoring backups to ensure version compatibility.

#### Docker Environment

1. Enter the NocoBase container
```bash
# for docker
# docker exec -it nocobase bash

# for docker compose
docker compose exec -it app bash
```

2. Install the PostgreSQL client:
```
apt install -y postgresql-common gnupg
/usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
# postgresql-client-16 is for version 16; choose the appropriate version as needed
apt install -y postgresql-client-16
```

#### Other server environments
Please visit https://www.postgresql.org/download/, choose the appropriate PostgreSQL version, and follow the official documentation for installation.

## Instructions

![Main Interface](./static/main-screen.png)

### Create New Backup

Click the "New backup" button to create a new backup based on the backup configuration and display the backup status in the backup list.
![Create New Backup](./static/new-backup.png)

### Restore Backup

Supports restoring backups from the backup list or uploading local backup files to restore backups.
Restore operations are not allowed in the following scenarios:
- When the current NocoBase version is lower than the NocoBase version in the backup file.
- When the current NocoBase database is inconsistent with the following configurations in the backup file:
  - dialect
  - underscored
  - table prefix
  - schema

> **Restore is a full database operation. It is recommended to back up the current database before restoring a backup.**

#### Restore from the backup list

Click the "Restore" button of the backup item in the backup list, enter the backup file encryption password in the pop-up window, and click "Confirm" to restore the backup.
> Leave password empty for unencrypted backup.
![Restore Backup](./static/restore-backup.png)

#### Restore from local backup file

Click the "Restore from local backup" button, select the local backup file in the pop-up window, enter the backup file encryption password, and click "Confirm" to restore the backup.
> Leave password empty for unencrypted backup.
![Restore from Local Backup](./static/restore-from-local.png)

#### Download Backup File

Click the `Download` button of the backup item in the backup list to download the backup file.

#### Delete Backup

Click the `Delete` button of the backup item in the backup list to delete the backup file.

## Backup Settings

Switch to the "Settings" tab, modify the backup settings, and click `Save` to take effect.
![Backup Settings](./static/backup-settings.png)

### Backup Settings Description

- `Scheduled backup`: When enabled, you can set automatic backups at specified times.
- `Maximum number of backups`: Set the maximum number of locally saved backup files. After exceeding the number, the earliest backup files will be automatically deleted.
- `Sync backup to cloud storage`: Set the cloud storage location where the backup files are automatically uploaded after successful backup, only support cloud storage.
- `Backup uploaded files in local storage`: Whether to include files uploaded by users to the server's local storage (storage/uploads) in the backup.
- `Enable encryption`: Whether to enable backup file encryption and set the encryption password.

> **Please keep the backup file encryption password safe. Forgetting the password will make it impossible to restore the backup file.**
