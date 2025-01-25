# Modèle de Chaîne

## Introduction

Le modèle de chaîne est une manière concise d'insérer des données dynamiques dans un texte. Grâce à la syntaxe du modèle, il est facile d'intégrer des valeurs de variables dans une chaîne et de les remplacer lors du rendu.

## Exemple

Voici un exemple de modèle de chaîne :

```text
Bonjour, {{name}} ! Bienvenue sur {{platform}}.
```

Si les variables données sont les suivantes :

```json
{
  "name": "Alice",
  "platform": "NocoBase"
}
```

Le résultat du rendu sera :

```text
Bonjour, Alice ! Bienvenue sur NocoBase.
```

## Syntaxe Courante

### Expression d'Interpolation

- `{{variable}}` : Insère la valeur de la variable dans le modèle. Par exemple, `{{name}}` sera remplacé par `Alice`.

### Expression Conditionnelle

- `{{#if condition}}...{{/if}}` : Si la condition est vraie, le contenu du modèle est rendu. Par exemple :

```text
{{#if isMember}}
  Bienvenue, membre !
{{else}}
  Bienvenue, invité !
{{/if}}
```

### Expression de Boucle

- `{{#each array}}...{{/each}}` : Utilisé pour parcourir un tableau et rendre chaque élément. Par exemple :

```text
{{#each items}}
  - {{this}}
{{/each}}
```

### Opérations Mathématiques

- Vous pouvez effectuer des opérations mathématiques simples dans le modèle, comme l'addition ou la soustraction :

```text
{{add 5 3}}  <!-- Résultat : 8 -->
{{minus 10 2}}  <!-- Résultat : 8 -->
```

### Opérations sur les Chaînes de Caractères

- `{{uppercase "hello"}}` : Transforme une chaîne en majuscules. Résultat : `HELLO`.
- `{{ellipsis "This is a long sentence.", 10}}` : Tronque la chaîne et ajoute des points de suspension. Résultat : `'This is a…'`.

## Autres Fonctions Utilitaires

| Catégorie  | Description                          |
| ---------- | ------------------------------------ |
| [Core]     | Fonctions de base pour les modèles de chaîne |
| [Math]     | Opérations et fonctions mathématiques |
| [String]   | Opérations et gestion des chaînes de caractères |
| [Date]     | Fonctions de formatage des dates    |
| [Object]   | Opérations sur les objets            |
| [Array]    | Opérations et itérations sur les tableaux |
