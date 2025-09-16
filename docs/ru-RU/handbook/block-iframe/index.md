# Блок Iframe

<PluginInfo name="block-iframe"></PluginInfo>

## Введение

Блок IFrame позволяет встраивать внешние веб-страницы или контент в текущую страницу. Пользователи могут интегрировать внешние приложения, настраивая URL или напрямую вставляя HTML-код. С помощью HTML пользователи могут гибко настраивать контент для удовлетворения конкретных потребностей отображения, что делает этот блок идеальным для пользовательских сценариев. Такой подход позволяет загружать внешние ресурсы без перенаправления, улучшая пользовательский опыт и интерактивность страницы.

## Установка

Это встроенный плагин, установка не требуется.

## Добавление блоков

![20240408220259](https://static-docs.nocobase.com/20240408220259.png)

Настройте URL или HTML для встраивания внешнего приложения.

![20240408220322](https://static-docs.nocobase.com/20240408220322.png)

## Шаблонизатор

### Строковый шаблон

Стандартный движок рендеринга поддерживает переменные.

### Handlebars

![20240811205239](https://static-docs.nocobase.com/20240811205239.png)

Подробнее см. [Шаблоны Handlebars](/handbook/template-handlebars).

## Передача переменных

### Поддержка HTML для разбора переменных

#### Поддержка выбора переменных из селектора переменных в текущем контексте блока

![20240603120321](https://static-docs.nocobase.com/20240603120321.png)

![20240603120629](https://static-docs.nocobase.com/20240603120629.gif)

#### Поддержка внедрения переменных в приложение и их использование через код

Вы также можете внедрять пользовательские переменные в приложение через код и использовать их в HTML. Например, создание динамического календаря с использованием Vue 3 и Element Plus:

```html
<!doctype html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Пример Vue3 с CDN</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.5.9/vue.global.prod.js"></script>
    <script src="https://unpkg.com/element-plus"></script>
    <script src="https://unpkg.com/element-plus/dist/locale/zh-cn"></script>
    <link
      rel="stylesheet"
      href="https://unpkg.com/element-plus/dist/index.css"
    />
  </head>
  <body>
    <div id="app">
      <el-container>
        <el-main>
          <el-calendar v-model="month">
            <div class="header-container">
              <div class="action-group">
                <span class="month-display">{{ month }}</span>
                <el-button-group>
                  <el-button
                    type="primary"
                    :loading="loading"
                    @click="changeMonth(-1)"
                    >Предыдущий месяц</el-button
                  >
                  <el-button
                    type="primary"
                    :loading="loading"
                    @click="changeMonth(1)"
                    >Следующий месяц</el-button
                  >
                </el-button-group>
              </div>
            </div>
          </el-calendar>
        </el-main>
      </el-container>
    </div>
    <script>
      const { createApp, ref, provide } = Vue;
      const app = createApp({
        setup() {
          const month = ref(new Date().toISOString().slice(0, 7));
          const loading = ref(false);

          const changeMonth = (offset) => {
            const date = new Date(month.value + '-01');
            date.setMonth(date.getMonth() + offset);
            month.value = date.toISOString().slice(0, 7);
          };
          provide('month', month);
          provide('changeMonth', changeMonth);
          return { month, loading, changeMonth };
        },
      });
      app.use(ElementPlus);
      app.mount('#app');
    </script>
  </body>
</html>
```

![20250320163250](https://static-docs.nocobase.com/20250320163250.png)

Пример: простой календарный компонент, созданный с использованием React и Ant Design (antd), с обработкой дат через dayjs:

```html
<!doctype html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Пример React с CDN</title>
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/antd/dist/antd.min.css"
    />
    <script src="https://unpkg.com/dayjs/dayjs.min.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script src="https://cdn.jsdelivr.net/npm/antd/dist/antd.min.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function () {
        const { useState } = React;
        const { Calendar, Button, Space, Typography } = window.antd;
        const { Title } = Typography;
        const CalendarComponent = () => {
          const [month, setMonth] = useState(dayjs().format('YYYY-MM'));
          const [loading, setLoading] = useState(false);
          const changeMonth = (offset) => {
            const newMonth = dayjs(month)
              .add(offset, 'month')
              .format('YYYY-MM');
            setMonth(newMonth);
          };
          return React.createElement(
            'div',
            { style: { padding: 20 } },
            React.createElement(
              'div',
              {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 16,
                },
              },
              React.createElement(Title, { level: 4 }, month),
              React.createElement(
                Space,
                null,
                React.createElement(
                  Button,
                  { type: 'primary', loading, onClick: () => changeMonth(-1) },
                  'Предыдущий месяц',
                ),
                React.createElement(
                  Button,
                  { type: 'primary', loading, onClick: () => changeMonth(1) },
                  'Следующий месяц',
                ),
              ),
            ),
            React.createElement(Calendar, {
              fullscreen: false,
              value: dayjs(month),
            }),
          );
        };
        ReactDOM.createRoot(document.getElementById('app')).render(
          React.createElement(CalendarComponent),
        );
      });
    </script>
  </body>
</html>
```

![20250320164537](https://static-docs.nocobase.com/20250320164537.png)

### URL поддерживает переменные

![20240603142219](https://static-docs.nocobase.com/20240603142219.png)

Подробнее о переменных см. [Переменные](/handbook/ui/variables).
