import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, FlatList, Button } from 'react-native';
import{Image} from 'react-native';

const CustomDropdown = ({ options, selectedOption, onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDropdown = () => setIsVisible(!isVisible);

  const handleSelect = (option) => {
    onSelect(option);
    setIsVisible(false);
  };

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
        <Image
        source={require('../assets/icons/dropdown.png')}
        style={styles.dropdownButtonImage}
        /><Text style={styles.dropdownText}>{selectedOption || 'Select an option'}</Text>  
    </TouchableOpacity>
      <Modal transparent visible={isVisible} animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setIsVisible(false)}>
          <View style={styles.modalContainer}>
            <FlatList
              data={options}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.option} onPress={() => handleSelect(item)}>
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    width: '100%',
    marginVertical: 10,
  },
  dropdownButton: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  dropdownText: {
    fontSize: 16,
    marginLeft:40,
    bottom:27,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
  },
  option: {
    padding: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 16,
  },
  dropdownButton:{
  },
  dropdownButtonImage:{
    width: 30,
    height: 30,
    
  },
});

export default CustomDropdown;
