# Bloc Détails

## Introduction

Le bloc de détails est utilisé pour afficher en détail les valeurs de chaque champ de chaque donnée. Il prend en charge une disposition flexible des champs et inclut diverses opérations sur les données.

## Ajouter un Bloc

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240417122622.mp4" type="video/mp4">
</video>

## Options de Configuration du Bloc

![20240511114328](https://static-docs.nocobase.com/20240511114328.png)

### Définir la Plage de Données

Exemple : Afficher uniquement les commandes expédiées.

![20240417122910](https://static-docs.nocobase.com/20240417122910.png)

Pour plus d'informations, consultez [Définir la Plage de Données](/handbook/ui/blocks/block-settings/data-scope).

### Définir la Règle de Tri

![20240417123300](https://static-docs.nocobase.com/20240417123300.png)

Pour plus d'informations, consultez [Règle de Tri](/handbook/ui/blocks/block-settings/sorting-rule).

- [Définir le Mode de Chargement des Données](/handbook/ui/blocks/block-settings/loading-mode)
- [Enregistrer en tant que Modèle de Bloc](/handbook/block-template)

### Règles de Liaison

Les règles de liaison dans le bloc de détails permettent de définir dynamiquement l'affichage ou la dissimulation des champs.

Exemple : Masquer la date d'expédition si la date de réception est antérieure à celle de l'expédition.

![20240511115156](https://static-docs.nocobase.com/20240511115156.png)

Pour plus d'informations, consultez [Règles de Liaison des Champs](/handbook/ui/blocks/block-settings/field-linkage-rule).

### Définir la Hauteur du Bloc

Exemple : Définir la hauteur du bloc de détails de la commande sur « Hauteur totale ».

![20240604232307](https://static-docs.nocobase.com/20240604232307.gif)

Pour plus d'informations, consultez [Hauteur du Bloc](/handbook/ui/blocks/block-settings/block-height).

## Configurer les Champs

### Champs de la Table Courante

![20240417213735](https://static-docs.nocobase.com/20240417213735.png)

### Champs de la Table Relationnelle

![20240417214006](https://static-docs.nocobase.com/20240417214006.png)

Pour plus d'informations sur la configuration des champs de détail, consultez [Champs de Détail](/handbook/ui/fields/generic/detail-form-item).

## Configurer les Actions

![20240417214433](https://static-docs.nocobase.com/20240417214433.png)

- [Modifier](/handbook/ui/actions/types/edit)
- [Supprimer](/handbook/ui/actions/types/delete)
- [Fenêtre Pop-up](/handbook/ui/actions/types/pop-up)
- [Mettre à Jour l'Enregistrement](/handbook/ui/actions/types/update-record)
- [Requête Personnalisée](/handbook/action-custom-request)
- [Déclencher un Flux de Travail](/handbook/workflow/manual/triggers/custom-action)
