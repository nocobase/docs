# Block Template

<PluginInfo name="block-template"></PluginInfo>
<style>
.markdown h5 {
    font-size: 15px;
}
</style>

## Introduction

Block Template provides templating capabilities for blocks, enabling centralized management of templates and the creation of blocks from them. Blocks created from a template inherit from it, allowing you to add your own configurations on top of the template.

## Installation

Built-in plugin, no installation required.

## Usage Instructions

![Main Interface](https://static-docs.nocobase.com/main-screen-block-template.png)

### Template Management

#### Create Template

The Block Templates offers two methods for creation so you can choose the one that best fits your scenario:

##### 1. Create via the Template Management Interface

**Applicable Scenario:**
- When starting a new template from scratch

**Steps:**
1. Enter the block templates management interface
2. Click the "Add new" button
3. Enter the basic template information
4. Configure the template content
5. Click "Submit" to complete creation

![Create Template](https://static-docs.nocobase.com/create-template.png)

##### 2. Create Template from an Existing Block

**Applicable Scenario:**
- When the desired block is already configured on the page
- When you need to reuse the configuration of an existing block in another context
- When you want to quickly create a template without reconfiguring

**Steps:**
1. Locate the data block on the page that you wish to save as a template
2. Select the "Save as Template" option
3. Enter a template name and save

![Save as Template](https://static-docs.nocobase.com/save-as-block-template.png)

:::info{title=Note}
- Only data blocks on pages can be saved as templates
- Blocks in pop-up dialogs cannot be directly saved as templates
- Chart blocks are currently not supported for templating
:::

#### Configure Template

Select a template and click the "Configure" button to enter the configuration interface for the template's data block.

![Configure Template](https://static-docs.nocobase.com/configure-template.png)

:::info{title=Note}
- Currently, a template supports only one data block. Without a data block configured, the template cannot be used to create a block.
- Chart blocks are not currently supported for templating.
:::

#### Edit Template

Select a template and click the "Edit" button to enter the editing interface where you can modify the template's title and description.

![Edit Template](https://static-docs.nocobase.com/edit-template.png)

#### Duplicate Template

Select a template, click the "Duplicate" button, enter a new template title, and click "Submit" to copy the template.
The copied template can then be edited to suit new requirements.

![Copy Template](https://static-docs.nocobase.com/copy-template.png)

#### Delete Template

Select a template, click the "Delete" button, and then click "Submit" to delete the template.

![Delete Template](https://static-docs.nocobase.com/delete-template.png)

When deleting, you can choose whether to "Keep the created blocks":
- If kept, the blocks created from the template will be converted to regular page blocks once the template is deleted.
- If not kept, the blocks created from the template will also be deleted.

### Template Usage

#### Create Block

When creating a block on a page, select the corresponding block template to create the block using that template.

![Create Block](https://static-docs.nocobase.com/create-block.png)

Blocks created from a template differ from regular blocks in the following ways:
1. The block inherits from the template, allowing you to add your own configurations on top; any unmodified settings remain synchronized with the template.
2. UI components inherited from the template cannot be removed from the page.
![Cannot Remove](https://static-docs.nocobase.com/disable-delete.png)

3. Additional fields and actions in the block are highlighted with different background colors for easy distinction.
![Block Style](https://static-docs.nocobase.com/template-bg.png)

4. Both the block and the UI components inherited from the template include an option to "Revert to Template", which resets them entirely to match the template.
![Revert to Template](https://static-docs.nocobase.com/revert-to-template.gif)

5. When you need to separate a template block from its original template, you can use the "Convert To Normal Block" function to convert the template block to a normal block.

![convert-to-normal-block](https://static-docs.nocobase.com/convert-to-normal-block.png)

:::info{title=Note}
The positioning of UI components within a block is determined by the page layout and will not automatically update to reflect changes in the template. To synchronize component positions with the template, you must revert the entire block to the template.
:::

## FAQ

**Q: How do I create an edit form template?**

A: The configuration for an edit form template is the same as that for an add form template. You can create an edit form template by configuring an add form block, and the template will automatically appear in the edit form's template options.

**Q: Why do the field positions in the template not sync with the block created from it?**

A: The positioning of UI components within a block is determined by the page layout and does not automatically synchronize with changes in the template. If you need to sync them, use the "Revert to Template" function; note that reverting will erase any custom configurations on the block.

**Q: How should unused templates be handled?**

A: It is recommended to delete unused templates. When deleting a template, you can choose whether or not to keep the blocks created from it. If you choose to keep them, the blocks will be converted to standard page blocks without affecting existing functionality; if not, the blocks created from the template will also be deleted.

**Q: Why can't templates be configured for chart blocks?**

A: Future versions will support templating for chart blocks.

**Q: Why is there no option to save a block from a pop-up as a template?**

A: Templates are based on blocks within the page, which operate in an independent context. Blocks in pop-up dialogs depend on blocks outside the current pop-up, so saving blocks from pop-ups as templates is not currently supported.

**Q: How can deprecated templates be converted into new block templates?**

A: You can create a new page block by copying an old template, and then save the new page block as a template. ![20250408092704_rec_](https://static-docs.nocobase.com/20250408092704_rec_.gif)
