# Many-to-Many

In a course enrollment system, there are two entities: students and courses. A student can enroll in multiple courses, and a course can be enrolled by multiple students. This constitutes a many-to-many relationship. In relational databases, to represent the many-to-many relationship between students and courses, an intermediate table is typically used, such as an enrollment table. This table can record which courses each student has chosen and which students have enrolled in each course. This design effectively represents the many-to-many relationship between students and courses.

ER Diagram

![alt text](https://static-docs.nocobase.com/0e9921228e1ee375dc639431bb89782c.png)

Field Configuration

![alt text](https://static-docs.nocobase.com/8e2739ac5d44fb46f30e2da42ca87a82.png)

## Parameter Description

### Source Collection

The source table, which is the table where the current field resides.

### Target Collection

The target table to which it is associated.

### Through Collection

The intermediate table used when there is a many-to-many relationship between two entities. The intermediate table has two foreign keys used to store the relationship between the two entities.

### Source Key

The field referenced by the foreign key constraint, which must be unique.

### Foreign Key 1

The field in the intermediate table used to establish the relationship with the source table.

### Foreign Key 2

The field in the intermediate table used to establish the relationship with the target table.

### Target Key

The field referenced by the foreign key constraint, which must be unique.

### ON DELETE

ON DELETE refers to the action rule for the foreign key references in the child table when records in the parent table are deleted. It is an option used to define the behavior of the foreign key constraint. Common ON DELETE options include:

- CASCADE: Automatically deletes all associated records in the child table when a record in the parent table is deleted.
- SET NULL: Sets the foreign key values in the child table to NULL when a record in the parent table is deleted.
- RESTRICT: Default option, refuses to delete the record in the parent table if there are associated records in the child table.
- NO ACTION: Similar to RESTRICT, refuses to delete the record in the parent table if there are associated records in the child table.