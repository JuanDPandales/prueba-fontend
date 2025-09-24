#!/bin/bash

# Script de configuración inicial para el proyecto React Native

echo "🚀 Configurando proyecto React Native - Prueba Técnica"
echo "=================================================="

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js 16 o superior."
    exit 1
fi

# Verificar versión de Node
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Se requiere Node.js 16 o superior. Versión actual: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"

# Instalar dependencias npm
echo "📦 Instalando dependencias de npm..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error instalando dependencias de npm"
    exit 1
fi

echo "✅ Dependencias de npm instaladas"

# Verificar si estamos en macOS para configurar iOS
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "🍎 Sistema macOS detectado - Configurando iOS..."
    
    # Verificar si CocoaPods está instalado
    if ! command -v pod &> /dev/null; then
        echo "📱 CocoaPods no encontrado. Instalando..."
        sudo gem install cocoapods
    fi
    
    echo "📱 Instalando pods para iOS..."
    cd ios && pod install && cd ..
    
    if [ $? -eq 0 ]; then
        echo "✅ Configuración de iOS completada"
    else
        echo "⚠️  Hubo problemas configurando iOS"
    fi
else
    echo "⚠️  No es macOS - saltando configuración de iOS"
fi

# Verificar configuración de Android
echo "🤖 Verificando configuración de Android..."

if [ -z "$ANDROID_HOME" ]; then
    echo "⚠️  ANDROID_HOME no está configurado"
    echo "   Por favor configura ANDROID_HOME apuntando a tu SDK de Android"
else
    echo "✅ ANDROID_HOME configurado: $ANDROID_HOME"
fi

# Verificar Java
if command -v java &> /dev/null; then
    JAVA_VERSION=$(java -version 2>&1 | head -n1 | cut -d'"' -f2 | cut -d'.' -f1-2)
    echo "✅ Java $JAVA_VERSION detectado"
else
    echo "⚠️  Java no encontrado. Se requiere JDK 11 o superior para Android"
fi

echo ""
echo "🎉 Configuración completada!"
echo ""
echo "📋 Comandos disponibles:"
echo "   npm start          - Iniciar Metro bundler"
echo "   npm run android    - Ejecutar en Android"
echo "   npm run ios        - Ejecutar en iOS (solo macOS)"
echo "   npm test           - Ejecutar pruebas"
echo "   npm run lint       - Verificar código con ESLint"
echo "   npm run typecheck  - Verificar tipos TypeScript"
echo ""
echo "🚀 Para comenzar:"
echo "   1. npm start"
echo "   2. En otra terminal: npm run android (o ios)"
echo ""
echo "📖 Ver README.md para más información"