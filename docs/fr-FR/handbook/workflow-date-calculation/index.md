# Calcul des Dates

<PluginInfo name="workflow-date-calculation" link="/handbook/workflow-date-calculation" commercial="true"></PluginInfo>

Le nœud de **Calcul de Date** offre un ensemble de neuf fonctions puissantes, permettant des opérations comme l'ajout ou la soustraction de périodes de temps, le formatage de chaînes de temps, et la conversion des unités de durée. Chaque fonction est conçue avec des types d'entrée et de sortie spécifiques, et peut intégrer de manière fluide les résultats des autres nœuds comme des variables de paramètres. En chaînant ces fonctions à travers un pipeline de calcul, vous pouvez obtenir le résultat souhaité avec précision.

## Manuel Utilisateur

### Création d'un Nœud

Pour ajouter un nœud **Calcul de Date** dans l'interface de configuration du workflow, il suffit de cliquer sur le bouton plus ("+") dans le processus :

![Créer un Nœud pour le Calcul de Date](https://static-docs.nocobase.com/[图片].png)

### Configuration du Nœud

![Configuration du Nœud pour le Calcul de Date](https://static-docs.nocobase.com/20240817184423.png)

#### Valeur d'Entrée

Les valeurs d'entrée peuvent être des variables ou des constantes de date. Les variables peuvent inclure des données qui déclenchent le workflow ou des résultats provenant des nœuds en amont. Les constantes peuvent être n'importe quelle date sélectionnée.

#### Type de Valeur d'Entrée

Le type de valeur d'entrée détermine la manière dont l'entrée sera traitée et est classé en deux types :

* **Type Date :** Cela inclut toute entrée qui peut être convertie en un format de date-heure, comme des horodatages numériques ou des chaînes représentant le temps.
* **Type Numérique :** Le type de valeur d'entrée influence le choix des étapes de calcul du temps, il est donc crucial de choisir le bon type.

#### Étapes de Calcul

Chaque étape de calcul consiste en une fonction spécifique et sa configuration de paramètres. Le design du pipeline permet à la sortie d'une fonction d'entrer directement dans la suivante, permettant une séquence de calculs et de conversions temporelles.

Le type de sortie après chaque étape est fixe, ce qui détermine les fonctions disponibles pour l'étape suivante. Si les types sont compatibles, le calcul continue ; sinon, le résultat de l'étape en cours devient la sortie finale du nœud.

### Fonctions de Calcul

#### Ajouter une plage

- **Type de Valeur d'Entrée Accepté :** Date
- **Paramètres :**
  - La quantité à ajouter, qui peut être une valeur numérique ou une variable du nœud.
  - L'unité de temps (par exemple, jours, heures).
- **Type de Valeur de Sortie :** Date
- **Exemple :** Si la valeur d'entrée est `2024-7-15 00:00:00`, la quantité est `1`, et l'unité est "jours", la sortie sera `2024-7-16 00:00:00`.

#### Soustraire une plage

- **Type de Valeur d'Entrée Accepté :** Date
- **Paramètres :**
  - La quantité à soustraire, qui peut être une valeur numérique ou une variable du nœud.
  - L'unité de temps (par exemple, jours, heures).
- **Type de Valeur de Sortie :** Date
- **Exemple :** Si la valeur d'entrée est `2024-7-15 00:00:00`, la quantité est `1`, et l'unité est "jours", la sortie sera `2024-7-14 00:00:00`.

#### Obtenir la différence avec une autre valeur de données

- **Type de Valeur d'Entrée Accepté :** Date
- **Paramètres :**
  - La date pour la comparaison, qui peut être une constante ou une variable dans le contexte du workflow.
  - L'unité de temps (par exemple, jours, heures).
  - S'il faut prendre la valeur absolue.
  - Options d'arrondi : conserver les décimales, arrondir, arrondir vers le haut ou arrondir vers le bas.
- **Type de Valeur de Sortie :** Numérique
- **Exemple :** Si la valeur d'entrée est `2024-7-15 00:00:00`, et que vous la comparez avec `2024-7-16 06:00:00`, en utilisant "jours" comme unité, sans prendre la valeur absolue et en conservant les décimales, la sortie sera `-1.25`.

:::info{title="Note"}
Si à la fois la valeur absolue et l'arrondi sont sélectionnés, la valeur absolue est d'abord appliquée, puis l'arrondi.
:::

#### Obtenir la valeur sur une unité spécifique de la date d'entrée

- **Type de Valeur d'Entrée Accepté :** Date
- **Paramètres :**
  - L'unité de temps (par exemple, jours, heures).
- **Type de Valeur de Sortie :** Numérique
- **Exemple :** Si la valeur d'entrée est `2024-7-15 00:00:00` et que l'unité est "jours", la sortie sera `15`.

#### Définir l'heure de début de l'unité

- **Type de Valeur d'Entrée Accepté :** Date
- **Paramètres :**
  - L'unité de temps (par exemple, jours, heures).
- **Type de Valeur de Sortie :** Date
- **Exemple :** Si la valeur d'entrée est `2024-7-15 14:26:30` et que l'unité est "jours", la sortie sera `2024-7-15 00:00:00`.

#### Définir l'heure de fin de l'unité

- **Type de Valeur d'Entrée Accepté :** Date
- **Paramètres :**
  - L'unité de temps (par exemple, jours, heures).
- **Type de Valeur de Sortie :** Date
- **Exemple :** Si la valeur d'entrée est `2024-7-15 14:26:30` et que l'unité est "jours", la sortie sera `2024-7-15 23:59:59`.

#### Est-ce une année bissextile ?

- **Type de Valeur d'Entrée Accepté :** Date
- **Paramètres :** Aucun
- **Type de Valeur de Sortie :** Booléen
- **Exemple :** Si la valeur d'entrée est `2024-7-15 14:26:30`, la sortie sera `true`.

#### Format en chaîne

- **Type de Valeur d'Entrée Accepté :** Date
- **Paramètres :**
  - Le format, tel que spécifié dans [Day.js : Format](https://day.js.org/docs/zh-CN/display/format).
- **Type de Valeur de Sortie :** Chaîne
- **Exemple :** Si la valeur d'entrée est `2024-7-15 14:26:30` et que le format est `le temps est YYYY/MM/DD HH:mm:ss`, la sortie sera `le temps est 2024/07/15 14:26:30`.

#### Convertir l'unité

- **Type de Valeur d'Entrée Accepté :** Numérique
- **Paramètres :**
  - L'unité de temps d'origine.
  - L'unité de temps cible.
  - Options d'arrondi : conserver les décimales, arrondir, arrondir vers le haut ou arrondir vers le bas.
- **Type de Valeur de Sortie :** Numérique
- **Exemple :** Si la valeur d'entrée est `2`, l'unité d'origine est "semaines", l'unité cible est "jours", et sans décimales, la sortie sera `14`.

### Exemple

![Exemple du Nœud de Calcul de Date](https://static-docs.nocobase.com/20240817184137.png)

Imaginons une activité promotionnelle où vous souhaitez automatiquement définir une heure de fin pour la promotion lorsqu'un produit est créé. Cette heure de fin serait le dernier jour de la semaine suivante à 23:59:59. Pour ce faire, vous pouvez créer deux fonctions de temps et les lier dans un pipeline :

1. Calculer la date pour la semaine suivante.
2. Ajuster la date pour le dernier jour de cette semaine à 23:59:59.

En faisant cela, vous générerez la valeur temporelle souhaitée, qui pourra ensuite être transmise au nœud suivant, comme un nœud de modification de table de données, pour définir l'heure de fin de la promotion dans la base de données.
