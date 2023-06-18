import { Calendar } from 'react-native-calendars';
import { StyleSheet } from 'react-native';
import { useState } from 'react';

const Calender = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      onDayPress={(day) => {
        setSelected(day.dateString);
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
