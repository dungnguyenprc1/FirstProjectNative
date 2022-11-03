import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, SectionList} from 'react-native';
import {ItemType, DATA} from '../type';

function Recursion({child}) {
  const render = items => {
    const {item, section} = items;
    console.log('itemssssss', items);

    return (
      <View style={{paddingLeft: 10}}>
        <Text>{item.comment}</Text>
        <Text>{`rate ${section.rate}`}</Text>

        {console.log('item.section.child', items)}
        <SectionList
          sections={section.child}
          renderItem={a => {
            return (
              <View>
                <Recursion {...section.child} />
              </View>
            );
            // const {item, section} = items;
            // console.log('item1111', a);
            // return <View />;
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <SectionList
          sections={child}
          keyExtractor={(item, index) => item + index}
          renderItem={render}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const SectionListTask = () => {
  return (
    <SafeAreaView>
      <View>
        <Recursion {...DATA} />
      </View>
    </SafeAreaView>
  );
};

export default SectionListTask;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
