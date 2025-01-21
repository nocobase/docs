# Nœud JavaScript pour les flux de travail

Le **nœud JavaScript** dans les flux de travail permet aux utilisateurs d'exécuter des scripts Node.js personnalisés, offrant ainsi la flexibilité d'exécuter des logiques spécifiques au sein du flux de travail. Ces scripts peuvent recevoir des entrées du flux de travail et renvoyer des sorties qui peuvent être utilisées par les nœuds suivants.

## Étapes de Configuration

### Création d'un Nœud

Pour créer un nœud JavaScript, cliquez sur le bouton **plus (“+”)** dans l'interface de configuration du flux de travail :

![Ajouter un nœud de script](https://static-docs.nocobase.com/20241007122632.png)

### Configuration du Nœud

Une fois le nœud créé, configurez-le comme suit :

![Configuration du nœud](https://static-docs.nocobase.com/20241007122825.png)

#### Paramètres

Vous pouvez transmettre des variables ou des valeurs statiques dans le script via des **paramètres**. Les paramètres permettent de rendre les variables du flux de travail accessibles dans le script. Ici, `name` est le nom de la variable du paramètre et `value` est la valeur correspondante de ce paramètre provenant du contexte du flux de travail.

#### Contenu du Script

Le contenu du script représente une fonction qui contient votre code JavaScript personnalisé. Utilisez `return` pour fournir une sortie qui pourra être utilisée par les nœuds suivants. Vous pouvez utiliser la plupart des fonctionnalités de Node.js, mais certaines restrictions s'appliquent.

Testez votre script en utilisant le bouton **Test** situé sous l'éditeur de script. Cela ouvrira une boîte de dialogue de test pour simuler l'exécution et afficher les journaux ou les erreurs.

![Boîte de dialogue de test](https://static-docs.nocobase.com/20241007153631.png)

#### Paramètre de délai d'attente

Définissez un délai d'attente pour le script en millisecondes. Une valeur de `0` signifie qu'il n'y a pas de délai d'attente, ce qui permet au script de s'exécuter indéfiniment.

#### Continuer le flux de travail en cas d'erreur

Si activé, le flux de travail continuera même si le script rencontre une erreur ou un délai d'attente.

> **Remarque** : Lorsque le script échoue, il ne renverra pas de valeur et la sortie du nœud contiendra le message d'erreur. Si les nœuds suivants dépendent du résultat, traitez l'erreur avec soin.

## Fonctionnalités du Nœud JavaScript

### Version de Node.js

Le nœud JavaScript utilise la même version de Node.js que l'application principale.

### Prise en charge des modules

Les modules disponibles dans le flux de travail peuvent être utilisés dans le script, y compris ceux installés dans `node_modules`. Les modules doivent être déclarés dans la variable d'environnement `WORKFLOW_SCRIPT_MODULES`. Par exemple :

```ini
WORKFLOW_SCRIPT_MODULES=crypto,timers,lodash,dayjs
```

> **Remarque** : Les modules non déclarés dans `WORKFLOW_SCRIPT_MODULES` ne peuvent pas être utilisés. Cela permet aux administrateurs de contrôler les modules accessibles, réduisant ainsi le risque de permissions excessives.

### Variables globales

Certaines variables globales comme `global`, `process`, `__dirname` et `__filename` ne sont **pas prises en charge** dans l'environnement du script.

```js
console.log(global); // Erreur : "global is not defined"
```

### Paramètres d'entrée

Les paramètres configurés dans le flux de travail sont accessibles en tant que variables globales dans le script. Seuls les types de base (booléen, nombre, chaîne, objet, tableau) peuvent être passés comme paramètres. Les types complexes, comme les instances de classes personnalisées, ne sont pas pris en charge.

### Valeurs de retour

Pour renvoyer des sorties depuis le script, utilisez l'instruction `return` :

```js
return 123;
```

Si aucune instruction `return` n'est présente, le nœud n'aura pas de sortie.

### Sortie (Journaux)

Vous pouvez enregistrer des messages dans le script en utilisant `console.log()`. Ces journaux seront enregistrés dans les fichiers de journaux du flux de travail.

```js
console.log('Le flux de travail est en cours d\'exécution');
```

### Opérations asynchrones

Le nœud JavaScript prend en charge les opérations asynchrones en utilisant `async`/`await` et l'objet `Promise`.

```js
async function test() {
  return Promise.resolve(1);
}

const value = await test();
return value;
```

### Minuteurs

Utilisez `setTimeout`, `setInterval` et `setImmediate` du package `timers` de Node.js pour gérer des opérations chronométrées.

```js
const { setTimeout, setInterval, setImmediate } = require('timers');

async function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

await sleep(1000);
return 123;
```

Ces fonctionnalités permettent de créer des flux de travail complexes capables d'exécuter des logiques personnalisées selon les besoins de chaque scénario.
