# 邮件：管理员配置

<PluginInfo commercial="true" name="email-manager"></PluginInfo>

## 介绍
邮件管理插件是一款高效、便捷的工具，支持 Gmail 和 Outlook 邮箱授权接入，帮助用户将邮件管理、邮件收发等能力集成到各区块和页面中。通过简单的授权配置，用户即可实现多账户统一管理，享受无缝的邮件通信体验。

## 配置流程

开启邮件插件后，管理员需先完成相关配置，普通用户才能将邮箱账号接入到 NocoBase 中（当前仅支持 Outlook 邮箱账户和 Gmail 邮箱账户的授权登录，暂不支持微软账户和谷歌账户的直接接入）。

配置的核心在于邮件服务提供商 API 调用的鉴权设置。管理员需完成以下步骤以确保插件功能正常运行：

1. **从服务商获取鉴权信息**  
   - 登录邮件服务提供商的开发者控制台（如 Google Cloud Console 或 Microsoft Azure Portal）。  
   - 创建新的应用或项目，启用 Gmail 或 Outlook 邮箱 API 服务。  
   - 获取对应的客户端 ID（Client ID）和客户端密钥（Client Secret）。  
   - 配置重定向 URI，确保与 NocoBase 的插件回调地址一致。  

2. **邮件服务提供商配置**  
   - 进入邮件插件的配置页面。  
   - 提供所需的 API 鉴权信息，包括客户端 ID（Client ID）、客户端密钥（Client Secret）等，确保与邮件服务提供商的授权对接正常。

3. **授权登录**  
   - 用户通过 OAuth 协议登录邮箱账户。  
   - 插件会自动生成并存储用户的授权令牌，用于后续的 API 调用和邮件操作。

4. **邮箱接入**  
   - 用户成功授权后，其邮箱账户将被接入到 NocoBase 中。  
   - 插件会同步用户的邮件数据并提供管理、收发邮件的功能。

5. **邮件功能使用**  
   - 用户可在平台内直接查看邮件、管理邮件、发送邮件等。  
   - 所有操作通过邮件服务提供商的 API 调用完成，确保实时同步和高效传输。  

通过上述流程，NocoBase 的邮件插件可为用户提供高效、安全的邮件管理服务。如果在配置过程中遇到问题，请参阅相关文档或联系技术支持团队获取帮助。

## 插件配置

### 邮件插件开启

1. 进入插件管理页面 
2. 找到 "Email manager" 插件，并开启

### 邮件服务商配置

邮件插件开启后可以进行邮件服务商配置，目前支持谷歌和微软两种邮件，点击顶部 "设置" -> "邮件设置"，进入设置页面。

