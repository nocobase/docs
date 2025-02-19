# File Storage: S3 (Pro)

<PluginInfo commercial="true" name="file-storage-s3-pro"></PluginInfo>

## Introduction

Building on the file management plugin, this version adds support for file storage types compatible with the S3 protocol. Any object storage service supporting the S3 protocol can be seamlessly integrated, such as Amazon S3, Alibaba Cloud OSS, Tencent Cloud COS, MinIO, Cloudflare R2, etc., enhancing the compatibility and flexibility of storage services.

## Features

1. **Client Upload:** Files are uploaded directly to the storage service without passing through the NocoBase server, enabling a more efficient and faster upload experience.

2. **Private Access:** All file URLs are signed temporary authorization addresses, ensuring secure and time-limited access to files.

## Use Cases

1. **File Table Management:** Centrally manage and store all uploaded files, supporting various file types and storage methods for easy classification and retrieval.

2. **Attachment Field Storage:** Store attachments uploaded via forms or records and associate them with specific data entries.

## Plugin Configuration

1. Enable the `plugin-file-storage-s3-pro` plugin.

2. Navigate to "Setting -> FileManager" to access the file management settings.

3. Click the "Add new" button and select "S3 Pro".

![](https://static-docs.nocobase.com/20250102160704938.png)

4. In the pop-up window, you will see a detailed form to fill out. Refer to the following documentation to obtain the relevant parameters for your file service and correctly input them into the form.

![](https://static-docs.nocobase.com/20250102160811093.png)

## Service Provider Configuration

### Amazon S3

#### Bucket Creation

1. Visit [Amazon S3 Console](https://ap-southeast-1.console.aws.amazon.com/s3/home).

2. Click the "Create bucket" button on the right-hand side.

![Create Bucket](https://static-docs.nocobase.com/file-storage-s3-pro-1735355969452.png)

3. Fill in the `Bucket Name`, leave other fields as default, scroll to the bottom, and click the **"Create"** button to complete the process.

![Bucket Configuration](https://static-docs.nocobase.com/file-storage-s3-pro-1735355969622.png)

#### CORS Configuration

1. In the bucket list, find and click the newly created bucket to access its details.

![Bucket List](https://static-docs.nocobase.com/file-storage-s3-pro-1735355969980.png)

2. Navigate to the "Permission" tab and scroll down to the CORS configuration section.

![Permissions Tab](https://static-docs.nocobase.com/file-storage-s3-pro-1735355970155.png)

3. Enter the following configuration (customize as needed) and save.

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

![CORS Rules](https://static-docs.nocobase.com/file-storage-s3-pro-1735355970494.png)

#### AccessKey and SecretAccessKey Retrieval

1. Click the "Security credentials" button in the top-right corner.

![Security Credentials](https://static-docs.nocobase.com/file-storage-s3-pro-1735355970651.png)

2. Scroll to the "Access Keys" section and click "Create Access Key."

![Create Access Key](https://static-docs.nocobase.com/file-storage-s3-pro-1735355970832.png)

3. Agree to the terms (IAM usage is recommended for production environments).

![Access Key Agreement](https://static-docs.nocobase.com/file-storage-s3-pro-1735355970996.png)

4. Save the displayed Access Key and Secret Access Key.

![Access Key Details](https://static-docs.nocobase.com/file-storage-s3-pro-1735355971168.png)

#### Parameter Retrieval and Configuration

1. Use the retrieved `AccessKey ID` and `AccessKey Secret`.

2. Visit the bucket's properties panel to find the `Bucket Name` and `Region`.

![Bucket Details](https://static-docs.nocobase.com/file-storage-s3-pro-1735355971345.png)

#### Public Access (Optional)

For public file access, configure as follows:

1. In the Permissions panel, scroll to "Object Ownership," click "Edit," and enable ACLs.

![Enable ACLs](https://static-docs.nocobase.com/file-storage-s3-pro-1735355971508.png)

2. Scroll to "Block public access," click "Edit," and allow ACL control.

![Block Public Access](https://static-docs.nocobase.com/file-storage-s3-pro-1735355971668.png)

3. Check "Public access" in NocoBase.

![Public Access Setting](https://static-docs.nocobase.com/file-storage-s3-pro-1735355971823.png)

### Alibaba Cloud OSS

#### Bucket Creation

1. Open the [OSS Console](https://oss.console.aliyun.com/overview).

![OSS Console](https://static-docs.nocobase.com/file-storage-s3-pro-1735355972149.png)

2. Select "Buckets" from the left menu and click "Create Bucket."

![Create OSS Bucket](https://static-docs.nocobase.com/file-storage-s3-pro-1735355972413.png)

3. Fill in the bucket details and click "Create."

   - `Bucket Name`: Choose based on your business needs.
   - `Region`: Select the nearest region for your users.
   - Other settings can remain default or customized as needed.

![Bucket Details](https://static-docs.nocobase.com/file-storage-s3-pro-1735355972730.png)

#### CORS Configuration

1. Navigate to the bucket details page.

![Bucket Details Page](https://static-docs.nocobase.com/file-storage-s3-pro-1735355973018.png)

2. Click "Content Security -> CORS" in the menu.

![CORS Menu](https://static-docs.nocobase.com/file-storage-s3-pro-1735355973319.png)

3. Click "Create Rule," complete the fields, and click "OK."

![CORS Rule Setup](https://static-docs.nocobase.com/20250219171042784.png)

#### AccessKey and SecretAccessKey Retrieval

1. Click "AccessKey" under your account avatar.

![AccessKey Menu](https://static-docs.nocobase.com/file-storage-s3-pro-1735355973884.png)

2. Create an AccessKey. For production, refer to the [RAM AccessKey Guide](https://help.aliyun.com/zh/ram/user-guide/create-an-accesskey-pair-1?spm=5176.28366559.0.0.1b5c3c2fUI9Ql8#section-rjh-18m-7kp).

![Create AccessKey](https://static-docs.nocobase.com/file-storage-s3-pro-1735355974171.png)

3. Complete account verification.

![Account Verification](https://static-docs.nocobase.com/file-storage-s3-pro-1735355974509.png)

4. Save the Access Key and Secret Access Key.

![AccessKey Details](https://static-docs.nocobase.com/file-storage-s3-pro-1735355974781.png)

#### Parameter Retrieval and Configuration (To Be Updated)

1. Use the retrieved `AccessKey ID` and `AccessKey Secret`.

2. Access the bucket details to retrieve the `Bucket Name`.

![Bucket Name](https://static-docs.nocobase.com/file-storage-s3-pro-1735355975063.png)

3. Scroll down to find the `Region` (omit `.aliyuncs.com`).

![Region Details](https://static-docs.nocobase.com/file-storage-s3-pro-1735355975437.png)

4. Retrieve the `Endpoint` and add `https://` as a prefix.

![Endpoint Configuration](https://static-docs.nocobase.com/file-storage-s3-pro-1735355975715.png)

### Tencent COS

Refer to the configurations above. The process is largely similar.

### MinIO

For MinIO, note the following:

1. MinIO deployments lack the `Region` concept. Set this to "auto."

2. Use the deployment's domain or IP address for the `Endpoint`.

3. Ensure `Force path style` is set to `Path-Style`, resulting in file URLs like `https://serverAddress/bucket-name/fileKey`.

### Cloudflare R2

Refer to the configurations above.

## User Guide

Refer to the [file-manager plugin documentation](https://docs.nocobase.com/handbook/file-manager/).
