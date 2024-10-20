# Copy

<PluginInfo name="action-duplicate"></PluginInfo>

## Overview

The copy feature allows users to create new data entries based on existing records. It supports two modes: direct copy and copy to a form for further editing.

## Installation

This is a built-in plugin, so no additional installation is needed.

## Copy Modes

### Direct Duplicate

![](https://static-docs.nocobase.com/2c0ac5d1a539de4b72b49b7d966d8c09.png)

- By default, data is copied using the direct copy mode;
- Target collection: Specifies where the copied data will be stored(For inherited tables, the data can be copied to a sub-table. Direct copy is limited to the current table);
- Data fields: Defines which fields to include in the copy. You can select all or specific fields, required.

Once configured, simply click the button to copy the data.

### Copy Into the Form and Continue to Fill in

The fields defined in the template will be pre-filled as default values in a form, allowing you to modify them before submitting to complete the copy.

You can choose to copy the data to the current table or a sub-table (in inherited cases).

![](https://static-docs.nocobase.com/a072aa572fd0a0fe643eadf95471da2a.png)

Template Field Configuration: Only the selected fields will be pre-filled in the form as default values.

![](https://static-docs.nocobase.com/8032fa2025180ade275da55b97774b4d.png)

The "Waybill" (o2m) relationship is copied, and its field components are set as a sub-form. The fields within the sub-form are configurable.

![](https://static-docs.nocobase.com/b13c9287bae8601646727a2e78b81be7.png)

#### Sync From Form Fields

- The system will automatically interpret the fields already configured in the current form block as template fields;
- After modifying the form block fields (e.g., adjusting relationship components), you can reopen the template configuration and click the "Sync Form" button to ensure consistency between the form and the template.

![](https://static-docs.nocobase.com/156b6d8d741521e63d12e49092414d58.png)

Template data will populate the form with default values, allowing you to adjust them and submit to complete the copy operation.

![](https://static-docs.nocobase.com/1c0a0ae0c59971f48b2282a68831d44b.png)

Below is an example of setting up the copy function for an order list.

![](https://static-docs.nocobase.com/fa8a89abf0ba136df04b6d0d838eae4e.gif)

### Additional Information

#### Copying, Referencing, and Preloading

Different field types (with different relationships) require different handling logic, such as copying, referencing, or preloading. Modifications to relationship field components can also affect this logic (Select and Record picker components handle references, while Sub-form and Sub-table components handle copies).

- Copying:

  - Standard fields are copied;
  - For hasOne and hasMany relationships, fields can only be copied (i.e., these types of relationships cannot use Select or Record picker as components but must use Sub-form, Sub-table, etc.);
    - Adjusting hasOne or hasMany field components won’t change the copying logic;
    - All sub-fields of copied relationships can be selected.

- Referencing

  - belongsTo and belongsToMany relationships are handled as references;
  - **References can transform into copies. For example, if the field component changes from select to sub-form, the relationship turns from a reference to a copy. After this, all subfields become selectable.**

- Preloading: Refers to relationship fields within referenced fields.

  - Fields within referenced relationships are preloaded;
  - Adjustments to preloaded relationship fields can cause them to switch to a reference or copy logic.

#### Select All

- All copy and reference fields are selected by default.

#### Fields Excluded When Selected as Data Templates:
- Primary keys of copied relationships are filtered out, but primary keys of references and preloaded data are not
- Foreign keys
- Fields that must remain unique
- Sorting fields
- Auto-generated fields
- Password field
- Creator
- Creation date
- Last updated by
- Last update date

#### Sync From Form Fields

- The fields already configured in the form block will be automatically parsed as template fields.
- After modifying the form block (e.g., adjusting relationship field components), reopen the template configuration and click the "Sync Form" button to ensure the form aligns with the template.
