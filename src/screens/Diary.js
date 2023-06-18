import { StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { dateState } from '../Atom';
import { PRIMARY } from '../colors';

const Diary = () => {
  const [date, setDate] = useRecoilState(dateState);
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  date: {
    fontSize: 16,
    fontWeight: 600,
    color: PRIMARY.DEFAULT,
  },
});
export default Diary;
