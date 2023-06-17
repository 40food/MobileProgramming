import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};

export default MainStack;
