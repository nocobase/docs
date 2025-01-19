# Telemetry - Prometheus

<PluginInfo name="telemetry-prometheus"></PluginInfo>

## Introduction

This plugin is used to convert OpenTelemetry protocol (OTLP) data into Prometheus format and expose an interface for Prometheus to scrape metric data.

## Installation

:::info{title=Note}
This is a commercial plugin. Please see [NocoBase commercial version](https://www.nocobase.com/commercial) for details.
:::

## User Manual

### Environment Variables

Configure the environment variables before starting NocoBase.

#### TELEMETRY_ENABLED

Set to `on`.

```bash
TELEMETRY_ENABLED=on
```

#### TELEMETRY_METRIC_READER

Add `prometheus`.

```bash
TELEMETRY_METRIC_READER=prometheus
```

#### TELEMETRY_PROMETHEUS_SERVER

Whether to start a separate server.

- `off`. The scraping interface is `/api/prometheus:metrics`.
- `on`. The scraping interface is `:port/metrics`.

#### TELEMETRY_PROMETHEUS_PORT

The port for the separate server when activated. Default `9464`.

#### Related Documents

- [Environment Variables](../../welcome/getting-started/env.md#telemetry_enabled)

### Prometheus Configuration

Separate server

```yaml
scrape_configs:
  - job_name: 'nocobase'
    static_configs:
      - targets: ['localhost:9464']
```

Internal API

```yaml
scrape_configs:
  - job_name: 'nocobase'
    metrics_path: '/api/prometheus:metrics'
    static_configs:
      - targets: ['localhost:13001']
```