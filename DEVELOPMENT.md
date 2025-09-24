# Guía de Desarrollo

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas
```
src/
├── components/         # Componentes reutilizables de UI
├── screens/           # Pantallas de la aplicación
├── navigation/        # Configuración de navegación
├── store/             # Estado global con Zustand
├── services/          # Servicios de API y utilidades externas
├── hooks/             # Hooks personalizados
├── utils/             # Utilidades y helpers
├── theme/             # Configuración de tema y estilos
└── types/             # Definiciones de tipos TypeScript
```

### Patrones de Diseño Utilizados

#### 1. **State Management Pattern**
- Utilizamos Zustand para el manejo de estado global
- Cada store maneja un dominio específico de la aplicación
- Estados derivados y computados para optimizar renders

#### 2. **Component Composition Pattern**
- Componentes pequeños y reutilizables
- Props interfaces bien definidas
- Separación de lógica de presentación

#### 3. **Custom Hooks Pattern**
- Lógica reutilizable encapsulada en hooks
- Separación de concerns entre UI y lógica de negocio
- Hooks para tema, paginación, etc.

#### 4. **Service Layer Pattern**
- Servicios para comunicación con APIs
- Abstracción de llamadas HTTP
- Manejo centralizado de errores

## 🎨 Guía de Estilos

### Paleta de Colores
```typescript
const colors = {
  primary: '#618B4A',    // Verde principal
  secondary: '#AFBC88',  // Verde claro
  tertiary: '#D7F9F1',   // Verde menta
  accent: '#40531B',     // Verde oscuro
}
```

### Sistema de Espaciado
```typescript
const spacing = {
  xs: 4,   sm: 8,   md: 16,
  lg: 24,  xl: 32,  xxl: 48
}
```

### Tipografía
```typescript
const fontSizes = {
  xs: 12,  sm: 14,  md: 16,
  lg: 18,  xl: 24,  xxl: 32
}
```

## 🔧 Configuración de Desarrollo

### Scripts Disponibles
- `npm start` - Inicia el Metro bundler
- `npm run android` - Ejecuta en dispositivo/emulador Android
- `npm run ios` - Ejecuta en dispositivo/simulador iOS
- `npm test` - Ejecuta pruebas unitarias
- `npm run lint` - Ejecuta ESLint
- `npm run typecheck` - Verifica tipos TypeScript

### Variables de Entorno
El proyecto utiliza las siguientes variables:
- `NODE_ENV` - Entorno de ejecución
- `NO_FLIPPER` - Deshabilitar Flipper en iOS

## 🧪 Testing

### Estrategia de Pruebas
1. **Unit Tests**: Componentes individuales y funciones
2. **Integration Tests**: Interacción entre componentes
3. **Store Tests**: Lógica de estado global

### Configuración de Jest
- Configuración en `jest.config.js`
- Mocks para React Native y dependencias
- Coverage configurado

## 📱 Características Implementadas

### ✅ Funcionalidades Core
- ✅ Lista de usuarios con paginación
- ✅ Búsqueda en tiempo real
- ✅ Detalles de usuario
- ✅ Modo oscuro
- ✅ Caché con AsyncStorage
- ✅ Manejo de errores

### ✅ Mejoras de UX
- ✅ Animaciones suaves con Moti
- ✅ Loading states
- ✅ Error boundaries
- ✅ Feedback visual
- ✅ Navegación intuitiva

### ✅ Características Técnicas
- ✅ TypeScript estricto
- ✅ ESLint + Prettier
- ✅ Pruebas unitarias
- ✅ Documentación
- ✅ Arquitectura escalable

## 🚀 Deploy y Distribución

### Android
1. Generar APK: `cd android && ./gradlew assembleRelease`
2. Ubicación: `android/app/build/outputs/apk/release/`

### iOS
1. Abrir proyecto en Xcode: `ios/PruebaFrontendRN.xcworkspace`
2. Configurar certificados y provisioning profiles
3. Archive y distribuir

## 🔄 Flujo de Trabajo

### Git Workflow
1. `main` - Rama principal estable
2. `develop` - Rama de desarrollo
3. `feature/*` - Ramas de características
4. `hotfix/*` - Correcciones urgentes

### Code Review
- Pull requests obligatorios
- Revisión de al menos 1 desarrollador
- Tests passing requeridos
- TypeScript sin errores

## 📚 Recursos Adicionales

### Librerías Principales
- **React Navigation** - Navegación
- **Zustand** - Estado global
- **Styled Components** - Estilos
- **Moti** - Animaciones
- **AsyncStorage** - Persistencia local

### Documentación
- [React Native](https://reactnative.dev/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Moti](https://moti.fyi/)
- [React Navigation](https://reactnavigation.org/)

## 🤝 Contribución

### Convenciones de Código
- Usar TypeScript estricto
- Seguir configuración de ESLint/Prettier
- Nombrado en camelCase para variables/funciones
- PascalCase para componentes
- Documentar funciones complejas

### Commit Messages
```
feat: nueva funcionalidad
fix: corrección de bug
docs: documentación
style: formato/estilo
refactor: refactorización
test: pruebas
chore: mantenimiento
```