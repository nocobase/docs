### 3. Refinement Stage

**Participant:** Refinement Expert

**Output:** Final Polished Translation

---

## Copy

### Introduction

The copy function offers a convenient way for users to generate new data records based on existing ones. You can choose between two options: direct copy or copy to form and continue filling out. The permissions for these actions align with those for creating new records.

### User Guide

#### Direct Copy

![Direct Copy](https://static-docs.nocobase.com/2c0ac5d1a539de4b72b49b7d966d8c09.png)

- By default, data is copied directly.
- Target Collection: This refers to the destination table where the copied data will be added (in scenarios involving inheritance, the data can be copied to a child table; direct copy only allows adding to the current table).
- Data Fields: These fields specify which data elements will be copied. You can select all fields, and this selection is required.

After setting the configuration, simply click the button to copy the data.

#### Copy to Form and Continue Filling Out

The selected template fields will automatically populate the form with default values, which can then be edited before submission.

You can designate either the current table or a child table as the target table for the copied data (especially in inheritance scenarios).

![Copy to Form](https://static-docs.nocobase.com/a072aa572fd0a0fe643eadf95471da2a.png)

Configure Template Fields: The template fields will populate the form with default values, and only the selected fields will be transferred.

![Template Fields](https://static-docs.nocobase.com/8032fa2025180ade275da55b97774b4d.png)

The "Waybill" (o2m) relationship is copied. You can adjust its field component to a sub-form, which allows you to configure the fields within the sub-form.

![Waybill](https://static-docs.nocobase.com/b13c9287bae8601646727a2e78b81be7.png)

Sync from form fields: Once you’ve configured the form, click the Sync Form Fields button to automatically parse and select all the fields that have been configured (after any modification to the form’s field configuration, you must manually sync it again). After syncing, you can customize the template fields.

![Sync Form Fields](https://static-docs.nocobase.com/156b6d8d741521e63d12e49092414d58.png)

When you initiate the copy operation, a pop-up window will appear, pre-populated with the template data as default values based on the selected template fields. You can modify the data before submitting to complete the copy process.

![Copy Operation](https://static-docs.nocobase.com/1c0a0ae0c59971f48b2282a68831d44b.png)

Below is a full example of configuring a copy operation within an order list:

![Order List Example](https://static-docs.nocobase.com/fa8a89abf0ba136df04b6d0d838eae4e.gif)

### Additional Notes

#### Understanding Copy, Reference, and Preload

Different fields and relationships are handled differently—through copy, reference, or preload. Adjusting the field components in relationships also influences this logic (Select and Record picker handle reference relationships, while Sub-form and Sub-table handle copy relationships).

- Copy
  - Regular fields are copied.
  - hasOne and hasMany relationship fields can only be copied (these relationship types should not use Select or Record picker as field components; instead, use Sub-form or Sub-table).
    - Altering the field components for hasOne and hasMany relationships does not change the logic (copy).
    - In copied relationships, all child fields are selectable.

- Reference
  - belongsTo and belongsToMany are reference types.
  - **References can become copies; for instance, if a field component changes from select to sub-form, the relationship changes from reference to copy (and all child fields become selectable).**

- Preload: Relationship fields within reference fields.
  - These fields are preloaded within reference relationships.
  - Preloaded fields may change to reference or copy if their components are modified.

#### Select All

- All fields, both copied and referenced, are selected.

#### Handling Logic for Template Data

- All foreign keys (FKs) in relationships are filtered out.
- Primary keys (PKs) for copied relationship data are also filtered out.
- Reference and preload relationships include PK fields.

#### Syncing Form Fields

In many cases, configuring forms involves numerous fields, making manual setup cumbersome. To streamline this, the Sync Form Fields button is available. It automatically parses and selects the appropriate fields based on their type and relationship configuration, handling copy, reference, and preload logic. The fields that have already been configured are selected by default.

After modifying the form field configuration, the system doesn’t automatically sync these changes. Therefore, users need to manually click the Sync Form Fields button to update the template configuration with the latest information.

---

This completes the refinement process. The translation is now polished and ready for use. If you have any further requests or adjustments, feel free to ask!
