# 翻译

NocoBase 默认语言为英语，目前支持英语、简体中文和日语。我们诚挚邀请您为 NocoBase 贡献更多语言翻译，助力全球用户更便捷地使用我们的系统！

---

## 一、系统本地化

### 1. 系统界面和插件翻译

#### 1.1 翻译范围说明
仅适用于 NocoBase 系统界面和插件的本地化翻译，不涵盖其他自定义内容（例如数据表、Markdown 区块等）。

![系统本地化示意图](https://static-docs.nocobase.com/20250319120347.png)

#### 1.2 本地化内容介绍
NocoBase 利用 Git 管理本地化内容，主要仓库地址为：
https://github.com/nocobase/locales

各语种采用语言代码命名对应的 JSON 文件（如 `de-DE.json`、`fr-FR.json`），文件结构按照插件模块组织，采用键值对存储翻译内容。例如：

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

翻译时，请逐步转换为如下结构：

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

#### 1.3 翻译测试与同步
- 完成翻译后，请先进行测试与验证，确保所有文本正确显示。
- 翻译提交后，系统脚本会自动将本地化内容同步至代码仓库。

---

## 二、文档及用户手册本地化

文档和用户手册的本地化内容存放在：
https://github.com/nocobase/docs

采用直接添加本地化目录的方式，例如：
https://github.com/nocobase/docs/blob/main/docs/en-US/

![文档本地化示意图](https://static-docs.nocobase.com/20250319121816.png)

注意事项：
- 修改目录文案请参考：https://github.com/nocobase/docs/blob/main/docs/config/
  
  ![目录文案示意图](https://static-docs.nocobase.com/20250319121853.png)

- 全局组件文案修改位于：https://github.com/nocobase/docs/blob/main/.dumi/theme/builtins/
  
  例如，插件信息文案：
  https://github.com/nocobase/docs/blob/main/.dumi/theme/builtins/PluginInfo.tsx

  ![插件信息示意图](https://static-docs.nocobase.com/20250319122109.png)

---

## 三、官网本地化

官网页面及所有文案存放在：
https://github.com/nocobase/website

新增语言时，请参考现有页面：
- 英文页面：https://github.com/nocobase/website/blob/main/src/en/
- 中文页面：https://github.com/nocobase/website/blob/main/src/cn/
- 日文页面：https://github.com/nocobase/website/blob/main/src/ja/

![官网本地化示意图](https://static-docs.nocobase.com/20250319121600.png)

全局样式修改路径：
- 英文：https://github.com/nocobase/website/blob/main/src/layouts/BaseEN.astro
- 中文：https://github.com/nocobase/website/blob/main/src/layouts/BaseCN.astro
- 日文：https://github.com/nocobase/website/blob/main/src/layouts/BaseJA.astro

![全局样式示意图](https://static-docs.nocobase.com/20250319121501.png)

官网全局组件本地化位于：
https://github.com/Albert-mah/website/tree/main/src/components

![官网组件示意图](https://static-docs.nocobase.com/20250319122940.png)

---

## 四、如何开始翻译

若您希望为 NocoBase 贡献新语言翻译，请按以下步骤进行：

1. 【系统界面翻译】
   - 克隆仓库：https://github.com/nocobase/locales
   - 基于现有语言文件创建新的 JSON 文件。
2. 【文档本地化】
   - 克隆仓库：https://github.com/nocobase/docs
   - 创建新语言目录，并开始翻译。
3. 【官网本地化】
   - 克隆仓库：https://github.com/nocobase/website
   - 参考现有语言页面创建对应的新语言页面。

翻译完成后，请通过 Pull Request 提交给 NocoBase。审核合并后，新语言将在系统设置中显示，供用户选择。

![翻译同步示意图](https://static-docs.nocobase.com/20250319123452.png)

---

## 五、支持的语言代码与本地化进度

下表列出了当前支持的语种及本地化进度，供您参考：

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
