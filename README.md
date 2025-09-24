# 🚀 Prueba Técnica React Native - COMPLETADA ✅

## 📌 Descripción
Aplicación React Native desarrollada como prueba técnica que consume la API de JSONPlaceholder para mostrar información de usuarios con funcionalidades avanzadas. **Ahora integrada con Expo para un desarrollo más ágil.**

## ✅ Estado del Proyecto: COMPLETADO
**Todos los requisitos principales y extras han sido implementados exitosamente.**

---

## 🎯 Objetivos Cumplidos
✅ **Desarrollar una pantalla que consuma datos de una API pública** - ✓ COMPLETADO  
✅ **Implementar navegación entre pantallas** - ✓ COMPLETADO  
✅ **Manejar el estado global con Zustand** - ✓ COMPLETADO  
✅ **Aplicar buenas prácticas de código y estructura de archivos** - ✓ COMPLETADO  
✅ **Implementar pruebas unitarias con Jest** - ✓ COMPLETADO  

## ⭐ Extras Implementados
✨ **Campo de búsqueda con filtrado en tiempo real** - ✓ COMPLETADO  
✨ **Carga paginada de usuarios** - ✓ COMPLETADO  
✨ **Loader para carga de datos** - ✓ COMPLETADO  
✨ **Manejo de errores y reintentos** - ✓ COMPLETADO  
✨ **Implementación de dark mode** - ✓ COMPLETADO  
✨ **Animaciones con Native Motion (Moti)** - ✓ COMPLETADO  
✨ **Manejo de caché con AsyncStorage** - ✓ COMPLETADO  
✨ **Integración con Expo** - ✓ COMPLETADO  

---

## 🎨 Paleta de Colores Utilizada
- **Verde claro**: `#D7F9F1` - Fondos y acentos suaves
- **Verde medio**: `#618B4A` - Elementos principales
- **Verde suave**: `#AFBC88` - Elementos secundarios
- **Verde oscuro**: `#40531B` - Textos y contrastes

## � Tecnologías Implementadas

### Principales
- **React Native**: `0.72.6`
- **Expo SDK**: `54.0.0` ⭐ NUEVO
- **TypeScript**: `5.2.2`
- **Zustand**: `4.4.3` - Gestión de estado
- **React Navigation**: `6.x` - Navegación
- **Styled Components**: `6.0.8` - Estilos
- **Moti**: `0.28.1` - Animaciones (Native Motion)

### Testing y Desarrollo
- **Jest**: `29.6.3` - Framework de testing
- **Testing Library**: `12.3.0` - Utilidades de testing
- **ESLint + Prettier**: Linting y formateo de código
- **Expo Dev Client**: Cliente de desarrollo personalizado ⭐ NUEVO

---

## 📂 Estructura del Proyecto Implementada

```
├── assets/                 # Assets de la aplicación (iconos, splash) ⭐ NUEVO
├── src/
│   ├── components/         # Componentes reutilizables ✅ COMPLETADO
│   │   ├── Avatar.tsx     # Avatar de usuario con animaciones
│   │   ├── Button.tsx     # Botón personalizado
│   │   ├── ErrorState.tsx # Estado de error
│   │   ├── Loader.tsx     # Indicador de carga
│   │   ├── SearchBar.tsx  # Barra de búsqueda
│   │   └── UserCard.tsx   # Tarjeta de usuario
│   ├── navigation/         # Configuración de navegación ✅ COMPLETADO
│   │   └── AppNavigator.tsx
│   ├── screens/           # Pantallas principales ✅ COMPLETADO
│   │   ├── HomeScreen.tsx # Lista de usuarios
│   │   └── UserDetailScreen.tsx # Detalles de usuario
│   ├── services/          # Servicios y APIs ✅ COMPLETADO
│   │   └── api.ts
│   ├── store/            # Estado global ✅ COMPLETADO
│   │   └── userStore.ts
│   ├── theme/            # Configuración de temas ✅ COMPLETADO
│   │   ├── colors.ts
│   │   ├── index.ts
│   │   └── typography.ts
│   ├── types/            # Definiciones de tipos ✅ COMPLETADO
│   │   └── User.ts
│   └── utils/            # Utilidades ✅ COMPLETADO
│       └── storage.ts
├── app.json              # Configuración de Expo ⭐ NUEVO
├── package.json          # Scripts de Expo ⭐ ACTUALIZADO
└── index.js              # Entry point para Expo ⭐ ACTUALIZADO
```

## 🚀 Instalación y Ejecución con Expo

### Prerrequisitos
- Node.js (versión 16 o superior)
- Expo CLI o Expo Development Build
- Para desarrollo nativo: Android Studio (Android) o Xcode (iOS)

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd prueba-frontend-rn
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar con Expo**
   
   **Opción 1: Desarrollo con Expo Go (Recomendado para desarrollo rápido)**
   ```bash
   npm start
   # Escanea el código QR con la app Expo Go en tu dispositivo
   ```
   
   **Opción 2: Development Build (Para funcionalidades nativas)**
   ```bash
   npm run android  # Para Android
   npm run ios      # Para iOS (requiere macOS y Xcode)
   ```

### Scripts Disponibles

#### Desarrollo
- `npm start` - Inicia el servidor de desarrollo Expo ⭐ ACTUALIZADO
- `npm run android` - Compila y ejecuta en Android
- `npm run ios` - Compila y ejecuta en iOS
- `npm run web` - Ejecuta en navegador web ⭐ NUEVO

