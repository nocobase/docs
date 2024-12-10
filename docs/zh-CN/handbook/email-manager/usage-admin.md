# 概述

开启邮件插件后，需要管理员进行一些配置后，普通用户才可以将邮箱接入到NocoBase中。

这些配置主要获取邮件提供商相关配置，供后续API调用鉴权，主要业务流程如下：

#### 业务流程

管理员

1. 前往服务商对应的平台页面，创建应用
    
2. 配置应用相关信息
    
3. 开启 Mail 相关API权限，开启OAuth
    
4. 获取到相关信息后填写到NocoBase
    

NocoBase

1. 获取到应用参数后，可以调用服务商 Mail 相关API
    
2. 用户授权登录时获取到邮箱信息
    
3. 提供邮件相关功能
    

普通用户

1. 在NocoBase上将邮箱授权给应用
    

  

# 管理员配置

### 邮件插件开启

1. 进入插件管理页面
    
2. 开启插件
    

### 邮件服务商配置

邮件插件开启后可以进行邮件服务商配置，目前支持谷歌和微软两种邮件，点击顶部 "设置" -> "邮件设置"，进入设置页面

![](https://static-docs.nocobase.com/mail-1733818617187.png)

![](https://static-docs.nocobase.com/mail-1733818617514.png)

每个服务商内都需要填写 Client Id 和 Client Secret，下面详细介绍如何获取这两个参数

#### 谷歌配置

##### 前置条件

1. 想要后续用户能够将谷歌邮箱接入到NocoBase，必须部署在支持访问谷歌服务的服务器上，后台将会调用Google API
    

##### 注册账户

1. 打开 https://console.cloud.google.com/welcome 进入Google Cloud
    
2. 首次进入需要同意相关条款
    

![](https://static-docs.nocobase.com/mail-1733818617807.png)

##### 创建App

1. 点击顶部 "Select a project"
    

![](https://static-docs.nocobase.com/mail-1733818618126.png)

2. 点击浮层内 "NEW PROJECT" 按钮
    

![](https://static-docs.nocobase.com/mail-1733818618329.png)

3. 填写项目信息
    

![](https://static-docs.nocobase.com/mail-1733818618510.png)

4. 项目创建完成后选中项目
    

![](https://static-docs.nocobase.com/mail-1733818618828.png)

  

![](https://static-docs.nocobase.com/mail-1733818619044.png)

##### 开启 Gmail API

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

##### 配置 OAuth consent screen

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

  

##### 创建凭证 Credentials

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
    

  

##### 应用发布

当上述流程完成，以及测试用户授权登录，邮件发送等功能测试完成后进行发布

1. 点击 "OAuth consent screen" 菜单
    

![](https://static-docs.nocobase.com/mail-1733818625124.png)

2. 点击 "PUBLISH APP" 按钮
    

![](https://static-docs.nocobase.com/mail-1733818625336.png)

3. 确认并发布
    

![](https://static-docs.nocobase.com/mail-1733818625591.png)

  

#### 微软配置

##### 注册账户

1. 打开 https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account
    
2. 登录微软账户
    

![](https://static-docs.nocobase.com/mail-1733818625779.png)

##### 创建租户

1. 打开 https://azure.microsoft.com/zh-cn/pricing/purchase-options/azure-account?icid=azurefreeaccount，并登录账户
    
2. 填写基本信息，并获取验证码
    

![](https://static-docs.nocobase.com/mail-1733818625984.png)

3. 填写其他信息并继续
    

![](https://static-docs.nocobase.com/mail-1733818626352.png)

4. 填写信用卡相关信息（可以先不创建）
    

![](https://static-docs.nocobase.com/mail-1733818626622.png)

##### 获取 Client ID

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

##### API 授权

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

##### 获取秘钥

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

# 问题

Q: 微软账户授权登录后，邮件无法正常接收

A: 目前只支持Outlook邮箱账户和Gmail邮箱账户登录，微软和谷歌账户暂不支持，可参考：[answers.microsoft.com](https://answers.microsoft.com/zh-hans/outlook_com/forum/all/%E7%8E%B0%E6%9C%89%E5%BE%AE%E8%BD%AF%E8%B4%A6/dba12dda-a7c7-4346-8263-53f4a6d9dc68)