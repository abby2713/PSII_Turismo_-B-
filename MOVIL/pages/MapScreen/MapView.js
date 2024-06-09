import React, { useEffect, useState, useRef } from 'react';
import { View, Pressable, Alert, ScrollView } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { SearchBar } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faQuestion } from '@fortawesome/free-solid-svg-icons';
import PlaceCard from './Components/PlaceCard';
import Loader from '../../components/Loader';
import PocketBaseService from '../../services/PocketBaseService';
import MapScreenStyles from './Styles/MapScreenStyles';

export default function App(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [region, setRegion] = useState(null);
  const [search, setSearch] = useState('');
  const [marker, setMarker] = useState(null);
  const mapRef = useRef(null);

  const pathImage = 'https://magnificent-painter.pockethost.io/api/files/';

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso para acceder a la ubicación fue denegado');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      setIsLoading(true);
      const { categoryId } = props.route.params;
      let records = await PocketBaseService.getLocationsByCategory(categoryId);
      records = records.map((record) => {
        const image = record.photos.find((photo) => photo.includes('.jpg') || photo.includes('.png'));
        return {
          ...record,
          image: image ? `${pathImage}${record.collectionId}/${record.id}/${image}` : null,
        };
      });
      setPlaces(records);
      setFilteredPlaces(records);
      setIsLoading(false);
    })();
  }, [props.route.params]);

  useEffect(() => {
    if (places.length > 0) {
      const filtered = places.filter((place) =>
        place.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPlaces(filtered);

      if (filtered.length === 1) {
        const place = filtered[0];
        mapRef.current.animateToRegion({
          latitude: place.latitude,
          longitude: place.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      }
    }
  }, [search, places]);

  const handlePress = (num) => {
    if (num === 1) {
      props.navigation.goBack();
    } else if (num === 2) {
      Alert.alert(
        'Ayuda',
        'En esta pantalla puedes seleccionar o ver un lugar en el mapa para que disfrutes de dicho lugar.',
        [{ text: 'Ok' }]
      );
    }
  };

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setMarker(<Marker coordinate={coordinate} />);
  };

  return (
    <View style={MapScreenStyles.container}>
      <View style={MapScreenStyles.topContainer}>
        <Pressable style={MapScreenStyles.backIcon} onPress={() => handlePress(1)}>
          <FontAwesomeIcon icon={faChevronLeft} size={20} color="#FFFFFF" />
        </Pressable>
        <Pressable style={MapScreenStyles.qIcon} onPress={() => handlePress(2)}>
          <FontAwesomeIcon icon={faQuestion} size={20} color="#FFFFFF" />
        </Pressable>
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        onPress={handleMapPress}
        style={MapScreenStyles.map}
        region={region}
        showsUserLocation={true}
      >
        {filteredPlaces.map((place, index) => (
          <Marker
            key={index}
            pinColor="red"
            coordinate={{ latitude: place.latitude, longitude: place.longitude }}
            title={place.name}
            onPress={() => {
              props.navigation.navigate('CardPlace', {
                photos: place.photos,
                title: place.name,
                type: place.type,
                description: place.description,
                address: place.address,
                schedule: place.schedule,
                collectionId: place.collectionId,
                id: place.id,
              });
            }}
          />
        ))}
        {marker}
      </MapView>
      <View style={MapScreenStyles.carrouselContainer}>
        <ScrollView horizontal={true}>
          {filteredPlaces.map((item, index) => (
            <PlaceCard
              key={index}
              image={item.image}
              title={item.name}
              type={item.type}
              description={item.description}
              address={item.address}
              schedule={item.schedule}
              collectionId={item.collectionId}
              id={item.id}
              photos={item.photos}
              item={item}
            />
          ))}
          {isLoading && <Loader />}
        </ScrollView>
      </View>
      <View style={MapScreenStyles.cobntainer2}>
        <SearchBar
          placeholder="Buscar"
          containerStyle={MapScreenStyles.searchBarContainer}
          inputContainerStyle={MapScreenStyles.searchBarInputContainer}
          inputStyle={MapScreenStyles.searchBarInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>
    </View>
  );
}
