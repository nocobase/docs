# Select

## Introduction

The selector offers a streamlined way to select or associate data within the target table, whether you're working with existing records or newly added entries. The dropdown options also support fuzzy search for easier navigation.

![20240409230638](https://static-docs.nocobase.com/20240409230638.png)

## Field Configuration Options

### Quick Creation: Add Data First, Then Select

#### Add via Dropdown Menu

When new data is added to the target table, it will be automatically selected and linked upon form submission. This method is ideal for straightforward data scenarios, such as tagging.

For example, the order table contains a many-to-one relationship field called "Tag"

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240410113002.mp4" type="video/mp4">
</video>

#### Add Popup

This option allows you to configure a new form in a popup window, making it suitable for more complex scenarios, such as product entries.

For instance, the order table includes a many-to-many relationship field named "Products."

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240410113351.mp4" type="video/mp4">
</video>

### Set Data Range

Define the range of data that will appear in the dropdown list.

![20240422204957](https://static-docs.nocobase.com/20240422204957.png)

For more information, refer to [Set Data Range](/handbook/ui/fields/field-settings/data-scope).

### Set Sorting Rules

Determine the order in which the dropdown options are displayed.

Example: Display in descending order based on the production date.

![20240422205340](https://static-docs.nocobase.com/20240422205340.png)

### Allow Multiple Add/Associate

Limit the association in many-to-many relationship fields to a single data item.

### Title Field

![20240422205632](https://static-docs.nocobase.com/20240422205632.gif)

For additional details, see [Title Field](/handbook/ui/fields/field-settings/title-field).

- [Field Components](/handbook/ui/fields/association-field)
