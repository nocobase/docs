# 使用手册

## 角色并集
角色并集是一种权限管理模式，根据系统设置，系统开发者可以选择使用独立角色、允许角色并集，或者仅使用角色并集，以满足不同的权限需求。

![20250312184651](https://static-docs.nocobase.com/20250312184651.png)

### 独立角色
系统默认为独立角色：不使用角色并集，用户需要逐个切换自己拥有的角色

![20250312184729](https://static-docs.nocobase.com/20250312184729.png)
![20250312184826](https://static-docs.nocobase.com/20250312184826.png)

### 允许角色并集
允许系统开发者使用角色并集，即可以同时使用自己拥有的所有角色的权限，同时也允许用户逐个切换自己的角色。

![20250312185006](https://static-docs.nocobase.com/20250312185006.png)

### 仅角色并集
强制用户仅能使用角色并集，不能逐个切换角色。

![20250312185105](https://static-docs.nocobase.com/20250312185105.png)

### 角色并集规则
并集是让其拥有所有角色的最大权限。以下说明，当角色设置同一项冲突时，应该如何判定角色权限。

#### 操作权限合并
示例：角色1（role1）配置允许界面，角色2（role2）配置允许安装、激活、禁用插件

![20250312190133](https://static-docs.nocobase.com/20250312190133.png)

![20250312190352](https://static-docs.nocobase.com/20250312190352.png)

使用**全部权限**的角色登录，会同时拥有这两种权限

![20250312190621](https://static-docs.nocobase.com/20250312190621.png)

#### 数据范围合并

##### 数据行
场景1：多角色设置到同一字段条件

角色A，配置条件：Age < 30

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

角色B，配置条件：Age > 25

<table style="table-layout: fixed; width: 100%;">
  <tr>
    <th>UserID</th>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>2</td>
    <td>Lily</td>
    <td>29</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Sam</td>
    <td>32</td>
  </tr>
</table>

合并后：

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
  <tr>
    <td>3</td>
    <td>Sam</td>
    <td>32</td>
  </tr>
</table>

场景2：不同角色设置不同字段为条件

角色A，配置条件：Age < 30

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

角色B，配置条件：Name包含“Ja”
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
    <td>3</td>
    <td>Jasmin</td>
    <td>27</td>
  </tr>
</table>

合并后：

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
  <tr>
    <td>3</td>
    <td>Jasmin</td>
    <td>27</td>
  </tr>
</table>

##### 数据列

角色A，配置可见字段：Name，Age

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

角色B，配置可见字段：Name，Sex

<table style="table-layout: fixed; width: 100%;">
  <tr>
    <th>UserID</th>
    <th>Name</th>
    <th>Sex</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Jack</td>
    <td>Man</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Lily</td>
    <td>Woman</td>
  </tr>
</table>

合并后：

<table style="table-layout: fixed; width: 100%;">
  <tr>
    <th>UserID</th>
    <th>Name</th>
    <th>Age</th>
    <th>Sex</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Jack</td>
    <td>23</td>
    <td>Man</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Lily</td>
    <td>29</td>
    <td>Woman</td>
  </tr>
</table>

##### 行列混合

角色A，配置条件为Age < 30，可见字段为Name，Age

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

角色B，配置条件为Name包含“Ja”，可见字段为Name、Sex
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

合并后：

<table style="table-layout: fixed; width: 100%;">
  <tr>
    <th>UserID</th>
    <th>Name</th>
    <th>Age</th>
    <th>Sex</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Jack</td>
    <td>23</td>
    <td><span style="background-color:#FFDDDD">Man</span></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Lily</td>
    <td>29</td>
    <td><span style="background-color:#FFDDDD">Woman</span></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Jade</td>
    <td><span style="background-color:#FFDDDD">27</span></td>
    <td>Woman</td>
  </tr>
  <tr>
    <td>4</td>
    <td>James</td>
    <td><span style="background-color:#FFDDDD">31</span></td>
    <td>Man</td>
  </tr>
</table>

**说明：红色单元格标注的数据，在不同角色都不可见，但在合并角色下可见**

##### 总结
角色合并在数据范围规则：
1. 行与行之间，条件满足其一即为有权限
2. 列与列之间，字段相加
3. 行列同时设置，按照行与行、列与列分别合并，并不是按照（行+列）与（行+列）组合合并