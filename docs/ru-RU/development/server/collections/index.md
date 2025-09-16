### **Основные понятия**

#### **Коллекция**

Коллекция — это набор данных различных типов, например, заказы, товары, пользователи, комментарии и т.д. Разные коллекции различаются по имени, например:

```js
// Заказы
{
  name: 'orders',
}
// Товары
{
  name: 'products',
}
// Пользователи
{
  name: 'users',
}
// Комментарии
{
  name: 'comments',
}
```

#### **Поле коллекции**

Каждая коллекция содержит несколько полей.

```js
// Конфигурация коллекции
{
  name: 'users',
  fields: [
    { type: 'string', name: 'name' },
    { type: 'integer', name: 'age' },
    // Другие поля
  ],
}
// Пример данных
[
  {
    name: 'Jason',
    age: 20,
  },
  {
    name: 'Li Si',
    age: 18,
  }
];
```

Состав поля коллекции в NocoBase:

```
./collection-field.svg
```

#### **Тип поля**

Разные поля различаются по имени, а тип указывает на тип данных поля. Типы делятся на **атрибутные** и **связанные**:

**Атрибут — Атрибутный тип**
```
string
text
date
boolean
time
float
json
location
password
virtual
...
```

**Связь — Тип связи**
```
hasOne
hasMany
belongsTo
belongsToMany
...
```

#### **Компонент поля**

Поле имеет тип данных, и ввод-вывод значения поля работает корректно, но этого недостаточно. Чтобы отобразить поле на интерфейсе, требуется дополнительная настройка — `uiSchema`, например:

```js
// Поле email, отображается с помощью компонента Input, с правилом валидации email
{
  type: 'string',
  name: 'email',
  uiSchema: {
    'x-component': 'Input',
    'x-component-props': { size: 'large' },
    'x-validator': 'email',
    'x-pattern': 'editable', // режим редактирования, только для чтения, читаемый формат
  },
}

// Пример данных
{
  email: 'admin@nocobase.com',
}

// Пример компонента
<Input name={'email'} size={'large'} value={'admin@nocobase.com'} />
```

`uiSchema` используется для настройки компонентов поля, отображаемых на интерфейсе. Каждый компонент поля соответствует значению и включает несколько настроек:
- Компонент поля
- Параметры компонента
- Правила валидации поля
- Режим поля (редактируемый, только для чтения, читаемый формат)
- Значение по умолчанию поля
- Другое

[Подробнее в главе «UI Schema»](/development/client/ui-schema-designer/what-is-ui-schema).

Встроенные компоненты полей NocoBase:
```
Input
InputNumber
Select
Radio
Checkbox
...
```

#### **Интерфейс поля**

Используя тип поля и компонент поля, можно свободно комбинировать несколько полей. Такой шаблон называется **интерфейс поля**, например:

```js
// Поле email: string + Input, с правилом валидации email
{
  type: 'string',
  name: 'email',
  uiSchema: {
    'x-component': 'Input',
    'x-component-props': {},
    'x-validator': 'email',
  },
}

// Поле телефона: string + Input, с правилом валидации телефона
{
  type: 'string',
  name: 'phone',
  uiSchema: {
    'x-component': 'Input',
    'x-component-props': {},
    'x-validator': 'phone',
  },
}
```

Для каждого из полей выше требуется полная настройка `uiSchema`, что неудобно. Чтобы упростить конфигурацию, вводится понятие **интерфейс поля**, которое позволяет шаблонизировать параметры, например:

```ts
// Шаблон для поля email
interface email {
  type: 'string';
  uiSchema: {
    'x-component': 'Input',
    'x-component-props': {},
    'x-validator': 'email',
  };
}

// Шаблон для поля телефона
interface phone {
  type: 'string';
  uiSchema: {
    'x-component': 'Input',
    'x-component-props': {},
    'x-validator': 'phone',
  };
}

// Упрощённая конфигурация поля
// email
{
  interface: 'email',
  name: 'email',
}

// phone
{
  interface: 'phone',
  name: 'phone',
}
```

[Другие интерфейсы полей здесь](https://github.com/nocobase/nocobase/tree/main/packages/core/client/src/collection-manager/interfaces)
