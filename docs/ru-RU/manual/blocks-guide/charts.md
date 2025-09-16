# Диаграммы в NocoBase

В настоящее время для работы с диаграммами в NocoBase требуется использование конфигурационных файлов или написание кода. Система использует библиотеку [g2plot](https://g2plot.antv.vision/en/examples) и теоретически поддерживает все типы диаграмм, представленные на сайте библиотеки. В данный момент доступны для настройки:

- Столбчатые диаграммы
- Горизонтальные диаграммы
- Линейные графики
- Круговые диаграммы
- Диаграммы площадей

## Добавление и редактирование диаграмм

![chart-edit.gif](https://static-docs.nocobase.com/97c1d74a7ca9d0e8d2971cca2ab8de50.gif)

## Настройка диаграмм

Исходная конфигурация диаграмм использует статические JSON-данные:

```json
{
  "data": [
    {"type": "Мебель и техника", "sales": 38},
    {"type": "Продукты питания", "sales": 52},
    {"type": "Фрукты", "sales": 61},
    {"type": "Косметика", "sales": 145},
    {"type": "Товары для детей", "sales": 48},
    {"type": "Импортные продукты", "sales": 38},
    {"type": "Напитки", "sales": 38},
    {"type": "Бытовая химия", "sales": 38}
  ],
  "xField": "type",
  "yField": "sales",
  "label": {
    "position": "middle",
    "style": {
      "fill": "#FFFFFF",
      "opacity": 0.6
    }
  },
  "xAxis": {
    "label": {
      "autoHide": true,
      "autoRotate": false
    }
  },
  "meta": {
    "type": {"alias": "Категория"},
    "sales": {"alias": "Продажи"}
  }
}
```

## Динамические данные

Поле `data` поддерживает выражения. NocoBase включает функцию `requestChartData(config)` для запроса данных диаграмм. Параметры config: [https://github.com/axios/axios#request-config](https://github.com/axios/axios#request-config)

Пример:
```json
{
  "data": "{{requestChartData({ url: 'collectionName:getColumnChartData' })}}",
  ...остальные параметры...
}
```

Пример HTTP API:
```bash
GET /api/collectionName:getColumnChartData
```

## Реализация на сервере

Для таблицы `collectionName` необходимо добавить метод `getColumnChartData`:

```js
app.resourcer.registerActionHandlers({
  'collectionName:getColumnChartData': async (ctx, next) => {
    ctx.body = []; // Возвращаемые данные
    await next();
  },
});
```

## Видео примеры

### Статические данные
[Видео](https://user-images.githubusercontent.com/1267426/198877269-1c56562b-167a-4808-ada3-578f0872bce1.mp4)

### Динамические данные
[Видео](https://user-images.githubusercontent.com/1267426/198877336-6bd85f0b-17c5-40a5-9442-8045717cc7b0.mp4)

### Другие типы диаграмм
Поддерживаются все диаграммы с [g2plot](https://g2plot.antv.vision/en/examples)
[Видео](https://user-images.githubusercontent.com/1267426/198877347-7fc2544c-b938-4e34-8a83-721b3f62525e.mp4)

## JS-выражения

Синтаксис:
```js
{
  "key1": "{{ js выражение }}"
}
```

[Пример использования](https://user-images.githubusercontent.com/1267426/198877361-808a51cc-6c91-429f-8cfc-8ad7f747645a.mp4)
