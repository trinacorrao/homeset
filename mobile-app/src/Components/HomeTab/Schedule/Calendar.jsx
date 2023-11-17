import React from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';

export const MyCalendar = ({ selectedDay, updateSelectedDay }) => {
  let today = new Date().toISOString().slice(0, 10);

  return (
    <View>
      <Calendar
        onDayPress={(day) => {
          console.log('Selected day', day);
          updateSelectedDay(day.dateString);
        }}
        markedDates={{
          [today]: { marked: true },
          [selectedDay]: { selected: true },
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: 'blue',
          // todayBackgroundColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: 'blue',
          arrowColor: '#00adf5',
          monthTextColor: '#00adf5',
          indicatorColor: 'blue',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </View>
  );
};

//CSS for calendar from GeeksforGeeks.org
