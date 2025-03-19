# 翻訳

NocoBaseのデフォルト言語は英語で、現在、英語、簡体字中国語、日本語をサポートしています。NocoBaseを自分の言語に翻訳することに協力していただければ幸いです。世界中のより多くのユーザーがNocoBaseを使用できるようになります！


## NocoBaseシステムのローカライズ

### システムインターフェースとプラグインの翻訳

#### 翻訳範囲の説明
注：NocoBaseシステムインターフェース、プラグインのローカライズ翻訳に適用され、その他のカスタムコンテンツ（データテーブル、markdownブロックのコンテンツなど）は含まれません。

![20250319120347](https://static-docs.nocobase.com/20250319120347.png)

#### ローカライズコンテンツの紹介
NocoBaseはGitを使用してシステムのローカライズコンテンツを管理しており、主なリポジトリは次の場所にあります：
https://github.com/nocobase/locales

異なる言語は言語コードの略称を持つJSONファイルで命名されています。例えば、`de-DE.json`、`fr-FR.json`などです。JSONファイル内の構造はプラグインモジュールによって整理され、キーと値のペアの形式で翻訳コンテンツを保存しています。例：

```json
{
  // クライアントプラグイン
  "@nocobase/client": {
    "(Fields only)": "(Fields only)",
    "12 hour": "12 hour",
    "24 hour": "24 hour"
    // ...その他のキーと値のペア
  },
  "@nocobase/plugin-acl": {
    // このプラグインのキーと値のペア
  }
  // ...その他のプラグインモジュール
}
```

翻訳を行う際には、以下のような構造に段階的に翻訳していく必要があります：

```json
{
  // クライアントプラグイン
  "@nocobase/client": {
    "(Fields only)": "(フィールドのみ)",
    "12 hour": "12時間",
    "24 hour": "24時間"
    // ...その他のキーと値のペア
  },
  "@nocobase/plugin-acl": {
    // このプラグインのキーと値のペア
  }
  // ...その他のプラグインモジュール
}
```

#### 翻訳のテストと検証


#### 翻訳の同期
翻訳を提出すると、スクリプトが自動的にローカライズコンテンツをコードリポジトリにプッシュします。

### ドキュメントとユーザーマニュアルの翻訳

NocoBaseのドキュメントとユーザーマニュアルのローカライズコンテンツは次の場所に保存されています：
https://github.com/nocobase/docs

異なる言語のローカライズについては、ローカライズディレクトリを直接追加する方法を採用しています。例えば：
https://github.com/nocobase/docs/blob/main/docs/en-US/

![20250319121816](https://static-docs.nocobase.com/20250319121816.png)

ドキュメントを翻訳する際には、ディレクトリのテキストの変更にも注意する必要があります：
https://github.com/nocobase/docs/blob/main/docs/config/
![20250319121853](https://static-docs.nocobase.com/20250319121853.png)

ドキュメント内のグローバルコンポーネントのテキスト変更場所：
https://github.com/nocobase/docs/blob/main/.dumi/theme/builtins/

例えば、プラグイン情報のテキスト：
https://github.com/nocobase/docs/blob/main/.dumi/theme/builtins/PluginInfo.tsx

![20250319122109](https://static-docs.nocobase.com/20250319122109.png)


### 公式ウェブサイトのローカライズ

NocoBase公式ウェブサイトのローカライズコンテンツ（ウェブサイトページとすべてのテキストを含む）は次の場所に保存されています：
https://github.com/nocobase/website


新しい言語を追加する場合は、既存の言語ページを参考にしてください：
- 英語ページ：https://github.com/nocobase/website/blob/main/src/en/
- 中国語ページ：https://github.com/nocobase/website/blob/main/src/cn/
- 日本語ページ：https://github.com/nocobase/website/blob/main/src/ja/
![20250319121600](https://static-docs.nocobase.com/20250319121600.png)


グローバルスタイルの修正アドレス：
- 英語：https://github.com/nocobase/website/blob/main/src/layouts/BaseEN.astro
- 中国語：https://github.com/nocobase/website/blob/main/src/layouts/BaseCN.astro
- 日本語：https://github.com/nocobase/website/blob/main/src/layouts/BaseJA.astro
![20250319121501](https://static-docs.nocobase.com/20250319121501.png)

ウェブサイトのグローバルコンポーネントのローカライズアドレス：
https://github.com/Albert-mah/website/tree/main/src/components

![20250319122940](https://static-docs.nocobase.com/20250319122940.png)


## 翻訳を始める方法

NocoBaseに新しい言語の翻訳を提供したい場合は、以下の手順に従ってください：

1. システムインターフェースについては、https://github.com/nocobase/locales リポジトリをクローンし、既存の言語ファイルに基づいて新しい言語のJSONファイルを作成します
2. ドキュメントについては、https://github.com/nocobase/docs リポジトリをクローンし、新しい言語のディレクトリを作成して翻訳を開始します
3. ウェブサイトについては、https://github.com/nocobase/website リポジトリをクローンし、既存の言語ページを参考に新しい言語のページを作成します

翻訳が完了したら、プルリクエストを通じてNocoBaseに提出してください。私たちはあなたの貢献を審査し、マージします。システムのローカライズについては、システム設定で新しい言語が表示され、設定でユーザーが選択できる言語として設定できます。

![20250319123452](https://static-docs.nocobase.com/20250319123452.png)

## サポートされている言語コードとローカライズの進捗

以下の表には、利用可能な言語とローカライズの進捗が示されています：

| 言語文化名           | 表示名                           | 進捗 | 貢献者 |
| ------------------ | -------------------- | --- | --- |
| ar-EG                                                                                                                        | العربية              |     |     |
| az-AZ                                                                                                                        | Azərbaycan dili      |     |     |
| bg-BG                                                                                                                        | Български            |     |     |
| bn-BD                                                                                                                        | Bengali              |     |     |
| by-BY                                                                                                                        | Беларускі            |     |     |
| ca-ES                                                                                                                        | Сatalà/Espanya       |     |     |
| cs-CZ                                                                                                                        | Česky                |     |     |
| da-DK                                                                                                                        | Dansk                |     |     |
| [de-DE](https://github.com/nocobase/locales/blob/main/de-DE.json "https://github.com/nocobase/locales/blob/main/de-DE.json") | Deutsch              |     |     |
| el-GR                                                                                                                        | Ελληνικά             |     |     |
| en-GB                                                                                                                        | English(GB)          |     |     |
| [en-US](https://github.com/nocobase/locales/blob/main/en-US.json "https://github.com/nocobase/locales/blob/main/en-US.json") | English              |     |     |
| [es-ES](https://github.com/nocobase/locales/blob/main/es-ES.json "https://github.com/nocobase/locales/blob/main/es-ES.json") | Español              |     |     |
| et-EE                                                                                                                        | Estonian (Eesti)     |     |     |
| fa-IR                                                                                                                        | فارسی                |     |     |
| fi-FI                                                                                                                        | Suomi                |     |     |
| fr-BE                                                                                                                        | Français(BE)         |     |     |
| fr-CA                                                                                                                        | Français(CA)         |     |     |
| [fr-FR](https://github.com/nocobase/locales/blob/main/fr-FR.json "https://github.com/nocobase/locales/blob/main/fr-FR.json") | Français             |     |     |
| ga-IE                                                                                                                        | Gaeilge              |     |     |
| gl-ES                                                                                                                        | Galego               |     |     |
| he-IL                                                                                                                        | עברית                |     |     |
| hi-IN                                                                                                                        | हिन्दी               |     |     |
| hr-HR                                                                                                                        | Hrvatski jezik       |     |     |
| hu-HU                                                                                                                        | Magyar               |     |     |
| hy-AM                                                                                                                        | Հայերեն              |     |     |
| id-ID                                                                                                                        | Bahasa Indonesia     |     |     |
| is-IS                                                                                                                        | Íslenska             |     |     |
| [it-IT](https://github.com/nocobase/locales/blob/main/it-IT.json "https://github.com/nocobase/locales/blob/main/it-IT.json") | Italiano             |     |     |
| [ja-JP](https://github.com/nocobase/locales/blob/main/ja-JP.json "https://github.com/nocobase/locales/blob/main/ja-JP.json") | 日本語                  |     |     |
| ka-GE                                                                                                                        | ქართული              |     |     |
| kk-KZ                                                                                                                        | Қазақ тілі           |     |     |
| km-KH                                                                                                                        | ភាសាខ្មែរ            |     |     |
| kn-IN                                                                                                                        | ಕನ್ನಡ                |     |     |
| [ko-KR](https://github.com/nocobase/locales/blob/main/ko-KR.json "https://github.com/nocobase/locales/blob/main/ko-KR.json") | 한국어                  |     |     |
| ku-IQ                                                                                                                        | کوردی                |     |     |
| lt-LT                                                                                                                        | lietuvių             |     |     |
| lv-LV                                                                                                                        | Latviešu valoda      |     |     |
| mk-MK                                                                                                                        | македонски јазик     |     |     |
| ml-IN                                                                                                                        | മലയാളം               |     |     |
| mn-MN                                                                                                                        | Монгол хэл           |     |     |
| ms-MY                                                                                                                        | بهاس ملايو           |     |     |
| nb-NO                                                                                                                        | Norsk bokmål         |     |     |
| ne-NP                                                                                                                        | नेपाली               |     |     |
| nl-BE                                                                                                                        | Vlaams               |     |     |
| nl-NL                                                                                                                        | Nederlands           |     |     |
| pl-PL                                                                                                                        | Polski               |     |     |
| [pt-BR](https://github.com/nocobase/locales/blob/main/pt-BR.json "https://github.com/nocobase/locales/blob/main/pt-BR.json") | Português brasileiro |     |     |
| pt-PT                                                                                                                        | Português            |     |     |
| ro-RO                                                                                                                        | România              |     |     |
| [ru-RU](https://github.com/nocobase/locales/blob/main/ru-RU.json "https://github.com/nocobase/locales/blob/main/ru-RU.json") | Русский              |     |     |
| si-LK                                                                                                                        | සිංහල                |     |     |
| sk-SK                                                                                                                        | Slovenčina           |     |     |
| sl-SI                                                                                                                        | Slovenščina          |     |     |
| sr-RS                                                                                                                        | српски језик         |     |     |
| sv-SE                                                                                                                        | Svenska              |     |     |
| ta-IN                                                                                                                        | Tamil                |     |     |
| th-TH                                                                                                                        | ภาษาไทย              |     |     |
| tk-TK                                                                                                                        | Turkmen              |     |     |
| [tr-TR](https://github.com/nocobase/locales/blob/main/tr-TR.json "https://github.com/nocobase/locales/blob/main/tr-TR.json") | Türkçe               |     |     |
| [uk-UA](https://github.com/nocobase/locales/blob/main/uk-UA.json "https://github.com/nocobase/locales/blob/main/uk-UA.json") | Українська           |     |     |
| ur-PK                                                                                                                        | Oʻzbekcha            |     |     |
| vi-VN                                                                                                                        | Tiếng Việt           |     |     |
| [zh-CN](https://github.com/nocobase/locales/blob/main/zh-CN.json "https://github.com/nocobase/locales/blob/main/zh-CN.json") | 简体中文                 |     |     |
| zh-HK                                                                                                                        | 繁體中文（香港）             |     |     |
| [zh-TW](https://github.com/nocobase/locales/blob/main/zh-TW.json "https://github.com/nocobase/locales/blob/main/zh-TW.json") | 繁體中文（台湾）             |     |     |
