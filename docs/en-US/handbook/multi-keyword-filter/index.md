# Multi-keyword Filter<Badge>v1.7.0+</Badge>

<PluginInfo commercial="true" name="multi-keyword-filter"></PluginInfo>

## Introduction

The **Multi-keyword Filter** plugin adds powerful text filtering capabilities to the NocoBase platform, allowing you to filter using multiple keywords, greatly improving the flexibility and efficiency of data queries.

This plugin primarily provides two filter operators:
- **Equals any**: Filters records that contain any of the specified keywords in the list
- **Not equals any**: Filters records that do not contain any of the specified keywords in the list

These operators can be used with the following field types:
- Single line text
- Phone
- Email
- Integer
- Number
- Percent
- UUID
- Nano ID
- Sequence

## Use Cases

- Need to filter based on multiple product codes, tags, or categories
- Import large numbers of keywords from Excel files for batch filtering
- Need to quickly find data records that meet multiple conditions

## Scope of Use

- Fields in filter form blocks
![20250417170714](https://static-docs.nocobase.com/20250417170714.png)
- Fields in filter buttons
![20250417170923](https://static-docs.nocobase.com/20250417170923.png)
- Fields in data scope filtering
![20250417171011](https://static-docs.nocobase.com/20250417171011.png)
- Fields in linkage rules
![20250417171124](https://static-docs.nocobase.com/20250417171124.png)

## How to Use

### 1. Add Single Line Text Field

Using filter forms and single line text as an example, set the operator for the single line text field to "equals any" or "not equals any"

![20250417165918_rec_](https://static-docs.nocobase.com/20250417165918_rec_.gif)

### 2. Input Keywords

There are two ways to input keywords:

#### 2.1 Manual Input

1. Directly enter keywords in the input box
2. Multiple keywords can be separated by line breaks
3. After entering, click the filter button to filter the data

#### 2.2 Import Keywords from Excel

1. Prepare an Excel file (supports .xlsx or .xls format) containing the keywords to import
2. Click the "Import Excel" button on the right side of the input box
3. Select and upload the Excel file

**If Excel has only one column of data**:
- The system will automatically import all non-empty values from that column as keywords

**If Excel contains multiple columns of data**:
- The system will display a column selection dialog
- You can select one or multiple columns for import
- Single column selection: All non-empty values in that column will be imported as keywords
- Multiple column selection: Non-empty values from multiple columns will be merged as keywords, duplicates will be automatically removed
- Click the "Confirm" button to complete the import

![20250417170324_rec_](https://static-docs.nocobase.com/20250417170324_rec_.gif)

### 3. Filter Results

- **Equals any**: Records where the field value matches any value in the keyword list will be displayed
- **Not equals any**: Records where the field value does not match any value in the keyword list will be displayed

## Frequently Asked Questions

### How to clear added keywords?

Click the "×" button on a keyword tag to delete individual keywords, or click the "×" on the right side of the input box to delete all keywords.

![20250417165604](https://static-docs.nocobase.com/20250417165604.png)

### How many keywords can be imported?

The plugin supports importing large numbers of keywords, but it's recommended to keep them within a reasonable range (such as hundreds) to avoid affecting query performance.

### What are the format requirements for imported keywords?

- Excel files should contain at least one column of data
- Empty values will be automatically filtered out
- Duplicate values will be automatically removed

### Does it support fuzzy matching?

This plugin provides exact matching functionality.

### Which fields support this feature?

- Single line text
- Phone
- Email
- Integer
- Number
- Percent
- UUID
- Nano ID
- Formula
- Sequence

## Tips and Tricks

- Save commonly used keyword lists in Excel files for quick import when needed
- When importing multiple columns, you can merge keywords from different columns
- Use the "not equals any" operator to quickly exclude unwanted data

## System Requirements

- NocoBase version: 1.7.0 or higher

---

By using the multi-keyword filter plugin, you can manage and query data more efficiently, especially when dealing with large amounts of data and frequent multi-condition filtering scenarios. This plugin will significantly improve your work efficiency.
