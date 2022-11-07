import React from 'react';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import InformationStack from './src/navigation/InformationStack';
import {
  FlatRenderList,
  ScrollViewTask,
  SectionListTask,
  // FlatRenderList,
} from './src/components/recursion';
// import {FlatRenderList} from './src/components/recursion/FlatList/FlatRenderList';

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
          <Tab.Screen name="ScrollView" component={ScrollViewTask} />
          <Tab.Screen name="SectionList" component={SectionListTask} />
          <Tab.Screen name="FlatList" component={FlatRenderList} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default YourApp;
