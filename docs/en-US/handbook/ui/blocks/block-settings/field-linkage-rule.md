# Field Linkage Rules

## Introduction

Field linkage rules allow users to dynamically adjust the status of form/detail block fields based on user actions. Currently, the following blocks support field linkage rules:

- [Form Block](/handbook/ui/blocks/data-blocks/form#%E8%81%94%E5%8A%A8%E8%A7%84%E5%88%99)
- [Detail Block](/handbook/ui/blocks/data-blocks/details#%E8%81%94%E5%8A%A8%E8%A7%84%E5%88%99)
- [Sub-form](/handbook/ui/fields/specific/nester) (requires v1.3.17-beta or higher)
- [Sub-table](/handbook/ui/fields/specific/sub-table) (requires v1.3.17-beta or higher)

## Usage Instructions

#### **Linkage Rules in Form Block**

In form blocks, linkage rules can dynamically adjust field behavior based on specific conditions:

- **Control Field Visibility/Hidden**: Determine whether the current field is displayed based on the value of other fields.
- **Set Field as Required**: Dynamically set a field as required or optional based on specific conditions.
- **Assign Values**: Automatically assign values to fields based on conditions.
- **Configure Field Options**: Dynamically update the available options in dropdowns based on other fields in the form.
- **Limit Time Range for Time Fields**: In time fields, limit the selectable time range based on the values of other fields.

#### **Linkage Rules in Detail Block**

In detail blocks, linkage rules are mainly used to dynamically control the visibility and hiding of fields in the detail block.

![20250418161037](https://static-docs.nocobase.com/20250418161037.png)

### Assigning Values

Example: When an order is checked as a supplementary order, the order status is automatically set to "Pending Review."

![20250418161712](https://static-docs.nocobase.com/20250418161712.png)

### Required Fields

Example: When the order status is "Pending Payment", the order amount is required.

![20250418163252](https://static-docs.nocobase.com/20250418163252.png)

### Visibility/Hidden

Example: The payment method is displayed only when the order status is "Pending Payment."

![20250418163733](https://static-docs.nocobase.com/20250418163733.png)

### Options

> **Note**: This feature is supported starting from version `v1.7.0-beta.2`.

It supports dynamically configuring options for fields like `select`, `radioGroup`, `multipleSelect`, `checkboxGroup`, etc. The available options can be linked to the changes in other fields in the form.

Example: "Installment Payment" is available only when the order amount is greater than 10,000.

![20250418164806](https://static-docs.nocobase.com/20250418164806.png)

Linkage effect as shown below:

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20250418164831.mp4" type="video/mp4">
</video>

### Date Scope

> **Note**: This feature is supported starting from version `v1.7.0-beta.2`.

It supports dynamically configuring date ranges for fields such as `date`, `datetime`, `dateOnly`, `datetimeNoTz`, `unixTimestamp`, `createdAt`, `updatedAt`, etc. The selectable date range can automatically adjust based on changes in other fields in the form.

Example: After selecting the order date, the delivery date cannot be earlier than the order date.

![20250418165500](https://static-docs.nocobase.com/20250418165500.png)

Example: The delivery date cannot be earlier than today and cannot be later than the order deadline.

![20250418170520](https://static-docs.nocobase.com/20250418170520.png)

For more information on linkage rules, refer to [Linkage Rules](/handbook/ui/linkage-rule).
