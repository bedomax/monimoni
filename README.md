# MoniMoni

**Your digital payment identity for Ecuador**

MoniMoni simplifies sharing payment information in Ecuador. Group your bank accounts, PayPhone, PayPal, Nequi links, and billing data in a single app.

## Features

- Add and save multiple bank accounts
- Payment links (PayPhone, PayPal, Nequi)
- Generate shareable QR and link
- Include billing information (RUC, email, address)
- Copy, share, or export data instantly

## Tech Stack

- **Frontend:** React Native (Expo SDK 54)
- **Backend:** Firebase / Firestore
- **Auth:** Firebase Auth (Google/Email)
- **QR & Sharing:** react-native-qrcode-svg, react-native-share
- **Navigation:** React Navigation v7

## Installation

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI
- iOS Simulator (Mac) or Android Studio

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/your-username/monimoni.git
cd monimoni
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure Firebase**
   - Create a project in [Firebase Console](https://console.firebase.google.com/)
   - Copy `.env.example` to `.env`
   - Fill in Firebase credentials in `.env`
   - Update `src/config/firebase.js` with your configuration

4. **Run the app**

```bash
# Start development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## Project Structure

```
monimoni/
├── App.js                 # Main component
├── src/
│   ├── screens/          # App screens
│   │   └── HomeScreen.js
│   ├── components/       # Reusable components
│   ├── navigation/       # Navigation configuration
│   │   └── AppNavigator.js
│   ├── services/         # Services (Firebase, API)
│   ├── config/           # Configurations
│   │   └── firebase.js
│   ├── utils/            # Utilities and helpers
│   └── constants/        # Constants (colors, banks, etc.)
│       ├── colors.js
│       └── index.js
├── assets/               # Images, icons, fonts
└── app.json             # Expo configuration

```

## iOS Configuration

The project is configured with:
- Bundle ID: `com.monimoni.app`
- iPad support
- Orientation: Portrait

## Android Configuration

The project is configured with:
- Package: `com.monimoni.app`
- Adaptive Icon with brand color
- Edge-to-Edge enabled

## Roadmap

### MVP (v1.0)
- [x] Base project setup
- [ ] Firebase authentication
- [ ] Bank accounts CRUD
- [ ] QR generation
- [ ] Share via WhatsApp/Link
- [ ] Billing information

### Future (v2.0+)
- [ ] Dynamic payment requests with PayPhone API
- [ ] Expense splitting between groups
- [ ] Auto-detect bank by account prefix
- [ ] SRI integration for invoicing
- [ ] Public web profiles (monimoni.app/@username)

## Contributing

Contributions are welcome. Please:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is under the MIT License.

## Contact

MoniMoni Team - [@monimoni_ec](https://twitter.com/monimoni_ec)

Website: [https://monimoni.app](https://monimoni.app)
