import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation(); // For navigating between screens

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subTitle}>Fill your information to register</Text>

      <Text style={styles.inputText}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
    <Text style={styles.inputText2}>Email Address</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
    <Text style={styles.inputText}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
          <View style={[styles.checkbox, isChecked && styles.checked]}>
            {isChecked && (
              <Image
                source={require('../assets/icons/check.png')} // Path to your checkmark icon
                style={styles.checkmarkIcon}
              />
            )}
          </View>
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>
          Agree with <Text style={styles.link}>Terms & Condition</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} onPress={() => navigation.navigate('HomePage')}>
        Sign Up
        </Text>
      </TouchableOpacity>

      <Text style={styles.orText}>--------------- Or sign up with ----------------</Text>

      <View style={styles.socialButtonsContainer}>
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

      <Text style={styles.signInText}>
        Already have an Account?{' '}
        <Text style={styles.signInLink} onPress={() => navigation.navigate('LoginScreen')}>
          Sign In
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D81159',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputText:{
    color: '#fff',
    marginRight:300,
  },
  inputText2:{
    color: '#fff',
    marginRight:280,
  },
  input: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#FFAF04',
    paddingLeft: 15,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderColor: '#fff',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#fff',
  },
  checkmarkIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  checkboxLabel: {
    color: '#fff',
  },
  link: {
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#372549',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  orText: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
    marginLeft:80,
  },
  icon: {
    backgroundColor: '#fff',
    borderRadius:80,
    width: 50,
    height: 50,
  },
  signInText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
  signInLink: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
