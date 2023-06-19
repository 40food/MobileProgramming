// import {
//   Button,
//   KeyboardAvoidingView,
//   Platform,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
// // import { useRecoilState } from 'recoil';
// import { dateState, diaryState } from '../Atom';
// import { GRAY, PRIMARY } from '../colors';
// import { useNavigation } from '@react-navigation/native';
// import { MainRoutes } from '../navigations/routes';
// import { useEffect, useState } from 'react';
// import { AuthRoutes } from '../navigations/routes';
// import Input, { KeyboardTypes, ReturnKeyTypes } from '../components/Input';



// const Diary = () => {

//   const [text, setText] = useState(diary.content);
//   const navigation = useNavigation();


//   // const submit = () => {
//   //   setDiary({
//   //     date: date,
//   //     content: text,
//   //   });
//   //   // navigation.navigate(MainRoutes.MAIN);
//   //   navigation.navigate(AuthRoutes.Diary);
//   // };

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.select({ ios: 'padding' })}
//     >
//       <View style={styles.container}>
//         <Text style={styles.date}>{date}</Text>
//         <TextInput
//           style={styles.textarea}
//           multiline
//           placeholder="오늘 어땠나요?"
//           placeholderTextColor={GRAY.DEFAULT}
//           value={text}
//           onChangeText={(text) => setText(text)}
//         />
//         <Button title="submit" onPress={submit} />
//       </View>
//     </KeyboardAvoidingView>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   date: {
//     fontSize: 18,
//     fontWeight: 600,
//     color: PRIMARY.DEFAULT,
//     marginBottom: 20,
//   },
//   textarea: {
//     width: 300,
//     height: 400,
//     borderWidth: 1,
//   },
// });
// export default Diary;


