# Translation

The default language of NocoBase is English. Currently, English, Simplified Chinese, and Japanese are supported. We sincerely invite you to contribute translations for additional languages, enabling users around the world to use our system more conveniently!

---

## I. System Localization

### 1. System Interface and Plugin Translation

#### 1.1 Translation Scope
This applies only to the localization of the NocoBase system interface and plugins, and does not cover other custom content (such as data tables or Markdown blocks).

![System Localization Diagram](https://static-docs.nocobase.com/20250319120347.png)

#### 1.2 Localization Content Overview
NocoBase uses Git to manage its localization content. The primary repository is:
https://github.com/nocobase/locales

Each language is represented by a JSON file named according to its language code (e.g., de-DE.json, fr-FR.json). The file structure is organized by plugin modules, using key-value pairs to store translations. For example:{
  // Client plugin
  "@nocobase/client": {
    "(Fields only)": "(Fields only)",
    "12 hour": "12 hour",
    "24 hour": "24 hour"
    // ...other key-value pairs
  },
  "@nocobase/plugin-acl": {
    // Key-value pairs for this plugin
  }
  // ...other plugin modules
}
```

When translating, please gradually convert it to a structure similar to the following:

```json
{
  // Client plugin
  "@nocobase/client": {
    "(Fields only)": "(Fields only - translated)",
    "12 hour": "12 hour - translated",
    "24 hour": "24 hour - translated"
    // ...other key-value pairs
  },
  "@nocobase/plugin-acl": {
    // Key-value pairs for this plugin
  }
  // ...other plugin modules
}
```

#### 1.3 Translation Testing and Synchronization
After completing your translation, please test and verify that all texts display correctly. Once submitted, the system will automatically synchronize the localization content to the repository.

## II. Documentation and User Manual Localization

The localization content for documentation and user manuals is stored in:
https://github.com/nocobase/docs

Localization is implemented by adding separate directories for each language, for example:
https://github.com/nocobase/docs/blob/main/docs/en-US/

![Documentation Localization Diagram](https://static-docs.nocobase.com/20250319121816.png)

Notes:
- For directory text modifications, please refer to:
  https://github.com/nocobase/docs/blob/main/docs/config/
  
  ![Directory Text Diagram](https://static-docs.nocobase.com/20250319121853.png)

- Global component text modifications can be found at:
  https://github.com/nocobase/docs/blob/main/.dumi/theme/builtins/
  
  For example, plugin information text:
  https://github.com/nocobase/docs/blob/main/.dumi/theme/builtins/PluginInfo.tsx
  
  ![Plugin Information Diagram](https://static-docs.nocobase.com/20250319122109.png)

## III. Website Localization

Website pages and all related texts are stored in:
https://github.com/nocobase/website

When adding a new language, please refer to the existing language pages:
- English: https://github.com/nocobase/website/blob/main/src/en/
- Chinese: https://github.com/nocobase/website/blob/main/src/cn/
- Japanese: https://github.com/nocobase/website/blob/main/src/ja/

![Website Localization Diagram](https://static-docs.nocobase.com/20250319121600.png)

Global style modifications are located at:
- English: https://github.com/nocobase/website/blob/main/src/layouts/BaseEN.astro
- Chinese: https://github.com/nocobase/website/blob/main/src/layouts/BaseCN.astro
- Japanese: https://github.com/nocobase/website/blob/main/src/layouts/BaseJA.astro

![Global Style Diagram](https://static-docs.nocobase.com/20250319121501.png)

The website’s global component localization is available at:
https://github.com/nocobase/website/tree/main/src/components

![Website Components Diagram](https://static-docs.nocobase.com/20250319122940.png)

## How to Start Translating

If you want to contribute a new language translation to NocoBase, please follow these steps:

1. For the system interface, clone the https://github.com/nocobase/locales repository and create a new language JSON file based on an existing file.
2. For documentation, clone the https://github.com/nocobase/docs repository, create a new language directory, and begin translating.
3. For the website, clone the https://github.com/nocobase/website repository and create new language pages by referencing existing ones.

After completing your translation, please submit a Pull Request to NocoBase. The new languages will appear in the system configuration, allowing you to select which languages to display.

![Enabled Languages Diagram](https://static-docs.nocobase.com/20250319123452.png)

## Legacy Information

The NocoBase language files are located at the following locations:

```shell
packages/core/**/src/locale
packages/plugins/**/src/locale
```

The core translations are primarily located here:

https://github.com/nocobase/nocobase/tree/main/packages/core/client/src/locale

Please copy en_US.ts, rename it with the language code you wish to add, and translate its strings. Once completed, submit a Pull Request, and the language will be added to the system configuration.

<img src="./translations/enabled-languages.jpg" style="max-width: 800px;"/>

## Supported Language Codes and Localization Progress

The following table lists available languages and localization progress for your reference:

| Language Culture Name  | Display Name                 | Progress  | Contributors |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------- | --- | --- |
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
