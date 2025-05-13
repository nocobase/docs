# Cluster Mode

<PluginInfo licenseBundled="enterprise" plugins="pubsub-adapter-redis,lock-adapter-redis"></PluginInfo>

Starting from version v1.6.0, NocoBase supports running applications in cluster mode. When an application runs in cluster mode, its performance in handling concurrent accesses can be improved through multiple instances and using a multi-core mode.

## System Architecture

![20241231010814](https://static-docs.nocobase.com/20241231010814.png)

### Architectural Components

The current cluster mode is focused solely on application instances. Other system components in the distributed architecture can be selected by the operations personnel of different teams according to their operational requirements, as long as they comply with the current constraints.

#### Application Cluster

The application cluster is a collection of instances of NocoBase applications, where each instance can be an independent node or multiple application processes running on a single machine in multi-core mode, or a combination of both.

#### Database

Since the current cluster mode only targets application instances, the database currently only supports a single node. For setups such as master-slave databases, it must be implemented through middleware independently, ensuring transparency to the NocoBase application.

#### Caching, Synchronization Messages, and Distributed Locks

The NocoBase cluster mode relies on middleware such as caching, synchronization messages, and distributed locks to achieve communication and coordination between clusters. Currently, Redis is preliminarily supported as middleware for these functionalities.

#### Load Balancing

The NocoBase cluster mode requires a load balancer to distribute requests and perform health checks and failover for application instances. This part should be selected and configured according to the operations needs of the team.

## Deployment Steps

### Infrastructure Preparation

#### Load Balancer

Taking a self-built Nginx as an example, add the following content to the configuration file:

```
upstream myapp {
    # ip_hash; # Can be used for session persistence, once enabled, requests from the same client will always be sent to the same backend server.
    server 172.31.0.1:13000; # Internal node 1
    server 172.31.0.2:13000; # Internal node 2
    server 172.31.0.3:13000; # Internal node 3
}

server {
    listen 80;

    location / {
        # Use the defined upstream for load balancing
        proxy_pass http://myapp;
        # ... other configurations
    }
}
```

This means that requests are reverse proxied and distributed to different server nodes for processing. The configurations for load balancing middleware provided by other cloud service providers can be referenced in the specific configuration documentation provided by them.

#### Redis Service

Start a Redis service within the cluster's internal network (or k8s). Alternatively, enable separate Redis services based on different functionalities (caching, synchronization messages, and distributed locks).

#### Local Storage (Optional)

If local storage is used, in a multi-node mode, it should be mounted as a local storage directory to support shared access across multiple nodes. Otherwise, local storage will not automatically synchronize and cannot be used properly.

If not using local storage, after the application starts, the cloud service-based file storage space must be set as the default file storage space, and the application’s logo (or other files) should be migrated to the cloud storage space.

### Related Plugin Preparation

| Function | Plugin |
| --- | --- |
| Caching | Built-in |
| Synchronization Messages | @nocobase/plugin-pubsub-adapter-redis |
| Distributed Lock | @nocobase/plugin-lock-adapter-redis |

:::info{title=Tip}
Just like applications in single-node mode, as long as the respective environment variables for the commercial plugin service platform are configured, the application will automatically download the corresponding plugins after startup.
:::

### Environment Variable Configuration

In addition to the basic environment variables, the following environment variables must be configured consistently across all nodes.

#### Application Key

The key used for creating JWT Tokens during user login; it is recommended to use a random string.

```ini
APP_KEY=
```

#### Multi-core Mode

```ini
# Enable PM2 multi-core mode
# CLUSTER_MODE=max # Default is disabled and needs to be manually configured
```

#### Caching

```ini
# Cache adapter; must be set to redis in cluster mode (default is memory if not set)
CACHE_DEFAULT_STORE=redis

# Redis cache adapter connection address; must be actively set
CACHE_REDIS_URL=
```

#### Synchronization Messages

```ini
# Redis synchronization adapter connection address; default is redis://localhost:6379/0 if not set
PUBSUB_ADAPTER_REDIS_URL=
```

#### Distributed Lock

```ini
# Lock adapter; must be set to redis in cluster mode (default is memory local lock if not set)
LOCK_ADAPTER_DEFAULT=redis

# Redis lock adapter connection address; default is redis://localhost:6379/0 if not set
LOCK_ADAPTER_REDIS_URL=
```

:::info{title=Tip}
Generally, the related adapters can all use the same Redis instance, but it’s best to distinguish by using different databases to avoid potential key conflict issues.

```ini
CACHE_REDIS_URL=redis://localhost:6379/0
PUBSUB_ADAPTER_REDIS_URL=redis://localhost:6379/1
LOCK_ADAPTER_REDIS_URL=redis://localhost:6379/2
```
:::

#### Enable Built-in Plugins

```ini
# Built-in plugins to be enabled
APPEND_PRESET_BUILT_IN_PLUGINS=lock-adapter-redis,pubsub-adapter-redis
```

### Start the Application

When starting the application for the first time, you should first start one of the nodes and wait for the plugins to be installed and enabled before starting the other nodes.

## Upgrade or Maintenance

When it is necessary to upgrade the NocoBase version or enable/disable plugins, refer to this process.

:::warning{title=Note}
In a cluster production environment, caution or prohibition is advised when using features such as plugin management and version upgrades.

NocoBase has not yet implemented online upgrades for the cluster version. To ensure data consistency, services need to be paused during the upgrade process.
:::

### Stop Current Services

Stop all NocoBase application instances, middleware such as Redis, and redirect load-balanced traffic to a 503 status page.

### Backup Data

Before upgrading, it is strongly recommended to back up database data to prevent issues during the upgrade process.

### Update Version

Refer to [Docker Upgrade](../upgrading/docker-compose.md) to update the version of the NocoBase application image.

### Start Services

1. Restart the dependent middleware (Redis)
2. Start one node in the cluster and wait for the update to complete and start successfully
3. Verify functionality; if there are exceptions that cannot be resolved, you may roll back to the previous version
4. Start the other nodes
5. Redirect load-balanced traffic to the application cluster
