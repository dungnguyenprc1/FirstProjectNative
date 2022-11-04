import {View, ScrollView, Text} from 'react-native';
import React from 'react';

export default function Card({root}) {
  return (
    <View>
      <ScrollView>
        <Text>{root}</Text>
      </ScrollView>
    </View>
  );
}
