# Règles de Liaison

## Introduction

Dans NocoBase, les règles de liaison sont un mécanisme utilisé pour contrôler le comportement interactif des éléments de l'interface front-end. Elles permettent aux utilisateurs d'ajuster la présentation et la logique comportementale des blocs, des champs et des actions en fonction de différentes conditions, offrant ainsi une expérience interactive flexible et à faible code. Cette fonctionnalité est en cours d'optimisation continue.

En configurant les règles de liaison, vous pouvez réaliser des actions comme :

- Masquer/afficher certains blocs en fonction du rôle de l'utilisateur actuel, avec des blocs affichant des informations différentes selon le rôle (par exemple, un administrateur peut voir un bloc avec toutes les informations, tandis qu'un utilisateur standard ne voit que des informations de base).
- Lorsqu'un certain champ est sélectionné dans un formulaire, automatiquement remplir ou réinitialiser la valeur d'autres champs.
- Lorsqu'un certain champ est sélectionné dans un formulaire, désactiver certains éléments de saisie.
- Modifier dynamiquement la couleur de fond, la taille de police, la graisse de police, etc., en fonction de conditions spécifiques pour mettre en surbrillance un champ.
- Contrôler la visibilité ou l'interactivité des boutons d'action en fonction de certaines conditions.

## Configuration des Conditions

![20250417214217](https://static-docs.nocobase.com/20250417214217.png)

### Variables à gauche

Les variables à gauche dans une règle de liaison sont utilisées pour définir l'"objet de la condition", c'est-à-dire la variable dont la valeur sera utilisée pour effectuer la comparaison afin de déterminer si l'action de liaison doit être exécutée.

Les variables disponibles comprennent :

- Champs dans le contexte, tels que `« Formulaire actuel/xxx »`, `« Enregistrement actuel/xxx »`, `« Enregistrement de la fenêtre contextuelle actuelle/xxx »`, etc.
- Variables globales du système, telles que `Utilisateur actuel`, `Rôle actuel`, etc., qui peuvent être utilisées pour un contrôle dynamique basé sur l'identité ou les permissions de l'utilisateur.
  > ✅ Les variables à gauche disponibles dépendent du contexte du bloc. Utilisez les variables à gauche de manière appropriée en fonction des besoins métier :
  >
  > - « Utilisateur actuel » fait référence aux informations de l'utilisateur actuellement connecté ;
  > - « Formulaire actuel » fait référence aux valeurs saisies en temps réel dans le formulaire ;
  > - « Enregistrement actuel » fait référence aux valeurs enregistrées, telles que celles des lignes de tableau.

### Opérateurs

Les opérateurs servent à établir la logique de comparaison, c'est-à-dire à déterminer comment comparer la variable à gauche à la valeur de droite. Différents types de variables à gauche supportent différents opérateurs, les opérateurs courants incluent :

- **Types texte** : `$includes`, `$eq`, `$ne`, `$empty`, `$notEmpty`, etc.
- **Types numériques** : `$eq`, `$gt`, `$lt`, `$gte`, `$lte`, etc.
- **Types booléens** : `$isTruly`, `$isFalsy`
- **Types tableau** : `$match`, `$anyOf`, `$empty`, `$notEmpty`, etc.

> ✅ Le système recommande automatiquement une liste d'opérateurs disponibles en fonction du type de la variable à gauche, garantissant une logique de configuration appropriée.

### Valeur à droite

La valeur à droite est celle avec laquelle la variable à gauche sera comparée pour déterminer si la condition est remplie.

Les contenus suivants sont pris en charge :

- Valeurs constantes : saisie de valeurs fixes telles que des nombres, du texte, des dates, etc.
- Variables du contexte : telles que d'autres champs du formulaire actuel, l'enregistrement actuel, etc.
- Variables système : comme l'utilisateur actuel, l'heure actuelle, le rôle actuel, etc.

> ✅ Le système adapte automatiquement l'interface pour la saisie de la valeur à droite en fonction du type de la variable à gauche, par exemple :
>
> - Si la variable à gauche est un champ « option », un sélecteur d'options sera affiché ;
> - Si la variable à gauche est un champ « date », un sélecteur de date sera affiché ;
> - Si la variable à gauche est un champ « texte », un champ de saisie de texte sera affiché.

> 💡 En utilisant judicieusement les valeurs dynamiques à droite (en particulier les variables), vous pouvez construire des logiques de liaison basées sur l'utilisateur actuel, l'état des données et le contexte, créant ainsi des interactions plus puissantes.

## Logique d'exécution des règles

### Déclenchement des conditions

Lorsque la condition d'une règle est remplie (et que le champ n'est pas requis), l'action de modification des propriétés est automatiquement exécutée. Si aucune condition n'est définie, la règle est considérée comme toujours remplie, et l'action de modification des propriétés est donc toujours exécutée.

