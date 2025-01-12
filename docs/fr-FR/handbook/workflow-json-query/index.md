# Requête JSON

<PluginInfo name="workflow-json-query" link="/handbook/workflow-json-query" commercial="true"></PluginInfo>

Ce plugin permet d'analyser des données JSON complexes générées par divers nœuds, permettant ainsi aux nœuds suivants d'utiliser efficacement ces données. Par exemple, les nœuds d'opérations SQL ou de requêtes HTTP renvoient souvent des résultats au format JSON. Le nœud de requête JSON permet de transformer ces données en valeurs spécifiques et en formats de variables nécessaires aux étapes ultérieures du flux de travail.

## Manuel de l'utilisateur

### Création d'un Nœud

Pour ajouter un nœud **"Requête JSON"** dans l'interface de configuration du flux de travail, cliquez simplement sur le bouton **plus (“+”)** dans le processus :

![Création d'un Nœud](https://static-docs.nocobase.com/7de796517539ad9dfc88b7160f1d0dd7.png)

:::info{title=Astuce}
Les nœuds de requête JSON sont généralement placés sous d'autres nœuds de données pour faciliter l'analyse de leurs sorties.
:::

### Configuration du Nœud

#### Moteur d'Analyse

Le nœud de requête JSON prend en charge plusieurs moteurs d'analyse, chacun avec sa propre syntaxe. Vous pouvez sélectionner un moteur en fonction de vos besoins et préférences. Actuellement, trois moteurs d'analyse sont disponibles :

- [JMESPath](https://jmespath.org/)
- [JSONPath Plus](https://jsonpath-plus.github.io/JSONPath/docs/ts/)
- [JSONata](https://jsonata.org/)

![Sélection du Moteur d'Analyse](https://static-docs.nocobase.com/29be3b92a62b7d20312d1673e749f2ec.png)

#### Source de Données

La source de données peut être soit la sortie d'un nœud en amont, soit un objet de données dans le contexte du processus. Il s'agit généralement d'un objet de données non structuré, comme les résultats provenant d'un nœud SQL ou d'une requête HTTP.

![Source de Données](https://static-docs.nocobase.com/f5a97e20693b3d30b3a994a576aa282d.png)

:::info{title=Astuce}
Les objets de données liés aux tables de données sont généralement déjà structurés par les informations de configuration des tables et ne nécessitent pas d'analyse par un nœud de requête JSON.
:::

#### Expression d'Analyse

Vous pouvez créer une expression d'analyse personnalisée en fonction de vos besoins spécifiques et du moteur d'analyse que vous avez sélectionné.

![Expression d'Analyse](https://static-docs.nocobase.com/181abd162fd32c09b62f6aa1d1cb3ed4.png)

:::info{title=Astuce}
Chaque moteur d'analyse utilise une syntaxe différente, référez-vous à la documentation liée pour plus d'informations détaillées.
:::

Depuis la version `v1.0.0-alpha.15`, les expressions supportent désormais l'utilisation de variables. Ces variables sont pré-analysées avant l'exécution du moteur spécifique, remplaçant les variables par les valeurs de chaîne correspondantes en fonction des règles de modèle de chaîne et les fusionnant avec d'autres éléments statiques dans l'expression. Cette fonctionnalité est particulièrement utile lors de la construction dynamique d'expressions, comme lors de l'analyse de contenu JSON nécessitant des clés dynamiques.

#### Mappage des Propriétés

Lorsque le résultat analysé est un objet (ou un tableau d'objets), vous pouvez utiliser le mappage des propriétés pour convertir les attributs souhaités en sous-variables pour les nœuds suivants.

![Mappage des Propriétés](https://static-docs.nocobase.com/b876abe4ccf6b4709eb8748f21ef3527.png)

:::info{title=Astuce}
Pour les résultats de type objet (ou tableau d'objets), si vous ne procédez pas à un mappage des propriétés, l'objet entier (ou le tableau d'objets) sera stocké comme une seule variable dans le résultat du nœud, ce qui rendra impossible l'accès direct aux valeurs des attributs de l'objet sous forme de variables individuelles.
:::

### Exemple

Supposons que vous deviez analyser des données provenant d'un nœud SQL qui renvoie un ensemble de données de commande :

```json
[
  [
    {
      "id": 1,
      "products": [
        {
          "id": 1,
          "title": "Produit 1",
          "price": 100,
          "quantity": 1
        },
        {
          "id": 2,
          "title": "Produit 2",
          "price": 120,
          "quantity": 2
        }
      ]
    },
    {
      "id": 2,
      "products": [
        {
          "id": 3,
          "title": "Produit 3",
          "price": 130,
          "quantity": 1
        },
        {
          "id": 4,
          "title": "Produit 4",
          "price": 140,
          "quantity": 2
        }
      ]
    }
  ]
]
```

:::info{title=Astuce}
Le tableau externe dans l'exemple ci-dessus est intentionnel ; il reflète la sortie typique d'un nœud SQL. En effet, les résultats du nœud SQL sont un tableau binaire, où le premier élément contient les résultats de la requête et le deuxième élément contient les métadonnées de la requête.
:::

Si vous devez analyser et calculer le prix total de chaque commande et assembler ces données dans un objet avec l'ID de commande correspondant, prêt à mettre à jour le prix total de la commande, vous pouvez configurer cela de la manière suivante :

![Exemple - Configuration de l'Analyse SQL](https://static-docs.nocobase.com/e62322a868b26ff98120bfcd6dcdb3bd.png)

1. Sélectionnez le moteur d'analyse **JSONata** ;
2. Choisissez le résultat du nœud SQL comme source de données ;
3. Utilisez l'expression JSONata `$[0].{"id": id, "total": products.(price * quantity)}` pour l'analyse ;
4. Choisissez le mappage des propriétés pour mapper `id` et `total` comme sous-variables ;

Le résultat final analysé ressemblera à ceci :

```json
[
  {
    "id": 1,
    "total": 340
  },
  {
    "id": 2,
    "total": 410
  }
]
```

Vous pouvez ensuite itérer sur le tableau des commandes terminées pour mettre à jour le prix total de chaque commande.

![Mettre à jour le Prix Total de la Commande](https://static-docs.nocobase.com/b3329b0efe4471f5eed1f0673bef740e.png)
