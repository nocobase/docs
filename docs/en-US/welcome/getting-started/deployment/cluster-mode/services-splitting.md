# Service Splitting

By default, all services in a NocoBase application run in a single Node.js instance. As features become more complex over time, some time-consuming services may affect overall performance. To improve performance, NocoBase supports running services on different nodes in cluster mode. This prevents a single service's performance issues from affecting the entire application’s responsiveness. It also allows specific services to be scaled horizontally to optimize resource usage.

When deployed in a cluster, NocoBase allows different services to run on different nodes. The diagram below illustrates this structure:

![20250803214857](https://static-docs.nocobase.com/20250803214857.png)

## How to Split Services

To split services across nodes, configure the `WORKER_MODE` environment variable as follows:

- `WORKER_MODE=<empty>`: Default mode, handles both requests and tasks. Fully compatible with non-cluster setups.
- `WORKER_MODE=!`: Only handles requests, no background tasks.
- `WORKER_MODE=workflow:process,async-task:process`: Only handles specified background tasks, does not process requests.
- `WORKER_MODE=*`: Handles all background tasks, no request handling.
- `WORKER_MODE=!,workflow:process`: Handles requests and specific background tasks.
- `WORKER_MODE=-`: Handles neither requests nor tasks (used in worker processes).

In Kubernetes (K8S), nodes with the same role can be configured using the same environment variable for easy horizontal scaling.

## Splittable Services

### Asynchronous Workflows

**Service KEY**: `workflow:process`

These workflows queue up for processing and do not require users to wait for a result. Heavy or frequent workflows should be assigned to dedicated nodes.

### Other User-Level Async Tasks

**Service KEY**: `async-task:process`

Includes tasks like async import/export. Dedicated nodes are recommended under heavy load or high concurrency.

## Configuration Examples

### Separate Roles for Each Node

For three nodes: `node1`, `node2`, and `node3`:

- `node1`: Handles only UI requests – `WORKER_MODE=!`
- `node2`: Handles only workflow tasks – `WORKER_MODE=workflow:process`
- `node3`: Handles only async tasks – `WORKER_MODE=async-task:process`

### Mixed Roles Across Nodes

For four nodes: `node1`, `node2`, `node3`, and `node4`:

- `node1` and `node2`: Handle requests – `WORKER_MODE=!` (with load balancing)
- `node3` and `node4`: Handle all background tasks – `WORKER_MODE=*`

## Development Guide

When developing plugins, resource-intensive services can be split using the following pattern:

1. Define a new service key (e.g., `my-plugin:process`) and document its use.
2. In the plugin backend, use `app.serving()` to determine if the current node should handle the service.

```javascript
const MY_PLUGIN_SERVICE_KEY = 'my-plugin:process';
// Inside plugin backend
if (this.app.serving(MY_PLUGIN_SERVICE_KEY)) {
  // Handle business logic
} else {
  // Skip handling
}
