import React, {FC} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {ItemType, DATA} from '../type';
import {ViewCover} from '../Items.styled';

const Recursive: FC<ItemType> = ({title, child}: ItemType) => {
  return (
    <View>
      <SafeAreaView>
        <View>
          <ScrollView style={{paddingTop: 10}} horizontal={true}>
            <Text>{title}</Text>

            <Text style={{left: 15}}>
              {(child ?? []).map((item: ItemType, key: number) => (
                <Recursive {...item} key={key} />
              ))}
            </Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

function ScrollViewTask(): any {
  return <Recursive {...DATA} />;
}

export default ScrollViewTask;
