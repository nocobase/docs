# Duplicate

The Duplicate operation enables users to duplicate a row of data to create new records, offering two methods: **direct duplicate** and **copy into the form and continue to fill in**.

## Direct Duplicate

![Direct Duplicate](https://static-docs.nocobase.com/2c0ac5d1a539de4b72b49b7d966d8c09.png)

- By default, the data is copied directly.
- Target Data Table: This is the table where the copied data will be added. In cases involving inheritance, it can be copied to a sub-table; however, direct Duplicate only adds data to the current table.
- Template Fields: These specify the fields to be copied, allowing for full selection. This configuration is mandatory.

Once the configuration is complete, simply click the button to duplicate the data.

## Copy into the form and continue to fill in

The template fields you configure will populate the form with default values, which can be modified before submission.

You can choose either the current table or a sub-table as the target table for adding the copied data.

![Copy to Form](https://static-docs.nocobase.com/a072aa572fd0a0fe643eadf95471da2a.png)

Configure Template Fields: Template fields will serve as default values in the form, only including the values of selected fields.

![Configure Template Fields](https://static-docs.nocobase.com/8032fa2025180ade275da55b97774b4d.png)

The "Waybill" (o2m) relationship is duplicated. Adjust its field component to a sub-form, where you can configure the sub-form fields.

![Waybill Relationship](https://static-docs.nocobase.com/b13c9287bae8601646727a2e78b81be7.png)

Sync Form Fields: After configuring the form, click the sync form fields button. This will automatically select all configured fields within the form (note: each time the form field configuration is modified, it must be manually synced again). After syncing, you can further customize the template fields.

![Sync Form Fields](https://static-docs.nocobase.com/156b6d8d741521e63d12e49092414d58.png)

Clicking the Duplicate button will open a pop-up window, where the template data will populate the form with default values. You can then modify the data before submission to complete the copy process.

![Duplicate Operation Example](https://static-docs.nocobase.com/1c0a0ae0c59971f48b2282a68831d44b.png)

The complete example below demonstrates how to configure the duplicate operation within an order list.

![Order List duplicate Example](https://static-docs.nocobase.com/fa8a89abf0ba136df04b6d0d838eae4e.gif)

## Explanation of Different, Reference, and Preload

Different fields (with different relationship types) follow distinct processing logics, such as duplicate, reference, and preload. Adjusting field components within relationship fields also influences the processing logic. For example, Select and Record Picker handle reference relationships, while Sub-form and Sub-table manage copy relationships.

- Duplicate

  - Standard fields are duplicated.
  - The relationship fields of hasOne and hasMany can only be copied (i.e., these types of relationship fields cannot use Select or Record Picker as field components; instead, Sub-form or Sub-table should be used).
    - Changes to the field components of hasOne and hasMany do not alter the processing logic (copy).
    - In copied relationship fields, all child fields are selectable.

- Reference

  - belongsTo and belongsToMany are references.
  - **References can be converted into copies. For instance, if the field component is changed from select to sub-form, the relationship transitions from reference to copy (after conversion, all child fields become selectable).**

- Preload: Relationship fields within referenced fields

  - These relationship fields are preloaded.
  - Preloaded relationship fields may shift to reference or copy following adjustments to the field components.

## About Select All

- All copy fields are selected.
- All reference fields are selected.

## Template Data Processing Logic

- All foreign key fields in relationships are filtered out.
- For copied relationships, primary key fields are also filtered out.
- References and preloads retain their primary key fields.

## Understanding Sync Form Fields

In most cases, form configurations involve a large number of fields. Managing such complex forms manually can be cumbersome. To streamline this process, the sync form fields button has been introduced. This feature automatically analyzes the form field configurations and applies the appropriate copy logic—whether copy, reference, or preload—based on the field types and relationship field components. Fields that have already been configured are selected by default.

After any modifications to the form field configurations, the system does not automatically update these changes. Therefore, users need to manually click the sync form fields button to apply the latest configuration to the template settings.
