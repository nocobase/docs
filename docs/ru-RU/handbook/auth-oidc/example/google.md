# Вход через Google

> Официальная документация: https://developers.google.com/identity/openid-connect/openid-connect

## Получение учетных данных OAuth 2.0 Google

1. Перейдите в [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Создайте учетные данные - ID клиента OAuth

![](https://static-docs.nocobase.com/0f2946c8643565ecc4ac13249882638c.png)

3. В интерфейсе конфигурации укажите URL перенаправления. Этот URL можно получить при добавлении аутентификатора в NocoBase (обычно имеет вид `http(s)://host:port/api/oidc:redirect`). Подробнее см. раздел [Руководство пользователя - Настройка](../index.md#configuration).

![](https://static-docs.nocobase.com/24078bf52ec966a16334894cb3d9d126.png)

## Добавление аутентификатора в NocoBase

1. Перейдите: Настройки плагинов → Аутентификация пользователей → Добавить → OIDC

![](https://static-docs.nocobase.com/0e4b1acdef6335aaee2139ae6629977b.png)

2. Заполните параметры аутентификатора в соответствии с инструкциями в разделе [Руководство пользователя - Настройка](../index.md#configuration).

