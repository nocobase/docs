# Linkage Rules

## Introduction

In NocoBase, linkage rules are a mechanism for controlling the interactive behavior of front-end interface elements. It allows users to adjust the display and behavior logic of blocks, fields, and operations based on different conditions, enabling flexible, low-code interactive experiences. This feature is continuously being iterated and optimized.

By configuring linkage rules, you can achieve the following:

- Hide/show certain blocks based on the current user role, e.g., the admin can view full information blocks, while regular users can only see basic information blocks.
- Automatically fill or reset other field values when a form selects a particular option.
- Disable certain input fields when a form selects a particular option.
- Dynamically set field background colors, font sizes, font weights, etc., and highlight fields when a condition is met.
- Control whether operation buttons are visible or clickable based on certain conditions.

## Condition Configuration

![20250417214217](https://static-docs.nocobase.com/20250417214217.png)

### Left-side Variables

The left-side variables in a condition are used to define the "object being judged" in the linkage rule, i.e., the condition will evaluate this variable’s value to determine whether the linkage behavior should be triggered.

Available variables include:

- Context fields, such as `「Current Form/xxx」`, `「Current Record/xxx」`, `「Current Popup Record/xxx」`, etc.;
- System-wide variables, such as `Current User`, `Current Role`, etc., suitable for dynamically controlling based on user identity, permissions, etc.

> ✅ The available left-side variables are determined by the context of the block, so choose variables according to business needs:
> 
> - `Current User` represents the information of the currently logged-in user;
> - `Current Form` represents the real-time input values in the form;
> - `Current Record` represents saved record values, such as rows in a table.

### Operators

Operators are used to set the logical comparison between the left-side variable and the right-side value. Different types of left-side variables support different operators. Common operators include:

- **Text type**: `$includes`, `$eq`, `$ne`, `$empty`, `$notEmpty`, etc.
- **Numeric type**: `$eq`, `$gt`, `$lt`, `$gte`, `$lte`, etc.
- **Boolean type**: `$isTruly`, `$isFalsy`
- **Array type**: `$match`, `$anyOf`, `$empty`, `$notEmpty`, etc.

> ✅ The system will automatically recommend the available operators based on the type of the left-side variable to ensure logical configuration.

### Right-side Value

The right-side value is used for comparison with the left-side variable, serving as the reference value for determining whether the condition is met.

Supported content includes:

- Constant values: fixed numeric values, text, dates, etc.;
- Context variables: other fields from the current form, current records, etc.;
- System variables: such as the current user, current time, current role, etc.

> ✅ The system will adapt the input method for the right-side value based on the type of the left-side variable, such as:
> 
> - If the left-side variable is a “selection field”, a corresponding options selector will be displayed;
> - If the left-side variable is a “date field”, a date picker will be shown;
> - If the left-side variable is a “text field”, a text input box will appear.

> 💡 By flexibly using the right-side values (especially dynamic variables), you can build linkage logic based on the current user, current data state, and context environment, enabling a richer interactive experience.

## Rule Execution Logic

### Condition Trigger

When the condition in a rule is met (optional), the property modification operations below are automatically executed. If no condition is set, the rule is considered always met, and the property modification will be executed by default.

### Multiple Rules

You can configure multiple linkage rules for a form. When multiple rules are satisfied, the system will execute them in the order they are configured, from first to last. The final result will be based on the last rule executed.
Example: Rule 1 disables a field, Rule 2 makes the field editable. If both rules are met, the field will become "editable".

> The execution order of multiple rules is crucial. Make sure to clarify their priorities and interrelationships to avoid rule conflicts.

## Rule Management

Each rule can be managed with the following options:

- Custom Naming: Set an easy-to-understand name for the rule for better management and recognition.
- Sorting: Adjust the order of rules based on execution priority to ensure that the system processes them correctly.
- Deletion: Remove rules that are no longer needed.
- Enable/Disable: Temporarily disable a rule without deleting it. This is useful for situations where a rule needs to be paused temporarily.
- Copy Rule: Create new rules by copying existing ones, avoiding redundant configuration.

## About Variables

In field assignment and condition configuration, both constants and variables are supported. The variable list varies depending on the block's location, and choosing and using variables wisely can help meet business requirements more flexibly. For more information about variables, refer to [Variables](/handbook/ui/variables).

## Block Linkage Rules (Feature Pending Release)

> **Note**: This feature **is supported starting from v1.7.0-beta.xx versions**

Block linkage rules allow dynamically controlling the display of blocks based on system variables (such as current user, current role) or contextual variables (such as current popup record). For example, an admin can view the full order information, while a regular user can only see specific order details. By configuring two order blocks and setting block linkage rules, this effect can be achieved.

👉 For more details, check: [Block/Block Linkage Rules](/handbook/ui/blocks/block-settings/block-linkage-rule)

## Field Linkage Rules

Field linkage rules are used to dynamically adjust the status of fields in a form or detail block based on user actions, including:

- Control the **visibility** of fields
- Set fields as **required**
- **Assign values**
- Configure the **options range** of option fields
- Limit the **available time range** for time fields

👉 For more details, check: [Block/Field Linkage Rules](/handbook/ui/blocks/block-settings/field-linkage-rule)

## Operation Linkage Rules

Operation linkage rules currently support controlling operation behaviors (e.g., hide/disable) based on current record values and global variables.

👉 For more details, check: [Operation/Linkage Rules](/handbook/ui/actions/action-settings/linkage-rule)

## Field Style Linkage Rules

Field style linkage rules allow dynamically setting field style properties based on conditions, mainly including:

- `color`
- `background-color`
- `text-align`
- `font-size`
- `font-weight`
- `font-style`

These are commonly used to highlight key information based on field status, indicate anomalies, or provide visual guidance.

👉 For more details, check: [Field/Style](/handbook/ui/fields/field-settings/style)
