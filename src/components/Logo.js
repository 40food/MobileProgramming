import { StyleSheet, Text, View } from 'react-native';

const Logo = () => {
  return (
    <View style={logostyles.container}>
      <View style={logostyles.up}>
        <Text style={logostyles.icon}>To-do </Text>
        <Text style={[logostyles.icon, logostyles.icon3]}>&</Text>
      </View>
      <View style={logostyles.down}>
        <Text style={[logostyles.icon, logostyles.icon2]}>Diary</Text>
      </View>
    </View>
  );
};

const logostyles = StyleSheet.create({
  container: {
    margin: 50,
  },
  up: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  down: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 50,
    color: '#FC794E',
  },
  icon2: {
    color: '#1076C0',
  },
  icon3: {
    color: '#494949',
  },
});

export default Logo;
