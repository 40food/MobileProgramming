import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Logo from '../components/Logo';

const PrivacyPolicyScreen = () => {
  return (
    <>
      <View style={privacypolicystyles.header}>
        <Logo />
        <Text style={privacypolicystyles.title}>개인정보 정책</Text>
      </View>
      <View style={privacypolicystyles.body}>
        <SafeAreaView>
          <ScrollView>
            <Text style={privacypolicystyles.notice}>
              개인정보 정책입니다. 이 화면은 개인정보 정책{'->'}약관으로 이름만
              바꾸어 같은 화면을 사용할 수 있습니다. {'\n\n'}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </Text>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

const privacypolicystyles = StyleSheet.create({
  header: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    marginLeft: 50,
    marginRight: 50,
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: -10,
    fontWeight: 'bold',
    color: '#1076C0',
    fontSize: 20,
    marginBottom: 25,
  },
  notice: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default PrivacyPolicyScreen;
