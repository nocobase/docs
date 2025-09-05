# Как включить Federated Engine в MySQL

Модуль Federated по умолчанию отключен в MySQL. Для его активации необходимо изменить конфигурацию my.cnf. Если вы используете Docker-версию, настройку можно выполнить через volumes:

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

1. Создайте файл `./storage/mysql-conf/federated.cnf` со следующим содержимым:

```conf
[mysqld]
federated
```

2. Перезапустите MySQL:

```bash
docker compose up -d mysql
```

3. Проверьте активацию Federated Engine:

```sql
show engines
```

![Проверка активации Federated](https://static-docs.nocobase.com/ac5d97cf902ad164e141633a41a23e46.png)
