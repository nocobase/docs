# Block Template

<PluginInfo name="block-template"></PluginInfo>
<style>
.markdown h5 {
    font-size: 15px;
}
</style>

## Introduction

Block Template provides templating capabilities for blocks, enabling centralized management of templates and the creation of blocks from them.

## Installation

Built-in plugin, no installation required.

## Usage Instructions

![Main Interface](https://static-docs.nocobase.com/main-screen-block-templates.png)

### Choosing a Template Type

NocoBase offers two types of templates: Inherited templates and Reference templates. Their differences and application scenarios are as follows:
- **Reference template**: Similar to a UI Schema snippet. When used, you can choose either the Reference or Duplicate method.
  - **Reference**: The block remains completely consistent with the template. Modifying the block instance will synchronously modify the original template. Suitable for scenarios requiring strict consistency of content/structure across multiple locations.
  - **Duplicate**: Copies the current configuration of the template completely to the target location. After duplication, it is disconnected from the original template and no longer synchronizes updates. Suitable for quickly creating blocks or starting from a template base for completely independent modifications.
- **Inherited template**: Blocks created maintain an inheritance relationship with the template. Blocks can be configured individually based on the template, while unmodified parts continue to synchronize with template updates. Suitable for scenarios requiring a unified basic configuration but allowing for localized differences.

### Reference Template

A Reference template is a general-purpose template, similar to an UI Schema snippet. It allows saving data blocks (including blocks in pages, modals, and compatible third-party blocks) as Reference templates, which can then be used elsewhere via "Reference" or "Duplicate" methods.

There are two types of reference templates:
- Reference template: Save the complete configuration of the block, including fields, operations, etc. Most blocks are saved as this type.
- Reference template (Fields only): Save only the field configuration of the block, and actions will not be saved. When converting a form or a single record detail block to a reference template, it will be saved as this type.

#### Creating a Reference Template

Select the data block you want to save as a Reference template, click the "Save as reference template" button to create the Reference template.

![Save as reference template](https://static-docs.nocobase.com/save-as-reference-block-template.png)

#### Using a Reference Template

Reference templates offer two ways of usage; choose the method that best suits your scenario:

1.  **Reference**

When creating a block on a page, select the corresponding reference template to create the block using the template reference.

![Create block](https://static-docs.nocobase.com/create-block-from-reference-template.png)

2.  **Duplicate**

When creating a block on a page, select the corresponding duplicate template option to duplicate the template and create the block.

![Create block](https://static-docs.nocobase.com/create-block-from-copy-template.png)

### Inherited Template

Inherited templates are primarily suited for scenarios where you want blocks to follow the basic updates of a template but also need to make some specific adjustments. Blocks created from an Inherited template inherit the template's configuration and allow for extensions or overrides on top of it. Configurations not overridden by the block will synchronize with template updates.

#### Creating an Inherited Template

Inherited templates can be created in two ways, choose the method that best suits your scenario:

1.  **Create in the Block Template Management Interface**

**Applicable Scenario:**
- When starting a new inherited template from scratch

**Steps:**
1. Go to the block template management interface
2. Click the "Add new" button
3. Enter basic information for the inherited template
4. Click "Submit" to complete creation
5. Configure the content of the inherited template

![Create inherited template](https://static-docs.nocobase.com/create-inherited-template.png)

2.  **Create from an Existing Block**

**Applicable Scenario:**
- When the desired block is already configured on the page
- When you need to reuse the configuration of an existing block in another context
- When you want to quickly create an inherited template without reconfiguring

**Steps:**
1. Locate the data block on the page that you wish to save as a template
2. Select the "Save as inherited template" option
3. Enter a template name and save

![Save as inherited template](https://static-docs.nocobase.com/save-as-inherited-template.png)

:::info{title=Note}
- Only data blocks on pages can be saved as inherited templates
- Blocks in pop-up dialogs cannot be directly saved as inherited templates
- Chart blocks are currently not supported for inherited templating
:::

#### Configuring an Inherited Template

Select an inherited template, click the "Configure" button to enter the inherited template configuration interface and configure the template's data block.

![Configure Template](https://static-docs.nocobase.com/configure-template.png)

:::info{title=Note}
- Currently, an inherited template supports only one data block. Without a data block configured, the inherited template cannot be used to create a block.
- Chart blocks are not currently supported for inherited templating.
:::

#### Editing an Inherited Template

Select an inherited template and click the "Edit" button to enter the editing interface where you can modify the template's title and description.

![Edit inherited template](https://static-docs.nocobase.com/edit-inherited-template.png)

#### Duplicate Inherited Template

Select an inherited template, click the "Duplicate" button, enter a new template title, and click "Submit" to copy the template.
The copied template can then be edited to suit new requirements.

![Copy inherited template](https://static-docs.nocobase.com/copy-inherited-template.png)

#### Delete Inherited Template

Select an inherited template, click the "Delete" button, and then click "Submit" to delete the template.

![Delete inherited template](https://static-docs.nocobase.com/delete-inherited-template.png)

When deleting, you can choose whether to "Keep the created blocks":
- If kept, the blocks created from the template will be converted to regular page blocks once the template is deleted.
- If not kept, the blocks created from the template will also be deleted.

### Template Usage

#### Create Block from Inherited Template

When creating a block on a page, select the corresponding inherited template to create the block using that template.

![Create Block](https://static-docs.nocobase.com/create-block-from-inherited-template.png)

Blocks created from an inherited template differ from regular blocks in the following ways:
1. The block inherits from the template, allowing you to add your own configurations on top; any unmodified settings remain synchronized with the template.
2. UI components inherited from the template cannot be removed from the page.
![Cannot Remove](https://static-docs.nocobase.com/disable-delete.png)

3. Additional fields and actions in the block are highlighted with different background colors for easy distinction.
![Block Style](https://static-docs.nocobase.com/template-bg.png)

4. Both the block and the UI components inherited from the inherited template include an option to "Revert to Template", which resets them entirely to match the template.
![Revert to Template](https://static-docs.nocobase.com/revert-to-template.gif)

:::info{title=Note}
The positioning of UI components within a block is determined by the page layout and will not automatically update to reflect changes in the inherited template. To synchronize component positions with the template, you must revert the entire block to the template.
:::

## FAQ

**Q: How do I create an edit form inherited template?**

A: The configuration for an edit form inherited template is the same as that for an add form inherited template. You can create an edit form inherited template by configuring an add form block, and the template will automatically appear in the edit form's inherited template options.

**Q: Why do the field positions in the inherited template not sync with the block created from it?**

A: The positioning of UI components within a block is determined by the page layout and does not automatically synchronize with changes in the inherited template. If you need to sync them, use the "Revert to Template" function; note that reverting will erase any custom configurations on the block.

**Q: How should unused templates be handled?**

A: It is recommended to delete unused inherited templates. When deleting a template, you can choose whether or not to keep the blocks created from it. If you choose to keep them, the blocks will be converted to standard page blocks without affecting existing functionality; if not, the blocks created from the template will also be deleted.

**Q: Why can't inherited templates be configured for chart blocks?**

A: Future versions will support inherited templates for chart blocks.

**Q: Why is there no option to save a block from a pop-up as an inherited template?**

A: Templates are based on blocks within the page, which operate in an independent context. Blocks in pop-up dialogs depend on blocks outside the current pop-up, so saving blocks from pop-ups as inherited templates is not currently supported.
