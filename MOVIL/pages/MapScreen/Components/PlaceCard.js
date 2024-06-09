import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const PlaceCard = ({image,photos,title,type,description,address,schedule,collectionId,id}) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate({name: 'CardPlace', params: {image,photos,title,type,description,address,schedule,collectionId,id}})}>
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image 
                    src={image}
                    style={{width: '100%', height: '100%'}}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text numberOfLines={4} ellipsizeMode='tail' style={styles.description}>
                    {description}
                </Text>
                <Text style={styles.scheduleText}>
                    {schedule} 
                </Text>
            </View>
        </View>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    container: {   
        zIndex: 1, 
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        width: width - 20,
        height: 140,
        borderRadius: 10,
        bottom: 0,
        justifyContent: 'center',
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 0,
        borderColor: 'rgba(0, 145, 209, 0.4)',   // Agregar un borde de color negro
        borderWidth: 4,
    },
    imgContainer: {
        width: '40%',
        height: '80%',
        borderRadius: 5,
        marginTop: 15,
        borderColor: 'rgba(0, 145, 209, 0.4)',   // Agregar un borde de color negro
        borderWidth: 4,
    },
    infoContainer: {
        width: '50%',
        height: '80%',
        marginTop: 15,
        marginLeft: 15,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    description: {
        height: '60%',
        fontSize: 17,
        color: 'green',
        maxWidth: '100%',
        maxHeight: '100%',
        marginTop: 5,
    },
    scheduleText: {
        marginTop: 5,
        fontSize: 15,
        color: '#9EFC8E',
    },
});
export default PlaceCard;