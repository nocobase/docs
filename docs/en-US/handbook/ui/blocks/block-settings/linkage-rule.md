# Linkage Rules

## Introduction

Block linkage rules empower dynamic form adjustments based on user interactions. Form block linkage rules offer the flexibility to dynamically control field states or assign values, while detail block linkage rules provide the ability to dynamically manage field visibility.

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

- When "IsPromotion" is true, the promotional price field is displayed and required.

![20240408115240](https://static-docs.nocobase.com/20240408115240.png)

- When "IsPromotion" is false, the promotional price field is hidden and not required.

![20240408115338](https://static-docs.nocobase.com/20240408115338.png)
