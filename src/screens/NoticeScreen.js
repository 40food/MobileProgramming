import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Logo from '../components/Logo';

const NoticeScreen = () => {
  return (
    <>
      <View style={noticestyles.header}>
        <Logo />
      </View>
      <View style={noticestyles.body}>
        <Text style={noticestyles.title}>공지사항</Text>
        <SafeAreaView>
          <TouchableWithoutFeedback>
            <ScrollView>
              <Text style={noticestyles.notice}>
                안녕하세요. 개발자입니다. {'\n'}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </Text>
              <Text style={noticestyles.date}>2023. 4. 30.</Text>
              <Text style={noticestyles.notice}>
                안녕하세요. 오늘은 식목일입니다. {'\n'}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </Text>
              <Text style={noticestyles.date}>2023. 4. 5.</Text>
              <Text style={noticestyles.notice}>
                개발 진행중에 있으며 각종 오류 fix중입니다. {'\n'}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </Text>
              <Text style={noticestyles.date}>2023. 3. 28.</Text>
            </ScrollView>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </View>
    </>
  );
};

const noticestyles = StyleSheet.create({
  header: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 40,
    width: 250,
    resizeMode: 'contain',
  },
  body: {
    flex: 1,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#1076C0',
    fontSize: 20,
    marginTop: -10,
    marginBottom: 25,
  },
  notice: {
    flex: 1,
    fontSize: 19,
  },
  date: {
    color: '#6F6F6F',
    padding: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D6D6',
    marginBottom: 20,
  },
});

export default NoticeScreen;
