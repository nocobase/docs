# Backup and Restore
<PluginInfo name="backup-restore" deprecated=true></PluginInfo>
## Introduction

The backup and restore plugin for the NocoBase application is used in scenarios such as application replication, migration, and upgrades.

## Installation

The built-in plugin does not require manual installation or activation.

## Usage Instructions

![Backup and Restore List Page](https://static-docs.nocobase.com/071b969c4db9bdc6d2c359e1b6bef5da.png)

### Create Backup

![Create Backup](https://static-docs.nocobase.com/0e3d9410e6b1cfbda38044033f0b4053.png)

### Restore Backup

You can choose to upload a backup from your local storage or click on a specific backup file to restore.

![Restore Backup](https://static-docs.nocobase.com/e4b95a4376260fd516de7828fd9f1056.png)

Select the data to be restored, and the selected data will completely overwrite the corresponding tables in the target application.

![Restore Backup](https://static-docs.nocobase.com/9c7cb78b51c8f949e417b5a1e0180ae2.png)

### Backup Information

Click "Learn more" to view the backup information.

![Backup and Restore Information](https://static-docs.nocobase.com/4f54eba0fde2d6481274665cb184a79e.png)

Backup Information

![Backup and Restore Information](https://static-docs.nocobase.com/bd5c68cf7e35d04e525f9b13e48e32d9.png)

Backup Groups

- Essential Data
- Skipped Data
- User Data
- Log Data
- Third-party Service Information
- Custom Table Data

Note: You can choose data to backup or restore by group. When restoring, the selected data will completely overwrite the existing data.

## Developer Guide
