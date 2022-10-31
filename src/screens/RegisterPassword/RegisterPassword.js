import React, {useState} from 'react';
import {Controller, useWatch} from 'react-hook-form';
import {View} from 'react-native';

import {CustomInput} from '../../components/input';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FormItem from '../../components/form/FormItem';
import {
  Container,
  CoverInput,
  Input,
  MediumPassword,
  Section,
  StrongPassword,
  SubmitText,
  Touch,
  WeekPassword,
} from './RegisterPassword.styled';

import {TextError} from '../../components/input/Input.styled';
import {regexPassword, usernameRegex} from '../../helper';

export default function RegisterPassword({route}) {
  const [showPassword, setShowPassword] = useState(true);

  const {control, handleSubmit} = route.params;

  const password = useWatch({control, name: 'password'});

  function check(value) {
    if (!value) {
      return;
    }
    if (value) {
      switch (true) {
        case value <= 2:
          return <WeekPassword>{(value = 'Week password')}</WeekPassword>;

        case value > 2 && value < 5:
          return <MediumPassword>{(value = 'Medium password')}</MediumPassword>;

        case value >= 5:
          return <StrongPassword>{(value = 'Strong password')}</StrongPassword>;
      }
    }
  }

  const passwordTracker = {
    uppercase: password?.match(regexPassword.atLeastOneUppercase),
    lowercase: password?.match(regexPassword.atLeastOneLowercase),
    number: password?.match(regexPassword.atLeastOneNumeric),
    specialChar: password?.match(regexPassword.atLeastOneSpecialChar),
    sixCharsOrGreater: password?.match(regexPassword.atLeast6character),
  };

  const passwordStrength = Object.values(passwordTracker).filter(
    value => value,
  ).length;

  const onSubmit1 = data => {
    console.log('data', data);
  };

  return (
    <Container>
      <Section>
        <FormItem label="Username" require>
          <CustomInput
            rules={{
              required: 'Fill Your Username,Please',
              pattern: {value: usernameRegex, message: 'Invalid Username'},
            }}
            value
            control={control}
            name="username"
            placeholder="Please Fill Your Name"
          />
        </FormItem>
        <FormItem label="Password" require>
          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Fill your password, Please',
              pattern: {
                value: regexPassword.atLeast6character,
                message: 'At Least 6 Characters',
              },
            }}
            render={({
              field: {value, onChange, onBlur, ref},
              fieldState: {error},
            }) => {
              return (
                <View>
                  <CoverInput>
                    <Input
                      secureTextEntry={showPassword}
                      ref={ref}
                      placeholder="Password"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                    />
                    <Touch onPress={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <AntDesign name="eye" size={20} />
                      ) : (
                        <Entypo name="eye-with-line" size={20} />
                      )}
                    </Touch>
                  </CoverInput>
                  <View>
                    {error ? (
                      <TextError>{error.message || 'ERROR'}</TextError>
                    ) : (
                      check(passwordStrength)
                    )}
                  </View>
                </View>
              );
            }}
          />
        </FormItem>

        <Touch onPress={handleSubmit(onSubmit1)}>
          <SubmitText>Submit</SubmitText>
        </Touch>
      </Section>
    </Container>
  );
}
