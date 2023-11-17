import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  FlatList,
} from 'react-native';
import { testData } from './HardCodedData';
import ListItem from './ListItem';
import { scheduleStyles } from './scheduleStyles';
import AddTaskButton from './addTaskButton';

export default function Tasks({ selectedDay }) {
  console.log('DAy:', selectedDay);

  return (
    <View>
      <AddTaskButton selectedDay={selectedDay} />
      <View>
        <FlatList
          data={testData[selectedDay]}
          style={{ margin: 5 }}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      </View>
    </View>
  );
}
