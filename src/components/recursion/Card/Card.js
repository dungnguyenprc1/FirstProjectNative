import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Container, TabIndent, ViewHeader, BottomSpace} from './Card.styled';

export default function Card({root, values}) {
  const {child, content, data, title} = values;
  return (
    <Container>
      <View>
        {root && (
          <ViewHeader>
            <Text>{root ?? title}</Text>
          </ViewHeader>
        )}
        <TabIndent>
          <Text>{content}</Text>
          <TabIndent>
            {data?.map((item, i) => {
              return (
                <View key={i}>
                  <Text>Reporter: {item?.name}</Text>
                  <Text>Comment: {item?.comment}</Text>
                  <BottomSpace>Rate: {item?.rate}</BottomSpace>
                  <TouchableOpacity onPress={() => alert('123')}>
                    {child &&
                      child.map((itemChild, index) => {
                        return (
                          <Card
                            values={itemChild}
                            key={index}
                            root={item.title}
                          />
                        );
                      })}
                  </TouchableOpacity>
                </View>
              );
            })}
          </TabIndent>
        </TabIndent>
      </View>
    </Container>
  );
}
