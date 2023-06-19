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

const FindPWScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    setDisabled(!(name.trim() && email.trim()));
  }, [name, email]);

  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(name, email);
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
            returnKeyType={ReturnKeyTypes.DONE}
            value={email}
            onChangeText={(email) => setEmail(email.trim())}
            onSubmitEditing={onSubmit}
          />
          <View style={styles.buttonContainer}>
            <Button
              title={'비밀번호 찾기'}
              onPress={() => {
                onSubmit;
                navigation.goBack();
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

export default FindPWScreen;
