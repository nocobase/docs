# API HTTP

## Initiator

### Initiate from Data Collection

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

### Initiate from Approval Center

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "collectionName": "<collection name>",
    "workflowId": <workflow id>,
    "data": { "<field>": "<value>" },
    "status": <initial approval status>,
  }'
  "http://localhost:3000/api/approvals:create"
```

**Parameters**

* `collectionName`: The name of the data collection where the approval is initiated, required.
* `workflowId`: The ID of the workflow used to initiate the approval, required.
* `data`: The fields of the data table record created when initiating the approval, required.
* `status`: The status of the record created when initiating the approval, required. Possible values include:
  * `0`: Draft, indicating that it is saved but not submitted for approval.
  * `2`: Submit for approval, indicating that the initiator submits the approval request and enters the approval process.

### Save and Submit

When an approval (or withdrawal) is in draft status, you can use the following API to save or submit it again:

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  '{
    "data": { "<field>": "<value>" },
    "status": 2
  }'
  "http://localhost:3000/api/approvals:update/<approval id>"
```

### Get List of Initiated Approvals

```base
curl -X GET -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' \
  "http://localhost:3000/api/approvals:listMine"
```

### Withdraw

The initiator can withdraw the current record that is under approval through the following interface:

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -H 'X-Role: <roleName>' -d \
  "http://localhost:3000/api/approvals:withdraw/<approval id>"
```

**Parameters**

* `<approval id>`: The ID of the approval record to be withdrawn, required.

### 

## Approver

Once the approval process enters the approval node, a task will be created for the current approver. The approver can complete the approval task through the interface or by calling the HTTP API.

### Get Approval Processing Records

The to-do tasks are the approval processing records. You can use the following API to get all approval processing records for the current user:

```bash
curl -X GET -H 'Authorization: Bearer <your token>' \
  "http://localhost:3000/api/approvalRecords:listMine"
```

### Get Single Approval Processing Record

```bash
curl -X GET -H 'Authorization: Bearer <your token>' \
  "http://localhost:3000/api/approvalRecords:get/<record id>"
```

### Approve and Reject

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -d \
  '{
    "status": 2,
    "comment": "Looks good to me.",
    "data": { "<field to modify>": "<value>" }
  }'
  "http://localhost:3000/api/approvalRecords:submit/<record id>"
```

**Parameters**

* `<record id>`: The ID of the record to be approved or rejected, required.
* `status`: The status of the approval process, `2` for "approve", `-1` for "reject", required.
* `comment`: Optional comments regarding the approval process.
* `data`: Optional modifications to the data table record at the current approval node (only effective if approved).

### Return <Badge>v1.9.0+</Badge>

In version v1.9.0 and earlier, the return used the same interface as "approve" and "reject", with `"status": 1` representing the return.

Starting from version v1.9.0, the return has a separate interface:

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -d \
  '{
    "returnToNodeKey": "<node key>",
  }'
  "http://localhost:3000/api/approvalRecords:return/<record id>"
```

**Parameters**

* `<record id>`: The ID of the record to be returned, required.
* `returnToNodeKey`: Optional key for the target node to return to. If the node has a configured range of returnable nodes, this parameter can be used to specify which node to return to. If not configured, this parameter does not need a value, and the default is to return to the starting point, where the initiator resubmits.

### Delegate

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -d \
  '{
    "assignee": <user id>,
  }'
  "http://localhost:3000/api/approvalRecords:delegate/<record id>"
```

**Parameters**

* `<record id>`: The ID of the record to be delegated, required.
* `assignee`: The user ID of the assignee, required.

### Add 

```bash
curl -X POST -H 'Authorization: Bearer <your token>' -d \
  '{
    "assignees": [<user id>],
    "order": <order>,
  }'
  "http://localhost:3000/api/approvalRecords:add/<record id>"
```

**Parameters**

* `<record id>`: The ID of the record to be added, required.
* `assignees`: The user ID list of the assignees, required.
* `order`: The order of the addition, `-1` indicates before "me", `1` indicates after "me".
