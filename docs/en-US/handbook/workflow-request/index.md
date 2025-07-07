# HTTP Requests

<PluginInfo name="workflow-request" link="/handbook/workflow-request"></PluginInfo>

When you need to interact with another web system, the HTTP Request node is your go-to tool. This node allows you to send an HTTP request to a specified address, complete with data in JSON or `application/x-www-form-urlencoded` formats, facilitating seamless communication with external systems.

If you're already familiar with tools like Postman, mastering the HTTP Request node will be straightforward. However, unlike traditional tools, this node leverages context variables from the current workflow, making it a powerful addition to your business process integration.

### Installation

This is a built-in plugin, so there's no need for installation.

### User Guide

#### Creating a Node

In the workflow configuration interface, click the plus (“+”) button within your process to add an "HTTP Request" node:

![HTTP Request_Add](https://static-docs.nocobase.com/46f2a6fc3f6869c80f8fbd362a54e644.png)

#### Node Configuration

![HTTP Request Node_Configuration](https://static-docs.nocobase.com/2fcb29af66b892fa704add52e2974a52.png)

**Request Method**

Choose from the available HTTP request methods: `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`.

**Request URL**

Specify the URL of the HTTP service, including the protocol (`http://` or `https://`). For security, `https://` is recommended.

**Request Data Format**

This defines the `Content-Type` in the request header, with options for `application/json` and `application/x-www-form-urlencoded`.

**Request Header Configuration**

Set key-value pairs for the request headers, with values that can dynamically reference variables from the workflow context.

:::info{title=Note}
The `Content-Type` header is predetermined by the request data format setting. Manual input here will not override this configuration.
:::

**Request Parameters**

Define key-value pairs for the query string. Values can dynamically utilize variables from the workflow context.

**Request Body**

Depends on the `Content-Type` option, different formats are supported.

##### application/json

Standard JSON format text is supported. Use the variable button in the upper-right corner of the text editor to insert context variables.

:::info{title=Note}
Ensure that variables within JSON are used as strings, for example: `"a": "{{$context.data.a}}"`.
:::

##### application/x-www-form-urlencoded

This format supports standard key-value pairs. The variable button in the text editor can also be used to insert context variables.

##### application/xml

Supports standard XML format text. Similar to JSON, you can use the variable button to insert context variables.

##### multipart/form-data

Supports `multipart/form-data` format for key-value pairs. When selecting a data type as a file object, you can upload files. Files can only be selected from existing file objects in the context, such as results from file collection queries or related data from associated file collection.

:::info{title=Note}
When selecting file data, ensure that the variable corresponds to a single file object, not a list of files (in many-to-one relationships, the relationship field's value will be an array).
:::

**Timeout Settings**

If the request takes too long to respond, the timeout setting will cancel it, leading to the premature termination of the current workflow with a failure status.

**Ignore Failure**

The request node considers any HTTP status code between `200` and `299` as a success. Codes outside this range are deemed failures. If you select the "Ignore failed requests and continue workflow" option, the workflow will proceed with subsequent nodes, even if the request fails.

### Using Response Results

The HTTP request's response results can be parsed using the [JSON Query](./plugins/json-query.md) node, enabling further use in subsequent workflow nodes.

Starting from version `v1.0.0-alpha.16`, the request node’s response includes three components that can be used as variables:

- Status Code
- Response Headers
- Data

![HTTP Request Node_Response Result Usage](https://static-docs.nocobase.com/20240529110610.png)

The response status code is a standard numerical HTTP status code, such as `200` or `403`, as provided by the service.

Response headers are in JSON format, and the response data—also in JSON—must be parsed using the JSON node before being utilized.

### Example

For instance, you can configure the request node to interface with a cloud platform for sending notification SMS. Here’s how you would set up the Alibaba Cloud SMS API (with parameters adapted according to the relevant documentation):

![HTTP Request Node_Configuration](https://static-docs.nocobase.com/20240515124004.png)

When the workflow triggers this node, it will call Alibaba Cloud’s SMS API based on the configuration. If successful, a text message will be sent via the cloud SMS service.
