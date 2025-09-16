# Как активировать движок Federated в MySQL

По умолчанию модуль Federated в MySQL отключен. Для его включения необходимо изменить конфигурационный файл my.cnf. Для версии в Docker можно использовать volumes для обработки расширений:

## Настройка для Docker

```yml
mysql:
  image: mysql:8.1.0
  volumes:
    - ./storage/mysql-conf:/etc/mysql/conf.d
  environment:
    MYSQL_DATABASE: nocobase
    MYSQL_USER: nocobase
    MYSQL_PASSWORD: nocobase
    MYSQL_ROOT_PASSWORD: nocobase
  restart: always
  networks:
    - nocobase
```

## Создание конфигурационного файла

1. Создайте файл `./storage/mysql-conf/federated.cnf` со следующим содержимым:

```conf
[mysqld]
federated
```

## Перезапуск MySQL

Выполните команду для перезапуска контейнера MySQL:

```bash
docker compose up -d mysql
```

## Проверка активации

Чтобы убедиться, что движок Federated активирован, выполните SQL-запрос:

```sql
show engines
```

Результат должен показывать поддержку Federated:

![Проверка движка](https://static-docs.nocobase.com/ac5d97cf902ad164e141633a41a23e46.png)

После этих действий движок Federated будет доступен для использования в вашей базе данных MySQL.
