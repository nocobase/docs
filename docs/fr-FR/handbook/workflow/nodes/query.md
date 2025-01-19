# Requête de Données

Utilisé pour interroger et récupérer les enregistrements de données qui répondent à certaines conditions dans une collection.

Il peut être configuré pour interroger un ou plusieurs enregistrements de données, et le résultat de la requête peut être utilisé comme variable dans les nœuds suivants. Lorsque plusieurs enregistrements sont récupérés, le résultat est un tableau. Si le résultat de la requête est vide, vous pouvez choisir de continuer ou non l'exécution des nœuds suivants.

## Création d'un Nœud

Dans l'interface de configuration du workflow, cliquez sur le bouton plus ("+") dans le flux pour ajouter un nœud "Requête de données" :

![Requête de Données_Ajouter](https://static-docs.nocobase.com/c1ef2b851b437806faf7a39c6ab9d33a.png)

## Configuration du Nœud

![Configuration du Nœud de Requête](https://static-docs.nocobase.com/20240520131324.png)

### Collection

Sélectionnez la collection depuis laquelle interroger les enregistrements de données.

### Type de Résultat

Il existe deux types de résultats : "Données uniques" et "Plusieurs enregistrements" :

- Donnée unique : Le résultat sera un objet du premier enregistrement correspondant uniquement, ou null si aucun enregistrement ne correspond.
- Plusieurs enregistrements : Le résultat sera un tableau contenant les enregistrements correspondants, ou un tableau vide si aucun enregistrement ne correspond. Cela peut être utilisé pour être traité dans un nœud de boucle.

### Conditions de Filtrage

Similaire aux conditions de filtrage lors de la requête d'une collection normale, vous pouvez utiliser des variables de contexte du workflow.

### Tri

Lorsque vous interrogez un ou plusieurs enregistrements de données, des règles de tri peuvent être utilisées pour contrôler les résultats souhaités. Par exemple, pour interroger l'enregistrement de données le plus récent, vous pouvez trier par le champ "Créé à" dans l'ordre décroissant.

### Pagination

Lorsque le jeu de résultats peut être volumineux, la pagination peut être utilisée pour contrôler le nombre de résultats de la requête. Par exemple, pour interroger les 10 derniers enregistrements de données, vous pouvez trier par le champ "Heure de création" dans l'ordre décroissant et définir la pagination sur 1 page avec 10 enregistrements.

### Gestion des Résultats Vides

En mode résultat unique, s'il n'y a aucun enregistrement qui répond aux conditions, le résultat de la requête sera `null` ; en mode plusieurs résultats, ce sera un tableau vide (`[]`). Vous pouvez choisir de cocher "Quitter le workflow si le résultat de la requête est vide". Si cette option est activée, si le résultat de la requête est vide, les nœuds suivants ne seront pas exécutés, et le workflow quittera prématurément avec un statut d'échec.
