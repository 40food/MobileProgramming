import { View } from 'react-native';
import Calender from '../components/Calender';
import WriteButton, { ButtonTypes } from '../components/WriteButton';

const Main = () => {
  return (
    <View>
      <Calender />
      <WriteButton title={ButtonTypes.TODO} />
      <WriteButton title={ButtonTypes.DIARY} />
    </View>
  );
};

export default Main;
