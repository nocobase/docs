# Modèle Handlebars

## Introduction

Handlebars est un moteur de templating populaire qui permet d'intégrer dynamiquement des données dans du HTML à l'aide d'une syntaxe de modèle simple.

## Utilisation

### Syntaxe de Base du Modèle

Dans Handlebars, la syntaxe de base comprend :

- Expression d'interpolation `{{variable}}` pour afficher des données.
- Expression conditionnelle `{{#if condition}}...{{/if}}` pour les conditions logiques.
- Boucle `{{#each array}}...{{/each}}` pour itérer sur des tableaux.

Par exemple, avec les données suivantes :

```javascript
const context = {
  title: "Exemple de modèle Handlebars",
  items: ["Pomme", "Banane", "Orange"]
};
```

Avec le modèle suivant :

```handlebars
<h1>{{title}}</h1>
<ul>
  {{#each items}}
    <li>{{this}}</li>
  {{/each}}
</ul>
```

Le HTML généré sera :

```html
<h1>Exemple de modèle Handlebars</h1>
<ul>
  <li>Pomme</li>
  <li>Banane</li>
  <li>Orange</li>
</ul>
```

Pour plus de contenu, consultez
- [Core](/api/handlebars-helpers/core)

### Opérations de Comparaison

Vous pouvez utiliser des opérateurs de comparaison dans les instructions conditionnelles. Les fonctions de comparaison supportées incluent `eq` (égal), `ne` (différent), `gt` (supérieur à), `lt` (inférieur à), etc.

```handlebars
{{#if (eq 10 10)}}
  <p>Égal</p>
{{else}}
  <p>Non égal</p>
{{/if}}
```

Les opérateurs logiques comme `and`, `or`, `not` peuvent également être utilisés :

```handlebars
{{#if (and true true)}}
  <p>Les deux sont vrais !</p>
{{/if}}
```

```handlebars
{{#if (or false true)}}
  <p>Un des deux est vrai !</p>
{{/if}}
```

Pour plus de contenu, consultez
- [Comparison](/api/handlebars-helpers/comparison)

### Opérations Mathématiques

Vous pouvez effectuer des opérations mathématiques simples dans les modèles :

```handlebars
{{add 4 5}}  <!-- Résultat : 9 -->
{{minus 10 3}} <!-- Résultat : 7 -->
```

Pour plus de contenu, consultez
- [Math](/api/handlebars-helpers/math)

### Gestion des Chaînes de Caractères

```handlebars
{{uppercase "bonjour le monde"}}
<!-- Résultat :  BONJOUR LE MONDE -->
{{ellipsis "foo bar baz", 7}}
<!-- Résultat :  'foo bar…' -->
```

Pour plus de contenu, consultez
- [String](/api/handlebars-helpers/string)

### Gestion des Dates

```handlebars
<p>{{dateFormat "2024-09-25" "YYYY"}}</p>  <!-- Résultat : 2024-09-25 -->
```

Pour plus de contenu, consultez
- [Date](/api/handlebars-helpers/date)

### Opérations sur les Tableaux et Objets

```handlebars
<p>Premier élément : {{first items}}</p>  <!-- Résultat : Premier élément : Pomme -->
<p>Dernier élément : {{last items}}</p>  <!-- Résultat : Dernier élément : Orange -->
```

Pour plus de contenu, consultez
- [Array](/api/handlebars-helpers/array)
- [Object](/api/handlebars-helpers/object)

### Autres Helpers

| Catégorie                                      | Description                        |
| ---------------------------------------------- | ---------------------------------- |
| [Core](/api/handlebars-helpers/core)           | Méthodes intégrées de Handlebars   |
| [Array](/api/handlebars-helpers/array)         | Méthodes pour gérer les tableaux   |
| [Comparison](/api/handlebars-helpers/comparison) | Opérateurs et méthodes de comparaison |
| [Date](/api/handlebars-helpers/date)           | Méthodes pour la gestion des dates |
| [HTML](/api/handlebars-helpers/html)           | Méthodes pour gérer les documents HTML |
| [I18n](/api/handlebars-helpers/i18n)           | Support pour l'internationalisation |
| [Math](/api/handlebars-helpers/math)           | Fonctions mathématiques            |
| [Number](/api/handlebars-helpers/number)       | Formatage et gestion des nombres   |
| [Object](/api/handlebars-helpers/object)       | Méthodes pour gérer les objets     |
| [Path](/api/handlebars-helpers/path)           | Méthodes pour les chemins et systèmes de fichiers |
| [Regex](/api/handlebars-helpers/regex)         | Méthodes pour les expressions régulières |
| [String](/api/handlebars-helpers/string)       | Méthodes de manipulation de chaînes |
| [URL](/api/handlebars-helpers/url)             | Méthodes pour l'analyse et la création d'URL |
