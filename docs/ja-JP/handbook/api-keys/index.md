# APIキー

## イントロダクション

## インストール

## 使用説明

http://localhost:13000/admin/settings/api-keys/configuration

![](https://static-docs.nocobase.com/d64ccbdc8a512a0224e9f81dfe14a0a8.png)

### APIキーの追加

![](https://static-docs.nocobase.com/46141872fc0ad9a96fa5b14e97fcba12.png)

**注意事項**

- 追加されたAPIキーは現在のユーザーに属し、その役割は現在のユーザーが所属する役割に基づきます。
- `APP_KEY` 環境変数が正しく設定されていることを確認し、情報漏洩を防ぐよう注意してください。APP_KEYが変更されると、すべての追加されたAPIキーは無効になります。

### APP_KEYの設定方法

Dockerバージョンの場合、docker-compose.ymlファイルを編集します。

```diff
services:
  app:
    image: nocobase/nocobase:main
    environment:
+     - APP_KEY=4jAokvLKTJgM0v_JseUkJ
```

ソースコードまたはcreate-nocobase-appのインストールの場合は、.envファイル内のAPP_KEYを直接変更してください。

```bash
APP_KEY=4jAokvLKTJgM0v_JseUkJ
```

