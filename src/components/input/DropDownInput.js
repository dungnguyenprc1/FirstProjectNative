import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Controller} from 'react-hook-form';
import DropDownPicker from 'react-native-dropdown-picker';

export default function DropDownInput({data = [], control, name, setValue}) {
  const [open, setOpen] = useState(false);
  const [valueDropDown, setValueDropDown] = useState('coder');
  const [items, setItems] = useState(data);
  // setValue(name, valueDropDown);

  useEffect(() => {
    setValue(name, valueDropDown);
  }, [valueDropDown]);
  return (
    <Controller
      control={control}
      name={name}
      render={() => {
        return (
          <TouchableOpacity>
            <DropDownPicker
              // onDirectionChanged={() => setValue(name, valueDropDown)}
              // onChangeValue={setValue(name, valueDropDown)}
              // onOpen={() => setValue(name, valueDropDown)}
              onSelectItem={() => setValue(name, valueDropDown)}
              // onClose={() => setValue(name, valueDropDown)}
              open={open}
              value={valueDropDown}
              items={items}
              setOpen={setOpen}
              setValue={setValueDropDown}
              setItems={setItems}
            />
          </TouchableOpacity>
        );
      }}
    />
  );
}
