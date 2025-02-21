# Form Filter Block

## Introduction

The Form filter block can be connected with the data block. Once connected, it can provide filtering capabilities.

## Adding Block

  <video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240426172722.mp4" type="video/mp4">
    </video>

## Block Settings

![20240421172115](https://static-docs.nocobase.com/20240421172115.png)

### Connect to Data Block

Example: The Form filter block connects to the details data block to implement linkage.

  <video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240421170947.mp4" type="video/mp4">
    </video>

For more content, refer to [Connect to Data Block](/handbook/ui/blocks/block-settings/connect-block)

- [Edit Block Title](/handbook/ui/blocks/block-settings/block-title)
- [Linkage Rules](/handbook/ui/blocks/block-settings/linkage-rule)
- [Save as Block Template](/handbook/block-template)

## Field Configuration

### Fields in This Collection

![20240421171135](https://static-docs.nocobase.com/20240421171135.png)

### Fields in Related Collections
> In version v1.3.14-beta and above, it supports configuring "many-to-many" and "one-to-many" relationship fields.

Supports using the fields of the related collections as filtering conditions

Example: The order collection has a many-to-one relationship field "Customer", filter the orders by customer name and phone number as filtering conditions

<video width="100%" height="440" controls>
<source src="https://static-docs.nocobase.com/20240421171437.mp4" type="video/mp4">
</video>

### Setting Default Values for Fields

Like a normal [Form Block](/handbook/ui/blocks/data-blocks/form), you can set default values for normal fields and relationship fields. **When a field has a default value, a filtering operation will be automatically triggered at the first rendering of the page, so that the data block connected with it can display the matching data.**

## Configuration Operations

![Filter Operations](https://static-docs.nocobase.com/20240421171839.png)

### Reset button

By default, clicking the "Reset" button will preserve the default values of the fields. If you want to clear the default values of the fields, you can open the configuration options and enable the "Clear Default Values" option.

![20240716183611](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240716183611.png)
