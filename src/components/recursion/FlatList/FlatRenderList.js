import React from 'react';
import {FlatList, View, Text, SafeAreaView} from 'react-native';

const DATA = {
  title: 'List Example',
  child: [
    {
      id: 1,
      title: 'List Item 1',
      child: [
        {
          id: 1,
          title: 'List Item 1.1',
          child: [
            {
              id: 1,
              title: 'Nested Item 1.1.1',
              child: [
                {id: 1, title: 'Nested Item 1.1.1.1'},
                {
                  id: 2,
                  title: 'Nested Item 2.1.1.1',
                  child: [{id: 1, title: 'Nested Item 2.1.1.1.1'}],
                },
              ],
            },
            {
              id: 2,
              title: 'Nested Item 2.2.2',
              child: [
                {id: 1, title: 'Nested Item 2.2.2.1'},
                {id: 2, title: 'Nested Item 2.2.2.2'},
              ],
            },
            {
              id: 3,
              title: 'Nested Item 3.3.3',
            },
            {
              id: 4,
              title: 'Nested Item 4.4.4',
              child: [
                {
                  id: 1,
                  title: 'Nested Item 4.4.4.4',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'List Item 2',
      child: [
        {
          id: 1,
          title: 'Item Nested 12',
          child: [
            {
              id: 1,
              title: 'List Item 1.1',
              child: [
                {
                  id: 1,
                  title: 'Nested Item 1.1.1',
                  child: [
                    {id: 1, title: 'Nested Item 1.1.1.1'},
                    {
                      id: 2,
                      title: 'Nested Item 2.1.1.1',
                      child: [{id: 1, title: 'Nested Item 2.1.1.1.1'}],
                    },
                  ],
                },
                {
                  id: 2,
                  title: 'Nested Item 2.2.2',
                  child: [
                    {id: 1, title: 'Nested Item 2.2.2.1'},
                    {id: 2, title: 'Nested Item 2.2.2.2'},
                  ],
                },
                {
                  id: 3,
                  title: 'Nested Item 3.3.3',
                },
                {
                  id: 4,
                  title: 'Nested Item 4.4.4',
                  child: [
                    {
                      id: 1,
                      title: 'Nested Item 4.4.4.4',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const Recursion = ({title, child}) => {
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
      <Text>{title}</Text>
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
