import AsyncStorage from "@react-native-async-storage/async-storage";

class LocalStorageService {
  static async getPlacesFavorites() {
    try {
      const jsonValue = await AsyncStorage.getItem("favorites");
      console.log("toci",jsonValue);
      if (jsonValue != null) {
        return jsonValue;
      }
      return [];
    } catch (e) {
      console.log(e);
    }
  }
  static async addToFavoritesID(id) {
    try {
      let favorites = await AsyncStorage.getItem("favorites");
      if (favorites === null) {
        favorites = [];
      } else {
        favorites = JSON.parse(favorites);
      }
      favorites.push( id );
      await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
      console.log("Toci Limpio");
      let favorites2 = await AsyncStorage.getItem("favorites");
    } catch (error) {
      console.log(error);
    }
  }
}

export default LocalStorageService;