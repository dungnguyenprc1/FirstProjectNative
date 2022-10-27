import {View, Text, SafeAreaView, TextInput} from 'react-native';
import React, {useState, useRef} from 'react';

import {CustomInput} from '../../components/input';
import {useForm} from 'react-hook-form';
import FormItem from '../../components/form/FormItem';

export default function RegisterPassword() {
  const [password, setPassword] = useState('');
  const [focus, setFocus] = useState(false);

  const refInput = useRef();

  const {control} = useForm();

  const atLeast6character = /.{6,}/g;
  const atLeastOneNumeric = /[0-9]/g;
  const atLeastOneLowercase = /[a-z]/g;
  const atLeastOneUppercase = /[A-Z]/g;
  const atLeastOneSpecialChar = /[!@#$%^&*()-+]/g;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()-+]).{6,}$/g;

  const passwordTracker = {
    uppercase: password.match(atLeastOneUppercase),
    lowercase: password.match(atLeastOneLowercase),
    number: password.match(atLeastOneNumeric),
    specialChar: password.match(atLeastOneSpecialChar),
    sixCharsOrGreater: password.match(atLeast6character),
  };

  const passwordStrength = Object.values(passwordTracker).filter(
    value => value,
  ).length;

  return (
    <SafeAreaView style={{backgroundColor: 'red', flex: 1}}>
      <View
        style={{
          backgroundColor: 'yellow',
          flex: 1,
          justifyContent: 'flex-start',
        }}>
        <FormItem label="Username" require>
          <CustomInput
            rules={{
              required: 'Fill Your Name,Please',
            }}
            control={control}
            name="username"
            placeholder="Please Fill Your Name"
          />
        </FormItem>
        <FormItem label="Password" require>
          <TextInput
            ref={refInput}
            placeholder="test"
            value={password}
            onChangeText={setPassword}
            onFocus={() => {
              const isF = refInput.current.isFocused();
              console.log('isFocus', isF);
              setFocus(true);
            }}
          />
          <View>
            {focus && (
              <Text>
                {passwordStrength <= 2 || !passwordTracker.sixCharsOrGreater
                  ? 'Week Password'
                  : passwordStrength === 3
                  ? 'Week Password '
                  : passwordStrength === 4
                  ? 'Medium Password'
                  : 'Strong Password'}
              </Text>
            )}
          </View>

          {/* <CustomInput
            passwordTracker={passwordTracker}
            passwordStrength={passwordStrength}
            rules={{
              required: 'Fill Your Password,Please',
            }}
            control={control}
            name="password"
            placeholder="Please Fill Your Password"
            onFocus={() => setFocus(true)}
          /> */}
        </FormItem>
        {/* <TextInput
          ref={refInput}
          placeholder="test"
          value={password}
          onChangeText={setPassword}
          onFocus={() => {
            const isF = refInput.current.isFocused();
            console.log('isFocus', isF);
            setFocus(true);
          }}
        /> */}
        {console.log(
          'passwordTracker.lowercase',
          !passwordTracker.sixCharsOrGreater,
          passwordStrength,
        )}
      </View>
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <Text>a</Text>
      </View>
    </SafeAreaView>
  );
}
