# Étendre le type de nœud

Le type d'un nœud représente essentiellement une commande d'opération, où différentes commandes correspondent à différentes opérations effectuées lors d'un workflow.

Tout comme pour les déclencheurs, l'extension du type d'un nœud implique à la fois des composants backend et frontend. Le backend est responsable de l'implémentation de la logique des commandes enregistrées, tandis que le frontend fournit l'interface de configuration des paramètres liés au nœud où la commande réside.

## Backend

### La commande de nœud la plus simple

Le cœur d'une commande est une fonction, ce qui signifie que la méthode `run` dans la classe de commande doit être implémentée pour exécuter la logique de la commande. Cette fonction peut effectuer toutes les opérations nécessaires, telles que des opérations sur la base de données, des opérations sur des fichiers ou des appels à des API tierces.

Toutes les commandes doivent être dérivées de la classe de base `Instruction`. La commande la plus simple n'a besoin d'implémenter qu'une fonction `run` :

```ts
import { Instruction, JOB_STATUS } from '@nocobase/plugin-workflow';

export class MyInstruction extends Instruction {
  run(node, input, processor) {
    console.log('my instruction runs!');
    return {
      status: JOB_STATUS.RESOLVED,
    };
  }
}
```

Ensuite, enregistrez cette commande avec le plugin de workflow :

```ts
export default class MyPlugin extends Plugin {
  load() {
    // obtenir l'instance du plugin de workflow
    const workflowPlugin = this.app.getPlugin<WorkflowPlugin>(WorkflowPlugin);

    // enregistrer l'instruction
    workflowPlugin.registerInstruction('my-instruction', MyInstruction);
  }
}
```

La valeur de statut (`status`) dans l'objet retourné par la commande est obligatoire et doit être l'une des valeurs de la constante `JOB_STATUS`. Cette valeur déterminera le flux suivant du processus après l'exécution du nœud. En général, on utilise `JOB_STATUS.RESOLVED`, ce qui indique que le nœud a été exécuté avec succès et que les nœuds suivants continueront à s'exécuter. Si des résultats doivent être sauvegardés plus tôt, vous pouvez également appeler la méthode `processor.saveJob` et retourner l'objet généré par cette méthode. L'exécuteur générera un enregistrement du résultat d'exécution basé sur cet objet.

### Valeurs de résultat du nœud

S'il existe un résultat d'exécution spécifique, en particulier des données destinées à être utilisées par des nœuds suivants, celles-ci peuvent être retournées via l'attribut `result` et sauvegardées dans l'objet de tâche du nœud :

```ts
import { Instruction, JOB_STATUS } from '@nocobase/plugin-workflow';

export class RandomStringInstruction extends Instruction {
  run(node, input, processor) {
    // configuration personnalisée depuis le nœud
    const { digit = 1 } = node.config;
    const result = `${Math.round(10 ** digit * Math.random())}`.padStart(
      digit,
      '0',
    );
    return {
      status: JOB_STATUS.RESOLVED,
      result,
    };
  }
};
```

Le `node.config` est l'élément de configuration du nœud, qui peut être toute valeur requise et sera sauvegardé sous forme de champ de type `JSON` dans l'enregistrement correspondant du nœud dans la base de données.

### Gestion des erreurs de commande

Si des exceptions peuvent se produire pendant l'exécution, elles peuvent être capturées à l'avance et un statut d'échec peut être retourné :

```ts
import { JOB_STATUS } from '@nocobase/plugin-workflow';

export const errorInstruction = {
  run(node, input, processor) {
    try {
      throw new Error('exception');
    } catch (error) {
      return {
        status: JOB_STATUS.ERROR,
        result: error,
      };
    }
  },
};
```

Si des exceptions prévisibles ne sont pas capturées, le moteur de workflow les capturera automatiquement et retournera un statut d'erreur pour éviter des plantages du programme dus à des exceptions non capturées.

### Nœuds asynchrones

Lorsqu'il est nécessaire de contrôler le flux ou d'effectuer des opérations I/O asynchrones (longues), la méthode `run` peut retourner un objet avec un `status` de `JOB_STATUS.PENDING`, indiquant à l'exécuteur qu'il doit attendre (suspendre) jusqu'à ce qu'une opération asynchrone externe soit terminée, après quoi le moteur de workflow sera notifié pour continuer l'exécution. Si un statut en attente est retourné dans la fonction `run`, la commande doit implémenter la méthode `resume` ; sinon, le workflow ne pourra pas reprendre.

