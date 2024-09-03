# Backup manager

<PluginInfo commercial="true" name="backups"></PluginInfo>

## Introduction
The NocoBase Backup manager plugin provides features for full backups of the NocoBase database and uploaded files, scheduled full backups, restoration, download, deletion, and more.

<CommercialInstallation></CommercialInstallation>

## Instructions
![Main Interface](./static/main-screen.png)

### Create New Backup

Click the "New backup" button to create a new backup based on the backup configuration and display the backup status in the backup list.
![Create New Backup](./static/new-backup.png)

### Restore Backup
Supports restoring backups from the backup list and uploading local backup files to restore backups.
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
> No password is required for unencrypted backup files.
![Restore Backup](./static/restore-backup.png)

#### Restore from local backup file
Click the "Restore from local backup" button, select the local backup file in the pop-up window, enter the backup file encryption password, and click "Confirm" to restore the backup.
> No password is required for unencrypted backup files.
![Restore from Local Backup](./static/restore-from-local.png)

#### Download Backup File
Click the "Download" button of the backup item in the backup list to download the backup file.

#### Delete Backup
Click the "Delete" button of the backup item in the backup list to delete the backup file.

## Backup Settings
Switch to the "Settings" tab, modify the backup settings, and click "Save" to take effect.
![Backup Settings](./static/backup-settings.png)

### Backup Settings Description
- `Scheduled backup`: When enabled, you can set automatic backups at specified times.
- `Maximum number of backups`: Set the maximum number of locally saved backup files. After exceeding the number, the earliest backup files will be automatically deleted.
- `Sync backup to cloud storage`: Set the cloud storage location where the backup files are automatically uploaded after successful backup, only support cloud storage.
- `Backup uploaded files in local storage`: Whether to include files uploaded by users to the server's local storage (storage/uploads) in the backup.
- `Enable encryption`: Whether to enable backup file encryption and set the encryption password.

> **Please keep the backup file encryption password safe. Forgetting the password will make it impossible to restore the backup file.**
