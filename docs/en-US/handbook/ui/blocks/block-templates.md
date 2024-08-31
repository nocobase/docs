# Block Template

<PluginInfo name="ui-schema-storage"></PluginInfo>

## Introduction

Save a data block as a template, enabling you to effortlessly copy or reference this template when adding new blocks in the future. For instance, if a form for a data table is used both for adding new records and editing existing ones, you can save this form as a template and reference it in both the data entry and editing interfaces.

## How to Add and Use a Template?

1. Save as block template.

![](https://static-docs.nocobase.com/b7718cea8784587d53524ade3c5b0a82.png)

2. When adding a block, choose **Reference template** or **Duplicate template**.

![](https://static-docs.nocobase.com/135df7344e0f3080199e4bb1071c2fa6.png)

## Copying vs. Referencing: What's the Difference?

Copying creates an entirely new block based on the block template, allowing for adjustments without affecting the original template. Referencing, on the other hand, directly uses the block template. Any changes made to a referenced block will modify the template itself, affecting all blocks that reference it.

## Important Notes

- Templates created with relationship blocks can only be used to create relationship blocks.
- Templates created with non-relationship blocks can only be used to create non-relationship blocks.
