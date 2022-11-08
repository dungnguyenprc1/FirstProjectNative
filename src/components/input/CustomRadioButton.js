import React from 'react';
import {InnerRadio, OuterRadio, RowText, TextGentle} from './Input.styled';

export default function CustomRadioButton({item, onPress, value}) {
  return (
    <RowText>
      <OuterRadio value={item?.value} onPress={onPress}>
        {value === item?.value ? (
          <OuterRadio active>
            <InnerRadio active />
          </OuterRadio>
        ) : null}
      </OuterRadio>
      <TextGentle>{item?.title}</TextGentle>
    </RowText>
  );
}
