# MoniMoni - Proyecto Base Configurado

## Estado del Proyecto

El proyecto MoniMoni ha sido configurado exitosamente con todas las bases necesarias para funcionar en iOS y Android.

## Lo que se ha configurado

### 1. Inicialización del Proyecto
- Proyecto Expo SDK 54 con React Native 0.81.4
- React 19.1.0
- Configuración para iOS y Android

### 2. Dependencias Instaladas

#### Navegación
- @react-navigation/native v7.1.18
- @react-navigation/stack v7.4.10
- react-native-gesture-handler
- react-native-screens
- react-native-safe-area-context

#### Firebase & Backend
- firebase v11.3.0 (para Firestore y Auth)

#### QR & Compartir
- react-native-qrcode-svg v6.3.15
- react-native-share v12.0.1
- react-native-svg v15.12.1

### 3. Estructura de Carpetas

```
monimoni/
├── src/
│   ├── screens/
│   │   └── HomeScreen.js         ✅ Pantalla principal creada
│   ├── components/               📁 Lista para componentes
│   ├── navigation/
│   │   └── AppNavigator.js       ✅ Navegación configurada
│   ├── services/                 📁 Lista para servicios
│   ├── config/
│   │   └── firebase.js           ✅ Config de Firebase creada
│   ├── utils/                    📁 Lista para utilidades
│   └── constants/
│       ├── colors.js             ✅ Paleta de colores MoniMoni
│       └── index.js              ✅ Constantes de Ecuador
```

### 4. Archivos de Configuración

- [app.json](app.json) - Configuración de Expo con:
  - Bundle ID iOS: `com.monimoni.app`
  - Package Android: `com.monimoni.app`
  - Colores de marca (#6366F1)
  - Splash screen configurado

- [package.json](package.json) - Todas las dependencias instaladas

- [babel.config.js](babel.config.js) - Babel configurado para Expo

- [.gitignore](.gitignore) - Configurado para ignorar node_modules, .env, etc.

- [.env.example](.env.example) - Template para variables de entorno

### 5. Pantalla Inicial (HomeScreen)

La pantalla inicial incluye:
- Header con gradiente en color primario
- Card de bienvenida
- 4 opciones principales:
  - Agregar Cuenta Bancaria
  - Link de Pago
  - Datos de Facturación
  - Compartir QR o Link
- Diseño responsive y amigable
- Colores y estilo según la identidad MoniMoni

### 6. Constantes Configuradas

#### Colores
- Paleta completa de colores (primarios, secundarios, fondos, textos)
- Inspirados en diseño ecuatoriano cálido y amigable

#### Datos Ecuador
- Bancos principales de Ecuador
- Tipos de cuenta (Ahorros/Corriente)
- Métodos de pago locales (PayPhone, Nequi, etc.)

## Próximos Pasos

### Antes de ejecutar:

1. **Configurar Firebase:**
   ```bash
   cp .env.example .env
   # Editar .env con tus credenciales
   # Actualizar src/config/firebase.js
   ```

2. **Ejecutar la app:**
   ```bash
   npm start       # Iniciar Metro
   npm run ios     # Para iOS
   npm run android # Para Android
   ```

### Para desarrollo continuo:

1. **Autenticación** - Implementar login/registro con Firebase Auth
2. **Gestión de Cuentas** - CRUD de cuentas bancarias
3. **Links de Pago** - Agregar y gestionar links
4. **Generación de QR** - Crear QR con toda la info
5. **Compartir** - Funcionalidad de compartir por WhatsApp
6. **Facturación** - Formulario de datos de facturación

## Comandos Útiles

```bash
# Desarrollo
npm start              # Iniciar desarrollo
npm run ios            # Ejecutar en iOS
npm run android        # Ejecutar en Android
npm run web            # Ejecutar en web

# Utilidades
npm install            # Reinstalar dependencias
npm start -- --clear   # Limpiar cache
```

## Características Configuradas para iOS y Android

### iOS
- Bundle Identifier: `com.monimoni.app`
- Soporte para iPad
- Orientación Portrait
- Status bar light content
- Splash screen con color de marca

### Android
- Package: `com.monimoni.app`
- Adaptive icon configurado
- Edge-to-edge habilitado
- Background color del splash: #6366F1
- Orientación Portrait

## Recursos Adicionales

- [README.md](README.md) - Documentación completa del proyecto
- [SETUP.md](SETUP.md) - Guía detallada de configuración
- [claude.md](claude.md) - Instrucciones para el agente AI
- [.env.example](.env.example) - Template de variables de entorno

## Notas Importantes

1. **Firebase**: Debes crear tu proyecto en Firebase Console y actualizar las credenciales
2. **iOS**: Solo se puede ejecutar en Mac con Xcode instalado
3. **Android**: Necesitas Android Studio o un dispositivo con Expo Go
4. **Dependencias**: Todas instaladas con versiones compatibles

---

**El proyecto está listo para comenzar el desarrollo!**

Para empezar, ejecuta:
```bash
npm start
```

Luego presiona:
- `i` para iOS (solo Mac)
- `a` para Android
- `w` para Web
