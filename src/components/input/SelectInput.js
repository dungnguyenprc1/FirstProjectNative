import {View, Text} from 'react-native';

import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
// import CheckBox from 'react-native-elements';

export default function SelectInput({name, control}) {
  //   const [checked, setChecked] = React.useState('first');
  return (
    <Controller
      control={control}
      name={name}
      render={() => {
        return (
          <View>
            {/* <CheckBox title="abe" center checkedIcon="dot-circle-o" /> */}
            <Text>ABC</Text>
          </View>
        );
      }}
    />
  );
}
