# JavaScript

<PluginInfo name="workflow-script" link="/handbook/workflow-script" commercial="true"></PluginInfo>

The JavaScript node allows users to execute custom Node.js scripts within a workflow. These scripts can utilize upstream workflow variables as parameters and return values that subsequent nodes can use.

The script supports most Node.js features but has some differences from the native execution environment. See the [Feature List](#feature-list) for details.

## User Manual

### Creating a Node

In the workflow configuration interface, click the plus (“+”) button in the workflow to add a “Script” node:

![20241007122632](https://static-docs.nocobase.com/20241007122632.png)

### Node Configuration

![20241007122825](https://static-docs.nocobase.com/20241007122825.png)

#### Parameters

Use parameters to pass variables or static values from the workflow context into the script, making them accessible in the script logic. `name` represents the parameter name, which will serve as the variable name in the script. `value` represents the parameter value, which can be a workflow variable or a constant.

#### Script Content

The script content functions as a single function where you can write any JavaScript code supported by the Node.js environment. Use the `return` statement to provide a value as the node's output, making it available as a variable for downstream nodes.

After writing the script, use the test button below the editor to open a test execution dialog. Populate parameters with static values for simulation. The dialog displays the return value and output (logs) after execution.

![20241007153631](https://static-docs.nocobase.com/20241007153631.png)

#### Timeout Setting

Set the timeout in milliseconds. A value of `0` means no timeout.

#### Continue Workflow on Error

If enabled, the workflow will continue even if the script encounters an error or timeout.

:::info{title="Note"}
When a script fails, it will not return a value, and the node's output will contain the error message. If subsequent nodes use the result variable from this script node, handle it carefully.
:::

## Feature List

### Node.js Version

The Node.js version matches the version used by the main application.

### Module Support

The script allows restricted use of modules, adhering to the CommonJS standard. Use the `require()` directive to import modules in your code.

It supports Node.js native modules and modules installed in `node_modules` (including dependencies used by NocoBase). To make modules available in the code, declare them in the application environment variable `WORKFLOW_SCRIPT_MODULES`. Separate multiple module names with commas, e.g.:

```ini
WORKFLOW_SCRIPT_MODULES=crypto,timers,lodash,dayjs
```

:::info{title="Note"}
Modules not declared in `WORKFLOW_SCRIPT_MODULES`, including native Node.js modules or installed `node_modules`, **cannot** be used in scripts. This strategy allows administrators to control the modules accessible to users, reducing the risk of excessive script permissions.
:::

### Global Variables

Global variables such as `global`, `process`, `__dirname`, and `__filename` are **not supported**.

```js
console.log(global); // will throw error: "global is not defined"
```

### Input Parameters

Parameters configured in the node are treated as global variables in the script and can be used directly. Only basic types such as `boolean`, `number`, `string`, `object`, and arrays are supported. `Date` objects are converted to ISO-formatted strings when passed. Other complex types, such as custom class instances, cannot be directly passed.

### Return Values

Use the `return` statement to return data of basic types (same as parameter rules) to the node as its output. If the code does not contain a `return` statement, the node will have no output value.

```js
return 123;
```

### Output (Logs)

**Supports** logging via `console`.

```js
console.log('hello world!');
```

The script node’s output will also be recorded in the corresponding workflow’s log files.

### Asynchronous Operations

**Supports** asynchronous functions using `async` and `await`. It also **supports** the global `Promise` object.

```js
async function test() {
  return Promise.resolve(1);
}

const value = await test();
return value;
```

### Timers

To use methods like `setTimeout`, `setInterval`, or `setImmediate`, import them from the Node.js `timers` package.

```js
const { setTimeout, setInterval, setImmediate, clearTimeout, clearInterval, clearImmediate } = require('timers');

async function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

await sleep(1000);

return 123;
```
