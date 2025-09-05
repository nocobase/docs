# Внешний источник данных — Oracle

<PluginInfo commercial="true" name="data-source-external-oracle"></PluginInfo>

## Введение

Этот плагин позволяет использовать внешнюю базу данных Oracle в качестве источника данных. Он поддерживает версии Oracle >= 11g.

## Установка

### Установка клиента Oracle

Для версий сервера Oracle ниже 12.1 необходимо установить клиент Oracle.

![Установка клиента Oracle](https://static-docs.nocobase.com/20241204164359.png)

Пример для Linux:

```bash
apt-get update
apt-get install -y unzip wget libaio1
wget https://download.oracle.com/otn_software/linux/instantclient/1925000/instantclient-basic-linux.x64-19.25.0.0.0dbru.zip
unzip instantclient-basic-linux.x64-19.25.0.0.0dbru.zip -d /opt/
echo /opt/instantclient_19_25 > /etc/ld.so.conf.d/oracle-instantclient.conf
ldconfig
```

Если клиент не установлен, как описано выше, вам нужно будет указать путь к клиенту (для получения более подробной информации обратитесь к [документации node-oracledb](https://node-oracledb.readthedocs.io/en/latest/user_guide/initialization.html)).

![Конфигурация пути клиента Oracle](https://static-docs.nocobase.com/20241204165940.png)

### Установка плагина

Следуйте инструкциям в [Установка и обновление коммерческих плагинов](/welcome/getting-started/plugin).

## Примеры использования

Для получения подробных инструкций обратитесь к разделу [Источник данных / Внешняя база данных](/handbook/data-source-manager/external-database).
