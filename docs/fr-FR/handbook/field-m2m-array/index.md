# Plusieurs à Plusieurs (Array)

<PluginInfo name="field-m2m-array"></PluginInfo>

## Introduction

Cette fonctionnalité vous permet d'utiliser des champs de type tableau dans une collection de données pour stocker plusieurs clés uniques provenant de la table cible, créant ainsi une relation plusieurs-à-plusieurs entre les deux tables. Par exemple, considérons les entités Articles et Tags. Un article peut être lié à plusieurs tags, la table des articles stockant les identifiants des enregistrements correspondants dans la table des tags dans un champ de tableau.

:::warning{title=Note}

- Il est recommandé, lorsque cela est possible, d'utiliser une collection de jonction pour établir une relation [plusieurs-à-plusieurs](../data-modeling/collection-fields/associations/m2m/index.md) standard au lieu de se baser sur cette méthode.
- Actuellement, seul PostgreSQL prend en charge le filtrage des données de la collection source en utilisant les champs de la table cible pour les relations plusieurs-à-plusieurs établies avec des champs de type tableau. Par exemple, dans le scénario ci-dessus, vous pouvez filtrer les articles en fonction d'autres champs dans la table des tags, tels que le titre.

:::

### Configuration du Champ

![Configuration du champ plusieurs-à-plusieurs (array)](https://static-docs.nocobase.com/202407051108180.png)

## Description des Paramètres

### Collection Source

La collection source, où réside le champ actuel.

### Collection Cible

La collection cible avec laquelle la relation est établie.

### Clé Étrangère

Le champ de type tableau dans la collection source qui stocke la clé cible de la table cible.

Les relations correspondantes pour les types de champs de tableau sont les suivantes :

| NocoBase | PostgreSQL | MySQL  | SQLite |
| -------- | ---------- | ------ | ------ |
| `set`    | `array`    | `JSON` | `JSON` |

### Clé Cible

Le champ dans la collection cible qui correspond aux valeurs stockées dans le champ de tableau de la collection source. Ce champ doit être unique.
