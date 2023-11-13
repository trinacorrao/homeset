import { View, Text } from 'react-native';
import { MyCalendar } from './Calendar';
import Tasks from './Tasks';

export default function Schedule() {
  return (
    <View>
      <MyCalendar />
      <Tasks />
    </View>
  );
}
