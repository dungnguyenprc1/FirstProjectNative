import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, SectionList} from 'react-native';
import {ItemType, DATA} from '../type';

function Recursion({child}) {
  const render = ({item, section}) => {
    return (
      <View
        style={{
          left: 25,
          borderLeftWidth: 1,
          paddingLeft: 15,
          paddingBottom: 15,
        }}>
        <Text>{section.title}</Text>
        <Text>{item.comment}</Text>
        <Text>{`rate ${item.rate}`}</Text>

        {console.log('item.section.child', section)}
        {section.child ? (
          <SectionList sections={section.child} renderItem={render} />
        ) : null}
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
