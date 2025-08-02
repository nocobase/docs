# Версия 0.16: 2023-11-20

## Новые возможности

Предыдущая версия cache отличается плохим удобством использования (поддерживает только кэш памяти), версия 0.16 была переработана, встроенная память и хранилище redis также поддерживают пользовательское хранилище. пожалуйста, обратитесь к [документации по API](https://docs.nocobase.com/api/cache/cache-manager) для получения подробной информации о том, как использовать.

## Кардинальные изменения

### Минимальная версия узла изменена на 18
Узел v16 больше не поддерживается, минимальная версия была изменена на v18.

```json
{
  "engines": {
    "node": ">=18"
  }
}
```

### Обновление метода создания кэша

Устарело: используйте `createCache` для создания кэша.

```ts
import { createCache } from "@nocobase/cache";

const cache = createCache();
```

Кэш теперь управляется с помощью `CacheManager` и создается с помощью `app.cacheManager`.

```ts
const cache = await app.cacheManager.createCache({
  name: "memory", // unique name of cache
  store: "memory", // unique name of cache method
  // other config
  max: 2000,
  ttl: 60 * 1000,
});
```

### Обновление переменных среды

Для настройки предыдущих переменных среды кэша требовалась строка JSON.

```bash
CACHE_CONFIG={"storePackage":"cache-manager-fs-hash","ttl":86400,"max":1000}
```

Новые переменные среды для настройки кэша:

```bash
# Уникальное имя метода кэширования по умолчанию, памяти или redis
CACHE_DEFAULT_STORE=memory
# Максимальное количество элементов в кэше памяти
CACHE_MEMORY_MAX=2000
# Повторное использование, необязательно
CACHE_REDIS_URL=redis://localhost:6379
```
## Полный список изменений
- рефакторинг (кэширование): улучшение кэширования [`#3004`](https://github.com/nocobase/nocobase/pull/3004)
- исправлено: URL-адрес базы данных локального хранилища [`#3063`](https://github.com/nocobase/nocobase/pull/3063)
- функция: отображение определения таблицы [`#3061`](https://github.com/nocobase/nocobase/pull/3061)
- особенность: поддержка mariadb [`#3052`](https://github.com/nocobase/nocobase/pull/3052)
- исправление (плагин-рабочий процесс): незначительные исправления для клиента [`#3062`](https://github.com/nocobase/nocobase/pull/3062)
- рутинная работа: просмотр логического вывода [`#3060`](https://github.com/nocobase/nocobase/pull/3060)
- исправлено: сортировка по коллекции ассоциаций [`#3058`](https://github.com/nocobase/nocobase/pull/3058)
- достижение: узел >= 18 [`#3066`](https://github.com/nocobase/nocobase/pull/3066)
