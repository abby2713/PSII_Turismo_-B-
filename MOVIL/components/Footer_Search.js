import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { BackHandler, Alert } from 'react-native';

const Footer_Search = ({onSearch}) => {
    // Para que el searchbar funcione correctamente
    const [search, setSearch] = React.useState('');

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
            <SearchBar
            placeholder="Buscar"
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.searchBarInputContainer}
            inputStyle={styles.searchBarInput}
            searchIcon={<Icon name="search" size={18} color="#ABABAB" />}
            value={search}
            onChangeText={(text) => {
                setSearch(text);
                onSearch(text);
            }}
            />
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
                <Pressable onPress={() => navigation.navigate({name: 'MapView', params: {categoryId:null}})}>
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
                    color="#ffffff"
                    containerStyle={styles.icon}
                    />
                </Pressable>
            </View>
        </View>
    );
}

export default Footer_Search;

const styles = StyleSheet.create({
    bottomContainer: {
    flex: 1,
    bottom: 0,
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'black',
    width: '100%',
    height: 150,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderColor: 'rgba(0, 145, 209, 0.4)',   // Agregar un borde de color negro
    borderWidth: 4,
  },
  searchBarContainer: {
    marginTop: 10,
    width: '90%',
    backgroundColor: 'black',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    paddingHorizontal: 16,
  },
  searchBarInputContainer: {
    backgroundColor: 'rgba(0, 145, 209, 0.4)',
    borderRadius: 50,
  },
  searchBarInput: {
    color: '#ABABAB',
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 5,
    width: '100%',
    height: '30%',
    justifyContent: 'space-evenly',
  },
  icon: {
    flex: 1,
    color: '#333232',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
