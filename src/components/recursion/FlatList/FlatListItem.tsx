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
  const [show, setShow] = useState(false);

  const ListHeader = () => {
    return (
      <View style={{backgroundColor:'#ccc'}}>
        <Text>{title}</Text>
        <Text>{content}</Text>
      </View>
    );
  };

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
            {item.child
              ? true && (
                  <FlatList
                    data={item.child}
                    renderItem={({item}): any => {
                        return (
                            <View
                          style={{
                              left: 15,
                              borderLeftWidth: 1,
                              paddingLeft: 15,
                            }}>
                              <TouchableOpacity onPress={() => setShow(false)}>
                          <Recursion {...item} />
          </TouchableOpacity>
                        </View>
                      );
                    }}
                    keyExtractor={(item: any) => item.id}
                  />
                )
              : null}
        </View>
      </View>
    );
  };

  return (
    <View>
      <SafeAreaView>
        <View style={{paddingBottom: 10}}>
          <ListHeader/>
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
        <Text>123</Text>
      <Recursion {...DATA} />
    </View>
  );
};

export default FlatListItem;
