import React from 'react';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './src/HomeScreen';
import ServicesScreen from './src/ServicesScreen';
import ContactScreen from './src/ContactScreen';
import LoginScreen from './LoginScreen'

const Stack = createStackNavigator();

  const handleLogin = () => {

    if (username && password) {
      navigation.navigate('Home');
    }
  };


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
    
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


