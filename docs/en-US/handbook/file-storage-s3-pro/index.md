# File Storage: S3 (Pro)

## Introduction

Building on the original file management plugin, this update adds support for file storage using the S3 protocol. This allows seamless integration with any object storage service that supports the S3 protocol, such as Amazon S3, Alibaba Cloud OSS, Tencent Cloud COS, MinIO, Cloudflare R2, and more, enhancing storage service compatibility and flexibility.

## Features

1. **Direct Upload**: Files are uploaded directly to the storage service without passing through the NocoBase server, ensuring a more efficient and faster upload experience.
   
2. **Private Access**: All URLs for accessing files are signed temporary authorization links, ensuring security and time-limited access.

## Use Cases

1. **File Table Management**: Centralized management and storage of all uploaded files, supporting various file types and storage methods for easy categorization and retrieval.
   
2. **Attachment Field Storage**: Data storage for attachments uploaded in forms or records, with support for association with specific data records.

## Plugin Configuration

1. Enable the `plugin-file-storage-s3-pro` plugin.
   
2. Navigate to **Settings > File Manager** to access file management settings.

3. Click **Add New** and select **S3 Pro storage**.

   ![Add Storage](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=ZGM0N2Q5ZmJlNTk0Mjk1ODVmNDc3NDIyZTI3ZWQwOWFfb0pVblBobGdrc2g3cUNXSTRHck10TVR0S0Q3YUkxWVZfVG9rZW46WktQQmI4TkRObzd4YjJ4bndjdmNoZ0dobkdOXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

4. Fill out the configuration form with the relevant parameters for your chosen file storage service. Refer to the service documentation for details on obtaining the necessary information.

   ![Configuration Form](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NGViNjFhMGI0MzY0NTI0NTA4MjAxNDlkZWFjYzI0YjNfYUZSMjBjTXlXRXZsUjFEQTNTdjRiRHNlTWJlejQ4RXlfVG9rZW46Qnd3VmJUUGN0b0tPVUl4VnJHTWNPVEZabk92XzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

## Service Provider Configuration

### Amazon S3

#### OSS Creation

1. Open the S3 console: [S3 Console](https://ap-southeast-1.console.aws.amazon.com/s3/home).
   
2. Click **Create bucket**.

   ![Create Bucket](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MGZiN2E1Yzg1ODBhYWJmMWYxOGYxM2ViOTA2OTgyZGRfcUFMRzZlaHExWDM0ak1pWkNBZjVsSVcxbEpjSmJDd0hfVG9rZW46VHlIaWJ3WDBOb083THV4YngycmNPbUFIbjZkXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

3. Fill in the **Bucket Name** and leave other fields as default. Scroll to the bottom and click **Create** to complete the process.

   ![Bucket Name](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NGU2OGNjMmQ4YWJjMjgxZjE1NTgxYTk4ZGNiNzYyYTlfWjdJZUlKNDhDSml4UHB3NHp0Q0luVXpwUG9yZ3VLa0hfVG9rZW46SFRHTmJUaWMyb3RmdHp4dHFjMmN6Vzh3blVjXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

   ![Bucket Settings](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MjY2NDNmYWQxYmNiYzdiNWRlMDkxOTM2ODU3Nzk2MmVfSFRvUHhiMWg2MTY3cW9EcDRWTWpvNkFiUnloUFd4eEtfVG9rZW46UDZIc2JsREMyb1VLaVJ4V2lwcmNHZmI3bmRmXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

#### CORS Configuration

1. Navigate to the **Buckets** list, locate your bucket, and click its name to open the details page.

   ![Buckets](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=Njk1YzI4MDJkZjZjNDE4NjNmOTczYWIwYzFkNjI5ZjdfSHVsaU9EekwxcHRmSkVDVGRjZXRIWHdNS001QkF1dTlfVG9rZW46TGxxZmJZUDdGb3ZJWkh4cWxlR2N6QnQ1bkxjXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

2. Select the **Permissions** tab and scroll down to the CORS configuration section.

   ![CORS Settings](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MmIxOWY1Y2IwZWMxMmQxNWUwNmMxYzdjOTUzOGYwMjFfNHkzVTNIcjRwQUtpcWdzcUJ1ekdYZjc5OU1XVkh1VG5fVG9rZW46S1lJZWI3ckZVb3ZZbG14WmVHVGMyaXRzbmtkXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

3. Enter the following configuration and save:

   ```json
   [
       {
           "AllowedHeaders": ["*"],
           "AllowedMethods": ["POST", "PUT"],
           "AllowedOrigins": ["*"],
           "ExposeHeaders": ["ETag"],
           "MaxAgeSeconds": 3000
       }
   ]

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NDM4YzFjNzA1NGI4MWQ4OGFiMjBkM2Q1NTg4ZmQyNzFfb3Jlcm10MzROMnJSZlBjem81bm9uY2xtZG9VY1JJdGpfVG9rZW46RHpQZGJoYzY0b3oyeDR4Umo1OGNDV3JsblVmXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

#### AccessKey, SecretAccessKey

1. Click the "Security credentials" button at the top right of the page.
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=ZDM3OTRhODUyOWFmYzJiNTkzY2QwOWEwYjc2NDMwNzFfUHZpeFFIWWVCd3RDTFZlWnExb3VhaTY2WjdtWnZhZFRfVG9rZW46S3hnQWJzSEM0bzA4dFF4RFJUVGNleW9lbnplXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

2. Scroll down to find the "Access Keys" section, then click the "Create Access Key" button.
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NDczMDg4ODUyYzhlNzIxZWQ4MmMzZDAzZjM4MmI4NWVfdUNKYjRITjNXY00wVHpwbkhGb3ppbjA0NHlsZkY5WEdfVG9rZW46VkZvNGJHbjdFb2NmTWd4MGt1QWNwb1I2bkxmXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

3. Click Agree (This is a demonstration for the main account, it is recommended to use IAM in the production environment).
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MmI5ZGUzZTQ2ZDIxNjg3ZDc0ZDgxNGNhMDUzYWU1NDlfRUF2NVllU05taVNXalNtUEpsZzZVY2dMNlY0eHZJVjVfVG9rZW46SXkzcGJoMzMzb0Q4UEN4eG5tc2NsQTRmbm5nXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

4. Save the Access Key and Secret Access Key displayed on the page.
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MWZiY2Q1NmRiNjQxZGI1ZTljNDIxOWEyYjlmZGQ2ZGRfVjhvU05wZm02c21YMTFVVXlocHJLVDVuSHlpSGN4Wk5fVG9rZW46VW1wdmJKclRib3NEaTZ4R0FsNWNpR0xqbm9jXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

#### Parameter Configuration

1. The AccessKey ID and AccessKey Secret are the corresponding values obtained in the previous operation. Please enter them accurately.
    
2. Go to the bucket details page, and in the properties panel, you can find the Bucket Name and Region (Region is the area information).
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MzMyMDUyZTQ3MzdiYjA4MWU1ZjljZTU3NmVhMWRlMzNfY2VPUGpvRTMydjNsT2gwTTM2RUI4OVNoWHZIdUJRMk9fVG9rZW46RTYzMGJNYTl1b0Q5a2R4dXhrYWN1SUxzbkhBXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

#### Public Access

This is an optional configuration, used when you need to make the uploaded files fully public.

1. Go to the Permissions panel, scroll down to Object Ownership, click Edit, and enable ACLs.
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MzRjNTllZThlMzhjN2Y5YzdiZjBlMGQ5MDg3ODJhOGNfaXFkdmx1S3lUc29qU215YU5oODlENW9yZWY2dzZKN2NfVG9rZW46WTVnU2JTdUhLb3BRVHl4RDFUS2M2R01tbm9iXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

2. Scroll down to Block public access, click Edit, and set it to allow ACLs control.
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MTEzZTY4MWY2MzFlNTUzY2U3MmY1ZmI2ZjE0YmIwN2RfZEljYU5pcXhyTE5UaTJncDMwdWR3eklmRzF2MVR0TkpfVG9rZW46WjBVZmI5RWFub3pONTZ4Y2JWSWNZVzhobnJqXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

3. Check the Public access option in NocoBase.
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=Mzc5MjdkYTM2YWJkMDUzZTk0MWM4NTdjMDdkYzEyZjhfQlh0THl2UUtaUktSQlpvZjlvcFliRmZzMFNkNG5GdVRfVG9rZW46WHhCVWJNckRHb3dFdFl4Z0FKRWNVY3c4bnNoXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

### Aliyun OSS

#### OSS Creation

1. Open the OSS console [https://oss.console.aliyun.com/overview](https://oss.console.aliyun.com/overview)
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NWZlYzNlNmUyZDNlZDVlMjYyY2UyMTUzMjBlNDJlZThfYjlTVkROOXU2TFNmTFRlNDdkWEJKaUVJbW1QOHJndjFfVG9rZW46RlBYNGI0TkFJb29VWnd4eXRSaWNQdkNJblpkXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

2. Click "Buckets" in the left menu, then click the "Create Bucket" button to start creating the storage bucket.
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MzI1ZDIwMGE5NmM2YWM3MjdmOTE1NTkxYmM5ZjdlMzlfaWl2MTVhRGY3aWdRYmxuakQ1SDJRelBRWHdTZEdCcXVfVG9rZW46RmVtN2J4N1hZb1Fsbk54eGZ3UWNhQlR6bkNnXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

3. Fill in the bucket information and click the Create button.
    
    1. Bucket Name can be chosen based on your business needs, the name is flexible.
        
    2. Choose the Region closest to your location.
        
    3. Other settings can be default or customized based on your needs.
        

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NTIwNzhlZDBkZjliNDI1ZjJjMjEzNjMyYjMyMjc2OTNfY0I1Tno4STlQQk9DbUVoVHA0T2Jqc0VHejJDWDJYd2xfVG9rZW46UVdvcWJMaTB3b1h1OWh4dUpueWNNS0szbmdmXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

  

#### CORS Configuration

1. Go to the bucket details page created in the previous step.
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=YzQyMzJjNjk1NDMwMGNiYjViM2ZlZjMzOGI3ZjI2MzdfN0FYdkpZSHR6SEVpd1FSVjdxUkhWejFuRnNhc211TU1fVG9rZW46RDVFeWJpMzlGb3ZEZGZ4OFFDU2M3NDVHbmNkXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

2. Click "Content Security -> CORS" in the middle menu.
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=YmQ4NDZiYzY1ZDE2MGY5MTljNzA3NWM0YmE3YzIxMTlfbnI1ZGlheEl6N0tWWjlPV2dUOVlyVGlYejU5bzlVRFVfVG9rZW46R3ZXT2JBNlZWb3ZmaGZ4MW1RVGN0d0kwbm5mXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

3. Click the "Create Rule" button, fill in the relevant information, scroll down, and click "OK". You can refer to the screenshot below or set it in more detail.
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWU0NmRmOGFlMmViZjkzMjNiNDY3NzA3NTI3ZGY2YjNfQnR3UVlPMm9jTXdLeVc0TVRaTzIwR0kzTTU0ZWlaemhfVG9rZW46QUZTS2I0QXZ2bzN5RXd4dVdlbmNUSDEwbjVkXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

  

#### AccessKey, SecretAccessKey

1. Click "AccessKey" under the profile picture in the top right corner.
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=ZDRkYjc3NjM2MmU3NmUwNzdiY2RjMDc2YzVmNGU1YmJfcDdkYWp0dlVUZTlrRHMycEl2cFZTUmN4ZU5JamRHd1FfVG9rZW46Q0p6VWI5bkQ4b2IzNk94WDhHd2NpRGlDbjdiXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

2. For convenience, this example uses the main account to create the AccessKey. In production environments, it is recommended to use RAM for creation. You can refer to [this documentation](https://help.aliyun.com/zh/ram/user-guide/create-an-accesskey-pair-1?spm=5176.28366559.0.0.1b5c3c2fUI9Ql8#section-rjh-18m-7kp).
    
3. Click the "Create AccessKey" button.
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=OWY1NzI3OGZmOTdhNTRkNzY3NThiYjg0Y2I0MjIyN2FfZ2UzZjVjM1d3aEZQWFdUaUt2d3Z0blpWa2ZoRWRCVFZfVG9rZW46TWFqZmJaTVZ2bzZlamx4Z09uSWNteURUbkFnXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

4. Perform account verification.
    

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NWU5MTcyMDU3ZjM5MTY5YzNkNzc5Y2ZkOWM1MGQ4NzVfMkl1OXJsM0w1VHpmck9pSUxNVU9sM3JCZDgwZXg2emdfVG9rZW46UnNYNWI0dlM5b21VMnB4bzRXZWNzZGRkbmplXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

5. Save Access Key ID and Access Key Secret.
![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NWQ2MTAzYTA2MGUyMGEzYzE5MDI4MmU4ZGIwMWIxZTRfNEpydE9vTGlHeVhiTHVhMFNvcWxESllEUE5EQTJtSkhfVG9rZW46R3pyYWIwS0JMb1hsNFF4VW1lcGNzeDI2blFmXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

#### Parameter Configuration

1. The AccessKey ID and AccessKey Secret are the values obtained in the previous step.
    
2. Enter the bucket details page to retrieve the Bucket.
    
![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=YmE5YzljODk0MDE5NGJmOGNlMDg5OGRlZDI1YWJkNTNfSlJvUHRsWDFJMXp0SkNlRVYxcHNIazAwbEhFYU00N0hfVG9rZW46WEJZcWJtbUtlb2NsNEt4Z2hvZ2NFYlpmblNmXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

3. Scroll down to find the Region (do not include the ".aliyuncs.com").
    
![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MGYxNmYyYzhmYWE3ZTgyY2I0MWZlZWQ1MTZhY2Y0MzdfSHBaWUJtRG5FUnl4cXZ4Q0VtU0lTd3FlVmpyN0J6bDJfVG9rZW46RjJ4V2JueEx6b0loejN4VVF0Y2NiM1JTblhlXzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

4. Retrieve the endpoint address and add the `https://` prefix when filling it into NocoBase.
    
![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MGRhYTJjNzk5NTViMzY2ODQ2OTMwMDdjODcyMWJhZDJfVHVBY3lBZlhOYjhLdDE3eExoM0dORWhCeWZ3VkYwN2xfVG9rZW46TmxnYWJJVnBzb2xGTEN4Q09SR2NCamRHbk01XzE3MzUzNTU4MzU6MTczNTM1OTQzNV9WNA)

### Tencent COS

You can refer to the configuration of the file service above. The main logic is similar.

### MinIO

You can refer to the file service configuration mentioned above. Key points to note:
1. Private deployments of MinIO do not have the concept of Region; it can be configured as "auto".
2. The Endpoint should be the domain or IP address of the deployed service.
3. Set the Force path style to Path-Style, and the final file URL will be `https://serverAddress/bucket-name/fileKey`.

### Cloudflare R2

You can refer to the file service configuration mentioned above.

## User Usage

Refer to the https://docs.nocobase.com/handbook/file-manager/.
