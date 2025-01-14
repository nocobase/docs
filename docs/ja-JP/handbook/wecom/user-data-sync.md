# 企業WeChatからのユーザーデータ同期

<PluginInfo commercial="true" name="wecom"></PluginInfo>

## 紹介

**企業WeChat**プラグインは、ユーザーが企業WeChatからユーザーと部門データを同期することをサポートします。

## 企業WeChat自建アプリケーションの作成と設定

まず、企業WeChat管理バックエンドで企業WeChat自建アプリケーションを作成し、**企業ID**, **AgentId**, **Secret**を取得する必要があります。

参考：[ユーザー認証 - 企業WeChat](./auth)

## NocoBaseに同期データソースを追加

ユーザーと権限 - 同期 - 追加、取得した関連情報を記入します。

![](https://static-docs.nocobase.com/202412041251867.png)

## アドレス帳同期の設定

企業WeChat管理バックエンド - セキュリティと管理 - 管理ツールに進み、アドレス帳同期をクリックします。

![](https://static-docs.nocobase.com/202412041249958.png)

図のように設定し、企業の信頼できるIPを設定します。

![](https://static-docs.nocobase.com/202412041250776.png)

これでユーザーデータの同期を行うことができます。

## イベント受信サーバーの設定

企業WeChat側のユーザーや部門データの変更をNocoBaseアプリケーションに即座に同期させたい場合は、さらに設定を行うことができます。

前述の設定情報を記入した後、アドレス帳コールバック通知アドレスをコピーできます。

![](https://static-docs.nocobase.com/202412041256547.png)

これを企業WeChatの設定に記入し、TokenとEncodingAESKeyを取得して、NocoBaseユーザー同期データソースの設定を完了します。

![](https://static-docs.nocobase.com/202412041257947.png)
