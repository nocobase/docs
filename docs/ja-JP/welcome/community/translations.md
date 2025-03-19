# 翻訳

NocoBaseのデフォルト言語は英語です。現在、英語、簡体字中国語、および日本語がサポートされています。皆様の協力により、NocoBaseは多言語対応が進み、世界中のより多くのユーザーが利用できるようになります！

## 1. NocoBaseシステムのローカライズ

### 1.1 システムインターフェースとプラグインの翻訳

#### 1.1.1 翻訳範囲の説明
注：こちらの翻訳は、NocoBaseのシステムインターフェースおよびプラグインのローカライズに適用されます。データテーブルやMarkdownブロックなど、その他のカスタムコンテンツは対象外です。

![20250319120347](https://static-docs.nocobase.com/20250319120347.png)

#### 1.1.2 ローカライズコンテンツの紹介
NocoBaseはGitを利用してローカライズコンテンツを管理しています。主なリポジトリは以下の通りです：  
https://github.com/nocobase/locales

各言語は言語コードを名称とするJSONファイル（例：`de-DE.json`、`fr-FR.json`）で管理されています。JSONファイル内はプラグインモジュールごとに整理され、キーと値のペア形式で翻訳内容が保存されています。例：

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

翻訳作業は、以下の段階的な構造に基づいて行ってください：

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

#### 1.1.3 翻訳のテストと検証
※翻訳内容については、適宜テストおよび検証を行ってください。

#### 1.1.4 翻訳の同期
翻訳を提出すると、専用スクリプトが自動的にローカライズコンテンツをリポジトリへプッシュします。

## 2. ドキュメントとユーザーマニュアルの翻訳

NocoBaseのドキュメントおよびユーザーマニュアルのローカライズコンテンツは、以下のリポジトリに保存されています：  
https://github.com/nocobase/docs

各言語のローカライズは、専用ディレクトリを追加する方式で管理されています。例：  
https://github.com/nocobase/docs/blob/main/docs/en-US/

![20250319121816](https://static-docs.nocobase.com/20250319121816.png)

ドキュメント翻訳の際は、ディレクトリ内のテキスト変更にも十分ご注意ください：  
https://github.com/nocobase/docs/blob/main/docs/config/  
![20250319121853](https://static-docs.nocobase.com/20250319121853.png)

また、ドキュメント内のグローバルコンポーネントのテキストは、以下に保持されています：  
https://github.com/nocobase/docs/blob/main/.dumi/theme/builtins/

例：プラグイン情報のテキスト  
https://github.com/nocobase/docs/blob/main/.dumi/theme/builtins/PluginInfo.tsx

![20250319122109](https://static-docs.nocobase.com/20250319122109.png)

## 3. 公式ウェブサイトのローカライズ

NocoBase公式ウェブサイトのローカライズコンテンツ（全ページおよびすべてのテキスト）は、以下のリポジトリに保存されています：  
https://github.com/nocobase/website

新たな言語の追加は、既存の言語ページを参考にしてください：
- 英語ページ：https://github.com/nocobase/website/blob/main/src/en/
- 中国語ページ：https://github.com/nocobase/website/blob/main/src/cn/
- 日本語ページ：https://github.com/nocobase/website/blob/main/src/ja/

![20250319121600](https://static-docs.nocobase.com/20250319121600.png)

グローバルスタイルの調整は、以下のファイルを参照してください：
- 英語：https://github.com/nocobase/website/blob/main/src/layouts/BaseEN.astro
- 中国語：https://github.com/nocobase/website/blob/main/src/layouts/BaseCN.astro
- 日本語：https://github.com/nocobase/website/blob/main/src/layouts/BaseJA.astro

![20250319121501](https://static-docs.nocobase.com/20250319121501.png)

また、ウェブサイトのグローバルコンポーネントのローカライズは、以下で管理されています：  
https://github.com/Albert-mah/website/tree/main/src/components

![20250319122940](https://static-docs.nocobase.com/20250319122940.png)

## 4. 翻訳を始める方法

NocoBaseに新しい言語の翻訳を提供する場合、以下の手順で進めてください：

1. 【システムインターフェース】  
   https://github.com/nocobase/locales リポジトリをクローンし、既存の言語ファイルを参考に新規言語用JSONファイルを作成します。

2. 【ドキュメント】  
   https://github.com/nocobase/docs リポジトリをクローンし、対象言語のディレクトリを作成して翻訳を開始します。

3. 【公式ウェブサイト】  
   https://github.com/nocobase/website リポジトリをクローンし、既存の言語ページを参考に新規言語ページを作成します。

翻訳が完了しましたら、プルリクエストを通じてご提出ください。皆様の貢献は審査の上、マージされます。システムのローカライズは、システム設定にて新しい言語が表示され、ユーザーが選択可能な状態となります。

![20250319123452](https://static-docs.nocobase.com/20250319123452.png)

## 5. サポートされている言語コードとローカライズの進捗

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
