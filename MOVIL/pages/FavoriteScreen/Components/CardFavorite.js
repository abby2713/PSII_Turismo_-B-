//Creamos el compoente card la cual tiene la imagen y el titulo del lugar, un icono de favorito  y la direccion del lugar

import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { Icon } from "react-native-elements";
import { BackgroundImage } from "react-native-elements/dist/config";

const iconColor = "#3CAFE7";
const iconColorFavorite = "#F23134";

const CardFavorite = ({image,title,address}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <BackgroundImage
            src={image}
            style={styles.backgroundImage}
            borderRadius={15}
          >
            <View style={styles.iconContainer}>

              <Icon name="favorite" color={iconColorFavorite} />
            </View>
          </BackgroundImage>
        </View>

        <View style={styles.Info}>
          <Text style={styles.titleStyle}>{title}</Text>
          <View style={styles.iconLabelStyle}>
            <Icon name="place" color={iconColor} size={15} style={styles.iconPlace} />
            <Text style={styles.address}>
              {address}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const deviceHeight = Math.round(Dimensions.get("window").height);
const radius = 25;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: deviceHeight/6,
    borderRadius: radius,
    marginBottom:60 ,
    
  },
  card: {
    width: "40%",
    height: "100%",
    borderRadius: radius,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
    marginRight: 10,
  },
  titleStyle: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  iconLabelStyle: {
    flexDirection: "row",
  },
  address: {
    fontSize: 12,
    color: "#111213",
    marginLeft: 10,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",

  },
  imageContainer: {

    borderRadius: radius,
  },
  iconPlace: {
    margin: 0,
  },
});

export default CardFavorite;