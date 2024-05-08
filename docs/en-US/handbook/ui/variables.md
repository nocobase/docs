# Variables

## Introduction
Variables can be used when setting block data scope, field default values, linkage rules, and workflows.

Types of variables include:
- Current user
- Current role
- Current form
- Current object
- Current record
- Current popup record
- Selected records in table
- Date variables

## Current User

The user currently logged in.

![20240416154950](https://static-docs.nocobase.com/20240416154950.png)

## Current Role (Identifier)

The role identifier of the current user.

![20240416155100](https://static-docs.nocobase.com/20240416155100.png)

## Current Form

The real-time values of the current form (form.values), only used for form blocks. Use cases include:

- Linkage rules for the current form
- Default values of form fields (effective only when adding new data)
- Data scope setting for relationship fields
- Field value configuration for submission actions

### Linkage Rules for Current Form

![20240416170732_rec_](https://static-docs.nocobase.com/20240416170732_rec_.gif)

### Default Values of Form Fields (Effective Only When Adding New Data)

![20240416171129_rec_](https://static-docs.nocobase.com/20240416171129_rec_.gif)

### Data Scope Setting for Relationship Fields

Used to handle linkage between relationships, for example:

![20240416171743_rec_](https://static-docs.nocobase.com/20240416171743_rec_.gif)

### Field Value Configuration for Submission actions

![20240416171215_rec_](https://static-docs.nocobase.com/20240416171215_rec_.gif)

## Current Object

Represents the value of nested relationship fields.

Example: For to-one relationship, there is only one object.

```js
// Current form
{
  username: 'user1',
  profile: {
    // For fields in the profile, profile is the current object
    age: 30,
  }
}
```

Example: For to-many relationships, there are multiple objects.

```js
// Current form
{
  title: 'title1',
  tags: [
    {
      // For fields in tag, tag1 is the current object
      name: 'tag1',
    },
    {
      // For fields in tag, tag2 is the current object
      name: 'tag2',
    },
  ]
}
```

Only used for field configuration in form blocks for subforms and subtables:

- Default values of subfields
- Data scope for sub-relationship fields

### Default Values of Subfields

![20240416172933_rec_](https://static-docs.nocobase.com/20240416172933_rec_.gif)

### Data Scope for Sub-Relationship Fields

![20240416173043_rec_](https://static-docs.nocobase.com/20240416173043_rec_.gif)

## Current Record

A record refers to a row in a data table, where each row represents a record. The "Current Record" variable is present in the "Row Actions' Linkage Rules" of display-type blocks.

:::warning
To avoid confusion for users, there is no "Current Record" variable in form blocks; please use "Current Form" instead.
:::

### Row Actions' Linkage Rules

![20240416174813_rec_](https://static-docs.nocobase.com/20240416174813_rec_.gif)

## Current Popup Record

Popup plays a very important role in the NocoBase interface configuration.

- Popup of Row Actions: Each popup has a "Current Popup Record" variable, representing the current row record.
- Popup of Relationship fields: Each popup has a "Current Popup Record" variable, representing the currently clicked relationship record.

Blocks inside popups can use the "Current Popup Record" variable, with use cases including:

- Configuring block data scope
- Configuring data scope for relationship fields
- Configuring default values for fields (Form for Adding Data)
- Configuring linkage rules for actions
- Field value configuration for form submission operations

### Configuring Block Data Scope

![20240416224307_rec_](https://static-docs.nocobase.com/20240416224307_rec_.gif)

### Configuring Data Scope for Relationship Fields

![20240416224641_rec_](https://static-docs.nocobase.com/20240416224641_rec_.gif)

### Configuring Default Values for Fields (Form for Adding Data)

![20240416223846_rec_](https://static-docs.nocobase.com/20240416223846_rec_.gif)

### Configuring Linkage Rules for Actions

![20240416223101_rec_](https://static-docs.nocobase.com/20240416223101_rec_.gif)

### Field Value Configuration for Form Submission Actions

![20240416224014_rec_](https://static-docs.nocobase.com/20240416224014_rec_.gif)

## Selected Records in Table

Currently used only for default values of form fields in the "Add record" action of table blocks.

### Default Values of Form Fields in "Add record" Action

## Parent Record (Deprecated)

Restricted to use within relationship blocks, indicating the source record of relationship data.

:::warning
"Parent Record" is deprecated; it is recommended to use the equivalent "Current Popup Record" instead.
:::

## Date Variables

Related variables include:

- Current time
- Yesterday
- Today
- Tomorrow
- Last week
- This week
- Next week
- Last month
- This month
- Next month
- Last quarter
- This quarter
- Next quarter
- Last year
- This year
- Next year
- Last 7 days
- Next 7 days
- Last 30 days
- Next 30 days
- Last 90 days
- Next 90 days

<br />

:::warning
Except for "Current Time," which is a moment, all other date variables represent periods.
:::

Related use cases include:

- Date field condition settings for block data scope
- Date field condition settings for relationship field data scope
- Date field condition settings for actions' linkage rules
- Default value settings for date fields

### Date Field Condition Settings for Block Data Scope

### Date Field Condition Settings for Relationship Field Data Scope

### Date Field Condition Settings for Actions' Linkage Rules

### Default Value Settings for Date Fields