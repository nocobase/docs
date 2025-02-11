# HTTP API

附件字段和文件表的文件上传均支持通过 HTTP API 进行处理。根据附件或文件表使用的存储引擎不同，分别有不同的调用方式。

## 服务端上传

针对 S3、OSS、COS 等项目中内置的开源存储引擎，HTTP API 与用户界面上传功能调用的相同，文件均通过服务端上传。调用接口需要通过 `Authorization` 请求头传递基于用户登录的 JWT 令牌，否则将被拒绝访问。

### 附件字段

通过对附件表（`attachments`）资源发起 `create` 操作，以 POST 形式发送请求，并通过 `file` 字段上传二进制内容。调用后文件会被上传至默认的存储引擎中。

```shell
curl -X POST\
    -H "Authorization: Bearer <JWT>"\
    -F "file=@<path/to/file>"\
    "http://localhost:3000/api/attachments:create"
```

如需将文件上传至不同的存储引擎，可以通过 `attachmentField` 参数指定所属数据表字段已配置的存储引擎（如未配置，则上传至默认存储引擎）。

```shell
curl -X POST\
    -H "Authorization: Bearer <JWT>"\
    -F "file=@<path/to/file>"\
    "http://localhost:3000/api/attachments:create?attachmentField=<collection_name>.<field_name>"
```

### 文件表

对文件表上传将自动生成文件记录，通过对文件表资源发起 `create` 操作，以 POST 形式发送请求，并通过 `file` 字段上传二进制内容。

```shell
curl -X POST\
    -H "Authorization: Bearer <JWT>"\
    -F "file=@<path/to/file>"\
    "http://localhost:3000/api/<file_collection_name>:create"
```

对文件表上传无需指定存储引擎，文件会被上传至该表配置的存储引擎中。

## 客户端上传

针对通过商业插件 S3-Pro 提供的 S3 兼容性的存储引擎，HTTP API 上传需要分为几个步骤进行调用。