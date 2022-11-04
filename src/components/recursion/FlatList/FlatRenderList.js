import React from 'react';
import {FlatList, View, Text, SafeAreaView} from 'react-native';
import Card from '../ScrollView/Card';
import {food} from '../type';

export const FlatRenderList = () => {
  const render = ({item}) => {
    const {content, data} = item;

    console.log('flatlisttt', item);
    return (
      <View>
        <Text>{content}</Text>
        <Text>{item.name}</Text>
        <FlatList data={data} renderItem={render} />
      </View>
    );
  };
  return (
    <View>
      {Object.keys(food).map((root, i) => {
        return (
          <View key={i}>
            <FlatList data={food[root]} renderItem={render} horizontal={true} />
          </View>
        );
      })}
    </View>
  );
};
