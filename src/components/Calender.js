import { Calendar } from 'react-native-calendars';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { dateState } from '../Atom';
import { useRecoilState } from 'recoil';

const Calender = () => {
  const [selected, setSelected] = useState('');
  const [date, setDate] = useRecoilState(dateState);

  return (
    <Calendar
      onDayPress={(day) => {
        setSelected(day.dateString);
        setDate(day.dateString);
        console.log(date);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: 'blue',
        },
      }}
      style={styles.calendar}
    />
  );
};
const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});
export default Calender;
