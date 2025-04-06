# User Manual

## Role Union

Role Union is a permission management mode. According to system settings, system developers can choose to use `Independent roles`, `Allow roles union`, or `Allow roles union`, to meet different permission requirements.

![20250312184651](https://static-docs.nocobase.com/20250312184651.png)

### Independent roles

By default, the system uses independent roles. Users must switch between the roles they possess individually.

![20250312184729](https://static-docs.nocobase.com/20250312184729.png)  
![20250312184826](https://static-docs.nocobase.com/20250312184826.png)

### Allow roles union

System developers can enable `Allow roles union`, allowing users to simultaneously have permissions of all assigned roles while still permitting users to switch roles individually.

![20250312185006](https://static-docs.nocobase.com/20250312185006.png)

### Roles union only

Users are enforced to only use Role Union and cannot switch roles individually.

![20250312185105](https://static-docs.nocobase.com/20250312185105.png)

### Rules for Role Union

Role union grants the maximum permissions across all roles. Below are the explanations for resolving permission conflicts when roles have different settings on the same permission.

#### Operation Permission Merge

Example:  
Role1 is configured to `Allows to configure interface` and Role2 is configured to `Allows to install, activate, disable plugins`

![20250312190133](https://static-docs.nocobase.com/20250312190133.png)  

![20250312190352](https://static-docs.nocobase.com/20250312190352.png)

When logging in with the **Full Permissions** role, the user will have both permissions simultaneously.

![20250312190621](https://static-docs.nocobase.com/20250312190621.png)

#### Data Scope Merge

##### Data Rows

Scenario 1: Multiple roles setting conditions on the same field

Role A filter: Age < 30  

<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Name</th><th>Age</th></tr>
  <tr><td>1</td><td>Jack</td><td>23</td></tr>
  <tr><td>2</td><td>Lily</td><td>29</td></tr>
</table>

Role B filter: Age > 25
<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Name</th><th>Age</th></tr>
  <tr><td>2</td><td>Lily</td><td>29</td></tr>
  <tr><td>3</td><td>Sam</td><td>32</td></tr>
</table>

**After merging:**
<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Name</th><th>Age</th></tr>
  <tr><td>1</td><td>Jack</td><td>23</td></tr>
  <tr><td>2</td><td>Lily</td><td>29</td></tr>
  <tr><td>3</td><td>Sam</td><td>32</td></tr>
</table>


Scenario 2: Different roles setting conditions on different fields

Role A filter: Age < 30
<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Name</th><th>Age</th></tr>
  <tr><td>1</td><td>Jack</td><td>23</td></tr>
  <tr><td>2</td><td>Lily</td><td>29</td></tr>
</table>

Role B filter: Name contains “Ja”
<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Name</th><th>Age</th></tr>
  <tr><td>1</td><td>Jack</td><td>23</td></tr>
  <tr><td>3</td><td>Jasmin</td><td>27</td></tr>
</table>

**After merging:**
<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Name</th><th>Age</th></tr>
  <tr><td>1</td><td>Jack</td><td>23</td></tr>
  <tr><td>2</td><td>Lily</td><td>29</td></tr>
  <tr><td>3</td><td>Jasmin</td><td>27</td></tr>
</table>

##### Data Columns

Role A visible columns: Name, Age
<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Name</th><th>Age</th></tr>
  <tr><td>1</td><td>Jack</td><td>23</td></tr>
  <tr><td>2</td><td>Lily</td><td>29</td></tr>
</table>

Role B visible columns: Name, Sex
<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Name</th><th>Sex</th></tr>
  <tr><td>1</td><td>Jack</td><td>Man</td></tr>
  <tr><td>2</td><td>Lily</td><td>Woman</td></tr>
</table>

**After merging:**
<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Name</th><th>Age</th><th>Sex</th></tr>
  <tr><td>1</td><td>Jack</td><td>23</td><td>Man</td></tr>
  <tr><td>2</td><td>Lily</td><td>29</td><td>Woman</td></tr>
</table>

##### Mixed Rows and Columns
Role A filter: Age < 30, columns Name, Age
<table style="table-layout: fixed; width: 100%;">
  <tr>
    <th>UserID</th>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Jack</td>
    <td>23</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Lily</td>
    <td>29</td>
  </tr>
</table>

Role B filter: Name contains “Ja”, columns Name, Sex
<table style="table-layout: fixed; width: 100%;">
  <tr>
    <th>UserID</th>
    <th>Name</th>
    <th>Sex</th>
  </tr>
  <tr>
    <td>3</td>
    <td>Jade</td>
    <td>Woman</td>
  </tr>
  <tr>
    <td>4</td>
    <td>James</td>
    <td>Man</td>
  </tr>
</table>

**After merging:**
<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Name</th><th>Age</th><th>Sex</th></tr>
  <tr><td>1</td><td>Jack</td><td>23</td><td><span style="background-color:#FFDDDD">Man</span></td></tr>
  <tr><td>2</td><td>Lily</td><td>29</td><td><span style="background-color:#FFDDDD">Woman</span></td></tr>
  <tr><td>3</td><td>Jade</td><td><span style="background-color:#FFDDDD">27</span></td><td>Woman</td></tr>
  <tr><td>4</td><td>James</td><td><span style="background-color:#FFDDDD">31</span></td><td>Man</td></tr>
</table>

Note: Cells with red background indicate data invisible in individual roles but visible in the merged role.

##### Summary

Role merging data-scope rules:
1. Between rows, if any condition is satisfied, the row has permissions.
2. Between columns, fields are combined.
3. When rows and columns are both configured, rows and columns are merged separately, not by row-column combinations.