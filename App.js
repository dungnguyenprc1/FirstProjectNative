import React from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import InforCustomerScreen from './src/screens/InforCustomerScreen';

const YourApp = () => {
  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1}}>
        <InforCustomerScreen />
      </SafeAreaView>
    </ScrollView>
  );
};

export default YourApp;
