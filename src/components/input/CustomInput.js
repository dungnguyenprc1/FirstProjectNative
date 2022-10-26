import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {Layout, NormalInput, TextError, WrongInput} from './Input.styled';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Controller} from 'react-hook-form';
import {Children} from 'react/cjs/react.production.min';

export default function CustomInput({
  control,
  rules = {},
  name,
  placeholder,
  icon,
  children,
  ...rest
}) {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => {
          console.log('error', error);
          return (
            <View>
              <NormalInput error={error}>
                <TextInput
                  // {...props}
                  placeholder={placeholder}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  {...rest}
                />
                {children}
              </NormalInput>

              {error ? <TextError>{error.message || 'ERROR'}</TextError> : null}
            </View>
          );
        }}
      />
    </View>
  );
}
