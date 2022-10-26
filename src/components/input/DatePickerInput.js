import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React, {useState} from 'react';
import moment from 'moment';
import {Controller} from 'react-hook-form';
import {NormalInput} from './Input.styled';
import {showDate} from '../../helper';

export default function DatePickerInput({control, name, onPress}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datePickup, setDatePickup] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', datePickup);
    setDatePickup(showDate(date));

    hideDatePicker();
  };

  return (
    <NormalInput>
      <TouchableOpacity onPress={() => showDatePicker()}>
        <Controller
          control={control}
          name={name}
          // rules={rules}
          render={({field: value, onChange, onBlur}) => {
            return (
              <View>
                <Text
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  // editable="false"
                >
                  {datePickup || 'DD/MM/YYYY'}
                </Text>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
            );
          }}
        />
      </TouchableOpacity>
    </NormalInput>
  );
}
