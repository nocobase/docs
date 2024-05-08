# One-to-Many

The relationship between classes and students, where one class can have multiple students, but one student can only belong to one class. In this case, the relationship between classes and students is a one-to-many relationship.

ER Diagram

![alt text](https://static-docs.nocobase.com/9475f044d123d28ac8e56a077411f8dc.png)

Field Configuration

![alt text](https://static-docs.nocobase.com/a608ce54821172dad7e8ab760107ff4e.png)

## Parameter Description

### Source Collection

The source table, which is the table where the current field resides.

### Target Collection

The target table to which it is associated.

### Source key

The field referenced by the foreign key constraint, which must be unique.

### Foreign key

The field in the target table used to establish the relationship between the two tables.

### Target key

The field in the target table used for viewing each row record in the relationship block, usually a field with uniqueness.

### ON DELETE

ON DELETE refers to the action rule for the foreign key references in the child table when records in the parent table are deleted. It is an option used to define the behavior of the foreign key constraint. Common ON DELETE options include:

- CASCADE: Automatically deletes all associated records in the child table when a record in the parent table is deleted.
- SET NULL: Sets the foreign key values in the child table to NULL when a record in the parent table is deleted.
- RESTRICT: Default option, refuses to delete the record in the parent table if there are associated records in the child table.
- NO ACTION: Similar to RESTRICT, refuses to delete the record in the parent table if there are associated records in the child table.