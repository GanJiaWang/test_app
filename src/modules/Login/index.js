import React, {useState} from 'react';
import {Background, Logo, Header, Button, TextInput} from '../../commons';
import {Alert} from 'react-native';
import {emailValidator} from '../../helpers/emailValidator';
import {passwordValidator} from '../../helpers/passwordValidator';
import {requestSignIn} from '../../api';
import _ from 'lodash';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }

    const check = await requestSignIn({
      email: email.value,
      password: password.value,
    });

    if (!_.isEmpty(check.data)) {
      navigation.navigate({
        name: 'Store',
        params: {user: check.data[0]},
      });
      setEmail({value: '', error: ''});
      setPassword({value: '', error: ''});
      Alert.alert('Login Successfully');
    } else {
      Alert.alert('Login Failed', 'Email or password is wrong.');
    }
  };

  return (
    <Background>
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
    </Background>
  );
}
