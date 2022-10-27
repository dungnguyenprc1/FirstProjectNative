import React from 'react';
import {Text} from 'react-native';
import {Layout, Row} from './FormItem.styled';

export default function FormItem({children, style, label, require = false}) {
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
