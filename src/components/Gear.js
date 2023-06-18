import { Image, StyleSheet } from 'react-native';
import gear from '../../assets/gear.png';

const Gear = () => {
  return <Image source={gear} style={logostyles.gear} />;
};

const logostyles = StyleSheet.create({
  gear: {
    width: 30,
    resizeMode: 'contain',
    justifyContent: 'flex-end'

  },
});

export default Gear;
