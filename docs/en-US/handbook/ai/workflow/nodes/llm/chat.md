# Chat

<PluginInfo name="ai"></PluginInfo>

## Introduction

The LLM node in the workflow can initiate conversations with online LLM services, leveraging the capabilities of powerful models to assist in completing a series of business processes.

![](https://static-docs.nocobase.com/202503041012091.png)

## Creating a New LLM Node

Since conversing with LLM services is typically time-consuming, the LLM node can only be used in asynchronous workflows.

![](https://static-docs.nocobase.com/202503041013363.png)

## Selecting a Model

First, choose an integrated LLM service. If an LLM service has not been integrated yet, you need to add an LLM service configuration first. For reference, see: [LLM Service Management](./../../../service.md)

After selecting the service, the application will attempt to fetch a list of available models from the LLM service for your selection. Some online LLM services may provide model-fetching APIs that do not conform to the standard API protocol, in which case you can manually input the model ID.

![](https://static-docs.nocobase.com/202503041013084.png)

## Configuring Call Parameters

You can adjust the parameters for calling the LLM model as needed.

![](https://static-docs.nocobase.com/202503041014778.png)

### Response Format

Note the **Response Format** setting, which is used to indicate the format of the response from the model, either text or JSON. If you choose JSON mode, note the following:

- The corresponding LLM model must support calls in JSON mode, and you must explicitly prompt the model to respond in JSON format in your prompt. For example: "Tell me a joke about cats, respond in JSON with `setup` and `punchline` keys." Otherwise, there may be no response and it could result in a `400 status code (no body)` error.
- The response will be a JSON string, so you need to use other workflow nodes to parse it in order to use the structured content. You can also use the [Structured Output](../../../../../handbook/ai-ee/workflow/nodes/llm/structured-output) feature.

## Messages

The array of messages sent to the LLM model can include a history of conversations. The messages support three types:

- System – Typically used to define the role and behavior the LLM model should play in the conversation.
- User – Content entered by the user.
- Assistant – Content that is the model's response.

For user messages, if supported by the model, you can combine multiple pieces of content in one prompt corresponding to the `content` parameter. If the model only supports a string format for the `content` parameter (which is the case for most models that do not support multimodal conversations), please split the messages into multiple prompts, each containing only one piece of content. This way, the node will send the content as a string.

![](https://static-docs.nocobase.com/202503041016140.png)

You can use variables in the message content to reference the workflow's context.

![](https://static-docs.nocobase.com/202503041017879.png)

## Using the Response Content of the LLM Node

The response from the LLM node can be used as a variable in other nodes.

![](https://static-docs.nocobase.com/202503041018508.png)
