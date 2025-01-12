# Page

Les pages de NocoBase peuvent servir de conteneurs pour des blocs. Elles sont comme un canevas où vous pouvez placer librement une variété de blocs.

## Structure de la Page

Après avoir créé une page via le [menu](/handbook/ui/menus), vous pouvez voir qu'une page vide se compose des deux parties suivantes :

1. En-tête
   1. Titre de la page
   2. Onglets
2. Conteneur de blocs

![2024-01-20_08-23-10](https://static-docs.nocobase.com/2024-01-20_08-23-10.jpg)

## Paramètres de la Page

En survolant l'icône de configuration en haut à droite de la page, vous pouvez voir les options de configuration de la page :

![2024-01-20_08-24-27](https://static-docs.nocobase.com/2024-01-20_08-24-27.jpg)

Les éléments configurables incluent :

- **Activer l'en-tête de la page** : Contrôle l'affichage de l'en-tête ;
- **Afficher le titre de la page** : Affiche ou non le titre de la page dans l'en-tête ;
- **Modifier le titre de la page** : Le titre de la page par défaut est le titre de l'élément du menu, mais il peut être personnalisé ;
- **Activer les onglets** : Par défaut désactivé, activer cette option permet d'ajouter plusieurs onglets.

### Activer l'En-tête

Typiquement, nous devons activer la zone d'en-tête pour afficher le titre de la page et les onglets. Cependant, il y a des situations où nous ne voulons pas l'activer, par exemple lors de la création d'une page de tableau de bord où un menu de niveau supérieur peut efficacement refléter le contenu de la page. Dans ce cas, nous pouvons désactiver l'en-tête et afficher uniquement les blocs à l'intérieur de la page.

![20240120084618](https://static-docs.nocobase.com/20240120084618.png)

### Titre de la Page

Le titre de la page par défaut est le nom de l'élément du menu. En cliquant sur "Modifier le titre de la page", vous pouvez le modifier. Comme avec l'en-tête, il arrive parfois que nous n'ayons pas besoin d'afficher le titre de la page et que nous voulions uniquement montrer les onglets. Dans ce cas, vous pouvez désactiver le titre.

![2024-01-20_08-28-43](https://static-docs.nocobase.com/2024-01-20_08-28-43.jpg)

### Activer les Onglets

Lorsque le contenu d'une page est trop important ou lorsqu'il est préférable de diviser la page en plusieurs parties indépendantes, vous pouvez activer les onglets. Chaque onglet est un conteneur de blocs indépendant. Comme illustré ci-dessous, nous avons ajouté 3 onglets à la page des commandes pour afficher toutes les commandes, les commandes complétées et les commandes remboursées. En survolant le titre d'un onglet, vous pouvez voir les boutons de tri et de configuration dans le coin supérieur droit.

![2024-01-20_08-47-15](https://static-docs.nocobase.com/2024-01-20_08-47-15.jpg)

## Ajouter des Blocs

Cliquez sur "Ajouter un bloc" pour ajouter un nombre illimité de blocs à la page (voir l'introduction des [Blocs](./blocks/index.md)).

![2024-01-20_08-48-36](https://static-docs.nocobase.com/2024-01-20_08-48-36.jpg)

Après avoir ajouté plusieurs blocs, vous pouvez utiliser le bouton de déplacement en haut à droite de chaque bloc pour les faire glisser et les réorganiser librement, ajustant la disposition pour obtenir l'effet le plus adapté.

![page-block](https://static-docs.nocobase.com/page-block.gif)
