import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';

const AudioPlayer = ({ uri }) => {
  const [sound, setSound] = useState(null);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const loadAudio = async () => {
      const { sound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: false }
      );
      setSound(sound);

      sound.setOnPlaybackStatusUpdate((status) => {
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
      });
    };

    loadAudio();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [uri]);

  const playSound = async () => {
    if (sound) {
      await sound.playAsync();
    }
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
    }
  };

  const seekSound = async (value) => {
    if (sound) {
      await sound.setPositionAsync(value);
    }
  };

  return (
    <View style={styles.audioContainer}>
      <Text style={styles.audioTitle}>Audio</Text>
        <Slider
            style={{width: 325, height: 40}}
            minimumValue={0}
            maximumValue={duration}
            value={position}
            onValueChange={seekSound}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="rgba(0, 145, 209, 1)"
        />
        <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={playSound} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={pauseSound} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Pause</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    audioContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 30,
        padding: 0,
        borderColor:'rgba(0, 145, 209, 0.4)',
        borderWidth:4,
        borderRadius:10,
        
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom:15
        
    },
    buttonStyle: {
        width: 100,
        height: 50,
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderWidth:2,
        borderColor:'rgba(0, 145, 209, 0.4)',
        marginLeft:20
    },
    buttonText: {
        color: 'white',
        fontSize:18
    },
    audioTitle: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "600",
      textAlign: "center",
      marginTop: 10,   
    },
});

export default AudioPlayer;
