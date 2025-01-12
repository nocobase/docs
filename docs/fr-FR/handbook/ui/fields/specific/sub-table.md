# Sous-tableau

## Introduction

Les sous-tableaux sont idéaux pour gérer des champs de relations plusieurs-à-plusieurs. Ils permettent la création en masse de données de la table cible avec des associations, ou la sélection de données existantes pour association.

## Instructions d'utilisation

![20240410151306](https://static-docs.nocobase.com/20240410151306.png)

Les différents types de champs dans le sous-tableau affichent des composants de champ distincts. Les champs plus grands (tels que le texte enrichi, JSON, et le texte multi-lignes) sont édités via une fenêtre contextuelle flottante.

![20240410154316](https://static-docs.nocobase.com/20240410154316.png)

Champs de relation dans le sous-tableau :

Commande (un-à-plusieurs) > Produit (un-à-plusieurs) > Inventaire.

![20240410152232](https://static-docs.nocobase.com/20240410152232.png)

Par défaut, les composants de champ de relation sont des sélecteurs déroulants (qui supportent les sélecteurs de données ou les sous-formulaires via des fenêtres pop-up).

![20240410152847](https://static-docs.nocobase.com/20240410152847.png)

Supporte le tri par glisser-déposer.

![20240422215629](https://static-docs.nocobase.com/20240422215629.gif)

## Options de Configuration des Champs

### Autoriser la Sélection de Données Existantes (désactivé par défaut)

Permet d'associer des données provenant d'enregistrements existants.

![20240410160432](https://static-docs.nocobase.com/20240410160432.png)

![20240410160714](https://static-docs.nocobase.com/20240410160714.png)

### Composant de Champ

[Composant de Champ](/handbook/ui/fields/association-field) : Passez à d'autres composants de champs relationnels, tels que les sélecteurs déroulants, les sélecteurs de données, etc.

### Règles de Lien
:::info{title=Astuce}
La version de NocoBase doit être v1.3.17-beta ou supérieure.
:::

![20240906084911_rec_](https://static-docs.nocobase.com/20240906084911_rec_.gif)

Pour plus d'informations, consultez [Règles de Lien](/handbook/ui/blocks/block-settings/linkage-rule)

### Autoriser la dissociation

:::info{title=Astuce}
La version de NocoBase doit être v1.3.34-beta ou supérieure.
:::

![20241021210710](https://static-docs.nocobase.com/20241021210710.png)

![20241021211909](https://static-docs.nocobase.com/20241021211909.png)
