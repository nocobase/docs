# Migration Manager

<PluginInfo licenseBundled="true" name="migration-manager"></PluginInfo>

## Introduction

The Migration Manager helps you transfer application configurations from one environment to another. Its main focus is on migrating “application configurations.” If you need a complete data migration, we recommend using the “[Backup Manager](/handbook/backups)” to back up and restore your entire application.

## Installation

The Migration Manager depends on the [Backup Manager](/handbook/backups). Make sure that the Backup Manager plugin is already installed and activated. For more information, refer to [Installing and Upgrading Commercial Plugins](/welcome/getting-started/plugin).

## Process and Principles

The Migration Manager transfers tables and data from the primary database based on specified migration rules, moving them from one application instance to another. Note that it does not migrate data from external databases or sub-applications.

![20250102202546](https://static-docs.nocobase.com/20250102202546.png)

## Migration Rules

### Built-in Rules

Migration Manager can migrate all tables in the primary database and supports five built-in rules:

1. **Schema-only**  
   Only migrates the structure (schema) of tables—no data is inserted or updated.

2. **Overwrite (clear and re-insert)**  
   Deletes all existing records from the target database table, then inserts the new data.

3. **Upsert (Insert or update)**  
   Checks whether each record exists (by primary key). If it does, it updates that record; if not, it inserts it.

4. **Insert-ignore**  
   Inserts new records, but if a record already exists (by primary key), the insertion is ignored (no updates occur).

5. **Skip**  
   Skips processing for the table entirely (no structure changes, no data migration).

**Additional notes:**

- “Overwrite,” “Upsert,” and “Insert-ignore” all synchronize table structure changes as well.
- If a table uses an auto-increment ID as its primary key, or if it has no primary key, neither “Upsert” nor “Insert-ignore” can be applied.
- “Upsert” and “Insert-ignore” rely on the primary key to determine whether the record already exists.

### Detailed Design

![20250102204909](https://static-docs.nocobase.com/20250102204909.png)

### Configuration Interface

You can configure the migration rules in the interface:

![20250102205450](https://static-docs.nocobase.com/20250102205450.png)

Enable independent rules:

![20250107105005](https://static-docs.nocobase.com/20250107105005.png)

Select which tables should be managed by these independent rules:

![20250107104644](https://static-docs.nocobase.com/20250107104644.png)

## Migration Files

![20250102205844](https://static-docs.nocobase.com/20250102205844.png)

### Creating a New Migration

![20250102205857](https://static-docs.nocobase.com/20250102205857.png)

### Executing a Migration

![20250102205915](https://static-docs.nocobase.com/20250102205915.png)

During execution, the system checks for environment variables (learn more about [Environment Variables](/handbook/environment-variables)):

![20250102212311](https://static-docs.nocobase.com/20250102212311.png)

If any required environment variables are missing, a prompt appears so you can add them before continuing:

![20250102210009](https://static-docs.nocobase.com/20250102210009.png)

## Migration Logs

![20250102205738](https://static-docs.nocobase.com/20250102205738.png)

## Rollback

Before any migration runs, the current application is automatically backed up. If the migration fails or the results are not as expected, you can roll back using the [Backup Manager](/handbook/backups).

![20250105195029](https://static-docs.nocobase.com/20250105195029.png)
