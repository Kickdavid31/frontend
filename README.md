# Yummies App

Una aplicación de entrega de alimentos desarrollada en React Native y Expo. La aplicación permite a los usuarios explorar menús, realizar pedidos y gestionar entregas de comida directamente desde su dispositivo móvil.

## Estructura del Proyecto

1. **GetApp** - Introducción a la app con opciones para:
   - Get Started
   - Sign In
   - Sign Up

2. **Choose From Menu** - Opciones para explorar:
   - Home
   - Menu
   - Favorites

3. **Confirm Order** - Pantalla "Your Order" para revisar y confirmar el pedido.

4. **Checkout** - Proceso de pago, incluyendo:
   - Deliver to
   - Order Summary

5. **Receive Order** - Pantalla de pago final ("Payment").

6. **Notificaciones y Perfil** - Funcionalidades adicionales:
   - Notifications
   - Profile

## Estructura de archivos

```plaintext
.
├── .gitignore
├── App.js
├── app.json
├── babel.config.js
├── package.json
├── README.md
├── assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   ├── SignIn.png
│   ├── SignUp.png
│   ├── snack-icon.png
│   └── splash.png
├── components
│   └── AssetExample.js
└── pages
    ├── DeliverTo.js
    ├── Favorites.js
    ├── GetStarted.js
    ├── Home.js
    ├── Notifications.js
    ├── OrderSummary.js
    ├── Payment.js
    ├── Profile.js
    ├── SignIn.js
    ├── SignUp.js
    └── YourOrder.js

```

# Dependencias

Las principales dependencias utilizadas en el proyecto incluyen:

- expo: ~51.0.28
- react: 18.2.0
- react-native: 0.74.5
- @expo/vector-icons: ^14.0.3
- react-native-paper: 4.9.2
- @react-navigation/stack: 6.4.1
- @react-navigation/native: ^6.1.6
- react-native-gesture-handler: ~2.16.1
- react-native-safe-area-context: 4.10.5

# Instalación

1. Clona este repositorio en tu máquina local.

2. Asegúrate de tener Node.js y Expo CLI instalados.

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Ejecuta el proyecto:

    ```bash
    npm start
    ```

5. Para abrir el proyecto en un emulador Android o iOS, usa los comandos:

    ```bash
    npm run android
    npm run ios
    ```

6. También puedes acceder desde un navegador con:

    ```bash
    npm run web
    ```

# Recursos
- Íconos de @expo/vector-icons
- Diseño de interfaz con react-native-paper
- Navegación con React Navigation

# Licencia
Este proyecto está bajo la licencia MIT.