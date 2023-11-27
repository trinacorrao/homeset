import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Open source Icons
import UserName from '../../ClerkAuth/UserName';
import { homeStyles } from './homeStyles';
import { LinearGradient } from 'expo-linear-gradient';


export default function Home() {
  const navigation = useNavigation();

  const buttons = [
    { name: 'Schedule', icon: 'calendar-outline' },
    { name: 'Tips', icon: 'bulb-outline' },
    { name: 'Projects', icon: 'construct-outline' },
    { name: 'Inventory', icon: 'list-outline' },
  ];

  const renderButton = (item) => (
    <TouchableOpacity
      style={homeStyles.button}
      onPress={() => {
        console.log('You pressed a button');
        navigation.navigate(item.name);
      }}
      key={item.name}
    >
      <View style={homeStyles.buttonContent}>
        <Ionicons name={item.icon} size={36} color="black" />
        <Text style={homeStyles.buttonText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
    colors={['#e9eff7', '#fbdbc7']} // Blue to Orange gradient
    style={homeStyles.gradientContainer}
    >
      <View style={homeStyles.container}>
        <UserName />
        <View style={homeStyles.buttonContainer}>
          {buttons.slice(0, 2).map(renderButton)}
        </View>
        <View style={homeStyles.buttonContainer}>
          {buttons.slice(2).map(renderButton)}
        </View>
      </View>
    </LinearGradient>
  );
}
