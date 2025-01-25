# Utilisation des Variables

## Conception de Base

Tout comme les variables dans les langages de programmation, les **variables** sont des outils importants pour connecter et organiser les processus dans un flux de travail.

Lorsque chaque nœud est exécuté après le déclenchement du flux de travail, des variables peuvent être utilisées dans certaines options de configuration, et la source de ces variables provient des résultats de données des nœuds en amont, incluant les catégories suivantes :

- **Données du Contexte de Déclenchement** : Dans des cas tels que les déclencheurs d'action et les déclencheurs de collection, un objet de donnée unique peut être utilisé par tous les nœuds. L'implémentation spécifique peut différer en fonction du déclencheur.
- **Données des Nœuds en Amont** : Lors de l'exécution de n'importe quel nœud, les données de résultat des nœuds précédemment exécutés sont utilisées.
- **Variables de Portée** : Lorsqu'un nœud se trouve dans des structures de branchement spéciales, des variables spécifiques à la branche correspondante peuvent être utilisées, comme dans les structures de boucle, où des objets de données pour chaque cycle de la boucle peuvent être utilisés.
- **Variables Système** : Certains paramètres système intégrés, tels que l'heure actuelle, etc.

Nous avons utilisé la fonction des variables plusieurs fois dans [Démarrage Rapide](../quick-start.md), par exemple, dans le nœud de calcul, nous pouvons utiliser des variables pour référencer les données de contexte du déclenchement pour le calcul :

![Fonction et utilisation des variables dans le nœud de calcul](https://static-docs.nocobase.com/837e4851a4c70a1932542caadef3431b.png)

Dans le nœud de mise à jour, utilisez les données du contexte du déclenchement comme condition de filtrage des variables, et faites référence au résultat du nœud de calcul comme valeur de champ pour mettre à jour l'enregistrement :

![Variable dans le nœud de mise à jour des données](https://static-docs.nocobase.com/2e147c93643e7ebc709b9b7ab4f3af8c.png)

## Structure des Données

Les variables sont internes sous forme de structure JSON, qui peut généralement être utilisée pour accéder à des parties spécifiques des données en fonction de la syntaxe JSONPath. Parce que de nombreuses variables sont basées sur les collections de données de NocoBase, les données associées seront composées sous forme de structure arborescente d'objets. Par exemple, lors de la sélection de la valeur d'un champ de données associées qui a été interrogé. De plus, lorsqu'une donnée associée est sous forme de structure "un-à-plusieurs", la variable peut être un tableau.

Sélectionner une variable nécessite souvent de choisir la dernière valeur du niveau, généralement un type de données simple comme un nombre, une chaîne, etc. Cependant, lorsqu'il y a un tableau dans la hiérarchie des variables, les attributs du niveau final seront également mappés en tant que tableau. Ce n'est que lorsque le nœud correspondant prend en charge les tableaux que les données du tableau peuvent être traitées correctement. Par exemple, dans le nœud de calcul, certains moteurs de calcul disposent de fonctions spécialement conçues pour les tableaux, et dans le nœud de boucle, l'objet de boucle peut directement sélectionner un tableau.

### Exemple de Query Node :

Lorsque vous utilisez un nœud de requête pour interroger plusieurs lignes de données, le résultat du nœud sera un tableau contenant plusieurs lignes de données homogènes :

```json
[
  {
    "id": 1,
    "title": "Titre 1"
  },
  {
    "id": 2,
    "title": "Titre 2"
  }
]
```

Cependant, lorsqu'il est utilisé comme variable dans les nœuds suivants, si la variable sélectionnée est sous la forme de `Node Result / Query Node / Title`, elle sera mappée sur un tableau plat des valeurs de champs correspondantes :

```json
["Titre 1", "Titre 2"]
```

Si c'est un tableau multidimensionnel (comme un champ d'association "plusieurs-à-plusieurs"), il sera aplati sous forme de tableau unidimensionnel après avoir sélectionné le champ correspondant.

## Variables Système Intégrées

### Heure Système

Récupérer l'heure système au moment de l'exécution en fonction du nœud où il est exécuté. Le fuseau horaire est celui défini par le serveur.

### Paramètres de Plage de Dates

Ce paramètre peut être utilisé pour configurer des conditions de filtre sur des champs de date dans les nœuds de requête, de mise à jour et de suppression. Il ne prend en charge que les comparaisons "Est", et les points de début et de fin de la plage de dates sont basés sur les paramètres de fuseau horaire du serveur.

![Paramètres de Plage de Dates](https://static-docs.nocobase.com/20240817175354.png)
