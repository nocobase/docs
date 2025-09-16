# Аутентификация по SMS

<PluginInfo name="verification"></PluginInfo>

## Введение

SMS-верификация - это встроенный метод подтверждения, который генерирует одноразовый динамический пароль (OTP) и отправляет его пользователю через SMS.

## Добавление SMS-верификатора

1. Перейдите на страницу управления верификацией:

![](https://static-docs.nocobase.com/202502271726791.png)

2. Нажмите **Добавить - SMS OTP**:

![](https://static-docs.nocobase.com/202502271726056.png)

## Настройка администратора

![](https://static-docs.nocobase.com/202502271727711.png)

Поддерживаемые SMS-провайдеры:
- <a href="https://www.aliyun.com/product/sms" target="_blank">Aliyun Cloud SMS</a>
- <a href="https://cloud.tencent.com/product/sms" target="_blank">Tencent Cloud SMS</a>

Разработчики могут добавить поддержку других провайдеров через плагины. Подробнее: [Расширение SMS-провайдеров](../../../handbook/verification/sms/dev)

## Привязка телефона пользователем

После добавления верификатора пользователи могут привязать номер телефона в личном кабинете:

![](https://static-docs.nocobase.com/202502271737016.png)

![](https://static-docs.nocobase.com/202502271737769.png)

![](https://static-docs.nocobase.com/202502271738515.png)

После успешной привязки пользователь может проходить верификацию в соответствующих сценариях:

![](https://static-docs.nocobase.com/202502271739607.png)

## Отвязка телефона

Для отвязки номера требуется подтверждение через уже привязанный метод верификации:

![](https://static-docs.nocobase.com/202502282103205.png)
