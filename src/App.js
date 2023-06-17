import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Logo from './components/Logo';
import Navigation from './navigations/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Logo />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
