# Setting Data Scope

## Introduction

Setting the data scope involves defining default filter conditions for data blocks, allowing users to adjust data ranges based on different needs or views.

## User Manual

![20240407180322](https://static-docs.nocobase.com/20240407180322.png)

`Filter fields` support selecting fields from the current table and related tables (up to three levels deep).

![20240422113637](https://static-docs.nocobase.com/20240422113637.png)

### Operators

Different types of fields support different operators. For example:

- Text fields support operators like `is`, `is empty`, and `contains`.
- Number fields support operators like `greater than` and `less than`.
- Date fields support operators like `within range` and `before a specific date`

![20240424154003](https://static-docs.nocobase.com/20240424154003.png)

### Static Values

Static values are those that are fixed. For example: 
- Order `Status` is `Shipped`

 <video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240415204206.mp4" type="video/mp4">
</video>

## Variable Values

Variable values can change dynamically based on conditions. For example: 
- `Delivery Date` is before `Yesterday` 

![20240422090134](https://static-docs.nocobase.com/20240422090134.png)

 <video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240415214709.mp4" type="video/mp4">
</video>

For more information about variables, refer to [Variables](/handbook/ui/variables).
