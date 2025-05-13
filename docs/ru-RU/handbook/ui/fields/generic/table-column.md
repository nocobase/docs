# Table Fields

## Introduction

Table fields offer a robust set of features beyond basic column width adjustment, field titles, and sorting. They provide enhanced display configurations for specialized fields such as date fields, relationship fields, and numerical fields, allowing for a more tailored and informative data presentation.

![20240511140644](https://static-docs.nocobase.com/20240511140644.png)

## Field Configuration Options

### Date Field Formatting

![20240417114116](https://static-docs.nocobase.com/20240417114116.png)

For comprehensive information on date formatting options, consult the [Date Formatting](/handbook/ui/fields/specific/date-picker) guide.

### Numerical Field Formatting

![20240417215229](https://static-docs.nocobase.com/20240417215229.png)

The numerical field formatting feature offers versatile options including:
- Simple unit conversion
- Thousands separators
- Prefixes and suffixes
- Precision control
- Scientific notation

![20240417215425](https://static-docs.nocobase.com/20240417215425.png)

For an in-depth exploration of numerical formatting capabilities, refer to the [Number Formatting](/handbook/ui/fields/field-settings/number-format) documentation.

### Sorting

The current sorting functionality allows for single-column sorting within the current page data. Note that sorting by relationship fields is not supported in this version.

![20240422115501](https://static-docs.nocobase.com/20240422115501.png)

### Fixed Columns

![20240511140524](https://static-docs.nocobase.com/20240511140524.png)

### Field Components

Certain fields offer the flexibility to switch between different component types. For instance, the `URL` component can be toggled to function as a `Preview` component.

![20240806165152](https://static-docs.nocobase.com/20240806165152.png)

For developers looking to expand the range of available components, the [Extending Value Field Components](/plugin-samples/field/value) guide provides valuable insights.

### Styles

The styling feature enables dynamic configuration of column colors and background colors based on specified conditions. To illustrate this powerful functionality, let's walk through an example using a bank transaction details table:

Scenario: We want to visually differentiate between income (positive amounts) and expenses (negative amounts) in the transaction amount column.

Step-by-step guide:

1. Access the field settings for the transaction amount column and navigate to the Style option.
![style-menu-2024-08-08-18-23-13](https://static-docs.nocobase.com/style-menu-2024-08-08-18-23-13.png)

2. Create the first conditional rule: For positive transactions (income), set the field color to green.
   - Click "Add Linkage Rule"
   - Configure: When transaction amount > 0, apply green color
![style-green-2024-08-08-18-33-34](https://static-docs.nocobase.com/style-green-2024-08-08-18-33-34.png)

3. Establish the second conditional rule: For negative transactions (expenses), set the field color to red.
   - Click "Add Linkage Rule" again
   - Configure: When transaction amount < 0, apply red color
![style-red-2024-08-08-18-35-01](https://static-docs.nocobase.com/style-red-2024-08-08-18-35-01.png)

The result is a visually intuitive representation of financial data:
![result-2024-08-08-18-38-05](https://static-docs.nocobase.com/result-2024-08-08-18-38-05.png)
