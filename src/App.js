<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import Logo from './components/Logo';
import Navigation from './navigations/Navigation';
import SettingScreen from './screens/SettingScreen';
=======
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
>>>>>>> 410b0f6 (first)

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <StatusBar style="auto" />
      {/* <SignUpScreen /> */}
      {/* <StatusBar style="dark" /> */}
      <Navigation>
        <SignInScreen />
      </Navigation>
=======
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
>>>>>>> 410b0f6 (first)
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
=======
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
>>>>>>> 410b0f6 (first)
  },
});
