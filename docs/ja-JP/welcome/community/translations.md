# 翻訳

NocoBaseのデフォルト言語は英語です。現在、メインアプリケーションでは英語、イタリア語、オランダ語、簡体字中国語、日本語がサポートされています。皆様にはNocoBaseのさらなる言語翻訳へのご協力を心よりお願い申し上げ、世界中のユーザーがより便利にNocoBaseをご利用いただけるよう期待しております！

## 1. NocoBaseシステムのローカライズ

### 1.1 システムインターフェースとプラグインの翻訳

#### 1.1.1 翻訳範囲の説明
注：こちらの翻訳は、NocoBaseのシステムインターフェースおよびプラグインのローカライズに適用されます。データテーブルやMarkdownブロックなど、その他のカスタムコンテンツは対象外です。

![bbb6e0b44aeg](https://static-docs.nocobase.com/img_v3_02kh_8d429938-3aca-44b6-a437-bbb6e0b44aeg.jpg)

![20250319220127](https://static-docs.nocobase.com/20250319220127.png)


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
- 翻訳内容については、適宜テストおよび検証を行ってください。
翻訳検証用のプラグインもリリースしています。プラグインマーケットで「翻訳テストツール（Locale tester）」を検索してインストールできます。
![20250422233152](https://static-docs.nocobase.com/20250422233152.png)
インストール後、GitリポジトリのJSONファイルの内容をコピーして貼り付け、OKをクリックすると翻訳内容の効果を確認できます。
![20250422233950](https://static-docs.nocobase.com/20250422233950.png)

- 翻訳を提出すると、専用スクリプトが自動的にローカライズコンテンツをリポジトリへプッシュします。

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

## 3. 公式ウェブサイトのローカライズ（詳細ガイド）

NocoBase公式ウェブサイトのローカライズコンテンツ（全ページおよびすべてのテキスト）は、以下のリポジトリに保存されています：  
https://github.com/nocobase/website

### 3.0 スタートガイドと参考リソース

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
https://github.com/nocobase/website/tree/main/src/components

![20250319122940](https://static-docs.nocobase.com/20250319122940.png)

### 3.1 コンテンツ構造とローカライズ方法

私たちは混合コンテンツ管理方式を採用しています。英語、中国語、日本語のコンテンツとリソースはCMSシステムから定期的に同期され上書きされますが、他の言語は直接ローカルファイルを編集することができます。ローカルコンテンツは`content`ディレクトリに以下の構造で保存されています：

```
/content
  /articles        # ブログ記事
    /article-slug
      index.md     # 英語コンテンツ（デフォルト）
      index.cn.md  # 中国語コンテンツ 
      index.ja.md  # 日本語コンテンツ
      metadata.json # メタデータと他のローカライズプロパティ
  /tutorials       # チュートリアル
  /releases        # リリース情報
  /pages           # 一部の静的ページ
  /categories      # カテゴリ情報
    /article-categories.json  # 記事カテゴリリスト
    /category-slug            # 個別カテゴリ詳細
      /category.json
  /tags            # タグ情報
    /article-tags.json        # 記事タグリスト
    /release-tags.json        # リリースタグリスト
    /tag-slug                 # 個別タグ詳細
      /tag.json
  /help-center     # ヘルプセンターコンテンツ
    /help-center-tree.json    # ヘルプセンターナビゲーション構造
  ....
```

### 3.2 コンテンツ翻訳のガイドライン

- Markdownコンテンツの翻訳について

1. デフォルトファイル（例：`index.md`）をベースに新言語ファイル（例：`index.fr.md`）を作成
2. JSONファイル内の対応するフィールドにローカライズされたプロパティを追加
3. ファイル構造、リンク、画像参照の一貫性を維持

- JSONコンテンツの翻訳
多くのコンテンツメタデータはJSONファイルに保存され、通常は多言語フィールドを含んでいます：

```json
{
  "id": 123,
  "title": "English Title",       // 英語タイトル（デフォルト）
  "title_cn": "中文标题",          // 中国語タイトル
  "title_ja": "日本語タイトル",    // 日本語タイトル
  "description": "English description",
  "description_cn": "中文描述",
  "description_ja": "日本語の説明",
  "slug": "article-slug",         // URLパス（通常翻訳不要）
  "status": "published",
  "publishedAt": "2025-03-19T12:00:00Z"
}
```

**翻訳の注意点：**

1. **フィールド命名規則**：翻訳フィールドは通常 `{原フィールド}_{言語コード}` の形式を採用
   - 例：title_fr（フランス語タイトル）、description_de（ドイツ語説明）

2. **新言語追加時**：
   - 翻訳が必要な各フィールドに対応する言語のサフィックスバージョンを追加
   - 元のフィールド値（title、descriptionなど）は変更しないでください。これらはデフォルト言語（英語）のコンテンツとして機能します

3. **CMS同期メカニズム**：
   - CMSシステムは定期的に英語、中国語、日本語のコンテンツを更新します
   - システムはこれら3つの言語のコンテンツ（JSON内の一部プロパティ）のみを更新/上書きし、他の貢献者が追加した言語フィールドは**削除しません**
   - 例：フランス語翻訳（title_fr）を追加した場合、CMS同期はそのフィールドに影響しません


### 3.3 新言語サポートの設定

新言語サポートを追加するには、`src/utils/index.ts`ファイル内の`SUPPORTED_LANGUAGES`設定を変更する必要があります：

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
  // 新言語追加例：
  fr: {
    code: 'fr',
    locale: 'fr-FR',
    name: 'French'
  }
};
```

### 3.4 レイアウトファイルとスタイル

各言語に対応するレイアウトファイルが必要です：

1. 新しいレイアウトファイルを作成（例：フランス語の場合は`src/layouts/BaseFR.astro`）
2. 既存のレイアウトファイル（`BaseEN.astro`など）をコピーして翻訳
3. レイアウトファイルにはナビゲーションメニュー、フッターなどのグローバル要素の翻訳が含まれています
4. 言語スイッチャーの設定を更新し、新しく追加された言語に正しく切り替わるようにしてください

### 3.5 言語ページディレクトリの作成

新言語用の独立したページディレクトリを作成：

1. `src`ディレクトリ内に言語コードで名付けたフォルダを作成（例：`src/fr/`）
2. 他の言語ディレクトリ（例：`src/en/`）のページ構造を参照
3. ページ内容を更新し、タイトル、説明、テキストを対象言語に翻訳
4. ページが正しいレイアウトコンポーネントを使用していることを確認（例：`.layout: '@/layouts/BaseFR.astro'`）

### 3.6 コンポーネントのローカライズ

一部の共通コンポーネントも翻訳が必要です：

1. `src/components/`ディレクトリ内のコンポーネントを確認
2. 固定テキストを含むコンポーネント（ナビゲーションバー、フッターなど）に特に注意
3. コンポーネントは条件付きレンダリングを使用して異なる言語のコンテンツを表示することがあります：

```astro
{Astro.url.pathname.startsWith('/en') && <p>English content</p>}
{Astro.url.pathname.startsWith('/cn') && <p>中文内容</p>}
{Astro.url.pathname.startsWith('/fr') && <p>Contenu français</p>}
```

### 3.7 テストと検証

翻訳完了後、総合的なテストを行います：

1. ローカルでウェブサイトを実行（通常は`yarn dev`を使用）
2. 新言語でのすべてのページ表示を確認
3. 言語切り替え機能が正常に動作するか検証
4. すべてのリンクが正しい言語バージョンのページを指していることを確認
5. レスポンシブレイアウトを確認し、翻訳後のテキストがページデザインを崩さないようにする

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
| [it-IT](https://github.com/nocobase/locales/blob/main/it-IT.json "https://github.com/nocobase/locales/blob/main/it-IT.json") | Italiano             |     |    [@N3tN00b3r](https://github.com/N3tN00b3r)  |
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
| nl-NL                                                                                                                        | Nederlands           |     |    [@mathyvds](https://github.com/mathyvds)  |
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
