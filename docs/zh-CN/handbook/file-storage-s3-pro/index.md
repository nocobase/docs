# 文件存储：S3 (Pro)

## 介绍

在原文件管理插件的基础上，新增支持兼容 S3 协议的文件存储类型。任何支持 S3 协议的对象存储服务均可轻松接入，例如亚马逊 S3、阿里云 OSS、腾讯云 COS、MinIO、Cloudflare R2等，进一步提升存储服务的兼容性与灵活性。

## 功能特点

1. 直连上传：文件上传过程无需经过 NocoBase 服务器，直接对接文件存储服务，实现更加高效、快速的上传体验。
    
2. 私有访问：访问文件时，所有的 URL 均为经过签名的临时授权地址，确保文件访问的安全性和时效性。


## 使用场景

1. **文件表管理**：集中管理和存储所有上传的文件，支持多种文件类型和存储方式，方便文件的分类与检索。
    
2. **附件字段存储**：用于表单或记录中上传附件的数据存储，支持与具体数据记录的关联。
  

## 插件配置

1. 开启 plugin-file-storage-s3-pro 插件
    
2. 点击 "Setting-> FileManager" 进入文件管理设置

3. 点击 "Add new" 按钮，选择 "S3 Pro storage"
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=ZGM0N2Q5ZmJlNTk0Mjk1ODVmNDc3NDIyZTI3ZWQwOWFfb0pVblBobGdrc2g3cUNXSTRHck10TVR0S0Q3YUkxWVZfVG9rZW46WktQQmI4TkRObzd4YjJ4bndjdmNoZ0dobkdOXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

4. 在弹出浮层后，您将看到需要填写的表单内容较多。可以参考后续文档，获取对应文件服务的相关参数信息，并将其正确填写到表单中。
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NGViNjFhMGI0MzY0NTI0NTA4MjAxNDlkZWFjYzI0YjNfYUZSMjBjTXlXRXZsUjFEQTNTdjRiRHNlTWJlejQ4RXlfVG9rZW46Qnd3VmJUUGN0b0tPVUl4VnJHTWNPVEZabk92XzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)


## 服务商配置

### 亚马逊S3

##### OSS创建

1. 打开 https://ap-southeast-1.console.aws.amazon.com/s3/home 进入S3控制台
    
2. 点击右侧 "Create bucket" 按钮
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MGZiN2E1Yzg1ODBhYWJmMWYxOGYxM2ViOTA2OTgyZGRfcUFMRzZlaHExWDM0ak1pWkNBZjVsSVcxbEpjSmJDd0hfVG9rZW46VHlIaWJ3WDBOb083THV4YngycmNPbUFIbjZkXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

2. 填写 Bucket Name（存储桶名称），其他字段可保持默认设置，向下滚动至页面底部，点击 **"**Create**"** 按钮完成创建。
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NGU2OGNjMmQ4YWJjMjgxZjE1NTgxYTk4ZGNiNzYyYTlfWjdJZUlKNDhDSml4UHB3NHp0Q0luVXpwUG9yZ3VLa0hfVG9rZW46SFRHTmJUaWMyb3RmdHp4dHFjMmN6Vzh3blVjXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MjY2NDNmYWQxYmNiYzdiNWRlMDkxOTM2ODU3Nzk2MmVfSFRvUHhiMWg2MTY3cW9EcDRWTWpvNkFiUnloUFd4eEtfVG9rZW46UDZIc2JsREMyb1VLaVJ4V2lwcmNHZmI3bmRmXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

##### CORS配置

1. 进入buckets 列表，找到并点击刚刚创建的 Bucket 以进入其详细页面
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=Njk1YzI4MDJkZjZjNDE4NjNmOTczYWIwYzFkNjI5ZjdfSHVsaU9EekwxcHRmSkVDVGRjZXRIWHdNS001QkF1dTlfVG9rZW46TGxxZmJZUDdGb3ZJWkh4cWxlR2N6QnQ1bkxjXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

