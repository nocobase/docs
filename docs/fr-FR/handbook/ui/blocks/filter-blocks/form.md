# Bloc de Filtrage de Formulaire

## Introduction

Le bloc de filtrage de formulaire peut être connecté avec un bloc de données. Une fois connecté, il fournit des capacités de filtrage pour le bloc de données, permettant une recherche plus ciblée selon les critères spécifiés.

## Ajouter un Bloc

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240426172722.mp4" type="video/mp4">
</video>

## Paramètres du Bloc

![20240421172115](https://static-docs.nocobase.com/20240421172115.png)

### Connexion au Bloc de Données

Exemple : Le bloc de filtrage de formulaire se connecte au bloc de données de détails pour réaliser une liaison.

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240421170947.mp4" type="video/mp4">
</video>

Pour plus de contenu, consultez [Connexion au Bloc de Données](/handbook/ui/blocks/block-settings/connect-block).

- [Modifier le Titre du Bloc](/handbook/ui/blocks/block-settings/block-title)
- [Règles de Liaison](/handbook/ui/blocks/block-settings/linkage-rule)
- [Enregistrer comme Modèle de Bloc](/handbook/ui/blocks/block-settings/block-template)

## Configuration des Champs

### Champs dans Cette Collection

![20240421171135](https://static-docs.nocobase.com/20240421171135.png)

### Champs dans les Collections Associées

> Dans la version v1.3.14-beta et supérieure, il est possible de configurer des champs de relations "beaucoup-à-beaucoup" et "un-à-beaucoup".

Cela permet d'utiliser les champs des collections associées comme conditions de filtrage.

Exemple : La collection des commandes possède un champ de relation "Client" en relation "beaucoup-à-un", filtrez les commandes par le nom et le numéro de téléphone du client comme conditions de filtrage.

<video width="100%" height="440" controls>
<source src="https://static-docs.nocobase.com/20240421171437.mp4" type="video/mp4">
</video>

### Définir des Valeurs Par Défaut pour les Champs

Comme un bloc de formulaire classique, vous pouvez définir des valeurs par défaut pour les champs normaux et les champs de relation. **Lorsque un champ a une valeur par défaut, une opération de filtrage sera automatiquement déclenchée lors du premier rendu de la page, afin que le bloc de données connecté affiche les données correspondantes.**

## Opérations de Configuration

![Opérations de Filtrage](https://static-docs.nocobase.com/20240421171839.png)

### Bouton Réinitialiser

Par défaut, en cliquant sur le bouton "Réinitialiser", les valeurs par défaut des champs sont conservées. Si vous souhaitez supprimer les valeurs par défaut des champs, vous pouvez ouvrir les options de configuration et activer l'option "Effacer les Valeurs Par Défaut".

![20240716183611](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240716183611.png)
