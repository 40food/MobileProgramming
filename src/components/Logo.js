import { Image, StyleSheet, View } from 'react-native';
import logo from '../../assets/logo.png';
const Logo = () => {
  return (
    <View style={logostyles.container}>
      <Image source={logo} style={logostyles.logo} />
    </View>
  );
};

const logostyles = StyleSheet.create({
  container: {
    margin: 50,
    alignContent: 'center',
  },
  logo: {
    width: '300px',
    height: '100px',
    resizeMode: 'contain',
  },
});

export default Logo;