2. 点击 "Permission" 标签页，然后向下滚动找到 CORS 配置部分
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MmIxOWY1Y2IwZWMxMmQxNWUwNmMxYzdjOTUzOGYwMjFfNHkzVTNIcjRwQUtpcWdzcUJ1ekdYZjc5OU1XVkh1VG5fVG9rZW46S1lJZWI3ckZVb3ZZbG14WmVHVGMyaXRzbmtkXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=ZDNiYWJiYjNkZTk5MzBmNGExYjE2OTZiYzA0YjQyZDRfMk14UFFsQzdiYTBqbE1WSTBQN2wzVUo3U3ZaY0U2bkNfVG9rZW46TWRrTWIzeTY1b0VLRVF4bVAzVmNRN2JrblRKXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

3. 填入以下配置（可以自定细化配置），并保存
    

```Bash
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "POST",
            "PUT"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": [
            "ETag"
        ],
        "MaxAgeSeconds": 3000
    }
]
```

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NDM4YzFjNzA1NGI4MWQ4OGFiMjBkM2Q1NTg4ZmQyNzFfb3Jlcm10MzROMnJSZlBjem81bm9uY2xtZG9VY1JJdGpfVG9rZW46RHpQZGJoYzY0b3oyeDR4Umo1OGNDV3JsblVmXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

##### AccessKey、SecretAccessKey 获取

1. 点击页面右上角的 "Security credentials" 按钮
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=ZDM3OTRhODUyOWFmYzJiNTkzY2QwOWEwYjc2NDMwNzFfUHZpeFFIWWVCd3RDTFZlWnExb3VhaTY2WjdtWnZhZFRfVG9rZW46S3hnQWJzSEM0bzA4dFF4RFJUVGNleW9lbnplXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

2. 向下滚动，找到 "Access Keys" 部分，点击 "Create Access Key" 按钮。
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NDczMDg4ODUyYzhlNzIxZWQ4MmMzZDAzZjM4MmI4NWVfdUNKYjRITjNXY00wVHpwbkhGb3ppbjA0NHlsZkY5WEdfVG9rZW46VkZvNGJHbjdFb2NmTWd4MGt1QWNwb1I2bkxmXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

3. 点击 同意（此处为主账号演示，建议在正式环境中使用 IAM 进行操作）。
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MmI5ZGUzZTQ2ZDIxNjg3ZDc0ZDgxNGNhMDUzYWU1NDlfRUF2NVllU05taVNXalNtUEpsZzZVY2dMNlY0eHZJVjVfVG9rZW46SXkzcGJoMzMzb0Q4UEN4eG5tc2NsQTRmbm5nXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

4. 保存页面中显示的 Access key 和 Secret access key
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MWZiY2Q1NmRiNjQxZGI1ZTljNDIxOWEyYjlmZGQ2ZGRfVjhvU05wZm02c21YMTFVVXlocHJLVDVuSHlpSGN4Wk5fVG9rZW46VW1wdmJKclRib3NEaTZ4R0FsNWNpR0xqbm9jXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

##### 参数获取与配置

1. AccessKey ID 和 AccessKey Secret 为您在上一操作中获取到的对应值，请准确填写
    
2. 进入 bucket 详情页的 properties 面板，您可以在其中获取到 Bucket 名称和 Region（区域）信息。
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MzMyMDUyZTQ3MzdiYjA4MWU1ZjljZTU3NmVhMWRlMzNfY2VPUGpvRTMydjNsT2gwTTM2RUI4OVNoWHZIdUJRMk9fVG9rZW46RTYzMGJNYTl1b0Q5a2R4dXhrYWN1SUxzbkhBXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

##### 公开访问

此为非必要配置，当你需要将上传文件完全公开时，进行配置

