# Translations

The default language of NocoBase is English, currently English, Simplified Chinese, Japanese, Russian, and Turkish are supported. We warmly welcome your help to translate NocoBase into more languages, making it accessible to users worldwide!

## NocoBase System Localization

### System Interface and Plugin Translation

#### Translation Scope
Note: This applies to the NocoBase system interface and plugin localization, not including other custom content (such as data tables, markdown block content).

![20250319120347](https://static-docs.nocobase.com/20250319120347.png)

#### Localization Content Overview
NocoBase uses Git to manage the system's localization content. The main repository is:
https://github.com/nocobase/locales

Different languages are named with JSON files using language code abbreviations, such as `de-DE.json`, `fr-FR.json`, etc. The structure of the JSON file is organized by plugin modules, storing translations in key-value pairs, for example:

```json
{
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

When translating, you would gradually translate it into a structure similar to:

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

#### Translation Synchronization
After submitting a translation, the system will automatically push the localization content to the code repository.

### Documentation and User Manual Translation

NocoBase documentation and user manual localization content is stored in:
https://github.com/nocobase/docs

For different language localizations, we use direct additional localization directories, for example:
https://github.com/nocobase/docs/blob/main/docs/en-US/

![20250319121816](https://static-docs.nocobase.com/20250319121816.png)

When translating documents, you also need to pay attention to directory text modifications:
https://github.com/nocobase/docs/blob/main/docs/config/
![20250319121853](https://static-docs.nocobase.com/20250319121853.png)

Location of global component text modifications in the documentation:
https://github.com/nocobase/docs/blob/main/.dumi/theme/builtins/

For example, plugin information text:
https://github.com/nocobase/docs/blob/main/.dumi/theme/builtins/PluginInfo.tsx

![20250319122109](https://static-docs.nocobase.com/20250319122109.png)

### Website Localization

NocoBase website localization content (including website pages and all text) is stored in:
https://github.com/nocobase/website

If you need to add a new language, please refer to existing language pages:
- English pages: https://github.com/nocobase/website/blob/main/src/en/
- Chinese pages: https://github.com/nocobase/website/blob/main/src/cn/
- Japanese pages: https://github.com/nocobase/website/blob/main/src/ja/
![20250319121600](https://static-docs.nocobase.com/20250319121600.png)

Global style modification addresses:
- English: https://github.com/nocobase/website/blob/main/src/layouts/BaseEN.astro
- Chinese: https://github.com/nocobase/website/blob/main/src/layouts/BaseCN.astro
- Japanese: https://github.com/nocobase/website/blob/main/src/layouts/BaseJA.astro
![20250319121501](https://static-docs.nocobase.com/20250319121501.png)

Website global component localization address:
https://github.com/nocobase/website/tree/main/src/components

![20250319122940](https://static-docs.nocobase.com/20250319122940.png)

## How to Start Translating

If you want to contribute a new language translation to NocoBase, please follow these steps:

1. For system interface, clone the https://github.com/nocobase/locales repository, create a new language JSON file based on existing language files
2. For documentation, clone the https://github.com/nocobase/docs repository, create a new language directory and start translating
3. For the website, clone the https://github.com/nocobase/website repository, create new language pages referencing existing language pages

After completing your translation, please submit it to NocoBase via a Pull Request. We will review and merge your contribution. For system localization, you will see the new languages in the system configuration, where you can configure which languages to display for users to choose.

![20250319123452](https://static-docs.nocobase.com/20250319123452.png)

## Legacy Information

The NocoBase language files are located at the following locations:

```shell
packages/core/**/src/locale
packages/plugins/**/src/locale
```

Among other things, the translation of the NocoBase core is mainly located here:

https://github.com/nocobase/nocobase/tree/main/packages/core/client/src/locale

Please copy en_US.ts, name it with the name of the language you want to add, and then translate the strings in it. Once the translation is done, please submit it to NocoBase via pull request and we will add it to the list of languages. Then you will see the new languages in the system configuration, where you can configure which languages you want to display for users to choose.

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
