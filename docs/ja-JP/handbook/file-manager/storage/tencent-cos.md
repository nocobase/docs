# Tencent COS

Tencent COS を基にしたストレージエンジンで、使用する前に関連するアカウントと権限を準備する必要があります。

## 設定パラメータ

![Tencent COS ストレージエンジン設定例](https://static-docs.nocobase.com/20240712222125.png)

:::info{title=ヒント}
Tencent COS ストレージエンジン専用のパラメータについてのみ説明します。一般的なパラメータについては[エンジン一般パラメータ](./index.md#エンジン一般パラメータ)を参照してください。
:::

### リージョン

COS ストレージのリージョンを入力します。例：`ap-chengdu`。

:::info{title=ヒント}
[Tencent COS コンソール](https://console.cloud.tencent.com/cos)でストレージバケットのリージョン情報を確認でき、リージョンのプレフィックス部分だけを切り取ることで使用できます（完全なドメイン名は不要です）。
:::

### SecretId

Tencent Cloud の認可アクセスキーの ID を入力します。

### SecretKey

Tencent Cloud の認可アクセスキーの Secret を入力します。

### バケット

COS ストレージのバケット名を入力します。例：`qing-cdn-1234189398`。

