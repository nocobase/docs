# Overview

<PluginInfo name="workflow-request-interceptor" link="/handbook/workflow-request-interceptor" commercial="true"></PluginInfo>

The pre-operation event plugin introduces a powerful mechanism for intercepting form operation requests. This interception occurs after a form operation is submitted but before it’s processed. If the process triggered includes an "End Process" node or if any other nodes fail to execute correctly (whether due to errors or incomplete execution), the form operation will be intercepted. Otherwise, the operation will proceed as planned. When paired with the "Response Message" node, this feature allows you to configure the process to return specific response messages to the client, offering clear and relevant prompts. Pre-operation events are ideal for business validation or logic checks, enabling the approval or interception of client-submitted requests for creating, updating, or deleting records.

## User Guide

Using pre-operation events involves several key steps:

- [Trigger Configuration](./trigger.md)
- [Operation Configuration](./node.md)

For a deeper understanding, you can explore [Advanced Usage](./advanced.md), and see how it’s applied in real scenarios by reviewing the [Examples](./example.md).

If you need to integrate with an external system, refer to [External Call](./http-api.md).
