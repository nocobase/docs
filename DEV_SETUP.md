# Настройка среды разработки NocoBase Docs

## Быстрый старт

### 1. Первоначальная настройка
```bash
chmod +x setup.sh
./setup.sh
```

### 2. Запуск проекта
```bash
chmod +x start-dev.sh
./start-dev.sh
```

## Ручная настройка

### 1. Установка Node.js 20.14.0
```bash
nvm install 20.14.0
nvm use 20.14.0
```

### 2. Установка yarn
```bash
npm install -g yarn
```

### 3. Установка зависимостей
```bash
yarn install
```

### 4. Запуск проекта
```bash
yarn dev
```

## Доступные команды

- `yarn dev` - запуск китайской документации (по умолчанию)
- `yarn dev:en` - запуск английской документации
- `yarn dev:fr` - запуск французской документации
- `yarn dev:ja` - запуск японской документации
- `yarn dev:ru` - запуск русской документации

## Полезные команды

### Автоматическое переключение версии Node.js
```bash
nvm use
```

### Проверка версии Node.js
```bash
node --version
```

### Очистка кэша и переустановка зависимостей
```bash
rm -rf node_modules yarn.lock
yarn install
```

## Структура файлов

- `start-dev.sh` - скрипт для запуска проекта
- `setup.sh` - скрипт для первоначальной настройки
- `.nvmrc` - файл для автоматического переключения версии Node.js
- `DEV_SETUP.md` - эта документация

## Решение проблем

### Ошибка "No such module: http_parser"
Эта ошибка возникает при использовании Node.js версии 24+. Используйте Node.js 20.14.0.

### Ошибка "Module not found: moment"
Установите недостающие зависимости:
```bash
yarn add moment
```

### Проблемы с зависимостями
Очистите кэш и переустановите зависимости:
```bash
rm -rf node_modules yarn.lock
yarn install
``` 