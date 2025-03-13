# Bloc Table

## Introduction

Le bloc Table est l'un des blocs de données principaux intégrés dans NocoBase, permettant d'afficher et de gérer des données structurées sous forme de tableau. Il propose des options de configuration flexibles pour personnaliser les colonnes du tableau, la largeur des colonnes, les règles de tri, la portée des données, et comprend diverses actions intégrées telles que filtrer, ajouter, dupliquer, éditer, supprimer, etc.

## Ajouter des Blocs

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240415215027.mp4" type="video/mp4">
</video>

## Paramètres du Bloc

![20240415215319](https://static-docs.nocobase.com/20240415215319.png)

### Portée des Données

Exemple : Filtre par défaut pour les factures avec le statut "Expédié".

![20240415215404](https://static-docs.nocobase.com/20240415215404.png)

Pour plus d'informations, consultez [Définir la Portée des Données](/handbook/ui/blocks/block-settings/data-scope).

### Définir les Règles de Tri

Exemple : Affichage des factures dans l'ordre inverse de la date d'expédition.

![20240415215509](https://static-docs.nocobase.com/20240415215509.png)

Pour plus d'informations, consultez [Définir les Règles de Tri](/handbook/ui/blocks/block-settings/sorting-rule).

### Connexion des Blocs de Données

Exemple : Connectez le bloc de la table des commandes avec le bloc des détails de commande pour activer la liaison de filtrage.

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240415221426.mp4" type="video/mp4">
</video>

Pour plus d'informations, consultez [Connecter les Blocs de Données](/handbook/ui/blocks/block-settings/connect-block).

- [Modifier le Titre du Bloc](/handbook/ui/blocks/block-settings/block-title)
- [Définir la Méthode de Chargement des Données](/handbook/ui/blocks/block-settings/loading-mode)
- [Enregistrer comme Modèle de Bloc](/handbook/block-template)

## Configurer les Champs

### Champs de la Collection Actuelle

![20240415223714](https://static-docs.nocobase.com/20240415223714.png)

### Champs des Collections Associées

![20240415223746](https://static-docs.nocobase.com/20240415223746.png)

### Afficher les Champs de Table Hérités (Champs de Table Parente)

Exemple : La table des commandes de location hérite de la table des commandes.

![20240415224242](https://static-docs.nocobase.com/20240415224242.png)

Les options de configuration pour les colonnes de table peuvent être trouvées dans [Colonnes de Table](/handbook/ui/fields/generic/table-column).

## Configurer les Actions

### Actions Globales

![20240415225525](https://static-docs.nocobase.com/20240415225525.png)

- [Filtrer](/handbook/ui/actions/types/filter)
- [Ajouter](/handbook/ui/actions/types/add-new)
- [Supprimer](/handbook/ui/actions/types/delete)
- [Actualiser](/handbook/ui/actions/types/refresh)
- [Importer](/handbook/action-import)
- [Exporter](/handbook/action-export)
- [Ajouter un enregistrement](/handbook/action-add-record)
- [Mise à jour en masse](/handbook/action-bulk-update)
- [Édition en masse](/handbook/action-bulk-edit)

### Actions sur les Lignes

![20240415225657](https://static-docs.nocobase.com/20240415225657.png)

- [Voir](/handbook/ui/actions/types/view)
- [Éditer](/handbook/ui/actions/types/edit)
- [Dupliquer](/handbook/action-duplicate)
- [Supprimer](/handbook/ui/actions/types/delete)
- [Pop-up](/handbook/ui/actions/types/pop-up)
- [Mettre à jour l'enregistrement](/handbook/ui/actions/types/update-record)
- [Demande personnalisée](/handbook/action-custom-request)
