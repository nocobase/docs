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

#### Concurrent Exports
When there are many concurrent export tasks, server configuration can affect system response time, potentially slowing it down. Therefore, we recommend system developers configure the maximum number of concurrent export tasks (default is 3). When the configured concurrency limit is exceeded, tasks will enter a queuing state.
![20250505171706](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250505171706.png)

Concurrency configuration method: Set using environment variables, e.g., ASYNC_TASK_MAX_CONCURRENCY=<number>, [How to configure environment variables?](../../welcome/getting-started/env)

Based on comprehensive testing with different configurations and data complexities, recommended concurrency settings:
- For 2-core CPU: concurrency of 3.
- For 4-core CPU: concurrency of 5.

#### About Performance

When you notice unusually slow export processes (see reference below), it may be due to performance issues caused by the database table structure.

| Data Characteristics | Index Type | Data Volume | Export Duration |
|----------------------|------------|-------------|-----------------|
| No relationship fields | Primary key/Unique constraint | 1 million | 3-6 minutes |
| No relationship fields | Regular index | 1 million | 6-10 minutes |
| No relationship fields | Compound index (non-unique) | 1 million | 30 minutes |
| With relationship fields<br>(one-to-one, one-to-many,<br>many-to-one, many-to-many) | Primary key/Unique constraint | 500,000 | 15-30 minutes |

To ensure efficient exports, we recommend:
1. Your data tables must meet the following conditions:

| Condition Type | Required Criteria | Additional Notes |
|----------------|-------------------|------------------|
| Table Structure (at least one requirement) | Has primary key<br>Has unique constraint<br>Has index (unique, regular, compound) | Priority: primary key > unique constraint > index |
| Field Properties | Primary key/unique constraint/index (one of them) must have sortable properties, such as: auto-increment ID, snowflake ID, UUID v1, timestamp, numbers, etc.<br>(Note: Non-sortable fields like UUID v3/v4/v5, ordinary strings, etc. will affect performance) | None |

2. Reduce unnecessary export fields, especially relationship fields (performance issues with relationship fields are still being optimized)
![20250506215940](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250506215940.png)
3. If you've met all the above conditions and still experience slow exports, you can analyze logs or provide feedback to our official team.
![20250505182122](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250505182122.png)

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
