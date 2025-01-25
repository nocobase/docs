# Aperçu

## Types d'interface des champs

NocoBase classe les champs en plusieurs catégories selon l'interface utilisée pour interagir avec les données. Voici un aperçu des différents types d'interface disponibles pour les champs dans NocoBase :

![Types d'interface des champs](https://static-docs.nocobase.com/20240512110352.png)

## Types de données des champs

Chaque interface de champ a un type de données par défaut. Par exemple, pour les champs ayant l'interface de type Nombre, le type de données par défaut est `double`, mais il peut également être configuré en `float`, `decimal`, etc. Les types de données actuellement supportés sont les suivants :

![Types de données des champs](https://static-docs.nocobase.com/20240512103733.png)

## Mappage des types de champs

Le processus d'ajout de nouveaux champs à la base de données principale est le suivant :

1. Sélectionner le type d'interface du champ.
2. Configurer le type de données optionnel pour l'interface du champ actuel.

![Mappage des types de champs](https://static-docs.nocobase.com/20240512172416.png)

Le processus de mappage des champs provenant de sources de données externes est le suivant :

1. Le type de données (type de champ) et le type d'interface (interface de champ) sont mappés automatiquement en fonction du type de champ de la base de données externe.
2. Modifiez ces paramètres pour les adapter à un type de données et une interface plus appropriés si nécessaire.

![Mappage des champs externes](https://static-docs.nocobase.com/20240512172759.png)
