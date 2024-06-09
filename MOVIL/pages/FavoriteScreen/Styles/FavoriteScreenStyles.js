import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const aspectRatio = 0.17;
const topContainerHeight = screenWidth * aspectRatio;

const FavoriteScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    
  },
  topContainer: {
    width: "100%",
    height: "15%",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    
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
    marginTop: 28,
    
    

  },
  favoriteTitle: {
    width: '90%',
    height:topContainerHeight,
    marginTop: 10,
    fontSize: 20,
    color: 'white', // Color del texto en blanco
    borderColor: 'white', // Color del borde en blanco
    borderWidth: 1, // Ancho del borde
    backgroundColor: 'black', // Color de fondo en negro
    padding: 15, // Añade relleno para separar el texto del borde
    borderRadius: 20, // Agrega un borde redondeado con un radio de 10 unidades
    textAlign: 'center',
    borderColor: 'rgba(0, 145, 209, 0.4)',   // Agregar un borde de color negro
    borderWidth: 4,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  middlePart: {
    height: "67%",
    width: "100%",
    paddingHorizontal: 15,
    paddingBottom: 120,
    
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "5%",
    marginTop: 0,
    
  },
  showAllSubtitle: {
    fontSize: 16,
    color: "#3CAFE7",
    marginTop: 30,
  },
  itemText: {
    fontSize: 20,
    color: "black",
  },
  column: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 20,
    borderColor: 'rgba(0, 145, 209, 0.4)',   // Agregar un borde de color negro
    borderWidth: 4,
    backgroundColor: 'rgba(0, 145, 209, 0.1)',
  },
  itemContainer: {
    height: "10%",
    borderColor: "#C3C3C3",
    borderWidth: 2,
    marginBottom: 8,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    
  },
  bottomContainer: {
    flex: 1,
    bottom: 0,
    alignItems: "center",
    position: "absolute",
    backgroundColor: "black",
    width: "100%",
    height: 150,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    
  },
  searchBarContainer: {
    marginTop: 10,
    width: "90%",
    backgroundColor: "black",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    paddingHorizontal: 16,
  },
  searchBarInputContainer: {
    backgroundColor: "#333232",
  },
  searchBarInput: {
    color: "#ABABAB",
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  icon: {
    flex: 1,
    color: "#333232",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoriteScreenStyles;