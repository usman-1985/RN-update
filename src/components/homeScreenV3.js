import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreenV3 = () => {
  const navigation = useNavigation(); // Get the navigation object

  // Function to handle vector press
  const handleVectorPress = () => {
    navigation.navigate('HomeScreenV2'); // Navigate to HomeScreenV2
  };

  const handleGetStarted = () => {
    navigation.navigate('HomeScreenV2'); // Navigate to another screen (if needed)
  };

  return (
    <View style={styles.container}>
      {/* Touchable Vector Element */}
      <TouchableOpacity style={styles.ellipse} onPress={handleVectorPress}>
        <View style={styles.vector} />
      </TouchableOpacity>

      <Image
        source={require('../assets/images/man.png')} // Change the path to your image
        style={styles.image}
      />
      {/* Main Title Text */}
      <Text style={styles.text}>Set Location-Based Reminders</Text>

      {/* Description Text */}
      <Text style={styles.description}>
        Create tasks linked to specific places. Get a notification when you arrive at your set location.
      </Text>

      {/* "Get Started" Button */}
      <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
        <Text style={styles.getStartedText}>Get Started</Text>
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
  ellipse: {
    width: 33,
    height: 33,
    position: 'absolute',
    top: 11,
    left: 15,
    backgroundColor: '#D9D9D966',
    borderRadius: 16.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vector: {
    width: 6,
    height: 13,
    borderTopWidth: 1.5,
    borderColor: '#677DBE',
    transform: [{ rotate: '-180deg' }],
  },
  image: {
    width: 324,
    height: 312,
    resizeMode: 'contain',
    position: 'absolute',
    top: 17,
    left: -1,
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
  getStartedButton: {
    width: 202,
    height: 41,
    position: 'absolute',
    top: 492,
    left: 59,
    borderRadius: 41,
    backgroundColor: '#677DBE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 14,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default HomeScreenV3;
