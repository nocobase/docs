# Телеметрия - Prometheus

<PluginInfo name="telemetry-prometheus"></PluginInfo>

## Введение

Этот плагин преобразует данные в формате OpenTelemetry Protocol (OTLP) в формат Prometheus и предоставляет интерфейс для сбора метрик Prometheus.

## Установка

:::info{title=Примечание}
Это коммерческий плагин. Подробности см. на странице [Коммерческая версия NocoBase](https://www.nocobase.com/commercial).
:::

## Руководство пользователя

### Переменные окружения

Перед запуском NocoBase необходимо настроить следующие переменные окружения:

#### TELEMETRY_ENABLED

Установите значение `on`.

```bash
TELEMETRY_ENABLED=on
```

#### TELEMETRY_METRIC_READER

Добавьте `prometheus`.

```bash
TELEMETRY_METRIC_READER=prometheus
```

#### TELEMETRY_PROMETHEUS_SERVER

Определяет, запускать ли отдельный сервер:

- `off` - интерфейс сбора метрик будет доступен по `/api/prometheus:metrics`
- `on` - интерфейс сбора метрик будет доступен по `:port/metrics`

#### TELEMETRY_PROMETHEUS_PORT

Порт для отдельного сервера (если активирован). По умолчанию `9464`.

#### Связанные документы

- [Переменные окружения](../../welcome/getting-started/env.md#telemetry_enabled)

### Конфигурация Prometheus

Для отдельного сервера:

```yaml
scrape_configs:
  - job_name: 'nocobase'
    static_configs:
      - targets: ['localhost:9464']
```

Для внутреннего API:

```yaml
scrape_configs:
  - job_name: 'nocobase'
    metrics_path: '/api/prometheus:metrics'
    static_configs:
      - targets: ['localhost:13001']
```
