# Requêtes HTTP

Lorsqu'il est nécessaire d'interagir avec un autre système web, le nœud **Requête HTTP** est l'outil idéal. Ce nœud vous permet d'envoyer une requête HTTP à une adresse spécifiée, accompagnée de données dans les formats JSON ou `application/x-www-form-urlencoded`, facilitant ainsi la communication avec des systèmes externes.

Si vous êtes déjà familier avec des outils comme Postman, maîtriser le nœud Requête HTTP sera un jeu d'enfant. Cependant, contrairement aux outils traditionnels, ce nœud exploite des variables de contexte du workflow actuel, ce qui en fait un ajout puissant à l'intégration de votre processus métier.

## Installation

Il s'agit d'un plugin intégré, il n'est donc pas nécessaire de procéder à une installation.

## Guide de l'Utilisateur

### Création d'un Nœud

Dans l'interface de configuration du workflow, cliquez sur le bouton plus ("+") pour ajouter un nœud "Requête HTTP" au processus :

![Requête HTTP_Ajouter](https://static-docs.nocobase.com/46f2a6fc3f6869c80f8fbd362a54e644.png)

### Configuration du Nœud

![Configuration du Nœud Requête HTTP](https://static-docs.nocobase.com/2fcb29af66b892fa704add52e2974a52.png)

#### Méthode de Requête

Choisissez parmi les méthodes de requête HTTP disponibles : `GET`, `POST`, `PUT`, `PATCH`, et `DELETE`.

#### URL de Requête

Indiquez l'URL du service HTTP, y compris le protocole (`http://` ou `https://`). Pour des raisons de sécurité, il est recommandé d'utiliser `https://`.

#### Format des Données de Requête

Cela définit le `Content-Type` dans l'en-tête de la requête, avec les options `application/json` et `application/x-www-form-urlencoded`.

#### Configuration des En-têtes de Requête

Définissez des paires clé-valeur pour les en-têtes de la requête, avec des valeurs qui peuvent faire référence dynamiquement aux variables du contexte du workflow.

:::info{title=Note}
L'en-tête `Content-Type` est prédéfini par le paramètre de format des données de la requête. La saisie manuelle ici ne remplacera pas cette configuration.
:::

#### Paramètres de Requête

Définissez des paires clé-valeur pour la chaîne de requête. Les valeurs peuvent utiliser dynamiquement des variables du contexte du workflow.
#### Corps de la requête

La partie Body de la requête prend en charge différents formats selon le `Content-Type` sélectionné.

##### application/json

Prend en charge le format texte JSON standard. Vous pouvez insérer des variables du contexte du flux à l'aide du bouton de variable situé en haut à droite de la zone d'édition de texte.

:::info{title=Astuce}
Les variables doivent être utilisées à l'intérieur d'une chaîne JSON, par exemple : `"a": "{{$context.data.a}}"`.
:::

##### application/x-www-form-urlencoded

Prend en charge le format `application/x-www-form-urlencoded` sous forme de paires clé-valeur. La valeur peut contenir des variables du contexte du flux, qui seront interprétées comme un modèle de chaîne et concaténées pour former la valeur finale.

##### application/xml

Prend en charge le format texte XML standard. Vous pouvez insérer des variables du contexte du flux à l'aide du bouton de variable situé en haut à droite de la zone d'édition de texte.

##### multipart/form-data <Badge>v1.8.0+</Badge>

Prend en charge les données de formulaire au format `multipart/form-data` sous forme de paires clé-valeur. Si le type de données est défini sur "objet fichier", il est possible de téléverser un fichier. Le fichier doit être sélectionné via une variable pointant vers un objet fichier existant dans le contexte, comme un résultat de requête sur une table de fichiers ou une relation avec une table de fichiers.

:::info{title=Astuce}
Lorsque vous sélectionnez un fichier, assurez-vous que la variable correspond à un **objet fichier unique**, et non à une **liste de fichiers** (dans le cas d'une relation multiple, le champ relationnel sera un tableau).
:::

#### Paramètres de Délai d'Attente

Si la requête prend trop de temps pour répondre, le paramètre de délai d'attente l'annulera, ce qui entraînera la terminaison prématurée du workflow actuel avec un état d'échec.

#### Ignorer l'Échec

Le nœud de requête considère tout code d'état HTTP entre `200` et `299` comme un succès. Les codes en dehors de cette plage sont considérés comme des échecs. Si vous sélectionnez l'option "Ignorer les requêtes échouées et continuer le workflow", le workflow poursuivra les nœuds suivants, même si la requête échoue.

### Utilisation des Résultats de Réponse

Les résultats de réponse de la requête HTTP peuvent être analysés à l'aide du nœud [JSON Query](./plugins/json-query.md), ce qui permet une utilisation ultérieure dans les nœuds du workflow.

Depuis la version `v1.0.0-alpha.16`, la réponse du nœud de requête comprend trois composants qui peuvent être utilisés comme variables :

- Code d'état
- En-têtes de réponse
- Données

![Utilisation des Résultats de Réponse du Nœud de Requête HTTP](https://static-docs.nocobase.com/20240529110610.png)

Le code d'état de réponse est un code HTTP numérique standard, comme `200` ou `403`, fourni par le service.

Les en-têtes de réponse sont au format JSON, et les données de réponse—également en JSON—doivent être analysées à l'aide du nœud JSON avant d'être utilisées.

### Exemple

Par exemple, vous pouvez configurer le nœud de requête pour interagir avec une plateforme cloud pour l'envoi de SMS de notification. Voici comment vous configureriez l'API SMS d'Alibaba Cloud (avec des paramètres adaptés à la documentation pertinente) :

![Configuration du Nœud de Requête HTTP](https://static-docs.nocobase.com/20240515124004.png)

Lorsque le workflow déclenche ce nœud, il appellera l'API SMS d'Alibaba Cloud en fonction de la configuration. Si la requête réussit, un message texte sera envoyé via le service SMS cloud.
