# API Key

## Введение

## Установка

## Инструкции по использованию

http://localhost:13000/admin/settings/api-keys/configuration

![](https://static-docs.nocobase.com/d64ccbdc8a512a0224e9f81dfe14a0a8.png)

### Добавить API Key

![](https://static-docs.nocobase.com/46141872fc0ad9a96fa5b14e97fcba12.png)

**Примечания**

- Добавленный API-ключ предназначен для текущего пользователя, а роль — это роль, к которой принадлежит текущий пользователь
- Убедитесь, что переменная среды `APP_KEY` настроена и остается конфиденциальной. Если APP_KEY изменится, все добавленные API-ключи станут недействительными.

### Как настроить APP_KEY

Для версии docker измените файл docker-compose.yml

```diff
services:
app:
image: nocobase/nocobase:main
environment:
+ - APP_KEY=4jAokvLKTJgM0v_JseUkJ
```

Для исходного кода или установки create-nocobase-app вы можете напрямую изменить APP_KEY в файле .env

```bash
APP_KEY=4jAokvLKTJgM0v_JseUkJ
```
