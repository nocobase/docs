# API HTTP

L'événement pré-opération est intégré pendant la phase de traitement de la demande, ce qui permet de le déclencher via un appel API HTTP.

Pour les flux de travail liés localement à un bouton d'action, vous pouvez les déclencher avec la commande suivante (en utilisant un bouton pour la table `posts` comme exemple) :

```bash
curl -X POST -H 'Authorization: Bearer <votre token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Bonjour, le monde !",
    "content": "Ceci est un post de test."
  }'
  "http://localhost:3000/api/posts:create?triggerWorkflows=workflowKey"
```

Le paramètre URL `triggerWorkflows` spécifie la clé du flux de travail, avec plusieurs flux séparés par des virgules. Vous pouvez trouver cette clé en survolant le nom du flux de travail en haut du canevas du flux de travail :

![Comment voir la clé du flux de travail](https://static-docs.nocobase.com/20240426135108.png)

Après avoir exécuté la commande ci-dessus, l'événement pré-opération correspondant pour la table `posts` sera déclenché. Une fois le flux de travail associé traité de manière synchrone, les données seront créées et renvoyées comme d'habitude.

Si le flux de travail configuré atteint un "Noeud de fin", la demande sera interceptée et aucune donnée ne sera créée, suivant la même logique qu'une opération d'interface. Si le statut du Noeud de fin est défini sur échec, le code de statut de la réponse sera `400` ; si réussi, il sera `200`.

Si un "Noeud de message de réponse" est configuré avant le Noeud de fin, le message généré sera inclus dans la réponse. La structure du message d'erreur est la suivante :

```json
{
  "errors": [
    {
      "message": "message provenant du noeud 'Message de réponse'"
    }
  ]
}
```

Lorsque le "Noeud de fin" est configuré comme réussi, la structure du message est la suivante :

```json
{
  "messages": [
    {
      "message": "message provenant du noeud 'Message de réponse'"
    }
  ]
}
```

:::info{title=Note}
Étant donné que plusieurs "Noeuds de message de réponse" peuvent être ajoutés au flux de travail, la structure des données du message retourné est présentée sous forme de tableau.
:::

Si l'événement pré-opération est configuré globalement, il n'est pas nécessaire de spécifier le flux de travail correspondant à l'aide du paramètre URL `triggerWorkflows` lors de l'appel de l'API HTTP. Il suffit d'appeler l'opération de la table de données correspondante pour qu'elle soit automatiquement déclenchée.

```bash
curl -X POST -H 'Authorization: Bearer <votre token>' -H 'X-Role: <roleName>' -d \
  '{
    "title": "Bonjour, le monde !",
    "content": "Ceci est un post de test."
  }'
  "http://localhost:3000/api/posts:create"
```

:::info{title="Note"}
Lorsque vous déclenchez des événements post-opération via un appel API HTTP, assurez-vous que le flux de travail est activé et que la configuration de la table de données correspond à la configuration attendue. Sinon, l'appel peut échouer ou entraîner des erreurs.
:::
