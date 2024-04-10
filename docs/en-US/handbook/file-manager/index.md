# File Manager

<PluginInfo name="file-manager"></PluginInfo>

## Introduction

The File Manager plugin provides a file collection, attachment field, and file storage services for effectively managing files. Files are structured data table records known as file collection, which store file metadata and can be managed through the File Manager. Attachment fields are specific relational fields associated with the file collection. The plugin supports multiple storage methods, including local storage, Alibaba Cloud OSS, Amazon S3, and Tencent Cloud COS.

## User Manual

### File Collection

An `attachments` collection is built-in to store all files associated with attachment fields. Additionally, new file collections can be created to store specific files.

[More usage information can be found in the file table introduction document](/handbook/file-manager/file-collection)

### Attachment Field

Attachment fields are specific relational fields related to the file collection, which can be created through "Attachment field" or configured through "Association field".

<p>

[More usage information can be found in the attachment field introduction document](/handbook/file-manager/field-attachment)

</p>

### File Storage

- [Local Storage](/handbook/file-manager/file-storage-local)
- [Alibaba Cloud OSS](/handbook/file-storage-oss)
- [Amazon S3](/handbook/file-storage-s3)
- [Tencent Cloud COS](/handbook/file-storage-cos)