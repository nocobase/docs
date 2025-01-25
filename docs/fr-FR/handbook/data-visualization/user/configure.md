## Panneau de Configuration du Graphique

Le panneau de configuration du graphique est divisé en trois sections principales : Configuration des Données, Configuration du Graphique, et Aperçu du Graphique.

![Panneau de Configuration Image](https://static-docs.nocobase.com/202404192019222.png)

### 1. Configuration des Données

![Image de la Configuration des Données](https://static-docs.nocobase.com/202404192020544.png)

- **Sélection de la Collection** : Le menu déroulant en haut vous permet de sélectionner la collection de données à configurer. Vous pouvez changer de collection à tout moment.
- **Exécuter la Requête** : Après avoir configuré les paramètres, cliquez sur "Exécuter la requête" pour récupérer les données en fonction des réglages. Les données retournées seront affichées dans le panneau "Données".

#### Mesures

![Mesures Image](https://static-docs.nocobase.com/202404192023854.png)

Les champs de mesure contiennent les données clés que le graphique affichera. Ces champs peuvent être agrégés à l'aide de fonctions comme `Sum` (Somme), `Count` (Comptage), `Avg` (Moyenne), `Max` (Maximale), et `Min` (Minimale). Vous pouvez ajouter plusieurs champs de mesure et leur attribuer des alias si nécessaire.

#### Dimensions

![Dimensions Image](https://static-docs.nocobase.com/202404192025717.png)

Les champs de dimensions déterminent la manière dont les données sont regroupées dans le graphique. Pour les champs de type date, vous avez plusieurs options de formatage disponibles, comme montré dans l'image. Le formatage des dates est effectué via des fonctions de base de données (par exemple, `date_format` dans MySQL). Pour d'autres types de données, consultez la section [Transformation des Données](#数据转换).

:::info
**Formatage des Dimensions vs Transformation des Données**

- Le **formatage des dimensions** se fait avant la récupération des données et permet de grouper les données selon les valeurs dimensionnelles formatées. Cela est souvent utilisé pour filtrer les données par période.
- La **transformation des données** intervient après que les données ont été récupérées et sert à améliorer leur lisibilité et présentation. Cela se fait sur le frontend.
:::

#### Filtrage

![Filtre Image](https://static-docs.nocobase.com/202404192029597.png)

Les filtres sont appliqués aux données avant qu'elles ne soient groupées. Vous pouvez utiliser des variables pour un filtrage dynamique :

- **Utilisateur Actuel** : Informations liées à l'utilisateur actuellement connecté.
- **Variables de Date** : Plages de dates calculées dynamiquement en fonction de la date actuelle.
  - **Filtre Actuel** : Champs de filtre personnalisés définis dans le bloc de graphique actuel. Consultez [Bloc de Filtre](./filter.md).

#### Trier et Limiter

![Trier et Limiter Image](https://static-docs.nocobase.com/202404192034106.png)

Le jeu de données par défaut est limité à un maximum de 2000 entrées.

#### Mise en Cache

![Cache Image](https://static-docs.nocobase.com/202404192035918.png)

Lorsque la mise en cache est activée, le graphique affichera les données provenant du cache. Vous pouvez configurer la durée du cache selon vos besoins.

### 2. Configuration du Graphique

#### Configuration du Conteneur

Cette section vous permet de configurer les propriétés du composant conteneur qui affiche le graphique.

- **Titre du Graphique**
- **Afficher la Bordure du Graphique**

![Configuration du Conteneur Image](https://static-docs.nocobase.com/202404192037644.png)

Voici l'effet d'affichage du titre du graphique :

![Affichage du Titre Image](https://static-docs.nocobase.com/202404192048473.png)

Et l'effet d'affichage de la bordure du graphique :

![Affichage de la Bordure Image](https://static-docs.nocobase.com/202404192048223.png)

#### Configuration du Graphique

![Configuration du Graphique Image](https://static-docs.nocobase.com/202404192050696.png)

- **Type de Graphique** : Ici, vous pouvez choisir le type de graphique à afficher. NocoBase utilise la bibliothèque de graphiques **Ant Design Charts** version 2.x par défaut. Pour utiliser d'autres bibliothèques de graphiques ou composants, consultez le [Guide de Développement](../dev/index.md).
- **Configuration de Base** : Après avoir sélectionné un type de graphique, les options de configuration visuelle de base s'affichent, telles que les champs pour l'axe des x, l'axe des y et la classification. Ces configurations de champs sont fournies via des menus déroulants listant les champs de la collection.
- **Configuration JSON** : Si la configuration de base ne répond pas à vos besoins, vous pouvez configurer des propriétés supplémentaires du graphique à l'aide du format JSON. Pour inclure des expressions JavaScript dans la configuration JSON, enveloppez-les dans `{{}}`. Par exemple :

```json
{
  "label": {
    "type": "inner",
    "content": "{{ ({ percent }) => `${(percent * 100).toFixed(0)}%` }}"
  }
}
```

### 3. Transformation des Données

![Transformation des Données Image](https://static-docs.nocobase.com/202404192109597.png)

La transformation des données permet de traiter davantage les données de réponse. Les types de données pris en charge pour la transformation sont `number`, `date`, `time`, et `datetime`. Pour les champs ne correspondant à aucun de ces types, vous pouvez leur attribuer manuellement l'un de ces types pour appliquer les méthodes de transformation correspondantes.

Plusieurs méthodes de transformation peuvent être appliquées au même champ. Les transformations sont exécutées successivement, chaque étape passant son résultat à la suivante. Vous pouvez réorganiser les étapes de transformation en les faisant glisser.

:::warning
Soyez attentif, car certaines méthodes de transformation peuvent altérer le type de données d'origine. Lors de l'application de multiples transformations, assurez-vous de choisir la méthode appropriée en fonction du type de données après chaque étape. Par exemple, pour formater un nombre en devise en ajustant la précision et en ajoutant un préfixe, vous devez d'abord ajuster la précision, puis ajouter le préfixe. Cela est dû au fait qu'après l'ajout du préfixe, le nombre est converti en chaîne, ce qui rend les ajustements de précision inefficaces.
:::

#### Méthodes de Transformation prises en charge

| Type                                  | Méthode         | Description                                                                                                                   | Type Converti     |
| ------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Nombre (`number`)                     | Préfixe         |                                                                                                                               | `string`          |
|                                       | Suffixe         |                                                                                                                               | `string`          |
|                                       | Précision       | `1`, `1.0`, `1.00`, `1.000`.                                                                                                   | `number`          |
|                                       | Séparateur      | `100,000.00` (Anglais), `100.000,00` (Allemand), etc.                                                                          | `string`          |
|                                       | Pourcentage     |                                                                                                                               | `string`          |
|                                       | Notation Scientifique |                                                                                                                          | `number`          |
|                                       | Abréviation     | `1K`, `1M`, `1T`, `1B`, etc.                                                                                                 | `string`          |
| DateTime (`datetime`, `date`, `time`) | Formatage       | Utilise des formats prédéfinis ou personnalisés comme `YYYY-MM-DD`. Consultez la [documentation de dayjs](https://day.js.org/docs/en/display/format). | `string`          |
|                                       | Préfixe         |                                                                                                                               | `string`          |
|                                       | Suffixe         |                                                                                                                               | `string`          |
| Chaîne (`string`)                     | Conversion de Type | Convertit la chaîne en un autre type, comme une date/heure ou un nombre.                                                      | `Date` \| `number` |
|                                       | Préfixe         |                                                                                                                               | `string`          |
|                                       | Suffixe         |                                                                                                                               | `string`          |

---

Ce panneau de configuration complet vous permet de personnaliser en profondeur vos graphiques dans NocoBase, de la configuration des données à l'affichage visuel, tout en offrant des options avancées de transformation pour s'assurer que vos graphiques sont parfaitement adaptés à vos besoins.
