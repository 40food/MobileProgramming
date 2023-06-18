import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Input, { KeyboardTypes, ReturnKeyTypes } from '../components/Input';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';
import { useNavigation } from '@react-navigation/native';
import { AuthRoutes } from '../navigations/routes';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    setDisabled(!(email.trim() && password.trim()));
  }, [email, password]);

  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(email, password);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View>
            <Logo />
          </View>
          <Input
            title={'이메일'}
            placeholder="your@email.com"
            keyboardType={KeyboardTypes.EMAIL}
            returnKeyType={ReturnKeyTypes.NEXT}
            value={email}
            onChangeText={(email) => setEmail(email.trim())}
          />
          <Input
            title={'비밀번호'}
            returnKeyType={ReturnKeyTypes.DONE}
            secureTextEntry
            value={password}
            onChangeText={(password) => setPassword(password.trim())}
            onSubmitEditing={onSubmit}
          />
          <View style={styles.buttonContainer}>
            <Button
              title={'로그인'}
              onPress={onSubmit}
              disabled={disabled}
              // onPress={() => navigation.navigate(AuthRoutes.CALENDAR_View)}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Text
              style={styles.textButton}
              onPress={() => navigation.navigate(AuthRoutes.Find_PW)}
            >
              비밀번호 찾기
            </Text>
            <Text
              style={styles.textButton}
              onPress={() => navigation.navigate(AuthRoutes.SIGN_UP)}
            >
              회원가입
            </Text>
          </View>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 100,
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    marginTop: 30,
    flexDirection: 'row',
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 30,
    justifyContent: 'space-evenly',
  },
});

export default SignInScreen;
