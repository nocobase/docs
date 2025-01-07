# Email Manager: User Manual

<PluginInfo commercial="true" name="email-manager"></PluginInfo>

## Introduction
The email manager plugin allows integration of Google and Microsoft email accounts into NocoBase for sending, receiving, viewing, managing emails, and more. Emails can also be integrated into any page or block.

## Linking Email Accounts

### Link Account

After enabling the email plugin, click on the email icon at the top right to enter the email management page.

![](https://static-docs.nocobase.com/mail-1733816161753.png)

Click the "Account setting" button, open the overlay, and then click the "Link account" button to select the email account type you wish to link.

![](https://static-docs.nocobase.com/mail-1733816162279.png)

The browser will automatically open the corresponding email login page. Log in to your account and grant the necessary permissions.

![](https://static-docs.nocobase.com/mail-1733816162534.png)

Once the authorization is complete, the page will redirect back to the NocoBase website to link the account and sync data (the first sync may take some time, so please wait).

![](https://static-docs.nocobase.com/mail-1733816162794.png)

Once data sync is complete, the current page will automatically close and return to the original email page. You will see the account has been linked.

![](https://static-docs.nocobase.com/mail-1733816163177.png)

Click the overlay area to close the popup and see the email list.

![](https://static-docs.nocobase.com/mail-1733816163503.png)

### Delete Account
Click "Delete" to remove the account and the linked email.

![](https://static-docs.nocobase.com/mail-1733816163758.png)

## Email Management

### Email Filtering

On the email management page, the left side is for filtering, and the right side displays the email list. By default, the inbox is shown when entering the page.

![](https://static-docs.nocobase.com/mail-1733816165536.png)

Emails with the same subject are grouped, and the number of related emails will be shown after the subject field. When some emails with the same subject meet the filtering criteria, the root email of the subject will be displayed, and the type of the root email will be marked next to the subject.

![](https://static-docs.nocobase.com/mail-1733816165797.png)

Unread email titles will be displayed in bold, and the unread email count will be marked next to the email icon at the top.

![](https://static-docs.nocobase.com/mail-1733816166067.png)

### Manually Sync Emails

The current email sync interval is 5 minutes. To force sync, click the "Refresh" button.

![](https://static-docs.nocobase.com/mail-1733816166364.png)

### Change Read Status

The "Mark as read" and "Mark as unread" buttons allow you to batch update the read status of emails.

![](https://static-docs.nocobase.com/mail-1733816166621.png)

### Send Email

Click the "Write email" button at the top to open the email composition panel.

![](https://static-docs.nocobase.com/mail-1733816166970.png)

After filling in the required information, you can send the email. Attachments are supported up to 3MB.

![](https://static-docs.nocobase.com/mail-1733816167214.png)

### View Email

Click the "View" button on the row to view the email details. There are two formats: one is a single email where you can directly see the detailed information.

![](https://static-docs.nocobase.com/mail-1733816167456.png)

The other is multiple emails with the same subject, which are displayed as a list by default. You can click to expand or collapse.

![](https://static-docs.nocobase.com/mail-1733816167750.png)

When you click to view the email details, the email status will be marked as read by default. You can click the "..." button on the right and select "Mark as unread" to revert it to unread.

### Reply to Email

After entering the email details, click the "Reply" button at the bottom to reply to the email. If there are multiple recipients, you can click "Reply all" to reply to everyone.

![](https://static-docs.nocobase.com/mail-1733816167998.png)

### Forward Email

Click the "Forward" button at the bottom to forward the email to others.

![](https://static-docs.nocobase.com/mail-1733816168241.png)

## Email Message Block

### Add Block

In the configuration page, click the "Add block" button and select the "Mail messages" block to add.

![](https://static-docs.nocobase.com/mail-1733816168487.png)

### Field Configuration

Click the "Configure columns" button on the block to choose which fields to display. For detailed instructions, refer to the table field configuration.

![](https://static-docs.nocobase.com/mail-1733816168737.png)

### Top Action Configuration

Click the "Configure actions" button on the block to configure the top buttons. The final action will correspond to the email management actions.

![](https://static-docs.nocobase.com/mail-1733816168977.png)

The "Send email" button can be configured with default content.

![](https://static-docs.nocobase.com/mail-1733816169243.png)

![](https://static-docs.nocobase.com/mail-1733816169515.png)

### Data Filter Configuration

Click the configuration on the right side of the table, select "Set the data scope," and configure the email data filter.

![](https://static-docs.nocobase.com/mail-1733816169764.png)

## Send Email

#### Create the Send Email Button

1. Add the "Write email" button in the table action bar.

![](https://static-docs.nocobase.com/mail-1735634129950.png)

2. Enter the button configuration menu to edit the button name.

![](https://static-docs.nocobase.com/mail-1735634130387.png)

#### Configure Default Send Content

1. Enter the button configuration menu, then select "Mail default value."

![](https://static-docs.nocobase.com/mail-1735634130581.png)

2. Set the default recipient as the email from the current row data.

![](https://static-docs.nocobase.com/mail-1735634130773.png)

![](https://static-docs.nocobase.com/mail-1735634130997.png)

3. Click the "Write email" button to see that the default recipient has already been filled in.

![](https://static-docs.nocobase.com/mail-1735634131163.png)

## Revoke Authorization

If your email account has been authorized but you want to delete or reauthorize it, follow the steps below:

#### **Google Email**

1. Open https://myaccount.google.com/u/0/connections and log in.

![](https://static-docs.nocobase.com/mail-1735634131347.png)

2. Click the corresponding app, then click "Remove."

![](https://static-docs.nocobase.com/mail-1735634131518.png)

![](https://static-docs.nocobase.com/mail-1735634131697.png)

#### **Microsoft Email**

1. Open https://account.microsoft.com/ and log in.

2. Click the "Apps and services that can access your data" button.

![](https://static-docs.nocobase.com/mail-1735634131870.png)

3. Click "Edit" and remove it.

![](https://static-docs.nocobase.com/mail-1735634132052.png)
