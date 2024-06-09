import React from "react";
import { View, Text, ScrollView } from "react-native";
import CardFavorite from "./Components/CardFavorite";
import FavoriteScreenStyles from "./Styles/FavoriteScreenStyles";
import Footer from "../../components/Footer";
import { useState, useCallback, useEffect } from "react";
import Loader from "../../components/Loader";
import PocketBaseService from "../../services/PocketBaseService";
import LocalStorageService from "../../services/LocalStorageService";


const FavoriteScreen = (props) => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = useCallback((searchText) => {
    if (searchText) {
        const filtered = places.filter((place) =>
            place.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredPlaces(filtered);
    } else {
        setFilteredPlaces(places);
    }
  }, [places]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        var placesFavorites= await LocalStorageService.getPlacesFavorites();
        let records = await PocketBaseService.getFavorites(placesFavorites);
        setPlaces(records);
        setFilteredPlaces(records);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    )();
  }, []);

  return (
    <View style={FavoriteScreenStyles.mainContainer}>
      <View style={FavoriteScreenStyles.topContainer}>
        <Text style={FavoriteScreenStyles.favoriteTitle}>Favoritos</Text>
      </View>
      <ScrollView>
        <View style={FavoriteScreenStyles.middlePart}>
          <View style={FavoriteScreenStyles.column}>
            {filteredPlaces.map((place, index) => {
              return (
                <View style={{ width: '50%', paddingBottom: 40, paddingLeft: 10, paddingTop: 15 }} key={index}>
                  <CardFavorite
                    title={place.name}
                    address={place.address}
                    image={place.image}
                    navigation={props.navigation}
                  />
                </View>
              );
            })}
            {isLoading && <Loader />}
          </View>
        </View>
      </ScrollView>
      <Footer onSearch={handleSearch} />
    </View>
  );  
};

export default FavoriteScreen;