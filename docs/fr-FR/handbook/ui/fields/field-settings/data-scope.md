# Définir la Portée des Données

## Introduction

La portée des données pour les champs de relation est similaire à la configuration de la portée des données pour les blocs, vous permettant de définir des critères de filtrage par défaut pour les données relationnelles.

## Instructions

![20240422153711](https://static-docs.nocobase.com/20240422153711.png)

### Valeur Statique

Exemple : Seuls les produits actuellement en vente peuvent être sélectionnés comme éléments associés.

![20240422155953](https://static-docs.nocobase.com/20240422155953.png)

### Valeur de Variable

Exemple : Seuls les produits ayant une date de production antérieure au mois dernier peuvent être sélectionnés comme éléments associés.

![20240422163640](https://static-docs.nocobase.com/20240422163640.png)

Pour plus d'informations sur les variables, consultez [Variables](/handbook/ui/variables).

### Lien de Champ de Relation

Les champs de relation peuvent être liés en définissant la portée des données.

Exemple : Dans le formulaire de commande, il y a des champs de relation plusieurs-à-plusieurs "Produits" et un champ de relation plusieurs-à-un "Clients". Le tableau des produits possède un champ de relation plusieurs-à-plusieurs "Clients". Dans le bloc du formulaire de commande, les produits sélectionnables sont ceux associés au client sélectionné dans le formulaire actuel.

![20240422154145](https://static-docs.nocobase.com/20240422154145.png)

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240422155351.mp4" type="video/mp4">
</video>
