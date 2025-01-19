# Hauteur du Bloc

## Introduction

Les paramètres de hauteur des blocs dans NocoBase couvrent trois scénarios : hauteur par défaut, hauteur spécifiée et hauteur totale. Cette fonctionnalité est prise en charge par la plupart des blocs, à l'exception des blocs de diagramme de Gantt. Pour les blocs de diagrammes, la hauteur est contrôlée par des paramètres spécifiques.

![20240602194552](https://static-docs.nocobase.com/20240602194552.png)

![20240602194609](https://static-docs.nocobase.com/20240602194609.png)

### Hauteur Par Défaut

Chaque type de bloc gère la hauteur par défaut de manière unique. Par exemple, les blocs de table et de formulaire ajustent dynamiquement leur hauteur pour s'adapter au contenu, tandis que les blocs Kanban ont une hauteur par défaut de 70 % de la hauteur de la fenêtre.

### Hauteur Spécifiée

Les utilisateurs peuvent définir la hauteur totale du cadre extérieur d'un bloc. Les composants internes du bloc calculent et distribuent automatiquement l'espace disponible.

![20240604172359](https://static-docs.nocobase.com/20240604172359.gif)

### Hauteur Totale

Le mode de hauteur totale, semblable à la hauteur spécifiée, détermine et attribue automatiquement la hauteur du bloc en fonction de la zone visible de la fenêtre. Cette approche élimine les barres de défilement au niveau de la page, les confinant à l'intérieur des blocs individuels.

La gestion de la hauteur varie légèrement selon les types de blocs :

- **Tables** : Le défilement se produit dans le `tbody` ;
- **Formulaires/Détails** : La zone de grille défile, à l'exception de la section des opérations ;
- **Listes/Cards en Grille** : La zone de grille défile, à l'exception des opérations et de la pagination ;
- **Kanban** : Chaque colonne défile indépendamment ;
- **Cartes et Calendriers** : S'adaptent à la hauteur totale sans barres de défilement ;
- **Iframes/Markdown** : La hauteur du cadre extérieur du bloc est fixe, avec un défilement à l'intérieur du bloc.

#### Exemple de Table en Hauteur Totale

![20240604172439](https://static-docs.nocobase.com/20240604172439.gif)

#### Exemple de Formulaire en Hauteur Totale

![20240604222711](https://static-docs.nocobase.com/20240604222711.gif)
