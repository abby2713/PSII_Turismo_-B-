import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import {  Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { BackHandler,Alert } from 'react-native';

const Footer = ({ onSearch }) => {
  // Para navegar entre pantallas
  const navigation = useNavigation();
  // Función para cerrar la aplicación
  const handleCerrarApp = () => {
    // Mostrar un cuadro de diálogo de confirmación antes de cerrar la aplicación
    Alert.alert(
      'Confirmación',
      '¿Estás seguro de que quieres cerrar la aplicación?',
      [
        {
          text: 'Cancelar',
          style: 'cancel', // Opcional: estilo "Cancelar" para el botón
        },
        {
          text: 'Sí, cerrar',
          onPress: () => {
            // Puedes agregar lógica adicional aquí si es necesario
            // Por ejemplo, guardar datos o realizar limpieza antes de salir
            BackHandler.exitApp(); // Cierra la aplicación
          },
        },
      ]
    );
  };

  // Renderiza el componente que consiste en nuestro menu de la parte inferior de la pantalla, el cual contiene un searchbar y 4 iconos
  // que nos llevan a las pantallas de inicio, mapa, favoritos y configuración.
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigation.navigate('Seg')}>
          <Icon
            name="home"
            type="font-awesome"
            size={55}
            color="#ffffff"
            containerStyle={styles.icon}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate({ name: 'MapView', params: { categoryId: null } })}>
          <Icon
            name="compass"
            type="font-awesome"
            size={50}
            color="#ffffff"
            containerStyle={styles.icon}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('FavoriteScreen')}>
          <Icon
            name="heart"
            type="font-awesome"
            size={50}
            color="#ffffff"
            containerStyle={styles.icon}
          />
        </Pressable>
        <Pressable onPress={() => handleCerrarApp()}>
          <Icon
            name="close"
            type="font-awesome"
            size={50}
            color="white"
            containerStyle={styles.icon}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    bottom: 0,
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'black',
    width: '100%',
    height: 125,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderColor: 'rgba(0, 145, 209, 0.4)',   // Agregar un borde de color negro
    borderWidth: 4,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    height: '40%',
    justifyContent: 'space-evenly',
    
  },
  icon: {
    flex: 1,
    color: '#333232',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
