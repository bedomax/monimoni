# MoniMoni

**Tu identidad de pago digital para Ecuador**

MoniMoni simplifica el compartir información de pago en Ecuador. Agrupa tus cuentas bancarias, links de PayPhone, PayPal, Nequi y datos de facturación en una sola app.

## Características

- Agregar y guardar múltiples cuentas bancarias
- Links de pago (PayPhone, PayPal, Nequi)
- Generar QR y link compartible
- Incluir datos de facturación (RUC, email, dirección)
- Copiar, compartir o exportar datos al instante

## Tech Stack

- **Frontend:** React Native (Expo SDK 54)
- **Backend:** Firebase / Firestore
- **Auth:** Firebase Auth (Google/Email)
- **QR & Sharing:** react-native-qrcode-svg, react-native-share
- **Navegación:** React Navigation v7

## Instalación

### Prerrequisitos

- Node.js 18+
- npm o yarn
- Expo CLI
- iOS Simulator (Mac) o Android Studio

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/monimoni.git
cd monimoni
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar Firebase**
   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Copia `.env.example` a `.env`
   - Completa las credenciales de Firebase en `.env`
   - Actualiza `src/config/firebase.js` con tu configuración

4. **Ejecutar la app**

```bash
# Iniciar el servidor de desarrollo
npm start

# Ejecutar en iOS
npm run ios

# Ejecutar en Android
npm run android
```

## Estructura del Proyecto

```
monimoni/
├── App.js                 # Componente principal
├── src/
│   ├── screens/          # Pantallas de la app
│   │   └── HomeScreen.js
│   ├── components/       # Componentes reutilizables
│   ├── navigation/       # Configuración de navegación
│   │   └── AppNavigator.js
│   ├── services/         # Servicios (Firebase, API)
│   ├── config/           # Configuraciones
│   │   └── firebase.js
│   ├── utils/            # Utilidades y helpers
│   └── constants/        # Constantes (colores, bancos, etc.)
│       ├── colors.js
│       └── index.js
├── assets/               # Imágenes, iconos, fuentes
└── app.json             # Configuración de Expo

```

## Configuración iOS

El proyecto está configurado con:
- Bundle ID: `com.monimoni.app`
- Soporte para iPad
- Orientación: Portrait

## Configuración Android

El proyecto está configurado con:
- Package: `com.monimoni.app`
- Adaptive Icon con color de marca
- Edge-to-Edge habilitado

## Roadmap

### MVP (v1.0)
- [x] Setup base del proyecto
- [ ] Autenticación con Firebase
- [ ] CRUD de cuentas bancarias
- [ ] Generación de QR
- [ ] Compartir por WhatsApp/Link
- [ ] Datos de facturación

### Futuro (v2.0+)
- [ ] Solicitudes de pago dinámicas con PayPhone API
- [ ] División de gastos entre grupos
- [ ] Auto-detectar banco por prefijo de cuenta
- [ ] Integración con SRI para facturación
- [ ] Perfiles web públicos (monimoni.app/@usuario)

## Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.

## Contacto

MoniMoni Team - [@monimoni_ec](https://twitter.com/monimoni_ec)

Sitio Web: [https://monimoni.app](https://monimoni.app)
