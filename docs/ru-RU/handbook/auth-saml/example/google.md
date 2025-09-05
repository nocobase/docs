# Интеграция с Google Workspace

## Настройка Google в качестве IdP (провайдера идентификации)

1. Перейдите в [Google Admin Console](https://admin.google.com/)
2. Откройте раздел: Приложения → Веб-приложения и мобильные приложения

![](https://static-docs.nocobase.com/0812780b990a97a63c14ea8991959827.png)

3. После настройки приложения скопируйте:
   - **SSO URL** (URL единого входа)
   - **Entity ID** (Идентификатор сущности) 
   - **Certificate** (Сертификат)

![](https://static-docs.nocobase.com/aafd20a794730e85411c0c8f368637e0.png)

## Добавление аутентификатора в NocoBase

1. Перейдите: Настройки плагинов → Аутентификация пользователей → Добавить → SAML

![](https://static-docs.nocobase.com/5bc18c7952b8f15828e26bb07251a335.png)

2. Введите скопированные данные:
   - SSO URL: URL единого входа
   - Public Certificate: Сертификат
   - idP Issuer: Entity ID
   - http: Отметьте, если тестируете локально с http

3. Скопируйте значения SP Issuer/EntityID и ACS URL из раздела "Использование"

## Заполнение информации о SP (поставщике услуг) в Google

1. Вернитесь в Google Console
2. На странице **Service Provider Details** введите:
   - ACS URL (скопированный ранее)
   - Entity ID (скопированный ранее)
3. Отметьте опцию **Signed Response** (Подписанный ответ)

![](https://static-docs.nocobase.com/1536268bf8df4a5ebc72384317172191.png)
![](https://static-docs.nocobase.com/c7de1f8b84c1335de110e5a7c96255c4.png)

4. В разделе **Attribute Mapping** (Сопоставление атрибутов) настройте соответствие атрибутов:

![](https://static-docs.nocobase.com/27180f2f46480c3fee3016df86d6fdb8.png)
