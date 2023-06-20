import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Alert, Platform, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Fontisto } from '@expo/vector-icons';
// import { Checkbox } from 'react-native-paper';
import * as React from 'react';
import { theme } from '../../colors';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { AuthRoutes } from '../../navigations/routes';
import BottomSheet from './BottomSheet';
import CheckBox from '../../components/Checkbox';
import CheckBox2 from '../../components/CheckbBox2';


const STORAGE_KEY = "@toDos";

 const ToDo = (props) => {
//   const[deleteVisible, setDeleteVisible] = props;
  const [working, setWorking] = useState(false);
//   const travle = () => setWorking(false);
  const work = () => setWorking(true);
  const [checked, setChecked] = React.useState(false);

  const navigation = useNavigation();
  const [toDos, setToDos] = useState({});

  const [ modalVisible, setModalVisible ] = useState(false);
  const pressButton = () => {
      setModalVisible(true);
  }
  const [text, setText] = useState("");
  const onChangeText = (payload) => setText(payload);

  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave)) //Object to String
  }
  const loadToDos = async () => {
    try {
      const s = await AsyncStorage.getItem(STORAGE_KEY)
      setToDos(JSON.parse(s))

    } catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    loadToDos();
  }, []);

  const addToDo = async () => {
    if (text === "") {
      return
    }
    const newToDos = { ...toDos, [Date.now()]: { text, working, checked} }
    setToDos(newToDos)

    saveToDos(newToDos)

    setText("")
  }


  const deleteToDo = (key) => {
    if(Platform.OS === "web"){
      const ok = confirm("delete To do?");
      if(ok){
        const newToDos = { ...toDos }
        delete newToDos[key]
        setToDos(newToDos)
        saveToDos(newToDos)
      }
    }
    Alert.alert("ToDo삭제", "정말 삭제하시겠습니까?", [
      { text: "취소" },
      {
        text: "네", onPress: async () => {
          const newToDos = { ...toDos }
          delete newToDos[key]
          setToDos(newToDos)
          await saveToDos(newToDos)
        }
      }
    ]);
  }

//   useEffect(()=>{
//     if(props.deleteVisible){

//     },[props.deleteVisible];
//     const
//   })
//   const [isSelected ,setSelected] = useState(false);

  const checkToDo = async (key) => {
    const newToDos = { ...toDos }
    const temp = newToDos[key].checked

    newToDos[key].checked = !temp

    setToDos(newToDos)
    await saveToDos(newToDos)
  }
  useEffect(() => {
    loadToDos();
  }, []);

  console.log()
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <View style={styles.header}> */}
      <View style={styles.cc}>
                <Logo/>
        </View>
      {/* </View> */}
     

      <ScrollView>
        {
        //   Object.keys(toDos).map((key) => (
            Object.keys(toDos).map((key)=>(
            toDos[key].working === working ?
              <View style={styles.toDo} key={key}>

                <View style={styles.btnView}>
                  <CheckBox key = {key}
                    status={toDos[key].checked ? 'checked' : 'unchecked'}
                    onPress={() =>  {
                      checkToDo(key);
                    }  

                }
                    color='blue'
                  />
                <Text style={{...styles.toDoText, 
                  textDecorationLine: toDos[key].checked? 'line-through' : null,
                  color : toDos[key].checked ? 'skyblue': 'black'}} >
                  {toDos[key].text}
                </Text>

                <TouchableOpacity
                style={[styles.size]}
                onPress={pressButton}
                >
                <Text style={styles.size}>...</Text>
                </TouchableOpacity>

                <BottomSheet
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                />

                  <TouchableOpacity onPress={() => deleteToDo(key)}>
                    <Fontisto name="trash" size={18} color="black" />
                  </TouchableOpacity>
                </View>

               
               
              </View>

              
              : null

              
          ))}
      </ScrollView>
      <View styles={{flexDirection: 'row'}}>
      <TextInput
                    returnKeyType='done'
                    onSubmitEditing={addToDo}
                    onChangeText={onChangeText}
                    placeholder={working ? "투두리스트 추가" : "투두리스트 추가"}
                    style={styles.input}>
        </TextInput>
     </View>

        <View style={styles.mm}>
            <Button style={styles.c} title= "완료" onPress ={() => navigation.navigate(AuthRoutes.CalendarView)}/>

            </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100
  },
  btnText: {
    fontSize: 44,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    fontSize: 18,
    marginBottom: 200,
    borderBottomWidth: 2,
    width:300,
    marginLeft:50,
    


  },
  toDo: {
    flex:1,
    marginBottom: 10,
    paddingVertical: 1,
    paddingHorizontal: 30,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 60,
    
  },
  toDoText: {
    flex:0.7,
    fontSize: 16,
    fontWeight: "500",
    
  },
  btnView:{
    flex:1,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-around',

  },
  mm: {
    marginTop: 16,
    paddingHorizontal: 40,
    marginBottom: 20,
    
},

});

export default ToDo
