import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native'; // Importar useFocusEffect
import img from '../assets/SignIn.png';

export default function SignIn({ navigation }) {
  const translateX = useRef(new Animated.Value(300)).current; // Iniciar fuera de la pantalla a la derecha

  useFocusEffect(
    React.useCallback(() => {
      // Reiniciar el valor de translateX a 300
      translateX.setValue(300);

      // Iniciar la animación al montar el componente
      Animated.timing(translateX, {
        toValue: 0, // Mover a la posición original
        duration: 1000, // Duración de la animación en milisegundos
        useNativeDriver: true, // Utilizar el controlador nativo para mejor rendimiento
      }).start();
    }, [translateX])
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Imagen en la parte superior con animación */}
      <Animated.Image source={img} style={[styles.headerImage, { transform: [{ translateX }] }]} />

      {/* Contenedor de pestañas */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.tabTextActive}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.tabTextInactive}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Campos de entrada de texto con etiquetas */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail address</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} secureTextEntry />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Botón de Login */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Texto "OR" y sección de redes sociales */}
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, marginTop: 20 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: '#B5B5B5' }} />
        <View>
          <Text style={{ width: 50, textAlign: 'center' }}>OR</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: '#B5B5B5' }} />
      </View>
      <View style={styles.socialContainer}>
        <Text>Sign in using:</Text>
        <View style={styles.iconContainer}>
          <FontAwesome name="google" size={32} color="#4285F4" />
          <FontAwesome name="facebook" size={32} color="#3b5998" />
          <FontAwesome name="twitter" size={32} color="#1DA1F2" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F7F7' },
  headerImage: { width: '100%', height: 200, resizeMode: 'cover', marginBottom: 20 },
  tabContainer: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20 },
  activeTab: { flex: 1, borderBottomWidth: 2, borderBottomColor: '#FF5722', alignItems: 'center' },
  inactiveTab: { flex: 1, alignItems: 'center' },
  tabTextActive: { fontSize: 18, color: '#FF5722' },
  tabTextInactive: { fontSize: 18, color: 'gray' },
  inputContainer: { paddingHorizontal: 20, marginBottom: 20 },
  label: { fontSize: 14, color: '#333', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 15 },
  forgotPassword: { color: '#FF5722', textAlign: 'right', marginBottom: 20, paddingHorizontal: 20 },
  button: { backgroundColor: '#FF5722', padding: 15, borderRadius: 10, marginHorizontal: 20, marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 18, textAlign: 'center' },
  orText: { textAlign: 'center', marginVertical: 10 },
  socialContainer: { alignItems: 'center', marginTop: 10 },
  iconContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '60%', marginTop: 10 }
});
