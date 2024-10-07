import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const HomeScreenV1 = () => {
  const navigation = useNavigation(); // Get the navigation object

  const handleNext = () => {
    navigation.navigate('HomeScreenV2'); // Navigate to HomeScreenV2
  };

  const handleSkip = () => {
    console.log('Skip button pressed');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/boy.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Manage Your Tasks Easily</Text>
      <Text style={styles.description}>
        Easily track and manage your tasks based on location.
        Never forget important things to do when you’re on the go!
      </Text>
      <View style={styles.vector} />
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
    width: 319,
    height: 298,
    resizeMode: 'contain',
  },
  vector: {
    width: 3,
    height: 6,
    position: 'absolute',
    top: 511,
    left: 268,
    borderWidth: 0.5,
    borderColor: '#677DBE',
    opacity: 0, // Set opacity to 0 for invisibility
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
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
  },
  buttonText: {
    fontFamily: 'Roboto', // Ensure Roboto is linked in your project
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
    fontFamily: 'Roboto', // Ensure Roboto is linked in your project
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
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
  },
  skipText: {
    fontFamily: 'Roboto', // Ensure Roboto is linked in your project
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 14,
    textAlign: 'center',
  },
});

export default HomeScreenV1;
