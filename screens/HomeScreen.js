import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Kagami</Text>
      <Text style={styles.subtitleText}>Are you Seeking for Perfect Outfit Color?</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')} // Update the navigation target
      >
        <Text style={styles.buttonText}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D81159', // Dark pink background
  },
  logoText: {
    fontSize: 48,
    color: '#fff',
    fontFamily: 'Cursive', // You can specify the font family if it’s included
    marginBottom: 20,
  },
  subtitleText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#000',
  },
});

export default HomeScreen;
