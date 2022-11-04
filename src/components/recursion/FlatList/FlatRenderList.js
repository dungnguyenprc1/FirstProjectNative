import React from 'react';
import {FlatList, View, Text, SafeAreaView} from 'react-native';
import {DATA} from '../type';

const Recursion = ({title, child, content}) => {
  const render = ({item}) => {
    return (
      <View>
        <Text style={{left: 15}}>{item?.title}</Text>
        {item.child ? (
          <FlatList
            data={item.child}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View style={{left: 15}}>
                  <Recursion {...item} />
                </View>
              );
            }}
          />
        ) : null}
      </View>
    );
  };
  return (
    <View style={{left: 15}}>
      {/* <Text>{title}</Text>
      <Text>{content}</Text> */}
      <FlatList
        data={child}
        renderItem={render}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const FlatRenderList = () => {
  return (
    <SafeAreaView>
      <View>
        <Recursion {...DATA} />
      </View>
    </SafeAreaView>
  );
};
export default FlatRenderList;
