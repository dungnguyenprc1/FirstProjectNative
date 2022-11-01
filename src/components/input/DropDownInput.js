import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Controller} from 'react-hook-form';
import DropDownPicker from 'react-native-dropdown-picker';

export default function DropDownInput({
  data = [],
  control,
  name,
  setValue,
  getValues,
}) {
  const [open, setOpen] = useState(false);
  const [valueDropDown, setValueDropDown] = useState(getValues(name));

  useEffect(() => {
    setValue(name, valueDropDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueDropDown]);
  return (
    <Controller
      control={control}
      name={name}
      render={() => {
        return (
          <TouchableOpacity>
            <DropDownPicker
              style={styles.dropdown}
              open={open}
              value={valueDropDown}
              items={data}
              setOpen={setOpen}
              setValue={setValueDropDown}
              dropDownContainerStyle={styles.dropDownContainerStyle}
            />
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  dropdown: {
    minHeight: 40,
    borderRadius: 4,
    borderColor: '#A5ABB3',
  },
  dropDownContainerStyle: {
    borderColor: '#A5ABB3',
  },
});
