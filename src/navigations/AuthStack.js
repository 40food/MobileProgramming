import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WHITE } from '../colors';
import SettingScreen from '../screens/SettingScreen';
import SignInScreen from '../screens/SignInScreen';
import AccountScreen from '../screens/AccountScreen';
import NoticeScreen from '../screens/NoticeScreen';
import InformationScreen from '../screens/InformationScreen';
import TermScreen from '../screens/TermScreen';
import PrivacyPoliceScreen from '../screens/PrivacyPolicyScreen';
import { AuthRoutes } from './routes';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerShown: false,
      }}
    >
      <Stack.Screen name={AuthRoutes.SIGN_IN} component={SignInScreen} />
      <Stack.Screen name={AuthRoutes.Setting} component={SettingScreen} />
      <Stack.Screen name={AuthRoutes.Account} component={AccountScreen} />
      <Stack.Screen name={AuthRoutes.Notice} component={NoticeScreen} />
      <Stack.Screen
        name={AuthRoutes.Information}
        component={InformationScreen}
      />
      <Stack.Screen name={AuthRoutes.Terms} component={TermScreen} />
      <Stack.Screen
        name={AuthRoutes.PrivacyPolicy}
        component={PrivacyPoliceScreen}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
