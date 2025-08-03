#!/bin/bash

# Скрипт для запуска проекта NocoBase Docs
echo "🚀 Запуск проекта NocoBase Docs..."

# Загружаем nvm если он не загружен
if ! command -v nvm &> /dev/null; then
    if [ -f "$HOME/.nvm/nvm.sh" ]; then
        source "$HOME/.nvm/nvm.sh"
    elif [ -f "/usr/local/nvm/nvm.sh" ]; then
        source "/usr/local/nvm/nvm.sh"
    else
        echo "❌ nvm не найден. Установите nvm сначала."
        exit 1
    fi
fi

# Переключаемся на нужную версию Node.js
echo "📦 Переключение на Node.js 20.14.0..."
nvm use 20.14.0

# Проверяем версию Node.js
NODE_VERSION=$(node --version)
echo "✅ Используется Node.js: $NODE_VERSION"

# Проверяем наличие yarn
if ! command -v yarn &> /dev/null; then
    echo "📦 Установка yarn..."
    npm install -g yarn
fi

# Проверяем наличие зависимостей
if [ ! -d "node_modules" ]; then
    echo "📦 Установка зависимостей..."
    yarn install
fi

# Запускаем проект
echo "🌐 Запуск сервера разработки..."
echo "📍 Сервер будет доступен по адресу: http://localhost:8000"
echo "🔄 Для остановки нажмите Ctrl+C"
echo ""

# Запускаем русскую версию по умолчанию
yarn dev:ru 