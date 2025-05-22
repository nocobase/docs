# Variables

## Introduction
Variables are a set of tokens used to identify a value in the current context. They can be used in scenarios such as configuration block data scope, field default values, linkage rules, workflows, etc.

![2024-09-25_20-08-38-2024-09-25-20-11-51](https://static-docs.nocobase.com/2024-09-25_20-08-38-2024-09-25-20-11-51.png)

## Currently Supported Variables

### Current user

Represents the data of the currently logged-in user.

![20240416154950](https://static-docs.nocobase.com/20240416154950.png)

### Current Role

Represents the role identifier (role name) of the currently logged-in user.

![20240416155100](https://static-docs.nocobase.com/20240416155100.png)

### Current form

The value of the current form, only used in form blocks. It is used in the following scenarios:

- Linkage rules of the current form
- Default values for form fields (only valid when adding new data)
- Data scope settings for association fields
- Assign field values configuration for submit actions

#### Linkage rules of the current form

![20240416170732_rec_](https://static-docs.nocobase.com/20240416170732_rec_.gif)

#### Default values for form fields (only valid when adding new data)

![20240416171129_rec_](https://static-docs.nocobase.com/20240416171129_rec_.gif)

#### Data scope settings for association fields

Used to handle linkages between relationships, for example:

![20240416171743_rec_](https://static-docs.nocobase.com/20240416171743_rec_.gif)

#### Assign field values configuration for submit actions

![20240416171215_rec_](https://static-docs.nocobase.com/20240416171215_rec_.gif)

### Current object

Currently only used for field configuration in subforms and subtables of form blocks, representing the value of each item:

- Default values for subfields
- Data scope for sub-association fields

#### Default values for subfields

![20240416172933_rec_](https://static-docs.nocobase.com/20240416172933_rec_.gif)

#### Data scope for sub-association fields

![20240416173043_rec_](https://static-docs.nocobase.com/20240416173043_rec_.gif)

### Parent object

Similar to the "Current object", it represents the parent object of the current object. Supported in NocoBase v1.3.34-beta and above.

### Current record

A record refers to a row in a collection, with each row representing a record. The "Current record" variable is used in the "Row Action Linkage Rules" of display blocks.

#### Row Action Linkage Rules

![20240416174813_rec_](https://static-docs.nocobase.com/20240416174813_rec_.gif)

### Current popup record

Popup actions play a very important role in the NocoBase interface configuration.

- Row action popup: Each popup has a "Current popup record" variable, representing the current row record.
- Association field popup: Each popup has a "Current popup record" variable, representing the clicked relationship record.

The blocks in the popup can use the "Current popup record" variable, with the following use cases:

- Configuring data scope for blocks
- Configuring data scope for association fields
- Configuring default values for fields (form for adding data)
- Configuring linkage rules for actions
- Assign field values configuration for form submit actions

#### Configuring data scope for blocks

![20240416224307_rec_](https://static-docs.nocobase.com/20240416224307_rec_.gif)

#### Configuring data scope for association fields

![20240416224641_rec_](https://static-docs.nocobase.com/20240416224641_rec_.gif)

#### Configuring default values for fields (form for adding data)

![20240416223846_rec_](https://static-docs.nocobase.com/20240416223846_rec_.gif)

#### Configuring linkage rules for actions

![20240416223101_rec_](https://static-docs.nocobase.com/20240416223101_rec_.gif)

#### Assign field values configuration for form submit actions

![20240416224014_rec_](https://static-docs.nocobase.com/20240416224014_rec_.gif)

### Table Select Record

Default values for form fields that are currently only used for the Add record action for a table block

#### The default value of the form field for the Add record action

### Parent record (Deprecated)

Only used in association blocks, representing the source record of the association data.

:::warning
"Parent record" is deprecated, it is recommended to use the equivalent "Current popup record" instead.
:::

### Date Variables

Date variables are dynamic placeholders for date and time that can be used across the system to define data range filters in blocks, related field conditions, action linkage rules, and default values for date fields. Depending on the usage scenario, the parsing logic differs:

- In **assignment scenarios** (e.g., default value setting), variables resolve to a specific moment in time.
- In **filtering scenarios** (e.g., date conditions in data ranges), variables resolve to a time range to support flexible filtering.

#### Filtering Scenarios

Common use cases include:

- Setting date field conditions in block data range filters
- Setting date conditions in related field data ranges
- Defining date conditions in action linkage rules

![20250522211606](https://static-docs.nocobase.com/20250522211606.png)

 Supported Variables:

- `Current time`
- `Yesterday`
- `Today`
- `Tomorrow`
- `Last week`
- `This week`
- `Next week`
- `Last month`
- `This month`
- `Next month`
- `Last quarter`
- `This quarter`
- `Next quarter`
- `Last year`
- `This year`
- `Next year`
- `Last 7 days`
- `Next 7 days`
- `Last 30 days`
- `Next 30 days`
- `Last 90 days`
- `Next 90 days`

#### Assignment Scenarios

In assignment contexts, the same date variable will resolve differently depending on the type of the target date field. For example, when assigning the variable `Today`:

- For **Timestamp** and **DateTime with timezone** fields: the variable resolves to a full UTC time string, such as `2024-04-20T16:00:00.000Z`, including timezone info. This is ideal for cross-timezone data synchronization.

- For **DateTime without timezone** fields: the variable resolves to a local time string, such as `2025-04-21 00:00:00`, with no timezone information, which is more suitable for local business logic.

- For **DateOnly** fields: the variable resolves to a pure date string, such as `2025-04-21`, containing only the year, month, and day.

The system intelligently parses the variable based on the field type to ensure correct formatting and prevent data errors or exceptions due to mismatches.

![20250522212802](https://static-docs.nocobase.com/20250522212802.png)

 Common Assignment Use Cases:

- Setting default values for date fields in form blocks
- Setting `value` property of date fields in linkage rules
- Assigning values to date fields in form submission actions

 Supported Variables:

- `Now`
- `Yesterday`
- `Today`
- `Tomorrow`

### URL search params

This variable represents the search parameters in the current page URL. This variable is only available when there is a query string in the page URL. It is more convenient to use it together with [Link](/handbook/ui/actions/types/link).

![20240603200410](https://static-docs.nocobase.com/20240603200410.gif)

### API token

This variable's value is a string that serves as a credential for accessing the NocoBase API. It can be used to authenticate the user's identity.
