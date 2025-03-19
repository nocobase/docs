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
提交翻译后，系统会自动推送本地化内容到代码仓库。



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

## 支持的语言代码

下表列出了可用的语言文化名称、本地化文件名称和显示名称，供您参考：

| Language Culture Name | Locale File Name | Display Name                  |
| :-------------------- | :--------------- | :---------------------------- |
| af-ZA                 | af_ZA.ts         | Afrikaans - South Africa      |
| sq-AL                 | sq_AL.ts         | Albanian - Albania            |
| ar-DZ                 | ar_DZ.ts         | Arabic - Algeria              |
| ar-BH                 | ar_BH.ts         | Arabic - Bahrain              |
| ar-EG                 | ar_EG.ts         | Arabic - Egypt                |
| ar-IQ                 | ar_IQ.ts         | Arabic - Iraq                 |
| ar-JO                 | ar_JO.ts         | Arabic - Jordan               |
| ar-KW                 | ar_KW.ts         | Arabic - Kuwait               |
| ar-LB                 | ar_LB.ts         | Arabic - Lebanon              |
| ar-LY                 | ar_LY.ts         | Arabic - Libya                |
| ar-MA                 | ar_MA.ts         | Arabic - Morocco              |
| ar-OM                 | ar_OM.ts         | Arabic - Oman                 |
| ar-QA                 | ar_QA.ts         | Arabic - Qatar                |
| ar-SA                 | ar_SA.ts         | Arabic - Saudi Arabia         |
| ar-SY                 | ar_SY.ts         | Arabic - Syria                |
| ar-TN                 | ar_TN.ts         | Arabic - Tunisia              |
| ar-AE                 | ar_AE.ts         | Arabic - United Arab Emirates |
| ar-YE                 | ar_YE.ts         | Arabic - Yemen                |
| hy-AM                 | hy_AM.ts         | Armenian - Armenia            |
| Cy-az-AZ              | Cy_az_AZ.ts      | Azeri (Cyrillic) - Azerbaijan |
| Lt-az-AZ              | Lt_az_AZ.ts      | Azeri (Latin) - Azerbaijan    |
| eu-ES                 | eu_ES.ts         | Basque - Basque               |
| be-BY                 | be_BY.ts         | Belarusian - Belarus          |
| bg-BG                 | bg_BG.ts         | Bulgarian - Bulgaria          |
| ca-ES                 | ca_ES.ts         | Catalan - Catalan             |
| zh-CN                 | zh_CN.ts         | Chinese - China               |
| zh-HK                 | zh_HK.ts         | Chinese - Hong Kong SAR       |
| zh-MO                 | zh_MO.ts         | Chinese - Macau SAR           |
| zh-SG                 | zh_SG.ts         | Chinese - Singapore           |
| zh-TW                 | zh_TW.ts         | Chinese - Taiwan              |
| zh-CHS                | zh_CHS.ts        | Chinese (Simplified)          |
| zh-CHT                | zh_CHT.ts        | Chinese (Traditional)         |
| hr-HR                 | hr_HR.ts         | Croatian - Croatia            |
| cs-CZ                 | cs_CZ.ts         | Czech - Czech Republic        |
| da-DK                 | da_DK.ts         | Danish - Denmark              |
| div-MV                | div_MV.ts        | Dhivehi - Maldives            |
| nl-BE                 | nl_BE.ts         | Dutch - Belgium               |
| nl-NL                 | nl_NL.ts         | Dutch - The Netherlands       |
| en-AU                 | en_AU.ts         | English - Australia           |
| en-BZ                 | en_BZ.ts         | English - Belize              |
| en-CA                 | en_CA.ts         | English - Canada              |
| en-CB                 | en_CB.ts         | English - Caribbean           |
| en-IE                 | en_IE.ts         | English - Ireland             |
| en-JM                 | en_JM.ts         | English - Jamaica             |
| en-NZ                 | en_NZ.ts         | English - New Zealand         |
| en-PH                 | en_PH.ts         | English - Philippines         |
| en-ZA                 | en_ZA.ts         | English - South Africa        |
| en-TT                 | en_TT.ts         | English - Trinidad and Tobago |
| en-GB                 | en_GB.ts         | English - United Kingdom      |
| en-US                 | en_US.ts         | English - United States       |
| en-ZW                 | en_ZW.ts         | English - Zimbabwe            |
| et-EE                 | et_EE.ts         | Estonian - Estonia            |
| fo-FO                 | fo_FO.ts         | Faroese - Faroe Islands       |
| fa-IR                 | fa_IR.ts         | Farsi - Iran                  |
| fi-FI                 | fi_FI.ts         | Finnish - Finland             |
| fr-BE                 | fr_BE.ts         | French - Belgium              |
| fr-CA                 | fr_CA.ts         | French - Canada               |
| fr-FR                 | fr_FR.ts         | French - France               |
| fr-LU                 | fr_LU.ts         | French - Luxembourg           |
| fr-MC                 | fr_MC.ts         | French - Monaco               |
| fr-CH                 | fr_CH.ts         | French - Switzerland          |
| gl-ES                 | gl_ES.ts         | Galician - Galician           |
| ka-GE                 | ka_GE.ts         | Georgian - Georgia            |
| de-AT                 | de_AT.ts         | German - Austria              |
| de-DE                 | de_DE.ts         | German - Germany              |
| de-LI                 | de_LI.ts         | German - Liechtenstein        |
| de-LU                 | de_LU.ts         | German - Luxembourg           |
| de-CH                 | de_CH.ts         | German - Switzerland          |
| el-GR                 | el_GR.ts         | Greek - Greece                |
| gu-IN                 | gu_IN.ts         | Gujarati - India              |
| he-IL                 | he_IL.ts         | Hebrew - Israel               |
| hi-IN                 | hi_IN.ts         | Hindi - India                 |
| hu-HU                 | hu_HU.ts         | Hungarian - Hungary           |
| is-IS                 | is_IS.ts         | Icelandic - Iceland           |
| id-ID                 | id_ID.ts         | Indonesian - Indonesia        |
| it-IT                 | it_IT.ts         | Italian - Italy               |
| it-CH                 | it_CH.ts         | Italian - Switzerland         |
| ja-JP                 | ja_JP.ts         | Japanese - Japan              |
| kn-IN                 | kn_IN.ts         | Kannada - India               |
| kk-KZ                 | kk_KZ.ts         | Kazakh - Kazakhstan           |
| kok-IN                | kok_IN.ts        | Konkani - India               |
| ko-KR                 | ko_KR.ts         | Korean - Korea                |
| ky-KZ                 | ky_KZ.ts         | Kyrgyz - Kazakhstan           |
| lv-LV                 | lv_LV.ts         | Latvian - Latvia              |
| lt-LT                 | lt_LT.ts         | Lithuanian - Lithuania        |
| mk-MK                 | mk_MK.ts         | Macedonian (FYROM)            |
| ms-BN                 | ms_BN.ts         | Malay - Brunei                |
| ms-MY                 | ms_MY.ts         | Malay - Malaysia              |
| mr-IN                 | mr_IN.ts         | Marathi - India               |
| mn-MN                 | mn_MN.ts         | Mongolian - Mongolia          |
| nb-NO                 | nb_NO.ts         | Norwegian (BokmÃ¥l) - Norway  |
| nn-NO                 | nn_NO.ts         | Norwegian (Nynorsk) - Norway  |
| pl-PL                 | pl_PL.ts         | Polish - Poland               |
| pt-BR                 | pt_BR.ts         | Portuguese - Brazil           |
| pt-PT                 | pt_PT.ts         | Portuguese - Portugal         |
| pa-IN                 | pa_IN.ts         | Punjabi - India               |
| ro-RO                 | ro_RO.ts         | Romanian - Romania            |
| ru-RU                 | ru_RU.ts         | Russian - Russia              |
| sa-IN                 | sa_IN.ts         | Sanskrit - India              |
| Cy-sr-SP              | Cy_sr_SP.ts      | Serbian (Cyrillic) - Serbia   |
| Lt-sr-SP              | Lt_sr_SP.ts      | Serbian (Latin) - Serbia      |
| sk-SK                 | sk_SK.ts         | Slovak - Slovakia             |
| sl-SI                 | sl_SI.ts         | Slovenian - Slovenia          |
| es-AR                 | es_AR.ts         | Spanish - Argentina           |
| es-BO                 | es_BO.ts         | Spanish - Bolivia             |
| es-CL                 | es_CL.ts         | Spanish - Chile               |
| es-CO                 | es_CO.ts         | Spanish - Colombia            |
| es-CR                 | es_CR.ts         | Spanish - Costa Rica          |
| es-DO                 | es_DO.ts         | Spanish - Dominican Republic  |
| es-EC                 | es_EC.ts         | Spanish - Ecuador             |
| es-SV                 | es_SV.ts         | Spanish - El Salvador         |
| es-GT                 | es_GT.ts         | Spanish - Guatemala           |
| es-HN                 | es_HN.ts         | Spanish - Honduras            |
| es-MX                 | es_MX.ts         | Spanish - Mexico              |
| es-NI                 | es_NI.ts         | Spanish - Nicaragua           |
| es-PA                 | es_PA.ts         | Spanish - Panama              |
| es-PY                 | es_PY.ts         | Spanish - Paraguay            |
| es-PE                 | es_PE.ts         | Spanish - Peru                |
| es-PR                 | es_PR.ts         | Spanish - Puerto Rico         |
| es-ES                 | es_ES.ts         | Spanish - Spain               |
| es-UY                 | es_UY.ts         | Spanish - Uruguay             |
| es-VE                 | es_VE.ts         | Spanish - Venezuela           |
| sw-KE                 | sw_KE.ts         | Swahili - Kenya               |
| sv-FI                 | sv_FI.ts         | Swedish - Finland             |
| sv-SE                 | sv_SE.ts         | Swedish - Sweden              |
| syr-SY                | syr_SY.ts        | Syriac - Syria                |
| ta-IN                 | ta_IN.ts         | Tamil - India                 |
| tt-RU                 | tt_RU.ts         | Tatar - Russia                |
| te-IN                 | te_IN.ts         | Telugu - India                |
| th-TH                 | th_TH.ts         | Thai - Thailand               |
| tr-TR                 | tr_TR.ts         | Turkish - Turkey              |
| uk-UA                 | uk_UA.ts         | Ukrainian - Ukraine           |
| ur-PK                 | ur_PK.ts         | Urdu - Pakistan               |
| Cy-uz-UZ              | Cy_uz_UZ.ts      | Uzbek (Cyrillic) - Uzbekistan |
| Lt-uz-UZ              | Lt_uz_UZ.ts      | Uzbek (Latin) - Uzbekistan    |
| vi-VN                 | vi_VN.ts         | Vietnamese - Vietnam          |
