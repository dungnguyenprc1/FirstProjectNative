import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import moment from 'moment';
import {Controller} from 'react-hook-form';
import {NormalInput} from './Input.styled';

export default function DatePickerInput({control, name}) {
  return (
    <NormalInput activeOpacity={0} onPress={() => console.log('abc')}>
      <Controller
        control={control}
        name={name}
        // rules={rules}
        render={({field: value}) => {
          return <Text>{moment().format('DD/MM/YYYY')}</Text>;
        }}
      />
    </NormalInput>
  );
}
