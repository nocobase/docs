# Association Fields

In NocoBase, association fields are not actual fields, but are used to establish connections between collections, a concept equivalent to relationships in relational databases.

In relational databases, common types of relationships mainly include the following:

- [One-to-one](./o2o/index.md): Each entity in one table can only correspond to one entity in another table. This type of relationship is often used to store different aspects of entities in different tables to reduce redundancy and improve data consistency.
- [One-to-many](./o2m/index.md): Each entity in one table can be associated with multiple entities in another table. This is one of the most common relationship types; for example, an author can write multiple articles, but an article can only have one author.
- [Many-to-one](./m2o/index.md): Multiple entities in one table can be associated with one entity in another table. This type of relationship is also common in data modeling; for example, multiple students can belong to the same class.
- [Many-to-many](./m2m/index.md): Multiple entities in two tables can be associated with each other. This type of relationship usually requires an intermediate table to record the associations between entities; for example, the relationship between students and courses, where a student can enroll in multiple courses, and a course can be taken by multiple students.

These relationship types play important roles in database design and data modeling, helping to describe complex relationships and data structures in the real world.