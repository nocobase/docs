# Backup and Restore

<PluginInfo name="backup-restore" deprecated=true></PluginInfo>

## Introduction

The backup and restore plugin can be used for scenarios such as application replication, migration, and upgrade.

## Installation

This plugin is built-in and does not require manual installation or activation.

## User Instructions

![Backup and Restore List Page](https://static-docs.nocobase.com/071b969c4db9bdc6d2c359e1b6bef5da.png)

### Creating a Backup

![Creating Backup](https://static-docs.nocobase.com/0e3d9410e6b1cfbda38044033f0b4053.png)

### Restore Backup

You can choose to upload a backup from your local device or click on a backup file to restore.

![Restore Backup](https://static-docs.nocobase.com/e4b95a4376260fd516de7828fd9f1056.png)

Select the data you need to restore, the selected data will completely overwrite the corresponding data table of the target application.

![Restore Backup](https://static-docs.nocobase.com/9c7cb78b51c8f949e417b5a1e0180ae2.png)

### Backup Instructions 

Click on "Learn more" to view the backup instructions.

![Backup and Restore Instructions](https://static-docs.nocobase.com/4f54eba0fde2d6481274665cb184a79e.png)

Backup Instructions

![Backup and Restore Instructions](https://static-docs.nocobase.com/bd5c68cf7e35d04e525f9b13e48e32d9.png)

Backup Groups

- Required Data: Essential data for system operation.
- Skipped Data: Data skipped and not backed up.
- User Data: Data related to users.
- Log Data: Data used to record some actions log.
- Third-party Service Information: Generally information about various service providers, such as file storage services, map services, and SMS service provider configuration information, etc.
- Custom Collection Data: Data of collections added through the collection manager.
- Unknown Data: Data without configured backup rules.

Note: You can choose the data you want to back up or restore by group. The selected data will completely overwrite when restoring.
