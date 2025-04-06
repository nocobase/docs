# Multimodal Chat

<PluginInfo name="ai-ee" licenseBundled="true"></PluginInfo>

## Image

When the model supports it, the LLM node can send images to the model. When using it, you need to select the attachment field through a variable or associate a file table record. When selecting a file table record, you can select to only record the object level or select to the URL field.

![](https://static-docs.nocobase.com/202503041034858.png)

The image sending format has two options:

- Send via URL - All images, except for locally stored images, will be sent in URL format, and locally stored images will be converted to base64 format.
- Send via base64 - Whether the image is locally stored or cloud-stored, it will be sent in base64 format. This is applicable to situations where the image URL cannot be accessed directly by the online LLM service.

![](https://static-docs.nocobase.com/202503041200638.png)
