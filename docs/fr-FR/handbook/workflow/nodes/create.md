# Créer un enregistrement

Utilisé pour ajouter une nouvelle ligne de données dans une collection spécifique.

Les valeurs des champs du nouvel enregistrement peuvent utiliser des variables provenant du contexte du flux de travail. L'attribution de valeurs aux champs d'association peut directement référencer les variables de données correspondantes dans le contexte, qui peuvent être des objets ou des valeurs de clé étrangère. Si aucune variable n'est utilisée, vous devez saisir manuellement les valeurs des clés étrangères, et pour plusieurs champs d'association, les valeurs de clé étrangère doivent être séparées par des virgules.

## Création d'un Nœud

Dans l'interface de configuration du flux de travail, cliquez sur le bouton plus ("+") dans le flux pour ajouter un nœud "Créer un enregistrement" :

![Création d'un nœud de création d'enregistrement](https://static-docs.nocobase.com/386c8c01c89b1eeab848510e77f4841a.png)

## Configuration du Nœud

![Exemple de configuration de nœud d'enregistrement](https://static-docs.nocobase.com/5f7b97a51b64a1741cf82a4d4455b610.png)

### Collection

Sélectionnez la collection dans laquelle le nouvel enregistrement sera ajouté.

### Valeurs des Champs

Attribuez des valeurs aux champs de la collection. Les variables du contexte du flux de travail peuvent être utilisées, ou des valeurs statiques peuvent être saisies manuellement.

:::info{title="Note"}
L'enregistrement ajouté par le nœud de création dans le flux de travail ne traitera pas automatiquement des champs tels que "Créateur" et "Dernière modification", vous devez configurer les valeurs de ces deux champs en fonction de la situation.
:::

### Préchargement des Données Associées

Si les champs du nouvel enregistrement incluent des champs d'association, et que vous souhaitez utiliser les données associées correspondantes dans les flux de travail suivants, vous pouvez cocher les champs d'association correspondants dans la configuration de préchargement. Ainsi, après l'ajout du nouvel enregistrement, les données associées correspondantes seront automatiquement chargées et stockées ensemble dans les données de résultat du nœud.

## Exemple

Par exemple, lorsqu'un enregistrement est ajouté ou mis à jour dans la collection "Posts", il est nécessaire d'ajouter automatiquement une ligne "Post Versions" pour enregistrer l'historique des changements du post. Cela peut être réalisé en utilisant le nœud de création :

![Exemple de configuration du flux de travail avec nœud de création](https://static-docs.nocobase.com/dfd4820d49c145fa331883fc09c9161f.png)

![Exemple de configuration de nœud d'enregistrement](https://static-docs.nocobase.com/1a0992e66170be12a068da6503298868.png)

Avec cette configuration activée, lorsque des données changent dans la collection "Posts", une ligne "Post Version" sera automatiquement ajoutée pour enregistrer l'historique des changements de l'article.
