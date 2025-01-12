# Étendre les Types de Graphiques

## Vue d'ensemble

NocoBase utilise [Ant Design Charts](https://g2plot.antv.antgroup.com/) comme bibliothèque de graphiques par défaut, qui inclut les types de graphiques les plus couramment utilisés. En plus des types de graphiques intégrés, NocoBase prend également en charge l'intégration d'autres types de graphiques ou bibliothèques, telles que ECharts. Cette section explique principalement comment étendre un nouveau type de graphique.

## Définir un Graphique

Dans le plugin de visualisation, chaque type de graphique est défini à l'aide d'une classe qui doit implémenter l'interface [ChartType](#charttype). Pour simplifier le développement, nous fournissons une classe de base [Chart](#chart), qui implémente partiellement l'interface `ChartType`. Dans la plupart des cas, pour étendre un type de graphique, vous n'avez qu'à hériter de la classe `Chart` et implémenter les méthodes requises.

```ts
class CustomChart extends Chart {
  constructor({ name, title, Component, config }: ChartProps) {
    // ...
  }

  init(
    fields: FieldOption[],
    {
      measures,
      dimensions,
    }: { measures: MeasureProps[]; dimensions: DimensionProps[] },
  ) {
    // ...
  }

  getProps({ data, general, advanced, fieldProps }: RenderProps) {
    // ...
  }

  getReference() {
    // ...
  }
}
```

### Informations sur le Graphique

Les informations de base pour un type de graphique incluent :

| Paramètre   | Description           |
| ----------- | --------------------- |
| `name`      | Identifiant            |
| `title`     | Titre affiché du graphique         |
| `Component` | Composant utilisé pour rendre le graphique |
| `config`    | Formulaire de configuration de la visualisation de base |

<img src="https://static-docs.nocobase.com/202404192352571.png"/>

Exemple :

```ts
new CustomChart({
  name: 'custom',
  title: 'Graphique Personnalisé',
  Component: CustomChart,
  config: ['xField', 'yField', 'seriesField'],
});
```

Référez-vous à [Chart](#chart) pour une utilisation spécifique.

### Initialiser la Configuration du Graphique

Lorsqu'un utilisateur sélectionne un graphique, nous pouvons vouloir initialiser la configuration du graphique en fonction des paramètres de la requête de données de l'utilisateur pour réduire la configuration manuelle.  
Chaque fois qu'un graphique est sélectionné, le plugin appelle en interne la méthode `init()` de la classe du graphique, en passant toutes les configurations de champs de la table de données actuelle, ainsi que la configuration actuelle des mesures et dimensions. La méthode `init()` peut ensuite initialiser la configuration du graphique en fonction des paramètres.  
La classe `Chart` inclut une méthode `infer()`, qui peut être utilisée pour inférer facilement la configuration initiale des champs de l'axe X, de l'axe Y et de la catégorie.  
Exemple :

```ts
init(
  fields: FieldOption[],
  {
    measures,
    dimensions,
  }: { measures: MeasureProps[]; dimensions: DimensionProps[] },
) {
  const { xField, yField, seriesField } = this.infer(fields, { measures, dimensions });
  return {
    general: {
      xField: xField?.value,
      yField: yField?.value,
      seriesField: seriesField?.value,
    },
  };
}
```

### Récupérer les Propriétés du Composant Graphique

Après avoir obtenu la configuration du graphique de l'utilisateur, nous pouvons avoir besoin de traiter davantage les données avant de les passer en tant que propriétés au composant du graphique. La méthode `getProps()` accepte les données du graphique, la configuration du graphique et les informations de champ associées en tant que paramètres, les traite et renvoie les propriétés finales passées au composant du graphique.

Par exemple, dans un graphique de type « statistiques » :

```ts
getProps({ data, fieldProps, general, advanced }: RenderProps) {
  const record = data[0] || {};
  const field = general?.field;
  const props = fieldProps[field];
  return {
    value: record[field],
    formatter: props?.transformer,
    ...general,
    ...advanced,
  };
}
```

### Récupérer les Références du Composant Graphique

La méthode `getReference()` récupère la documentation de référence pour le type de graphique actuel.

```ts
getReference() {
  return {
    title: this.title,
    link: `https://ant.design/components/${this.name}`,
  };
}
```

## Ajouter un Graphique

Après avoir défini la classe de graphique, nous devons ajouter l'instance de la classe au plugin de visualisation de données. Lors de la sélection des graphiques, ceux-ci sont regroupés pour l'affichage, le groupe par défaut étant "Intégré".

<img src="https://static-docs.nocobase.com/202404201042045.png"/>

Nous pouvons ajouter un groupe de graphiques ou ajouter des graphiques à un groupe existant.

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization'

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);

    // Ajouter un groupe de graphiques
    plugin.charts.addGroup('custom', [...]);

    // Définir un groupe de graphiques,
    // peut être utilisé pour remplacer un groupe existant
    plugin.charts.setGroup('custom', [...]);

    // Ajouter un graphique à un groupe existant
    // Le nom du graphique doit être unique dans un groupe
    plugin.charts.add('Built-in', new CustomChart({
      // ...
    }));
  }
}
```

