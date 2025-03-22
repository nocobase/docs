# Bloc Iframe

<PluginInfo name="block-iframe"></PluginInfo>

## Introduction
Le bloc IFrame permet d'intégrer des pages web ou du contenu externe dans la page actuelle. Les utilisateurs peuvent intégrer des applications externes de manière fluide en configurant une URL ou en insérant directement du code HTML. Avec le HTML, ils peuvent personnaliser le contenu de manière flexible pour répondre à des besoins d'affichage spécifiques, ce qui le rend idéal pour des scénarios sur mesure. Cette approche permet de charger des ressources externes sans redirection, améliorant ainsi l'expérience utilisateur et l'interactivité de la page.

## Installation

Il s'agit d'un plugin intégré, aucune installation n'est requise.

## Ajouter des blocs

![20240408220259](https://static-docs.nocobase.com/20240408220259.png)

Configurez l'URL ou le code HTML pour intégrer directement l'application externe.

![20240408220322](https://static-docs.nocobase.com/20240408220322.png)

## Moteur de template

### Template de chaîne

Le moteur de rendu par défaut prend en charge les variables.

### Handlebars

![20240811205239](https://static-docs.nocobase.com/20240811205239.png)

Pour plus d'informations, consultez [Template Handlebars](/handbook/template-handlebars)

## Passage de variables

### Prise en charge du parsing des variables en HTML

Prise en charge de la sélection des variables via le sélecteur de variables dans le Contexte du bloc actuel

![20240603120321](https://static-docs.nocobase.com/20240603120321.png)

![20240603120629](https://static-docs.nocobase.com/20240603120629.gif)

#### Prise en charge de l'injection de variables dans l'application et de leur utilisation via le code

Vous pouvez également injecter des variables personnalisées dans l'application via le code et les utiliser en HTML. Par exemple, la création d'une application de calendrier dynamique avec Vue 3 et Element Plus :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemple Vue3 CDN</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.5.9/vue.global.prod.js"></script>
    <script src="https://unpkg.com/element-plus"></script>
    <script src="https://unpkg.com/element-plus/dist/locale/fr"></script>
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
                    >Mois précédent</el-button
                  >
                  <el-button
                    type="primary"
                    :loading="loading"
                    @click="changeMonth(1)"
                    >Mois suivant</el-button
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

Exemple : Un composant de calendrier simple créé avec React et Ant Design (antd), utilisant dayjs pour gérer les dates.

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemple React CDN</title>
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
                  'Mois précédent',
                ),
                React.createElement(
                  Button,
                  { type: 'primary', loading, onClick: () => changeMonth(1) },
                  'Mois suivant',
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
```

### L'URL prend en charge les variables

![20240603142219](https://static-docs.nocobase.com/20240603142219.png)

Pour plus d'informations sur les variables, consultez [Variables](/handbook/ui/variables)