#### Testing y Calidad
- `npm test` - Ejecuta las pruebas
- `npm run test:watch` - Ejecuta las pruebas en modo watch
- `npm run lint` - Ejecuta el linter
- `npm run lint:fix` - Corrige automáticamente errores de linting  

---

## 📂 Estructura del Proyecto
Considera buenas practicas para estructurar tu proyecto de tal forma que pueda ser escalable, modular y organizado.  

```
src/
├── components/          # Componentes reutilizables
│   ├── Avatar.tsx
│   ├── ErrorState.tsx
│   ├── Loader.tsx
│   ├── SearchBar.tsx
│   ├── UserCard.tsx
│   ├── __tests__/      # Pruebas de componentes
│   └── index.ts
├── navigation/         # Configuración de navegación
│   └── AppNavigator.tsx
├── screens/           # Pantallas de la aplicación
│   ├── HomeScreen.tsx
│   ├── UserDetailScreen.tsx
│   └── index.ts
├── services/          # Servicios de API
│   └── api.ts
├── store/             # Estado global (Zustand)
│   ├── userStore.ts
│   └── __tests__/
├── theme/             # Tema y estilos
│   └── index.ts
├── types/             # Definiciones de tipos TypeScript
│   ├── index.ts
│   └── global.d.ts
├── utils/             # Utilidades
├── setupTests.ts      # Configuración de pruebas
└── App.tsx           # Componente raíz
```

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js 16 o superior
- React Native CLI
- Android Studio (para Android)
- Xcode (para iOS, solo macOS)

### Pasos de instalación
1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Para iOS: `cd ios && pod install && cd ..`
4. Ejecutar en Android: `npm run android`
5. Ejecutar en iOS: `npm run ios`

### Comandos disponibles
- `npm start` - Iniciar Metro bundler
- `npm run android` - Ejecutar en Android
- `npm run ios` - Ejecutar en iOS
- `npm test` - Ejecutar pruebas
- `npm run lint` - Ejecutar ESLint
- `npm run typecheck` - Verificar tipos TypeScript

## 📋 Funcionalidades Implementadas

✅ **Pantalla principal con lista de usuarios**
- Lista paginada de usuarios (8 por página)
- Búsqueda en tiempo real por nombre y email
- Animaciones de entrada con Moti
- Avatar generado con iniciales
- Diseño responsivo con styled-components

✅ **Pantalla de detalles del usuario**
- Información completa del usuario
- Tarjetas animadas para cada sección
- Enlaces funcionales (email, teléfono, website)
- Animaciones de transición suaves

✅ **Estado global con Zustand**
- Gestión centralizada del estado
- Caché con AsyncStorage (5 minutos)
- Manejo de errores y reintentos
- Paginación y filtrado

✅ **Tema y modo oscuro**
- Paleta de colores personalizada
- Alternancia entre modo claro/oscuro
- Componentes temáticos con styled-components

✅ **Animaciones con Moti**
- Transiciones suaves entre pantallas
- Animaciones de carga y hover
- Efectos de entrada escalonados
- Feedback visual mejorado

✅ **Pruebas unitarias con Jest**
- Pruebas de componentes
- Pruebas de store (Zustand)
- Mocks configurados
- Cobertura de código

✅ **Arquitectura escalable**
- Estructura modular de carpetas
- Separación de responsabilidades
- Tipos TypeScript estrictos
- Configuración completa de desarrollo

## 🎨 Paleta de Colores

La aplicación utiliza una paleta de colores verde natural que transmite frescura y confiabilidad:

- **Primary**: `#618B4A` - Verde principal para acciones importantes
- **Secondary**: `#AFBC88` - Verde claro para elementos secundarios  
- **Tertiary**: `#D7F9F1` - Verde menta para fondos suaves
- **Accent**: `#40531B` - Verde oscuro para contrastes y texto

## 💡 Expo vs React Native CLI - Cuándo usar cada uno

### 🔄 Expo
**Cuándo usarlo:**
- Desarrollo rápido de prototipos y MVPs
- Aplicaciones que no requieren funcionalidades nativas complejas
- Equipos sin experiencia en desarrollo móvil nativo
- Proyectos que necesitan desarrollo multiplataforma simultáneo
- Aplicaciones que usan principalmente APIs web estándar

**Ventajas:**
- Configuración cero y desarrollo inmediato
- Actualizaciones OTA (Over-The-Air)
- Amplia gama de APIs preconfiguradas
- Herramientas de debugging excelentes
- Fácil distribución y testing

**Limitaciones:**
- Tamaño de aplicación más grande
- Dependencia del SDK de Expo
- Limitaciones en módulos nativos personalizados
- Menos control sobre la configuración nativa

### ⚡ React Native CLI
**Cuándo usarlo:**
- Aplicaciones que requieren módulos nativos específicos
- Necesidad de optimización máxima de rendimiento
- Integración con SDKs nativos de terceros
- Control total sobre la configuración del proyecto
- Aplicaciones empresariales complejas

**Ventajas:**
- Control completo sobre código nativo
- Menor tamaño de aplicación
- Acceso completo a APIs nativas
- Flexibilidad total de configuración
- Mejor para aplicaciones de producción complejas

**Recomendación:**
Para este proyecto elegí **React Native CLI** porque permite mayor flexibilidad para implementar animaciones personalizadas, optimizar el rendimiento de la lista de usuarios, y tener control total sobre la configuración del tema y estilos.

---
