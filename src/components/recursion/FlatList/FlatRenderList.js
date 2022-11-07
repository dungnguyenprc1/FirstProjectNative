import React from 'react';
import {FlatList, View} from 'react-native';
import Card from '../Card/Card';
import {Container} from '../Items.styled';
import {food} from '../type';

const FlatRenderList = () => {
  const newArray = [].concat.apply(
    [],
    Object.keys(food).map((item, _) => food[item]),
  );
  const render = ({item}, key) => {
    return (
      <View key={key}>
        <Card values={item} root={item.title} />
      </View>
    );
  };

  return (
    <Container>
      <FlatList
        data={newArray}
        renderItem={render}
        horizontal={true}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};
export default FlatRenderList;
