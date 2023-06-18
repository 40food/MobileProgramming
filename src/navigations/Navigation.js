import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WHITE } from '../colors';
import { AuthRoutes, MainRoutes } from './routes';
import SettingScreen from '../screens/SettingScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AccountScreen from '../screens/AccountScreen';
import NoticeScreen from '../screens/NoticeScreen';
import InformationScreen from '../screens/InformationScreen';
import TermScreen from '../screens/TermScreen';
import PrivacyPoliceScreen from '../screens/PrivacyPolicyScreen';
import MainScreen from '../screens/MainScreen';

const Stack = createNativeStackNavigator();
const getIsSignedIn = () => {
  // custom logic
  return true;
};
const Navigation = () => {
  const isSignedIn = getIsSignedIn();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: WHITE },
          headerShown: false,
        }}
      >
        {isSignedIn ? (
          <>
            <Stack.Screen name={MainRoutes.MAIN} component={MainScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name={AuthRoutes.SIGN_IN} component={SignInScreen} />
            <Stack.Screen name={AuthRoutes.SIGN_UP} component={SignUpScreen} />
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
