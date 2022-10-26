import React from 'react';
import {SafeAreaView, View, Text, TextInput} from 'react-native';
import {Layout, Row} from './FormItem.styled';

export default function FormItem({children, label, require = false}) {
  return (
    <Layout>
      <Row>
        <Text>{label}</Text>
        {require && <Text>*</Text>}
      </Row>
      {children}
    </Layout>
  );
}
