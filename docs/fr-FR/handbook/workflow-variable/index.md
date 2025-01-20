# Variables Personnalisées

<PluginInfo name="workflow-variable" link="/handbook/workflow-variable" commercial="true"></PluginInfo>

Dans les flux de travail, des variables peuvent être déclarées ou des valeurs peuvent être attribuées à des variables existantes, généralement pour stocker des données temporaires pendant le processus.

## Manuel de l'utilisateur

### Création de Nœuds

Pour ajouter un nœud "Variable" dans l'interface de configuration du flux de travail, cliquez sur le signe plus (“+”) dans le processus :

![Ajouter un Nœud Variable](https://static-docs.nocobase.com/53b1e48e777bfff7f2a08271526ef3ee.png)

### Configuration des Nœuds

#### Mode

Comme pour les variables de programmation, un nœud de variable doit d'abord être déclaré avant de pouvoir être utilisé ou attribué une valeur. Lors de la création d'un nœud de variable, vous devez choisir son mode. Il existe deux options :

![Sélectionner le Mode](https://static-docs.nocobase.com/49d8b7b501de6faef6f303262aa14550.png)

- **Déclarer une nouvelle variable** : Cela crée une nouvelle variable.
- **Attribuer une valeur à une variable existante** : Cela attribue une valeur à une variable déjà déclarée, mettant ainsi à jour sa valeur.

Si le nœud créé est le premier nœud de variable dans le processus, seul le mode de déclaration est disponible, car il n'y a pas encore de variables existantes auxquelles attribuer des valeurs.

Lors de l'attribution d'une valeur à une variable existante, vous devrez sélectionner la variable cible, c'est-à-dire le nœud où la variable a été initialement déclarée :

![Sélectionner la Variable à Attribuer](https://static-docs.nocobase.com/1ce8911548d7347e693d8cc8ac1953eb.png)

#### Valeur

La valeur d'une variable peut être de n'importe quel type, comme une constante (par exemple, des chaînes de caractères, des nombres, des booléens, des dates) ou une autre variable dans le flux de travail.

En mode déclaration, définir une valeur de variable revient à lui attribuer une valeur initiale.

![Déclarer une Valeur Initiale](https://static-docs.nocobase.com/4ce2c508986565ad537343013758c6a4.png)

En mode attribution, définir une valeur de variable modifie la valeur de la variable cible, qui sera utilisée dans les étapes suivantes.

![Attribuer la Valeur d'une Variable de Déclencheur à la Variable Déclarée](https://static-docs.nocobase.com/858bae180712ad279ae6a964a77a7659.png)

### Utilisation des Valeurs des Variables

Dans les nœuds suivant le nœud de variable, vous pouvez utiliser la valeur de la variable en la sélectionnant dans le groupe "Résultat du Nœud". Par exemple, dans un nœud de requête, la valeur d'une variable peut être utilisée comme condition de filtrage dans la requête :

![Utiliser la Valeur d'une Variable comme Condition de Filtrage de Requête](https://static-docs.nocobase.com/1ca91c295254ff85999a1751499f14bc.png)

### Exemple

Les nœuds de variables sont particulièrement utiles dans les branches où de nouvelles valeurs doivent être calculées ou combinées avec des valeurs existantes (similaire à `reduce` ou `concat` en programmation). Ces valeurs peuvent ensuite être utilisées après la fin de la branche. L'exemple suivant montre comment créer une chaîne de destinataires concaténée en utilisant des nœuds de boucle et de variables.

Commencez par créer un flux de travail déclenché par une mise à jour de table de données. Ce flux de travail sera activé lorsque les données de l'**Article** sont mises à jour et précharge les données relationnelles associées aux **Auteurs** (utilisées pour obtenir les destinataires) :

![Configurer le Déclencheur](https://static-docs.nocobase.com/93327530a93c695c637d74cdfdcd5cde.png)

Ensuite, créez un nœud de variable pour stocker la chaîne des destinataires :

![Nœud de Variable des Destinataires](https://static-docs.nocobase.com/d26fa4a7e7ee4f34e0d8392a51c6666e.png)

Puis, créez un nœud de branchement de boucle pour itérer sur les auteurs de l'article et concaténer leurs informations dans la variable des destinataires :

![Boucle à Travers les Auteurs de l'Article](https://static-docs.nocobase.com/083fe62c943c17a643dc47ec2872e07c.png)

Dans la branche de boucle, créez d'abord un nœud **Opérateur** pour concaténer l'auteur actuel avec la chaîne des auteurs stockée :

![Concaténer la Chaîne des Destinataires](https://static-docs.nocobase.com/5d21a990162f32cb8818d27b16fd1bcd.png)

Après le nœud Opérateur, créez un autre nœud de variable en mode attribution. Sélectionnez le nœud de variable des destinataires comme cible, et attribuez-lui la valeur du résultat du nœud Opérateur :

![Attribuer la Chaîne de Destinataires Concaténée au Nœud des Destinataires](https://static-docs.nocobase.com/fc40ed95dd9b61d924b7ca11b23f9482.png)

Lorsque la branche de boucle se termine, la variable des destinataires contiendra la chaîne des destinataires concaténée de tous les auteurs de l'article. Vous pouvez ensuite utiliser un nœud de requête HTTP après la boucle pour appeler l'interface d'envoi d'e-mail, en passant la valeur de la variable des destinataires comme paramètre destinataire :

![Envoyer un E-mail au Destinataire via un Nœud de Requête](https://static-docs.nocobase.com/37f71aa1a63e172bcb2dce10a250947e.png)

De cette manière, une fonction simple d'envoi d'e-mails en masse est implémentée en utilisant des nœuds de boucle et de variables.
