# Аутентификация через DingTalk

<PluginInfo commercial="true" name="auth-dingtalk"></PluginInfo>

## Введение

Плагин **Auth: DingTalk** позволяет пользователям входить в NocoBase с помощью учетных записей DingTalk, упрощая процесс авторизации.

## Активация плагина

![](https://static-docs.nocobase.com/202406120929356.png)

## Получение API-доступов в консоли разработчика DingTalk

1. Следуйте инструкциям из руководства <a href="https://open.dingtalk.com/document/orgapp/tutorial-obtaining-user-personal-information" target="_blank">DingTalk Open Platform - Реализация входа для сторонних сайтов</a> для создания приложения.

2. В консоли управления приложением активируйте разрешения:
   - "Информация о личном мобильном номере"
   - "Чтение персональной информации из адресной книги"

![](https://static-docs.nocobase.com/202406120006620.png)

## Получение учетных данных

Скопируйте **Client ID** и **Client Secret** из консоли разработчика:

![](https://static-docs.nocobase.com/202406120000595.png)

## Настройка аутентификации в NocoBase

1. Перейдите в раздел управления плагином аутентификации:

![](https://static-docs.nocobase.com/202406112348051.png)

2. Выберите **Добавить новый - DingTalk**:

![](https://static-docs.nocobase.com/202406112349664.png)

### Конфигурация

![](https://static-docs.nocobase.com/202406120016896.png)

- **Автоматическая регистрация новых пользователей** - Создает учетную запись при первом входе
- **Client ID и Client Secret** - Введите скопированные ранее данные
- **URL перенаправления** - Скопируйте этот адрес для следующего шага

## Настройка callback-URL в DingTalk

Вставьте скопированный **URL перенаправления** в соответствующее поле консоли разработчика:

![](https://static-docs.nocobase.com/202406120012221.png)

## Процесс входа

На странице входа нажмите кнопку под формой для авторизации через DingTalk:

![](https://static-docs.nocobase.com/202406120014539.png)

