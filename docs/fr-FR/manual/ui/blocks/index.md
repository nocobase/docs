# Bloc

Un **bloc** est un conteneur de contenu pouvant être placé dans une **page**, une **fenêtre modale (dialogue)** ou un **tiroir (drawer)**.  
Les blocs peuvent être librement agencés par **glisser-déposer**.

## Ajouter un bloc

Les blocs peuvent être placés dans une page, une fenêtre modale ou un tiroir.

### Blocs dans une page

Les types de blocs disponibles dans une **page** sont :

- Blocs de données  
- Blocs de filtrage  
- Autres blocs  

![](https://static-docs.nocobase.com/dad0a394d33dd26f31c3202a76bb0153.png)

### Blocs dans une fenêtre modale ou un tiroir

Les fenêtres contextuelles peuvent être des **modales** ou des **tiroirs**. Comme pour les pages, on peut y ajouter des blocs.  
Cependant, dans ces cas-là, les blocs sont généralement utilisés pour des actions sur **un seul enregistrement** (ajout, édition, visualisation).

Les types de blocs disponibles sont :

- Blocs de données actuelles  
- Blocs de relation  
- Autres blocs  

#### Tiroir

![](https://static-docs.nocobase.com/e18726fb0b52ddab89b9b1a44788f361.png)

#### Fenêtre modale

![](https://static-docs.nocobase.com/4763fc5fc008bdf3915f84a7e433c0f8.png)

## Designer de blocs

En haut à droite de chaque bloc se trouvent **trois icônes**, de gauche à droite :

1. **Glisser-déposer** pour modifier la disposition  
2. **Ajout rapide** d’un bloc  
3. **Configuration des paramètres du bloc**

![](https://static-docs.nocobase.com/b488f3013532a246df59b89c0688a58f.png)

Pour les blocs simples (ex : Markdown), toutes les options sont regroupées dans **la configuration des paramètres** :

![](https://static-docs.nocobase.com/f37e277863068b2661f66d4020af806a.png)

Pour les blocs de données complexes, il existe des sections supplémentaires comme :

- **Configurer les champs**
- **Configurer les actions**

![](https://static-docs.nocobase.com/71b550da637d23145a5f62d48ee8521b.png)

Et certains blocs, comme les **blocs graphiques**, offrent encore plus de possibilités de personnalisation imbriquée :

![](https://static-docs.nocobase.com/07588190b3f41ae3060e71d8b76b4447.png)

## Disposition des blocs

Plusieurs blocs peuvent être déplacés et redimensionnés par glisser-déposer pour organiser la mise en page.

![](https://static-docs.nocobase.com/f6692295ac0917f3babce9a60ce80879.gif)

## Modèles de blocs

Vous pouvez enregistrer un bloc de type données comme **modèle**, afin de le réutiliser facilement.

Par exemple, un formulaire utilisé à la fois pour **créer** et **modifier** des enregistrements peut être enregistré comme modèle, puis réutilisé dans différentes interfaces (ajout, édition).

### Comment ajouter et utiliser un modèle ?

Voir [Modèles de blocs](/handbook/block-template)

## Types de blocs

NocoBase classe par défaut les blocs en **quatre catégories** :

- **Blocs de données** : affichent les données d’une collection
- **Blocs de filtrage** : uniquement dans les pages, permettent de filtrer les blocs de données
- **Blocs de relation** : uniquement dans les fenêtres modales, pour gérer les données liées à l’enregistrement en cours
- **Autres blocs** : blocs autonomes comme Markdown, journaux d’audit, blocs de tâches de workflow, etc.

### Bloc de données

Affiche les données d’une collection, par exemple sous forme de tableau, formulaire, vue détaillée, calendrier ou kanban.

### Bloc de filtrage

Permet de filtrer les données affichées dans d'autres blocs. Utilisable uniquement dans les **pages**.

### Bloc de relation

Utilisé dans les **modales ou tiroirs** pour gérer les données liées à un enregistrement (affichage, ajout, édition, suppression).

### Autres blocs

Blocs utilitaires pour afficher du contenu spécifique comme du texte Markdown, des journaux d’activité ou des tâches à réaliser dans un flux de travail.

## Filtrage lié (Filtrage en cascade)

Fonctionnalité permettant de lier plusieurs filtres entre eux, afin que les options disponibles dans un filtre dépendent de la sélection effectuée dans un autre.
