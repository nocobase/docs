# Древовидная коллекция  

![Дерево таблиц](https://static-docs.nocobase.com/48ea3612a65ba18ea6d898b25a78c4f4.png)

Как и обычные таблицы, поддерживает настройку поведения таблицы данных.

![Настройка поведения](https://static-docs.nocobase.com/f49bac32396d6fbdbf979de37a2546f7.png)

Предопределенные поля шаблона дерева таблиц:

```go
[
      {
        interface: 'integer',
        name: 'parentId',
        type: 'bigInt',
        isForeignKey: true,
      },
      {
        interface: 'm2o',
        type: 'belongsTo',
        name: 'parent',
        foreignKey: 'parentId',
        treeParent: true,
        onDelete: 'CASCADE',
      },
      {
        interface: 'o2m',
        type: 'hasMany',
        name: 'children',
        foreignKey: 'parentId',
        treeChildren: true,
        onDelete: 'CASCADE',
      },
]
```

Инициализация полей после создания дерева таблиц:

![Инициализация полей](https://static-docs.nocobase.com/0b06b5a954c8d40567d3dcafa2baff96.png)

Шаблон дерева таблиц реализует древовидную структуру через самоассоциативные поля:

- Поле связи с родительским узлом (Many-to-One): обычно называется «Parent», оно устанавливает связь с другими записями в той же таблице, указывая родительский узел для каждой записи.
- Поле связи с дочерними узлами (One-to-Many): обычно называется «Children», оно указывает, что каждый узел может иметь несколько дочерних узлов.

## Использование в блоках

- Таблица в виде дерева: включена по умолчанию (при отключении данные возвращаются в плоском виде).
- Добавление дочерней записи: позволяет добавить дочернюю запись для текущей записи.

![Использование в блоках](https://static-docs.nocobase.com/97a7ddf0f26c323a2c986d10b43d7174.png)
