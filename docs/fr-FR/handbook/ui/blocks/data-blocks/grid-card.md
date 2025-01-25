# Cartes en Grille

## Introduction

Le bloc Cartes en Grille offre un moyen concis et visuellement attrayant d'afficher les informations résumées des enregistrements de données. Conçu pour être flexible, il vous permet de configurer le nombre de colonnes en fonction de la taille de l'écran, garantissant une expérience utilisateur fluide sur tous les appareils.

## Ajouter des Blocs

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240418120045.mp4" type="video/mp4">
</video>

## Paramètres du Bloc

![20240419220708](https://static-docs.nocobase.com/20240419220708.png)

### Portée des Données

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240419173617.mp4" type="video/mp4">
</video>

Pour un guide détaillé, consultez [Définir la Portée des Données](/handbook/ui/blocks/block-settings/data-scope).

### Configurer le Nombre de Colonnes par Ligne

![20240408160228](https://static-docs.nocobase.com/20240408160228.png)

Vous pouvez ajuster le nombre de colonnes pour s'adapter aux différentes tailles d'écran, assurant ainsi un affichage optimal.

![20240408160844](https://static-docs.nocobase.com/20240408160844.png)

### Configurer la Méthode de Chargement des Données

Exemple : Connexion de blocs de données et configuration de la méthode de chargement des données appropriée.

La table des Commandes et la table des Produits ont une relation de plusieurs à plusieurs. Le bloc de la table des Commandes et le bloc Cartes en Grille des Produits peuvent être liés pour permettre le filtrage des données. Dans cette configuration, la méthode de chargement des données du bloc en grille est configurée pour charger les "Données après Filtrage".

<video width="100%" height="440" controls>
<source src="https://static-docs.nocobase.com/20240419175643.mp4" type="video/mp4">
</video>

### Définir la Hauteur du Bloc

Exemple : Configurez le bloc Cartes en Grille des Commandes pour s'afficher en mode "Hauteur Complète" pour une vue plus expansive.

![20240604232619](https://static-docs.nocobase.com/20240604232619.gif)

Pour plus de détails, consultez [Hauteur du Bloc](/handbook/ui/blocks/block-settings/block-height).

- [Définir les Règles de Tri](/handbook/ui/blocks/block-settings/sorting-rule)
- [Enregistrer comme Modèle de Bloc](/handbook/ui/blocks/block-settings/block-template)

## Configurer les Champs

### Champs de la Table Actuelle

![20240418123118](https://static-docs.nocobase.com/20240418123118.png)

### Champs des Tables Associées

![20240418123147](https://static-docs.nocobase.com/20240418123147.png)

Pour un guide complet des options de configuration des champs pour le bloc Cartes en Grille, consultez [Champs de Détail](/handbook/ui/fields/generic/detail-form-item).

## Configurer les Actions

### Actions Globales

![20240418122905](https://static-docs.nocobase.com/20240418122905.png)

- [Filtrer](/handbook/ui/actions/types/filter)
- [Ajouter](/handbook/ui/actions/types/add-new)
- [Supprimer](/handbook/ui/actions/types/delete)
- [Actualiser](/handbook/ui/actions/types/refresh)
- [Importer](/handbook/action-import)
- [Exporter](/handbook/action-export)

### Actions sur les Lignes

![20240419222251](https://static-docs.nocobase.com/20240419222251.png)

- [Éditer](/handbook/ui/actions/types/edit)
- [Supprimer](/handbook/ui/actions/types/delete)
- [Pop-up](/handbook/ui/actions/types/pop-up)
- [Mettre à jour l'enregistrement](/handbook/ui/actions/types/update-record)
- [Demande Personnalisée](/handbook/action-custom-request)
- [Déclencher un Flux de Travail](/handbook/workflow/manual/triggers/custom-action)
