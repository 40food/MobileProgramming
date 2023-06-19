import React, { useEffect, useRef,useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Modal,
    Animated,
    TouchableWithoutFeedback,
    Dimensions,
    PanResponder,
    
} from 'react-native';
import Button from '../../components/Button';
import Button2 from '../../components/Button2';
import { BLACK, GRAY, PRIMARY, WHITE, GHOSTWHITE, LIGHTGRAY, ALICEBLUE } from '../../colors';
import Calendar from 'react-calendar';
import ToDo from './ToDo';
import { AuthRoutes } from '../../navigations/routes';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../components/Logo';





const BottomSheet = (props) => {
    const { modalVisible, setModalVisible } = props;
    const screenHeight = Dimensions.get("screen").height;
    const panY = useRef(new Animated.Value(screenHeight)).current;
    const navigation = useNavigation();

    const translateY = panY.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [0, 0, 1],
    });

    const resetBottomSheet = Animated.timing(panY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
    });

    const closeBottomSheet = Animated.timing(panY, {
        toValue: screenHeight,
        duration: 300,
        useNativeDriver: true,
    });

    const panResponders = useRef(PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => false,
        onPanResponderMove: (event, gestureState) => {
            panY.setValue(gestureState.dy);
        },
        onPanResponderRelease: (event, gestureState) => {
            if(gestureState.dy > 0 && gestureState.vy > 1.5) {
                closeModal();
            }
            else {
                resetBottomSheet.start();
            }
        }
    })).current;

    const [totalDays, setTotalDays] = useState([]);
    const [totalDaysByState, setTotalDaysByState] = useState({});
    const [pressedDate, setPressedDate] = useState({
      state: "",
      year: 0,
      month: 0,
      date: 0,
    });
    const [week, setWeek] = useState(0);
    const [viewTotalDays, setViewTotalDays] = useState(true);
    const { year, month, date } = props;
  
    useEffect(() => {
      getTotalDays(year, month);
    }, [year, month, date]);
  
    useEffect(() => {
      totalDays.forEach((el, idx) => {
        if (el.includes(date)) {
          setWeek(idx);
        }
      });
    }, [totalDays]);
  
    const getTotalDays = (year, month) => {
      const previousMonthLastDate = new Date(year, month - 1, 0).getDate();
      const previousMonthLastDay = new Date(year, month - 1, 0).getDay();
      const currentMonthLastDate = new Date(year, month, 0).getDate();
      const currentMonthLastDay = new Date(year, month, 0).getDay();
  
      const previousDays = Array.from(
        { length: previousMonthLastDay + 1 },
        (v, i) => previousMonthLastDate - previousMonthLastDay + i
      );
      const currentDays = Array.from(
        { length: currentMonthLastDate },
        (v, i) => i + 1
      );
      const nextDays = Array.from(
        { length: 6 - currentMonthLastDay },
        (v, i) => i + 1
      );
  
    
  
      setTotalDaysByState({
        prev: {
          daysList: previousMonthLastDay !== 6 ? previousDays : [],
          year: month === 1 ? year - 1 : year,
          month: month === 1 ? 12 : month - 1,
        },
        curr: { daysList: currentDays, year: year, month: month },
        next: {
          daysList: nextDays,
          year: month === 12 ? year + 1 : year,
          month: month === 12 ? 1 : month + 1,
        },
      });
    };
  
    const handlePressDay = (pressedDate) => {
      setPressedDate(pressedDate);
      if (pressedDate.state === "prev" || pressedDate.state === "next") {
        props.moveToSpecificYearAndMonth(pressedDate.year, pressedDate.month);
      }
    };
  
    const onSwipeLeft = (gestureState) => {
      if (viewTotalDays === true) {
        props.moveToNextMonth(month);
      }
      if (viewTotalDays === false) {
        if (totalDays[week + 1] === undefined) {
          props.moveToNextMonth(month);
          setWeek(0);
        } else {
          setWeek(week + 1);
        }
      }
    };
    const onSwipeRight = (gestureState) => {
      if (viewTotalDays === true) {
        props.moveToPreviousMonth(month);
      }
      if (viewTotalDays === false) {
        if (totalDays[week - 1] === undefined) {
          props.moveToPreviousMonth(month);
          if (
            new Date(year, month - 1, 0).getDay() === 4 ||
            new Date(year, month - 1, 0).getDay() === 5
          ) {
            setWeek(5);
          } else {
            setWeek(4);
          }
        } else {
          setWeek(week - 1);
        }
      }
    };
    const onSwipeUp = () => {
      setViewTotalDays(false);
    };
    const onSwipeDown = () => {
      setViewTotalDays(true);
    };
  

    useEffect(()=>{
        if(props.modalVisible) {
            resetBottomSheet.start();
        }
    }, [props.modalVisible]);

    const closeModal = () => {
        closeBottomSheet.start(()=>{
            setModalVisible(false);
        })
    }

    return (
        <Modal
            visible={modalVisible}
            animationType={"fade"}
            transparent
            statusBarTranslucent
        >

            <View style={styles.overlay}>

                <TouchableWithoutFeedback
                    onPress={closeModal}
                >
                    <View style={styles.background}/>
                </TouchableWithoutFeedback>
                <Animated.View
                    style={{...styles.bottomSheetContainer, transform: [{ translateY: translateY }]}}
                    {...panResponders.panHandlers}
                >
                     <Button2 
                        title="✏️수정하기"
                        onPress={closeModal}

                        ></Button2>
                     <Button2 title="🗑삭제하기"></Button2>
                     <Button2 title="🗑미완료 할일 삭제하기"></Button2>
                     <Button2 
                        title="📅날짜 바꾸기"
                        // onPress={pressButton}
                    ></Button2>     
                     
                    {/* <Calendar></Calendar>*/}
                
                </Animated.View>
                  
            </View>
        </Modal>

        
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    background: {
        flex: 1,
    },
    bottomSheetContainer: {
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#d3d3d3',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
})


const S = StyleSheet.create({
    dayOfWeek: {
      flexDirection: "row",
    },
    totalDays: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    box: {
      width: "14.2%",
      height: 30,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 16,
    },
    prev: {
      color: "gray",
      fontSize: 24,
    },
    next: {
      color: "gray",
      fontSize: 24,
    },
    curr: {
      color: "black",
      fontSize: 24,
    },
    today: {
      color: "#2196f3",
      fontSize: 24,
    },
    pressedDate: {
      width: 40,
      height: 40,
      backgroundColor: "white",
      borderWidth: 1,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    pressed: {
      opacity: 0.3,
    },
  });

  const changeColorByDay = (day) =>
  StyleSheet.create({
    dayOfWeek: {
      color: day === "Sun" ? "red" : day === "Sat" ? "blue" : "gray",
      fontSize: 16,
    },
  });

  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


export default BottomSheet;
