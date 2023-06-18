import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useRecoilState } from 'recoil';
import { dateState, diaryState } from '../Atom';
import { GRAY, PRIMARY } from '../colors';
import { useNavigation } from '@react-navigation/native';
import { MainRoutes } from '../navigations/routes';

const Diary = () => {
  const [date, setDate] = useRecoilState(dateState);
  const [diary, setDiary] = useRecoilState(diaryState);
  const navigation = useNavigation();

  function submit() {
    console.log(diary);
    navigation.navigate(MainRoutes.MAIN);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <View style={styles.container}>
        <Text style={styles.date}>{date}</Text>
        <TextInput
          style={styles.textarea}
          multiline
          placeholder="오늘 어땠나요?"
          placeholderTextColor={GRAY.DEFAULT}
          value={diary}
          onChangeText={(diary) => setDiary(diary)}
        />
        <Button title="submit" onPress={submit} />
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
  },
});
export default Diary;
