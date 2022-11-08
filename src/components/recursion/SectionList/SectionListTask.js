import React from 'react';
import {SectionList, View} from 'react-native';
import Card from '../Card/Card';
import {Container} from '../Items.styled';

import {food} from '../type';

function SectionListTask() {
  const newArray = [].concat.apply(
    [],
    Object.keys(food).map((item, _) => food[item]),
  );
  const render = item => {
    const {section} = item;
    return (
      <View>
        <Card values={section} root={section.title} />
      </View>
    );
  };
  return (
    <Container>
      <SectionList
        sections={newArray}
        renderItem={render}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}

export default SectionListTask;
