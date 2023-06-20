import {
    // Image,
    Modal,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    View,
    Text,
  } from 'react-native';
  import Input, { KeyboardTypes, ReturnKeyTypes } from '../../components/Input';
  import { useEffect, useState } from 'react';
  import Button from '../../components/Button';
  import Logo from '../../components/Logo';
  import { useNavigation } from '@react-navigation/native';
  import { AuthRoutes } from '../../navigations/routes';
  import CheckBox from '../../components/Checkbox';
    // import Input, {KeyboardTypes, ReturnKeyTypes} from "../components/Input"
    import Input2 from '../../components/input2';
    import { useRef } from 'react';
    // import Button from '../../components/button';
    // import CheckBox from '@react-native-community/checkbox';
    import React from 'react';
    import BottomSheet from './BottomSheet';
    import Button2 from '../../components/Button2';
    import CheckBox2 from '../../components/CheckbBox2';



  const ToDo = (props) => {
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(true);
    const navigation = useNavigation();
    const [todo, setTodo] = useState('');
  
    useEffect(() => {
      setDisabled(!(todo.trim() && password.trim()));
    }, [todo, password]);


  
    const onSubmit = () => {
      Keyboard.dismiss();
    };
  

        const [name, setName] = useState('');

    const [ modalVisible, setModalVisible ] = useState(false);
    const pressButton = () => {
        setModalVisible(true);
    }

    const [isSelected, setSelection] = useState(false);
    const [isShop, setShopping] = useState(false);
    const [isAssign, setAssigned] = useState(false);
    const [isBlank, setBlank] = useState(false);


    return(
            <View>
                <View style={styles.cc}>
                <Logo/>
                </View>
                <Text></Text>
                <Text></Text>
                <Text></Text>

                <View style={styles.flexDirection}>
                <CheckBox
                onPress={() => setSelection(!isSelected)}
                title="모바일 프로그래밍 UI 설계하기"
                isChecked={isSelected}
                // isSelected={isSelected}
                />

                <Pressable
                style={[styles.size]}
                onPress={pressButton}
                >
                <Text style={styles.size}>...</Text>
                </Pressable>

                <BottomSheet
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                />

             </View>

             <View style={styles.flexDirection}>
    
            <CheckBox
                onPress={() => setShopping(!isShop)}
                title="장보기"
                isChecked={isShop}
              />

            <Pressable
            style={[styles.size]}
            onPress={pressButton}>
            <Text style={styles.size}>...</Text>
            </Pressable> 
            
            <BottomSheet
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
              
        </View>

        <View style={styles.flexDirection}>
            <CheckBox
                onPress={() => setAssigned(!isAssign)}
                title="과제하기"
                isChecked={isAssign}
        />

            <Pressable
            style={[styles.size]}
            onPress={pressButton}>
            <Text style={styles.size}>...</Text>
            </Pressable>

            <BottomSheet
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </View>

        <View style={{ flexDirection: 'row'}}>

            <View style={styles.aa}>
            <CheckBox2 style={styles.aa}
                onPress={() => setBlank(!isBlank)}
                isChecked={isBlank}
            
              />
            </View>

            <View style={{}}>
            <Input2 
                keyboardType={KeyboardTypes.DEFAULT}
                returnKeyType = {ReturnKeyTypes.NEXT}
                value={todo}
                onChangeText = {(todo) => setTodo(todo.trim())}
            />
            </View>

        </View>

             <View style={styles.mm}>
            <Button style={styles.c} title= "완료" onPress ={() => navigation.navigate(AuthRoutes.CalendarView)}/>

            </View>

            </View>
            );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 100,
      marginBottom: 30,
    },
    buttonContainer: {
      width: '100%',
      marginTop: 30,
      paddingHorizontal: 20,
    },
    buttonWrapper: {
      marginTop: 30,
      flexDirection: 'row',
    },
    textButton: {
      fontSize: 16,
      fontWeight: 'bold',
      marginHorizontal: 30,
      justifyContent: 'space-evenly',
    },
    title:{
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Cochin',
        fontSize:50,
        fontWeight: 'bold',
        margin: 40,

    },
    size: {
        fontSize:20,
        fontWeight: 'bold',
        marginTop: 6,

        
    },
    round:{
        borderWidth: 6,
        borderColor: '#cdcdcd',
        borderRadius: 20
    },
    orange:{
        color:'orange',
    },
    blue:{
        color: '#1090FF',
    },
    right:{
        justifyContent: 'default',
        alignItems: 'flex-start',
        display: 'flex',
        
    },
    checkboxContainer:{
        flexDirection: 'row',
        marginBottom: 20,
    },
    sizeLine:{
        width: '1',
    },
    flexDirection:{
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    flexDirection2:{
        flexDirection: 'row',
        // justifyContent: 'space-evenly'


    },
    end:{
        justifyContent: 'flex-end',
        fontSize:20,
        fontWeight: 'bold',

    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        },
        modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    m: {
        marginTop: 250,
        paddingHorizontal: 40,

    },
    c: {
        color:'#add8e6',

    },
    cc: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40,
        marginTop:1
    },
    aa:{
        marginLeft: 35,
    },
    bb: {
        // marginRight:,
    },
    mm: {
        marginTop: 200,
        paddingHorizontal: 40,

    },

  });
  
  export default ToDo;

  