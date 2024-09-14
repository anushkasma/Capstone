import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogoPage from './screens/LogoPage';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomePage from './screens/HomePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogoPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogoPage" component={LogoPage} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
