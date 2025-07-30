# Версия 0.20: 2024-03-03

## Новые возможности

### Поддержка нескольких источников данных

Добавлен плагин [Менеджер источников данных](/handbook/data-source-manager), используемый для управления всеми коллекциями и полями для источников данных. Плагин Data Source Manager предоставляет централизованный интерфейс для управления источниками данных и не предоставляет возможности доступа к источникам данных. Его необходимо использовать в сочетании с различными плагинами для источников данных. В настоящее время поддерживаются следующие источники данных:

- [Основная база данных](/handbook/data-source-main): основная база данных NocoBase, поддерживающая реляционные базы данных, такие как MySQL, PostgreSQL, SQLite и т.д.
- [Внешний источник данных MySQL](/handbook/data-source-external-mysql): Доступ к существующей базе данных MySQL в качестве источника данных.
- [Внешний источник данных MariaDB](/handbook/data-source-external-mariadb): Доступ к существующей базе данных MariaDB в качестве источника данных.
- [Внешний источник данных PostgreSQL](/handbook/data-source-external-postgres): Доступ к существующей базе данных PostgreSQL в качестве источника данных.

Кроме того, можно расширить число источников данных, которые могут быть обычными типами баз данных или платформ, предоставляющих API (SDK).

![Data Source Manager](https://static-docs.nocobase.com/fe8ecdaf640097eeb310c94a997b9090.png)

### Настройка управления коллекциями

Перенес исходный "Менеджер коллекций" в "Источник данных > Основная база данных > Конфигурация".

![Main Database Configuration](https://static-docs.nocobase.com/b5ad882a131e447f78b0c22a92ec9df6.gif)

### Поддержка полей, отличных от ID, в качестве основных и связанных ограничений

При создании коллекции вы можете отказаться от создания поля ID.

![Predefined Fields](https://static-docs.nocobase.com/87dc4101a884f97cbfce00f1891f7cf6.png)

Целочисленные поля могут использоваться в качестве первичных ключей.

![Integer fields can be used as primary keys](https://static-docs.nocobase.com/cce37d7d8e9feaa66970da0c643a2d9d.png)

Однострочные текстовые поля также могут использоваться в качестве первичных ключей.

![Single-line text fields can also be used as primary keys](https://static-docs.nocobase.com/b2c797f52bedfcfa06936a244dd9be4b.png)

Ограничения взаимосвязи поддерживают выбор других полей с уникальными индексами, установленными в качестве полей, не являющихся первичными ключами.

![](https://static-docs.nocobase.com/e5515e58426c5be08ba982b0bb311410.png)

### Настройка сортировки с помощью перетаскивания

Добавлено поле типа "Сортировать". Поля сортировки больше не создаются автоматически при создании коллекций и их необходимо создавать вручную.

![](https://static-docs.nocobase.com/470891c7bb34c506328c1f3824a6cf20.png)

При выборе поля в качестве группы перед сортировкой будет произведена группировка.

![](https://static-docs.nocobase.com/0794d0a9c0dc288a8fc924a3542bb86e.png)

При включении сортировки перетаскиванием в табличном блоке вам необходимо выбрать поле сортировки.

![](https://static-docs.nocobase.com/20cf12fd7ca3d8c0aa1917a95c0a7e7c.png)

При создании блока Канбан вам необходимо выбрать поле сортировки.

![](https://static-docs.nocobase.com/b810265790d6a1ec099e3d88d1361271.png)

### Настройка пользовательского интерфейса и интерфейсов разрешений

Добавлен интерфейс управления пользователями и унифицированное управление пользователями и ролями в одном меню.

![](https://static-docs.nocobase.com/7be26746652098f07ce105dbae373522.png)

Изменен интерфейс управления ролями, чтобы упростить управление связанными с пользователями ролями, разрешениями, отделами и т.д.

![](https://static-docs.nocobase.com/4ec942af764dfcec1ddc9a244816a6ee.png)

Перенес исходные "Разрешения на действия" на вкладку "Источник данных".

![](https://static-docs.nocobase.com/461ab881fe94a33f9a122e9734b85f4d.gif)

### Плагин отделов

![](https://static-docs.nocobase.com/093473d9c23a789d41899df9bcaf3389.png)

Организуйте пользователей по отделам, устанавливайте иерархические связи, связывайте роли для управления разрешениями и используйте отделы в качестве переменных в рабочих процессах и выражениях.

### Рабочий процесс: Утверждение

Плагин утверждения предоставляет специальные типы рабочих процессов (триггеры) "Инициировать утверждение" и узлы "Утверждение" для этого процесса. В сочетании с уникальными пользовательскими таблицами данных и пользовательскими блоками NocoBase можно быстро и гибко создавать различные сценарии утверждения и управлять ими.

Конфигурация утверждения

![Approval Configuration](https://static-docs.nocobase.com/21acc5615ecc03aeeb44671ab945baea.png)

Процесс утверждения

![Approval Process](https://static-docs.nocobase.com/6a879641bd15de0648cd4602779ef9fa.png)

Более подробную информацию можно найти в документации: [Утверждение рабочего процесса](/handbook/workflow-approval)

### Рабочий процесс: Узел завершения процесса

Этот узел немедленно завершает текущее выполнение рабочего процесса при выполнении и сохраняет статус, настроенный в узле. Обычно он используется для управления определенным логическим потоком, чтобы завершить текущий рабочий процесс после выполнения определенных логических условий без продолжения последующей обработки. Это можно сравнить с командой return в языках программирования, используемой для выхода из выполняемой в данный момент функции.

![](https://static-docs.nocobase.com/38d6352211d791fd4233f5cd4bdb34f2.png)

Более подробную информацию можно найти в документации: [Конечный узел процесса](/handbook/workflow/manual/nodes/end)

### Рабочий процесс: Custom Variable Node

Переменные могут быть объявлены в рабочем процессе или присвоены значения ранее объявленным переменным, которые обычно используются для хранения временных данных в рабочем процессе. Он подходит для сценариев, где результаты вычислений необходимо сохранить для последующего использования вне ветви (например, циклы, параллелизм и т.д.).

![](https://static-docs.nocobase.com/c19913f99968d987a52aaa53578a7318.png)

Более подробную информацию можно найти в документации:  [Пользовательский переменный узел](/handbook/workflow-variable)

### Рабочий процесс: перехватчик запросов

Плагин request interceptor предоставляет механизм перехвата операций с формами, при котором событие перехвата запускается после отправки соответствующей операции с формой и до ее обработки. Если узел "Завершить процесс" выполняется в последующем потоке процесса после запуска или если другие узлы не выполняются (ошибки или другие неполные выполнения), операция с формой будет перехвачена, в противном случае запланированная операция будет выполнена в обычном режиме. Его можно использовать для бизнес-проверки или логических проверок для утверждения или перехвата отправленных клиентом операций создания, обновления и удаления.

![](https://static-docs.nocobase.com/3f3991aaf9d73b8c2f7c179e7702d16b.png)

Более подробную информацию можно найти в документации: [Перехватчик запросов](/handbook/workflow-request-interceptor)

### Рабочий процесс: Узел ответных сообщений

Узел ответных сообщений используется для предоставления обратной связи клиенту с помощью пользовательских сообщений в определенных типах рабочих процессов (таких как перехват запросов и события форм).

Конфигурация узла

![](https://static-docs.nocobase.com/4376843af541ef6a08696e074cb6cd07.png)

Подсказка

![](https://static-docs.nocobase.com/051f12855bd0ce74b22de191b8b87cf5.png)

Более подробную информацию можно найти в документации: [Узел ответного сообщения](/handbook/workflow-response-message)

## Несовместимые изменения

### API с разными именами

В результате этого изменения в ядре некоторые API новой версии вступают в конфликт с именами старых версий. Эти конфликтующие API старой версии будут сохранены в этой версии, но к ним будет добавлен суффикс `_deprecated`.
| Оригинальный API | Устаревший API | Новый API |
| ---------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| CollectionProvider | CollectionProvider_deprecated | [CollectionProvider](https://client.docs.nocobase.com/core/data-source/collection-provider) |
| useCollection | useCollection_deprecated | [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#hooks) |
| useCollectionField | useCollectionField_deprecated | [useCollectionField](https://client.docs.nocobase.com/core/data-source/collection-field#hooks) |
| useCollectionManager | usecollectionmanager_рекомендуемый | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks) |
| useContext(CollectionManagerContext) | useCollectionManager_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks) |

Если вы используете вышеупомянутые связанные API, у вас есть два способа изменить:

- Простая замена: замените исходный API на API с суффиксом `_deprecated`, например, замените `useCollection()` на `useRecord_deprecated()`.
- Используйте новый API в соответствии с новой документацией: хотя названия новых API совпадают со старыми, существуют различия в параметрах и возвращаемых значениях. Вам необходимо обратиться к новой документации для корректировки соответствующего кода.

### Другие API, требующие корректировки

- `registerTemplate()` изменен на `app.dataSourceManager.addCollectionTemplates()`
- `registerField()` изменено на `app.dataSourceManager.addFieldInterfaces()`
- `registerGroup()` изменено на `app.dataSourceManager.addFieldInterfaceGroups()`
- `useContext(CollectionManagerContext)` изменен на `useCollectionManager_deprecated()`
-  Расширяем коллекции с помощью `ExtendCollectionsProvider`
- `RecordProvider` требует явной передачи родительского параметра, когда это необходимо

## Изменить примеры

### Расширение шаблона коллекции

#### Определение

Ранее он был определен как объект, теперь его необходимо преобразовать в класс. Например:

До:

```typescript
import { ICollectionTemplate } from '@nocobase/client';

const calendar: ICollectionTemplate = {
  name: 'calendar',
  title: 'Calendar collection',
  order: 2,
  color: 'orange',
  // ...
}
```

После:

```typescript
import { CollectionTemplate } from '@nocobase/client';

class CalendarCollectionTemplate extends CollectionTemplate {
  name = 'calendar';
  title = 'Calendar collection';
  order = 2;
  color = 'orange';
}
```

Свойства исходного объекта становятся членами класса.

#### Регистрация

Ранее зарегистрированный через "registerTemplate", теперь должен быть зарегистрирован через "dataSourceManager.addCollectionTemplates" плагина. Например:

До:

```typescript
import { registerTemplate } from '@nocobase/client';
import { calendar } from './calendar'

registerTemplate('calendar', calendar);
```

После:

```typescript
import { Plugin } from '@nocobase/client';
import { CalendarCollectionTemplate } from './calendar'

export class CalendarPluginClient extends Plugin {
  async load() {
    this.app.dataSourceManager.addCollectionTemplates([CalendarCollectionTemplate]);
  }
}
```

### Расширение интерфейса поля

#### Определение

Ранее оно было определено как объект, теперь его необходимо преобразовать в класс. Например:

До:

```typescript
import { IField } from '@nocobase/client';

const attachment: IField = {
  name: 'attachment',
  type: 'object',
  group: 'media',
  title: 'Attachment',
  // ...
}
```

После:

```typescript
import { CollectionFieldInterface } from '@nocobase/client';

class AttachmentFieldInterface extends CollectionFieldInterface {
  name = 'attachment';
  type = 'object';
  group = 'media';
  title = 'Attachment';
  // ...
}
```

Свойства исходного объекта становятся членами класса.

#### Регистрация

Ранее зарегистрированный через `registerField`, теперь должен быть зарегистрирован через `dataSourceManager.addFieldInterfaces` плагина и не требует повторной передачи `CollectionManagerProvider`. Например:

До:

```diff
import { registerField } from '@nocobase/client';
import { attachment } from './attachment'

- registerField(attachment.group, 'attachment', attachment);

export const FileManagerProvider: FC = (props) => {
  return (
-   <CollectionManagerProvider interfaces={{ attachment }}>
      <SchemaComponentOptions scope={hooks} components={{ UploadActionInitializer }}>
        {props.children}
      </SchemaComponentOptions>
-   </CollectionManagerProvider>
  );
};
```

После:

```typescript
import { Plugin } from '@nocobase/client';
import { AttachmentFieldInterface } from './attachment'

export class FilPlugin extends Plugin {
  async load() {
    this.app.dataSourceManager.addFieldInterfaces([AttachmentFieldInterface]);
  }
}
```

### Расширение группы интерфейса поля

Ранее зарегистрированное через `registerGroup`, теперь необходимо зарегистрировать через `dataSourceManager.addFieldInterfaceGroups` плагина. Например:

```diff
- import { registerGroup, Plugin } from '@nocobase/client';
+ import { Plugin } from '@nocobase/client';

- registerGroup('map', {
-        label: 'Map-based geometry',
-        order: 10
- })

export class MapPlugin extends Plugin {
  async load() {
+    this.app.dataSourceManager.addFieldInterfaceGroups({
+      map: {
+        label: generateNTemplate('Map-based geometry'),
+        order: 51,
+      },
+    });
  }
}
```

### `useContext(CollectionManagerContext)` изменен на `useCollectionManager_deprecated()`

```diff
- const ctx = useContext(CollectionManagerContext);
+ const ctx = useCollectionManager_deprecated();
```

### Расширьте коллекции, используйте "ExtendCollectionsProvider` вместо `CollectionManagerProvider`

```diff
const Demo = () => {
-  <CollectionManagerProvider collections={[apiKeysCollection]}>
+  <ExtendCollectionsProvider collections={[apiKeysCollection]}>
...
-  </CollectionManagerProvider>
+  </ExtendCollectionsProvider>
}
```

### Изменения в RecordProvider

Ранее, когда родительское свойство не передавалось, значение последнего RecordProvider автоматически извлекалось в качестве родительского. Теперь родительское значение должно быть передано явно, и если родительское значение не передано, значение родительского значения будет неопределенным.

```diff
- <RecordProvider record={recordData}>
+ <RecordProvider record={recordData} parent={parentRecordData}>
...
</RecordProvider>
```

Если у вас нет архивных данных, вы также можете напрямую использовать `CollectionRecordProvider` для замены.

```diff
- <RecordProvider record={recordData}>
+ <CollectionRecordProvider record={recordData} parent={parentRecordData}>
...
- </RecordProvider>
+ </CollectionRecordProvider>
```

### Разница между `RecordProvider` и `CollectionRecordProvider`

- `RecordProvider` устарел и будет удален в будущем.
- `RecordProvider` содержит старый `RecordContext`, в то время как `CollectionRecordProvider` этого не делает.
