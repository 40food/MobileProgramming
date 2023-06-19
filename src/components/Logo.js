import { Image, StyleSheet, View } from 'react-native';
import logo from '../../assets/logo.png';
const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 250,
    height: 200,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Logo;
