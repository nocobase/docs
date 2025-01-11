# Association Field Component

## Introduction

NocoBase's association field components are designed to help users better display and handle associated data. Regardless of the type of relationship, these components are flexible and universal. Users can select and configure these components according to specific needs.

### Dropdown Selector

All association fields whose target collection is not a file collection, the default component in the edit state is a drop-down selector. The drop-down option displays the value of the title field, which is suitable for quickly selecting associated data by displaying a key field information.

![20240429205659](https://static-docs.nocobase.com/20240429205659.png)

For more information, refer to [Dropdown Selector](/handbook/ui/fields/specific/select)

### Record Picker

The record picker presents data in the form of a pop-up window. Users can configure relationship fields (including relationship's relationship fields) in the record selector, allowing for more accurate selection of associated data.

![20240429210824](https://static-docs.nocobase.com/20240429210824.png)

For more information, refer to [Record Picker](/handbook/ui/fields/specific/picker)

### Cascade Selector

The cascade selector is suitable for relationship fields where the target collection is a tree collection. It allows users to select data according to the hierarchical structure of the tree collection data. It is applicable to scenarios such as province-city-district, industry classification, product attributes, and other cascade selection scenarios.

![20240429213256](https://static-docs.nocobase.com/20240429213256.png)

For more information, refer to [Cascade Selector](/handbook/ui/fields/specific/cascade-select)

### Sub-Form

When dealing with more complex relationship data, using a dropdown selector or data selector can be inconvenient. In this case, users need to frequently open pop-up windows. For this scenario, a sub-form can be used. Users can directly maintain relationship fields on the current page or current pop-up, without repeatedly opening new pop-ups, making the operation process smoother. Multi-level relationships are presented in the form of nested forms.

![20240429215953](https://static-docs.nocobase.com/20240429215953.png)

For more information, refer to [Sub-Form](/handbook/ui/fields/specific/nester)

### Sub-Form (Pop-up)

When the relationship level is deep and there are many data fields, the sub-form layout may appear lengthy, making it difficult to effectively present the primary and secondary relationship of the form. For this scenario, you can use a sub-form (pop-up). Users can move some non-key or infrequently used relationship fields from the main form to an independent pop-up for filling out, making the main form more concise and clear.

The Sub-Form (Pop-up) not only simplifies the form layout, but also solves the problem of not being able to directly fill in relationship field data in the sub-table.

![20240429222237](https://static-docs.nocobase.com/20240429222237.gif)

For more information, refer to [Sub-Form (Pop-up)](/handbook/ui/fields/specific/popover-nester)

### Sub-Table

The sub-table presents one-to-many or many-to-many relationship records in the form of a table. It provides a clear, structured way to display and manage associated data, supporting the creation of new data in batches or the selection of existing data for association.

![20240429222505](https://static-docs.nocobase.com/20240429222505.png)

For more information, refer to [Sub-Table](/handbook/ui/fields/specific/sub-table)

### Sub-Detail

The sub-detail are the corresponding components of the sub-form in reading mode, and the multi-level relational data is displayed in a nested form.


![20240822223651](https://static-docs.nocobase.com/20240822223651.png)

For more information, refer to [Sub-Detail](/handbook/ui/fields/specific/sub-detail)


### File Manager

The file manager is a relationship field component specifically for dealing with relationship target collections as file collections.

![20240429222753](https://static-docs.nocobase.com/20240429222753.png)

For more information, refer to [File Manager](/handbook/ui/fields/specific/file-manager)

### Title

The title component is a relationship field component used in reading mode, displaying key information of associated data through the configuration of the title field.

![20240429223646](https://static-docs.nocobase.com/20240429223646.png)

For more information, refer to [Title](/handbook/ui/fields/specific/title)

### Tag

The tag component is a relationship field component used in reading mode. Using the tag component in data presentation can better classify and identify relationship data. It needs to configure the title field and color field (selected from the target table fields).

![20240429225054](https://static-docs.nocobase.com/20240429225054.png)

For more information, refer to [Tag](/handbook/ui/fields/specific/tag)