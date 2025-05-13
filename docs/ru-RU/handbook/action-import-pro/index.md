# Import Pro

<PluginInfo commercial="true" name="action-import-pro"></PluginInfo>

## Introduction

The Import Pro plugin provides enhanced functionality based on the regular import feature.

## Installation

This plugin depends on the async task management plugin. Please enable the async task management plugin before use.

## Enhanced Features

- Supports asynchronous import operations, executed in independent threads, suitable for importing large amounts of data.
- Supports advanced import options.

## User Manual

### Asynchronous Import

After initiating an import, the import process will be executed in a separate background thread without requiring manual user configuration. In the user interface, after executing the import operation, the current import task will be displayed in the upper right corner, showing real-time task progress.

![index-2024-12-30-09-21-05](https://static-docs.nocobase.com/index-2024-12-30-09-21-05.png)

After the import is complete, you can view the import results in the import task.

### Import Settings

#### Import Options - Trigger Workflow

![20250306231010](https://static-docs.nocobase.com/20250306231010.png)

When importing, you can choose whether to trigger a workflow. If this option is selected and the data table is bound to a workflow (via data table events), the workflow will be triggered for each row during the import.

#### Import Option - Identify Duplicate Records

![20250306231054](https://static-docs.nocobase.com/20250306231054.png)

Select this option and choose the corresponding mode to automatically identify and handle duplicate records during import.

The values configured in the import options will be used as default during the import process. Admins can control whether uploaders can modify these options (except for the trigger workflow option).

#### Uploader Permissions Settings

![20250306232121](https://static-docs.nocobase.com/20250306232121.png)

- Allow uploaders to modify import options

![20250306230531](https://static-docs.nocobase.com/20250306230531.png)

- Disable uploaders from modifying import options

![20250306230650](https://static-docs.nocobase.com/20250306230650.png)

#### Mode Description

- Skip Duplicate: Check for existing records using the data in the "Identifying Field". If a record exists, skip this entry; otherwise, import it as a new record.
- Update Duplicate: Check for existing records using the data in the "Identifying Field". If a record exists, update it; otherwise, import it as a new record.
- Update Duplicate Only: Check for existing records using the data in the "Identifying Field". If a record exists, update it; otherwise, skip it.

#### Identifying Fields

The system identifies whether a row is a duplicate record based on the value of this field.
