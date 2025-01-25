# Télémétrie - Prometheus

<PluginInfo name="telemetry-prometheus"></PluginInfo>

## Introduction

Ce plugin est utilisé pour convertir les données du protocole OpenTelemetry (OTLP) au format Prometheus et exposer une interface permettant à Prometheus de récupérer les données de métriques.

## Installation

:::info{title=Note}
Il s'agit d'un plugin commercial. Veuillez consulter la [version commerciale de NocoBase](https://www.nocobase.com/commercial) pour plus de détails.
:::

## Manuel de l'Utilisateur

### Variables d'Environnement

Configurez les variables d'environnement avant de démarrer NocoBase.

#### TELEMETRY_ENABLED

Définissez sur `on`.

```bash
TELEMETRY_ENABLED=on
```

#### TELEMETRY_METRIC_READER

Ajoutez `prometheus`.

```bash
TELEMETRY_METRIC_READER=prometheus
```

#### TELEMETRY_PROMETHEUS_SERVER

Indique si un serveur séparé doit être démarré.

- `off`. L'interface de récupération est `/api/prometheus:metrics`.
- `on`. L'interface de récupération est `:port/metrics`.

#### TELEMETRY_PROMETHEUS_PORT

Le port pour le serveur séparé lorsqu'il est activé. Par défaut `9464`.

#### Documents Associés

- [Variables d'Environnement](../../welcome/getting-started/env.md#telemetry_enabled)

### Configuration de Prometheus

Serveur séparé

```yaml
scrape_configs:
  - job_name: 'nocobase'
    static_configs:
      - targets: ['localhost:9464']
```

API interne

```yaml
scrape_configs:
  - job_name: 'nocobase'
    metrics_path: '/api/prometheus:metrics'
    static_configs:
      - targets: ['localhost:13001']
```
