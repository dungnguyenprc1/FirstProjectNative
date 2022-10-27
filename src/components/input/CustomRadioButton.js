import React from 'react';
import {Text} from 'react-native';
import {InnerRadio, OuterRadio, RowText} from './Input.styled';

export default function CustomRadioButton({item, onPress, value}) {
  return (
    <RowText>
      <OuterRadio value={item?.value} onPress={onPress}>
        {value === item?.value ? <InnerRadio /> : null}
      </OuterRadio>
      <Text>{item?.title}</Text>
    </RowText>
  );
}
