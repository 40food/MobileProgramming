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
import { CheckBox } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { AuthRoutes } from '../navigations/routes';
import { Alert } from 'react-native';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [disabled2, setDisabled2] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    setDisabled(
      !(
        name.trim() &&
        email.trim() &&
        password.trim() &&
        passwordCheck.trim() &&
        checked == true
      )
    );
  }, [name, email, password, passwordCheck, checked]);
  useEffect(() => {
    setDisabled2(!email.trim());
  }, [email]);

  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(email, password);
  };
  const onDuplicationCheck = () => {
    Keyboard.dismiss();
    console.log('DuplicationCheck:', email);
  };
  const toggleCheckbox = () => setChecked(!checked);

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
          <View style={styles.shortInput}>
            <Input
              title={'이름'}
              // placeholder="홍길동"
              returnKeyType={ReturnKeyTypes.NEXT}
              value={name}
              onChangeText={(name) => setName(name.trim())}
            />
            <View style={styles.rowWrapper}>
              <Input
                title={'이메일'}
                placeholder="your@email.com"
                keyboardType={KeyboardTypes.EMAIL}
                returnKeyType={ReturnKeyTypes.NEXT}
                value={email}
                onChangeText={(email) => setEmail(email.trim())}
              />
              <View style={styles.duplicationCheckBtn}>
                <Button
                  title={'중복확인'}
                  disabled={disabled2}
                  onPress={() => {
                    onDuplicationCheck,
                      Alert.alert('중복 확인', '사용가능한 이메일입니다.');
                  }}
                />
              </View>
            </View>
          </View>
          <Input
            title={'비밀번호'}
            returnKeyType={ReturnKeyTypes.NEXT}
            secureTextEntry
            value={password}
            onChangeText={(password) => setPassword(password.trim())}
            // onSubmitEditing={onSubmit}
          />
          <Input
            title={'비밀번호 확인'}
            returnKeyType={ReturnKeyTypes.DONE}
            secureTextEntry
            value={passwordCheck}
            onChangeText={(passwordCheck) =>
              setPasswordCheck(passwordCheck.trim())
            }
            // onSubmitEditing={onSubmit}
          />
          <CheckBox
            title="이용약관 및 개인정보 정책에 동의합니다."
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
          />
          <View style={styles.buttonContainer}>
            <Button
              title={'회원가입'}
              onPress={() => {
                onSubmit;
                Alert.alert('Sign Up', '회원가입 성공');
                navigation.navigate(AuthRoutes.SIGN_IN);
              }}
              disabled={disabled}
            />
          </View>
          <View style={styles.rowWrapper}>
            <Text
              style={styles.textButton}
              onPress={() => navigation.navigate(AuthRoutes.Terms)}
            >
              약관
            </Text>
            <Text
              style={styles.textButton}
              onPress={() => navigation.navigate(AuthRoutes.PrivacyPolicy)}
            >
              개인정보 정책
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
  shortInput: {
    width: '70%',
    marginRight: 115,
  },
  duplicationCheckBtn: {
    marginTop: 35,
    width: '35%',
    height: '40%',
    // paddingVertical: 5,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  rowWrapper: {
    flexDirection: 'row',
  },
  textButton: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 30,
    justifyContent: 'space-evenly',
  },
});

export default SignUpScreen;
