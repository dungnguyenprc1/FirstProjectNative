import React from 'react';
import {Controller} from 'react-hook-form';
import CustomRadioButton from './CustomRadioButton';
import {RowText} from './Input.styled';

export default function SelectInput({
  name,
  control,
  data = [],
  getValues,
  setValue,
}) {
  const handleSelect = value => {
    setValue(name, value, {shouldTouch: true});
  };
  return (
    <Controller
      control={control}
      name={name}
      render={() => {
        return (
          <RowText>
            {data?.map((item, i) => {
              return (
                <CustomRadioButton
                  item={item}
                  key={i}
                  value={getValues(name) ? getValues(name) : 'men'}
                  onPress={() => handleSelect(item.value)}
                />
              );
            })}
          </RowText>
        );
      }}
    />
  );
}
