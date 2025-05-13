# Filter Blocks

The filter block within a chart block allows for dynamic filtering across multiple charts within the same block.

## Enabling/Disabling

To enable or disable a filter block, navigate within the chart block and select "Add Block" - "Filter."

![](https://static-docs.nocobase.com/d0e6b116952fa6b719acb0f858b432c3.png)

## Configuring Fields

### Collection Fields

For charts within the current chart block, you can create a filter form field by selecting the relevant fields directly from the associated Collection.

![](https://static-docs.nocobase.com/e2ef150e9beb8c78004d9049a7536219.png)

The form fields can be configured as follows:

![](https://static-docs.nocobase.com/215f0b996e69bf2d5b99746e6d521c3d.png)

- Edit field title.
- Edit description.
- Define the operator to be used when applying the filter.  
  ![](https://static-docs.nocobase.com/d6a593a330d27da4ea78124dfdb8450d.png)

- Assign a default value to the field, utilizing variables if needed. The variable’s data type must align with the data type of the current field.
  ![](https://static-docs.nocobase.com/37dee4008f3283db24d491fb8f0404fa.png)

  For instance:

  - Set the default value to the current user ID to automatically filter data for the current user when the page loads.
  - Set the default value to the current date to automatically filter data for the current date when the page loads.

### Custom Fields

In certain scenarios, you may need to use a single filter field to filter different fields across various tables. For example, a single date field might be used to filter different date fields in different tables. In such cases, you can opt to create a custom field.

![](https://static-docs.nocobase.com/87544594246453d175ef265030c0801a.png)

When adding a custom field, you'll need to specify the field title, choose the appropriate field component, and configure it accordingly. Additionally, you can select a field from the data tables used in the current block to apply that field's metadata configuration directly, avoiding redundancy.

![](https://static-docs.nocobase.com/ef09136d674d4b7356e819350bcac804.png)

To implement a custom filter field, open the configuration of the relevant chart, then in the data query filter settings, add filter conditions using variables from the "Current filter." Ensure that the type of the field being filtered matches the type of the custom filter field.

![](https://static-docs.nocobase.com/f9f2487c4da4b2024af1556743beab6c.png)

For custom fields, you can also set the title, description, and default value.

![](https://static-docs.nocobase.com/4a8feb12404f5cc5e74d589263307e5a.png)

## Configuring Block Actions

- **Filter:** Apply the filter conditions.
- **Reset:** Reset the filter form.
- **Collapse / Expand:** Collapse into a single row or expand into multiple rows.

![](https://static-docs.nocobase.com/8619ac90fa045b3a9c6d6610f7be1a81.png)
