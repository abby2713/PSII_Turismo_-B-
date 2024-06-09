import { StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const MainScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  topContainer: {
    width: '100%', 
    height: '17%', 
    alignSelf: 'flex-start', 
    alignItems: 'center',
    justifyContent: 'center', 
    paddingLeft: 30, 
  },
  middleContainer: {
    width: '100%', 
    height: '10%', 
    alignSelf: 'flex-start', 
    alignItems: 'center',
    justifyContent: 'center', 
    paddingLeft: 30, 
    marginTop:'-8%',
    
  },
  positionCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  locationTitle: {
    marginTop: 30,
    fontSize: 20,
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor:'black',
    padding: 15,
    borderRadius: 20,
    textAlign: 'center',
    borderColor: 'rgba(0, 145, 209, 0.4)',
    borderWidth: 3,
    fontWeight:'bold',
  },
  publiTour: {
    width: '30%',
    height: '90%',
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',  
    marginRight:'60%',
    backgroundColor:'black',
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    borderColor: 'rgba(0, 145, 209, 0.4)',   // Agregar un borde de color negro
    borderWidth: 4,
    
  },
  promoTour: {
    width: '30%',
    height: '90%',
    flexDirection: 'row',
    marginRight: 55,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    backgroundColor:'black',
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    borderColor: 'rgba(0, 145, 209, 0.4)',   // Agregar un borde de color negro
    borderWidth: 4,
  },
  text: {
    fontSize: 16, 
    color: 'black', 
    fontWeight: 'bold',
    paddingTop: 10,
    paddingRight: 15,
  },
  middlePart: {
    flex: 0,
    //backgroundColor: 'yellow',
    height: '68%',
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    paddingLeft: 35,
    alignContent: 'center',
    //backgroundColor:'red'
  },
  column: {
    //flex: 1, 
    marginRight: 8, 
    paddingBottom: 163,
    paddingTop:30,
    //backgroundColor: 'red',
  },
  
});

export default MainScreenStyles
