# Версия 0.9.0 
# Шаблоны коллекций (Collection Templates)

<img src="./v08-1-collection-templates/v08-1-collection-templates.jpg" alt="Интерфейс шаблонов коллекций">

## Зачем нужны шаблоны коллекций?

*(Раздел будет дополнен)*

## Описание параметров конфигурации

```ts
interface ICollectionTemplate {
  name: string; // Уникальное имя шаблона
  title?: string; // Отображаемое название
  /** Порядок сортировки */
  order?: number;
  /** Конфигурация по умолчанию */
  default?: CollectionOptions;
  /** Настраиваемые параметры CollectionOptions (поля формы для создания/редактирования коллекции) */
  configurableProperties?: Record<string, ISchema>;
  /** Доступные типы полей для этого шаблона */
  availableFieldInterfaces?:
    | AvailableFieldInterfacesInclude
    | AvailableFieldInterfacesExclude;
}

interface AvailableFieldInterfacesInclude {
  include?: any[]; // Явное включение типов полей
}

interface AvailableFieldInterfacesExclude {
  exclude?: any[]; // Исключение типов полей
}

interface CollectionOptions {
  /**
   * Автогенерация ID
   * @default true
   */
  autoGenId?: boolean;
  /** Поле "Создано пользователем" */
  createdBy?: boolean;
  /** Поле "Обновлено пользователем" */
  updatedBy?: boolean;
  /** Поле "Дата создания" */
  createdAt?: boolean;
  /** Поле "Дата обновления" */
  updatedAt?: boolean;
  /** Поддержка сортировки */
  sortable?: boolean;
  /** Древовидная структура */
  tree?: string;
  /** Логирование изменений */
  logging?: boolean;
  /** Наследование от других коллекций */
  inherits: string | string[];
  /** Список полей */
  fields?: FieldOptions[];
}
```

## Пример использования

Создание шаблона без автогенерации ID, с настройкой только названия и имени:

```ts
import { collectionConfigurableProperties } from '@nocobase/client';

{
  default: {
    autoGenId: false, // Отключение автогенерации ID
    fields: [], // Пустой список полей по умолчанию
  },
  configurableProperties: {
    ...collectionConfigurableProperties('name', 'title'), // Разрешить настройку только name и title
  },
}
```

Полный пример плагина с шаблоном коллекции:  
[samples/custom-collection-template](https://github.com/nocobase/nocobase/tree/feat/collection-templates/packages/samples/custom-collection-template)

