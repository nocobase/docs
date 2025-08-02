# DataSource (абстрактный класс)

Абстрактный класс `DataSource` представляет собой источник данных, которым может быть база данных, API и т.д.

## Члены класса

### collectionManager

Экземпляр CollectionManager для источника данных, должен реализовывать интерфейс [`ICollectionManager`](/api/data-source-manager/i-collection-manager).

### resourceManager

Экземпляр resourceManager для источника данных. См.: [`resourceManager`](/api/resourcer/resource-manager)

### acl

Экземпляр ACL (управление доступом) для источника данных. См.: [`ACL`](/api/acl/acl)

## API

### constructor()

Конструктор, создает экземпляр `DataSource`.

#### Сигнатура:
- `constructor(options: DataSourceOptions)`

### init()

Функция инициализации, вызывается сразу после `constructor`.

#### Сигнатура:
- `init(options: DataSourceOptions)`

### name

#### Сигнатура:
- `get name()`

Возвращает имя экземпляра источника данных.

### middleware()

Получает middleware DataSource, используемый для подключения к Server и обработки запросов.

### testConnection()

Статический метод, вызываемый при проверке соединения. Может использоваться для валидации параметров. Конкретная логика реализуется подклассами.

#### Сигнатура:
- `static testConnection(options?: any): Promise<boolean>`

### load()

#### Сигнатура:
- `async load(options: any = {})`

Операция загрузки источника данных. Логика реализуется подклассами.

### createCollectionManager()

#### Сигнатура:
- `abstract createCollectionManager(options?: any): ICollectionManager`

Создает экземпляр CollectionManager для источника данных. Логика реализуется подклассами.

### createResourceManager()

Создает экземпляр ResourceManager для источника данных. Подклассы могут переопределить реализацию. По умолчанию создает `ResourceManager` из `@nocobase/resourcer`.

### createACL()

Создает экземпляр ACL для DataSource. Подклассы могут переопределить реализацию. По умолчанию создает `ACL` из `@nocobase/acl`.
