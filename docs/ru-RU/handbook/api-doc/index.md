# Документация API

<PluginInfo name="api-doc"></PluginInfo>

## Введение

Плагин генерирует документацию NocoBase HTTP API на основе Swagger.

## Установка

Это встроенный плагин, установка не требуется. Активируйте для использования.

## Инструкции по использованию

### Доступ к странице документации API

http://localhost:13000/admin/settings/api-doc/documentation

![](https://static-docs.nocobase.com/8db51cf50e3c666aba5a850a0fb664a0.png)

### Обзор документации

![](https://static-docs.nocobase.com/5bb4d3e5bba6c6fdfcd830592e72385b.png)

- Общая документация API: `/api/swagger:get`
- Основная документация API: `/api/swagger:get?ns=core`
- Вся документация API плагинов: `/api/swagger:get?ns=plugins`
- Документация каждого плагина: `/api/swagger:get?ns=plugins/{name}`
- Документация API пользовательских коллекций: `/api/swagger:get?ns=collections`
- Указанные ресурсы `${collection}` и связанные ресурсы `${collection}.${association}`: `/api/swagger:get?ns=collections/{name}`

## Руководство разработчика

### Как написать документацию Swagger для плагинов

Добавьте файл `swagger/index.ts` в папку `src` плагина со следующим содержимым:

```typescript
export default {
  info: {
    title: 'NocoBase API - Auth plugin',
  },
  tags: [],
  paths: {},
  components: {
    schemas: {},
  },
};
```

Подробные примеры и рекомендации написания можно найти в [Официальной документации Swagger](https://swagger.io/docs/specification/about/).