```ts
import { Instruction, JOB_STATUS } from '@nocobase/plugin-workflow';

export class PayInstruction extends Instruction {
  async run(node, input, processor) {
    // le travail pourrait être créé d'abord via le processeur
    const job = await processor.saveJob({
      status: JOB_STATUS.PENDING,
    });

    const { plugin } = processor;
    // effectuer le paiement de manière asynchrone
    paymentService.pay(node.config, (result) => {
      // notifier le processeur pour reprendre le travail
      return plugin.resume(job.id, result);
    });

    // retourner l'instance du travail créée
    return job;
  }

  resume(node, job, processor) {
    // vérifier le statut du paiement
    job.set('status', job.result.status === 'ok' ? JOB_STATUS.RESOLVED : JOB_STATUS.REJECTED);
    return job;
  }
};
```

Le `paymentService` fait référence à un service de paiement, et le workflow reprend la tâche correspondante après avoir été déclenché par un rappel du service, tandis que le processus actuel sort en premier. Après cela, le moteur de workflow crée un nouveau processeur, confiant la tâche à la méthode `resume` du nœud pour continuer l'exécution du nœud précédemment suspendu.

:::info{title=Astuce}
Les "opérations asynchrones" mentionnées ici ne sont pas les mêmes que les fonctions `async` en JavaScript, mais font référence aux interactions avec d'autres systèmes externes où certaines opérations peuvent ne pas renvoyer immédiatement. Par exemple, un service de paiement peut nécessiter d'attendre une notification ultérieure pour connaître le résultat.
:::

### Statut du Résultat du Nœud

Le statut d'exécution d'un nœud affecte le succès ou l'échec de l'ensemble du processus. En général, en l'absence de branches, un échec de nœud entraînera directement l'échec de l'ensemble du processus. Le scénario le plus courant est qu'une fois qu'un nœud est exécuté avec succès, le nœud suivant dans la table des nœuds continue jusqu'à ce qu'il n'y ait plus de nœuds suivants, ce qui entraîne la fin du workflow avec un statut réussi.

Si un nœud retourne un statut d'échec pendant l'exécution, le moteur le gérera différemment selon les deux situations suivantes :

1. Si le nœud retournant un statut d'échec se trouve dans le processus principal et non dans une branche ouverte par un nœud en amont, l'ensemble du processus principal sera considéré comme un échec, et le processus se terminera.
   
2. Si le nœud retournant un statut d'échec se trouve dans une branche, la responsabilité de déterminer l'état suivant du processus est déléguée au nœud ayant ouvert la branche. La logique interne de ce nœud décidera de l'état suivant du processus, retraçant récursivement jusqu'au processus principal.

Finalement, l'état final du processus entier sera déterminé par le nœud dans le processus principal. Si le nœud dans le processus principal retourne un échec, l'ensemble du processus se termine avec un statut d'échec.

Si un nœud retourne un statut "pending" après son exécution, l'ensemble du processus d'exécution sera temporairement suspendu, attendant un événement défini par le nœud correspondant pour reprendre le processus. Par exemple, dans un [nœud manuel](../manual/nodes/manual), le processus se met en pause à ce nœud avec un statut "pending", attendant une intervention manuelle pour décider si le processus doit continuer. Si le statut saisi par l'utilisateur est "approuvé", les nœuds suivants continueront ; sinon, la logique d'échec sera traitée comme décrit précédemment.

