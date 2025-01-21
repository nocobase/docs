# FAQ

## Comment utiliser la configuration JSON ?

Référez-vous à la documentation ou utilisez une démo pour comprendre les propriétés prises en charge par les différents composants via le lien de référence du composant graphique. La configuration se fait à l'aide de paires clé-valeur en JSON.

<img src="https://static-docs.nocobase.com/202404212046877.png"/><br />

<img src="https://static-docs.nocobase.com/202404212047075.png"/>

### Exemple : Changer l'ordre des colonnes du tableau

Le composant de tableau utilisé est le composant de tableau d'Antd. Ouvrez le lien de référence <a href="https://ant.design/components/table/" target="_blank">Table</a>. La section API correspond à toutes les propriétés configurables prises en charge par le composant.

<img src="https://static-docs.nocobase.com/202404212052108.png"/>

Pour ajuster l'ordre des colonnes du tableau, modifiez la configuration `columns`. Exemple :

```ts
{
  "columns": [
    { "key": "fieldName1", "dataIndex": "fieldName1", "title": "fieldTitle1" },
    { "key": "fieldName2", "dataIndex": "fieldName2", "title": "fieldTitle2" }
  ]
}
```

## La configuration JSON peut-elle prendre en charge l'utilisation de fonctions ?

Les expressions JavaScript peuvent être enveloppées dans `{{}}`. Exemple :

```json
{
  "label": {
    "type": "inner",
    "content": "{{ ({ percent }) => `${(percent * 100).toFixed(0)}%` }}"
  }
}
```

## Quel est l'usage principal des champs personnalisés dans les blocs de filtres de graphiques ?

Lorsqu'il y a plusieurs graphiques issus de différentes tables de données dans un bloc graphique et qu'un même champ de filtre est nécessaire pour filtrer ces graphiques, [les champs personnalisés](./user/filter.md#custom-fields) peuvent être utilisés. Par exemple, vous pourriez vouloir filtrer les données sur une période de temps spécifique.
