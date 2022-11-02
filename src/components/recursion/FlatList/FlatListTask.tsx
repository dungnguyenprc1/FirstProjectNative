import React, {FC} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {ItemType, DATA} from '../type';
import {ViewCover} from '../Items.styled';

// const FlatListTask: FC<ItemType> = ()=>

export const FlatListTask: FC<ItemType> = () => {
  return (
    <View>
      <SafeAreaView style={{backgroundColor: '#ccc'}}>
        <Text>{DATA.title}</Text>
        <FlatList
          data={DATA.child}
          renderItem={({item}) => (
            <ViewCover>
              <Text>{item.title}</Text>

              <FlatList
                data={item.child}
                renderItem={({item}) => (
                  <View style={{backgroundColor: 'red', marginLeft: 15}}>
                    <Text>{item.title}</Text>
                  </View>
                )}
              />
              <FlatList
                data={item.child}
                renderItem={({item}) => (
                  <View style={{backgroundColor: 'yellow'}}>
                    <Text style={{paddingLeft: 30}}>{item.title}</Text>

                    <FlatList
                      data={item.child}
                      renderItem={({item}) => (
                        <View style={{backgroundColor: 'blue'}}>
                          <Text style={{paddingLeft: 45}}>{item.title}</Text>

                          <FlatList
                            data={item.child}
                            renderItem={({item}) => (
                              <View style={{backgroundColor: 'purple'}}>
                                <Text style={{paddingLeft: 60}}>
                                  {item.title}
                                </Text>
                              </View>
                            )}
                          />
                        </View>
                      )}
                    />
                  </View>
                )}
              />
            </ViewCover>
          )}
        />
      </SafeAreaView>
    </View>
  );
};