1. 进入Permissions 面板，向下滚动到Object Ownership，点击编辑，开启 ACLs
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MzRjNTllZThlMzhjN2Y5YzdiZjBlMGQ5MDg3ODJhOGNfaXFkdmx1S3lUc29qU215YU5oODlENW9yZWY2dzZKN2NfVG9rZW46WTVnU2JTdUhLb3BRVHl4RDFUS2M2R01tbm9iXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

2. 滚动到Block public access，点击编辑，设置成允许ACLs控制
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MTEzZTY4MWY2MzFlNTUzY2U3MmY1ZmI2ZjE0YmIwN2RfZEljYU5pcXhyTE5UaTJncDMwdWR3eklmRzF2MVR0TkpfVG9rZW46WjBVZmI5RWFub3pONTZ4Y2JWSWNZVzhobnJqXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

3. 在NocoBase中勾选 Public access
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=Mzc5MjdkYTM2YWJkMDUzZTk0MWM4NTdjMDdkYzEyZjhfQlh0THl2UUtaUktSQlpvZjlvcFliRmZzMFNkNG5GdVRfVG9rZW46WHhCVWJNckRHb3dFdFl4Z0FKRWNVY3c4bnNoXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

### 阿里云OSS

##### OSS创建

1. 打开OSS控制台 https://oss.console.aliyun.com/overview
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NWZlYzNlNmUyZDNlZDVlMjYyY2UyMTUzMjBlNDJlZThfYjlTVkROOXU2TFNmTFRlNDdkWEJKaUVJbW1QOHJndjFfVG9rZW46RlBYNGI0TkFJb29VWnd4eXRSaWNQdkNJblpkXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

2. 点进左侧菜单中的 "Buckets"，然后点击 "Create Bucket" 按钮开始创建存储桶
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MzI1ZDIwMGE5NmM2YWM3MjdmOTE1NTkxYmM5ZjdlMzlfaWl2MTVhRGY3aWdRYmxuakQ1SDJRelBRWHdTZEdCcXVfVG9rZW46RmVtN2J4N1hZb1Fsbk54eGZ3UWNhQlR6bkNnXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

3. 填写 bucket 相关信息，最后点击 Create 按钮
    
    1. Bucket Name 符合自己的业务，名称随意
        
    2. Region 选择自己用户最近的区域
        
    3. 其他内容可以默认，或者基于需求自行配置
        

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NTIwNzhlZDBkZjliNDI1ZjJjMjEzNjMyYjMyMjc2OTNfY0I1Tno4STlQQk9DbUVoVHA0T2Jqc0VHejJDWDJYd2xfVG9rZW46UVdvcWJMaTB3b1h1OWh4dUpueWNNS0szbmdmXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

  

##### CORS 配置

1. 进入上一步创建的 bucket 详情页
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=YzQyMzJjNjk1NDMwMGNiYjViM2ZlZjMzOGI3ZjI2MzdfN0FYdkpZSHR6SEVpd1FSVjdxUkhWejFuRnNhc211TU1fVG9rZW46RDVFeWJpMzlGb3ZEZGZ4OFFDU2M3NDVHbmNkXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

2. 点击中间菜单中的 "Content Security -> CORS"
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=YmQ4NDZiYzY1ZDE2MGY5MTljNzA3NWM0YmE3YzIxMTlfbnI1ZGlheEl6N0tWWjlPV2dUOVlyVGlYejU5bzlVRFVfVG9rZW46R3ZXT2JBNlZWb3ZmaGZ4MW1RVGN0d0kwbm5mXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

3. 点击 "Create Rule" 按钮，并填写相关内容滚动至下方点击 "OK"。可参考下方截图，或者进行更加详细设置
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWU0NmRmOGFlMmViZjkzMjNiNDY3NzA3NTI3ZGY2YjNfQnR3UVlPMm9jTXdLeVc0TVRaTzIwR0kzTTU0ZWlaemhfVG9rZW46QUZTS2I0QXZ2bzN5RXd4dVdlbmNUSDEwbjVkXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

  

