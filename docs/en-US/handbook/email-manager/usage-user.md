# User Guide

## Introduction

The Email Plugin enables the integration of Google and Microsoft email accounts into NocoBase for email sending, receiving, viewing, and management. Emails can also be embedded as blocks into any page.

## Linking Email Accounts

### Linking an Account

Once the email plugin is enabled, click the email icon in the top right corner to access the email management page.

![Email Icon](https://static-docs.nocobase.com/mail-1733816161753.png)

Click the **"Account setting"** button, then click **"Link account"** in the modal. Choose the type of email account to link.

![Account Settings](https://static-docs.nocobase.com/mail-1733816162279.png)

The browser will automatically open the corresponding email login page. Log in and grant the required permissions.

![Email Login](https://static-docs.nocobase.com/mail-1733816162534.png)

After granting permissions, you will be redirected back to the NocoBase page for account linking and data synchronization (the initial sync may take some time).

![Data Synchronization](https://static-docs.nocobase.com/mail-1733816162794.png)

Once synchronization is complete, the current window will close automatically, and you will return to the email management page where the linked account is visible.

![Linked Account](https://static-docs.nocobase.com/mail-1733816163177.png)

Close the modal, and you will see the email list.

![Email List](https://static-docs.nocobase.com/mail-1733816163503.png)

### Deleting an Account

You can click **"Delete"** to remove the account and associated emails.

![Delete Account](https://static-docs.nocobase.com/mail-1733816163758.png)

### Revoking Authorization

If you’ve already authorized NocoBase but want to revoke or recheck authorization, follow these steps:

#### Google
1. Open [Google Account Connections](https://myaccount.google.com/u/0/connections) and log in.

   ![Google Connections](https://static-docs.nocobase.com/mail-1733816164047.png)

2. Select the relevant application and click **"Remove"**.

   ![Remove Google App](https://static-docs.nocobase.com/mail-1733816164469.png)

   ![Google App Removed](https://static-docs.nocobase.com/mail-1733816164754.png)

#### Microsoft
1. Open [Microsoft Account](https://account.microsoft.com/) and log in.
2. Click the **"Apps and services that can access your data"** button.

   ![Microsoft Data Access](https://static-docs.nocobase.com/mail-1733816165019.png)

3. Click **"Edit"** and remove the authorization.

   ![Remove Microsoft App](https://static-docs.nocobase.com/mail-1733816165260.png)

## Email Management

### Filtering Emails

The email management page includes a filter section on the left and an email list on the right. By default, it displays the inbox.

![Filter Section](https://static-docs.nocobase.com/mail-1733816165536.png)

Emails with the same subject are grouped together, showing the total number of emails in the thread. If some emails in the thread match the filter criteria, the root email of the thread will also be displayed, with an icon indicating the type of the root email.

![Grouped Emails](https://static-docs.nocobase.com/mail-1733816165797.png)

Unread emails are displayed with bold titles, and the email icon at the top shows the count of unread emails.

![Unread Emails](https://static-docs.nocobase.com/mail-1733816166067.png)

### Manual Email Sync

Emails are synchronized every 5 minutes. To force a sync, click the **"Refresh"** button.

![Refresh Button](https://static-docs.nocobase.com/mail-1733816166364.png)

### Changing Read Status

The **"Mark as read"** and **"Mark as unread"** buttons allow you to batch change the read status of emails.

![Mark as Read/Unread](https://static-docs.nocobase.com/mail-1733816166621.png)

### Sending Emails

Click the **"Write email"** button at the top to open the email composition panel.

![Write Email](https://static-docs.nocobase.com/mail-1733816166970.png)

Fill in the required information and send the email. Currently, attachments are limited to 3MB.

![Send Email](https://static-docs.nocobase.com/mail-1733816167214.png)

### Viewing Emails

Click the **"View"** button in a row to see email details. There are two views available:

1. **Single email** view, showing detailed information.

   ![Single Email View](https://static-docs.nocobase.com/mail-1733816167456.png)

2. **Threaded emails** view, showing a collapsible list of emails with the same subject.

   ![Threaded Emails View](https://static-docs.nocobase.com/mail-1733816167750.png)

Viewing email details marks the email as read by default. You can revert this by clicking **"..."** and selecting **"Mark as unread"**.

### Replying to Emails

At the bottom of the email details, use the **"Reply"** button to respond. To reply to all recipients, use **"Reply all"**.

![Reply Email](https://static-docs.nocobase.com/mail-1733816167998.png)

### Forwarding Emails

Click the **"Forward"** button at the bottom to forward the email to another recipient.

![Forward Email](https://static-docs.nocobase.com/mail-1733816168241.png)

## Email Message Blocks

### Adding Blocks

On the configuration page, click **"Add block"**, and select the **Mail messages** block to add it.

![Add Block](https://static-docs.nocobase.com/mail-1733816168487.png)

### Configuring Fields

Click **"Configure columns"** on the block to select the fields to display. For detailed instructions, refer to the table field configuration guide.

![Configure Columns](https://static-docs.nocobase.com/mail-1733816168737.png)

### Configuring Top Actions

Click **"Configure actions"** on the block to customize the top buttons. Button actions follow the email management functionalities.

![Configure Actions](https://static-docs.nocobase.com/mail-1733816168977.png)

The **Send email** button can be pre-configured with default content.

![Send Email Config](https://static-docs.nocobase.com/mail-1733816169243.png)

![Email Content Config](https://static-docs.nocobase.com/mail-1733816169515.png)

### Configuring Data Filters

Click the settings icon on the right of the table and select **"Set the data scope"** to filter the displayed email data.

![Set Data Scope](https://static-docs.nocobase.com/mail-1733816169764.png)
