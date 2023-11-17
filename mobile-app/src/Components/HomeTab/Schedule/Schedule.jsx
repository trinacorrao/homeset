import { View, Text } from 'react-native';
import { MyCalendar } from './Calendar';
import Tasks from './Tasks';
import { useState } from 'react';

export default function Schedule() {
  let today = new Date().toISOString().slice(0, 10);
  let [selectedDay, updateSelectedDay] = useState(today);

  return (
    <View>
      <MyCalendar
        selectedDay={selectedDay}
        updateSelectedDay={updateSelectedDay}
      />
      <Tasks selectedDay={selectedDay} />
    </View>
  );
}
