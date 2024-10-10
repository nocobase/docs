# Aliyun OSS

Aliyun OSSを基にしたストレージエンジンを使用する前に、関連アカウントと権限を準備する必要があります。

## 設定パラメータ

![Aliyun OSSストレージエンジン設定例](https://static-docs.nocobase.com/20240712220011.png)

:::info{title=ヒント}
Aliyun OSSストレージエンジン専用のパラメータについてのみ説明します。一般的なパラメータについては[エンジン共通パラメータ](./index.md#エンジン共通パラメータ)を参照してください。
:::

### リージョン

OSSストレージのリージョンを入力してください。例：`oss-cn-hangzhou`。

:::info{title=ヒント}
[Aliyun OSSコンソール](https://oss.console.aliyun.com/)でストレージバケットのリージョン情報を確認でき、リージョンのプレフィックス部分だけを切り取ればよいです（完全なドメイン名は不要です）。
:::

### AccessKey ID

Aliyunの認可されたアクセスキーのIDを入力してください。

### AccessKey Secret

Aliyunの認可されたアクセスキーのSecretを入力してください。

### バケット

OSSストレージのバケット名を入力してください。

