# Аутентификация: CAS

<PluginInfo commercial="true" name="auth-cas"></PluginInfo>

## Введение

Плагин Auth: CAS реализует стандарт протокола CAS (Central Authentication Service), позволяя пользователям входить в NocoBase с использованием учетных записей сторонних провайдеров аутентификации (IdP).

## Установка

## Руководство пользователя

### Активация плагина

![](https://static-docs.nocobase.com/469c48d9f2e8d41a088092c34ddb41f5.png)

### Добавление CAS-аутентификации

1. Перейдите на страницу управления аутентификацией:
   http://localhost:13000/admin/settings/auth/authenticators

2. Добавьте метод аутентификации CAS:

![](https://static-docs.nocobase.com/a268500c5008d3b90e57ff1e2ea41aca.png)

3. Настройте параметры CAS и активируйте метод:

![](https://static-docs.nocobase.com/2518b3fcc80d8a41391f3b629a510a02.png)

### Страница входа

Для входа через CAS перейдите по адресу:
http://localhost:13000/signin

![](https://static-docs.nocobase.com/49116aafbb2ed7218306f929ac8af967.png)

Основные особенности:
- Поддержка стандартного протокола CAS
- Интеграция с внешними провайдерами идентификации
- Простая настройка через административный интерфейс
- Единая точка входа для пользователей
