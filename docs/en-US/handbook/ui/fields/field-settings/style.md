# Set Styles

## Introduction
The field style linkage rules are an important tool to enhance user interaction. By dynamically configuring styles, it improves the visual effect of blocks and helps users quickly identify key information. The main style properties include:

- `color`
- `background-color`
- `text-align`
- `font-size`
- `font-weight`
- `font-style`

These are commonly used to highlight key information based on field status, indicate anomalies, or guide visually.

## Usage

Example: Dynamically adjust the color of the order amount field based on the order amount. When the order amount exceeds 1000, set the color to green; when the order amount is less than or equal to 1000, set the color to red.

![20250418171434](https://static-docs.nocobase.com/20250418171434.png)

- **Rule 1**: Set the condition to **order amount greater than 10000**, and the field color will be green.

![20250418171640](https://static-docs.nocobase.com/20250418171640.png)

- **Rule 2**: Set the condition to **order amount less than or equal to 1000**, and the field color will be red.

![20250418171900](https://static-docs.nocobase.com/20250418171900.png)

For more details, refer to [Linkage Rules](/handbook/ui/linkage-rule).
