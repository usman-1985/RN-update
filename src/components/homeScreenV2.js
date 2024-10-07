import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreenV2 = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('HomeScreenV3'); // Navigate to HomeScreenV3
  };

  const handleSkip = () => {
    console.log('Skip button pressed');
  };

  const handleVectorPress = () => {
    navigation.navigate('HomeScreenV1');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleVectorPress} style={styles.vectorBottom}>
        {/* Invisible vector element can be made touchable */}
      </TouchableOpacity>
      <Image
        source={require('../assets/images/building.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Set Location-Based Reminders</Text>
      <Text style={styles.description}>
        Create tasks linked to specific places. Get a notification
        when you arrive at your set location
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 32,
    backgroundColor: '#fff',
  },
  image: {
    width: 280,
    height: 294,
    position: 'absolute',
    top: 29,
    left: 21,
    resizeMode: 'contain',
  },
  vectorBottom: {
    width: 3,
    height: 6,
    position: 'absolute',
    top: 511,
    left: 268,
    borderWidth: 0.5,
    borderColor: '#677DBE',
    opacity: 0,
  },
  button: {
    width: 104,
    height: 28,
    position: 'absolute',
    top: 499,
    left: 201,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 14,
    textAlign: 'center',
  },
  text: {
    width: 235,
    height: 23,
    position: 'absolute',
    top: 363,
    left: 45,
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 23.44,
    textAlign: 'left',
  },
  description: {
    width: 260,
    height: 28,
    fontFamily: 'Roboto',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 14,
    textAlign: 'center',
    position: 'absolute',
    top: 398,
    left: 28,
  },
  skipButton: {
    width: 104,
    height: 28,
    position: 'absolute',
    top: 499,
    left: 15,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#0000004D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipText: {
    fontFamily: 'Roboto',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 14,
    textAlign: 'center',
  },
});

export default HomeScreenV2;
