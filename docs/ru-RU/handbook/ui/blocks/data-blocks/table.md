# Table Block

## Введение

Блок таблицы - один из основных блоков данных в NocoBase, отображающий и управляющий структурированными данными в табличной форме. Он обладает гибкими настройками для кастомизации столбцов, ширины колонок, правил сортировки, области данных и включает различные встроенные действия: фильтрация, добавление, дублирование, редактирование, удаление и другие.

## Добавление блоков

<video width="100%" height="440" controls>
    <source src="https://static-docs.nocobase.com/20240415215027.mp4" type="video/mp4">
</video>

## Настройки блока

![20240415215319](https://static-docs.nocobase.com/20240415215319.png)

### Область данных

Пример: Фильтр по умолчанию для счетов со статусом "Отправлено".

![20240415215404](https://static-docs.nocobase.com/20240415215404.png)

Подробнее см. [Настройка области данных](/handbook/ui/blocks/block-settings/data-scope).

### Настройка правил сортировки

Пример: Отображение счетов в обратном порядке по дате отправки.

![20240415215509](https://static-docs.nocobase.com/20240415215509.png)

Подробнее см. [Настройка правил сортировки](/handbook/ui/blocks/block-settings/sorting-rule).

### Подключение блоков данных

Пример: Связь блока таблицы заказов с блоком деталей заказа для синхронизации фильтрации.

<video width="100%" height="440" controls>
    <source src="https://static-docs.nocobase.com/20240415221426.mp4" type="video/mp4">
</video>

Подробнее см. [Подключение блоков данных](/handbook/ui/blocks/block-settings/connect-block).

- [Редактирование заголовка блока](/handbook/ui/blocks/block-settings/block-title)
- [Настройка режима загрузки данных](/handbook/ui/blocks/block-settings/loading-mode)
- [Сохранение как шаблон блока](/handbook/block-template)

## Настройка полей

### Поля текущей коллекции

![20240415223714](https://static-docs.nocobase.com/20240415223714.png)

### Поля связанных коллекций

![20240415223746](https://static-docs.nocobase.com/20240415223746.png)

### Отображение наследуемых полей таблицы (поля родительской таблицы)

Пример: Таблица арендных заказов наследуется от таблицы заказов.

![20240415224242](https://static-docs.nocobase.com/20240415224242.png)

Настройки полей столбцов таблицы см. в [Поля столбцов таблицы](/handbook/ui/fields/generic/table-column).

## Настройка действий

### Глобальные действия

![20240415225525](https://static-docs.nocobase.com/20240415225525.png)

- [Фильтрация](/handbook/ui/actions/types/filter)
- [Добавление](/handbook/ui/actions/types/add-new)
- [Удаление](/handbook/ui/actions/types/delete)
- [Обновление](/handbook/ui/actions/types/refresh)
- [Импорт](/handbook/action-import)
- [Экспорт](/handbook/action-export)
- [Добавление записи](/handbook/action-add-record)
- [Массовое обновление](/handbook/action-bulk-update)
- [Массовое редактирование](/handbook/action-bulk-edit)

### Действия со строками

![20240415225657](https://static-docs.nocobase.com/20240415225657.png)

- [Просмотр](/handbook/ui/actions/types/view)
- [Редактирование](/handbook/ui/actions/types/edit)
- [Дублирование](/handbook/action-duplicate)
- [Удаление](/handbook/ui/actions/types/delete)
- [Всплывающее окно](/handbook/ui/actions/types/pop-up)
- [Обновление записи](/handbook/ui/actions/types/update-record)
- [Пользовательский запрос](/handbook/action-custom-request)
