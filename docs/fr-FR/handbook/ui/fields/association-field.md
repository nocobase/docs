# Composant de Champ d'Association

## Introduction

Les composants de champ d'association de NocoBase sont conçus pour aider les utilisateurs à mieux afficher et gérer les données associées. Quel que soit le type de relation, ces composants sont flexibles et universels. Les utilisateurs peuvent sélectionner et configurer ces composants en fonction des besoins spécifiques.

### Sélecteur Déroulant

Tous les champs d'association dont la collection cible n'est pas une collection de fichiers, le composant par défaut en mode édition est un sélecteur déroulant. L'option déroulante affiche la valeur du champ titre, ce qui est adapté pour sélectionner rapidement les données associées en affichant les informations d'un champ clé.

![20240429205659](https://static-docs.nocobase.com/20240429205659.png)

Pour plus d'informations, consultez [Sélecteur Déroulant](/handbook/ui/fields/specific/select)

### Sélecteur d'Enregistrement

Le sélecteur d'enregistrement présente les données sous forme de fenêtre contextuelle. Les utilisateurs peuvent configurer des champs de relation (y compris les champs de relation des relations) dans le sélecteur d'enregistrement, permettant ainsi une sélection plus précise des données associées.

![20240429210824](https://static-docs.nocobase.com/20240429210824.png)

Pour plus d'informations, consultez [Sélecteur d'Enregistrement](/handbook/ui/fields/specific/picker)

### Sélecteur Cascade

Le sélecteur cascade est adapté aux champs de relation où la collection cible est une collection arborescente. Il permet aux utilisateurs de sélectionner les données en fonction de la structure hiérarchique des données de la collection arborescente. Il est applicable à des scénarios tels que province-ville-arrondissement, classification industrielle, attributs de produit, et autres scénarios de sélection en cascade.

![20240429213256](https://static-docs.nocobase.com/20240429213256.png)

Pour plus d'informations, consultez [Sélecteur Cascade](/handbook/ui/fields/specific/cascade-select)

### Sous-Formulaire

Lors de la gestion de données de relation plus complexes, l'utilisation d'un sélecteur déroulant ou d'un sélecteur de données peut être contraignante. Dans ce cas, les utilisateurs doivent fréquemment ouvrir des fenêtres contextuelles. Pour ce scénario, un sous-formulaire peut être utilisé. Les utilisateurs peuvent maintenir directement les champs de relation sur la page ou la fenêtre contextuelle actuelle, sans avoir à ouvrir de nouvelles fenêtres contextuelles, rendant ainsi le processus opérationnel plus fluide. Les relations multi-niveaux sont présentées sous forme de formulaires imbriqués.

![20240429215953](https://static-docs.nocobase.com/20240429215953.png)

Pour plus d'informations, consultez [Sous-Formulaire](/handbook/ui/fields/specific/nester)

### Sous-Formulaire (Fenêtre Contextuelle)

Lorsque le niveau de relation est profond et que de nombreux champs de données sont présents, la disposition du sous-formulaire peut sembler longue, rendant difficile la présentation efficace de la relation principale et secondaire du formulaire. Pour ce scénario, vous pouvez utiliser un sous-formulaire (fenêtre contextuelle). Les utilisateurs peuvent déplacer certains champs de relation non essentiels ou rarement utilisés du formulaire principal vers une fenêtre contextuelle indépendante pour les remplir, rendant le formulaire principal plus concis et clair.

Le Sous-Formulaire (Fenêtre Contextuelle) simplifie non seulement la disposition du formulaire, mais résout également le problème de l'impossibilité de remplir directement les données de champ de relation dans le sous-tableau.

![20240429222237](https://static-docs.nocobase.com/20240429222237.gif)

Pour plus d'informations, consultez [Sous-Formulaire (Fenêtre Contextuelle)](/handbook/ui/fields/specific/popover-nester)

### Sous-Tableau

Le sous-tableau présente des enregistrements de relation un-à-plusieurs ou plusieurs-à-plusieurs sous forme de tableau. Il offre un moyen clair et structuré d'afficher et de gérer les données associées, prenant en charge la création de nouvelles données en masse ou la sélection de données existantes pour l'association.

![20240429222505](https://static-docs.nocobase.com/20240429222505.png)

Pour plus d'informations, consultez [Sous-Tableau](/handbook/ui/fields/specific/sub-table)

### Sous-Détail

Les sous-détails sont les composants correspondants du sous-formulaire en mode lecture, et les données de relation multi-niveaux sont affichées sous forme imbriquée.

![20240822223651](https://static-docs.nocobase.com/20240822223651.png)

Pour plus d'informations, consultez [Sous-Détail](/handbook/ui/fields/specific/sub-detail)

### Gestionnaire de Fichiers

Le gestionnaire de fichiers est un composant de champ de relation spécifiquement conçu pour traiter les collections de fichiers comme des collections cibles de relation.

![20240429222753](https://static-docs.nocobase.com/20240429222753.png)

Pour plus d'informations, consultez [Gestionnaire de Fichiers](/handbook/ui/fields/specific/file-manager)

### Titre

Le composant Titre est un composant de champ de relation utilisé en mode lecture, affichant les informations clés des données associées par la configuration du champ titre.

![20240429223646](https://static-docs.nocobase.com/20240429223646.png)

Pour plus d'informations, consultez [Titre](/handbook/ui/fields/specific/title)

### Étiquette

Le composant Étiquette est un composant de champ de relation utilisé en mode lecture. L'utilisation du composant étiquette dans la présentation des données permet de mieux classifier et identifier les données de relation. Il nécessite la configuration du champ titre et du champ couleur (sélectionné parmi les champs de la table cible).

![20240429225054](https://static-docs.nocobase.com/20240429225054.png)

Pour plus d'informations, consultez [Étiquette](/handbook/ui/fields/specific/tag)
