# Form Block

## Introduction

The form block is an essential block for building data input and editing interfaces. It is highly customizable and uses corresponding components based on the data model to display the required fields. Through linkage rules, the form block can dynamically display fields. Additionally, it can be combined with workflows to achieve automated process triggering and data processing, further enhancing work efficiency or implementing logical orchestration.

## Adding Blocks

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240416215917.mp4" type="video/mp4">
</video>

## Block Settings

![20240416220148](https://static-docs.nocobase.com/20240416220148.png)

### Linkage Rules

Control form field behavior through linkage rules.

![20240416220254](https://static-docs.nocobase.com/20240416220254.png)

For more information, refer to [Linkage Rules](/handbook/ui/blocks/block-settings/field-linkage-rule).

### Form Data Templates (Supports Form for Adding New Data Only)

The purpose of the form data templates is to simplify the data entry process and improve efficiency. By filtering out a single piece or a group of records as a template from the data range, the selected target data template will be populated as the default values in the form.

![20240408143719](https://static-docs.nocobase.com/20240408143719.png)

![20240424143911](https://static-docs.nocobase.com/20240424143911.png)

1. Filter out a single piece or a group of records as template data.
2. Select the title field to identify the template data.
3. Check the template fields, and the selected fields will be automatically populated into the form.

#### Synchronize From Form Fields

- Automatically parse the configured fields in the current form block as template fields.
- If there are subsequent modifications to the form block fields (such as adjustments to association field components), you can reopen the template configuration and click the sync form button to ensure consistency between the form and the template.

#### The following fields' data will be filtered out for the selected data template record:
- Primary Key
- Foreign Key
- Fields disallowing duplicates
- Sort fields
- Sequence fields
- Password
- Created by
- Created at
- Last updated by
- Last updated at

#### For Association Fields
- Regular fields and hasOne and hasMany relationship fields are copied.
- belongsTo and belongsToMany relationship fields are referenced, and references may become copies. For example, after changing from select to sub-form, the relationship changes from reference to copy (after becoming a copy, all fields are optional).

#### Example Scenarios

Scenario Description: An e-commerce platform needs to frequently add new products, and these new products are similar or identical to existing products in many attributes.

Solution: Select an existing product as a template and use its attribute information as the form data template. When creating a new product, users can choose to apply this template, thus quickly copying the attribute information of the template product to the new product, improving the efficiency of entering new products.

- Create a product promotion template

![20240408145855](https://static-docs.nocobase.com/20240408145855.png)

- Create promotional products quickly

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240408150250.mp4" type="video/mp4">
</video>

- [Edit Block Title](/handbook/ui/blocks/block-settings/block-title)
- [Save as Block Template](/handbook/block-template)

## Configure Fields

### Fields in Current Collection

![20240416230739](https://static-docs.nocobase.com/20240416230739.png)

### Fields in Related Collections

Fields in related tables are read-only in the form and are typically used in conjunction with relationship fields to display multiple field values of related data.

![20240416230811](https://static-docs.nocobase.com/20240416230811.png)

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240416231152.mp4" type="video/mp4">
</video>

Form field configuration options can be found in [Form Fields](/handbook/ui/fields/generic/form-item).

## Configure Actions

![20240417115249](https://static-docs.nocobase.com/20240417115249.png)

- [Submit](/handbook/ui/actions/types/submit)
- [Save Data](/handbook/ui/actions/types/save-record)
- [Custom Request](/handbook/action-custom-request)
- [Trigger workflow](/handbook/workflow/manual/triggers/cutom-action-trigger)
