import React, {FC} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {ItemType, DATA} from '../type';
import {ViewCover} from '../Items.styled';

const Recursive: FC<ItemType> = ({title, content,child}: ItemType) => {
  return (
    <View style={{flex:1}}>
      <SafeAreaView >
        <View style={{flexShrink: 1,backgroundColor:'red'}}>
          <ScrollView style={{paddingTop: 10,flexShrink: 1}} horizontal={true}>
            <Text>{title}</Text>
            <Text>{content}</Text>

            <Text style={{left: 15}}>
              {(child ?? []).map((item: ItemType, key: number) => (
                <View key={key} style={{flexShrink: 1}}>
                    <Recursive {...item} />
                    </View>
              ))}
            </Text>
          </ScrollView>
        </View>
        <View style={{backgroundColor:'yellow'}}>
            <Text>1</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

function ScrollViewTask(): any {
  return <Recursive {...DATA} />;
}

export default ScrollViewTask;
