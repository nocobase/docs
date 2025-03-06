# Bloc Calendrier

<PluginInfo name="calendar"></PluginInfo>

## Introduction

Le bloc calendrier offre une manière simplifiée de visualiser et de gérer les événements et les données liées aux dates sous forme de calendrier, ce qui le rend idéal pour programmer des réunions, planifier des événements et organiser votre temps de manière efficace.

## Installation

Ce plugin est préinstallé, il n'y a donc pas de configuration supplémentaire requise.

## Ajouter des blocs

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240419201640.mp4" type="video/mp4">
</video>

1. Champ Titre : Affiche les informations clés directement sur les barres du calendrier.
2. Heure de début : Indique quand la tâche commence.
3. Heure de fin : Indique quand la tâche se termine.

En cliquant sur une barre de tâche, vous mettez en surbrillance la sélection et ouvrez une fenêtre pop-up détaillée.

![20240408171928](https://static-docs.nocobase.com/20240408171928.png)

## Configurer les champs

![20240419203321](https://static-docs.nocobase.com/20240419203321.png)

### Afficher le calendrier lunaire

![20240419203603](https://static-docs.nocobase.com/20240419203603.png)

- [Modifier le titre du bloc](/handbook/ui/blocks/block-settings/block-title)
- [Enregistrer en tant que modèle de bloc](/handbook/ui/blocks/block-settings/block-template)

### Définir la portée des données

![20240419203751](https://static-docs.nocobase.com/20240419203751.png)

Pour plus d'informations, consultez [Définir la portée des données](/handbook/ui/blocks/block-settings/data-scope).

### Définir la hauteur du bloc

Exemple : Ajustez la hauteur du bloc calendrier des commandes. Aucune barre de défilement n'apparaîtra à l'intérieur du bloc calendrier.

![20240605215742](https://static-docs.nocobase.com/20240605215742.gif)

Pour plus d'informations, consultez [Hauteur du bloc](/handbook/ui/blocks/block-settings/block-height)

### Champ couleur de fond

:::info{title=Astuce}
La version de NocoBase doit être v1.4.0-beta ou supérieure.
:::

Cette option peut être utilisée pour configurer la couleur de fond des événements du calendrier. Voici comment l'utiliser :

1. La table de données du calendrier doit avoir un champ de type **Sélection unique** ou **Groupe de boutons radio**, et ce champ doit être configuré avec des couleurs.
2. Ensuite, retournez dans l'interface de configuration du bloc calendrier et sélectionnez le champ que vous venez de configurer avec des couleurs dans le **Champ couleur de fond**.
3. Enfin, vous pouvez essayer de sélectionner une couleur pour un événement du calendrier et cliquer sur soumettre. Vous verrez que la couleur a pris effet.

![20240914192017_rec_](https://static-docs.nocobase.com/20240914192017_rec_.gif)

## Configurer les actions

![20240419203424](https://static-docs.nocobase.com/20240419203424.png)

### Aujourd'hui

Le bouton "Aujourd'hui" dans le bloc calendrier offre une navigation rapide, permettant aux utilisateurs de revenir instantanément à la date actuelle après avoir exploré d'autres dates.

![20240419203514](https://static-docs.nocobase.com/20240419203514.png)

### Changer de vue

La vue par défaut est définie sur "Mois".

![20240419203349](https://static-docs.nocobase.com/20240419203349.png)
