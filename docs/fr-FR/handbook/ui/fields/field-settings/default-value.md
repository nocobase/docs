# Valeur par Défaut

## Introduction

Les valeurs par défaut sont les valeurs initiales des champs dans un nouvel état. Vous pouvez définir des valeurs par défaut lors de la configuration des champs dans une table de données, ou spécifier des valeurs par défaut pour les champs dans un nouveau bloc de formulaire. Ces valeurs peuvent être des constantes ou des variables.

## Où les Valeurs par Défaut Peuvent-elles être Configurées ?

### Champs dans une Table de Données

![20240411095933](https://static-docs.nocobase.com/20240411095933.png)

### Champs dans de Nouveaux Formulaires

La plupart des champs dans de nouveaux formulaires permettent de définir des valeurs par défaut.

![20240411100030](https://static-docs.nocobase.com/20240411100030.png)

### Ajout de Sous-formulaires

Que ce soit dans de nouveaux formulaires ou lors de l'édition de formulaires, les sous-données ajoutées auront des valeurs par défaut.

Sous-formulaire "Ajouter nouveau"

![20240411100341](https://static-docs.nocobase.com/20240411100341.png)

Sous-table "Ajouter nouveau"

![20240411100424](https://static-docs.nocobase.com/20240411100424.png)

![20240411100634](https://static-docs.nocobase.com/20240411100634.png)

Lors de l'édition de données existantes, si les données sont vides, elles ne seront pas remplies avec des valeurs par défaut ; seules les nouvelles données ajoutées seront remplies avec des valeurs par défaut et ne seront pas enregistrées.

![20240411100729](https://static-docs.nocobase.com/20240411100729.png)

### Valeurs par Défaut pour les Données Relationnelles

Les valeurs par défaut sont uniquement disponibles pour les types de relation "plusieurs-à-un" et "plusieurs-à-plusieurs" lorsqu'on utilise des composants sélecteurs (Select, RecordPicker).

![20240411101025](https://static-docs.nocobase.com/20240411101025.png)

## Variables des Valeurs par Défaut

### Quelles Variables Sont Disponibles ?

- Variables de date ;
- Utilisateur actuel ;
- Enregistrement actuel (le concept s'applique uniquement aux données existantes) ;
- Formulaire actuel (idéalement, seuls les champs du formulaire sont listés) ;
- Objet actuel (concept pour chaque ligne de données dans un sous-formulaire) ;
- Enregistrements sélectionnés dans le formulaire (actuellement limité à la combinaison "Table Block + Formulaire Ajouter un enregistrement") ;

Pour plus d'informations sur les variables, consultez [Variables](/handbook/ui/variables).

### Variables de Valeurs par Défaut des Champs

Il existe deux types : variables de champs non relationnels et variables de champs relationnels.

#### Variables de Valeurs par Défaut pour les Champs Relationnels

- L'objet variable doit être un enregistrement de collection ;
- Il doit provenir d'une table sur le chemin d'héritage, soit de la table actuelle, soit d'une table parente-enfant ;
- La variable "Enregistrements sélectionnés dans le formulaire" est uniquement disponible pour les champs de relation "plusieurs-à-plusieurs" et "plusieurs-à-un/un-à-plusieurs" ;
- **Pour plusieurs niveaux, aplatir et dédupliquer les données**

```typescript
// Enregistrements sélectionnés dans la table :
[{id:1},{id:2},{id:3},{id:4}]

// Enregistrements sélectionnés dans la table/ un-à-un :
[{un-à-un: {id:2}}, {un-à-un: {id:3}}, {un-à-un: {id:3}}]
// Aplatir et dédupliquer
[{id: 2}, {id: 3}]

// Enregistrements sélectionnés dans la table/ plusieurs-à-plusieurs :
[{plusieurs-à-plusieurs: [{id: 1}, {id:2}]}, {plusieurs-à-plusieurs: {[id:3}, {id:4}]}]
// Aplatir
[{id:1},{id:2},{id:3},{id:4}]
```

#### Variables de Valeurs par Défaut Non Relationnelles

- Le type doit être cohérent ou compatible, comme des chaînes de caractères étant compatibles avec des nombres, et tous les objets qui fournissent une méthode toString ;
- Les champs JSON sont spéciaux et peuvent stocker tout type de données ;

### Hiérarchie des Champs (Champs Optionnels)

![20240411101157](https://static-docs.nocobase.com/20240411101157.png)

- Variables de valeurs par défaut non relationnelles

  - Lors de la sélection de champs à plusieurs niveaux, seules les relations un-à-un sont prises en charge ; les relations plusieurs-à-plusieurs ne sont pas prises en charge ;
  - Les champs JSON sont spéciaux et peuvent avoir moins de restrictions ;

- Variables de valeurs par défaut relationnelles

  - hasOne : prend en charge uniquement les relations un-à-un ;
  - hasMany : prend en charge à la fois les relations un-à-un (converties en interne) et les relations plusieurs-à-plusieurs ;
  - belongsToMany : prend en charge à la fois les relations un-à-un (converties en interne) et les relations plusieurs-à-plusieurs ;
  - belongsTo : généralement pour les relations un-à-un, mais lorsque la relation parente est hasMany, elle prend également en charge les relations plusieurs-à-plusieurs (car hasMany/belongsTo est essentiellement une relation plusieurs-à-plusieurs) ;

## Cas Particuliers

### "Plusieurs-à-plusieurs" équivaut à une combinaison "un-à-plusieurs/plusieurs-à-un"

Modèle

![20240411101558](https://static-docs.nocobase.com/20240411101558.png)

Lors de la définition des variables de valeur par défaut pour une relation plusieurs-à-plusieurs, si la variable contient plusieurs enregistrements, les données sélectionnées auront plusieurs enregistrements, comme indiqué ci-dessous :
Lorsque le tableau de données dans le bloc de tableau et le tableau de données de relation sont identiques.

![20240411103021](https://static-docs.nocobase.com/20240411103021.png)

### Pourquoi les Relations Un-à-un et Un-à-plusieurs N'ont-elles Pas de Valeurs par Défaut ?

Par exemple, dans une relation A.B, si b1 est associé à a1, il ne peut pas être associé à a2. Si b1 est associé à a2, il se dissociera de a1. Dans ce cas, les données ne sont pas partagées, tandis que les valeurs par défaut fonctionnent sur un mécanisme partagé (les deux peuvent être associés), donc les relations un-à-un et un-à-plusieurs ne peuvent pas avoir de valeurs par défaut.

### Pourquoi les Sous-formulaires ou Sous-tableaux avec des Relations Plusieurs-à-un et Plusieurs-à-plusieurs N'ont-ils Pas de Valeurs par Défaut ?

Parce que les sous-formulaires et les sous-tableaux se concentrent sur l'édition directe des données relationnelles (y compris l'ajout ou la suppression), et les valeurs par défaut des relations fonctionnent sur un mécanisme partagé où les deux peuvent être associés mais ne peuvent pas modifier les données de relation. Par conséquent, il n'est pas approprié de fournir des valeurs par défaut dans ce scénario.

De plus, les sous-formulaires ou sous-tableaux possèdent des sous-champs, il serait donc difficile de déterminer si la valeur par défaut s'applique aux lignes ou aux colonnes.

Compte tenu de cela, il est plus approprié de ne pas autoriser la définition de valeurs par défaut pour tout type de relation dans un sous-formulaire ou sous-tableau.
