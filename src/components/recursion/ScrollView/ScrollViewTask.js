import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import {food} from '../type';
import Card from '../Card/Card';

function ScrollViewTask() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {Object.keys(food).map((root, i) => {
            return (
              <View key={i}>
                {food[root].map((item, index) => {
                  return (
                    <View key={index}>
                      <Card root={root} values={item} />
                    </View>
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default ScrollViewTask;
