# Bloc Kanban

<PluginInfo name="block-kanban"></PluginInfo>

## Introduction

Le bloc Kanban présente les données sous forme de vue Kanban, permettant une fonctionnalité de glisser-déposer pour mettre à jour le statut des éléments.

## Installation

Il s'agit d'un plugin intégré, donc aucune installation n'est nécessaire.

## Ajouter un Bloc

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240419214551.mp4" type="video/mp4">
</video>

![20240419214751](https://static-docs.nocobase.com/20240419214751.png)

### Champ de Groupement

Utilisé pour organiser les données en groupes spécifiques. Lors de la création ou de la configuration d'un bloc Kanban, vous devez sélectionner un champ à choix unique comme champ de groupement.

### Champ de Tri

Utilisé pour organiser les données à l'intérieur de chaque groupe. Seuls les champs liés au champ de groupement peuvent être sélectionnés pour le tri. Vous pouvez également créer rapidement un champ de tri lors de la configuration du bloc Kanban.

![20240426170628](https://static-docs.nocobase.com/20240426170628.png)

## Gestion des Données Kanban

### Cliquer sur une Carte

Cliquer sur une carte ouvre une fenêtre contextuelle où vous pouvez configurer des blocs de données selon vos besoins, tels que la mise en place d'un formulaire de modification pour modifier l'enregistrement de la carte actuelle.

![20240419220115](https://static-docs.nocobase.com/20240419220115.png)

Vous pouvez également configurer la façon dont la fenêtre contextuelle s'ouvre et sa taille.

![20240419220159](https://static-docs.nocobase.com/20240419220159.png)

### Faire Glisser une Carte

Exemple : Ajustez le statut d'un produit en faisant glisser la carte. Une fois le glissement terminé, les données seront automatiquement enregistrées.

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240419221247.mp4" type="video/mp4">
</video>

## Options de Configuration du Bloc

### Définir la Plage de Données

Exemple : Filtrage par défaut des produits promotionnels.

![20240422095659](https://static-docs.nocobase.com/20240422095659.png)

Pour plus de détails, consultez [Définir la Plage de Données](/handbook/ui/blocks/block-settings/data-scope).

### Définir la Hauteur du Bloc

Exemple : Ajustez la hauteur du bloc Kanban des commandes, avec la barre de défilement apparaissant dans les colonnes.

![20240605220635](https://static-docs.nocobase.com/20240605220635.gif)

Pour plus de détails, consultez [Hauteur du Bloc](/handbook/ui/blocks/block-settings/block-height).

## Configuration des Champs

![20240419215909](https://static-docs.nocobase.com/20240419215909.png)

## Configuration des Actions

![20240419220903](https://static-docs.nocobase.com/20240419220903.png)

- [Filtrer](/handbook/ui/actions/types/filter)
- [Ajouter Nouveau](/handbook/ui/actions/types/add-new)
