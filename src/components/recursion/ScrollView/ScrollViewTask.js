import React, {FC} from 'react';
import {Dimensions, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {ItemType, DATA} from '../type';
import {ViewCover} from '../Items.styled';
import {RootTrees} from '../../HOC/RootTrees';
import Card from './Card';
import {food} from '../type';
// const Recursive: FC<ItemType> = ({title, content,child}: ItemType) => {
//   return (
//     <View style={{flex:1}}>
//       <SafeAreaView >
//         <View style={{flexShrink: 1,backgroundColor:'red'}}>
//           <ScrollView style={{paddingTop: 10,flexShrink: 1}} horizontal={true}>
//             <Text>{title}</Text>
//             <Text>{content}</Text>

//             <Text style={{left: 15}}>
//               {(child ?? []).map((item: ItemType, key: number) => (
//                 <View key={key} style={{flexShrink: 1}}>
//                     <Recursive {...item} />
//                     </View>
//               ))}
//             </Text>
//           </ScrollView>
//         </View>
//         <View style={{backgroundColor:'yellow'}}>
//             <Text>1</Text>
//         </View>
//       </SafeAreaView>
//     </View>
//   );
// };

// function ScrollViewTask(): any {
//   return <Recursive {...DATA} />;
// }

function ScrollViewTask() {
  return (
    <SafeAreaView>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {Object.keys(food).map((root, i) => {
            return (
              <View key={i}>
                {food[root].map((item, i) => {
                  return (
                    <View key={i}>
                      <Card root={root} values={item} />
                    </View>
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default ScrollViewTask;
