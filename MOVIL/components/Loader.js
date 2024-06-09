import React from 'react';
import { StyleSheet, View } from 'react-native';
import Lottie from 'lottie-react-native';

// Renderiza el componente que consiste en un loader animado
export default function Loader() {
  return (
    <View style={styles.container}>
      {/* Loader de Lottie animado */}
      <Lottie
        style={styles.loader}
        source={require('../assets/animations/9921-loader.json')}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '80%',
        maxWidth: '100%',
      },
      loader: {
        width: 200, // Modifica el ancho según tus necesidades
        height: 200, // Modifica la altura según tus necesidades
        alignSelf: 'center', // Centra el loader horizontalmente dentro del contenedor
      },
});