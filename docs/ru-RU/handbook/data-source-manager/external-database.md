# Обзор

## Введение

Используйте существующую внешнюю базу данных в качестве источника данных. В настоящее время поддерживаются внешние базы данных MySQL, MariaDB и PostgreSQL.

## Инструкции по использованию

### Добавление внешней базы данных

После активации плагина вы можете выбрать и добавить его из раскрывающегося меню Добавить новый в управлении источником данных.

![20240507204316](https://static-docs.nocobase.com/20240507204316.png)

Заполните информацию о базе данных, к которой необходимо подключиться.

![20240507204820](https://static-docs.nocobase.com/20240507204820.png)

### Синхронизация таблиц данных

После установления соединения с внешней базой данных все таблицы данных в источнике данных будут напрямую считываться. Внешняя база данных не поддерживает прямое добавление таблиц данных или изменение структур таблиц. Если необходимы изменения, их можно внести через клиент базы данных, а затем нажать кнопку «Обновить» в интерфейсе для синхронизации.

![20240507204725](https://static-docs.nocobase.com/20240507204725.png)

### Настройка полей

Внешняя база данных автоматически считывает поля существующих таблиц данных и отображает их. Вы можете быстро просмотреть и настроить заголовок поля, тип данных (тип поля) и тип пользовательского интерфейса (интерфейс поля). Вы также можете нажать кнопку «Изменить», чтобы изменить больше конфигураций.

![20240507210537](https://static-docs.nocobase.com/20240507210537.png)

Поскольку внешняя база данных не поддерживает изменение структур таблиц, единственным типом, доступным при добавлении новых полей, является поле отношения. Поля отношения не являются настоящими полями, но используются для установления связей между таблицами.

![20240507220140](https://static-docs.nocobase.com/20240507220140.png)

Более подробную информацию см. в разделе [Поля коллекции/Обзор](/handbook/data-modeling/collection-fields).

### Сопоставление типов полей

NocoBase автоматически сопоставит соответствующий тип данных (тип поля) и тип пользовательского интерфейса (интерфейс поля) для типов полей внешней базы данных.

- Тип данных (тип поля): используется для определения вида, формата и структуры данных, которые может хранить поле.
- Тип пользовательского интерфейса (интерфейс поля): относится к типу элемента управления, используемого для отображения и ввода значений полей в пользовательском интерфейсе.

В таблице ниже показано сопоставление типов полей для PostgreSQL, MySQL/MariaDB с типом данных NocoBase и типом интерфейса NocoBase.

| PostgreSQL | MySQL/MariaDB | NocoBase Data Type | NocoBase Interface Type |
| - | - | - | - |
| BOOLEAN | BOOLEAN<br/>TINYINT(1) | boolean | checkbox <br/> switch |
| SMALLINT<br/>INTEGER<br/>SERIAL<br/>SMALLSERIAL | TINYINT<br/>SMALLINT<br/>MEDIUMINT<br/>INTEGER | integer<br/>boolean<br/>sort | integer<br/>sort<br/>checkbox<br/>switch<br/>select<br/>radioGroup |
| BIGINT<br/>BIGSERIAL | BIGINT | bigInt<br/>sort | integer<br/>sort<br/>checkbox<br/>switch<br/>select<br/>radioGroup<br/>unixTimestamp<br/>createdAt<br/>updatedAt |
| REAL | FLOAT | float | number<br/>percent |
| DOUBLE PRECISION | DOUBLE PRECISION | double | number<br/>percent |
| DECIMAL<br/>NUMERIC | DECIMAL | decimal | number<br/>percent<br/>currency |
| VARCHAR<br/>CHAR | VARCHAR<br/>CHAR | string<br/>password<br/>uuid<br/>nanoid | input<br/>email<br/>phone<br/>password<br/>color<br/>icon<br/>select<br/>radioGroup<br/>uuid<br/>nanoid |
| TEXT | TEXT<br/>TINYTEXT<br/>MEDIUMTEXT<br/>LONGTEXT | text<br/>json | textarea<br/>markdown<br/>vditor<br/>richText<br/>url<br/>json |
| UUID | - | uuid | uuid |
| JSON<br/>JSONB | JSON | json | json |
| TIMESTAMP | DATETIME<br/>TIMESTAMP | date | date<br/>time<br/>createdAt<br/>updatedAt |
| DATE | DATE | dateOnly | datetime |
| TIME | TIME | time | time |
| - | YEAR |  | datetime |
| CIRCEL |  | circle | json<br/>circle |
| PATH<br/>GEOMETRY(LINESTRING) | LINESTRING | lineString | Json<br/>lineString |
| POINT<br/>GEOMETRY(POINT) | POINT | point | json<br/>point |
| POLYGON<br/>GEOMETRY(POLYGON) | POLYGON | polygon | json<br/>polygon |
| GEOMETRY | GEOMETRY |  -  |  -  |
| BLOB | BLOB | blob |  -  |
| ENUM | ENUM | enum | select<br/>radioGroup |
| ARRAY |  -  | array | multipleSelect<br/>checkboxGroup |
| BIT | BIT | - | - |
| SET | SET | set | multipleSelect<br/>checkboxGroup |
| RANGE | - | - | - |

### Неподдерживаемые типы полей

Неподдерживаемые типы полей будут отображаться отдельно. Эти поля необходимо разработать для адаптации, прежде чем их можно будет использовать.

![20240507221854](https://static-docs.nocobase.com/20240507221854.png)

### Ключ фильтра-цели

Таблицы данных, отображаемые в виде блоков, должны иметь настроенный ключ фильтра-цели. Ключ фильтра-цели относится к фильтрации данных на основе определенного поля, а значение поля должно быть уникальным. Ключ фильтра-цели по умолчанию соответствует полю первичного ключа таблицы данных. Если это представление или таблица данных без первичного ключа или таблица данных с составным первичным ключом, вам необходимо настроить ключ фильтра-цели.

![20240507210230](https://static-docs.nocobase.com/20240507210230.png)

Только таблицы данных, которые установили целевой ключ фильтра, могут быть добавлены на страницу.

![20240507222827](https://static-docs.nocobase.com/20240507222827.png)
