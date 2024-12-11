# 外部データソース - Oracle

<PluginInfo commercial="true" name="data-source-external-oracle"></PluginInfo>

## 紹介

このプラグインを使用すると、外部の Oracle データベースをデータソースとして利用できます。対応バージョンは Oracle >= 11g です。

## インストール

### Oracle クライアントのインストール

Oracle サーバーのバージョンが 12.1 未満の場合、Oracle クライアントをインストールする必要があります。

![Oracle クライアントのインストール](https://static-docs.nocobase.com/20241204164359.png)

Linux の例:

```bash
apt-get update
apt-get install -y unzip wget libaio1
wget https://download.oracle.com/otn_software/linux/instantclient/1925000/instantclient-basic-linux.x64-19.25.0.0.0dbru.zip
unzip instantclient-basic-linux.x64-19.25.0.0.0dbru.zip -d /opt/
echo /opt/instantclient_19_25 > /etc/ld.so.conf.d/oracle-instantclient.conf
ldconfig
```

上記以外の方法でクライアントをインストールした場合は、クライアントのパスを指定する必要があります（詳細は [node-oracledb ドキュメント](https://node-oracledb.readthedocs.io/en/latest/user_guide/initialization.html) を参照してください）。

![Oracle クライアントのパス設定](https://static-docs.nocobase.com/20241204165940.png)

### プラグインのインストール

[商用プラグインのインストールとアップグレード](/welcome/getting-started/plugin) の手順をご参照ください。

## 使用方法

詳細な使用方法については、[データソース / 外部データベース](/handbook/data-source-manager/external-database) セクションをご覧ください。
