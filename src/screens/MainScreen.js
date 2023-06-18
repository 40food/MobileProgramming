import { StyleSheet, View } from 'react-native';
import Calender from '../components/Calender';
import WriteButton, { ButtonTypes } from '../components/WriteButton';

const Main = () => {
  return (
    <>
      <Calender />
      <View style={styles.buttonContainer}>
        <WriteButton title={ButtonTypes.TODO} />
        <WriteButton title={ButtonTypes.DIARY} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '50px',
  },
});
export default Main;
