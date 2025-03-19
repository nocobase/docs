# 1. Traductions

La langue par défaut de NocoBase est l’anglais. Actuellement, NocoBase prend en charge l’anglais, le chinois simplifié, le japonais, le russe et le turc. Nous vous invitons cordialement à contribuer à la traduction de NocoBase dans d’autres langues, afin de rendre le système accessible aux utilisateurs du monde entier !

## 2. Localisation du système NocoBase

### 2.1 Traduction de l’interface système et des plugins

#### 2.1.1 Portée de la traduction
Note : Cette traduction concerne uniquement l’interface système de NocoBase et la localisation des plugins, et n’inclut pas d’autres contenus personnalisés (comme les tables de données ou le contenu des blocs Markdown).

![20250319120347](https://static-docs.nocobase.com/20250319120347.png)

#### 2.1.2 Aperçu du contenu de localisation
NocoBase utilise Git pour gérer le contenu de localisation du système. Le dépôt principal se trouve ici :
https://github.com/nocobase/locales

Les différentes langues sont représentées par des fichiers JSON nommés d’après des codes de langue abrégés (par exemple, `de-DE.json`, `fr-FR.json`, etc.). La structure de ces fichiers est organisée par modules de plugins, regroupant les traductions sous forme de paires clé-valeur, par exemple :

```json
{
  // Plugin client
  "@nocobase/client": {
    "(Fields only)": "(Fields only)",
    "12 hour": "12 hour",
    "24 hour": "24 hour"
    // ...autres paires clé-valeur
  },
  "@nocobase/plugin-acl": {
    // Paires clé-valeur pour ce plugin
  }
  // ...autres modules de plugin
}
```

Lors de la traduction, vous adapterez la structure de façon similaire :

```json
{
  // Plugin client
  "@nocobase/client": {
    "(Fields only)": "(Champs uniquement)",
    "12 hour": "12 heures",
    "24 hour": "24 heures"
    // ...autres paires clé-valeur
  },
  "@nocobase/plugin-acl": {
    // Paires clé-valeur pour ce plugin
  }
  // ...autres modules de plugin
}
```

#### 2.1.3 Synchronisation des traductions
Une fois votre traduction soumise, le système déploiera automatiquement les mises à jour vers le dépôt de code.

## 3. Traduction de la documentation et du manuel utilisateur

Le contenu de localisation de la documentation et du manuel utilisateur de NocoBase est stocké à l’adresse suivante :
https://github.com/nocobase/docs

Pour chaque langue, un répertoire de localisation spécifique est utilisé, par exemple :
https://github.com/nocobase/docs/blob/main/docs/en-US/

![20250319121816](https://static-docs.nocobase.com/20250319121816.png)

Lors de la traduction des documents, veillez également à intégrer les modifications issues du répertoire :
https://github.com/nocobase/docs/blob/main/docs/config/
![20250319121853](https://static-docs.nocobase.com/20250319121853.png)

Les textes des composants globaux se trouvent dans :
https://github.com/nocobase/docs/blob/main/.dumi/theme/builtins/

Par exemple, le message d’information du plugin est disponible ici :
https://github.com/nocobase/docs/blob/main/.dumi/theme/builtins/PluginInfo.tsx

![20250319122109](https://static-docs.nocobase.com/20250319122109.png)

## 4. Localisation du site web

Le contenu de localisation du site web NocoBase (incluant l’ensemble des pages et textes) se trouve sur :
https://github.com/nocobase/website

Pour ajouter une nouvelle langue, veuillez consulter les pages existantes :
- Pages en anglais : https://github.com/nocobase/website/blob/main/src/en/
- Pages en chinois : https://github.com/nocobase/website/blob/main/src/cn/
- Pages en japonais : https://github.com/nocobase/website/blob/main/src/ja/

![20250319121600](https://static-docs.nocobase.com/20250319121600.png)

Les adresses pour modifier le style global sont les suivantes :
- Anglais : https://github.com/nocobase/website/blob/main/src/layouts/BaseEN.astro
- Chinois : https://github.com/nocobase/website/blob/main/src/layouts/BaseCN.astro
- Japonais : https://github.com/nocobase/website/blob/main/src/layouts/BaseJA.astro

![20250319121501](https://static-docs.nocobase.com/20250319121501.png)

L’adresse de localisation des composants globaux du site web est :
https://github.com/nocobase/website/tree/main/src/components

![20250319122940](https://static-docs.nocobase.com/20250319122940.png)

## 5. Comment commencer à traduire

Si vous souhaitez contribuer à une nouvelle traduction pour NocoBase, suivez ces étapes :

1. Pour l’interface système : clonez le dépôt https://github.com/nocobase/locales et créez un nouveau fichier JSON de langue en vous basant sur les fichiers existants.
2. Pour la documentation : clonez le dépôt https://github.com/nocobase/docs, créez un répertoire pour la nouvelle langue et commencez à traduire.
3. Pour le site web : clonez le dépôt https://github.com/nocobase/website et créez de nouvelles pages en vous inspirant des pages existantes.

Après avoir terminé, soumettez votre traduction via une Pull Request. Nous examinerons et intégrerons votre contribution. Les nouvelles langues apparaîtront ensuite dans la configuration du système, permettant aux utilisateurs de choisir leur langue préférée.

![20250319123452](https://static-docs.nocobase.com/20250319123452.png)

## 6. Informations historiques

Les fichiers de langue de NocoBase se trouvent aux emplacements suivants :

```shell
packages/core/**/src/locale
packages/plugins/**/src/locale
```

La traduction du noyau de NocoBase est principalement située ici :
https://github.com/nocobase/nocobase/tree/main/packages/core/client/src/locale

Pour ajouter une nouvelle traduction, copiez le fichier en_US.ts, renommez-le selon la langue souhaitée, puis traduisez les chaînes qu’il contient. Une fois terminé, soumettez-le via Pull Request afin de l’ajouter à la liste des langues. La nouvelle langue sera alors disponible dans la configuration du système.

<img src="./translations/enabled-languages.jpg" style="max-width: 800px;"/>

## 7. Codes de langue supportés et progrès de localisation

Le tableau suivant répertorie les langues disponibles ainsi que l’état d’avancement de leur traduction pour votre référence :

| Nom de culture linguistique | Nom d'affichage | Progrès | Contributeurs |
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
