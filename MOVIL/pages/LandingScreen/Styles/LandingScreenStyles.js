import { StyleSheet } from 'react-native';

const LandingScreenStyles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        width: '100%',
        height: '100%',
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        marginTop: 200,
        marginLeft: 20,
    },
    text: {
        fontSize: 50,
        color: 'white',
        textAlign: 'left',
        lineHeight: 80,
        marginTop: 100,
    },
    button: {
        position: 'absolute', // Fija la posición del botón
        bottom: 125, // Ajusta esta propiedad para cambiar la distancia desde la parte inferior
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 50,
        width: '60%',
        height: '7%',
        borderWidth: 2, // Ancho del borde blanco
        borderColor: 'white', // Color del borde blanco
    },
    buttonText: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default LandingScreenStyles;