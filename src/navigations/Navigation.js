// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { WHITE } from '../colors';
// import { AuthRoutes, MainRoutes } from './routes';
// import SettingScreen from '../screens/SettingScreen';
// import SignInScreen from '../screens/SignInScreen';
// import SignUpScreen from '../screens/SignUpScreen';
// import AccountScreen from '../screens/AccountScreen';
// import NoticeScreen from '../screens/NoticeScreen';
// import InformationScreen from '../screens/InformationScreen';
// import TermScreen from '../screens/TermScreen';
// import PrivacyPoliceScreen from '../screens/PrivacyPolicyScreen';
// // import Main from '../screens/Main';
// import Todo from '../screens/Todo';
// import Diary from '../screens/Diary';

// const Stack = createNativeStackNavigator();
// const getIsSignedIn = () => {
//   // custom logic
//   return true;
// };
// const Navigation = () => {
//   const isSignedIn = getIsSignedIn();

//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           contentStyle: { backgroundColor: WHITE },
//           headerShown: false,
//         }}
//       >
//         {isSignedIn ? (
//           <>
//             {/* <Stack.Screen name={MainRoutes.MAIN} component={Main} /> */}
//             <Stack.Screen name={MainRoutes.TODO} component={Todo} />
//             <Stack.Screen name={MainRoutes.DIARY} component={Diary} />
//           </>
//         ) : (
//           <>
//             <Stack.Screen name={AuthRoutes.SIGN_IN} component={SignInScreen} />
//             <Stack.Screen name={AuthRoutes.SIGN_UP} component={SignUpScreen} />
//             <Stack.Screen name={AuthRoutes.Setting} component={SettingScreen} />
//             <Stack.Screen name={AuthRoutes.Account} component={AccountScreen} />
//             <Stack.Screen name={AuthRoutes.Notice} component={NoticeScreen} />
//             <Stack.Screen
//               name={AuthRoutes.Information}
//               component={InformationScreen}
//             />
//             <Stack.Screen name={AuthRoutes.Terms} component={TermScreen} />
//             <Stack.Screen
//               name={AuthRoutes.PrivacyPolicy}
//               component={PrivacyPoliceScreen}
//             />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Navigation;

import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Navigation;