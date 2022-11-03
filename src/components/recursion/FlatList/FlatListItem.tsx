import React, {FC, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  ListRenderItemInfo,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {ItemType, DATA} from '../type';

const Recursion: FC<ItemType> = ({title, content, child}: ItemType) => {
    const [show,setShow] = useState(false)

  const render = ({item}: ListRenderItemInfo<ItemType>) => {
    return (
      <View
        style={{
          left: 15,
          borderLeftWidth: 1,
          paddingBottom: 10,

        }}>
        <View
          style={{
            paddingLeft: 15,

            marginBottom: 10,
            marginTop: 10,
          }}>
          <Text>{item.title}</Text>
          <Text>{item.content}</Text>
        </View>
        <View style={{left: 15}}>
            <TouchableOpacity onPress={() => setShow(false)}>
          {item.child ? (
           true && <FlatList
              data={item.child}
              renderItem={({item}): any => {
                return (
                      <View style={{left: 15, borderLeftWidth: 1, paddingLeft: 15}}>
                        <Recursion {...item} />
                      </View>
                );
            }}
            keyExtractor={(item: any) => item.id}
            />
            ) : null}
            </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <SafeAreaView>
        <View style={{paddingBottom: 10}}>
          <Text>{title}</Text>
          <Text>{content}</Text>

         
            <FlatList
              data={child}
              renderItem={render}
              keyExtractor={(item: any) => item.id}
            />
        
        </View>
      </SafeAreaView>
    </View>
  );
};

 const FlatListItem: any = () => {
  return (
    <View>
      <Recursion {...DATA} />
    </View>
  );
};

export default FlatListItem
