import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../components/Logo';
import { AuthRoutes } from '../navigations/routes';

const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={accountstyles.header}>
        <Logo />
        <Text style={accountstyles.title}>계정</Text>
      </View>
      <View style={accountstyles.body}>
        <Text style={accountstyles.menu}>이름</Text>
        <Text style={accountstyles.menu}>id</Text>
        <Text style={accountstyles.menu}>비밀번호 변경</Text>
        <Text style={[accountstyles.menu, { color: '#930000' }]}>
          계정 삭제하기
        </Text>
      </View>
    </>
  );
};

const accountstyles = StyleSheet.create({
  header: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#1076C0',
    fontSize: 20,
    marginTop: -10,
    marginBottom: 25,
  },
  body: {
    marginLeft: 50,
    marginRight: 50,
    justifyContent: 'flex-start',
  },
  menu: {
    fontSize: 20,
    marginTop: 10,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D6D6',
  },
});

export default AccountScreen;
