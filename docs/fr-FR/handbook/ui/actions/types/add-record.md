# Ajouter un Enregistrement

## Introduction

La fonctionnalité "Ajouter un Enregistrement" permet aux utilisateurs d'insérer facilement des enregistrements dans n'importe quelle table de données dans le cadre d'une opération.

![20240423202949](https://static-docs.nocobase.com/20240423202949.png)

Sélectionnez la table de données cible et ajoutez un bloc de formulaire.

![20240423203010](https://static-docs.nocobase.com/20240423203010.png)

## Utilisation des Tables pour Sélectionner des Enregistrements

Cette fonctionnalité est actuellement conçue pour définir des valeurs par défaut pour les champs dans l'opération "Ajouter un Enregistrement" au sein des blocs de table.

Par exemple, la table Commande et la table Produit ont une relation plusieurs-à-plusieurs. Dans le bloc de la table Produit, vous pouvez configurer l'opération "Ajouter un Enregistrement" pour saisir des données dans la table Commande.

![20240426101803](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240426101803.png)

Dans ce cas, définissez la valeur par défaut du champ de relation "Produit" dans la table Commande sur "Enregistrements sélectionnés de la table".

![20240426101823](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240426101823.png)

![20240426101922](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240426101922.png)

Voici l'opération complète :

<video width="100%" height="440" controls>
<source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240426102142.mp4" type="video/mp4">
</video>

## Éléments de Configuration de l'Opération

![20240423203050](https://static-docs.nocobase.com/20240423203050.png)

- [Bouton d'Édition](/handbook/ui/actions/action-settings/edit-button)
- [Mode d'Ouverture](/handbook/ui/actions/action-settings/open-mode)
- [Taille de la Fenêtre Contextuelle](/handbook/ui/actions/action-settings/popup-size)
