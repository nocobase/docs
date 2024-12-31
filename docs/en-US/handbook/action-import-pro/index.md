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

### Import Option - Trigger Workflow

![index-2024-12-30-09-16-55](https://static-docs.nocobase.com/index-2024-12-30-09-16-55.png)

You can choose whether to trigger workflows during import. If this option is checked and the data table has associated workflows (table events), the import will trigger workflows row by row.

### Import Option - Identify Duplicate Records

![index-2024-12-30-09-18-27](https://static-docs.nocobase.com/index-2024-12-30-09-18-27.png)

You can choose whether to identify duplicate records during import. When this option is checked and a corresponding mode is selected, duplicate records will be identified and processed during import.

#### Mode Description

- Skip Duplicate: Check for existing records using the data in the "Identifying Field". If a record exists, skip this entry; otherwise, import it as a new record.
- Update Duplicate: Check for existing records using the data in the "Identifying Field". If a record exists, update it; otherwise, import it as a new record.
- Update Duplicate Only: Check for existing records using the data in the "Identifying Field". If a record exists, update it; otherwise, skip it.

#### Identifying Fields

The system identifies whether a row is a duplicate record based on the value of this field.
