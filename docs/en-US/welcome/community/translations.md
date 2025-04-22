# Translation

The default language of NocoBase is English. Currently, the main application supports English, Italian, Dutch, Simplified Chinese, and Japanese. We sincerely invite you to contribute translations for additional languages, enabling users around the world to enjoy an even more convenient NocoBase experience.

---

## I. System Localization

### 1. System Interface and Plugin Translation

#### 1.1 Translation Scope
This applies only to the localization of the NocoBase system interface and plugins, and does not cover other custom content (such as data tables or Markdown blocks).

![bbb6e0b44aeg](https://static-docs.nocobase.com/img_v3_02kh_8d429938-3aca-44b6-a437-bbb6e0b44aeg.jpg)

![20250319220127](https://static-docs.nocobase.com/20250319220127.png)


#### 1.2 Localization Content Overview
NocoBase uses Git to manage its localization content. The primary repository is:
https://github.com/nocobase/locales

Each language is represented by a JSON file named according to its language code (e.g., de-DE.json, fr-FR.json). The file structure is organized by plugin modules, using key-value pairs to store translations. For example:

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
- After completing your translation, please test and verify that all texts display correctly.
We've also released a translation validation plugin - search for `Locale tester` in the plugin marketplace.
![20250422233152](https://static-docs.nocobase.com/20250422233152.png)
After installation, copy the JSON content from the corresponding localization file in the git repository, paste it inside, and click OK to verify if the translation content is effective.
![20250422233950](https://static-docs.nocobase.com/20250422233950.png)

- Once submitted, system scripts will automatically synchronize the localization content to the code repository.

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

## III. Website Localization (Detailed Guide)

The website pages and all content are stored in:
https://github.com/nocobase/website

### 3.0 Getting Started and Reference Resources

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

The website's global component localization is available at:
https://github.com/nocobase/website/tree/main/src/components

![Website Components Diagram](https://static-docs.nocobase.com/20250319122940.png)

### 3.1 Content Structure and Localization Method

We use a mixed content management approach. English, Chinese, and Japanese content and resources are regularly synchronized from the CMS system and overwritten, while other languages can be edited directly in local files. Local content is stored in the `content` directory, organized as follows:

```
/content
  /articles        # Blog articles
    /article-slug
      index.md     # English content (default)
      index.cn.md  # Chinese content 
      index.ja.md  # Japanese content
      metadata.json # Metadata and other localization properties
  /tutorials       # Tutorials
  /releases        # Release information
  /pages           # Some static pages
  /categories      # Category information
    /article-categories.json  # Article category list
    /category-slug            # Individual category details
      /category.json
  /tags            # Tag information
    /article-tags.json        # Article tag list
    /release-tags.json        # Release tag list
    /tag-slug                 # Individual tag details
      /tag.json
  /help-center     # Help center content
    /help-center-tree.json    # Help center navigation structure
  ....
```

### 3.2 Content Translation Guidelines

- About Markdown Content Translation

1. Create a new language file based on the default file (e.g., `index.md` to `index.fr.md`)
2. Add localized properties in the corresponding fields in the JSON file
3. Maintain consistency in file structure, links, and image references

- JSON Content Translation
Many content metadata are stored in JSON files, which typically contain multilingual fields:

```json
{
  "id": 123,
  "title": "English Title",       // English title (default)
  "title_cn": "中文标题",          // Chinese title
  "title_ja": "日本語タイトル",    // Japanese title
  "description": "English description",
  "description_cn": "中文描述",
  "description_ja": "日本語の説明",
  "slug": "article-slug",         // URL path (usually not translated)
  "status": "published",
  "publishedAt": "2025-03-19T12:00:00Z"
}
```

**Translation Notes:**

1. **Field Naming Convention**: Translation fields typically use the `{original_field}_{language_code}` format
   - For example: title_fr (French title), description_de (German description)

2. **When Adding a New Language**:
   - Add a corresponding language suffix version for each field that needs translation
   - Do not modify the original field values (such as title, description, etc.), as they serve as default language (English) content

3. **CMS Synchronization Mechanism**:
   - The CMS system periodically updates English, Chinese and Japanese content
   - The system will only update/overwrite content for these three languages (some properties in the JSON), and **will not delete** language fields added by other contributors
   - For example: if you added a French translation (title_fr), CMS synchronization will not affect this field


### 3.3 Configuring Support for a New Language

To add support for a new language, you need to modify the `SUPPORTED_LANGUAGES` configuration in the `src/utils/index.ts` file:

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
  // Example of adding a new language:
  fr: {
    code: 'fr',
    locale: 'fr-FR',
    name: 'French'
  }
};
```

### 3.4 Layout Files and Styles

Each language needs corresponding layout files:

1. Create a new layout file (e.g., for French, create `src/layouts/BaseFR.astro`)
2. You can copy an existing layout file (such as `BaseEN.astro`) and translate it
3. The layout file contains translations for global elements like navigation menus, footers, etc.
4. Be sure to update the language switcher configuration to properly switch to the newly added language

### 3.5 Creating Language Page Directories

Create independent page directories for the new language:

1. Create a folder named with the language code in the `src` directory (e.g., `src/fr/`)
2. Copy the page structure from other language directories (e.g., `src/en/`)
3. Update page content, translating titles, descriptions and text into the target language
4. Ensure pages use the correct layout component (e.g., `.layout: '@/layouts/BaseFR.astro'`)

### 3.6 Component Localization

Some common components also need translation:

1. Check components in the `src/components/` directory
2. Pay special attention to components with fixed text (like navigation bars, footers, etc.)
3. Components may use conditional rendering to display content in different languages:

```astro
{Astro.url.pathname.startsWith('/en') && <p>English content</p>}
{Astro.url.pathname.startsWith('/cn') && <p>中文内容</p>}
{Astro.url.pathname.startsWith('/fr') && <p>Contenu français</p>}
```

### 3.7 Testing and Validation

After completing the translation, conduct thorough testing:

1. Run the website locally (usually using `yarn dev`)
2. Check how all pages display in the new language
3. Verify that the language switching functionality works properly
4. Ensure all links point to the correct language version pages
5. Check responsive layouts to ensure translated text doesn't break page design

## IV. How to Start Translating

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
| [it-IT](https://github.com/nocobase/locales/blob/main/it-IT.json "https://github.com/nocobase/locales/blob/main/it-IT.json") | Italiano             |     |   [@N3tN00b3r](https://github.com/N3tN00b3r)   |
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
| nl-NL                                                                                                                        | Nederlands           |     |   [@mathyvds](https://github.com/mathyvds)   |
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
