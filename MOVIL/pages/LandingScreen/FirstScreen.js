import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { ImageBackground } from 'react-native';
import LandingScreenStyles from './Styles/LandingScreenStyles';

// Renderiza el componente que consiste en la primera pantalla de la aplicación, la cual contiene un botón que nos lleva a la segunda pantalla.
const FirstScreen = (props) => {
    // Función para navegar a la segunda pantalla
    const handlePress = () => {
        props.navigation.navigate('Seg');
    };

    // Renderiza el componente
    return (
        <ImageBackground
            source={require('./Assets/Welcome.jpg')}
            style={LandingScreenStyles.backgroundImage}
        >
            <View style={LandingScreenStyles.textContainer}>
                {/* Aquí puedes añadir cualquier texto o elementos adicionales */}
            </View>

            <Pressable style={LandingScreenStyles.button} onPress={handlePress}>
                <Text style={LandingScreenStyles.buttonText}>COMENZAR AVENTURA</Text>
            </Pressable>
        </ImageBackground>
    );
}

export default FirstScreen;
