import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomDropdown from '../CustomDropdown/CustomDropdown'; 


const InformationScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

const genderOptions = ['Male', 'Female', 'Others'];

  const handleNext = () => {
    navigation.navigate('NextScreen'); // 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete your Profile</Text>
      <Text style={styles.subTitle}>Don't worry, only you can see your personal data.</Text>

      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
        <Image source={require('../assets/icons/profile-placeholder.png')} style={styles.profileImage} />
        </View>
        {/* Edit Button */}
        <TouchableOpacity style={styles.editButton}>
          <Image 
            source={require('../assets/icons/edit.png')} // Add your edit button PNG image path here
            style={styles.editButtonImage} // Style the image
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
<Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
<Text style={styles.label}>Gender</Text>
    
  <View style={styles.input}>
    <CustomDropdown
      options={genderOptions}
      selectedOption={selectedGender}
      onSelect={setSelectedGender}
      placeholder="Select Gender"
    />
  </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#301934',
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    color: '#301934',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
    elevation:15,
    
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#fff',
    borderWidth: 10,
    borderColor: '#E71E58',
    elevation:50,
  },
  editButton: {
    position: 'absolute',
    top: 150,
    right: 100,
    width: 40,
    height: 40,
    backgroundColor: '#4369D7',
    borderRadius: 100, // Circular shape
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtonImage: {
    width: 30,
    height: 30, // Adjust these values as per the size of your PNG image
  },
  input: {
    height: 50,
    borderColor: '#301934',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 15,
    color: '#301934',
  },
  button: {
    backgroundColor: '#E71E58',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default InformationScreen;
