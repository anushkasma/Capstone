import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logo = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [navigation]);


  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Kagami</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D81159',  // Same background color
    justifyContent: 'center',     // Centers content vertically
    alignItems: 'center',         // Centers content horizontally
  },
  logoText: {
    fontFamily: 'Alex Brush',     // Custom font
    fontSize: 80,
    fontWeight: '400',
    lineHeight: 100,
    color: '#FFF',                // White text color
    textAlign: 'center',
  },
});

export default Logo;
