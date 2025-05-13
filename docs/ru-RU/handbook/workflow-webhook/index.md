# Webhook Event

<PluginInfo name="workflow-webhook" link="/handbook/workflow-webhook" commercial="true"></PluginInfo>

The Webhook trigger provides a system-generated URL for third-party systems to call via HTTP POST requests. This URL triggers workflow execution when specific events occur, such as payment callbacks or notifications.

## User Guide

### Creating a Trigger

Create a workflow, select "Webhook Event" as the workflow type:

![20241210105049](https://static-docs.nocobase.com/20241210105049.png)

:::info{title="Tip"}
The key difference between "Synchronous" and "Asynchronous" workflows lies in their response behavior. Synchronous workflows wait until the workflow execution is complete before returning a response. In contrast, asynchronous workflows immediately return a pre-configured response, then execute the workflow in the background.
:::

### Trigger Configuration

![20241210105441](https://static-docs.nocobase.com/20241210105441.png)

#### Webhook URL

The URL is automatically generated and tied to the workflow. Use the copy button to paste the URL into the third-party system.  

HTTP requests must use the POST method. Other methods return a `405` error.  

#### Security

Basic HTTP authentication is supported. By enabling this option and setting a username and password, you can secure the Webhook. The third-party system must include the username and password in the Webhook URL for authentication (Criteria Detail: [MDN: HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme)).

When the user name and password are set, the system checks whether the user name and password in the request match, and returns a `401` error when no match is provided or no match is provided.

#### Parsing Request Data

Data in HTTP requests must be parsed to make it usable in Workflow. Parsed data is available as variables in subsequent nodes.

Parsing an HTTP request is divided into three parts:

1. Request Headers

   Headers are simple key-value pairs in string format. Specify the fields you need, such as `Date` , `X-Request-Id`, etc.

2. Request Parameters

  Request parameter is the URL of query parameters, such as `http://localhost:13000/api/webhook:trigger/1hfmkioou0d? query=1`  'query' parameter. Paste the complete URL sample or query only the parameter part of the sample and click the parse button to automatically parse the key-value pairs.
  
  ! [20241210111155](https://static-docs.nocobase.com/20241210111155.png)
  
  Automatic parsing converts the parameter portion of the URL into a JSON structure, and generates a path based on the parameter hierarchy such as `query[0]`, `query[0].a`, etc. The path name can be manually modified if it does not meet the requirements, but usually does not need to be modified. Aliases are optional for displaying the name of a variable when used as a variable. At the same time, all parameter tables in the sample are generated. If there are unnecessary parameters, you can delete them.
  
3. Request Body

  The request Body is the body of the HTTP request. Currently, only the request body in Content-Type format application/json is supported. You can directly configure the path to be parsed, or enter a JSON example and click the parse button for automatic parsing.

  ! [20241210112529](https://static-docs.nocobase.com/20241210112529.png)

  Automatic parsing JSON structure will be the key/value pair into paths, such as `{" a ": 1," b ": {" c" : 2}}` generates `a`, `b`, `b.c` path, etc. Aliases are optional for displaying the name of a variable when used as a variable. At the same time, all parameter tables in the sample are generated. If there are unnecessary parameters, you can delete them.

#### Response Settings

The response part of Webhook is configured differently in synchronous and asynchronous workflows. The asynchronous workflows are directly configured in the trigger. After receiving the Webhook request, the response configuration in the trigger is immediately returned to the third-party system before the workflow is executed. Synchronous workflows need to be handled in the process by adding response nodes as required by the business (Detail: [Response nodes](#response nodes)).

Typically, the response to an asynchronously triggered Webhook event has a status code of `200` and a response body of `ok`. You can also customize the status code, response header, and response body of the response.

! [20241210114312](https://static-docs.nocobase.com/20241210114312.png)

### Response node

It is only supported for use in synchronous mode Webhook workflows for responses returned to third-party systems. For example, if there is an unexpected result (such as an error or failure) during the processing of a payment callback, the response node can return an error response to the third-party system so that some third-party systems can retry later according to the status.

In addition, the execution of the response node terminates the execution of the workflow, and subsequent nodes do not execute. If the entire workflow is not configured with a response node, the system will automatically respond according to the state of the process execution, returning `200` for successful execution and `500` for failed execution.

#### Creating a response node

In the workflow configuration interface, click the plus sign ("+") button in the process to add the "Response" node:

! [20241210115120](https://static-docs.nocobase.com/20241210115120.png)

#### Response configuration

! [20241210115500](https://static-docs.nocobase.com/20241210115500.png)

Variables in the workflow context can be used in the response body.

#### Example

In the Webhook workflow in synchronous mode, different responses can be returned according to different business conditions, as shown in the figure below:

! [20241210120655](https://static-docs.nocobase.com/20241210120655.png)

Check whether a service status is satisfied through the conditional branch node. If yes, a success message is displayed. Otherwise, a failure message is displayed.
