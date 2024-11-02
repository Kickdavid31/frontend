// pages/GetStarted.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

export default function GetStarted({ navigation }) {
  return (
    <ImageBackground 
      source={{ uri: 'https://your-image-url.com' }} // Puedes reemplazar con la URL de tu imagen de fondo
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Yummies</Text>
        <Text style={styles.subtitle}>Tasty meals delivered to your doorstep</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: {
    width: '100%',       // Ocupa todo el ancho del dispositivo
    height: '100%',      // Ocupa toda la altura del dispositivo
    flex: 1,
    backgroundColor: '#2D2D2D', // Fondo oscuro
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#E76F00', // Botón naranja
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
