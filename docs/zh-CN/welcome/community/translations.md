# 翻译

NocoBase 默认语言是英语，目前主要支持英语、简体中文、日语。我们非常欢迎您帮助 NocoBase 翻译成更多语言，让全球更多用户能够使用 NocoBase！


## NocoBase系统本地化

### 系统界面和插件翻译

#### 翻译范围说明
注：适用于 NocoBase 系统界面、插件本地化翻译，不包含其他自定义内容（如数据表、markdown区块内容）。

![20250319120347](https://static-docs.nocobase.com/20250319120347.png)

#### 本地化内容介绍
NocoBase 采用 Git 管理系统的本地化内容，主要仓库地址为：
https://github.com/nocobase/locales

不同语种以语言代码缩写的 JSON 文件命名，如 `de-DE.json`、`fr-FR.json` 等。JSON 文件内的结构按照插件模块组织，采用键值对的形式存储翻译内容，例如：

```json
{
  // 客户端插件
  "@nocobase/client": {
    "(Fields only)": "(Fields only)",
    "12 hour": "12 hour",
    "24 hour": "24 hour"
    // ...其他键值对
  },
  "@nocobase/plugin-acl": {
    // 该插件的键值对
  }
  // ...其他插件模块
}
```

假设进行翻译的时候，需要逐步翻译为类似如下的结构

```json
{
  // 客户端插件
  "@nocobase/client": {
    "(Fields only)": "(仅字段)",
    "12 hour": "12小时",
    "24 hour": "24小时"
    // ...其他键值对
  },
  "@nocobase/plugin-acl": {
    // 该插件的键值对
  }
  // ...其他插件模块
}
```

#### 翻译测试和验证


#### 翻译同步
提交翻译后，我们的脚本会自动推送本地化内容到代码仓库。

### 文档和用户手册翻译

NocoBase 文档和用户手册的本地化内容存放在：
https://github.com/nocobase/docs

对于不同语种的本地化，我们采用直接附加本地化目录的方式，例如：
https://github.com/nocobase/docs/blob/main/docs/en-US/

![20250319121816](https://static-docs.nocobase.com/20250319121816.png)

在翻译文档时，还需要注意目录文案的修改：
https://github.com/nocobase/docs/blob/main/docs/config/
![20250319121853](https://static-docs.nocobase.com/20250319121853.png)

文档中全局组件的文案修改位置：
https://github.com/nocobase/docs/blob/main/.dumi/theme/builtins/

比如插件信息文案：
https://github.com/nocobase/docs/blob/main/.dumi/theme/builtins/PluginInfo.tsx

![20250319122109](https://static-docs.nocobase.com/20250319122109.png)


### 官网本地化

NocoBase 官网本地化内容（包含官网页面和所有文案）存放在：
https://github.com/nocobase/website


其中，如需新增语言，请参考现有语言页面：
- 英文页面：https://github.com/nocobase/website/blob/main/src/en/
- 中文页面：https://github.com/nocobase/website/blob/main/src/cn/
- 日文页面：https://github.com/nocobase/website/blob/main/src/ja/
![20250319121600](https://static-docs.nocobase.com/20250319121600.png)


全局样式修改地址：
- 英文：https://github.com/nocobase/website/blob/main/src/layouts/BaseEN.astro
- 中文：https://github.com/nocobase/website/blob/main/src/layouts/BaseCN.astro
- 日文：https://github.com/nocobase/website/blob/main/src/layouts/BaseJA.astro
![20250319121501](https://static-docs.nocobase.com/20250319121501.png)

官网全局组件的本地化地址：
https://github.com/Albert-mah/website/tree/main/src/components

![20250319122940](https://static-docs.nocobase.com/20250319122940.png)


## 如何开始翻译

如果您想为 NocoBase 贡献一种新的语言翻译，请按照以下步骤操作：

1. 对于系统界面，克隆 https://github.com/nocobase/locales 仓库，根据现有语言文件创建新的语言 JSON 文件
2. 对于文档，克隆 https://github.com/nocobase/docs 仓库，创建新的语言目录并开始翻译
3. 对于官网，克隆 https://github.com/nocobase/website 仓库，参考现有语言页面创建新语言的页面

翻译完成后，请通过 Pull Request 提交给 NocoBase。我们将审核并合并您的贡献。对于系统本地化，您将在系统配置中看到新增的语言，可以在设置中配置需要显示哪些语言供用户选择。

![20250319123452](https://static-docs.nocobase.com/20250319123452.png)

## 支持的语言代码和本地化进度

下表列出了可用的语种信息和本地化进度，供您参考：

| 语种名称                                                                                                                         | 显示名称                 | 进度  | 贡献者 |
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
