### Référence de l'API

#### Côté Serveur

L'API disponible dans le package côté serveur est la suivante :

```ts
import PluginWorkflowServer, {
  Trigger,
  Instruction,
  EXECUTION_STATUS,
  JOB_STATUS,
} from '@nocobase/plugin-workflow';
```

##### `PluginWorkflowServer`

La classe du Plugin Workflow.

Typiquement, pendant l'exécution d'une application, l'instance du plugin Workflow peut être récupérée en appelant `app.pm.get<PluginWorkflowServer>(PluginWorkflowServer)` depuis n'importe quel endroit où l'instance `app` est accessible (ci-après appelée `plugin`).

##### `registerTrigger()`

Enregistre un nouveau type de déclencheur.

**Signature**

`registerTrigger(type: string, trigger: typeof Trigger | Trigger)`

**Paramètres**

| Paramètre | Type                        | Description             |
| --------- | --------------------------- | ----------------------- |
| `type`    | `string`                    | Identifiant du type de déclencheur |
| `trigger` | `typeof Trigger \| Trigger` | Type de déclencheur ou instance |

**Exemple**

```ts
import PluginWorkflowServer, { Trigger } from '@nocobase/plugin-workflow';

function handler(this: MyTrigger, workflow: WorkflowModel, message: string) {
  // Déclenche le flux de travail
  this.workflow.trigger(workflow, { data: message.data });
}

class MyTrigger extends Trigger {
  messageHandlers: Map<number, WorkflowModel> = new Map();
  on(workflow: WorkflowModel) {
    const messageHandler = handler.bind(this, workflow);
    // Écoute un événement pour déclencher le flux de travail
    process.on(
      'message',
      this.messageHandlers.set(workflow.id, messageHandler),
    );
  }

  off(workflow: WorkflowModel) {
    const messageHandler = this.messageHandlers.get(workflow.id);
    // Supprimer l'écouteur
    process.off('message', messageHandler);
  }
}

export default class MyPlugin extends Plugin {
  load() {
    // Récupère l'instance du plugin Workflow
    const workflowPlugin =
      this.app.pm.get<PluginWorkflowServer>(PluginWorkflowServer);

    // Enregistre le déclencheur
    workflowPlugin.registerTrigger('myTrigger', MyTrigger);
  }
}
```

##### `registerInstruction()`

Enregistre un nouveau type de nœud.

**Signature**

`registerInstruction(type: string, instruction: typeof Instruction | Instruction)`

**Paramètres**

| Paramètre      | Type                                | Description                |
| -------------- | ----------------------------------- | -------------------------- |
| `type`         | `string`                            | Identifiant du type de nœud |
| `instruction`  | `typeof Instruction \| Instruction` | Type de nœud ou instance    |

**Exemple**

```ts
import PluginWorkflowServer, { Instruction, JOB_STATUS } from '@nocobase/plugin-workflow';

class LogInstruction extends Instruction {
  run(node, input, processor) {
    console.log('mon instruction s\'exécute!');
    return {
      status: JOB_STATUS.RESOLVED,
    };
  }
};

export default class MyPlugin extends Plugin {
  load() {
    // Récupère l'instance du plugin Workflow
    const workflowPlugin = this.app.pm.get<PluginWorkflowServer>(PluginWorkflowServer);

    // Enregistre l'instruction
    workflowPlugin.registerInstruction('log', LogInstruction);
  }
}
```

##### `trigger()`

Déclenche un flux de travail spécifique. Cela est principalement utilisé dans les déclencheurs personnalisés pour activer le flux de travail correspondant lorsqu'un événement personnalisé spécifique est détecté.

**Signature**

`trigger(workflow: Workflow, context: any)`

**Paramètres**

| Paramètre  | Type             | Description                                    |
| ---------- | ---------------- | ---------------------------------------------- |
| `workflow` | `WorkflowModel`   | L'objet workflow à déclencher                  |
| `context`  | `object`          | Les données contextuelles fournies lors du déclenchement |

:::info{title=Conseil}
Le paramètre `context` est actuellement obligatoire ; le flux de travail ne sera pas déclenché sans lui.
:::

**Exemple**

