import { useEffect, useState, useCallback } from 'react';
import { View, ScrollView, Image, Pressable } from 'react-native';
import { faCartShopping, faHotel, faBurger, faStar, faSchool, faBasketball } from '@fortawesome/free-solid-svg-icons'
import MenuCard from './Components/MenuCard';
import Footer from '../../components/Footer';
import MainScreenStyles from './Styles/MainScreenStyles';
import Loader from '../../components/Loader';
import PocketBaseService from '../../services/PocketBaseService';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarAlt,faGift} from '@fortawesome/free-solid-svg-icons';



const Seg = (props) => {
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //const [location, setLocation] = useState(null);
  const [filteredCollections, setFilteredCollections] = useState([]);
  const handleSearch = useCallback((searchText) => {
    if (searchText) {
      const filtered = collections.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredCollections(filtered);
    } else {
      setFilteredCollections(collections);
    }
  }, [collections]);
  const menuItems = [
    { title: 'Plazas', icon: faCartShopping, },
    { title: 'Hoteles', icon: faHotel, },
    { title: 'Comida', icon: faBurger, },
    { title: 'Atracciones', icon: faStar, },
    { title: 'Educación', icon: faSchool, },
    { title: 'Deportes', icon: faBasketball, }
  ]

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        //Recuperar Categorias
        let records = await PocketBaseService.getCategories(menuItems);
        setCollections(records);
        setFilteredCollections(records);
        //let location = await Location.getCurrentPositionAsync({});
        //let geocode = await Location.reverseGeocodeAsync(location.coords);
        //setLocation(geocode[0]);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    })()
  }, [])
  return (
    <View style={MainScreenStyles.mainContainer}>
      <View style={MainScreenStyles.topContainer}>
        <Image
          source={require('./Assets/Logo_Base.png')}
          style={{ 
            width: '101%', 
            height: '75%',
            marginRight: 40, 
            marginTop: 50,
             }}
        />
      </View>     
      <View style={MainScreenStyles.middlePart}>
        <ScrollView contentContainerStyle={MainScreenStyles.column}>
          {
            filteredCollections && filteredCollections.map((item, index) => (
              <MenuCard
                key={index}
                title={item.name}
                icon={item.icon}
                id={item.id}
                props={props}
              />
            ))
          }
          {isLoading && (
            <Loader />
          )}
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
};
export default Seg;