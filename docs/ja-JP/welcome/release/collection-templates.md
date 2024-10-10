# v0.9.0: コレクション テンプレート

<img src="./v08-1-collection-templates/v08-1-collection-templates.jpg">

## なぜコレクション テンプレートが必要なのか？

待補充

## 設定パラメータの説明

```ts
interface ICollectionTemplate {
  name: string;
  title?: string;
  /** ソート順 */
  order?: number;
  /** デフォルト設定 */
  default?: CollectionOptions;
  /** UIで設定可能なCollectionOptionsパラメータ（追加または編集のコレクションフォームのフィールド） */
  configurableProperties?: Record<string, ISchema>;
  /** 現在のテンプレートで使用可能なフィールドタイプ */
  availableFieldInterfaces?:
    | AvailableFieldInterfacesInclude
    | AvailableFieldInterfacesExclude;
}

interface AvailableFieldInterfacesInclude {
  include?: any[];
}

interface AvailableFieldInterfacesExclude {
  exclude?: any[];
}

interface CollectionOptions {
  /**
   * IDの自動生成
   * @default true
   * */
  autoGenId?: boolean;
  /** 作成者 */
  createdBy?: boolean;
  /** 最終更新者 */
  updatedBy?: boolean;
  /** 作成日 */
  createdAt?: boolean;
  /** 更新日 */
  updatedAt?: boolean;
  /** ソート可能 */
  sortable?: boolean;
  /** ツリー構造 */
  tree?: string;
  /** ログ */
  logging?: boolean;
  /** 継承 */
  inherits: string | string[];
  /** フィールドリスト */
  fields?: FieldOptions[];
}
```

## 例

作成時に autoGenId は不要で、title と name の設定項目のみを提供します。

```ts
import { collectionConfigurableProperties } from '@nocobase/client';

{
  default: {
    autoGenId: false,
    fields: [],
  },
  configurableProperties: {
    ...collectionConfigurableProperties('name', 'title'),
  },
}
```

完全なプラグインの例については、[samples/custom-collection-template](https://github.com/nocobase/nocobase/tree/feat/collection-templates/packages/samples/custom-collection-template)をご覧ください。

