# Sélecteur

## Introduction

Le sélecteur offre un moyen simplifié de sélectionner ou d'associer des données au sein de la table cible, que vous travailliez avec des enregistrements existants ou des entrées nouvellement ajoutées. Les options du menu déroulant prennent également en charge la recherche floue pour faciliter la navigation.

![20240409230638](https://static-docs.nocobase.com/20240409230638.png)

## Options de Configuration des Champs

### Création Rapide : Ajouter des Données D'abord, Puis Sélectionner

#### Ajouter via Menu Déroulant

Lorsque de nouvelles données sont ajoutées à la table cible, elles seront automatiquement sélectionnées et liées lors de la soumission du formulaire. Cette méthode est idéale pour des scénarios de données simples, comme l'ajout d'étiquettes.

Par exemple, la table des commandes contient un champ de relation plusieurs-à-un appelé "Tag".

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240410113002.mp4" type="video/mp4">
</video>

#### Ajouter via Popup

Cette option vous permet de configurer un nouveau formulaire dans une fenêtre popup, ce qui la rend adaptée à des scénarios plus complexes, comme les entrées de produits.

Par exemple, la table des commandes comprend un champ de relation plusieurs-à-plusieurs appelé "Produits".

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240410113351.mp4" type="video/mp4">
</video>

### Définir la Plage de Données

Définissez la plage de données qui apparaîtra dans la liste déroulante.

![20240422204957](https://static-docs.nocobase.com/20240422204957.png)

Pour plus d'informations, consultez [Définir la Plage de Données](/handbook/ui/fields/field-settings/data-scope).

### Définir les Règles de Tri

Déterminez l'ordre dans lequel les options du menu déroulant seront affichées.

Exemple : Afficher par ordre décroissant en fonction de la date de production.

![20240422205340](https://static-docs.nocobase.com/20240422205340.png)

### Autoriser l'Ajout/Association Multiple

Limitez l'association des champs de relation plusieurs-à-plusieurs à un seul élément de données.

### Champ Titre

![20240422205632](https://static-docs.nocobase.com/20240422205632.gif)

Pour plus de détails, consultez [Champ Titre](/handbook/ui/fields/field-settings/title-field).

- [Composants de Champ](/handbook/ui/fields/association-field)
