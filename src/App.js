import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import Logo from './components/Logo';
import CalanderView from './screens/Calendar/CalendarView';
import SettingScreen from './screens/SettingScreen';
import Navigation from './navigations/Navigation';
import { RecoilRoot } from 'recoil';



export default function App() {
  return (
    <RecoilRoot>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navigation>
        {/* <SignInScreen /> */}
        <CalanderView/>
      </Navigation>
    </View>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
  },
});