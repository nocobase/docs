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

#### About Performance

To evaluate the performance of large-scale data imports, we conducted comparative tests across different scenarios, field types, and trigger configurations (results may vary depending on server and database configurations, provided for reference only):

| Data Volume | Field Types | Import Configuration | Processing Time |
|------|---------|---------|---------|
| 1 million records | String, number, date, email, long text | • Trigger workflow: No<br>• Duplicate identification: None | Approx. 1 minute |
| 500,000 records | String, number, date, email, long text, many-to-many | • Trigger workflow: No<br>• Duplicate identification: None | Approx. 16 minutes |
| 500,000 records | String, number, date, email, long text, many-to-many, many-to-one | • Trigger workflow: No<br>• Duplicate identification: None | Approx. 22 minutes |
| 500,000 records | String, number, date, email, long text, many-to-many, many-to-one | • Trigger workflow: Async notifications<br>• Duplicate identification: None | Approx. 22 minutes |
| 500,000 records | String, number, date, email, long text, many-to-many, many-to-one | • Trigger workflow: Async notifications<br>• Duplicate identification: Update duplicates (50,000 duplicate records) | Approx. 3 hours |

Based on the above performance test results and current design considerations, here are explanations and recommendations regarding key influencing factors:

1. **Duplicate Record Processing Mechanism**: When selecting the **Update Duplicates** or **Update Duplicates Only** options, the system executes queries and updates record-by-record, which significantly reduces import efficiency. We recommend preprocessing your data (using professional tools for deduplication) before importing it into the system, which can substantially shorten the overall processing time.

2. **Relationship Field Processing Efficiency**: The system processes relationship fields using record-by-record query associations, which becomes a performance bottleneck in large data volume scenarios. For simple relationship structures (such as one-to-many associations between two tables), we recommend a phased import strategy: first import the main table's basic data, then establish relationships between tables afterward. If business requirements necessitate importing relationship data simultaneously, please refer to the performance test results above to plan import times accordingly.

3. **Workflow Processing Mechanism**: We do not recommend enabling workflow triggers when importing large volumes of data, primarily for two reasons:
   - When the import task status shows 100%, the task does not immediately end, as the system still needs additional time to create workflow execution plans. During this phase, the system generates corresponding workflow execution plans for each imported record, occupying the import thread, though this does not affect the use of already imported data.
   - After the import task is fully completed, the concurrent execution of numerous workflows may cause system resource constraints, affecting overall system response speed and user experience.

These three factors affecting performance are being considered for further optimization in future updates.

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
