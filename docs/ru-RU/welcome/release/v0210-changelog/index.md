# Версия 0.21: 2024-03-29

## Анонс

![v1.0](https://static-docs.nocobase.com/img_v3_029o_3dd91ba0-bb96-4315-a273-208f06d432fg.png)

## Новые возможности

### Поддержка графиков с несколькими источниками данных

![20240407222304](https://static-docs.nocobase.com/20240407222304.png)

<br />

[Для получения дополнительной информации смотрите [Data Visualization] documentation](/handbook/data-visualization)

### Поддержка нескольких источников данных для рабочего процесса

![20240407222523](https://static-docs.nocobase.com/20240407222523.png)

<br />

[Дополнительные сведения см. в документации [Workflow] documentation](/handbook/workflow)

### Оптимизация триггерных событий рабочего процесса

Изменены названия триггеров:

| Первоначальное название | Изменено на |
| ------------------ | ------------ |
| События в форме, Операционные события | Послеоперационные события |
| Запланированные задачи | Запланированные события |
| Перехватчики запросов | События, предшествующие операции |
| Утверждение | Approval |

Усовершенствована настройка режима запуска для следующих событий:

#### Мероприятия после акции

![20240407222652](https://static-docs.nocobase.com/20240407222652.png)

<br />

[См. дополнительные сведения [Workflow - Post-action events] documentation](/handbook/workflow-action-trigger)

#### Мероприятия, предшествующие акции

![20240407222834](https://static-docs.nocobase.com/20240407222834.png)

<br />

[См. дополнительные сведения [Workflow - Pre-action events] documentation](/handbook/workflow-request-interceptor)

### Пользовательский плагин для бренда

![20240407222949](https://static-docs.nocobase.com/20240407222949.png)

<br />

[См. дополнительные сведения [Custom Branding] documentation](/handbook/custom-brand)

### Поддержка наноидного поля

![20240407223221](https://static-docs.nocobase.com/20240407223221.png)

<br />

[См. дополнительные сведения [nanoid field] documentation](/handbook/data-modeling/collection-fields/advanced/nanoid)

### Поддержка поля uuid

![20240407223431](https://static-docs.nocobase.com/20240407223431.png)

<br />

[См. дополнительные сведения [uuid field] documentation](/handbook/data-modeling/collection-fields/advanced/uuid)

### Поддержка поля временной метки unix

![20240407223512](https://static-docs.nocobase.com/20240407223512.png)

<br />

[См. дополнительные сведения [Unix timestamp field] documentation](/handbook/data-modeling/collection-fields/datetime/unix-timestamp)

### Поле типа номера поддерживает конфигурацию форматирования

![20240407223736_rec_](https://static-docs.nocobase.com/20240407223736_rec_.gif)

<br />

[См. дополнительные сведенияe [Field configure / Specific property settings / Number component] documentation](/handbook/ui/fields/field-settings/input-number)

### Поддержка развертывания по дополнительному пути

Добавлена переменная среды APP_PUBLIC_PATH для поддержки развертывания по дополнительному пути. Например:

```bash
APP_PUBLIC_PATH=/nocobase/
```

Доступ локально по URL-адресу `http://localhost:13000/nocobase/`

Пример прокси-сервера nginx:

```bash
server {
    listen 80;
    server_name your_domain.com;  # Replace your_domain.com with your domain

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```

Теперь вы можете получить доступ через http://your_domain.com/nocobase/.

### Оптимизация производительности блоков

#### Поддержка эффекта скелетного экрана

Карточный блок

![20240407224956](https://static-docs.nocobase.com/20240407224956.png)

Карты Канбан

![20240407224811](https://static-docs.nocobase.com/20240407224811.png)

Ячейки таблицы

![20240407230028](https://static-docs.nocobase.com/20240407230028.png)

#### Распределенная обработка конфигурации блоков

Ранее изменения в любой схеме на всей странице приводили к повторному отображению всей страницы. Теперь схема каждого блока независима.

```tsx | pure
<SchemaComponent distributed schema={} />
```

Грид-компонент также поддерживает распределенную обработку.

```tsx | pure
{
  'x-component': 'Grid',
  'x-component-props': {
    distributed: true,
  },
}
```

## Несовместимые изменения

### Различные варианты использования схемы пользовательского интерфейса заменены на x-use-decorator-props и x-use-component-props

Для useProps вместо использования x-component-props с ключом useProps теперь используется x-use-component-props. Вот разница:

```diff
{
  "x-component": "Input",
+  "x-use-component-props": "useInputProps",
-  "x-component-props": {
-    useProps: "{{ useInputProps }}"
-  }
}
```

Для useParams и useSourceId вместо использования x-decorator-props с ключами для useParams и useSourceId теперь используется x-use-decorator-props с одним ключом. Вот разница:

```diff
{
  "x-decorator": "TableBlockProvider",
+  "x-use-decorator-props": "useDecoratorProps",
-  "x-decorator-props": {
-    useParams: "{{ useParams }}",
-    useSourceId: "{{ useSourceId }}"
-  }
}
```

Более подробную информацию о x-use-decorator-props и различии между статическими и динамическими свойствами можно найти здесь: [Статические и динамические свойства](https://client.docs.nocobase.com/core/data-block/data-block-provider#%E9%9D%99%E6%80%81%E5%B1%9E%E6%80%A7%E5%92%8C%E5%8A%A8%E6%80%81%E5%B1%9E%E6%80%A7).
