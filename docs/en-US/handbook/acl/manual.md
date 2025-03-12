# User Manual

## Role Union
Role Union is a permission management mode. Depending on the system settings, system developers can choose to use `Independent roles`, `Allow role union`, or `Roles union only` to meet different permission needs.

![20250312184651](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312184651.png)

### Independent roles
By default, the system uses `Independent roles`: Role union is not used, and users need to switch between their assigned roles individually.

![20250312184729](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312184729.png)
![20250312184826](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312184826.png)

### Allow role union
System developers can enable role union, allowing users to have the combined permissions of all their assigned roles while still being able to switch roles individually.

![20250312185006](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312185006.png)

### Role union only
Users are strictly required to use role union and cannot switch roles individually.

![20250312185105](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312185105.png)

### Role Union Rules
Union mode grants the maximum permissions available across all assigned roles. The following explanation outlines how permissions are determined when different roles have conflicting settings.

#### Execute Permission Merging:
Example: Role1 is configured to allow access to the interface, while Role2 is configured to allow installation, activation, and deactivation of plugins.

![20250312190133](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312190133.png)

![20250312190352](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312190352.png)

When logging in with the **Full Permissions** role, the user will have both sets of permissions.

![20250312190621](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312190621.png)

#### Data Scope Merging

##### Data Rows
**Scenario 1: Multiple roles define conditions for the same field**

- Role A is configured with the condition: Age < 30  
  ![20250312181235](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312181235.png)

- Role B is configured with the condition: Age > 25  
  ![20250312181256](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312181256.png)

- **After merging:**

  ![20250312181330](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312181330.png)

**Scenario 2: Different roles define conditions for different fields**

- Role A is configured with the condition: Age < 30  
  ![20250312181400](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312181400.png)

- Role B is configured with the condition: Name contains "Ja"  
  ![20250312181451](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312181451.png)

- **After merging:**

  ![20250312181510](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312181510.png)

##### Data Columns

- Role A is configured with visible fields: Name, Age  
  ![20250312181601](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312181601.png)

- Role B is configured with visible fields: Name, Sex  
  ![20250312181616](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312181616.png)

- **After merging:**

  ![20250312181652](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312181652.png)

##### Mixed Row and Column Conditions

- Role A is configured with the condition: Age < 30, and visible fields: Name, Age  
  ![20250312181740](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312181740.png)

- Role B is configured with the condition: Name contains "Ja", and visible fields: Name, Sex  
  ![20250312181829](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312181829.png)

- **After merging:**

  ![20250312181858](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250312181858.png)

**Note: Data marked with red cells was not visible to any single role but becomes visible in the merged role.**

##### Summary
The role union follows these data scope rules:
1. **Row conditions**: A row is accessible if it meets **any** of the conditions.
2. **Column conditions**: The visible fields from all roles are **combined**.
3. **Row and column conditions together**: Rows and columns are merged separately rather than being combined as a single condition set.