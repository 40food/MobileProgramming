import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    TextInput,
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
  import { GRAY, PRIMARY } from '../colors';
  import { dateState, diaryState } from '../Atom';
  import { useRecoilState } from 'recoil';


  
  const Diary3 = () => {
     const navigation = useNavigation();
     const [date, setDate] = useRecoilState(dateState);
     const [diary, setDiary] = useRecoilState(diaryState);
     const [text, setText] = useState(diary.content);

  const submit = () => {
    setDiary({
      date: date,
      content: text,
    });
    navigation.navigate(AuthRoutes.CalendarView);
  };


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <View style={styles.container}>
        <View style={{margin:30}}>
            <Logo />
          </View>
          <Text style={styles.date}>{date}</Text>
        <TextInput 
          style={styles.textarea}
          multiline
          placeholder="오늘 어땠나요?"
          placeholderTextColor={GRAY.DEFAULT}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <View style={{margin:30}}>
        <Button 
            title="submit"
            onPress={submit}
            >

        </Button>
        </View>
        {/* <Button title="submit" onPress={submit} /> */}
      </View>
    </KeyboardAvoidingView>
    );
    };


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  date: {
    fontSize: 18,
    fontWeight: 600,
    color: PRIMARY.DEFAULT,
    marginBottom: 20,
  },
  textarea: {
    width: 300,
    height: 400,
    borderWidth: 1,
    margin: 10,
  },
});
  
  export default Diary3;
  