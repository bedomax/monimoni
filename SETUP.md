# Setup Guide - MoniMoni

## Initial Setup

### 1. Configure Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project called "MoniMoni"
3. Enable Authentication:
   - Email/Password
   - Google Sign-In
4. Create a Firestore database in test mode
5. Copy the project credentials

### 2. Configure Environment Variables

```bash
# Copy the example file
cp .env.example .env

# Edit .env with your Firebase credentials
```

Also update `src/config/firebase.js` with your credentials.

### 3. Install Development Dependencies

```bash
# If using iOS (Mac only)
cd ios && pod install && cd ..

# Install global dependencies (if you don't have them)
npm install -g expo-cli
```

## Running the App

### Development Mode

```bash
# Start Metro Bundler
npm start

# In another terminal - iOS
npm run ios

# In another terminal - Android
npm run android
```

### Physical Device

1. Install the Expo Go app on your device
2. Run `npm start`
3. Scan the QR with your camera (iOS) or Expo Go (Android)

## Data Structure (Firestore)

### Collection: `users`

```javascript
{
  uid: "user_id",
  email: "user@example.com",
  displayName: "Juan Pérez",
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Collection: `bankAccounts`

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

### Collection: `paymentLinks`

```javascript
{
  userId: "user_id",
  type: "PayPhone",
  link: "https://payphone.app/...",
  label: "My Personal PayPhone",
  createdAt: timestamp
}
```

### Collection: `billingInfo`

```javascript
{
  userId: "user_id",
  ruc: "1234567890001",
  businessName: "My Company S.A.",
  address: "Main Avenue 123",
  email: "billing@company.com",
  phone: "+593987654321",
  createdAt: timestamp
}
```

## Permissions Configuration

### iOS (ios/Podfile)

```ruby
# Already configured automatically by Expo
# Required permissions:
# - Camera (for scanning QR)
# - File sharing
```

### Android (android/app/src/main/AndroidManifest.xml)

```xml
<!-- Already configured automatically by Expo -->
<!-- Required permissions: -->
<!-- - INTERNET -->
<!-- - CAMERA (optional, for scanning QR) -->
```

## Next Development Steps

### Phase 1: Authentication
- [ ] Implement login screen
- [ ] Integrate Firebase Auth
- [ ] Handle authentication states

### Phase 2: Account Management
- [ ] Bank accounts CRUD
- [ ] Account number validation
- [ ] Saved accounts list

### Phase 3: Payment Links
- [ ] Add PayPhone links
- [ ] Add PayPal/Nequi links
- [ ] URL validation

### Phase 4: Sharing
- [ ] Generate QR with all info
- [ ] Share via WhatsApp
- [ ] Share public link

### Phase 5: Billing
- [ ] Billing information form
- [ ] RUC validation
- [ ] Include in QR/sharing

## Testing

```bash
# Run tests (when implemented)
npm test

# Lint
npm run lint

# Format
npm run format
```

## Production Build

### Using EAS (Expo Application Services)

```bash
# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Configure project
eas build:configure

# Build for Android
eas build --platform android

# Build for iOS
eas build --platform ios
```

## Troubleshooting

### Error: "Module not found"
```bash
# Clear cache
npm start -- --reset-cache
```

### iOS Error: "Pod install failed"
```bash
cd ios
pod deintegrate
pod install
cd ..
```

### Android Error: Gradle
```bash
cd android
./gradlew clean
cd ..
```

## Useful Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Firebase for React Native](https://rnfirebase.io/)
- [PayPhone API Docs](https://payphone.app/docs)
