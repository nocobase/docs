# HTTP API

Les événements post-opération peuvent être déclenchés non seulement par des interactions avec l'interface utilisateur, mais également via des appels API HTTP, offrant ainsi une méthode flexible pour initier des flux de travail de manière programmatique.

:::info{title="Note"}
Lors du déclenchement d'événements post-opération via des appels API HTTP, il est essentiel de s'assurer que le flux de travail est actif et que la configuration de la table de données est correctement associée. Si ces conditions ne sont pas remplies, l'appel peut échouer ou produire des erreurs.
:::

Pour les flux de travail associés à des boutons d'opération spécifiques, vous pouvez les déclencher en utilisant la méthode suivante (illustrée ici avec le bouton de création de la table `posts`) :

```bash
curl -X POST -H 'Authorization: Bearer <votre token>' -H 'X-Role: <nomDuRôle>' -d \
  '{
    "title": "Bonjour, le monde!",
    "content": "Ceci est un message de test."
  }'
  "http://localhost:3000/api/posts:create?triggerWorkflows=cléDuFluxDeTravail"
```

Dans cet exemple, le paramètre URL `triggerWorkflows` spécifie la clé du flux de travail, avec plusieurs flux de travail séparés par des virgules si nécessaire. Vous pouvez obtenir cette clé en survolant le nom du flux de travail en haut du canevas du flux de travail :

![Méthode pour voir la clé du flux de travail](https://static-docs.nocobase.com/20240426135108.png)

Une fois l'exécution réussie, cet appel déclenchera l'événement post-opération approprié pour la table `posts`.

:::info{title="Note"}
Étant donné que les appels API externes nécessitent une authentification utilisateur, les mêmes identifiants utilisés pour les demandes de l'interface standard doivent être fournis dans les appels API HTTP. Cela inclut l'en-tête `Authorization` ou le paramètre `token` (obtenu lors de la connexion), ainsi que l'en-tête `X-Role`, qui spécifie le rôle de l'utilisateur actuel.
:::

Si vous devez déclencher un événement lié à une relation un-à-un (actuellement non pris en charge pour les relations plusieurs-à-un), vous pouvez utiliser le symbole `!` dans les paramètres pour indiquer les données du champ de la relation :

```bash
curl -X POST -H 'Authorization: Bearer <votre token>' -H 'X-Role: <nomDuRôle>' -d \
  '{
    "title": "Bonjour, le monde!",
    "content": "Ceci est un message de test.",
    "category": {
      "title": "Catégorie de test"
    }
  }'
  "http://localhost:3000/api/posts:create?triggerWorkflows=cléDuFluxDeTravail!category"
```

Une fois l'exécution réussie, cela déclenchera l'événement post-opération correspondant pour la table `categories`.

:::info{title="Note"}
Si l'événement est configuré en mode global, il n'est pas nécessaire de spécifier le flux de travail à l'aide du paramètre URL `triggerWorkflows`. Il suffit de déclencher l'opération de table de données concernée pour initier automatiquement le flux de travail associé.
:::
