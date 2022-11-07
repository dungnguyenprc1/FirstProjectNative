import React from 'react';
import {SectionList, View} from 'react-native';
import Card from '../Card/Card';

import {food} from '../type';

function SectionListTask() {
  const newArray = [].concat.apply(
    [],
    Object.keys(food).map((item, _) => food[item]),
  );
  const render = item => {
    const {section} = item;
    console.log('sectionList', item);
    return (
      <View>
        <Card values={section} root={section.title} />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <SectionList
        sections={newArray}
        renderItem={render}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default SectionListTask;
