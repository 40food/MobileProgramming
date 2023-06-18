import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Alert } from 'react-native';
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
        <Text
          style={accountstyles.menu}
          onPress={() => navigation.navigate(AuthRoutes.Change_PW)}
        >
          비밀번호 변경
        </Text>
        <Text
          style={[accountstyles.menu, { color: '#930000' }]}
          onPress={() => {
            Alert.alert(
              '정말로 계정을 삭제하시겠습니까?',
              '삭제한 계정은 복구가 불가능하며, 모든 정보가 삭제됩니다.',
              [
                {
                  text: '예',
                  onPress: () => navigation.navigate(AuthRoutes.SIGN_IN),
                },
                { text: '아니오' },
              ]
            );
          }}
        >
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
