# Mettre à jour un enregistrement

Utilisé pour mettre à jour les enregistrements de données qui satisfont à certaines conditions dans une collection.

Les sections de collection et d'affectation des champs sont similaires à celles du nœud "Créer un enregistrement". La principale différence entre le nœud "Mettre à jour un enregistrement" et le nœud "Créer un enregistrement" réside dans les conditions de filtrage et la nécessité de sélectionner un mode de mise à jour. De plus, le nœud de mise à jour renverra le nombre de lignes de données mises à jour avec succès, ce qui ne peut être consulté que dans l'historique d'exécution et ne peut pas être utilisé comme variable dans les nœuds suivants.

## Création d'un Nœud

Dans l'interface de configuration du flux de travail, cliquez sur le bouton plus ("+") dans le flux pour ajouter un nœud "Mettre à jour un enregistrement" :

![Ajouter un nœud Mettre à jour un enregistrement](https://static-docs.nocobase.com/9ff24d7bc173b3a71decc1f70ca9fb66.png)

## Configuration du Nœud

![Configuration du Nœud Mettre à jour](https://static-docs.nocobase.com/98e0f941c57275fc835f08260d0b2e86.png)

### Collection

Sélectionnez la collection dans laquelle mettre à jour les enregistrements.

### Mode de Mise à Jour

Il existe deux modes : "Batch" et "Individuel" pour la mise à jour. En mode batch, la mise à jour de chaque enregistrement ne déclenchera pas les événements de collection ; tandis qu'en mode individuel, chaque mise à jour d'enregistrement pourrait déclencher les événements de collection. Cependant, des problèmes de performance peuvent survenir avec des mises à jour individuelles, surtout avec de grandes quantités de données, donc à utiliser avec précaution. Choisissez généralement en fonction des données à mettre à jour et de la nécessité de déclencher d'autres événements de flux de travail. Si vous mettez à jour un seul enregistrement de données en fonction d'une clé primaire, il est recommandé d'utiliser la mise à jour individuelle ; si vous mettez à jour plusieurs enregistrements de données en fonction de conditions, il est recommandé d'utiliser la mise à jour par lots.

### Conditions de Filtrage

Similaire aux conditions de filtrage utilisées lors de la requête d'une collection normale, vous pouvez utiliser les variables contextuelles du flux de travail.

### Valeurs des Champs

Semblable à l'affectation de champs dans le nœud "Créer un enregistrement", vous pouvez utiliser des variables provenant du contexte du flux de travail ou entrer manuellement des valeurs statiques.

Note : Le nœud de mise à jour dans le flux de travail ne gère pas automatiquement le champ "Dernière modification par" ; vous devez configurer la valeur de ce champ en fonction de la situation.

## Exemple

Par exemple, lorsqu'un "Post" est créé, la collection "Post Category" doit être automatiquement mise à jour avec le champ "Post Count". Cela peut être réalisé à l'aide d'un nœud de mise à jour :

![Exemple de configuration du nœud de mise à jour](https://static-docs.nocobase.com/98e0f941c57275fc835f08260d0b2e86.png)

Lorsque le flux de travail est déclenché, le champ "Post Count" dans la collection "Post Category" sera automatiquement mis à jour pour afficher le nombre actuel de posts +1.
