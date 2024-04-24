# Form Block

## Introduction

The form block is an essential block for building data input and editing interfaces. It is highly customizable and uses corresponding components based on the data model to display the required fields. Through linkage rules, the form block can dynamically display fields. Additionally, it can be combined with workflows to achieve automated process triggering and data processing, further enhancing work efficiency or implementing logical orchestration.

## Adding Blocks

<video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240416215917.mp4" type="video/mp4">
</video>

## Block Settings

![20240416220148](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240416220148.png)

### Linkage Rules

Control form field behavior through linkage rules.

![20240416220254](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240416220254.png)

For more information, refer to [Linkage Rules](/handbook/ui/blocks/block-settings/linkage-rule).

### Form Data Template (“Add New” Forms Only)

The purpose of the form data template is to simplify the data entry process and improve efficiency. Define data templates by selecting data from the corresponding data table to populate default values in the form. By setting data scope, users can ensure the applicability of template data.

![20240408143719](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408143719.png)

![20240408143812](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408143812.png)

#### Synchronize Form Fields

- Use currently configured form fields as template fields.
- After modifying the form fields, you can reopen the template configuration and click the "Sync Form" button to ensure consistency between the form and the template.

#### For Relationship Fields

- All foreign key fields of relationships will be filtered out.
- Ordinary fields and fields of 'hasOne' and 'hasMany' relationships are copied.
- 'belongsTo' and 'belongsToMany' relationship fields are referenced, which may become copies. For example, after changing from select to sub-form, the relationship changes from reference to copy (after becoming a copy, all fields are optional).

#### Application Scenarios

Scenario Description: An e-commerce platform frequently needs to add new products, and these new products are similar or identical to existing products in many attributes.

Solution: Select an existing product as a template and use its attribute information as the form data template. When creating a new product, users can choose to apply this template, thus quickly copying the attribute information of the template product to the new product, improving the efficiency of entering new products.

- Create a product promotion template

![20240408145855](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408145855.png)

- Quickly enter promotional products

<video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240408150250.mp4" type="video/mp4">
</video>

- [Edit Block Title](/handbook/ui/blocks/block-settings/block-title)
- [Save as Block Template](/handbook/ui/blocks/block-settings/block-template)

## Configure Fields

### Fields in Current Collection

![20240416230739](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240416230739.png)

### Fields in Related Collections

Fields in related tables are read-only in the form and are typically used in conjunction with relationship fields to display multiple field values of related data.

![20240416230811](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240416230811.png)

<video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240416231152.mp4" type="video/mp4">
</video>

Form field configuration options can be found in [Form Fields](/handbook/ui/fields/generic/form-item).

## Configure Actions

![20240417115249](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240417115249.png)

- [Submit](/handbook/ui/actions/types/submit)
- [Save Data](/handbook/ui/actions/types/save-record)
- [Custom Request](/handbook/action-custom-request)
- Submit to Workflow