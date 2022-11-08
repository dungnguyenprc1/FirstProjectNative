import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  Container,
  TabIndent,
  ViewHeader,
  BottomSpace,
  ShowMore,
} from './Card.styled';
import {ShowContent} from '../../HOC/ShowContent';

function Card({root, values}) {
  const {child, content, data, title} = values;
  const [show, setShow] = useState(false);
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
                  <TouchableOpacity onPress={() => setShow(!show)}>
                    {child && (
                      <ShowMore>{show ? 'Unless' : 'Show More'}</ShowMore>
                    )}
                  </TouchableOpacity>

                  {show &&
                    child?.map((itemChild, index) => {
                      return (
                        <View key={index}>
                          {<Card values={itemChild} root={item.title} />}
                        </View>
                      );
                    })}
                </View>
              );
            })}
          </TabIndent>
        </TabIndent>
      </View>
    </Container>
  );
}
export default ShowContent(Card);
