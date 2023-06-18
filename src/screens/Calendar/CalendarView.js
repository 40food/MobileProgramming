import React, { useContext, useState } from 'react';
import { format } from 'date-fns';
import { Calendar } from 'react-native-calendars';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useNavigation } from '@react-navigation/native';
import { Navigation } from 'react-calendar';
// import Button from "../../components/button";
import { AuthRoutes } from '../../navigations/routes';
import Day from 'react-native-calendars/src/calendar/day';
import Logo from '../../components/Logo';
import Gear from '../../components/Gear';

function CalanderView() {
  const [modalVisible, setModalVisible] = useState(false);
  const pressButton = () => {
    setModalVisible(true);
  };

  <View style={styles.container}></View>;

  const navigation = useNavigation();

  const posts = [
    {
      date: '2023-06-19',
    },
    {
      date: '2023-06-27',
    },
  ];
  const markedDates = posts.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    <Text>aa</Text>;
    acc[formattedDate] = { marked: true };
    return acc;
  }, {});

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd')
  );
  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  return (
    <View>
      <View style={styles3.cc}>
        <Pressable onPress={() => navigation.navigate(AuthRoutes.Setting)}>
          <Gear />
        </Pressable>
      </View>

      <View style={styles3.a}>
        <Logo />
      </View>

      <Calendar
        style={styles.calendar}
        markedDates={markedSelectedDates}
        theme={{
          selectedDayBackgroundColor: 'red',
          arrowColor: '#009688',
          dotColor: '#009688',
          todayTextColor: '#009688',
        }}
        onDayPress={(day) => navigation.navigate(AuthRoutes.ToDo)}
      />

      <View style={styles.container}></View>
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    margin: 10,
  },
});

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // height: 42,
  },
  title: {
    fontFamily: 'Cochin',
    fontSize: 50,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  size: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  round: {
    borderWidth: 6,
    borderColor: '#cdcdcd',
    borderRadius: 20,
  },
  orange: {
    color: 'orange',
  },
  blue: {
    color: '#1090FF',
  },
  cc: {
    marginRight: 15,
    height: 60,
    alignItems: 'flex-end',
  },
  a: {
    alignItems: 'center',
  },
});

export default CalanderView;