### Plusieurs règles

Vous pouvez configurer plusieurs règles de liaison pour un formulaire. Lorsque plusieurs règles sont satisfaites, le système exécute les actions dans l'ordre où les règles ont été définies, c'est-à-dire en suivant l'ordre des règles, et la dernière règle est celle qui prévaut.
Exemple : la règle 1 rend un champ « désactivé », et la règle 2 le rend « modifiable ». Si les conditions des deux règles sont satisfaites, le champ sera « modifiable ».

> L'ordre d'exécution des règles est crucial. Veillez à bien définir les priorités et relations entre les règles pour éviter des conflits de logique.

## Gestion des règles

Vous pouvez effectuer les actions suivantes sur chaque règle :

- **Nomination personnalisée** : attribuez un nom clair à chaque règle pour une meilleure gestion et identification.
- **Tri** : ajustez l'ordre des règles en fonction de la priorité d'exécution pour garantir que le système traite les règles dans l'ordre correct.
- **Suppression** : supprimez les règles qui ne sont plus nécessaires.
- **Activer/Désactiver** : désactivez temporairement une règle sans la supprimer, ce qui est utile lorsque vous devez désactiver une règle dans certains cas sans la supprimer définitivement.
- **Copier la règle** : dupliquez une règle existante pour créer une nouvelle règle, afin d'éviter la saisie manuelle répétitive.

## À propos des variables

Dans l'attribution des champs et la configuration des conditions, non seulement les constantes sont prises en charge, mais aussi les variables. La liste des variables dépend du contexte du bloc. Choisir et utiliser les variables de manière appropriée permet de répondre plus facilement aux besoins métier. Pour plus d'informations sur les variables, consultez la section [Variables](/handbook/ui/variables).

## Règles de Liaison de Bloc (fonctionnalité à venir)

> **Note** : cette fonctionnalité est disponible à partir de la version v1.7.0-beta.xx

Les règles de liaison de bloc permettent de contrôler dynamiquement l'affichage des blocs en fonction de variables système (comme l'utilisateur actuel, le rôle actuel) ou de variables du contexte (comme l'enregistrement de la fenêtre contextuelle actuelle). Par exemple, un administrateur peut voir un bloc avec toutes les informations d'une commande, tandis qu'un utilisateur standard peut ne voir que des informations spécifiques. Cette fonctionnalité permet de configurer deux blocs de commande et d'ajouter des règles de liaison de bloc pour créer cet effet.

👉 Plus de détails : [Règles de Liaison de Bloc](/handbook/ui/blocks/block-settings/block-linkage-rule)

## Règles de Liaison de Champ

Les règles de liaison de champ sont utilisées pour ajuster dynamiquement l'état des champs dans les formulaires ou les blocs de détails, notamment pour :

- Contrôler l'**affichage/masquage** des champs.
- Définir si un champ est **obligatoire**.
- **Assigner des valeurs**.
- Configurer la **plage d'options** pour les champs à options.
- Limiter la **plage de temps** pour les champs de type date.

👉 Plus de détails : [Règles de Liaison de Champ](/handbook/ui/blocks/block-settings/field-linkage-rule)

## Règles de Liaison des Actions

Les règles de liaison des actions permettent de contrôler les actions en fonction des valeurs des enregistrements actuels ou des variables globales, telles que la visibilité ou la possibilité de désactiver les actions.

👉 Plus de détails : [Règles de Liaison des Actions](/handbook/ui/actions/action-settings/linkage-rule)

## Règles de Liaison de Style de Champ

Les règles de liaison de style de champ permettent de définir dynamiquement les propriétés de style des champs en fonction de conditions spécifiques, principalement pour les propriétés suivantes :

- `color`
- `background-color`
- `text-align`
- `font-size`
- `font-weight`
- `font-style`

Elles sont souvent utilisées pour mettre en surbrillance des informations importantes, signaler des anomalies ou guider visuellement l'utilisateur.

👉 Plus de détails : [Règles de Style de Champ](/handbook/ui/fields/field-settings/style)
