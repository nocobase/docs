# API HTTP

Les événements d'approbation ne sont pas limités aux actions dans l'interface utilisateur ; ils peuvent également être déclenchés par des appels API HTTP.

Pour les approbations initiées depuis les blocs de données et les blocs du centre d'approbation, vous pouvez les déclencher en utilisant un appel API (en utilisant le bouton de création pour la table `posts` comme exemple) :

```bash
curl -X POST -H 'Authorization: Bearer <votre jeton>' -H 'X-Role: <nomDuRôle>' -d \
  '{
    "title": "Bonjour, le monde !",
    "content": "Ceci est un post de test."
  }'
  "http://localhost:3000/api/posts:create?triggerWorkflows=cléDuWorkflow"
```

Le paramètre URL `triggerWorkflows` est la clé du workflow, avec plusieurs workflows séparés par des virgules. Vous pouvez trouver cette clé en survolant le nom du workflow en haut du canevas du workflow :

![Comment voir la clé du workflow](https://static-docs.nocobase.com/20240426135108.png)

Une fois l'appel effectué avec succès, le workflow d'approbation pour la table `posts` sera déclenché.

:::info{title="Note"}
Étant donné que les appels externes dépendent également de l'identité de l'utilisateur, les appels API HTTP doivent inclure des détails d'authentification, tout comme les requêtes standard de l'interface. Cela inclut l'en-tête `Authorization` ou le paramètre `token` (jeton obtenu lors de la connexion), ainsi que l'en-tête `X-Role` (indiquant le rôle actuel de l'utilisateur).
:::

Si vous devez déclencher un événement lié à une relation un-à-un (notez que les relations un-à-plusieurs ne sont pas encore prises en charge), vous pouvez utiliser `!` dans les paramètres pour spécifier le champ lié qui doit déclencher l'événement :

```bash
curl -X POST -H 'Authorization: Bearer <votre jeton>' -H 'X-Role: <nomDuRôle>' -d \
  '{
    "title": "Bonjour, le monde !",
    "content": "Ceci est un post de test.",
    "category": {
      "title": "Catégorie de test"
    }
  }'
  "http://localhost:3000/api/posts:create?triggerWorkflows=cléDuWorkflow!category"
```

Lorsque l'appel est exécuté avec succès, l'événement d'approbation pour la table `categories` sera déclenché.

:::info{title="Note"}
Lors du déclenchement d'événements via des appels API HTTP, assurez-vous que le workflow est activé et que la configuration de la table de données est correcte ; sinon, l'appel peut échouer ou entraîner des erreurs.
:::