Pour plus de statuts de retour de commande, consultez la section [Référence de l'API Workflow](./api#JOB_STATUS).

### Sortie Anticipée

Dans certains processus spéciaux, il peut être nécessaire de terminer directement le processus dans un nœud particulier, ce qui peut être fait en retournant `null`. Cela indique que le processus actuel est quitté et que les nœuds suivants ne continueront pas à s'exécuter.

Cette situation est plus courante dans les nœuds de contrôle de flux, tels que dans le [nœud de branche parallèle](../manual/nodes/parallel) (voir [référence de code](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-workflow-parallel/src/server/ParallelInstruction.ts#L87)). Le processus du nœud actuel se termine, mais de nouveaux processus sont ouverts pour chaque sous-branche et continuent à s'exécuter.

:::warn{title=Astuce}
La planification des processus de branche avec des nœuds étendus est complexe et nécessite une gestion minutieuse et des tests approfondis.
:::

### En savoir plus

Pour une définition détaillée de chaque paramètre dans la définition des types de nœuds, consultez la section [Référence de l'API Workflow](./api#instruction).

## Frontend

Tout comme pour les déclencheurs, le formulaire de configuration d'une commande (type de nœud) doit être implémenté sur le frontend.

### La commande de nœud la plus simple

Toutes les commandes doivent être dérivées de la classe de base `Instruction`, avec des propriétés et des méthodes pertinentes utilisées pour configurer et utiliser le nœud.

Par exemple, nous devons fournir une interface de configuration pour le nœud de type chaîne de chiffres aléatoires (`randomString`) défini sur le backend. Ce nœud a un élément de configuration `digit` représentant le nombre de chiffres dans le nombre aléatoire. Dans le formulaire de configuration, nous utilisons une zone de saisie numérique pour accepter l'entrée de l'utilisateur.

```tsx | pure
import WorkflowPlugin, { Instruction, VariableOption } from '@nocobase/workflow/client';

class MyInstruction extends Instruction {
  title = 'Chaîne de chiffres aléatoires';
  type = 'randomString';
  group = 'étendu';
  fieldset = {
    'digit': {
      type: 'number',
      title: 'Chiffre',
      name: 'digit',
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      'x-component-props': {
        min: 1,
        max: 10,
      },
      default: 6,
    },
  };
  useVariables(node, options): VariableOption {
    return {
      value: node.key,
      label: node.title,
    };
  }
}

export default class MyPlugin extends Plugin {
  load() {
    // obtenir l'instance du plugin de workflow
    const workflowPlugin = this.app.getPlugin<WorkflowPlugin>(WorkflowPlugin);

    // enregistrer l'instruction
    workflowPlugin.registerInstruction('log', LogInstruction);
  }
}
```

:::info{title=Astuce}
L'identifiant du type de nœud enregistré côté client doit être cohérent avec celui côté serveur ; sinon, des erreurs se produiront.
:::

### Fournir les Résultats des Nœuds en tant que Variables

Remarquez la méthode `useVariables` dans l'exemple ci-dessus. Si le résultat d'un nœud (partie `result`) doit être utilisé comme une variable par les nœuds suivants, cette méthode doit être implémentée dans la classe dérivée de la commande, retournant un objet conforme au type `VariableOption`. Cet objet décrit la structure du résultat du nœud, fournissant une correspondance de noms de variables pour la sélection et l'utilisation dans les nœuds suivants.

Le type `VariableOption` est défini comme suit :

```ts
export type VariableOption = {
  value?: string;
  label?: string;
  children?: VariableOption[] | null;
  [key: string]: any;
};
```

L'attribut principal est `value`, représentant la valeur du chemin segmenté du nom de la variable, `label` pour l'affichage sur l'interface, et `children` pour représenter une structure de variable multi-niveaux lorsque le résultat du nœud est un objet profond.

Une variable utilisable est exprimée en interne dans le système sous forme de chaîne de modèle de chemin séparée par un `.`. Par exemple, `{{jobsMapByNodeKey.2dw92cdf.abc}}`. Ici, `$jobsMapByNodeKey` représente l'ensemble des résultats de tous les nœuds (défini en interne, aucune gestion à faire), `2dw92cdf` est la `key` du nœud, et `abc` est un attribut personnalisé dans l'objet résultat du nœud.

De plus, puisque le résultat du nœud peut également être une valeur simple, le premier niveau **doit** être la description du nœud :

```ts
{
  value: node.key,
  label: node.title,
}
```

Autrement dit, le premier niveau est la `key` et le titre du nœud. Par exemple, dans le [référence de code](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-workflow/src/client/nodes/calculation.tsx#L77) du nœud de calcul, les options sur l'interface lorsque l'on utilise le résultat du nœud de calcul sont les suivantes :

![Résultat du Nœud de Calcul](https://static-docs.nocobase.com/20240514230014.png)

Lorsque le résultat du nœud est un objet complexe, vous pouvez utiliser `children` pour continuer à décrire les attributs de niveau profond. Par exemple, une commande personnalisée retourne les données JSON suivantes :

```json
{
  "message": "ok",
  "data": {
    "id": 1,
    "name": "test"
  }
}
```

La méthode `useVariables` pourrait alors retourner :

```ts
useVariables(node, options): VariableOption {
  return {
    value: node.key,
    label: node.title,
    children: [
      {
        value: 'message',
        label: 'Message',
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'id',
            label: 'ID',
          },
          {
            value: 'name',
            label: 'Name',
          },
        ],
      },
    ],
  };
}
```

De cette manière, l'interface suivante peut être utilisée pour sélectionner parmi les variables dans les nœuds suivants :

![Variables Résultantes Mappées](https://static-docs.nocobase.com/20240514230103.png)

:::info{title="Astuce"}
Lorsqu'une structure dans le résultat est un tableau d'objets profond, `children` peut également être utilisé pour décrire le chemin, mais il ne peut pas contenir d'indices de tableau. En effet, dans le traitement des variables de workflow de NocoBase, la description du chemin de variable pour les tableaux d'objets est automatiquement aplatie en un tableau de valeurs profondes, et les indices de tableau ne peuvent pas être utilisés pour accéder à une valeur spécifique. Vous pouvez vous référer à la section "Workflow : Utilisation Avancée" dans [Variables Avancées](../manual/advanced#Using Variables).
:::

### En savoir plus

Pour une définition détaillée de chaque paramètre dans la définition des types de nœuds, consultez la section [Référence de l'API Workflow](./api#instruction-1).
