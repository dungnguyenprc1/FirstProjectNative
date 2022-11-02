import React from 'react';

import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import InformationStack from './src/navigation/InformationStack';
import {FlatListTask} from './src/components/recursion/FlatList/FlatListTask';
// import {FlatRenderList} from './src/components/recursion/FlatListTask';

import ScrollViewTask from './src/components/recursion/ScrollView/ScrollViewTask';
import FlatRenderList from './src/components/recursion/FlatList/FlatRenderList';
// import {ScrollViewTask} from './src/components/recursion/ScrollViewTask';
// import {FlatListTask} from './src/components/recursion/FlatListTask';
const theme = {
  colors: {
    cam: '#f4a31e',
    error: '#f44336',
    gray: '#e5e5e5',
    borderInput: '#A5ABB3',
  },
};

const Tab = createBottomTabNavigator();

const YourApp = () => {
  return (
    // <InforCustomerScreen />
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={InformationStack} />
          <Tab.Screen name="FlatList" component={FlatListTask} />
          <Tab.Screen name="ScrollView" component={ScrollViewTask} />
          <Tab.Screen name="FlatLIST" component={FlatRenderList} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default YourApp;
