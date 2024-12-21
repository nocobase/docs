# Default Value

## Introduction

Default values are the initial values for fields in a new state. You can set default values when configuring fields in a data table, or you can specify default values for fields in a new form block. These values can be constants or variables.

## Where Can Default Values Be Configured?

### Data Table Fields

![20240411095933](https://static-docs.nocobase.com/20240411095933.png)

### Fields in New Forms

Most fields in new forms support setting default values.

![20240411100030](https://static-docs.nocobase.com/20240411100030.png)

### Adding Subforms

Whether adding subforms in new or edit forms, the added sub-data will have default values.

Subform "Add new"

![20240411100341](https://static-docs.nocobase.com/20240411100341.png)

Subtable "Add new"

![20240411100424](https://static-docs.nocobase.com/20240411100424.png)

![20240411100634](https://static-docs.nocobase.com/20240411100634.png)

When editing existing data, if the data is empty, it will not be filled with default values; only newly added data will be filled with default values and will not be saved.

![20240411100729](https://static-docs.nocobase.com/20240411100729.png)

### Default Values for Relationship Data

Default values are only available for "many-to-one" and "many-to-many" relationship types when using selector components (Select, RecordPicker).

![20240411101025](https://static-docs.nocobase.com/20240411101025.png)

## Default Value Variables

### What Variables Are Available?

- Date variables;
- Current user;
- Current record (the concept only applies to existing data);
- Current form (ideally, only fields in the form are listed);
- Current object (concept for each row of data in a subform);
- Form selected records (currently limited to the "Table Block + Add Record Form" combination);

For more information on variables, refer to [Variables](/handbook/ui/variables).

### Field Default Value Variables

There are two types: non-relational field variables and relational field variables.

#### Relational Field Default Value Variables

- The variable object must be a collection record;
- It must be from a table on the inheritance path, either the current table or a parent-child table;
- The "Form selected records" variable is only available for "many-to-many" and "one-to-many/many-to-one" relationship fields;
- **For multiple levels, flatten and deduplicate the data**

```typescript
// Table selected records:
[{id:1},{id:2},{id:3},{id:4}]

// Table selected records/one-to-one:
[{one-to-one: {id:2}}, {one-to-one: {id:3}}, {one-to-one: {id:3}}]
// Flatten and deduplicate
[{id: 2}, {id: 3}]

// Table selected records/many-to-many:
[{many-to-many: [{id: 1}, {id:2}]}, {many-to-many: {[id:3}, {id:4}]}]
// Flatten
[{id:1},{id:2},{id:3},{id:4}]
```

#### Non-relational Default Value Variables

- The type must be consistent or compatible, such as strings being compatible with numbers, and all objects that provide a toString method;
- JSON fields are special and can store any type of data;

### Field Hierarchy (Optional Fields)

![20240411101157](https://static-docs.nocobase.com/20240411101157.png)

- Non-relational default value variables

  - When selecting fields with multiple levels, only one-to-one relationships are supported; many-to-many relationships are not supported;
  - JSON fields are special and may have fewer restrictions;

- Relational default value variables

  - hasOne: only supports one-to-one relationships;
  - hasMany: supports both one-to-one (internally converted) and many-to-many relationships;
  - belongsToMany: supports both one-to-one (internally converted) and many-to-many relationships;
  - belongsTo: generally for one-to-one relationships, but when the parent relationship is hasMany, it also supports many-to-many (as hasMany/belongsTo is essentially a many-to-many relationship);

## Special Cases

### "Many-to-many" is equivalent to a "one-to-many/many-to-one" combination

Model

![20240411101558](https://static-docs.nocobase.com/20240411101558.png)

When setting default value variables for a many-to-many relationship, if the variable has multiple records, the selected data will have multiple records, as shown below:
When the data table in the table block and the relationship field data table are the same.

![20240411103021](https://static-docs.nocobase.com/20240411103021.png)

### Why Don't One-to-one and One-to-many Relationships Have Default Values?

For example, in an A.B relationship, if b1 is associated with a1, it cannot be associated with a2. If b1 is associated with a2, it will disassociate from a1. In this case, the data is not shared, while default values operate on a shared mechanism (both can be associated), so one-to-one and one-to-many cannot have default values.

### Why Can't Subforms or Subtables with Many-to-one and Many-to-many Relationships Have Default Values?

Because subforms and subtables focus on directly editing relationship data (including adding or removing), and relationship default values work on a shared mechanism where both can be associated but cannot modify the relationship data. Therefore, it is not suitable to provide default values in this scenario.

Additionally, subforms or subtables have subfields, so it would be unclear whether the default value is for rows or columns.

Considering this, it is more appropriate not to allow setting default values for any type of subform or subtable relationship.
