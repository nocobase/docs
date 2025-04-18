# Message de Réponse

<PluginInfo name="workflow-response-message" link="/handbook/workflow-response-message"></PluginInfo>

Le nœud "Message de Réponse" est conçu pour fournir des messages personnalisés au client qui initie une opération dans certains types de flux de travail.

:::info{title=Note}
Ce nœud peut actuellement être utilisé dans les types de flux de travail "Événement pré-opération" et "Événement d'action personnalisé (mode synchrone)".
:::

## Manuel de l'utilisateur

### Création d'un Nœud

Dans les types de flux de travail pris en charge, vous pouvez insérer un nœud "Message de Réponse" à n'importe quel point du flux de travail. Pour ce faire, cliquez sur le bouton plus ("+") dans le flux de travail pour ajouter le nœud "Message de Réponse" :

![Ajouter un Nœud](https://static-docs.nocobase.com/eac2b3565e95e4ce59f340624062ed3d.png)

Tout au long du processus de demande, les messages de réponse sont accumulés dans un tableau. Lorsque le processus atteint un nœud Message de Réponse, le contenu du nouveau message est ajouté à ce tableau. Lorsque le serveur envoie le contenu de la réponse, tous les messages du tableau sont livrés ensemble au client.

### Configuration du Nœud

Le contenu du message est structuré sous forme de chaîne de modèle, permettant l'insertion de variables. Vous pouvez personnaliser le contenu du modèle dans la configuration du nœud selon vos besoins :

![Configuration du Nœud](https://static-docs.nocobase.com/d5fa5f4002d50baf3ba16048818fddfc.png)

Lorsque le processus s'exécute et atteint ce nœud, le modèle est analysé pour générer le contenu final du message. Dans la configuration d'exemple ci-dessus, la variable "Variables de portée / Boucle tous les produits / Cible de boucle / Produit / Titre" sera remplacée par des valeurs spécifiques lors du flux de travail réel, comme par exemple :

```
Stock insuffisant pour le produit "iPhone 14 Pro"
```

![Contenu du Message](https://static-docs.nocobase.com/06bd4a6b6ec499c853f0c39987f63a6a.png)

### Configuration du Processus

L'indication du statut du message de réponse est déterminée par la réussite ou l'échec de l'exécution du processus. Si un nœud du processus échoue à s'exécuter, l'ensemble du processus est considéré comme échoué. Dans ce cas, le contenu du message sera retourné au client avec un statut d'échec en tant que notification.

Si vous devez définir activement un statut d'échec dans le processus, vous pouvez utiliser le "Nœud de Fin" et le configurer en tant qu'échec. Lorsque le processus atteint ce nœud, il se termine avec un statut d'échec, et le message sera renvoyé au client avec un statut d'échec.

Si l'ensemble du processus est terminé avec succès, sans échec, et atteint la fin, le contenu du message sera renvoyé au client avec un statut de succès.

:::info{title=Note}
Si plusieurs nœuds de message de réponse sont définis dans le processus, le contenu des nœuds exécutés sera ajouté à un tableau. Lorsque le processus est terminé, tout le contenu des messages sera renvoyé au client ensemble en tant que notification.
:::

### Cas d'utilisation

#### Flux de travail "Événement pré-opération"

Dans un flux de travail "Événement pré-opération", un message de réponse peut être utilisé pour fournir un retour d'information au client à l'issue du processus. Pour plus de détails, consultez [Interception des demandes](../triggers/pre-action.md).

#### Flux de travail "Événement post-opération"

Dans le mode synchrone d'un flux de travail "Événement post-opération", le message de réponse est envoyé au client après la fin du processus. Contrairement au flux de travail "Événement pré-opération", où le résultat peut varier, le message affiché ici est toujours une notification de "succès". Cette constance se produit parce que l'opération déclenchée a déjà été exécutée avec succès, et la réussite du flux de travail lié n'affecte pas le résultat de l'opération d'origine.
