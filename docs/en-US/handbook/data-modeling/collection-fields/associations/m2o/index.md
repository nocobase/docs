# Many-to-One

A library database consists of two entities: books and authors. An author can write multiple books, but each book has only one author(in most cases). In this case, the relationship between authors and books is a many-to-one relationship. Multiple books can be associated with the same author, but each book can only have one author.

ER Diagram

![alt text](https://static-docs.nocobase.com/eaeeac974844db05c75cf0deeedf3652.png)

Field Configuration

![alt text](https://static-docs.nocobase.com/3b4484ebb98d82f832f3dbf752bd84c9.png)

## Parameter Description

### Source Collection

The source table, which is the table where the current field resides.

### Target Collection

The target table to which it is associated.

### Foreign Key

The field in the source table used to establish the relationship between the two tables.

### Target Key

The field referenced by the foreign key constraint, which must be unique.

### ON DELETE

ON DELETE refers to the action rule for the foreign key references in the child table when records in the parent table are deleted. It is an option used to define the behavior of the foreign key constraint. Common ON DELETE options include:

- CASCADE: Automatically deletes all associated records in the child table when a record in the parent table is deleted.
- SET NULL: Sets the foreign key values in the child table to NULL when a record in the parent table is deleted.
- RESTRICT: Default option, refuses to delete the record in the parent table if there are associated records in the child table.
- NO ACTION: Similar to RESTRICT, refuses to delete the record in the parent table if there are associated records in the child table.