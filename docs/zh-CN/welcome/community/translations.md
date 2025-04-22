# 翻译

NocoBase 默认语言为英语，目前主应用支持英语、意大利语、荷兰语、简体中文、日语。我们诚挚邀请您为 NocoBase 贡献更多语言翻译，助力全球用户更便捷地使用NocoBase！

---

## 一、系统本地化

### 1. 系统界面和插件翻译

#### 1.1 翻译范围说明
仅适用于 NocoBase 系统界面和插件的本地化翻译，不涵盖其他自定义内容（例如数据表、Markdown 区块等）。

![bbb6e0b44aeg](https://static-docs.nocobase.com/img_v3_02kh_8d429938-3aca-44b6-a437-bbb6e0b44aeg.jpg)

![20250319220127](https://static-docs.nocobase.com/20250319220127.png)


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
我们也发布了翻译验证的插件，在插件市场搜索 `翻译测试工具（Locale tester）` 安装即可。
![20250422233152](https://static-docs.nocobase.com/20250422233152.png)
安装后，把git仓库对应本地化文件的 JSON 内容复制到里面，点击确定后，即可验证翻译内容是否生效。
![20250422233950](https://static-docs.nocobase.com/20250422233950.png)

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


## 三、官网本地化（详细指南）

官网页面及所有文案存放在：
https://github.com/nocobase/website

### 3.0 开始指南与参考内容

添加新语言时，请参考已有的语言页面：
- 英语：https://github.com/nocobase/website/blob/main/src/en/
- 中文：https://github.com/nocobase/website/blob/main/src/cn/
- 日语：https://github.com/nocobase/website/blob/main/src/ja/

![网站本地化示意图](https://static-docs.nocobase.com/20250319121600.png)

全局样式修改位于：
- 英语：https://github.com/nocobase/website/blob/main/src/layouts/BaseEN.astro
- 中文：https://github.com/nocobase/website/blob/main/src/layouts/BaseCN.astro
- 日语：https://github.com/nocobase/website/blob/main/src/layouts/BaseJA.astro

![全局样式示意图](https://static-docs.nocobase.com/20250319121501.png)

网站全局组件本地化位于：
https://github.com/nocobase/website/tree/main/src/components

![网站组件示意图](https://static-docs.nocobase.com/20250319122940.png)

### 3.1 内容结构和本地化方式

我们采用混合内容管理方式，其中英、中、日的内容和资源会定期从CMS系统同步内容并覆盖，其他语种支持直接编辑本地文件。本地内容存放在 `content` 目录下，按以下结构组织：

```
/content
  /articles        # 博客文章
    /article-slug
      index.md     # 英文内容（默认）
      index.cn.md  # 中文内容 
      index.ja.md  # 日文内容
      metadata.json # 元数据和其他本地化属性
  /tutorials       # 教程
  /releases        # 发布信息
  /pages           # 部分静态页面
  /categories      # 分类信息
    /article-categories.json  # 文章分类列表
    /category-slug            # 单个分类详情
      /category.json
  /tags            # 标签信息
    /article-tags.json        # 文章标签列表
    /release-tags.json        # 发布标签列表
    /tag-slug                 # 单个标签详情
      /tag.json
  /help-center     # 帮助中心内容
    /help-center-tree.json    # 帮助中心导航结构
  ....
```

### 3.2 内容翻译说明

- 关于Markdown内容翻译

1. 基于默认文件（如`index.md`）创建新语言文件（如`index.fr.md`）
2. 在 json 文件内对应字段添加本地化的属性
3. 保持文件结构、链接和图片引用的一致性

- JSON内容翻译
许多内容元数据存储在JSON文件中，这些文件通常包含多语言字段：

```json
{
  "id": 123,
  "title": "English Title",       // 英文标题（默认）
  "title_cn": "中文标题",          // 中文标题
  "title_ja": "日本語タイトル",    // 日文标题
  "description": "English description",
  "description_cn": "中文描述",
  "description_ja": "日本語の説明",
  "slug": "article-slug",         // URL路径（通常不需翻译）
  "status": "published",
  "publishedAt": "2025-03-19T12:00:00Z"
}
```

**翻译注意事项：**

1. **字段命名规则**：翻译字段通常采用 `{原字段}_{语言代码}` 格式
   - 例如：title_fr（法语标题）、description_de（德语描述）

2. **新增语言时**：
   - 为每个需要翻译的字段添加对应语言的后缀版本
   - 不要修改原有字段值（如title、description等），它们作为默认语言（英文）内容

3. **CMS同步机制**：
   - CMS系统定期同步会更新英文、中文和日文内容
   - 系统只会更新/覆盖这三种语言的内容（json内的部分属性），**不会删除**其他贡献者添加的语言字段
   - 例如：如果您添加了法语翻译（title_fr），CMS同步不会影响该字段


### 3.3 配置新语言支持

要添加新语言支持，需要修改`src/utils/index.ts`文件中的`SUPPORTED_LANGUAGES`配置：

```typescript
export const SUPPORTED_LANGUAGES = {
  en: {
    code: 'en',
    locale: 'en-US',
    name: 'English',
    default: true
  },
  cn: {
    code: 'cn',
    locale: 'zh-CN',
    name: 'Chinese'
  },
  ja: {
    code: 'ja',
    locale: 'ja-JP',
    name: 'Japanese'
  },
  // 添加新语言示例：
  fr: {
    code: 'fr',
    locale: 'fr-FR',
    name: 'French'
  }
};
```

### 3.4 布局文件与样式

每种语言需要对应的布局文件：

1. 创建新的布局文件（例如，添加法语需创建`src/layouts/BaseFR.astro`）
2. 可以复制现有布局文件（如`BaseEN.astro`）并进行翻译
3. 布局文件中包含导航菜单、页脚等全局元素的翻译
4. 注意更新语言切换器的配置，确保能正确切换到新添加的语言

### 3.5 创建语言页面目录

为新语言创建独立的页面目录：

1. 在`src`目录下创建以语言代码命名的文件夹（如`src/fr/`）
2. 参考其他语言目录（如`src/en/`）复制页面结构
3. 更新页面内容，将标题、描述和文本翻译成目标语言
4. 确保页面使用正确的布局组件（如`.layout: '@/layouts/BaseFR.astro'`）

### 3.6 组件本地化

一些通用组件也需要翻译：

1. 检查`src/components/`目录中的组件
2. 特别注意带有固定文本的组件（如导航栏、页脚等）
3. 组件可能使用条件渲染来显示不同语言内容：

```astro
{Astro.url.pathname.startsWith('/en') && <p>English content</p>}
{Astro.url.pathname.startsWith('/cn') && <p>中文内容</p>}
{Astro.url.pathname.startsWith('/fr') && <p>Contenu français</p>}
```

### 3.7 测试与验证

完成翻译后，应进行全面测试：

1. 在本地运行网站（通常使用`yarn dev`）
2. 检查所有页面在新语言下的显示情况
3. 验证语言切换功能是否正常工作
4. 确保所有链接都指向正确的语言版本页面
5. 检查响应式布局，确保翻译后的文本不会破坏页面设计



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
| [en-US](https://github.com/nocobase/locales/blob/main/en-US.json "https://github.com/nocobase/locales/blob/main/en-US.json") | English              |  100%   |     |
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
| [it-IT](https://github.com/nocobase/locales/blob/main/it-IT.json "https://github.com/nocobase/locales/blob/main/it-IT.json") | Italiano             |     |  [@N3tN00b3r](https://github.com/N3tN00b3r) |
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
| nl-NL                                                                                                                        | Nederlands           |     |  [@mathyvds](https://github.com/mathyvds)  |
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
