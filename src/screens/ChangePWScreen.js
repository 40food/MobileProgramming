import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import Input, { KeyboardTypes, ReturnKeyTypes } from '../components/Input';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';
import { useNavigation } from '@react-navigation/native';
import { AuthRoutes } from '../navigations/routes';
import { Alert } from 'react-native';

const ChangePWScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCheck, setNewPasswordCheck] = useState('');
  const [disabled, setDisabled] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    setDisabled(
      !(
        name.trim() &&
        email.trim() &&
        password.trim() &&
        newPassword.trim() &&
        newPasswordCheck.trim()
      )
    );
  }, [name, email, password, newPassword, newPasswordCheck]);

  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(name, email, password, newPassword, newPasswordCheck);
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
            title={'이름'}
            // placeholder="홍길동"
            returnKeyType={ReturnKeyTypes.NEXT}
            value={name}
            onChangeText={(name) => setName(name.trim())}
          />
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
            returnKeyType={ReturnKeyTypes.NEXT}
            secureTextEntry
            value={password}
            onChangeText={(password) => setPassword(password.trim())}
            // onSubmitEditing={onSubmit}
          />
          <Input
            title={'새 비밀번호'}
            returnKeyType={ReturnKeyTypes.NEXT}
            secureTextEntry
            value={newPassword}
            onChangeText={(newPassword) => setNewPassword(newPassword.trim())}
            // onSubmitEditing={onSubmit}
          />
          <Input
            title={'새 비밀번호 확인'}
            returnKeyType={ReturnKeyTypes.DONE}
            secureTextEntry
            value={newPasswordCheck}
            onChangeText={(newPasswordCheck) =>
              setNewPasswordCheck(newPasswordCheck.trim())
            }
            onSubmitEditing={onSubmit}
          />
          <View style={styles.buttonContainer}>
            <Button
              title={'비밀번호 변경하기'}
              onPress={() => {
                onSubmit;
                Alert.alert('비밀번호 변경', '비밀번호 변경이 완료되었습니다.');
                navigation.navigate(AuthRoutes.SIGN_IN);
              }}
              disabled={disabled}
            />
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
  buttonContainer: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20,
  },
});

export default ChangePWScreen;
