import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {TextInput, TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {getYears, showDate} from '../../helper';
import {NormalInput, TextError} from './Input.styled';

export default function DatePickerInput({
  control,
  name,
  rules = {},
  setValue,
  children,
}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datePickup, setDatePickup] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDatePickup(showDate(date));
    hideDatePicker();
  };
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: {value, onBlur, onChange, ref},
        fieldState: {error},
      }) => {
        return (
          <View>
            <TouchableOpacity onPress={() => showDatePicker()}>
              <NormalInput>
                <TextInput
                  editable={false}
                  ref={ref}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}>
                  {datePickup || 'DD/MM/YYYY'}
                </TextInput>
                {children}
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  onChange={date => {
                    setValue(name, getYears(showDate(date)), {
                      shouldTouch: true,
                      shouldValidate: true,
                    });
                  }}
                />
              </NormalInput>
            </TouchableOpacity>
            {error ? (
              <TextError>
                {error.message || 'Please Pick Your Birthday'}
              </TextError>
            ) : null}
          </View>
        );
      }}
    />
  );
}
