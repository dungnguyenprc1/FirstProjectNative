import React from 'react';
import {View} from 'react-native';
import {NormalInput, TextError, TextInputFlex} from './Input.styled';

import {Controller} from 'react-hook-form';

export default function CustomInput({
  control,
  rules = {},
  name,
  placeholder,
  icon,
  children,
  setFocus,
  errors,
  ...rest
}) {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => {
          return (
            <View>
              <NormalInput error={error}>
                <TextInputFlex
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
