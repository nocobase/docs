# Date Calculation

<PluginInfo name="workflow-date-calculation" link="/handbook/workflow-date-calculation" commercial="true"></PluginInfo>

The Date Calculation node offers a set of nine powerful functions, enabling operations such as adding or subtracting time periods, formatting time strings, and converting duration units. Each function is designed with specific input and output value types, and can seamlessly integrate the results from other nodes as parameter variables. By chaining these functions through a calculation pipeline, you can achieve the desired output with precision.

## User Manual

### Creating a Node

To add a "Date Calculation" node in the workflow configuration interface, simply click the plus (“+”) button within the process:

![Create Node for Date Calculation](https://static-docs.nocobase.com/[图片].png)

### Node Configuration

![Node Configuration for Date Calculation](https://static-docs.nocobase.com/20240817184423.png)

#### Input Value

Input values can be either variables or date constants. Variables might include data that triggers the workflow or results from upstream nodes. Constants can be any selected date.

#### Input Value Type

The input value type determines how the input will be processed and is categorized into two types:

* Date Type: This includes any input that can be converted into a date-time format, such as numeric timestamps or strings representing time.
* Number Type: The input value type influences the selection of time calculation steps, so it’s crucial to choose the correct type.

#### Calculation Steps

Each calculation step consists of a specific function and its parameter configuration. The pipeline design allows the output of one function to feed directly into the next, enabling a sequence of time calculations and conversions.

The output type after each step is fixed, which in turn determines the functions available for the next step. If the types are compatible, the calculation continues; if not, the result of the current step becomes the final output of the node.

### Calculation Functions

#### Add a range

- Accepted Input Value Type: Date
- Parameters:
  - The amount to add, which can be a numeric value or a variable from within the node.
  - The time unit (e.g., days, hours).
- Output Value Type: Date
- Example: If the input value is `2024-7-15 00:00:00`, the amount is `1`, and the unit is "days," the output will be `2024-7-16 00:00:00`.

#### Subtract a range

- Accepted Input Value Type: Date
- Parameters:
  - The amount to subtract, which can be a numeric value or a variable from within the node.
  - The time unit (e.g., days, hours).
- Output Value Type: Date
- Example: If the input value is `2024-7-15 00:00:00`, the amount is `1`, and the unit is "days," the output will be `2024-7-14 00:00:00`.

#### Get difference with another data value

- Accepted Input Value Type: Date
- Parameters:
  - The date for comparison, which can be a constant or a variable in the workflow context.
  - The time unit (e.g., days, hours).
  - Whether to take the absolute value.
  - Rounding options: retain decimals, round off, round up, or round down.
- Output Value Type: Numeric
- Example: If the input value is `2024-7-15 00:00:00`, and you compare it with `2024-7-16 06:00:00`, using "days" as the unit, without taking the absolute value and retaining decimals, the output will be `-1.25`.

:::info{title=Note}
If both absolute value and rounding are selected, the absolute value is applied first, followed by rounding.
:::

#### Get value on specific unit of input date

- Accepted Input Value Type: Date
- Parameters:
  - The time unit (e.g., days, hours).
- Output Value Type: Numeric
- Example: If the input value is `2024-7-15 00:00:00` and the unit is "days," the output will be `15`.

#### Set to time of unit start

- Accepted Input Value Type: Date
- Parameters:
  - The time unit (e.g., days, hours).
- Output Value Type: Date
- Example: If the input value is `2024-7-15 14:26:30` and the unit is "days," the output will be `2024-7-15 00:00:00`.

#### Set to time of unit end

- Accepted Input Value Type: Date
- Parameters:
  - The time unit (e.g., days, hours).
- Output Value Type: Date
- Example: If the input value is `2024-7-15 14:26:30` and the unit is "days," the output will be `2024-7-15 23:59:59`.

#### Is leap year

- Accepted Input Value Type: Date
- Parameters: None
- Output Value Type: Boolean
- Example: If the input value is `2024-7-15 14:26:30`, the output will be `true`.

#### Format to String

- Accepted Input Value Type: Date
- Parameters:
  - The format, as specified in [Day.js: Format](https://day.js.org/docs/zh-CN/display/format).
- Output Value Type: String
- Example: If the input value is `2024-7-15 14:26:30` and the format is `the time is YYYY/MM/DD HH:mm:ss`, the output will be `the time is 2024/07/15 14:26:30`.

#### Convert unit

- Accepted Input Value Type: Numeric
- Parameters:
  - The original time unit.
  - The target time unit.
  - Rounding options: retain decimals, round off, round up, or round down.
- Output Value Type: Numeric
- Example: If the input value is `2`, the original unit is "weeks," the target unit is "days," and no decimals are retained, the output will be `14`.

### Example

![Example of Date Calculation Node](https://static-docs.nocobase.com/20240817184137.png)

Imagine a promotional activity where you want to automatically set an end time for the promotion when a product is created. This end time would be the last day of the following week at 23:59:59. To achieve this, you can create two time functions and link them in a pipeline:

1. Calculate the date for the following week.
2. Adjust the date to the last day of that week at 23:59:59.

By doing this, you'll generate the desired time value, which can then be passed to the next node, such as a data table modification node, to set the promotion end time in the database.
