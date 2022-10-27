import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {Text, TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {getYears, showDate} from '../../helper';
import {NormalInput, TextError} from './Input.styled';

export default function DatePickerInput({
  control,
  setError,
  getValues,
  name,
  rules = {},
  setValue,
  register,
  children,
}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datePickup, setDatePickup] = useState('');

  const [agesValidate, setAgesValidate] = useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDatePickup(showDate(date));
    // handleError();
    setValue(name, getYears(showDate(date)), {shouldTouch: true});
    setAgesValidate(getValues(name));

    console.log('datePickup', datePickup);

    hideDatePicker();
  };
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({fieldState: {error}}) => {
        return (
          <View>
            <TouchableOpacity onPress={() => showDatePicker()}>
              <NormalInput>
                <Text>{datePickup || 'DD/MM/YYYY'}</Text>
                {children}
                {console.log('dateofbir', error)}
                {console.log('getValues(name', agesValidate)}

                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
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
