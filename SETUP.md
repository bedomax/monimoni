# Guía de Configuración - MoniMoni

## Configuración Inicial

### 1. Configurar Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuevo proyecto llamado "MoniMoni"
3. Habilita Authentication:
   - Email/Password
   - Google Sign-In
4. Crea una base de datos Firestore en modo test
5. Copia las credenciales del proyecto

### 2. Configurar Variables de Entorno

```bash
# Copia el archivo de ejemplo
cp .env.example .env

# Edita .env con tus credenciales de Firebase
```

Actualiza también `src/config/firebase.js` con tus credenciales.

### 3. Instalar Dependencias de Desarrollo

```bash
# Si usas iOS (solo en Mac)
cd ios && pod install && cd ..

# Instalar dependencias globales (si no las tienes)
npm install -g expo-cli
```

## Ejecutar la App

### Modo Desarrollo

```bash
# Iniciar Metro Bundler
npm start

# En otra terminal - iOS
npm run ios

# En otra terminal - Android
npm run android
```

### Dispositivo Físico

1. Instala la app Expo Go en tu dispositivo
2. Ejecuta `npm start`
3. Escanea el QR con tu cámara (iOS) o Expo Go (Android)

## Estructura de Datos (Firestore)

### Colección: `users`

```javascript
{
  uid: "user_id",
  email: "user@example.com",
  displayName: "Juan Pérez",
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Colección: `bankAccounts`

```javascript
{
  userId: "user_id",
  bankName: "Banco Pichincha",
  accountType: "Ahorros",
  accountNumber: "1234567890",
  accountHolder: "Juan Pérez",
  cedula: "1234567890",
  createdAt: timestamp
}
```

### Colección: `paymentLinks`

```javascript
{
  userId: "user_id",
  type: "PayPhone",
  link: "https://payphone.app/...",
  label: "Mi PayPhone Personal",
  createdAt: timestamp
}
```

### Colección: `billingInfo`

```javascript
{
  userId: "user_id",
  ruc: "1234567890001",
  businessName: "Mi Empresa S.A.",
  address: "Av. Principal 123",
  email: "facturacion@empresa.com",
  phone: "+593987654321",
  createdAt: timestamp
}
```

## Configuración de Permisos

### iOS (ios/Podfile)

```ruby
# Ya configurado automáticamente por Expo
# Permisos necesarios:
# - Cámara (para escanear QR)
# - Compartir archivos
```

### Android (android/app/src/main/AndroidManifest.xml)

```xml
<!-- Ya configurado automáticamente por Expo -->
<!-- Permisos necesarios: -->
<!-- - INTERNET -->
<!-- - CAMERA (opcional, para escanear QR) -->
```

## Próximos Pasos de Desarrollo

### Fase 1: Autenticación
- [ ] Implementar pantalla de login
- [ ] Integrar Firebase Auth
- [ ] Manejar estados de autenticación

### Fase 2: Gestión de Cuentas
- [ ] CRUD de cuentas bancarias
- [ ] Validación de números de cuenta
- [ ] Lista de cuentas guardadas

### Fase 3: Links de Pago
- [ ] Agregar links de PayPhone
- [ ] Agregar links de PayPal/Nequi
- [ ] Validación de URLs

### Fase 4: Compartir
- [ ] Generar QR con toda la info
- [ ] Compartir por WhatsApp
- [ ] Compartir link público

### Fase 5: Facturación
- [ ] Formulario de datos de facturación
- [ ] Validación de RUC
- [ ] Incluir en QR/compartir

## Testing

```bash
# Ejecutar tests (cuando se implementen)
npm test

# Lint
npm run lint

# Format
npm run format
```

## Build para Producción

### Usando EAS (Expo Application Services)

```bash
# Instalar EAS CLI
npm install -g eas-cli

# Login
eas login

# Configurar proyecto
eas build:configure

# Build para Android
eas build --platform android

# Build para iOS
eas build --platform ios
```

## Troubleshooting

### Error: "Module not found"
```bash
# Limpiar cache
npm start -- --reset-cache
```

### Error en iOS: "Pod install failed"
```bash
cd ios
pod deintegrate
pod install
cd ..
```

### Error en Android: Gradle
```bash
cd android
./gradlew clean
cd ..
```

## Recursos Útiles

- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Firebase for React Native](https://rnfirebase.io/)
- [PayPhone API Docs](https://payphone.app/docs)
