import {View, ScrollView, Text} from 'react-native';
import React from 'react';

export default function Card({root, values}) {
  const {child, content, data} = values;
  return (
    <View style={{borderWidth: 1, marginRight: 40}}>
      <View>
        {root && (
          <View
            style={{
              borderBottomWidth: 1,
              alignItems: 'center',
            }}>
            <Text>{root}</Text>
          </View>
        )}
        <View style={{paddingLeft: 15}}>
          <Text>{content}</Text>
          <View style={{paddingLeft: 15}}>
            {data.map((item, i) => {
              return (
                <View key={i}>
                  <Text>Reporter: {item?.name}</Text>
                  <Text>Comment: {item?.comment}</Text>
                  <Text style={{marginBottom: 10}}>Rate: {item?.rate}</Text>
                  {child
                    ? child.map((itemChild, i) => {
                        return <Card values={itemChild} key={i} />;
                      })
                    : null}
                </View>
              );
            })}
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}
