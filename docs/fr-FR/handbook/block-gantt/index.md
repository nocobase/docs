# Bloc Gantt

<PluginInfo name="block-gantt"></PluginInfo>

## Introduction

Le bloc du diagramme de Gantt affiche les données sous la forme d'une ligne du temps, ce qui le rend idéal pour la gestion de projets, la planification d'événements, les plannings d'ingénierie et la planification des tâches.

## Installation

Il s'agit d'un plugin intégré, aucune installation n'est requise.

## Ajouter un Bloc

![](https://static-docs.nocobase.com/f064f8fadf52947c990f5dad97736f98.png)

![](https://static-docs.nocobase.com/858112f44bc543973b6e5b03856a6360.png)

- **Champ de titre** : Affiche les informations directement sur les barres du diagramme de Gantt
- **Échelle de temps** : Définit l'échelle de temps, le niveau par défaut étant les jours
- **Champ de date de début** : Définit la date de début de chaque tâche (obligatoire)
- **Champ de date de fin** : Définit la date de fin de chaque tâche (obligatoire)
- **Champ de progression** : Indique la progression d'une tâche (champ de pourcentage facultatif)

## Instructions d'utilisation

![](https://static-docs.nocobase.com/fff6fe1e1fe0a88d20f80b3bb7233608.gif)

- Survolez une tâche pour voir une carte flottante affichant la durée de la tâche et la progression.
- Faites glisser la tâche pour ajuster les dates de début et de fin.
- Faites glisser la barre de progression pour ajuster l'avancement de la tâche.

## Options de configuration du bloc

![20240419211301](https://static-docs.nocobase.com/20240419211301.png)

### Définir la plage de données

![20240419211033](https://static-docs.nocobase.com/20240419211033.png)

Pour plus de détails, consultez [Définir la plage de données](/handbook/ui/blocks/block-settings/data-scope).

- [Enregistrer en tant que modèle de bloc](/handbook/ui/blocks/block-settings/block-template)
- [Définir le mode de chargement des données](/handbook/ui/blocks/block-settings/loading-mode)

## Configuration des actions

### Actions globales

![20240419213653](https://static-docs.nocobase.com/20240419213653.png)

- [Filtrer](/handbook/ui/actions/types/filter)
- [Ajouter un nouvel élément](/handbook/ui/actions/types/add-new)
- [Supprimer](/handbook/ui/actions/types/delete)
- [Actualiser](/handbook/ui/actions/types/refresh)
- [Importer](/handbook/action-import)
- [Exporter](/handbook/action-export)
- [Ajouter un enregistrement](/handbook/action-add-record)
- [Mise à jour en masse](/handbook/action-bulk-update)
- [Modifier en masse](/handbook/action-bulk-edit)

### Actions sur les lignes

![20240419213823](https://static-docs.nocobase.com/20240419213823.png)

- [Voir](/handbook/ui/actions/types/view)
- [Modifier](/handbook/ui/actions/types/edit)
- [Dupliquer](/handbook/action-duplicate)
- [Supprimer](/handbook/ui/actions/types/delete)
- [Pop-Up](/handbook/ui/actions/types/pop-up)
- [Mettre à jour l'enregistrement](/handbook/ui/actions/types/update-record)
- [Requête personnalisée](/handbook/action-custom-request)
- [Déclencher un flux de travail](/handbook/workflow/manual/triggers/custom-action)
