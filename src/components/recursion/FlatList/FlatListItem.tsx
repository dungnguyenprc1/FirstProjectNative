import React, { FC } from 'react';
import { FlatList, View, Text,ListRenderItemInfo } from 'react-native';
import { ItemType } from './type';



const FlatListItem= ({ child, content, id }: ItemType) => {
    // const render = ({ item }: ListRenderItemInfo<ItemType>) => {
    //     <View>
    //     <Text>
    //         {item.content}
    //     </Text>
    //     <FlatListItem
    //         data={item.child}
    //         renderItem={render}
    //         keyExtractor={(item:any) => item.id}
    //     />

    // </View>

    // }

    return (
        <View>
            <Text>{content}</Text>
            <FlatList
                data={child}
                renderItem={({ item }: ListRenderItemInfo<ItemType>) => (item.content)}
                
                // keyExtractor={item: {id: number} => item.id}
    />
        </View>
    )
}

// function abc(items)
//   item 1: item.title 

//   item.child && item.child.lenth >0 
//   abc(item.child)
