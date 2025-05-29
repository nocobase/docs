# Участие в разработке

- Сделайте форк исходного кода в свой репозиторий
- Внесите изменения в исходный код
- Отправьте pull request
- Подпишите лицензионное соглашение участника (CLA)

## Скачать

```bash
# Замените следующий адрес git на свой собственный репозиторий
git clone https://github.com/nocobase/nocobase.git
cd nocobase
yarn install
```

## Разработка и тестирование

```bash
# Установить зависимости и запустить приложение
yarn dev
# Запустить все тесты
yarn test
# Запустить все тесты в папке
yarn test <dir>
# Запустить один тестовый файл
yarn test <file>
```

## Просмотр документации

```bash
# Запустить локальный просмотр документации
yarn doc --lang=zh-CN
yarn doc --lang=en-US
yarn doc --lang=ru-RU
```

Документация находится в каталоге `docs` и оформлена в формате Markdown:

```bash
|- /docs/
  |- en-US
  |- zh-CN
  |- ru-RU
```

## Прочее

Для получения дополнительных CLI-команд см. [refer to the NocoBase CLI chapter](https://docs-cn.nocobase.com/api/cli).
