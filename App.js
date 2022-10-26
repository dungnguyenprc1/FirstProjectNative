import React from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import InforCustomerScreen from './src/screens/InforCustomerScreen';

const YourApp = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <InforCustomerScreen />
      </SafeAreaView>
    </ScrollView>
  );
};

export default YourApp;
