import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {SafeAreaView, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormItem from '../../components/form/FormItem';
import CustomInput from '../../components/input/CustomInput';
import DatePickerInput from '../../components/input/DatePickerInput';

import DropDownInput from '../../components/input/DropDownInput';
import SelectInput from '../../components/input/SelectInput';
import {
  fullnameRegex,
  idRegex,
  phoneRegex,
  emailRegex,
} from '../../helper/index';
import {
  Center,
  Container,
  ContainerScroll,
  Submit,
  WhiteText,
} from './InforCustomerScreen.styled';

DropDownPicker.setListMode('SCROLLVIEW');

const GENTLE_VALUE = {
  woment: 'woment',
  men: 'men',
  others: 'others',
};

export default function InforCustomerScreen({navigation}) {
  const [items] = useState([
    {label: 'Thợ Code', value: 'coder'},
    {label: 'Bác Sĩ', value: 'doctor'},
    {label: 'Ca Sĩ', value: 'single'},
  ]);
  const genderItems = [
    {title: 'Nam', value: GENTLE_VALUE.men},
    {title: 'Nữ', value: GENTLE_VALUE.woment},
    {title: 'Khác', value: GENTLE_VALUE.others},
  ];
  const {
    control,
    setFocus,
    handleSubmit,
    getValues,
    setValue,

    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      password: '',
      gentle: GENTLE_VALUE.men,
    },
  });
  const onSubmit = data => {
    console.log('data', data);
    navigation.navigate('Password', {
      control,
      handleSubmit,
    });
  };

  return (
    <ContainerScroll>
      <SafeAreaView>
        <Container>
          <View>
            <FormItem label="Họ và tên" require>
              <CustomInput
                errors={errors}
                setFocus={setFocus}
                rules={{
                  required: 'Fill Your Name,Please',
                  pattern: {value: fullnameRegex, message: 'Invalid Name'},
                }}
                control={control}
                name="name"
                placeholder="Please Fill Your Name"
              />
            </FormItem>
            <FormItem label="Ngày Sinh" require>
              <DatePickerInput
                control={control}
                name="dob"
                setValue={setValue}
                getValues={getValues}
                rules={{
                  required: 'Your Birthday, Please',
                  max: {
                    value: 65,
                    message: 'Your ages too old',
                  },
                  min: {
                    value: 13,
                    message: 'You are so young',
                  },
                }}>
                <AntDesign name="calendar" size={18} />
              </DatePickerInput>
            </FormItem>

            <FormItem label="Giới Tính">
              <SelectInput
                control={control}
                name="gentle"
                data={genderItems}
                getValues={getValues}
                setValue={setValue}
              />
            </FormItem>
            <FormItem label="Số CMND" require>
              <CustomInput
                control={control}
                name="cmnd"
                rules={{
                  required: 'Fill Your ID Card,Please',
                  pattern: {value: idRegex, message: ' Invalid ID'},
                }}
                placeholder="Fill Your ID"
              />
            </FormItem>
            <FormItem label="Số điện thoại">
              <CustomInput
                control={control}
                name="phone"
                rules={{
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
              <DropDownInput
                control={control}
                name="job"
                data={items}
                setValue={setValue}
              />
            </FormItem>
          </View>

          <Center>
            <Submit isValid={isValid} onPress={handleSubmit(onSubmit)}>
              <WhiteText>Chọn</WhiteText>
            </Submit>
          </Center>
        </Container>
      </SafeAreaView>
    </ContainerScroll>
  );
}
