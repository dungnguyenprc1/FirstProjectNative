import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {InforCustomerScreen, RegisterPassword} from '../screens';
// import {InforCustomerScreen, RegisterPassword} from './src/screens';

const Stack = createNativeStackNavigator();
export default function InformationStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Information" component={InforCustomerScreen} />
      <Stack.Screen name="Password" component={RegisterPassword} />
    </Stack.Navigator>
  );
}
