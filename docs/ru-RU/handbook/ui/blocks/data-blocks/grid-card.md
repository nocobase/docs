# Grid Cards

## Введение

Блок Grid Card предоставляет компактный и визуально привлекательный способ отображения сводной информации о записях данных. Благодаря гибкой настройке количества колонок в зависимости от размера экрана, он обеспечивает удобный просмотр на любых устройствах.

## Добавление блоков

<video width="100%" height="440" controls>
    <source src="https://static-docs.nocobase.com/20240418120045.mp4" type="video/mp4">
</video>

## Настройки блока

![20240419220708](https://static-docs.nocobase.com/20240419220708.png)

### Область данных

<video width="100%" height="440" controls>
    <source src="https://static-docs.nocobase.com/20240419173617.mp4" type="video/mp4">
</video>

Подробное руководство см. в разделе [Настройка области данных](/handbook/ui/blocks/block-settings/data-scope).

### Настройка количества колонок в строке

![20240408160228](https://static-docs.nocobase.com/20240408160228.png)

Количество колонок можно адаптировать под разные размеры экранов для оптимального отображения.

![20240408160844](https://static-docs.nocobase.com/20240408160844.png)

### Настройка метода загрузки данных

Пример: Связь блоков данных и настройка метода загрузки.

Таблицы "Заказы" и "Товары" имеют связь "многие ко многим". Блок таблицы заказов и блок Grid Card товаров можно связать для фильтрации данных. В этом случае метод загрузки данных для блока Grid Card настраивается как "После фильтрации данных".

<video width="100%" height="440" controls>
    <source src="https://static-docs.nocobase.com/20240419175643.mp4" type="video/mp4">
</video>

### Настройка высоты блока

Пример: Настройка блока Grid Card заказов в режиме "Полная высота" для расширенного просмотра.

![20240604232619](https://static-docs.nocobase.com/20240604232619.gif)

Подробнее см. [Высота блока](/handbook/ui/blocks/block-settings/block-height).

- [Настройка правил сортировки](/handbook/ui/blocks/block-settings/sorting-rule)
- [Сохранение как шаблон блока](/handbook/block-template)

## Настройка полей

### Поля текущей таблицы

![20240418123118](https://static-docs.nocobase.com/20240418123118.png)

### Поля связанных таблиц

![20240418123147](https://static-docs.nocobase.com/20240418123147.png)

Полное руководство по настройке полей для блока Grid Card см. в разделе [Поля детальной формы](/handbook/ui/fields/generic/detail-form-item).

## Настройка действий

### Глобальные действия

![20240418122905](https://static-docs.nocobase.com/20240418122905.png)

- [Фильтрация](/handbook/ui/actions/types/filter)
- [Добавление](/handbook/ui/actions/types/add-new)
- [Удаление](/handbook/ui/actions/types/delete)
- [Обновление](/handbook/ui/actions/types/refresh)
- [Импорт](/handbook/action-import)
- [Экспорт](/handbook/action-export)

### Действия со строками

![20240419222251](https://static-docs.nocobase.com/20240419222251.png)

- [Редактирование](/handbook/ui/actions/types/edit)
- [Удаление](/handbook/ui/actions/types/delete)
- [Всплывающее окно](/handbook/ui/actions/types/pop-up)
- [Обновление записи](/handbook/ui/actions/types/update-record)
- [Пользовательский запрос](/handbook/action-custom-request)
- [Запуск workflow](/handbook/workflow/manual/triggers/custom-action)