![](https://static-docs.nocobase.com/mail-1733818617187.png)

![](https://static-docs.nocobase.com/mail-1733818617514.png)

每个服务商内都需要填写 Client Id 和 Client Secret，下面详细介绍如何获取这两个参数

## 谷歌配置

### 前置条件

1. 想要后续用户能够将谷歌邮箱接入到NocoBase，必须部署在支持访问谷歌服务的服务器上，后台将会调用Google API
    
### 注册账户

1. 打开 https://console.cloud.google.com/welcome 进入Google Cloud  
2. 首次进入需要同意相关条款
    
![](https://static-docs.nocobase.com/mail-1733818617807.png)

### 创建App

1. 点击顶部 "Select a project"
    
![](https://static-docs.nocobase.com/mail-1733818618126.png)

2. 点击浮层内 "NEW PROJECT" 按钮

![](https://static-docs.nocobase.com/mail-1733818618329.png)

3. 填写项目信息
    
![](https://static-docs.nocobase.com/mail-1733818618510.png)

4. 项目创建完成后选中项目

![](https://static-docs.nocobase.com/mail-1733818618828.png)

![](https://static-docs.nocobase.com/mail-1733818619044.png)

### 开启 Gmail API

1. 点击 "APIs & Services" 按钮

![](https://static-docs.nocobase.com/mail-1733818619230.png)

2. 进入 APIs & Services 面板

![](https://static-docs.nocobase.com/mail-1733818619419.png)

3. 搜索 "mail"

![](https://static-docs.nocobase.com/mail-1733818619810.png)

![](https://static-docs.nocobase.com/mail-1733818620020.png)

4. 点击 "ENABLE" 按钮，开启 Gmail API

![](https://static-docs.nocobase.com/mail-1733818620589.png)

![](https://static-docs.nocobase.com/mail-1733818620885.png)

### 配置 OAuth consent screen

1. 点击左侧 "OAuth consent screen" 菜单

![](https://static-docs.nocobase.com/mail-1733818621104.png)

2. 选择 "External"

![](https://static-docs.nocobase.com/mail-1733818621322.png)

3. 填写项目信息（用于后续授权页面显示）点击保存

![](https://static-docs.nocobase.com/mail-1733818621538.png)

4. 填写 Developer contact information，点击继续

![](https://static-docs.nocobase.com/mail-1733818621749.png)

5. 点击继续

![](https://static-docs.nocobase.com/mail-1733818622121.png)

6. 添加测试用户，用于App发布前测试

![](https://static-docs.nocobase.com/mail-1733818622332.png)

![](https://static-docs.nocobase.com/mail-1733818622537.png)

7. 点击继续

![](https://static-docs.nocobase.com/mail-1733818622753.png)

8. 查看概览信息，返回控制面板

![](https://static-docs.nocobase.com/mail-1733818622984.png)

### 创建凭证 Credentials

1. 点击左侧 "Credentials" 菜单

![](https://static-docs.nocobase.com/mail-1733818623168.png)

2. 点击 "CREATE CREDENTIALS" 按钮，选择 "OAuth client ID"

![](https://static-docs.nocobase.com/mail-1733818623386.png)

3. 选择 "Web application"

![](https://static-docs.nocobase.com/mail-1733818623758.png)

4. 填写应用信息

![](https://static-docs.nocobase.com/mail-1733818623992.png)

5. 填写项目最终部署的域名（此处示例为NocoBase的测试地址）

![](https://static-docs.nocobase.com/mail-1733818624188.png)

6. 添加授权回调地址，必须为 `域名 + "/admin/settings/mail/oauth2"`，示例：`https://pr-1-mail.test.nocobase.com/admin/settings/mail/oauth2`

![](https://static-docs.nocobase.com/mail-1733818624449.png)

7. 点击创建，可以查看OAuth信息

![](https://static-docs.nocobase.com/mail-1733818624701.png)

8. 分别拷贝 Client ID 和 Client serret 内容填写到 邮件配置页面中

![](https://static-docs.nocobase.com/mail-1733818624923.png)

9. 点击保存，配置完成  

### 应用发布

当上述流程完成，以及测试用户授权登录，邮件发送等功能测试完成后进行发布

1. 点击 "OAuth consent screen" 菜单

![](https://static-docs.nocobase.com/mail-1733818625124.png)

2. 点击 "EDIT APP" 按钮，随后点击底部 "SAVE AND CONTINUE" 按钮

![](https://static-docs.nocobase.com/mail-1735633686380.png)

![](https://static-docs.nocobase.com/mail-1735633686750.png)

3. 点击 "ADD OR REMOVE SCOPES" 按钮，进行用户权限范围勾选 

![](https://static-docs.nocobase.com/mail-1735633687054.png)

4. 输入 "Gmail API" 进行搜索，然后勾选 "Gmail API"（确认Scope值为 "https://mail.google.com/"的 Gmail API）

![](https://static-docs.nocobase.com/mail-1735633687283.png)

5. 点击底部 "UPDATE" 按钮进行保存

![](https://static-docs.nocobase.com/mail-1735633687536.png)

6. 点击每个页面底部 "SAVE AND CONTINUE" 按钮，最后点击 "BACK TO DASHBOARD" 按钮返回控制面板页面

![](https://static-docs.nocobase.com/mail-1735633687744.png)

![](https://static-docs.nocobase.com/mail-1735633687912.png)

![](https://static-docs.nocobase.com/mail-1735633688075.png)

7. 点击 "PUBLISH APP" 按钮后出现发布确认页面，罗列了发布需要提供的相关内容。随后点击 "CONFIRM" 按钮

![](https://static-docs.nocobase.com/mail-1735633688257.png)

8. 再次回到控制台页面，可以看到发布状态为 "In production"

![](https://static-docs.nocobase.com/mail-1735633688425.png)

9. 点击 "PREPARE FOR VERIFICATION" 按钮，填写必填的相关信息，点击 "SAVE AND CONTINUE" 按钮（图内数据仅为示例）

![](https://static-docs.nocobase.com/mail-1735633688634.png)

![](https://static-docs.nocobase.com/mail-1735633688827.png)

10. 继续填写相关必要信息（图内数据仅为示例）

![](https://static-docs.nocobase.com/mail-1735633688993.png)

11. 点击 "SAVE AND CONTINUE" 按钮

![](https://static-docs.nocobase.com/mail-1735633689159.png)

12. 点击 "SUBMIT FOR VERIFICATION" 按钮，提交 Verification

![](https://static-docs.nocobase.com/mail-1735633689318.png)

13. 等待审批结果

![](https://static-docs.nocobase.com/mail-1735633689494.png)

14. 在审批尚未通过的情况下，用户可以点击 unsafe 链接进行授权登录

![](https://static-docs.nocobase.com/mail-1735633689645.png)
  
## 微软配置

### 注册账户

1. 打开 https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account
    
2. 登录微软账户
    
![](https://static-docs.nocobase.com/mail-1733818625779.png)

### 创建租户

1. 打开 https://azure.microsoft.com/zh-cn/pricing/purchase-options/azure-account?icid=azurefreeaccount，并登录账户
    
2. 填写基本信息，并获取验证码

![](https://static-docs.nocobase.com/mail-1733818625984.png)

3. 填写其他信息并继续

![](https://static-docs.nocobase.com/mail-1733818626352.png)

4. 填写信用卡相关信息（可以先不创建）

![](https://static-docs.nocobase.com/mail-1733818626622.png)

### 获取 Client ID

1. 点击顶部菜单，选择 "Microsoft Entra ID"

![](https://static-docs.nocobase.com/mail-1733818626871.png)

2. 选择左侧 "App registrations"

![](https://static-docs.nocobase.com/mail-1733818627097.png)

3. 点击顶部 "New registration"

![](https://static-docs.nocobase.com/mail-1733818627309.png)

4. 填写信息并提交

名称可以随意，account types参照下图中选择，Redirect URI可以先不填

![](https://static-docs.nocobase.com/mail-1733818627555.png)

5. 获取到 Client ID

![](https://static-docs.nocobase.com/mail-1733818627797.png)

### API 授权

1. 打开右侧 "API permissions" 菜单

![](https://static-docs.nocobase.com/mail-1733818628178.png)

2. 点击 "Add a permisson" 按钮

![](https://static-docs.nocobase.com/mail-1733818628448.png)

3. 点击 "Microsoft Graph"

![](https://static-docs.nocobase.com/mail-1733818628725.png)

![](https://static-docs.nocobase.com/mail-1733818628927.png)

4. 搜索并添加如下权限，最终结果如下图
    
    1. `"email"`
    2. `"offline_access"`
    3. `"IMAP.AccessAsUser.All"`
    4. `"SMTP.Send"`
    5. `"offline_access"`
    6. `"User.Read"` (By default)

![](https://static-docs.nocobase.com/mail-1733818629130.png)

### 获取秘钥

1. 点击左侧 "Certificates & secrets"

![](https://static-docs.nocobase.com/mail-1733818629369.png)

2. 点击 "New client secret" 按钮

![](https://static-docs.nocobase.com/mail-1733818629554.png)

3. 填写描述和过期时间，并添加

![](https://static-docs.nocobase.com/mail-1733818630292.png)

4. 获取到 Secret ID

![](https://static-docs.nocobase.com/mail-1733818630535.png)

5. 分别拷贝 Client ID 和 Client serret 信息填写到 邮件配置页面中

![](https://static-docs.nocobase.com/mail-1733818630710.png)

## 常见问题

Q: 微软账户授权登录后，邮件无法正常接收

A:  目前只支持Outlook邮箱账户和Gmail邮箱账户授权登录，微软账户和谷歌账户暂不支持，可参考：[answers.microsoft.com](https://answers.microsoft.com/zh-hans/outlook_com/forum/all/%E7%8E%B0%E6%9C%89%E5%BE%AE%E8%BD%AF%E8%B4%A6/dba12dda-a7c7-4346-8263-53f4a6d9dc68)

**小提示**：如果你并不确定自己是不是「真正的 Outlook.com 邮箱」或者「Gmail 邮箱」，可以尝试用网页方式访问 Outlook.com 或 Gmail.com，看看能否直接登录、正常发邮件到别处。如果不行，那就说明你可能并不拥有对应的邮箱服务，需要先开通或改用别的邮箱。
