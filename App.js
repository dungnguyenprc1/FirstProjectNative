import React, {useState} from 'react';

import {Text, View} from 'react-native';
// import InforCustomerScreen from './src/screens/InforCustomerScreen/InforCustomerScreen';
import {InforCustomerScreen, RegisterPassword} from './src/screens';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const theme = {
  colors: {
    cam: '#f4a31e',
    error: '#f44336',
    gray: '#e5e5e5',
    borderInput: '#A5ABB3',
  },
};

const Stack = createNativeStackNavigator();
const YourApp = () => {
  return (
    // <InforCustomerScreen />
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Information" component={InforCustomerScreen} />
          <Stack.Screen name="Password" component={RegisterPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default YourApp;
