# 0.17.0-alpha.3

## ローカリゼーション管理

### 背景

参考 <a target="_blank" href="https://blog-cn.nocobase.com/posts/organize-text-namespaces-by-modules-in-localization-management/">更新（多言語管理）：モジュールごとの翻訳テキストのネームスペースを整理する</a>

### 翻訳テキストの重複排除について

異なるモジュールで重複するテキストは一つだけを残さず、それぞれに対応する翻訳を追加する必要があります。

![](https://static-docs.nocobase.com/1c5fd02f1348787e1833bd3ece36c9aa.png)

### `i18n` インスタンスから `fallbackNS` オプションの削除

クライアントの `i18n` インスタンスでは、もはや `fallbackNS: "client"` を設定しません。プラグイン開発者は、プラグインの多言語ファイルにおいて、コアクライアントに既存のテキストの一部が省略されている場合、それを補充する必要があります。もし `packages/core/client/src/locale` に既存の内容を再利用したい場合は、使用時に適切なパラメータを渡す必要があります。例えば：

```ts
import { useTranslation } from 'react-i18next';

export const NAMESPACE = 'localization-management';

export const useLocalTranslation = () => {
  return useTranslation([NAMESPACE, 'client'], { nsMode: 'fallback' });
};
```

