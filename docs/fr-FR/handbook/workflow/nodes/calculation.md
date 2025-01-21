# Calcul

Bien que le nœud de calcul ne contrôle pas le flux du processus, il est une fonction importante dans le workflow. Le nœud de calcul peut évaluer une expression, et le résultat sera stocké dans le résultat du nœud correspondant pour une utilisation ultérieure par d'autres nœuds. Il s'agit d'un outil de calcul, de traitement et de transformation des données. Dans une certaine mesure, il peut remplacer la fonctionnalité d'appel d'une fonction pour calculer une valeur dans des langages de programmation et l'assigner à une variable.

## Création d'un Nœud

Dans l'interface de configuration du workflow, cliquez sur le bouton plus ("+") dans le flux pour ajouter un nœud "Calcul" :

![Nœud de Calcul - Ajout](https://static-docs.nocobase.com/58a455540d26945251cd143eb4b16579.png)

## Configuration du Nœud

![Nœud de Calcul - Configuration](https://static-docs.nocobase.com/6a155de3f6a883d8cd1881b2d9c33874.png)

### Moteur de Calcul

Le moteur de calcul spécifie la syntaxe prise en charge pour l'expression. Les moteurs de calcul actuellement pris en charge incluent [Math.js](https://mathjs.org/) et [Formula.js](https://formulajs.info/), chacun d'eux ayant une prise en charge intégrée pour un grand nombre de fonctions courantes et de méthodes pour la manipulation des données. L'utilisation spécifique peut être trouvée dans leur documentation officielle.

:::info{title=Note}
Il est important de noter qu'il existe une différence dans l'indexation des tableaux entre les deux. Dans Math.js, l'indexation commence à partir de `1`, tandis que dans Formula.js, elle commence à partir de `0`.
:::

De plus, si une simple concaténation de chaînes est nécessaire, le "Template de chaîne" peut être utilisé directement. Ce moteur remplacera les variables dans l'expression par leurs valeurs correspondantes et retournera ensuite la chaîne concaténée.

### Expression

L'expression est une représentation sous forme de chaîne d'une formule de calcul, composée de variables, constantes, opérateurs et fonctions prises en charge. Les variables provenant du contexte du workflow peuvent être utilisées, telles que les résultats des nœuds précédents du nœud de calcul ou les variables de portée des boucles.

Si l'expression saisie ne respecte pas la syntaxe, une erreur sera affichée dans la configuration du nœud. Si une variable n'existe pas pendant l'exécution ou si son type ne correspond pas, ou si une fonction non définie est utilisée, le nœud de calcul se terminera prématurément avec un statut d'erreur.

## Exemple

### Calcul du Prix Total de la Commande

Typiquement, une commande peut contenir plusieurs articles, chacun avec des prix et des quantités différents. Le prix total de la commande nécessite de calculer la somme des produits des prix et des quantités pour tous les articles. Vous pouvez utiliser un nœud de calcul pour calculer le prix total de la commande après avoir chargé la liste des détails de la commande (un jeu de données à relation plusieurs-à-plusieurs) :

![Nœud de Calcul - Exemple - Configuration du Nœud](https://static-docs.nocobase.com/85966b0116afb49aa966eeaa85e78dae.png)

Où la fonction `SUMPRODUCT` de Formula.js calcule la somme des produits de deux tableaux de même longueur, puis les additionner donne le prix total de la commande.
