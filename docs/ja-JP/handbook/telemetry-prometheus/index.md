# 遥測 - Prometheus

<PluginInfo name="telemetry-prometheus" commercial="true"></PluginInfo>

## 紹介

このプラグインは、<a href="https://opentelemetry.io/docs/specs/otlp/" target="_blank">OpenTelemetry</a> プロトコル (OTLP) データを Prometheus 形式に変換し、Prometheus がメトリック (Metric) データを取得できるインターフェースを提供します。

## 使用マニュアル

### 環境変数

NocoBase を起動する前に、環境変数を設定する必要があります。

#### TELEMETRY_ENABLED

`on` に設定します。

```bash
TELEMETRY_ENABLED=on
```

#### TELEMETRY_METRIC_READER

`prometheus` を追加します。

```bash
TELEMETRY_METRIC_READER=prometheus
```

#### TELEMETRY_PROMETHEUS_SERVER

独立したサービスを起動するかどうかを設定します。

- `off`：取得インターフェースは `/api/prometheus/metrics`。
- `on`：取得インターフェースは `:port/metrics`。

#### TELEMETRY_PROMETHEUS_PORT

独立したサービスを起動する際のポート番号。デフォルトは `9464` です。

#### 関連ドキュメント

- [環境変数](../../welcome/getting-started/env.md#telemetry_enabled)

### Prometheus 設定

独立したサーバーの場合の設定例：

```yaml
scrape_configs:
  - job_name: 'nocobase'
    static_configs:
      - targets: ['localhost:9464']
```

内部 API の設定例：

```yaml
scrape_configs:
  - job_name: 'nocobase'
    metrics_path: '/api/prometheus/metrics'
    static_configs:
      - targets: ['localhost:13001']
```

