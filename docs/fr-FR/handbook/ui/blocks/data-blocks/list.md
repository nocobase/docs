# Bloc Liste

## Introduction

Le bloc **Liste** permet d’afficher des données sous forme de liste. Il est particulièrement adapté aux scénarios tels que les listes de tâches, les actualités, les fiches produit et autres besoins de présentation de données.

## Ajout d’un bloc

<video width="100%" height="440" controls>
  <source src="https://static-docs.nocobase.com/20240417224417.mp4" type="video/mp4">
</video>

## Options de configuration du bloc

![Options de configuration](https://static-docs.nocobase.com/20240417224539.png)

### Définir la portée des données

Comme illustré ci-dessous : le filtre par défaut sélectionne les commandes avec un statut **« Remboursé »**.

![Portée des données](https://static-docs.nocobase.com/20240417224701.png)

Pour plus de détails, consultez la page [Définir la portée des données](/handbook/ui/blocks/block-settings/data-scope).

### Définir les règles de tri

Exemple ci-dessous : les commandes sont triées par **montant décroissant**.

![Règles de tri](https://static-docs.nocobase.com/20240417225302.png)

Pour plus de détails, consultez la page [Définir les règles de tri](/handbook/ui/blocks/block-settings/sorting-rule).

### Définir la méthode de chargement des données

Utilisé généralement avec un bloc filtre pour ne charger les données qu’après application d’un filtre.

<video width="100%" height="440" controls>
  <source src="https://static-docs.nocobase.com/20240417225539.mp4" type="video/mp4">
</video>

Pour plus de détails, consultez la page [Définir la méthode de chargement](/handbook/ui/blocks/block-settings/loading-mode).

### Définir la hauteur du bloc

Exemple : définir la hauteur du bloc de liste des commandes en mode **Hauteur complète**.

![Hauteur du bloc](https://static-docs.nocobase.com/20240604233102.gif)

Pour plus de détails, consultez la page [Hauteur du bloc](/handbook/ui/blocks/block-settings/block-height).

Autres options :
- [Modifier le titre du bloc](/handbook/ui/blocks/block-settings/block-title)
- [Enregistrer comme modèle de bloc](/handbook/block-template)

## Configuration des champs

### Champs de la table principale

![Champs principaux](https://static-docs.nocobase.com/20240417230027.png)

### Champs de tables liées

![Champs liés](https://static-docs.nocobase.com/20240417230115.png)

Pour plus de détails sur la configuration des champs de liste, consultez la page [Champs détaillés](/handbook/ui/fields/generic/detail-form-item).

## Configuration des actions

### Actions globales

![Actions globales](https://static-docs.nocobase.com/20240421115811.png)

- [Filtrer](/handbook/ui/actions/types/filter)
- [Ajouter](/handbook/ui/actions/types/add-new)
- [Rafraîchir](/handbook/ui/actions/types/refresh)
- [Importer](/handbook/action-import)
- [Exporter](/handbook/action-export)

### Actions par ligne

![Actions par ligne](https://static-docs.nocobase.com/20240418114424.png)

- [Afficher](/handbook/ui/actions/types/view)
- [Modifier](/handbook/ui/actions/types/edit)
- [Supprimer](/handbook/ui/actions/types/delete)
- [Fenêtre contextuelle](/handbook/ui/actions/types/pop-up)
- [Mettre à jour l'enregistrement](/handbook/ui/actions/types/update-record)
- [Requête personnalisée](/handbook/action-custom-request)