```ts
import { Trigger } from '@nocobase/plugin-workflow';

class MyTrigger extends Trigger {
  timer: NodeJS.Timeout;

  on(workflow) {
    // Enregistre l'événement
    this.timer = setInterval(() => {
      // Déclenche le flux de travail
      this.plugin.trigger(workflow, { date: new Date() });
    }, workflow.config.interval ?? 60000);
  }
}
```

##### `resume()`

Reprend l'exécution d'un flux de travail mis en pause à un nœud spécifique.

- Seuls les flux de travail dans l'état `EXECUTION_STATUS.STARTED` peuvent être repris.
- Seuls les nœuds de tâche dans l'état `JOB_STATUS.PENDING` peuvent être repris.

**Signature**

`resume(job: JobModel)`

**Paramètres**

| Paramètre  | Type       | Description                |
| ---------- | ---------- | -------------------------- |
| `job`      | `JobModel` | L'objet tâche mis à jour    |

:::info{title=Conseil}
L'objet tâche passé est généralement l'objet mis à jour et a typiquement le `status` mis à jour vers une valeur autre que `JOB_STATUS.PENDING`, sinon il restera en pause.
:::

**Exemple**

Voir le [code source](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-workflow-manual/src/server/actions.ts#L99).

#### `Trigger`

Classe de base pour les déclencheurs, utilisée pour étendre les types de déclencheurs personnalisés.

| Paramètre         | Type                                                        | Description                   |
| ----------------- | ----------------------------------------------------------- | ----------------------------- |
| `constructor`     | `(public readonly workflow: PluginWorkflowServer): Trigger` | Constructeur                   |
| `on?`             | `(workflow: WorkflowModel): void`                           | Gestionnaire d'événements lors du démarrage du flux de travail |
| `off?`            | `(workflow: WorkflowModel): void`                           | Gestionnaire d'événements lors de l'arrêt du flux de travail |

`on`/`off` sont utilisés pour enregistrer/désenregistrer les écouteurs d'événements lorsque le flux de travail est activé/désactivé. Le paramètre passé est l'instance du flux de travail correspondant au déclencheur, qui peut être traitée en fonction de la configuration. Pour certains types de déclencheurs qui écoutent déjà des événements globalement, ces méthodes peuvent ne pas avoir besoin d'être implémentées. Par exemple, dans un déclencheur de type minuterie, un minuteur peut être enregistré dans `on` et désenregistré dans `off`.

#### `Instruction`

Classe de base pour les types d'instructions, utilisée pour étendre les types d'instructions personnalisés.

| Paramètre         | Type                                                            | Description                         |
| ----------------- | --------------------------------------------------------------- | ----------------------------------- |
| `constructor`     | `(public readonly workflow: PluginWorkflowServer): Instruction` | Constructeur                         |
| `run`             | `Runner`                                                        | Logique d'exécution lors de la première entrée dans le nœud |
| `resume?`         | `Runner`                                                        | Logique d'exécution lors de la reprise après une interruption |
| `getScope?`       | `(node: FlowNodeModel, data: any, processor: Processor): any`   | Fournit les variables locales générées par le nœud de branchement |

**Types associés**

```ts
export type Job =
  | {
      status: JOB_STATUS[keyof JOB_STATUS];
      result?: unknown;
      [key: string]: unknown;
    }
  | JobModel
  | null;

export type InstructionResult = Job | Promise<Job>;

export type Runner = (
  node: FlowNodeModel,
  input: JobModel,
  processor: Processor,
) => InstructionResult;

export class Instruction {
  run: Runner;
  resume?: Runner;
}
```

`getScope` peut être utilisé dans l'[implémentation des nœuds de boucle](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-workflow-loop/src/server/LoopInstruction.ts#L83), qui est utilisé pour fournir des variables locales pour la branche.

#### `EXECUTION_STATUS`

Une table de constantes représentant le statut des plans d'exécution de flux de travail, utilisée pour indiquer le statut actuel du plan d'exécution.

| Nom de la constante                   | Signification              |
| ------------------------------------- | -------------------------- |
| `EXECUTION_STATUS.QUEUEING`          | Mise en file d'attente      |
| `EXECUTION_STATUS.STARTED`           | En cours                   |
| `EXECUTION_STATUS.RESOLVED`          | Terminé avec succès        |
| `EXECUTION_STATUS.FAILED`            | Échoué                     |
| `EXECUTION_STATUS.ERROR`             | Erreur d'exécution         |
| `EXECUTION_STATUS.ABORTED`           | Abandonné                  |
| `EXECUTION_STATUS.CANCELED`          | Annulé                     |
| `EXECUTION_STATUS.REJECTED`          | Rejeté                     |
| `EXECUTION_STATUS.RETRY_NEEDED`      | Réessayer nécessaire       |

À l'exception des trois premiers, tous les autres statuts représentent des états d'échec, mais ils peuvent indiquer différentes raisons d'échec.

#### `JOB_STATUS`

Une table de constantes représentant le statut des tâches des nœuds de flux de travail, utilisée pour

 indiquer le statut actuel de la tâche du nœud. Le statut généré par le nœud affecte également le statut du plan d'exécution global.

| Nom de la constante               | Signification                                    |
| ---------------------------------- | ------------------------------------------------ |
| `JOB_STATUS.PENDING`              | En attente : Le nœud a été atteint, mais l'instruction nécessite une suspension |
| `JOB_STATUS.RESOLVED`             | Terminé avec succès                             |
| `JOB_STATUS.FAILED`               | Échoué : L'exécution du nœud n'a pas répondu aux conditions configurées |
| `JOB_STATUS.ERROR`                | Erreur : Une erreur non capturée s'est produite pendant l'exécution du nœud |
| `JOB_STATUS.ABORTED`              | Abandonné : Le nœud a été terminé par une autre logique après suspension |
| `JOB_STATUS.CANCELED`             | Annulé : Le nœud a été annulé manuellement après suspension |
| `JOB_STATUS.REJECTED`             | Rejeté : Le nœud a été rejeté manuellement après suspension |
| `JOB_STATUS.RETRY_NEEDED`         | Réessayer nécessaire                           |

#### Côté Client

L'API disponible dans le package côté client est montrée ci-dessous.

```ts
import PluginWorkflowClient, {
  Trigger,
  Instruction,
} from '@nocobase/plugin-workflow/client';
```

##### `PluginWorkflowClient`

##### `registerTrigger()`

Enregistre le panneau de configuration correspondant au type de déclencheur.

**Signature**

`registerTrigger(type: string, trigger: typeof Trigger | Trigger): void`

**Paramètres**

| Paramètre | Type                        | Description                             |
| --------- | --------------------------- | --------------------------------------- |
| `type`    | `string`                    | Identifiant du type de déclencheur, cohérent avec l'identifiant utilisé lors de l'enregistrement |
| `trigger` | `typeof Trigger \| Trigger` | Type de déclencheur ou instance         |

##### `registerInstruction()`

Enregistre le panneau de configuration correspondant au type de nœud.

**Signature**

`registerInstruction(type: string, instruction: typeof Instruction | Instruction): void`

**Paramètres**

| Paramètre      | Type                                | Description                             |
| -------------- | ----------------------------------- | --------------------------------------- |
| `type`         | `string`                            | Identifiant du type de nœud, cohérent avec l'identifiant utilisé lors de l'enregistrement |
| `instruction`  | `typeof Instruction \| Instruction` | Type de nœud ou instance                |

#### `registerInstructionGroup()`

注册节点类型分组。NocoBase 默认提供 4 个节点类型分组：

* `'control'`：控制类
* `'collection'`：数据表操作类
* `'manual'`：人工处理类
* `'extended'`：其他扩展类

如果需要扩展其他分组，可以使用该方法注册。

**签名**

`registerInstructionGroup(type: string, group: { label: string }): void`

**参数**

| 参数      | 类型               | 说明                           |
| --------- | ----------------- | ----------------------------- |
| `type`    | `string`          | 节点分组标识，与注册使用的标识一致 |
| `group` | `{ label: string }` | 分组信息，目前仅包含标题         |

**示例**

```js
export default class YourPluginClient extends Plugin {
  load() {
    const pluginWorkflow = this.app.pm.get(PluginWorkflowClient);

    pluginWorkflow.registerInstructionGroup('ai', { label: `{{t("AI", { ns: "${NAMESPACE}" })}}` });
  }
}
```

## `Trigger`

Classe de base pour les déclencheurs, utilisée pour étendre les types de déclencheurs personnalisés.

| Paramètre            | Type                                                             | Description                             |
| -------------------- | ---------------------------------------------------------------- | --------------------------------------- |
| `title`              | `string`                                                         | Nom du type de déclencheur              |
| `fieldset`           | `{ [key: string]: ISchema }`                                     | Ensemble des options de configuration du déclencheur |
| `scope?`             | `{ [key: string]: any }`                                         | Ensemble d'objets pouvant être utilisés dans le schéma de configuration |
| `components?`        | `{ [key: string]: React.FC }`                                    | Ensemble de composants pouvant être utilisés dans le schéma de configuration |
| `useVariables?`      | `(config: any, options: UseVariableOptions) => VariableOptions`  | Fonction pour récupérer les données du contexte du déclencheur |

- Si `useVariables` n'est pas défini, cela signifie que ce type de déclencheur ne fournit pas de fonction pour récupérer les valeurs, et les données du contexte du déclencheur ne peuvent pas être sélectionnées dans le nœud de flux.

## `Instruction`

Classe de base pour les instructions, utilisée pour étendre les types de nœuds personnalisés.

| Paramètre                 | Type                                                    | Description                                                                           |
| ------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `group`                   | `string`                                                | Identifiant du groupe de type de nœud, actuellement optionnel : `'control'` / `'collection'` / `'manual'` / `'extended'` |
| `fieldset`                | `Record<string, ISchema>`                               | Ensemble des options de configuration du nœud                                         |
| `scope?`                  | `Record<string, Function>`                              | Ensemble d'objets pouvant être utilisés dans le schéma de configuration               |
| `components?`             | `Record<string, React.FC>`                              | Ensemble de composants pouvant être utilisés dans le schéma de configuration          |
| `Component?`              | `React.FC`                                              | Composant de rendu personnalisé pour le nœud                                          |
| `useVariables?`           | `(node, options: UseVariableOptions) => VariableOption` | Méthode pour fournir des options de variables pour le nœud                            |
| `useScopeVariables?`      | `(node, options?) => VariableOptions`                   | Méthode pour fournir des options de variables locales pour la branche                  |
| `useInitializers?`        | `(node) => SchemaInitializerItemType`                   | Méthode pour fournir des options d'initialisation pour le nœud                        |
| `isAvailable?`            | `(ctx: NodeAvailableContext) => boolean`                | Méthode pour déterminer si le nœud est disponible dans l'environnement actuel          |

**Types associés**

```ts
export type NodeAvailableContext = {
  workflow: object;
  upstream: object;
  branchIndex: number;
};
```

- Si `useVariables` n'est pas défini, cela signifie que ce type de nœud ne fournit pas de fonction pour récupérer les valeurs, et les données de résultat de ce type de nœud ne peuvent pas être sélectionnées dans le flux. Si la valeur résultante est singulière (non sélectionnable), un contenu statique exprimant les informations correspondantes peut être retourné (voir le [code source du nœud de calcul](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow/src/client/nodes/calculation.tsx#L68)). Si la sélection est requise (par exemple, une propriété dans un objet), un composant de sélection personnalisé peut être fourni (voir le [code source du nœud de création de données](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow/src/client/nodes/create.tsx#L41)).
- `Component` : Composant de rendu personnalisé pour le nœud, utilisé lorsque le rendu par défaut du nœud n'est pas suffisant, permettant une personnalisation complète de la vue du nœud. Par exemple, pour fournir plus de boutons d'opération ou d'autres éléments interactifs pour le nœud de début d'un type de branche, cette méthode doit être utilisée (voir le [code source de la branche parallèle](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow-parallel/src/client/ParallelInstruction.tsx)).
- `useInitializers` : Utilisé pour fournir des méthodes pour les blocs d'initialisation, par exemple, dans un nœud manuel, il peut initialiser les blocs utilisateur pertinents en fonction du nœud en amont. Si cette méthode est fournie, elle sera disponible pendant le bloc d'initialisation dans l'interface de configuration du nœud manuel (voir le [code source du nœud de création de données](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow/src/client/nodes/create.tsx#L71)).
- `isAvailable` : Principalement utilisé pour déterminer si le nœud peut être utilisé (ajouté) dans l'environnement actuel. L'environnement actuel comprend le flux de travail actuel, les nœuds en amont, et l'index de la branche actuelle.
