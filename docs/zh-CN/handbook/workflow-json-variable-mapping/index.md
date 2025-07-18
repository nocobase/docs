# JSON 变量映射

<PluginInfo name="workflow-json-variable-mapping" link="/handbook/workflow-json-variable-mapping" commercial="true"></PluginInfo>

> v1.6.0

用于将上游节点结果中复杂的 JSON 结构映射为变量，以供后续节点使用。例如 SQL 操作和 HTTP 请求节点的结果，在映射后即可在后续节点中使用其中的属性值。

:::info{title=提示}
与 JSON 计算节点不同，JSON 变量映射节点不支持自定义表达式，也不基于第三方引擎，仅用于映射 JSON 结构中的属性值，但使用更简单。
:::

## 使用手册

### 创建节点

在工作流配置界面中，点击流程中的加号（“+”）按钮，添加“JSON 变量映射”节点：

![创建节点](https://static-docs.nocobase.com/20250113173635.png)

### 节点配置

#### 数据源

数据源可以是上游节点的结果，也可以是流程上下文中的数据对象，通常是一个没有内置结构化的数据对象，例如 SQL 节点的结果，或者 HTTP 请求节点的结果。

![数据源](https://static-docs.nocobase.com/20250113173720.png)

#### 输入样例数据

通过粘贴一个样例数据，并点击解析按钮自动解析生成变量列表：

![输入样例数据](https://static-docs.nocobase.com/20250113182327.png)

自动生成的列表中如有不需要使用的变量，可以点击删除按钮删除。

:::info{title=提示}
样例数据不是最终执行的结果，只用于辅助生成变量列表。
:::

#### 路径包含数组索引

不勾选的情况下，会按照 NocoBase 工作流的变量默认处理方式映射数组内容（参考：[变量](/handbook/workflow/advanced/variables#数据结构)）。例如输入以下样例：

```json
{
  "a": 1,
  "b": [
    {
      "c": 2
    },
    {
      "c": 3
    }
  ]
}
```

生成的变量中 `b.c` 将代表数组 `[2, 3]`。

如勾选了该选项，将会在变量路径中包含数组索引，例如 `b.0.c` 和 `b.1.c`。

![20250113184056](https://static-docs.nocobase.com/20250113184056.png)

在包含数组索引的情况下，需要确保输入数据中的数组索引是一致的，否则会导致解析出错。

### 在后续节点使用

在后续节点的配置中，可以使用 JSON 变量映射节点生成的变量：

![20250113203658](https://static-docs.nocobase.com/20250113203658.png)

虽然 JSON 结构可能很复杂，但在映射之后，只需要选择对应路径的变量即可。
