# Export records Pro

<PluginInfo commercial="true" name="action-export-pro"></PluginInfo>

## Introduction

The Export records Pro plugin provides enhanced functionality based on the regular export feature.

## Installation

This plugin depends on the async task management plugin. Please enable the async task management plugin before use.

## Enhanced Features

- Supports asynchronous export operations, executed in independent threads, suitable for exporting large amounts of data.
- Supports attachment export.

## User Manual

### Export Mode Configuration

![index-2025-01-13-20-58-39](https://static-docs.nocobase.com/index-2025-01-13-20-58-39.png)

You can configure the export mode on the export button, with three available export modes:

- Auto: Determines the export mode based on the amount of data at export time. If the data volume is less than 1000 records (100 records for attachment export), synchronous export is used; if the data volume exceeds 1000 records (100 records for attachment export), asynchronous export is used.
- Sync: Uses synchronous export, which runs in the main thread and is suitable for small-scale data. Using synchronous mode for large-scale data exports may cause system blocking, lag, and inability to process other user requests.
- Async: Uses asynchronous export, which runs in a separate background thread and won't block the current system.

### Asynchronous Export

After initiating an export, the export process will be executed in a separate background thread without requiring manual user configuration. In the user interface, after executing the export operation, the current export task will be displayed in the upper right corner, showing real-time task progress.

![index-2024-12-30-09-21-05](https://static-docs.nocobase.com/index-2024-12-30-09-21-05.png)

After the export is complete, you can download the exported file from the export task.

### Attachment Export

Attachment export supports exporting attachment-related fields as compressed packages.

#### Attachment Export Configuration

![index-2024-12-30-09-16-55](https://static-docs.nocobase.com/index-2024-12-30-09-16-55.png)

- Configure the attachment fields to be exported, multiple selections supported.
- You can choose whether to generate a folder for each record.

File naming rules:

- If you choose to generate a folder for each record, the file naming rule is: `{record title field value}/{attachment field name}[-{file sequence number}].{file extension}`.
- If you choose not to generate folders, the file naming rule is: `{record title field value}-{attachment field name}[-{file sequence number}].{file extension}`.

The file sequence number is automatically generated when there are multiple attachments in the attachment field.
