# Structured Output

<PluginInfo name="ai-ee" licenseBundled="true"></PluginInfo>

## Introduction

In some application scenarios, users may want the LLM model to respond with structured content in JSON format, which can be achieved by configuring "Structured Output".

![](https://static-docs.nocobase.com/202503041306405.png)

## Configuration Instructions

- **JSON Schema** - Users can configure [JSON Schema](https://json-schema.org/) to specify the expected structure of the model's response.
- **Name** - _Optional_, used to help the model better understand the object represented by the JSON Schema.
- **Description** - _Optional_, used to help the model better understand the purpose of the JSON Schema.
- **Strict** - Requires the model to generate a response strictly adhering to the JSON Schema structure. Currently, only some newer models from OpenAI support this parameter. Please confirm compatibility with the model before selecting it.

## Structured Content Generation Method

The method of generating structured content depends on the **model** and its **Response format** configuration:

1. Models that only support `text` in Response format

   - When calling, the node will bind a Tool that generates JSON content based on the JSON Schema, guiding the model to generate a structured response by calling this Tool.

2. Models that support JSON mode (`json_object`) in Response format

   - When calling, select JSON mode, and users need to explicitly indicate in the Prompt that the model should return in JSON format, and provide a response field description.
   - In this mode, the JSON Schema is only used to parse the JSON string returned by the model into a target JSON object.

3. Models that support JSON Schema (`json_schema`) in Response format

   - JSON Schema is directly used to specify the target response structure of the model.
   - Optional **Strict** parameter, requiring the model to generate a response strictly adhering to the JSON Schema.

4. Ollama local models

   - If JSON Schema is configured, when calling, the node will pass it as the `format` parameter to the model.

## Using Structured Output Results

The structured content of the model's response is saved in the Structured content field of the node, which can be used by subsequent nodes.

![](https://static-docs.nocobase.com/202503041330291.png)

![](https://static-docs.nocobase.com/202503041331279.png)

If you need to use the content of the fields in the JSON object, you can refer to:

- [JSON Variable Mapping](../../../../../handbook/workflow-json-variable-mapping)
- [JSON Query](../../../../../handbook/workflow-json-query)
