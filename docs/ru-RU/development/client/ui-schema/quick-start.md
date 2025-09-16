### **Быстрый старт**

#### **1. Создание компонента схемы (Schema Component)**

Отображение зарегистрированных компонентов путём настройки параметра `x-component`.

Основные понятия:

- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema)
- [Отрисовка схемы](/development/client/ui-schema/rendering)
- [Расширение компонентов схемы](/development/client/ui-schema/extending)

<code src="./demos/demo1.tsx"></code>

#### **2. Добавление компонента Schema на страницу**

Вставка новых компонентов рядом с существующими Schema путём настройки параметра `x-initializer`.

Основные понятия:

- [Конструктор Designable](/development/client/ui-schema/designable)
- [Протокол UI Schema — параметр x-initializer](/development/client/ui-schema/what-is-ui-schema#x-initializer)
- [SchemaInitializer](/development/client/ui-schema/initializer)

<code src="./demos/demo2.tsx"></code>

#### **3. Добавление панели настройки **

Предоставление конфигуратора параметров для компонентов Schema путём настройки параметра `x-settings`. Панель конструктора по умолчанию поддерживает перетаскивание.

Основные понятия:

- [Протокол UI Schema — параметр x-settings](/development/client/ui-schema/what-is-ui-schema#x-settings)
- [SchemaSettings](/development/client/ui-schema/settings)
- [Перемещение существующих узлов схемы](/development/client/ui-schema/designable#move-between-nodes)

<code src="./demos/demo3.tsx"></code>
