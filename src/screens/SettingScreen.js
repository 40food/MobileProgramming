import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../components/Logo';
import { AuthRoutes } from '../navigations/routes';

const SettingScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={settingstyles.header}>
        <Logo />
      </View>
      <View style={settingstyles.menus}>
        <View style={settingstyles.body}>
          <Text
            style={settingstyles.menu}
            onPress={() => navigation.navigate(AuthRoutes.Account)}
          >
            계정
          </Text>
          <Text
            style={settingstyles.menu}
            onPress={() => navigation.navigate(AuthRoutes.Notice)}
          >
            공지사항
          </Text>
          <Text
            style={settingstyles.menu}
            onPress={() => navigation.navigate(AuthRoutes.Information)}
          >
            정보
          </Text>
        </View>
        <View style={settingstyles.bottom}>
          <Text
            style={settingstyles.menu}
            onPress={() => navigation.navigate(AuthRoutes.SIGN_IN)}
          >
            로그아웃
          </Text>
          <Text style={settingstyles.menu}>
            버전 {'                                          '} 0.0.0
          </Text>
          <Text style={settingstyles.menu}>
            문의 {'                      '} ☎️ 02-000-0000
          </Text>
        </View>
      </View>
    </>
  );
};

const settingstyles = StyleSheet.create({
  menus: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  header: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    marginTop: -10,
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
  bottom: {
    marginLeft: 50,
    marginRight: 50,
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
  },
});

export default SettingScreen;
