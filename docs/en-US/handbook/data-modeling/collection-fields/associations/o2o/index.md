# One-to-One

The relationship between employees and personal profiles, where each employee can have only one personal profile record, and each personal profile record can only correspond to one employee. In this case, the relationship between employees and personal profiles is a one-to-one relationship.

The foreign key for a one-to-one relationship can be placed in either the source collection or the target collection. If it represents "having one," it is more appropriate to place the foreign key in the target collection; if it represents "belongs to," then placing the foreign key in the source collection is more appropriate.

For example, in the above example, an employee has only one personal profile, and the personal profile belongs to the employee, so the foreign key is suitable to be placed in the personal profile table.

## One-to-One (Having One)

Indicates that a certain employee has one personal profile record.

ER Diagram

![alt text](https://static-docs.nocobase.com/4359e128936bbd7c9ff51bcff1d646dd.png)

Field Configuration

![alt text](https://static-docs.nocobase.com/7665a87e094b4fb50c9426a108f87105.png)

## One-to-One (Belongs To)

Indicates that a certain personal profile belongs to a specific employee.

ER Diagram

![](https://static-docs.nocobase.com/31e7cc3e630220cf1e98753ca24ac72d.png)

Field Configuration

![alt text](https://static-docs.nocobase.com/4f09eeb3c7717d61a349842da43c187c.png)

## Parameter Description

### Source Collection

The source table, which is the table where the current field resides.

### Target Collection

The target table to which it is associated.

### Foreign Key

Used to establish the relationship between two tables. The foreign key for a one-to-one relationship can be placed in either the source collection or the target collection. If it represents "having one," it is more appropriate to place the foreign key in the target collection; if it represents "belongs to," then placing the foreign key in the source collection is more appropriate.

### Source Key <- Foreign Key (Foreign Key in Target Collection)

The field referenced by the foreign key constraint must be unique. When the foreign key is placed in the target collection, it indicates "having one."

### Target Key <- Foreign Key (Foreign Key in Source Collection)

The field referenced by the foreign key constraint must be unique. When the foreign key is placed in the source collection, it indicates "belongs to."

### ON DELETE

ON DELETE refers to the action rule for the foreign key references in the child table when records in the parent table are deleted. It is an option used to define the behavior of the foreign key constraint. Common ON DELETE options include:

- CASCADE: Automatically deletes all associated records in the child table when a record in the parent table is deleted.
- SET NULL: Sets the foreign key values in the child table to NULL when a record in the parent table is deleted.
- RESTRICT: Default option, refuses to delete the record in the parent table if there are associated records in the child table.
- NO ACTION: Similar to RESTRICT, refuses to delete the record in the parent table if there are associated records in the child table.