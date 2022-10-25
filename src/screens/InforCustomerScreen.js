import React from 'react';
import {TextInput, View, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import FormItem from '../components/form/FormItem';
import CustomInput from '../components/input/CustomInput';
import {NormalInput} from '../components/input/Input.styled';

import {Container, Submit} from './InforCustomerScreen.styled';
import DatePickerInput from '../components/input/DatePickerInput';
import SelectInput from '../components/input/SelectInput';

export default function InforCustomerScreen() {
  const {
    register,
    control,
    handleSubmit,
    formState: {errors},
    // formState: {errors},
  } = useForm();
  // {
  // defaultValues: {
  //   firstName: '',
  //   lastName: '',
  // },
  //   }
  console.log(errors);

  const onSubmit = data => console.log('data', data);
  const idRegex = /^[\w-_.]{9,15}$/;
  const phoneRegex =
    /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (
    <Container>
      <FormItem label="Họ và tên" require>
        <CustomInput
          rules={{
            required: 'Fill Your Name,Please',
            minLength: {
              value: 12,
              message: 'Name should be than 12 characters',
            },
            maxLength: {
              value: 255,
              message: 'Maximum characters',
            },
          }}
          control={control}
          name="name"
          placeholder="Please Fill Your Name"
          //   icon={<AntDesign name="stepforward" />}
        />
      </FormItem>
      <FormItem label="Ngày Sinh" require>
        <DatePickerInput control={control} name="dob" />
      </FormItem>
      <FormItem label="Giới Tính">
        <SelectInput control={control} name="gentle" />
      </FormItem>
      <FormItem label="Số CMND">
        <CustomInput
          control={control}
          name="cmnd"
          rules={{
            required: 'Fill Your CMND,Please',

            pattern: {value: idRegex, message: ' Invalid ID'},
          }}
          placeholder="Fill Your ID"
        />
      </FormItem>
      <FormItem label="Số điện thoại">
        <CustomInput
          // {...register('test', {
          //   valueAsNumber: true,
          //   pattern: {
          //     value: /^(0|[1-9]\d*)(\.\d+)?$/,
          //   },
          // })}
          control={control}
          name="phone"
          rules={{
            required: 'Fill Your Phone,Please',

            pattern: {value: phoneRegex, message: 'Invalid Phone Number'},
          }}
          placeholder="Fill Your Phone"
        />
      </FormItem>
      <FormItem label="Email" require>
        <CustomInput
          control={control}
          name="email"
          rules={{
            required: 'Fill Your Email,Please',

            pattern: {value: emailRegex, message: 'Invalid Email'},
          }}
          placeholder="Fill Your Email"
        />
      </FormItem>
      <FormItem label="Nghề Nghiệp">
        <CustomInput
          control={control}
          name="email"
          rules={{pattern: {value: emailRegex, message: 'Invalid Email'}}}
          placeholder="Fill Your Email"
        />
      </FormItem>

      <View>
        <Submit title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </Container>
  );
}
