import { StyleSheet } from 'react-native';

export const scheduleStyles = StyleSheet.create({
  task: {
    margin: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  task_header: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  task_leftview: {},
  task_rightview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
