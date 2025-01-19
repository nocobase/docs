## Boucle

<PluginInfo name="workflow-loop" link="/handbook/workflow-loop"></PluginInfo>

La boucle fonctionne de manière similaire aux constructions `for`, `while` ou `forEach` dans les langages de programmation. Elle est conçue pour des situations où vous devez répéter certaines opérations un nombre spécifique de fois ou itérer sur un ensemble de données (comme un tableau). Le nœud de boucle est votre outil privilégié pour de telles tâches.

## Installation

Ce plugin est préinstallé, il n'est donc pas nécessaire de le configurer.

## Manuel de l'utilisateur

### Création du Nœud

Dans l'interface de configuration du flux de travail, vous pouvez ajouter un nœud **"Boucle"** en cliquant sur le signe plus ("+") dans le processus :

![Création d'un Nœud de Boucle](https://static-docs.nocobase.com/b3c8061a66bfff037f4b9509ab0aad75.png)

Une fois le nœud de boucle créé, une branche interne spécifiquement pour la boucle est générée. Vous pouvez ensuite peupler cette branche avec autant de nœuds que nécessaire. Ces nœuds auront accès non seulement aux variables du contexte du flux de travail, mais aussi aux variables locales définies dans le contexte de la boucle, comme l'objet de données actuel ou l'index d'itération (qui commence à `0`). Ces variables locales sont limitées à la portée de la boucle. Pour les boucles imbriquées, vous pouvez utiliser des variables spécifiques à chaque niveau de boucle.

### Configuration du Nœud

![20241016135326](https://static-docs.nocobase.com/20241016135326.png)

#### Objet de la Boucle

Le nœud de boucle peut traiter différents types de données pour l'objet de la boucle, chacun de manière différente :

1. **Tableau** : Il s'agit du cas d'utilisation le plus courant. En général, vous sélectionnerez une variable de contexte de flux de travail, comme les résultats d'un nœud de requête ou des données préchargées à partir d'une relation plusieurs-à-plusieurs. Si un tableau est sélectionné, le nœud de boucle itérera sur chaque élément, assignant l'élément actuel à une variable locale dans le contexte de la boucle à chaque itération.

2. **Nombre** : Lorsque l'objet de la boucle est un nombre, il est traité comme le nombre d'itérations. L'index dans la variable locale correspondra à la valeur de l'objet de la boucle.

3. **Chaîne** : Si l'objet de la boucle est une chaîne, la boucle itérera en fonction de la longueur de la chaîne, en traitant chaque caractère par son index.

4. **Autres** : Les autres types de données (y compris les objets) sont traités comme un seul objet de boucle, entraînant une seule itération—cela ne nécessite généralement pas de boucle.

Vous pouvez également saisir des constantes directement lorsque vous travaillez avec des nombres et des chaînes. Par exemple, saisir `5` (type numérique) fera en sorte que la boucle s'exécute 5 fois, tandis que saisir `abc` (type chaîne) entraînera 3 itérations, traitant respectivement `a`, `b`, et `c`. L'outil de sélection de variables vous permet de choisir le type de constante que vous souhaitez utiliser.

#### Condition de la Boucle

Depuis la version `v1.4.0-beta`, des options de condition de boucle ont été ajoutées et peuvent être activées dans la configuration du nœud.

**Condition**

Similaire à la configuration d'un nœud de condition, une combinaison de conditions peut être configurée, et des variables de la boucle en cours, telles que l'élément de boucle et l'index de boucle, peuvent également être utilisées.

**Point de contrôle**

Similaire aux constructions `while` et `do/while` dans les langages de programmation, les conditions peuvent être configurées pour être évaluées avant chaque itération de boucle ou après celle-ci. L'évaluation post-condition peut exécuter d'autres nœuds dans le corps de la boucle avant d'effectuer la vérification de la condition.

**Lorsque la condition n'est pas remplie**

Similaire aux clauses `break` et `continue` dans les langages de programmation, cela peut être utilisé pour déterminer si la boucle doit être arrêtée ou continuer.

#### Gestion des erreurs des nœuds internes dans la boucle

Depuis la version `v1.4.0-beta`, lorsqu'un nœud interne dans une boucle échoue à s'exécuter (en raison de conditions non remplies, d'erreurs, etc.), l'étape suivante peut être déterminée via cette configuration. Trois méthodes de gestion sont proposées :

* Quitter le processus (par défaut)
* Quitter la boucle et continuer le processus
* Passer à l'élément suivant de la boucle

Vous pouvez choisir la méthode appropriée en fonction de vos besoins.

### Exemple

Considérons le scénario suivant : lors de la passation d'une commande, vous devez vérifier l'inventaire de chaque produit dans la commande. Si l'inventaire est suffisant, le stock est déduit ; sinon, le produit dans les détails de la commande est marqué comme invalide.

1. Créez trois collections : **Produit** <-(1:m)-- **Détails de la commande** --(m:1)-> **Commande**, avec le modèle de données suivant :

| Nom du champ   | Type de champ         |
| -------------- | --------------------- |
| Détails de la commande | Plusieurs-à-Un (Détails) |
| Prix Total     | Numéro                |

| Nom du champ   | Type de champ         |
| -------------- | --------------------- |
| Produit        | Un-à-Plusieurs (Produit) |
| Quantité       | Numéro                |

| Nom du champ   | Type de champ         |
| -------------- | --------------------- |
| Nom du produit | Texte à ligne simple  |
| Prix           | Numéro                |
| Inventaire     | Entier                |

2. Créez un flux de travail, sélectionnez "Événement de collection" comme déclencheur, et choisissez la table "Commande" avec "Créer un enregistrement" comme déclencheur. De plus, préchargez les données de la relation à partir de la table "Détails de la commande" et de la table "Produit" sous les détails :

![Configuration de Déclencheur pour Nœud de Boucle](https://static-docs.nocobase.com/0086601c2fc0e17a64d046a4c86b49b7.png)

3. Créez un nœud de boucle, sélectionnez l'objet de boucle comme "Données du déclencheur / Détails de la commande," ce qui itérera sur chaque enregistrement dans la table des détails de la commande :

![Configuration du Nœud de Boucle](https://static-docs.nocobase.com/2507becc32db5a9a0641c198605a20da.png)

4. À l'intérieur du nœud de boucle, créez un nœud de "Condition" pour vérifier si l'inventaire du produit est suffisant :

![Configuration du Nœud de Condition pour Boucle](https://static-docs.nocobase.com/a6d08d15786841e1a3512b38e4629852.png)

5. Si l'inventaire est suffisant, créez un nœud de "Calcul" et un nœud de "Mettre à jour l'enregistrement" sous la branche "Oui" pour mettre à jour l'inventaire après déduction :

![Configuration du Nœud de Calcul pour Boucle](https://static-docs.nocobase.com/8df3604c71f8f8705b1552d3ebfe3b50.png)

![Configuration du Nœud de Mise à Jour de l'Inventaire pour Boucle](https://static-docs.nocobase.com/2d84baa9b3b01bd85fccda9eec992378.png)

6. Si l'inventaire est insuffisant, créez un nœud de "Mise à jour de l'enregistrement" sous la branche "Non" pour mettre à jour le statut des détails de la commande à "Invalide" :

![Configuration du Nœud de Mise à Jour des Détails de la Commande pour Boucle](https://static-docs.nocobase.com/4996613090c254c69a1d80f3b3a7fae2.png)

La structure complète du processus est illustrée ci-dessous :

![Structure du Processus pour Nœud de Boucle](https://static-docs.nocobase.com/6f59ef246c1f19976344a7624c4c4151.png)

Après la configuration et l'activation de ce flux de travail, chaque fois qu'une nouvelle commande est créée, le système vérifiera automatiquement l'inventaire de chaque produit dans la commande. Si l'inventaire est suffisant, le stock sera déduit ; sinon, le produit dans les détails de la commande sera marqué comme invalide (ce qui aide à calculer le prix total valide de la commande).
