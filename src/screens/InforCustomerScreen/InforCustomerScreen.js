import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {SafeAreaView, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormItem from '../../components/form/FormItem';
import CustomInput from '../../components/input/CustomInput';

import DropDownPicker from 'react-native-dropdown-picker';
import DatePickerInput from '../../components/input/DatePickerInput';

import DropDownInput from '../../components/input/DropDownInput';
import SelectInput from '../../components/input/SelectInput';
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
  const [items, setItems] = useState([
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
    register,
    control,
    setFocus,
    handleSubmit,
    getValues,
    setValue,
    setError,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      gentle: GENTLE_VALUE.men,
    },
  });
  const ageRegex = /^[0-9]{13, 65}$/;

  const checkMinMaxAge = value => {
    console.log('value', value);
    return value > 13 && value < 65;
  };
  const fullnameRegex =
    /^[^-\s\d][a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]{12,255}$/;
  console.log(errors);

  const onSubmit = data => {
    console.log('data', data);
    navigation.navigate('Password');
  };
  const idRegex = /^[\w-_.]{9,15}$/;
  const phoneRegex =
    /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
                setError={setError}
                control={control}
                name="dob"
                setValue={setValue}
                getValues={getValues}
                rules={{
                  required: 'Your Birthday, Please',
                  pattern: {
                    value: () => checkMinMaxAge(getValues('dob')),
                    message: ' Invalid Age',
                  },
                }}
                register={register}>
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
