import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../components/Logo';
import { AuthRoutes } from '../navigations/routes';

const InformationScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={infostyles.header}>
        <Logo />
        <Text style={infostyles.title}>정보</Text>
      </View>
      <View style={infostyles.body}>
        <Text
          style={infostyles.menu}
          onPress={() => navigation.navigate(AuthRoutes.Terms)}
        >
          약관
        </Text>
        <Text
          style={infostyles.menu}
          onPress={() => navigation.navigate(AuthRoutes.PrivacyPolicy)}
        >
          개인정보 정책
        </Text>
      </View>
    </>
  );
};

const infostyles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    marginLeft: 50,
    marginRight: 50,
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    color: '#1076C0',
    fontSize: 20,
    marginTop: -10,
    marginBottom: 25,
  },
  menu: {
    fontSize: 20,
    marginTop: 10,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D6D6',
  },
});

export default InformationScreen;
