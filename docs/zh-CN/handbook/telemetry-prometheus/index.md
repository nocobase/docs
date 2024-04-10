# 遥测 - Prometheus

<PluginInfo name="telemetry-prometheus"></PluginInfo>

## 介绍

本插件用于将 <a href="https://opentelemetry.io/docs/specs/otlp/" target="_blank">OpenTelemetry</a> 协议 (OTLP) 数据转换成 Prometheus 格式，并暴露接口供 Prometheus 抓取指标 (Metric) 数据。

## 安装

:::info{title=提示}
该插件为商业插件，请查看 [NocoBase 商业版本](https://cn.nocobase.com/commercial-cn)了解详情。
:::

## 使用手册

### 环境变量

启动 NocoBase 前，需要先配置好环境变量。

#### TELEMETRY_ENABLED

配置为 `on`.

```bash
TELEMETRY_ENABLED=on
```

#### TELEMETRY_METRIC_READER

添加 `prometheus`.

```bash
TELEMETRY_METRIC_READER=prometheus
```

#### TELEMETRY_PROMETHEUS_SERVER

是否启动单独的服务。

- `off`. 抓取接口为 `/api/prometheus:metrics`.
- `on`. 抓取接口为 `:port/metrics`.

#### TELEMETRY_PROMETHEUS_PORT

启动单独服务时的服务端口。默认 `9464`.

#### 相关文档

- [环境变量](../../welcome/getting-started/env.md#telemetry_enabled)

### Prometheus 配置

单独 server

```yaml
scrape_configs:
  - job_name: 'nocobase'
    static_configs:
      - targets: ['localhost:9464']
```

内部 API

```yaml
scrape_configs:
  - job_name: 'nocobase'
    metrics_path: '/api/prometheus:metrics'
    static_configs:
      - targets: ['localhost:13001']
```
