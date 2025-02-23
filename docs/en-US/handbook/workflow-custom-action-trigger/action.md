# Action Configuration

According to the context type configured in the workflow, the configuration of action buttons in different blocks will also differ.

## None

> v.1.6.0+

In the action panel and other data blocks, you can add a "Trigger Workflow" button:

![区块添加操作按钮_操作面板](https://static-docs.nocobase.com/20250215221738.png)

![区块添加操作按钮_日历](https://static-docs.nocobase.com/20250215221942.png)

![区块添加操作按钮_甘特图](https://static-docs.nocobase.com/20250215221810.png)

After added, bind the previously created workflow with context type set to "None", as an example of the button in the action panel:

![按钮绑定工作流_操作面板](https://static-docs.nocobase.com/20250215222120.png)

![选择要绑定的工作流_无上下文](https://static-docs.nocobase.com/20250215222234.png)

## Single record

Within any data block, you have the option to add a "Trigger Workflow" button to the action bar for individual rows of data, whether in forms, tables, or detail pages:

![Add Action Button to Block_Form](https://static-docs.nocobase.com/20240509165428.png)

![Add Action Button to Block_Table Row](https://static-docs.nocobase.com/20240509165340.png)

![Add Action Button to Block_Detail](https://static-docs.nocobase.com/20240509165545.png)

Once the button is added, you can link it to the workflow you previously created:

![Button Bind to Workflow](https://static-docs.nocobase.com/20240509165631.png)

![Select Workflow to Bind](https://static-docs.nocobase.com/20240509165658.png)

Afterward, simply clicking this button will initiate the custom action event:

![Trigger Result After Button Click](https://static-docs.nocobase.com/20240509170453.png)

## Multiple records

> v.1.6.0+

In the action bar of the table block, when adding a "Trigger Workflow" button, there will be an additional option to select the context type as "None" or "Multiple Records":

![区块添加操作按钮_表格](https://static-docs.nocobase.com/20250215222507.png)

When selecting "None", it is a global event, and only workflows with context type set to "None" can be bound.

When selecting "Multiple Records", you can bind workflows of the multiple records type, which can be used for batch operations after selecting multiple records (currently only supported in tables). The available workflows are limited to those configured to match the collection of the current data block:

![20250215224436](https://static-docs.nocobase.com/20250215224436.png)

When clicking the button to trigger, you must have already selected some data rows in the table, otherwise the workflow will not be triggered:

![20250215224736](https://static-docs.nocobase.com/20250215224736.png)