##### AccessKey、SecretAccessKey 获取

1. 点击右上角头像下方 "AccessKey"
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=ZDRkYjc3NjM2MmU3NmUwNzdiY2RjMDc2YzVmNGU1YmJfcDdkYWp0dlVUZTlrRHMycEl2cFZTUmN4ZU5JamRHd1FfVG9rZW46Q0p6VWI5bkQ4b2IzNk94WDhHd2NpRGlDbjdiXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

2. 此处为了方便演示，使用主账户进行创建AccessKey，正式使用场景建议使 RAM 去创建，可以参考 https://help.aliyun.com/zh/ram/user-guide/create-an-accesskey-pair-1?spm=5176.28366559.0.0.1b5c3c2fUI9Ql8#section-rjh-18m-7kp
    
3. 点击 "Create AccessKey" 按钮
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=OWY1NzI3OGZmOTdhNTRkNzY3NThiYjg0Y2I0MjIyN2FfZ2UzZjVjM1d3aEZQWFdUaUt2d3Z0blpWa2ZoRWRCVFZfVG9rZW46TWFqZmJaTVZ2bzZlamx4Z09uSWNteURUbkFnXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

4. 进行账户验证
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NWU5MTcyMDU3ZjM5MTY5YzNkNzc5Y2ZkOWM1MGQ4NzVfMkl1OXJsM0w1VHpmck9pSUxNVU9sM3JCZDgwZXg2emdfVG9rZW46UnNYNWI0dlM5b21VMnB4bzRXZWNzZGRkbmplXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

5. 保存页面中显示的 Access key 和 Secret access key
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NWQ2MTAzYTA2MGUyMGEzYzE5MDI4MmU4ZGIwMWIxZTRfNEpydE9vTGlHeVhiTHVhMFNvcWxESllEUE5EQTJtSkhfVG9rZW46R3pyYWIwS0JMb1hsNFF4VW1lcGNzeDI2blFmXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

  

##### 参数获取与配置

1. AccessKey ID 和 AccessKey Secret 为上一操作中获取到的值
    
2. 进入 bucket 详情页，获取到 Bucket
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=YmE5YzljODk0MDE5NGJmOGNlMDg5OGRlZDI1YWJkNTNfSlJvUHRsWDFJMXp0SkNlRVYxcHNIazAwbEhFYU00N0hfVG9rZW46WEJZcWJtbUtlb2NsNEt4Z2hvZ2NFYlpmblNmXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

3. 向下滚动，获取到 Region（后面的 ".aliyuncs.com" 不需要 ）
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MGYxNmYyYzhmYWE3ZTgyY2I0MWZlZWQ1MTZhY2Y0MzdfSHBaWUJtRG5FUnl4cXZ4Q0VtU0lTd3FlVmpyN0J6bDJfVG9rZW46RjJ4V2JueEx6b0loejN4VVF0Y2NiM1JTblhlXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

4. 获取到 endpoint 地址，填入NocoBase的时候需要添加 https:// 前缀
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MGRhYTJjNzk5NTViMzY2ODQ2OTMwMDdjODcyMWJhZDJfVHVBY3lBZlhOYjhLdDE3eExoM0dORWhCeWZ3VkYwN2xfVG9rZW46TmxnYWJJVnBzb2xGTEN4Q09SR2NCamRHbk01XzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)


### 腾讯COS

可以参考上述的文件服务进行配置，主要逻辑都相似


### MinIO

可以参考上述的文件服务进行配置，需要注意的点如下

1. 私有部署的MinIO没有Region概念，可以配置成 "auto"
    
2. Endpoint 填写部署服务的域名或者ip地址
    
3. 需将Force path style设置为 Path-Style，最终文件地址为https://serverAddress/bucket-name/fileKey
    

### Cloudflare R2

可以参考上述的文件服务进行配置


## 用户使用

参照 https://docs-cn.nocobase.com/handbook/file-manager