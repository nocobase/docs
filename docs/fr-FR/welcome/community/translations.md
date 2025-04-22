# 1. Traductions

La langue par défaut de NocoBase est l’anglais. Actuellement, l’application principale prend en charge l’anglais, l’italien, le néerlandais, le chinois simplifié et le japonais. Nous vous invitons sincèrement à contribuer aux traductions de NocoBase afin de permettre aux utilisateurs du monde entier de profiter d’une utilisation plus aisée du système !

## 2. Localisation du système NocoBase

### 2.1 Traduction de l’interface système et des plugins

#### 2.1.1 Portée de la traduction
Note : Cette traduction concerne uniquement l’interface système de NocoBase et la localisation des plugins, et n’inclut pas d’autres contenus personnalisés (comme les tables de données ou le contenu des blocs Markdown).

![bbb6e0b44aeg](https://static-docs.nocobase.com/img_v3_02kh_8d429938-3aca-44b6-a437-bbb6e0b44aeg.jpg)

![20250319220127](https://static-docs.nocobase.com/20250319220127.png)


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
- Une fois votre traduction soumise, le système déploiera automatiquement les mises à jour vers le dépôt de code.

#### 2.1.4 Test et validation des traductions
- Après avoir terminé votre traduction, veuillez la tester et vérifier que tous les textes s'affichent correctement.
Nous avons également publié un plugin de validation de traduction - recherchez `Testeur de localisation (Locale tester)` dans la marketplace des plugins.
![20250422233152](https://static-docs.nocobase.com/20250422233152.png)
Après l'installation, copiez le contenu JSON du fichier de localisation correspondant dans le dépôt git, collez-le à l'intérieur et cliquez sur OK pour vérifier si le contenu de la traduction est effectif.
![20250422233950](https://static-docs.nocobase.com/20250422233950.png)

- Une fois soumises, des scripts système synchroniseront automatiquement le contenu localisé vers le dépôt de code.

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

## 4. Localisation du site web (Guide détaillé)

Le contenu de localisation du site web NocoBase (incluant l'ensemble des pages et textes) se trouve sur :
https://github.com/nocobase/website

### 4.0 Guide de démarrage et ressources de référence

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

L'adresse de localisation des composants globaux du site web est :
https://github.com/nocobase/website/tree/main/src/components

![20250319122940](https://static-docs.nocobase.com/20250319122940.png)

### 4.1 Structure du contenu et méthode de localisation

Nous utilisons une approche mixte de gestion du contenu. Les contenus et ressources en anglais, chinois et japonais sont régulièrement synchronisés depuis le système CMS et écrasés, tandis que les autres langues peuvent être modifiées directement dans les fichiers locaux. Le contenu local est stocké dans le répertoire `content`, organisé comme suit :

```
/content
  /articles        # Articles de blog
    /article-slug
      index.md     # Contenu anglais (par défaut)
      index.cn.md  # Contenu chinois 
      index.ja.md  # Contenu japonais
      metadata.json # Métadonnées et autres propriétés de localisation
  /tutorials       # Tutoriels
  /releases        # Informations de versions
  /pages           # Pages statiques
  /categories      # Informations de catégories
    /article-categories.json  # Liste des catégories d'articles
    /category-slug            # Détails d'une catégorie individuelle
      /category.json
  /tags            # Informations de tags
    /article-tags.json        # Liste des tags d'articles
    /release-tags.json        # Liste des tags de versions
    /tag-slug                 # Détails d'un tag individuel
      /tag.json
  /help-center     # Contenu du centre d'aide
    /help-center-tree.json    # Structure de navigation du centre d'aide
  ....
```

### 4.2 Instructions pour la traduction du contenu

- À propos de la traduction de contenu Markdown

1. Créez un nouveau fichier de langue basé sur le fichier par défaut (par exemple, `index.md` vers `index.fr.md`)
2. Ajoutez des propriétés localisées dans les champs correspondants du fichier JSON
3. Maintenez la cohérence dans la structure des fichiers, les liens et les références d'images

- Traduction du contenu JSON
De nombreuses métadonnées de contenu sont stockées dans des fichiers JSON, qui contiennent généralement des champs multilingues :

```json
{
  "id": 123,
  "title": "English Title",       // Titre anglais (par défaut)
  "title_cn": "中文标题",          // Titre chinois
  "title_ja": "日本語タイトル",    // Titre japonais
  "description": "English description",
  "description_cn": "中文描述",
  "description_ja": "日本語の説明",
  "slug": "article-slug",         // Chemin URL (généralement non traduit)
  "status": "published",
  "publishedAt": "2025-03-19T12:00:00Z"
}
```

**Remarques sur la traduction :**

1. **Convention de nommage des champs** : Les champs de traduction utilisent généralement le format `{champ_original}_{code_langue}`
   - Par exemple : title_fr (titre français), description_de (description allemande)

2. **Lors de l'ajout d'une nouvelle langue** :
   - Ajoutez une version avec suffixe de langue correspondante pour chaque champ nécessitant une traduction
   - Ne modifiez pas les valeurs des champs originaux (comme title, description, etc.), car ils servent de contenu pour la langue par défaut (anglais)

3. **Mécanisme de synchronisation CMS** :
   - Le système CMS met à jour périodiquement le contenu en anglais, chinois et japonais
   - Le système ne mettra à jour/écrasera que le contenu pour ces trois langues (certaines propriétés dans le JSON), et **ne supprimera pas** les champs de langue ajoutés par d'autres contributeurs
   - Par exemple : si vous avez ajouté une traduction française (title_fr), la synchronisation CMS n'affectera pas ce champ


### 4.3 Configuration du support pour une nouvelle langue

Pour ajouter le support d'une nouvelle langue, vous devez modifier la configuration `SUPPORTED_LANGUAGES` dans le fichier `src/utils/index.ts` :

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
  // Exemple d'ajout d'une nouvelle langue :
  fr: {
    code: 'fr',
    locale: 'fr-FR',
    name: 'French'
  }
};
```

### 4.4 Fichiers de mise en page et styles

Chaque langue nécessite des fichiers de mise en page correspondants :

1. Créez un nouveau fichier de mise en page (par exemple, pour le français, créez `src/layouts/BaseFR.astro`)
2. Vous pouvez copier un fichier de mise en page existant (comme `BaseEN.astro`) et le traduire
3. Le fichier de mise en page contient des traductions pour les éléments globaux comme les menus de navigation, les pieds de page, etc.
4. Assurez-vous de mettre à jour la configuration du sélecteur de langue pour permettre de basculer correctement vers la nouvelle langue ajoutée

### 4.5 Création de répertoires de pages pour chaque langue

Créez des répertoires de pages indépendants pour la nouvelle langue :

1. Créez un dossier nommé avec le code de langue dans le répertoire `src` (par exemple, `src/fr/`)
2. Copiez la structure des pages à partir d'autres répertoires de langue (par exemple, `src/en/`)
3. Mettez à jour le contenu des pages, en traduisant les titres, descriptions et textes dans la langue cible
4. Assurez-vous que les pages utilisent le composant de mise en page correct (par exemple, `.layout: '@/layouts/BaseFR.astro'`)

### 4.6 Localisation des composants

Certains composants communs nécessitent également une traduction :

1. Vérifiez les composants dans le répertoire `src/components/`
2. Portez une attention particulière aux composants contenant du texte fixe (comme les barres de navigation, pieds de page, etc.)
3. Les composants peuvent utiliser un rendu conditionnel pour afficher du contenu dans différentes langues :

```astro
{Astro.url.pathname.startsWith('/en') && <p>English content</p>}
{Astro.url.pathname.startsWith('/cn') && <p>中文内容</p>}
{Astro.url.pathname.startsWith('/fr') && <p>Contenu français</p>}
```

### 4.7 Test et validation

Après avoir terminé la traduction, effectuez des tests approfondis :

1. Exécutez le site web localement (généralement en utilisant `yarn dev`)
2. Vérifiez comment toutes les pages s'affichent dans la nouvelle langue
3. Vérifiez que la fonctionnalité de changement de langue fonctionne correctement
4. Assurez-vous que tous les liens pointent vers les pages de la version linguistique correcte
5. Vérifiez les mises en page responsives pour vous assurer que le texte traduit ne perturbe pas la conception de la page

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

Pour ajouter une nouvelle traduction, copiez le fichier en_US.ts, renommez-le selon la langue souhaitée, puis traduisez les chaînes qu'il contient. Une fois terminé, soumettez-le via Pull Request afin de l'ajouter à la liste des langues. La nouvelle langue sera alors disponible dans la configuration du système.

<img src="./translations/enabled-languages.jpg" style="max-width: 800px;"/>

## 7. Codes de langue supportés et progrès de localisation

Le tableau suivant répertorie les langues disponibles ainsi que l'état d'avancement de leur traduction pour votre référence :

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
| nl-NL                                                                                                                        | Nederlands           |     |    [@mathyvds](https://github.com/mathyvds)   |
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
