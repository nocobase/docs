# Mask

<PluginInfo commercial="true" name="field-component-mask"></PluginInfo>

## Overview

The Mask Field Component allows you to display field values in a masked format, which is particularly useful for handling sensitive information like passwords or credit card numbers.

## Installation

This is a commercial plugin.

## Field Configuration Options

![Field Configuration Options](https://static-docs.nocobase.com/Solution/202410222334271729611267.png)

- [Field Component](/handbook/ui/fields/field-settings/field-component): Switch between the default field component and the mask field component.
- Mask Settings: Configure mask rules and set permissions for the field.

## Mask Settings

![Mask Settings](https://static-docs.nocobase.com/Solution/202410222340521729611652.png)

### Mask Rules

#### Predefined Mask Rules

- `******`: Masks the data entirely with six asterisks.
- `***abc`: Masks the data with three asterisks followed by the last three characters of the original data.
- `**ab**`: Masks the data with two asterisks at both the beginning and end, revealing the middle two characters of the original data.
- `abc***`: Masks the data by showing the first three characters followed by three asterisks.

#### Custom Mask Rules

If the predefined mask rules don't meet your needs, you can select `Custom` to define your own mask rules. 
The syntax for custom mask rules is as follows:

- `*` represents a placeholder, and the mask will display a specified number of `*`.
- All other characters will display as they appear in the original data.

Examples:

- `a*a*a*`: Masks the original data `123456` as `1*3*5*`.
- `a****a`: Masks the original data `123456789` as `1****9`.
- `ab***abc`: Masks the original data `asdfghjkl` as `as***jkl`.

### Roles Authorized to View Original Values

You can specify which user roles are permitted to view the original, unmasked field values. By default, only the root user has this permission.

:::info{title="INFO"}
When the field is in edit mode, the original value is always visible, regardless of role settings.
:::
