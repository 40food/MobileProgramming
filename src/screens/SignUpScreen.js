import {
  Image,
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

const SignInScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [disabled2, setDisabled2] = useState(true);

  useEffect(() => {
    setDisabled(
      !(name.trim() && email.trim() && password.trim() && passwordCheck.trim())
    );
  }, [name, email, password, passwordCheck]);
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

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.image}
          />
          <View style={styles.shortInput}>
            <Input
              title={'이름'}
              // placeholder="홍길동"
              keyboardType={KeyboardTypes.NAME}
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
                  onPress={onDuplicationCheck}
                />
              </View>
            </View>
          </View>

          <Input
            title={'비밀번호'}
            returnKeyType={ReturnKeyTypes.NEXK}
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
            onSubmitEditing={onSubmit}
          />
          <View style={styles.buttonContainer}>
            <Button
              title={'회원가입'}
              onPress={onSubmit}
              disabled={disabled}
              // onPress={() => navigation.navigate(AuthRoutes.CALENDAR_View)}
            />
          </View>
          <View style={styles.rowWrapper}>
            <Text
              style={styles.textButton}
              onPress={() => console.log('약관 화면으로 전환')}
              // navigation.navigate(AuthRoutes.Account)}
            >
              약관
            </Text>
            <Text
              style={styles.textButton}
              onPress={() => console.log('개인정보 정책 화면으로 전환')}
              // navigation.navigate(AuthRoutes.Account)}
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
    marginTop: 30,
    paddingHorizontal: 20,
  },
  rowWrapper: {
    flexDirection: 'row',
  },
  textButton: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 30,
    justifyContent: 'space-evenly',
  },
});

export default SignInScreen;
