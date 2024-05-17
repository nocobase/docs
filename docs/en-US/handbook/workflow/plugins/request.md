# HTTP 请求

<PluginInfo name="workflow-request" link="/handbook/workflow/plugins/request"></PluginInfo>

当需要与另一个 web 系统进行交互时，可以使用 HTTP 请求节点。该节点在执行时会根据配置向对应的地址发出一个 HTTP 请求，可以携带 JSON 或 `application/x-www-form-urlencoded` 格式的数据，完成与外部系统的数据交互。

如果对 Postman 这类请求发送工具比较熟悉，那么可以很快掌握 HTTP 请求节点的用法。与这些工具不同的是，HTTP 请求节点中各项参数均可使用当前流程中的上下文变量，可以与当前系统的业务处理有机结合起来。

## 安装

内置插件，无需安装。

## 使用手册

### 创建节点

在工作流配置界面中，点击流程中的加号（“+”）按钮，添加“HTTP 请求”节点：

![HTTP 请求_添加](https://static-docs.nocobase.com/46f2a6fc3f6869c80f8fbd362a54e644.png)

### 节点配置

![HTTP请求节点_节点配置](https://static-docs.nocobase.com/2fcb29af66b892fa704add52e2974a52.png)

#### 请求方法

可选的 HTTP 请求方法：`GET`、`POST`、`PUT`、`PATCH` 和 `DELETE`。

#### 请求地址

HTTP 服务的 URL，需要包含协议部分（`http://` 或 `https://`），推荐使用 `https://`。

#### 请求数据格式

即请求头中的 `Content-Type`，支持 `application/json` 和 `application/x-www-form-urlencoded` 两种格式。

#### 请求头配置

请求 Header 部分的键值对，相关值可以使用流程上下文的变量。

:::info{title=提示}
对 `Content-Type` 请求头，已通过请求数据格式配置，无需填写，覆盖无效。
:::

#### 请求参数

请求 query 部分的键值对，相关值可以使用流程上下文的变量。

#### 请求体

请求的 Body 部分，目前仅支持标准的 JSON 格式，可以通过文本编辑框右上角的变量按钮插入流程上下文中的变量。

:::info{title=提示}
注：变量必须在 JSON 的字符串中使用，例如：`"a": "{{$context.data.a}}"`。
:::

#### 超时设置

当请求长时间未响应时，通过超时设置取消该请求的执行。请求超时后会以失败状态提前终止当前流程。

#### 忽略失败

请求节点会以标准 HTTP 状态码的 `200`~`299` 之间（含）的状态认为是成功状态，其他的均认为是失败。如勾选了“忽略失败的请求并继续工作流”选项，则当请求失败后仍继续执行后续的其他流程节点。

### 使用响应结果

HTTP 请求的响应结果可以通过 [JSON 解析](./plugins/json-query.md) 节点进行解析，以便后续节点使用。

### 示例

例如我们可以使用请求节点来对接云平台发送通知短信，以阿里云发送短信接口为例配置如下（相关参数需自行查阅文档适配）：

![HTTP请求节点_节点配置](https://static-docs.nocobase.com/20240515124004.png)

工作流触发该节点执行时会以配置的内容调用阿里云的短信接口，请求成功的话将通过短信云服务发送一条短信。
