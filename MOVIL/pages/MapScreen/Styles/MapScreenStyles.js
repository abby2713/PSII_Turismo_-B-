import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

// Obtén el ancho de la pantalla
const screenWidth = Dimensions.get('window').width;

const aspectRatio = 0.17; // Proporción que desees (en este caso, 8%)
const aspectRatio2 = 0.23; 

const topContainerHeight = screenWidth * aspectRatio;
const topContainerHeight2 = screenWidth * aspectRatio2;

const MapScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    position: 'relative',
    zIndex: 1,
    flexDirection: 'row',
    width: '100%',
    height: topContainerHeight,
    alignSelf: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 15,
    marginTop: 0,
    backgroundColor: 'black',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderColor: 'rgba(0, 145, 209, 0.4)',   // Agregar un borde de color negro
    borderWidth: 4,
  },
  backIcon: {
    width: '15%',
    height: '50%',
    backgroundColor: 'rgba(0, 145, 209, 0.4)',
    flexDirection: 'row',
    marginLeft: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  qIcon: {
    width: '15%',
    height: '50%',
    backgroundColor: 'rgba(0, 145, 209, 0.4)',
    flexDirection: 'row',
    marginRight: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
  map: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    marginTop: 57,
  },
  cobntainer2: {
    flex: 1,
    bottom: 0,
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'black',
    width: '100%',
    height: '15%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderColor: 'rgba(0, 145, 209, 0.4)',   // Agregar un borde de color negro
    borderWidth: 4,
    

  },
  searchBarContainer: {

    marginTop: 2,
    width: '90%',
    height:topContainerHeight2,
    backgroundColor: 'rgba(0, 145, 209, 0.0)', 
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    paddingHorizontal: 15,
    

  },
  searchBarInputContainer: {
    backgroundColor: 'rgba(0, 145, 209, 0.4)',
    
    borderTopLeftRadius:30,
    borderTopRightRadius:30,

  },
  searchBarInputContainer2: {
    backgroundColor: '#0000',
    borderRadius: 50,

  },
  searchBarInput: {
    color: '#ABABAB',
    
  },
  carrouselContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 60,
    width: '100%',
    height: '35%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  locationTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 16, // Ajusta el espaciado según sea necesario
    marginTop: 10, // Ajusta el espaciado según sea necesario
    
  },
});

export default MapScreenStyles;