# Bloc

Un **bloc** est une vue utilisée pour **afficher et manipuler des données**.  
Dans NocoBase, les pages, les pop-ups et les tiroirs sont considérés comme des **conteneurs de blocs**. Ces conteneurs agissent comme des toiles sur lesquelles on peut placer différents types de blocs.

Grâce à l’architecture de NocoBase qui sépare **les données de la vue**, les blocs permettent de porter les données sur une page tout en les organisant et en les gérant selon leur type.

## Structure d’un bloc

Un bloc complet se compose de trois parties :

1. **Zone de contenu** : le corps principal du bloc  
2. **Zone d’actions** : pour placer divers boutons d’action permettant d’interagir avec les données  
3. **Zone de configuration** : bouton d’accès à la configuration du bloc  

![Structure du bloc](https://static-docs.nocobase.com/07ea73c9abcc16846dd5cd0c960d7cb0.jpg)

## Types de blocs

![Ajout de bloc](https://static-docs.nocobase.com/c105b36b1f61420f2082d8bc5153f3f0.jpg)

NocoBase intègre actuellement une dizaine de types de blocs, et d’autres peuvent être ajoutés via des plugins à l’avenir.

- **Blocs de données** : conçus pour structurer et manipuler des données.
  - **Tableau** : affiche plusieurs enregistrements sous forme tabulaire. Peut afficher une ou plusieurs tables liées entre elles.
  - **Formulaire** : permet de saisir ou modifier des données à l’aide de champs de saisie. Peut concerner une table ou plusieurs tables liées.
  - **Détail** : affiche une fiche individuelle. Peut montrer une ligne d’une table ou plusieurs lignes de plusieurs tables liées.
  - **Calendrier** : affiche plusieurs données organisées selon des dates, utile pour des données temporelles.
  - **Kanban** : affiche les données sous forme de colonnes pour la gestion de flux (type tâches ou production).
- **Blocs de graphiques** : conçus pour la visualisation statistique. Prend en charge : histogrammes, barres, lignes, camemberts, zones, etc.
- **Autres blocs** : pour des usages spécifiques.
  - **Markdown** : contenu texte au format Markdown.
  - **Historique** : affiche toutes les modifications d’un enregistrement (création, édition, suppression).

## Ajouter un bloc

Passez en mode **Configuration d’interface**, puis cliquez sur le bouton **Add block** dans une page ou un pop-up. Le processus d’ajout se fait en 4 étapes :

1. **Choisir le type de bloc** : tableau, formulaire, détail, calendrier, kanban, markdown
2. **Choisir la collection** : liste de toutes les collections disponibles
3. **Choisir le mode de création** : bloc vide ou à partir d’un modèle
4. **Choisir un modèle** : si l’option précédente utilise un modèle

![Ajout de bloc - étapes](https://static-docs.nocobase.com/4a4dad014fddada53f2d49f5dba681fb.jpg)

## Configurer un bloc

La configuration d’un bloc se fait en trois étapes principales :

- Configurer le **contenu** du bloc  
- Configurer les **actions** disponibles  
- Configurer les **propriétés** du bloc  

### Configurer le contenu du bloc

Prenons l’exemple d’un **bloc tableau**. Le contenu correspond aux colonnes visibles dans le tableau.  
Cliquez sur **Configure columns** pour définir les colonnes à afficher :

![Configurer les colonnes](https://static-docs.nocobase.com/4644fe7e4f6a93e58d63219a1ef19633.gif)

### Configurer les actions du bloc

Toujours dans un bloc tableau, vous pouvez activer des actions comme : filtrer, ajouter, supprimer, afficher, modifier, actions personnalisées.  
Cliquez sur **Configure actions** pour les configurer individuellement :

![Configurer les actions](https://static-docs.nocobase.com/4644fe7e4f6a93e58d63219a1ef19633.gif)

### Configurer les propriétés du bloc

Passez la souris dans le coin supérieur droit du bloc pour accéder aux options de configuration.  
Par exemple, pour un bloc tableau, vous pouvez ajuster :

- Titre du bloc
- Tri par glisser-déposer
- Définir la portée des données
- Définir les règles de tri par défaut
- Nombre d’enregistrements par page

## Réorganiser la disposition

Une page peut contenir un seul bloc ou plusieurs blocs en combinaison.  
Vous pouvez **réorganiser les blocs par glisser-déposer** pour ajuster leur position ou leur largeur.

![Disposition des blocs](https://static-docs.nocobase.com/afa28c9ec8958c0581ec70f6d40891b6.gif)

## Modèles de blocs

Vous pouvez enregistrer un bloc comme **modèle**, ce qui permet de le réutiliser facilement plus tard.

Par exemple, si un formulaire sert à la fois à **ajouter** et à **modifier** une donnée, vous pouvez l’enregistrer comme modèle pour l’utiliser dans les deux cas sans recréer sa configuration.

![Modèle de bloc](https://static-docs.nocobase.com/d024cfc5dfd96bfc3ed48cd5c9963cde.jpg)
