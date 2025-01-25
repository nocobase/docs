# Bloc

Un bloc sert de conteneur de contenu, conçu pour être placé dans une page, une fenêtre modale ou un tiroir. Ces blocs peuvent être facilement réorganisés par une fonctionnalité de glisser-déposer, permettant une personnalisation flexible de la mise en page.

## Ajout de Blocs

Les blocs peuvent être intégrés de manière transparente dans une page, une fenêtre modale ou un tiroir, selon l'application souhaitée.

### Blocs dans les Pages

Dans les pages, vous pouvez choisir parmi divers types de blocs, y compris les Blocs de Données, les Blocs de Filtrage, et d'autres Blocs, chacun ayant des objectifs distincts.

![](https://static-docs.nocobase.com/dad0a394d33dd26f31c3202a76bb0153.png)

### Blocs dans les Modales (Dialogues ou Tiroirs)

Les modales, comprenant des dialogues et des tiroirs, supportent également l'intégration de blocs. Bien que similaires aux pages, les blocs dans les modales sont généralement utilisés pour des opérations liées à un seul enregistrement, comme l'ajout, la modification ou la visualisation de données. Les types de blocs disponibles incluent les Blocs de Données Actuelles, les Blocs de Relations, et d'autres Blocs.

#### Tiroirs

![](https://static-docs.nocobase.com/e18726fb0b52ddab89b9b1a44788f361.png)

#### Dialogues

![](https://static-docs.nocobase.com/4763fc5fc008bdf3915f84a7e433c0f8.png)

## Concepteur de Blocs

Chaque bloc possède trois icônes dans le coin supérieur droit, offrant un accès facile aux outils essentiels :

1. Mise en page Glisser-Déposer
2. Ajout Rapide de Bloc
3. Configuration des Paramètres du Bloc

![](https://static-docs.nocobase.com/b488f3013532a246df59b89c0688a58f.png)

Pour les blocs simples, toutes les options de configuration sont centralisées sous "Configuration des Paramètres du Bloc", comme dans les blocs Markdown.

![](https://static-docs.nocobase.com/f37e277863068b2661f66d4020af806a.png)

Les blocs plus complexes, notamment ceux traitant des données, offrent des options supplémentaires telles que "Configurer le Champ" et "Configurer l'Action", offrant ainsi une plus grande flexibilité.

![](https://static-docs.nocobase.com/71b550da637d23145a5f62d48ee8521b.png)

De plus, vous pouvez explorer des possibilités de hiérarchisation avancées, comme le montre le Bloc de Graphique.

![](https://static-docs.nocobase.com/07588190b3f41ae3060e71d8b76b4447.png)

## Mise en Page des Blocs

Pour personnaliser la mise en page, il vous suffit de glisser et déposer les blocs dans l'arrangement de votre choix.

![](https://static-docs.nocobase.com/f6692295ac0917f3babce9a60ce80879.gif)

## Modèles de Blocs

Vous pouvez enregistrer tout bloc de type données comme modèle, ce qui permet de le dupliquer rapidement ou de le référencer dans des projets futurs. Par exemple, un formulaire utilisé à la fois pour ajouter et modifier des données peut être enregistré comme modèle, ce qui simplifie votre flux de travail en le réutilisant dans différents contextes.

### Comment Ajouter et Utiliser des Modèles

1. Enregistrez un bloc de données comme modèle de bloc (note : seuls les blocs de type données disposent de cette fonctionnalité).

![](https://static-docs.nocobase.com/b7718cea8784587d53524ade3c5b0a82.png)

2. Lors de l'ajout d'un bloc, sélectionnez l'option de duplication ou de référence pour le modèle.

![](https://static-docs.nocobase.com/135df7344e0f3080199e4bb1071c2fa6.png)

### Différence entre Dupliquer et Référencer

Dupliquer un modèle crée un nouveau bloc basé sur le modèle, sans lien avec le modèle d'origine — toute modification du bloc n'affectera pas le modèle. En revanche, référencer lie directement au modèle, ce qui signifie que toute modification du bloc modifiera également le modèle, et toutes les instances où le modèle est référencé seront mises à jour en conséquence.

## Types de Blocs

NocoBase catégorise les blocs en quatre types principaux :

- **Blocs de Données :** Utilisés pour afficher les données de la collection au sein du bloc.
- **Blocs de Filtrage :** Ceux-ci peuvent être ajoutés aux pages et sont spécifiquement conçus pour filtrer les données dans les Blocs de Données.
- **Blocs de Relations :** Ajoutés dans les modales, ils sont utilisés pour effectuer des opérations CRUD sur des données liées à l'enregistrement actuel.
- **Autres Blocs :** Ceux-ci incluent des blocs autonomes comme les blocs Markdown, les blocs de journal d'audit, les blocs de tâches de workflow, etc.

### Blocs de Données

### Blocs de Filtrage

### Blocs de Relations

### Autres Blocs

## Interactions avec les Filtres
