# Lien

## Introduction

L'opération de lien, qui fonctionne via la navigation par routes, prend en charge le passage de variables. La page cible peut ajuster dynamiquement son contenu en fonction des données fournies, ce qui la rend configurable pour une utilisation au sein des blocs de données.

![20240603150755](https://static-docs.nocobase.com/20240603150755.png)

## Configuration de l'Opération

![20240603150823](https://static-docs.nocobase.com/20240603150823.png)

### Modifier le Lien

![20240603150944](https://static-docs.nocobase.com/20240603150944.png)

![20240603224322](https://static-docs.nocobase.com/20240603224322.png)

### Scénarios d'Utilisation

Exemple : Les tables auteur et article ont une relation un-à-plusieurs. Dans la table auteur, vous pouvez configurer l'opération de lien "Voir les articles". En cliquant sur ce lien, l'ID de l'auteur est passé en paramètre à la table des articles, ce qui permet à la page cible de filtrer les articles en fonction de l'ID de l'auteur spécifié.

![20240603151934](https://static-docs.nocobase.com/20240603151934.png)

### Ouvrir dans une Nouvelle Fenêtre

Lorsque l'option "Ouvrir dans une nouvelle fenêtre" est sélectionnée, le lien s'ouvrira dans une nouvelle fenêtre.

![20240718160541](https://static-docs.nocobase.com/20240718160541.png)

Voici un exemple de configuration complète :

<video width="100%" height="440" controls>

<source src="https://static-docs.nocobase.com/20240603224044.mp4" type="video/mp4">

</video>

- [Bouton de Modification](/handbook/ui/actions/action-settings/edit-button) : Personnalisez le titre, la couleur et l'icône du bouton.
- [Règle de Liaison](/handbook/ui/actions/action-settings/linkage-rule) : Contrôlez dynamiquement l'état du bouton.