Référez-vous à [ChartGroup](#chartgroup) pour plus de détails.

## Exemples

- [Exemple avec G2Plot](https://github.com/nocobase/nocobase/tree/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/g2plot)

- [Exemple avec Ant Design](https://github.com/nocobase/nocobase/tree/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/antd)

- [Exemple d'intégration avec ECharts](../step-by-step/index.md)

## API

### ChartGroup

#### `addGroup()`

Ajouter un groupe de graphiques.

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization'

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);

    // Ajouter un groupe de graphiques
    plugin.charts.addGroup('custom', {
      title: 'Personnalisé',
      charts: [...],
      sort: 1
    });
  }
}
```

**Signature**

- `addGroup(name: string, charts: ChartType[])`

**Détails**

| Paramètre | Type          | Description             |
| --------- | ------------- | ----------------------- |
| `name`    | `string`      | Titre du groupe de graphiques |
| `charts`  | `ChartType[]` | Tableau de graphiques    |
| `sort`    | `number`      | Optionnel, tri du groupe de graphiques |

#### `add()`

Ajouter un graphique à un groupe existant.

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization';

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);

    plugin.charts.add(
      'Built-in',
      new CustomChart({
        // ...
      }),
    );
  }
}
```

**Signature**

- `add(group: string, chart: ChartType)`

**Détails**

| Paramètre  | Type        | Description             |
| ---------- | ----------- | ----------------------- |
| `group`    | `string`    | Identifiant unique du groupe de graphiques |
| `chart`    | `ChartType` | Graphique à ajouter      |

### Chart

#### `constructor()`

Constructeur pour créer une nouvelle instance `Chart`.

**Signature**

- `constructor({ name, title, Component, config }: ChartProps)`

**Détails**

| Propriété   | Type                  | Description                       |
| ----------- | --------------------- | --------------------------------- |
| `name`      | `string`              | Identifiant unique du graphique   |
| `title`     | `string`              | Titre affiché du graphique        |
| `Component` | `React.FC<any>`       | Composant utilisé pour rendre le graphique |
| `config`    | [`Config[]`](#config) | Formulaire de configuration de la visualisation de base |

##### Config

La configuration (`config`) prend en charge plusieurs formats, qui peuvent être utilisés en combinaison :

1. Configuration du champ de l'interface utilisateur (UI Schema). Si vous souhaitez utiliser des champs déjà configurés dans la section "Configuration des données", vous pouvez utiliser `x-reactions': '{{ useChartFields }}'`.

```ts
{
  xField: {
    title: 'xField',
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Select',
    'x-reactions': '{{ useChartFields }}',
    required,
  }
}
```

2. Utilisation d'un schéma d'interface utilisateur prédéfini.

Par exemple, `config: ['field']` correspond à :

```typescript
{
  field: {
    title: 'Field',
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Select',
    'x-reactions': '{{ useChartFields }}',
    required,
  }
}
```

3. Utilisation d'un schéma d'interface utilisateur prédéfini avec certaines propriétés remplacées, où `property` fait référence à l'identifiant du schéma d'interface utilisateur prédéfini.

```typescript
config: [
  {
    property: 'field',
    name: 'angleField',
    title: 'angleField',
    defaultValue: 'default',
  },
];
```

Cela correspond à :

```typescript
{
  angleField: {
    title: 'angleField',
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Select',
    'x-reactions': '{{ useChartFields }}',
    required,
    defaultValue: 'default',
  }
}
```

Vous pouvez trouver toutes les options de schéma d'interface utilisateur prédéfinies dans le fichier <a href="https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/configs.ts" target="_blank">`/src/client/chart/config.ts`</a>.  
De plus, vous pouvez ajouter de nouvelles options de schéma d'interface utilisateur prédéfinies à l'aide de la méthode [`addConfigs()`](#addconfigs).

#### `addConfigTypes()`

Ajoute un schéma d'interface utilisateur prédéfini pour le formulaire de configuration de la visualisation du graphique.

```ts
// Ajouter
const boolean = ({ name, title, defaultValue = false }: FieldConfigProps) => {
  return {
    [name]: {
      'x-content': lang(title),
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Checkbox',
      default: defaultValue,
    },
  };
};
chart.addConfigTypes({ booleanField });

// Utilisation
new Chart({
  config: [
    'boolean',
    {
      configType: 'boolean',
      name: 'customBooleanField',
      title: 'Champ Booléen Personnalisé',
      defaultValue: true,
    },
  ],
});
```

**Signature**

- `addConfigTypes(configs: { [key: string]: ConfigType })`

**Détails**

`addConfigTypes()` accepte un objet, où la clé est l'identifiant unique de la configuration, et la valeur est une méthode qui récupère un schéma d'interface utilisateur prédéfini. Cette méthode prend des paramètres qui peuvent être remplacés et renvoie un objet de schéma pour ce type de champ.


#### `init()`

Cette fonction initialise la configuration du graphique lorsqu'un graphique est sélectionné. Elle définit les paramètres initiaux pour les propriétés du graphique.

**Signature**

```ts
init?: (
  fields: FieldOption[],
  query: {
    measures?: MeasureProps[];
    dimensions?: DimensionProps[];
  },
) => {
  general?: any;
  advanced?: any;
};
```

**Types**

```ts
export type FieldOption = {
  value: string;
  label: string;
  key: string;
  alias?: string;
  name?: string;
  type?: string;
  interface?: string;
  uiSchema?: ISchema;
  target?: string;
  targetFields?: FieldOption[];
};

export type MeasureProps = {
  field: string | string[];
  aggregation?: string;
  alias?: string;
};

export type DimensionProps = {
  field: string | string[];
  alias?: string;
  format?: string;
};
```

**Détails**

| Paramètre            | Type              | Description                                      |
| -------------------- | ----------------- | ------------------------------------------------ |
| `fields`             | `FieldOption[]`   | Contient les attributs clés des champs dans la table de données actuelle. |
| `query.measures`     | `MeasureProps[]`  | Détails de configuration des champs de mesure.   |
| `query.dimensions`   | `DimensionProps[]`| Détails de configuration des champs de dimension. |

#### `infer()`

Dérivation de la configuration initiale des graphiques.

```ts
// Exemple pour un graphique en secteurs
init(fields, { measures, dimensions }) {
  const { xField, yField } = this.infer(fields, { measures, dimensions });
  return {
    general: {
      colorField: xField?.value,
      angleField: yField?.value,
    },
  };
};
```

**Signature**

```ts
infer: (fields: FieldOption[], query: {
  measures?: MeasureProps[];
  dimensions?: DimensionProps[];
}) => {
  xField: FieldOption;
  yField: FieldOption;
  seriesField: FieldOption;
  colorField: FieldOption;
  yFields: FieldOption[];
}
```

**Détails**

| Propriété       | Type            | Description       |
| -------------- | --------------- | ----------------- |
| `xField`       | `FieldOption`   | Le champ à utiliser sur l'axe des x. |
| `yField`       | `FieldOption`   | Le champ à utiliser sur l'axe des y. |
| `seriesField`  | `FieldOption`   | Le champ représentant les catégories ou séries. |
| `colorField`   | `FieldOption`   | Le champ utilisé pour définir la couleur dans le graphique. |
| `yFields`      | `FieldOption[]` | Plusieurs champs pour l'axe des y (utilisé dans des graphiques complexes). |

#### `getProps()`

Cette fonction traite les données brutes du graphique et les métadonnées de configuration du graphique et les transforme en propriétés nécessaires pour le composant de rendu.

**signature**

- `getProps({ data, general, advanced, fieldProps }: RenderProps)`

**Types**

```ts
export type RenderProps = {
  data: Record<string, any>[];
  general: any;
  advanced: any;
  fieldProps: {
    [field: string]: {
      label: string;
      transformer: Transformer;
      interface: string;
    };
  };
};
```

| Propriété       | Type                              | Description                             |
| -------------- | --------------------------------- | --------------------------------------- |
| `data`         | `Record<string, any>[]`           | Les données brutes à afficher dans le graphique. |
| `general`      | `any`                             | Les options de configuration du formulaire de visualisation du graphique. |
| `advanced`     | `any`                             | La configuration avancée basée sur JSON pour le graphique. |
| `fieldProps`   | `{ [field: string]: FieldProps }` | Métadonnées sur les champs de la table de données, utilisées pour l'affichage. |

##### FieldProps

| Propriété       | Type          | Description             |
| -------------- | ------------- | ----------------------- |
| `label`        | `string`      | L'étiquette affichée pour le champ. |
| `transformer`  | `Transformer` | Une fonction pour transformer les valeurs des champs. |
| `interface`    | `string`      | Le type d'interface du champ. |

#### `getReference()`

Récupère la documentation de référence pour le composant graphique, y compris le titre et un lien direct vers la documentation.

```ts
getReference() {
  return {
    title: this.title,
    link: `https://ant.design/components/${this.name}`,
  };
}
```

**Signature**

```ts
getReference?: () => {
  title: string;
  link: string;
};
```

### ChartType

#### `name`

- `string`. Identifiant du type de graphique.

#### `title`

- `string`. Le titre affiché du graphique.

#### `Component`

- `React.FC<any>`. Le composant React utilisé pour rendre le graphique.

#### `schema`

- `ISchema`. Le schéma UI pour la configuration de visualisation du graphique.

#### `init()`

Cette fonction initialise la configuration du graphique.

**Signature**

```ts
init?: (
  fields: FieldOption[],
  query: {
    measures?: MeasureProps[];
    dimensions?: DimensionProps[];
  },
) => {
  general?: any;
  advanced?: any;
};
```

#### `getProps()`

Gère le traitement et la récupération des propriétés pour le composant graphique.

**Signature**

- `getProps(props: RenderProps): any`

#### `getReference()`

Récupère la documentation de référence pour le composant graphique.

**Signature**

```ts
getReference?: () => {
  title: string;
  link: string;
};
```
