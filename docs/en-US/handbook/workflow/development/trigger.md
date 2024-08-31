# **Extend Trigger Types**

Every workflow must be configured with a specific trigger that serves as the entry point for executing the process.

Trigger types typically correspond to specific system events. Throughout an application's lifecycle, any event that offers a subscription option can be defined as a trigger type. Examples include receiving requests, data table operations, or scheduled tasks.

Trigger types are registered in the plugin's trigger registry using unique string identifiers. The workflow plugin comes with several built-in triggers:

- `'collection'`: Triggered by data table operations.
- `'schedule'`: Triggered by scheduled tasks.
- `'action'`: Triggered by post-operation events.

When extending trigger types, it's essential to ensure that each identifier is unique. The server side should handle the registration for subscribing and unsubscribing to triggers, while the client side should provide the corresponding configuration interface.

## **Server-Side Implementation**

Any custom trigger should extend the `Trigger` base class and implement the `on` and `off` methods, which manage the subscription and unsubscription to specific system events. The `on` method must invoke `this.workflow.trigger()` within the event callback to trigger the workflow. The `off` method should ensure proper cleanup during unsubscription.

The `this.workflow` property refers to the workflow plugin instance, passed into the `Trigger` base class during construction.

```ts
import { Trigger } from '@nocobase/plugin-workflow';

class MyTrigger extends Trigger {
  timer: NodeJS.Timeout;

  on(workflow) {
    // Register event
    this.timer = setInterval(() => {
      // Trigger workflow
      this.workflow.trigger(workflow, { date: new Date() });
    }, workflow.config.interval ?? 60000);
  }

  off(workflow) {
    // Unregister event
    clearInterval(this.timer);
  }
}
```

Next, register the trigger instance with the workflow engine in the plugin that extends the workflow:

```ts
import WorkflowPlugin from '@nocobase/plugin-workflow';

export default class MyPlugin extends Plugin {
  load() {
    // Get workflow plugin instance
    const workflowPlugin = this.app.pm.get(WorkflowPlugin) as WorkflowPlugin;

    // Register trigger
    workflowPlugin.registerTrigger('interval', MyTrigger);
  }
}
```

Once the server is up and running, the `'interval'` trigger type will be available for addition and execution.

## **Client-Side Configuration**

On the client side, the primary task is to provide a configuration interface tailored to the specific settings required for each trigger type. Each trigger type should also be registered with the workflow plugin.

For instance, to configure the interval-based trigger mentioned earlier, define the `interval` configuration field in the form interface:

```ts
import { Trigger } from '@nocobase/workflow/client';

class MyTrigger extends Trigger {
  title = 'Interval Timer Trigger';
  // Fields of trigger config
  fieldset = {
    interval: {
      type: 'number',
      title: 'Interval',
      name: 'config.interval',
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      default: 60000,
    },
  };
}
```

Then, register this trigger type with the workflow plugin instance in the extending plugin:

```ts
import { Plugin } from '@nocobase/client';
import WorkflowPlugin from '@nocobase/plugin-workflow/client';

import MyTrigger from './MyTrigger';

export default class extends Plugin {
  // Modify the app instance here if necessary
  async load() {
    const workflow = this.app.pm.get(WorkflowPlugin) as WorkflowPlugin;
    workflow.registerTrigger('interval', MyTrigger);
  }
}
```

Once registered, the new trigger type will appear in the workflow configuration interface.

:::info{title=Tip}
Ensure that the trigger type identifier registered on the client side matches the one on the server side to avoid errors.
:::

For further details on defining trigger types, refer to the [Workflow API Reference](./api#pluginregisterTrigger) section.
