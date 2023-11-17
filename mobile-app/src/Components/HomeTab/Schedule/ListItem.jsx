import { View, Text } from 'react-native';
import { scheduleStyles } from './scheduleStyles';

export default function ListItem({ item }) {
  const timeConverter = (militaryTime) => {
    if (militaryTime > 12) {
      let time = militaryTime - 12;
      return `${time}:00 pm`;
    } else if (militaryTime === 0) {
      return 'All-day';
    } else {
      return `${militaryTime}:00 am`;
    }
  };

  return (
    <View style={scheduleStyles.task}>
      <View>
        <Text style={scheduleStyles.task_header}>{item.task_name}</Text>
        {item.notes ? <Text>{item.notes}</Text> : null}
      </View>
      <View style={scheduleStyles.task_rightview}>
        <Text>{timeConverter(item.task_time)}</Text>
      </View>
    </View>
  );
}
