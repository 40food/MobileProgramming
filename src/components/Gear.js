import { Image, Pressable, StyleSheet } from 'react-native';
import gear from '../../assets/gear.png';

const Gear = (onPress) => {
  return <Image source={gear} style={logostyles.gear} />;
};

const logostyles = StyleSheet.create({
  gear: {
    marginTop: -50,
    width: 30,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
  },
});

export default Gear;
