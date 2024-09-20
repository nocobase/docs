# Manual Node

## Creating a Node

In the workflow configuration interface, click the plus (“+”) button within the process to add a "Manual" node:

![Create Manual Node](https://static-docs.nocobase.com/4dd259f1aceeaf9b825abb4b257df909.png)

## Configuring the Node

### Assignees

A manual node requires assigning a user who will be responsible for executing the pending task. You can add a list of pending tasks when setting up blocks on the page. Additionally, the content of each node's task pop-up window needs to be configured within the node’s interface.

You can either select a specific user or use variables to choose the primary or foreign key of user data from the context.

![Manual Node Configuration - Assignee Variable Selection](https://static-docs.nocobase.com/22fbca3b8e21fda3a831019037001445.png)

:::info{title=Note}
At present, the assignee option for manual nodes does not support multi-user processing, though this feature is planned for future versions.
:::

### Configuring the User Interface

The interface setup for the to-do list is central to configuring the manual node. By clicking the “Configure” button, you can open a separate pop-up window for configuration. This interface works like a regular page, allowing you to design it using a WYSIWYG (What You See Is What You Get) editor:

![Manual Node Configuration - User Interface Configuration](https://static-docs.nocobase.com/fd360168c879743cf22d57440cd2590f.png)

#### Tabs

Tabs can be utilized to differentiate between various content types. For example, one tab might be used for approved form submissions, another for rejected submissions, or you might use them to display details of related data. These tabs can be configured freely according to your needs.

#### Blocks

The blocks you can use primarily fall into two categories: Data Blocks and Form Blocks. In addition, Markdown blocks are available for informational prompts and other static content.

##### Data Blocks

Data blocks allow you to display information from triggers or the results of any node processing, providing necessary context for the task assignee. For example, if the workflow is triggered by a form event, a data block can be created to show the details of the triggered data. This setup is similar to configuring details on a regular page, where you can select any fields from the triggered data for display:

![Manual Node Configuration - Data Block - Trigger](https://static-docs.nocobase.com/675c3e58a1a4f45db310a72c2d0a404c.png)

Similarly, node data blocks can be configured to display data results from upstream nodes as reference information for the task assignee. For example, if an upstream calculation node generates results, these can be displayed as contextual data:

![Manual Node Configuration - Data Block - Node Data](https://static-docs.nocobase.com/a583e26e508e954b47e5ddff80d998c4.png)

:::info{title=Note}
Since the workflow is in a non-executing state during interface configuration, data blocks won’t display specific data. The relevant data will only appear in the to-do pop-up interface once the workflow is triggered and executed.
:::

##### Form Blocks

Form blocks are crucial in the to-do interface, as they determine whether the workflow continues. Failing to configure a form block will cause the workflow to halt. There are three types of form blocks available:

- Custom Form
- Create record form
- Update record form

![Manual Node Configuration - Form Block Types](https://static-docs.nocobase.com/2d068f3012ab07e32a265405492104a8.png)

For Create record forms and Update record forms, you'll need to select the data table they are based on. When the assignee submits the form, the values entered will be used to add or update data in the selected table. The Custom Form allows you to create a temporary form not linked to any data table, with the submitted values available for use in subsequent nodes.

You can configure the form submission button with one of three options:

- Continue the process
- Terminate the process
- Save temporarily

![Manual Node Configuration - Form Button Types](https://static-docs.nocobase.com/6b45995b14152e85a821dff6f6e3189a.png)

These three button options correspond to different node states in the workflow: "Complete," "Reject," or "Waiting." At least one of the first two options must be configured to determine how the workflow proceeds.

On the "Continue the process" button, you can configure specific values for form fields:

![Manual Node Configuration - Set Form Values](https://static-docs.nocobase.com/2cec2d4e2957f068877e616dec3b56dd.png)

![Manual Node Configuration - Set Form Values Pop-up](https://static-docs.nocobase.com/5ff51b60c76cdb76e6f1cc95dc3d8640.png)

In the pop-up window, you can assign values to any field in the form. Once the form is submitted, these values will be used as the final values for those fields. This feature is particularly useful when reviewing data. You can configure multiple "Continue the process" buttons in the form, each setting different enumeration values for similar fields, allowing the workflow to continue with varying outcomes based on these values.
