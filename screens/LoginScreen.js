import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Kagami</Text>

      <Text style={styles.inputText}>Email Address</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
      />
      <Text style={styles.inputText2}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>---------------- Or sign in with ----------------</Text>

      <View style={styles.socialButtonsContainer}>
        {/* Icons for social sign-in (Apple, Google, Facebook) */}
        <TouchableOpacity>
          <Image
            source={require('../assets/icons/apple.png')} // Example path for Apple icon
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/icons/google.png')} // Example path for Google icon
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/icons/facebook.png')} // Example path for Facebook icon
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.signUpText}>
        Don't have an Account? <Text
      style={styles.signUpLink}
      onPress={() => navigation.navigate('SignupScreen')}>
      Sign Up
    </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D81159', // Dark pink background
    padding: 20,
  },
  logoText: {
    fontSize: 64,
    fontFamily: 'Roboto', // Custom font for "Kagami"
    color: '#fff',
    marginBottom: 40,
  },
  inputText:{
    color: '#fff',
    marginRight:280,
  },
  inputText2:{
    color: '#fff',
    marginRight:300,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderColor: '#FFAF04',
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  signInButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#372549', // Dark purple button
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  orText: {
    color: '#fff',
    marginVertical: 10,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
  },
  icon: {
    backgroundColor: '#fff',
    borderRadius:80,
    width: 50,
    height: 50,
  },
  signUpText: {
    color: '#fff',
    marginTop: 20,
  },
  signUpLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
