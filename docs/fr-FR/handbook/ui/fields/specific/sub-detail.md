# Détail des Sous-Formulaires

## Introduction

Les sous-détails servent de composants dédiés aux sous-formulaires en mode lecture. Contrairement aux composants de type label et titre, les sous-détails permettent d'afficher des données plus étendues de la table actuelle et d'activer la configuration des données des tables liées. Cela permet de présenter les données relationnelles multi-niveaux de manière claire dans un format imbriqué.

## Instructions

### Sous-détails pour Champs de Relations Plusieurs-à-Plusieurs

![20240822225058](https://static-docs.nocobase.com/20240822225058.png)

Cette fonctionnalité prend en charge l'affichage imbriqué des champs de relation multi-niveaux, tels que Commandes/Produits/Inventaire ou Commandes/Produits/Fournisseurs.

![20240822225231](https://static-docs.nocobase.com/20240822225231.png)

### Sous-détails pour Champs de Relations Un-à-Un

![20240822230215](https://static-docs.nocobase.com/20240822230215.png)

## Options de Configuration des Champs

#### Définir les Règles de Tri

Vous pouvez ajuster l'ordre d'affichage des données relationnelles plusieurs-à-plusieurs.

![20240822230359](https://static-docs.nocobase.com/20240822230359.png)

![20240822230422](https://static-docs.nocobase.com/20240822230422.png)

### Composant de Champ

[Composant de Champ](/handbook/ui/fields/association-field) : Passez à d'autres composants de champs relationnels, tels que les sélecteurs déroulants, les sélecteurs de données, etc.

### Règles de Lien
:::info{title=Astuce}
La version de NocoBase doit être v1.3.17-beta ou supérieure.
:::

![20240906090603_rec_](https://static-docs.nocobase.com/20240906090603_rec_.gif)

Pour plus d'informations, consultez [Règles de Lien](/handbook/ui/blocks/block-settings/linkage-rule).
