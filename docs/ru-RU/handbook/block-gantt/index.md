# Блок «Диаграмма Ганта»

<PluginInfo name="block-gantt"></PluginInfo>

## Введение

Блок диаграммы Ганта отображает данные в виде временной шкалы и идеально подходит для управления проектами, планирования событий, составления графиков инженерных работ и расписаний задач.

## Установка

Встроенный плагин — отдельная установка не требуется.

## Добавление блока

![](https://static-docs.nocobase.com/f064f8fadf52947c990f5dad97736f98.png)

![](https://static-docs.nocobase.com/858112f44bc543973b6e5b03856a6360.png)

- **Поле заголовка**: отображает информацию непосредственно на полосах диаграммы Ганта.
- **Масштаб времени**: устанавливает масштаб времени, по умолчанию — дни.
- **Поле даты начала**: определяет дату начала каждой задачи (обязательное поле).
- **Поле даты окончания**: определяет дату завершения каждой задачи (обязательное поле).
- **Поле прогресса**: отображает степень выполнения задачи (необязательное, процентное поле).

## Инструкция по использованию

![](https://static-docs.nocobase.com/fff6fe1e1fe0a88d20f80b3bb7233608.gif)

- Наведите курсор на задачу, чтобы увидеть всплывающую карточку с информацией о продолжительности и прогрессе.
- Перетаскивайте задачу, чтобы изменить даты начала и окончания.
- Перетаскивайте полосу прогресса, чтобы изменить степень выполнения задачи.

## Настройки блока

![20240419211301](https://static-docs.nocobase.com/20240419211301.png)

### Установка диапазона данных

![20240419211033](https://static-docs.nocobase.com/20240419211033.png)

Дополнительную информацию см. в разделе [Установка диапазона данных](/handbook/ui/blocks/block-settings/data-scope).

- [Сохранить как шаблон блока](/handbook/block-template)
- [Настроить режим загрузки данных](/handbook/ui/blocks/block-settings/loading-mode)

## Настройка действий

### Глобальные действия

![20240419213653](https://static-docs.nocobase.com/20240419213653.png)

- [Фильтр](/handbook/ui/actions/types/filter)
- [Добавить новое](/handbook/ui/actions/types/add-new)
- [Удалить](/handbook/ui/actions/types/delete)
- [Обновить](/handbook/ui/actions/types/refresh)
- [Импорт](/handbook/action-import)
- [Экспорт](/handbook/action-export)
- [Добавить запись](/handbook/action-add-record)
- [Массовое обновление](/handbook/action-bulk-update)
- [Массовое редактирование](/handbook/action-bulk-edit)

### Действия для строки

![20240419213823](https://static-docs.nocobase.com/20240419213823.png)

- [Просмотр](/handbook/ui/actions/types/view)
- [Редактирование](/handbook/ui/actions/types/edit)
- [Дублировать](/handbook/action-duplicate)
- [Удалить](/handbook/ui/actions/types/delete)
- [Всплывающее окно](/handbook/ui/actions/types/pop-up)
- [Обновить запись](/handbook/ui/actions/types/update-record)
- [Произвольный запрос](/handbook/action-custom-request)
- [Запустить рабочий процесс](/handbook/workflow/manual/triggers/custom-action)
