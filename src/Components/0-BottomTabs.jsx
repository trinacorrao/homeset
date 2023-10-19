import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home/Home';
import Spaces from './Spaces/Spaces.jsx';
import Stuff from './Stuff/Stuff.jsx';
import Favorites from './Favorites/Favorites.jsx';
import Notifications from './Notifications/Notifications.jsx';

export default function BottomTabs() {
  const Tab = createBottomTabNavigator();
  const screenOptions = {};
  const sceneContainerStyle = {};

  return (
    <Tab.Navigator {...{ screenOptions, sceneContainerStyle }}>
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen name="Spaces" component={Spaces}></Tab.Screen>
      <Tab.Screen name="Stuff" component={Stuff}></Tab.Screen>
      <Tab.Screen name="Favorites" component={Favorites}></Tab.Screen>
      <Tab.Screen name="Notifications" component={Notifications}></Tab.Screen>
    </Tab.Navigator>
  );
}
