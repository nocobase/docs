# Mask

## Introduction

The mask field component allows you to show field values in a masked format. This is particularly useful for showing field values that contain sensitive information, such as passwords, credit card numbers, and more.

## Field Configuration Options

![Field Configuration Options](https://static-docs.nocobase.com/Snipaste_2024-10-17_21-46-06.png)

- [Field Component](/handbook/ui/fields/field-settings/field-component): Switch between the default field component and the mask field component.
- Mask settings: Configure the mask rules and permissions for the field.

## Mask Settings

![Mask settings](https://static-docs.nocobase.com/20241017215148.png)

### Mask rules

#### Predefined Masking Rules

- `******`: The data is masked as six asterisks.
- `***abc`: The data is masked as three asterisks followed by the last three characters of the original data.
- `**ab**`: The data is masked with two asterisks at the beginning and end, showing the middle two characters of the original data.
- `abc***`: The data is masked as the first three characters of the original data followed by three asterisks.

#### Custom Masking Rules

If predefined rules do not meet your needs, you can choose Custom to define your own masking rule.
Custom rules follow these conventions:

- `*` represents a placeholder, which outputs a specific number of \* characters when masked.
- Other characters means any other original data.

Examples:

- `a*a*a*` will mask `123456` as `1*3*5*`
- `a****a` will mask `123456789` as `1****9`
- `ab***abc` will mask `asdfghjkl` as `as***jkl`

### Roles can see the original value

You can configure which roles can see the original value of the field. By default, only the root user can see the original value.

:::info{title="INFO"}
When the field is in edit mode, the original value is always visible regardless of the role settings.
:::
