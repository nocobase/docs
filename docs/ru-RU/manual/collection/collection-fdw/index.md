# Подключение внешних таблиц данных

## Введение

Плагин для подключения удаленных таблиц данных реализован на основе технологии Foreign Data Wrapper. В настоящее время поддерживаются базы данных MySQL и PostgreSQL.

### MySQL

MySQL использует механизм `federated`, который требует активации и поддерживает подключение к удаленным MySQL и совместимым СУБД, таким как MariaDB. Подробнее см. документацию [Federated Storage Engine](https://dev.mysql.com/doc/refman/8.0/en/federated-storage-engine.html).

### PostgreSQL

В PostgreSQL подключение к различным типам удаленных данных осуществляется через расширения `fdw`. В настоящее время поддерживаются:

- [postgres_fdw](https://www.postgresql.org/docs/current/postgres-fdw.html) - подключение к удаленным PostgreSQL
- [mysql_fdw (в разработке)](https://github.com/EnterpriseDB/mysql_fdw) - подключение к MySQL
- Другие типы расширений FDW см. в [PostgreSQL Foreign Data Wrappers](https://wiki.postgresql.org/wiki/Foreign_data_wrappers). Для интеграции с NocoBase требуется реализация соответствующих интерфейсов.

## Установка

**Предварительные требования:**
- Локальная MySQL (используемая NocoBase) должна иметь активированный `federated` ([инструкция](./enable-federated.md))

Затем установите и активируйте плагин через менеджер плагинов:

![Установка плагина](https://static-docs.nocobase.com/f84276c5712851fb3ff33af3f1ff0f59.png)

## Руководство пользователя

В разделе "Управление таблицами > Создать таблицу" выберите "Подключить внешние данные":

![Подключение внешних данных](https://static-docs.nocobase.com/029d946a6d067d1c35a39755219d623c.png)

В выпадающем списке "Сервис БД" выберите существующее подключение или создайте новое:

![Сервис БД](https://static-docs.nocobase.com/766271708a911950a5599d60d6be4a4d.png)

Создание сервиса БД:

![Создание сервиса БД](https://static-docs.nocobase.com/1e357216e04cc4f200bd6212827281c8.png)

После выбора сервиса БД укажите нужную таблицу в выпадающем списке "Удаленная таблица":

![Выбор таблицы](https://static-docs.nocobase.com/e91fd6152b52b4fc01b3808053cc8dc4.png)

Настройте поля:

![Настройка полей](https://static-docs.nocobase.com/e618fecc5fe327f6a495e61405e5f040.png)

При изменении структуры удаленной таблицы можно выполнить "Синхронизацию с удаленной таблицей":

![Синхронизация](https://static-docs.nocobase.com/3751a9a39f933889fb3fcc4d85a6f4ad.png)

Процесс синхронизации:

![Процесс синхронизации](https://static-docs.nocobase.com/13f18200e31ea223fdd8dadaff1e9d28.png)

Отображение в интерфейсе:

![Отображение в интерфейсе](https://static-docs.nocobase.com/368fca27a99277d9360ca81350949357.png)
