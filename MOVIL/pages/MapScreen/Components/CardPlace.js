import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image, Pressable, Alert, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Video } from 'expo-av';
import AudioPlayer from "./AudioPlayer";
import LocalStorageService from "../../../services/LocalStorageService";

const iconColor = "#FFFFFF";
const iconColorFavorite = "#F23134";

const CardPlace = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [audios, setAudios] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const route = useRoute();
  let { photos, title, type, description, address, schedule, collectionId, id } = route.params;
  const navigation = useNavigation();

  const pathImage = 'https://magnificent-painter.pockethost.io/api/files/';

  const handleIconPress = () => {
    // Toggle the favorite state
    setIsFavorite(!isFavorite);

    // Perform other actions, like adding to favorites or showing an alert
    if (!isFavorite) {
      LocalStorageService.addToFavoritesID(id);
      showAlert();
    }
  };

  useEffect(() => {
    let images = [];
    let videos = [];
    let audios = [];

    if (photos) {
      images = photos.filter(photo => photo.endsWith('.jpg') || photo.endsWith('.png') || photo.endsWith('.jpeg'));
      videos = photos.filter(photo => photo.endsWith('.mp4'));
      audios = photos.filter(photo => photo.endsWith('.mp3'));

      setImages(images);
      setVideos(videos);
      setAudios(audios);
    }
  }, [photos]);

  const showAlert = () => {
    Alert.alert(
      "Favoritos",
      "Se añadió a Favoritos",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" color={iconColor} />
          </Pressable>
          <Text style={styles.titleStyle}>{title}</Text>
          <Icon
            name={isFavorite ? 'favorite' : 'favorite-border'}
            color={iconColorFavorite}
            onPress={handleIconPress}
          />
        </View>
        <ScrollView>
          <ScrollView 
            horizontal={true} 
            contentContainerStyle={styles.scrollViewContainer}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: `${pathImage}${collectionId}/${id}/${image}` }}
                style={styles.imageStyle}
              />
            ))}
          </ScrollView>
          <View style={styles.infoStyle}>
            <Text style={styles.categoryStyle}>{type}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.address}>
              Direccion: <Text style={styles.noColor}>{address}</Text>
            </Text>
            <Text style={styles.schedule}>
              Horario de Atencion: <Text style={styles.noColor}>{schedule}</Text>
            </Text>
          </View>
          <View style={styles.videoContainer}>
            {videos.map((video, index) => (
              <View key={index} style={styles.videoWrapper}>
                <Text style={styles.videoTitle}>Video</Text>
                <Video
                  source={{ uri: `${pathImage}${collectionId}/${id}/${video}` }}
                  style={styles.videoStyle}
                  resizeMode="contain"
                  shouldPlay={false}
                  useNativeControls={true}
                  
                />
              </View>
            ))}
          </View>
          <View style={styles.audioContainer}>
            {audios.map((audio, index) => (
              <AudioPlayer
                key={index}
                uri={`${pathImage}${collectionId}/${id}/${audio}`}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const deviceHeight = Math.round(Dimensions.get("window").height);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: deviceHeight,
    alignItems: "center",
    
  },
  cardContainer: {
    width: deviceWidth,
    height: deviceHeight -10,
    borderColor: 'rgba(0, 145, 209, 0.4)', // Agregar un borde de color negro
    borderWidth: 4,
    backgroundColor: "#111213",
    borderRadius: radius,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
    padding: 20,
  },
  imageStyle: {
    width: deviceWidth - 40,
    height: 300,
    borderRadius: radius,
    opacity: 0.9,
    alignContent: "center",
    alignSelf: "center",
    marginRight: 10,
    marginLeft: 17,
    borderColor: 'rgba(0, 145, 209, 0.4)', // Agregar un borde de color negro
    borderWidth: 4,
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center",
    color: "#fff",
  },
  categoryStyle: {
    fontWeight: "200",
    color: '#9D9797',
  },
  infoStyle: {
    alignContent: "center",
    alignSelf: "center",
    padding: 20,
  },
  description: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "200",
    textAlign: "justify",
    marginTop: 8,
  },
  address: {
    color: "#3CAFE7",
    fontSize: 15,
    fontWeight: "200",
    textAlign: "justify",
    marginTop: 10,
  },
  schedule: {
    color: "#9EFC8E",
    fontSize: 15,
    fontWeight: "200",
    textAlign: "justify",
    marginTop: 10,
  },
  iconLabelStyle: {
    flexDirection: "row",
    marginTop: 10,
  },
  noColor: {
    color: "#fff",
  },
  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 4,
  },
  videoWrapper: {
    marginBottom: 20,
    width: deviceWidth - 40,
  },
  videoTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,   
  },
  videoStyle: {
    flex: 1,
    alignSelf: 'stretch',
    height: 300,
    borderRadius: radius,
    opacity: 0.9,
    marginRight: 10,
    marginLeft: 10,
    marginTop:-45,
    borderRadius:1,
    borderColor:'rgba(0, 145, 209, 0.4)',
    borderWidth:4,
    opacity: 0.9,
    borderRadius: radius,
  },
  audioContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 10,
  },
});

export default CardPlace;
