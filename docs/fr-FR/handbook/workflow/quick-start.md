# Démarrage Rapide

## Configurer un Flux de Travail

Pour configurer un flux de travail, accédez à la page de gestion du plugin Workflow en accédant au menu de configuration du plugin dans la barre de navigation supérieure :

![Entrée de gestion du plugin Workflow](https://static-docs.nocobase.com/872169fb0cf277715178d1a6804e12cd.png)

La page de gestion affichera tous les flux de travail créés :

![Gestion des flux de travail](https://static-docs.nocobase.com/6d31e5c6c94a51513e6569dbc410c01f.png)

Cliquez sur le bouton "Ajouter un nouveau" pour créer un nouveau flux de travail et sélectionnez un événement de collection :

![Créer un flux de travail](https://static-docs.nocobase.com/57f23ce3c91d153ea235f95268a63d98.png)

Cliquez sur le lien "Configurer" dans la liste pour entrer dans la page de configuration du flux de travail :

![Un flux de travail vide](https://static-docs.nocobase.com/d6a3bc6b3fd03cba5bb10f142c38e2bf.png)

Ensuite, cliquez sur la carte du déclencheur pour ouvrir le tiroir de configuration du déclencheur. Sélectionnez une collection préalablement créée (par exemple, "Posts") et choisissez la condition de déclenchement "Après l'ajout d'un enregistrement", puis cliquez sur le bouton "Enregistrer" pour terminer la configuration du déclencheur :

![Configurer le déclencheur](https://static-docs.nocobase.com/f96015efe87759d6836d2a1c58d92884.png)

Ensuite, vous pouvez cliquer sur le bouton plus dans le flux de travail pour ajouter un nœud. Par exemple, sélectionnez un nœud de calcul pour concaténer les champs "Titre" et "ID" des données du déclencheur :

![Ajouter un nœud d'opération](https://static-docs.nocobase.com/60eeee25e6847a91fad50784c8c508ad.png)

Cliquez sur la carte du nœud pour ouvrir le tiroir de configuration du nœud. Utilisez la fonction `CONCATENATE` fournie par Formula.js pour concaténer les champs "Titre" et "ID", et insérez les champs en utilisant le sélecteur de variables :

![Nœud d'opération avec fonction et variable](https://static-docs.nocobase.com/837e4851a4c70a1932542caadef3431b.png)

Ensuite, créez un nœud "Mettre à jour l'enregistrement" pour enregistrer le résultat dans le champ "Titre" :

![Créer un nœud de mise à jour des données](https://static-docs.nocobase.com/494f72dff72b4410240b04c59cbbd322.png)

De même, cliquez sur la carte pour ouvrir le tiroir de configuration du nœud "Mettre à jour l'enregistrement". Sélectionnez la collection "Posts", choisissez l'ID de l'enregistrement à partir du déclencheur, sélectionnez le champ "Titre" à mettre à jour, et choisissez le résultat du nœud de calcul comme valeur à mettre à jour :

![Configurer le nœud de mise à jour des données](https://static-docs.nocobase.com/2e147c93643e7ebc709b9b7ab4f3af8c.png)

Enfin, cliquez sur le commutateur "On/Off" dans la barre d'outils en haut à droite pour passer le flux de travail à l'état activé. Cela permet au flux de travail d'être déclenché et exécuté.

## Déclencher un Flux de Travail

Retournez à la page principale et créez un article en utilisant son bloc de données. Remplissez le titre de l'article :

![Créer un article](https://static-docs.nocobase.com/d21a1a5833d5f54f52678ea18e9922f2.png)

Après la soumission et un rafraîchissement du bloc, vous verrez que le titre de l'article a été automatiquement mis à jour au format "Titre de l'article + ID de l'article" :

![Titre de l'article modifié par le flux de travail](https://static-docs.nocobase.com/3a700445896965c46c70ac51a07bbdb9.png)

:::info{title=Note}
Étant donné que le flux de travail déclenché dans une collection s'exécute de manière asynchrone, vous ne verrez peut-être pas immédiatement l'enregistrement mis à jour sur la page de soumission. Cependant, après avoir actualisé la page ou le bloc après un moment, le contenu mis à jour apparaîtra.
:::

## Voir l'historique des exécutions

Le flux de travail que nous avons déclenché précédemment a été exécuté avec succès. Nous pouvons revenir à la page de gestion des flux de travail pour afficher l'historique d'exécution correspondant :

![Voir la liste des flux de travail](https://static-docs.nocobase.com/92952de7fe6472db7d247a915e36100a.png)

Dans la liste des flux de travail, vous pouvez voir qu'il y a une exécution dans l'historique des flux de travail. En cliquant sur le lien du nombre dans la colonne "Exécuté", vous ouvrirez l'historique d'exécution du flux de travail correspondant :

![Liste de l'historique d'exécution du flux de travail correspondant](https://static-docs.nocobase.com/00537af15c6ae43d745106178242bc09.png)

En cliquant sur le lien "Voir", vous accédez à la page de détails de cette exécution particulière. Vous pourrez voir le statut d'exécution et les données de résultat de chaque nœud :

![Détails de l'historique d'exécution du flux de travail](https://static-docs.nocobase.com/93ec7ce25391d71cf7a109c9d03d5a48.png)

Les données de contexte du déclencheur et les données de résultat du nœud peuvent être consultées en cliquant sur le bouton de statut dans le coin supérieur droit de la carte correspondante. Par exemple, voyons les données de résultat d'un nœud d'opération :

![Résultat du nœud de calcul](https://static-docs.nocobase.com/10c22b923d3de0a0d58fa9283780f592.png)

Vous pouvez voir que les données de résultat du nœud de calcul incluent le titre calculé, qui est la donnée mise à jour par le nœud "Mettre à jour l'enregistrement" suivant.

## Résumé

Grâce aux étapes ci-dessus, nous avons configuré et déclenché un flux de travail simple, et avons également été introduits aux concepts de base suivants :

- **Flux de travail** : Il définit les informations de base du flux de travail, y compris son nom, son type de déclencheur et son état On/Off. Un flux de travail peut contenir plusieurs nœuds. Il sert de conteneur pour le processus.
- **Déclencheur** : Chaque flux de travail contient un déclencheur, qui peut être configuré avec des conditions spécifiques pour déclencher le flux de travail. Il sert de point d'entrée du flux de travail.
- **Nœud** : Un nœud est une unité d'instruction au sein du flux de travail qui exécute des actions spécifiques. Plusieurs nœuds au sein d'un flux de travail sont interconnectés dans une relation amont et aval, formant un flux de processus complet.
- **Exécution** : L'exécution représente les objets spécifiques exécutés après le déclenchement du flux de travail. Elle est également connue sous le nom d'enregistrement d'exécution ou d'historique d'exécution, et inclut des informations telles que le statut d'exécution et les données de contexte du déclencheur. Pour chaque nœud, il existe un résultat d'exécution correspondant qui inclut le statut d'exécution du nœud et ses données.

Pour des usages plus approfondis, vous pouvez vous référer aux ressources suivantes :

- Compréhension avancée
  - [Utilisation des variables](./advanced/variables.md)
  - [Plan d'exécution (Historique)](./advanced/executions.md)
  - [Révisions](./advanced/revisions.md) 
  - [Options avancées](./advanced/options.md)
- [Vue d'ensemble des déclencheurs](./triggers/index.md)
- [Vue d'ensemble des nœuds](./nodes/index.md)
