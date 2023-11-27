import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './HomeTab/HomeTab';

import Spaces from './Spaces/Spaces.jsx';
import Stuff from './Stuff/Stuff.jsx';
import Favorites from './Favorites/Favorites.jsx';
import Notifications from './Notifications/Notifications.jsx';
import { Ionicons } from '@expo/vector-icons'; // Open source Icons

export default function BottomTabs() {
  const Tab = createBottomTabNavigator();
  const screenOptions = {};
  const sceneContainerStyle = {};


  return (
    <Tab.Navigator {...{ screenOptions, sceneContainerStyle }}>
      <Tab.Screen 
        name="HomeTab" 
        component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => (
          <Ionicons name="home-outline" size={size} color={color} />
          ),
        }} 
      ></Tab.Screen>
      <Tab.Screen 
        name="Spaces" 
        component={Spaces}
        options={{
          tabBarLabel: 'Spaces',
          tabBarIcon: ({ size, color }) => (
          <Ionicons name="business-outline" size={size} color={color} />
          ),
        }} 
      ></Tab.Screen>
      <Tab.Screen 
        name="Stuff" 
        component={Stuff}
        options={{
          tabBarLabel: 'Stuff',
          tabBarIcon: ({ size, color }) => (
          <Ionicons name="cube-outline" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen 
        name="Favorites" 
        component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ size, color }) => (
          <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen 
        name="Notifications" 
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ size, color }) => (
          <Ionicons name="notifications-outline" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
