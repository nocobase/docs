# Tutoriel Étendu

> En utilisant l'ajout des graphiques ECharts comme exemple, le code complet est disponible dans le plugin `@nocobase/plugin-sample-add-custom-charts`.

## Création d'un Nouveau Plugin

Suivez les étapes du [Guide de Développement de Plugin](https://docs.nocobase.com/development/your-first-plugin) pour créer un nouveau plugin. Assurez-vous d'inclure les dépendances `echarts`, `echarts-for-react` et `@nocobase/plugin-data-visualization`, et placez ces dépendances externes dans la section `devDependencies` du fichier `package.json`.

```bash
yarn pm create @nocobase/plugin-sample-add-custom-charts
npx lerna add echarts --scope=@nocobase/plugin-sample-add-custom-charts --dev
npx lerna add echarts-for-react --scope=@nocobase/plugin-sample-add-custom-charts --dev
```

```typescript
// package.json

{
  "name": "@nocobase/plugin-sample-add-custom-charts",
  "version": "0.14.0-alpha.7",
  "main": "dist/server/index.js",
  "devDependencies": {
    "echarts": "^5.4.3",
    "echarts-for-react": "^3.0.2"
  },
  "peerDependencies": {
    "@nocobase/client": "0.x",
    "@nocobase/server": "0.x",
    "@nocobase/test": "0.x",
    "@nocobase/plugin-data-visualization": "0.x"
  }
}
```

## Composant React ECharts

Contrairement à G2Plot, où chaque type de graphique est un composant distinct, ECharts utilise un seul composant capable de rendre différents graphiques en fonction des paramètres passés. Étant donné que le composant fourni par `echarts-for-react` est un `PureComponent`, nous devons l'envelopper dans un `FunctionComponent`.

```typescript
// client/echarts/react-echarts.tsx

import React, { useEffect } from 'react';
import ReactEChartsComponent, { EChartsInstance, EChartsReactProps } from 'echarts-for-react';

export const ReactECharts = (props: EChartsReactProps['option']) => {
  const echartRef = React.useRef<EChartsInstance>();
  useEffect(() => {
    echartRef.current?.resize();
  });
  return <ReactEChartsComponent option={props} ref={(e) => (echartRef.current = e)} />;
};
```

Le composant `echarts-for-react` n'exécute pas l'opération `resize` lors de son premier rendu. Comme le plugin de visualisation de NocoBase peut nécessiter de déterminer si le composant doit être affiché en fonction de la configuration actuelle lors de la configuration des graphiques, cela pourrait entraîner une mauvaise représentation du composant. Par conséquent, nous exécutons manuellement `resize` à chaque fois pour assurer un rendu correct.

## Extension de la Classe `Chart`

> Avant de continuer, veuillez consulter le [Guide de Développement](../dev/index.md) pour vous familiariser avec les API pertinentes.

### Étape 1

Étant donné qu'ECharts est une bibliothèque de graphiques complète, nous pourrions avoir besoin d'ajouter plusieurs types de graphiques simultanément. Pour faciliter cela, nous commençons par étendre la classe de base `Chart` pour créer une classe `ECharts` qui implémente certaines méthodes de base.

```typescript
// client/echarts/echarts.ts

import { Chart } from '@nocobase/plugin-data-visualization/client';

export class ECharts extends Chart {
  constructor({
    name,
    title,
    series,
    config,
  }: {
    name: string;
    title: string;
    series: any;
    config?: ChartProps['config'];
  }) {
    super({
      name,
      title,
      component: ReactECharts,
      config: ['xField', 'yField', 'seriesField', ...(config || [])],
    });
    this.series = series;
  }
}
```

ECharts configure principalement différents types de graphiques via le paramètre `series`. Par conséquent, lors de la construction de la classe de base, nous ajoutons un paramètre `series` et passons le composant `ReactECharts` défini précédemment. Le paramètre `config` est prédéfini avec des valeurs par défaut pour `xField`, `yField` et `seriesField`, ce qui permet à notre configuration par défaut de produire des résultats similaires à ceux montrés dans l'exemple.

![](https://static-docs.nocobase.com/9a1ff5ff7c9f409978292f0d771b4358.png)

### Étape 2

Puisque la plupart des types de graphiques couramment utilisés nécessitent des configurations pour l'axe des x, l'axe des y et les champs de classification, nous commençons par implémenter une interface `init` générale pour initialiser la configuration par défaut du graphique. Si un graphique nécessite des éléments de configuration supplémentaires lors de l'initialisation, cette méthode peut être remplacée dans les classes dérivées. Dans l'implémentation, nous pouvons exploiter la méthode `infer` de la classe `Chart` pour déterminer les configurations de champs par défaut en fonction des mesures et des dimensions fournies.

```typescript
init: ChartType['init'] = (fields, { measures, dimensions }) => {
  const { xField, yField, seriesField } = this.infer(fields, {
    measures,
    dimensions,
  });
  return {
    general: {
      xField: xField?.value,
      yField: yField?.value,
      seriesField: seriesField?.value,
    },
  };
};
```

### Étape 3

Ensuite, nous implémentons la méthode `getProps`, qui récupère principalement les configurations liées aux graphiques et les transforme en propriétés correspondantes pour le composant ECharts. Cette méthode peut également définir des propriétés par défaut que nous préférons ne pas exposer dans les options de configuration. L'implémentation suivante sert de guide général.

```typescript
getProps({ data, general, advanced, fieldProps }: RenderProps) {
    const { xField, yField, seriesField } = general;
    const xLabel = fieldProps[xField]?.label;
    const yLabel = fieldProps[yField]?.label;
    let seriesName = [yLabel];
    if (seriesField) {
      seriesName = Array.from(new Set(data.map((row: any) => row[seriesField]))).map((value) => value || 'null');
    }
    return deepmerge(
      {
        legend: {
          data: seriesName,
        },
        tooltip: {
          data: seriesName,
        },
        dataset: [
          {
            dimensions: [xField, ...(seriesField ? seriesName : [yField])],
            source: data,
          },
          {
            transform: [
              {
                type: 'data-visualization:transform',
                config: { fieldProps },
              },
              {
                type: 'data-visualization:toSeries',
                config: { xField, yField, seriesField },
              },
            ],
          },
        ],
        series: seriesName.map((name) => ({
          name,
          datasetIndex: 1,
          ...this.series,
        })),
        xAxis: {
          name: xLabel,
          type: 'category',
        },
        yAxis: {
          name: yLabel,
        },
        animation: false,
      },
      advanced,
    );
  }
```

Cette logique consiste principalement à traiter les données brutes, les configurations des graphiques, les métadonnées des champs et les paramètres de transformation des données pour les convertir dans le format requis pour le rendu du composant. Dans ECharts, le traitement des données peut être géré en enregistrant des fonctions `transform`, comme expliqué dans la documentation d'ECharts.

### Étape 4

Enfin, nous implémentons une méthode pour récupérer la documentation de référence via `getReference`. ECharts regroupe tous les paramètres de graphique sur une seule page, nous définissons donc cette méthode de manière simple.

```typescript
getReference() {
    return {
      title: 'ECharts',
      link: 'https://echarts.apache.org/en/option.html',
    };
  }
```

## Définir les Graphiques

Avec la classe `ECharts` établie, définir des graphiques devient un processus simple. Pour la plupart des graphiques 2D courants, la logique générale est déjà encapsulée dans la classe `ECharts`, ce qui élimine le besoin d'extensions supplémentaires.

```typescript
new ECharts({
  name: 'line',
  title: 'Graphique en ligne',
  series: { type: 'line' },
});

new ECharts({
  name: 'column',
  title: 'Graphique en colonnes',
  series: { type: 'bar' },
});

new ECharts({
  name: 'area',
  title: 'Graphique en aires',
  series: { type: 'line', areaStyle: {} },
});
```

Vous pouvez également étendre certaines configurations de visualisation si nécessaire.

```typescript
new ECharts({
  name: 'line',
  title: 'Graphique en ligne',
  series: { type: 'line' },
  config: [
    {
      property: 'booleanField',
      name: 'smooth',
      title: 'isSmooth',
    },
  ],
});
```

Pour certains graphiques, les méthodes générales peuvent ne pas suffire, nécessitant une personnalisation supplémentaire.

## Graphique à Barres

Le graphique à barres est l'un des types de graphiques les plus courants pour la visualisation de données. Voici comment vous pouvez l'implémenter dans le plugin de visualisation de données de NocoBase en utilisant la bibliothèque ECharts. 

### Code de la classe `Bar`

```typescript
export class Bar extends ECharts {
  constructor() {
    super({
      name: 'bar',
      title: 'Graphique à barres',
      series: { type: 'bar' },
    });
    this.config = [
      {
        property: 'yField',
        title: 'xField',
      },
      {
        property: 'xField',
        title: 'yField',
      },
      'seriesField',
    ];
  }

  getProps({ data, general, advanced, fieldProps }: RenderProps) {
    const props = super.getProps({ data, general, advanced, fieldProps });
    const xLabel = fieldProps[general.xField]?.label;
    const yLabel = fieldProps[general.yField]?.label;
   
    props.xAxis = {
      ...props.xAxis,
      type: 'value',
      name: yLabel,
    };
    props.yAxis = {
      ...props.yAxis,
      type: 'category',
      name: xLabel,
    };
    return props;
  }
}

new Bar();
```

### Explication

- **Constructor (`constructor`)** : 
  Le constructeur configure le graphique en barres en utilisant la classe `ECharts`. Ici, nous définissons le type de graphique comme `bar` (barres). La configuration de base pour les axes est définie dans le tableau `config` pour indiquer que les champs `xField` et `yField` doivent être échangés.

- **Méthode `getProps`** :
  Cette méthode ajuste les propriétés du graphique. Elle modifie les axes en fonction des champs `xField` et `yField`. Dans ce cas, l'axe des x sera de type `value` (pour les valeurs numériques) et l'axe des y sera de type `category` (pour les catégories de données). Le code ajuste également les étiquettes des axes en fonction des métadonnées des champs (`fieldProps`).

---

## Graphique en Secteurs (Pie Chart)

Le graphique en secteurs est souvent utilisé pour afficher des proportions relatives. Voici un exemple de classe `Pie` qui étend la classe `ECharts`.

### Code de la classe `Pie`

```typescript
export class Pie extends ECharts {
  constructor() {
    super({
      name: 'pie',
      title: 'Graphique en Secteurs',
      series: { type: 'pie' },
    });
    this.config = [
      {
        property: 'field',
        name: 'angleField',
        title: 'angleField',
        required: true,
      },
      {
        property: 'field',
        name: 'colorField',
        title: 'colorField',
        required: true,
      },
    ];
  }

  init: ChartType['init'] = (fields, { measures, dimensions }) => {
    const { xField, yField } = this.infer(fields, { measures, dimensions });
    return {
      general: {
        colorField: xField?.value,
        angleField: yField?.value,
      },
    };
  };

  getProps({ data, general, advanced, fieldProps }: RenderProps) {
    return deepmerge(
      {
        legend: {},
        tooltip: {},
        dataset: [
          {
            dimensions: [general.colorField, general.angleField],
            source: data,
          },
          {
            transform: {
              type: 'data-visualization:transform',
              config: { fieldProps },
            },
          },
        ],
        series: {
          name: fieldProps[general.angleField]?.label,
          datasetIndex: 1,
          ...this.series,
        },
      },
      advanced,
    );
  }
}

new Pie();
```

### Explication

- **Constructor (`constructor`)** : 
  Le graphique en secteurs est configuré en définissant `type: 'pie'` dans la propriété `series`. La configuration spécifie que les champs `angleField` et `colorField` sont obligatoires pour le graphique en secteurs.

- **Méthode `init`** :
  Cette méthode initialise le graphique en extrayant les champs nécessaires (par exemple, `xField` pour la couleur et `yField` pour l'angle) à partir des dimensions et des mesures. Elle retourne une configuration initiale pour le graphique.

- **Méthode `getProps`** :
  Elle construit les propriétés nécessaires pour ECharts en fusionnant les configurations et en appliquant des transformations aux données (par exemple, en créant les séries et les légendes pour le graphique en secteurs).

---

## Ajouter des Graphiques à votre Plugin

Après avoir créé vos graphiques, vous devez les ajouter à votre application pour qu'ils soient utilisés. Cela se fait dans la méthode `beforeLoad` d'un plugin client.

### Code d'ajout des graphiques

```typescript
// client/index.ts
import DataVisualizationPlugin from '@nocobase/plugin-data-visualization/client';

export class PluginSampleAddCustomChartClient extends Plugin {
  async afterAdd() {
    // Cette méthode peut être utilisée pour effectuer des actions après l'ajout du plugin
  }

  async beforeLoad() {
    const plugin = this.app.pm.get(DataVisualizationPlugin);
    plugin.charts.addGroup('echarts', {
      title: 'ECharts',
      charts: [
        new ECharts(),
        new Bar(),   // Ajout du graphique à barres
        new Pie(),   // Ajout du graphique en secteurs
        // Vous pouvez ajouter d'autres graphiques ici
      ],
    });
  }

  // Vous pouvez obtenir et modifier l'instance de l'application ici
  async load() {}
}
```

### Explication

- Dans la méthode `beforeLoad`, nous récupérons le plugin de visualisation de données (`DataVisualizationPlugin`).
- Nous ajoutons un groupe de graphiques ECharts avec le titre `'ECharts'`, et nous y insérons nos graphiques définis (par exemple, `ECharts`, `Bar`, `Pie`).
- Cela permet de rendre ces graphiques disponibles pour une utilisation dans l'interface utilisateur de l'application.
