# Linkage Rules

## Introduction

Linkage rules allow dynamic adjustment of form field states based on user behavior, such as Visible/Hidden, Required/Not Required, and value assignment. Currently, the following components support configuring linkage rules: [Form Blocks](https://docs.nocobase.com/handbook/ui/blocks/data-blocks/form#linkage-rules), [Details Blocks](https://docs.nocobase.com/handbook/ui/blocks/data-blocks/details#linkage-rules), [Action Buttons](https://docs.nocobase.com/handbook/ui/actions/action-settings/linkage-rule), [Sub Forms](https://docs.nocobase.com/handbook/ui/fields/specific/nester) (requires v1.3.17-beta or above), and [Sub Tables](https://docs.nocobase.com/handbook/ui/fields/specific/sub-table) (requires v1.3.17-beta or above).


![20240408100711](https://static-docs.nocobase.com/20240408100711.png)

![20240408100757](https://static-docs.nocobase.com/20240408100757.png)

## Usage Guidelines

1. Field Configuration: Ensure all form fields utilized in the rules are properly configured to guarantee rule effectiveness and accuracy.

2. Conditional Activation: When rule conditions are satisfied (optional), the system automatically executes the specified property modifications.

3. Multi-Rule Support: Forms can accommodate multiple linkage rules. When several rule conditions are simultaneously met, the system executes the results sequentially, following the order of rule definition.

4. Rule Management: Enjoy comprehensive control with features for custom naming, sorting, deleting, enabling, disabling, and duplicating rules.

5. Constant and Variable Integration: Leverage constants or variables in field assignments and condition configurations. For detailed information on variables, consult the [Variables](/handbook/ui/variables) section.

### Value Assignment

Illustration: Automatically evaluate and designate customer levels (e.g., A+, A, A-) based on projected annual purchase amounts.

- Estimated annual purchase exceeding 20,000: Customer classified as A+.

![20240408102241](https://static-docs.nocobase.com/20240408102241.png)

- Estimated annual purchase between 10,000 and 20,000 (inclusive): Customer classified as A.

![20240408102303](https://static-docs.nocobase.com/20240408102303.png)

- Estimated annual purchase below 10,000: Customer classified as A-.

![20240408102324](https://static-docs.nocobase.com/20240408102324.png)

### Field Requirement

Illustration: Dynamically adjust the requirement status of the product's promotional price based on its promotion status.

- When "IsPromotion" is active, promotional price becomes mandatory.

![20240408105031](https://static-docs.nocobase.com/20240408105031.png)

- When "IsPromotion" is inactive, promotional price becomes optional.

![20240408105115](https://static-docs.nocobase.com/20240408105115.png)

### Visibility Control

Illustration: Manage the visibility of the promotional price input field based on the product's promotion status.

- When "IsPromotion" is active, the promotional price field is displayed and required.

![20240408115240](https://static-docs.nocobase.com/20240408115240.png)

- When "IsPromotion" is inactive, the promotional price field is hidden and not required.

![20240408115338](https://static-docs.nocobase.com/20240408115338.png)
