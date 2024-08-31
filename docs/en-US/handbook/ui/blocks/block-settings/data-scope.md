# Data scope

## Introduction

Data scope is a powerful feature that allows users to define default filtering conditions for data blocks. This functionality enables users to dynamically adjust the scope of displayed data, tailoring it to their specific needs and enhancing the overall user experience.

## User Manual

![20240407180322](https://static-docs.nocobase.com/20240407180322.png)

The filtering mechanism is highly versatile, supporting field selection from both the current table and related tables, with the ability to traverse up to three levels of relationships. This depth of filtering provides users with granular control over their data views.

![20240422113637](https://static-docs.nocobase.com/20240422113637.png)

### Operators

The system offers a rich set of operators, carefully tailored to different field types:
- Text fields: Employ logical operators such as equals, not equals, contains, etc.
- Numeric fields: Utilize comparative operators like greater than, less than, etc.
- Date fields: Feature time-based operators including within range, before a specific date, etc.

This diverse array of operators empowers users to create precise and nuanced data filters.

![20240424154003](https://static-docs.nocobase.com/20240424154003.png)

### Static Values

To illustrate, consider this example: Setting an Order "Status" to "Shipped".

 <video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240415204206.mp4" type="video/mp4">
</video>

### Variable Values

For more dynamic filtering, variables can be employed. For instance: Filtering for a "Delivery Date" earlier than "Yesterday".

![20240422090134](https://static-docs.nocobase.com/20240422090134.png)

 <video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240415214709.mp4" type="video/mp4">
</video>
