import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  FlatList,
} from 'react-native';

export default function AddTaskButton({ selectedDay }) {
  return (
    <View>
      <Button
        title="Add Task"
        onPress={console.log('Button Pressed:', selectedDay)}
      ></Button>
    </View>
  );
}
