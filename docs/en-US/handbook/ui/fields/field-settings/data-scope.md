# Set The Data Scope

## Introduction

The data scope for relationship fields is similar to the data scope setting for blocks, allowing you to set default filtering criteria for relational data.

## Instructions

![20240422153711](https://static-docs.nocobase.com/20240422153711.png)

### Static Value

Example: Only products currently for sale can be selected as related items.

![20240422155953](https://static-docs.nocobase.com/20240422155953.png)

### Variable Value

Example: Only products with a production date earlier than last month can be selected as related items.

![20240422163640](https://static-docs.nocobase.com/20240422163640.png)

For more information on variables, refer to [Variables](/handbook/ui/variables).

### Relationship Field Linkage

Relationship fields can be linked by setting the data scope.

Example: In the order form, there are many-to-many relationship fields "Products" and a many-to-one relationship field "Customers." The product table has a many-to-many relationship field "Customers." In the order form block, the selectable products are those associated with the customer selected in the current form.

![20240422154145](https://static-docs.nocobase.com/20240422154145.png)

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240422155351.mp4" type="video/mp4">
</video>
