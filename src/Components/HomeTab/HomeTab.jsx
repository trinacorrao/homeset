import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inventory from './Inventory/Inventory';
import Home from './Home/Home';
import Schedule from './Schedule/Schedule';
import Projects from './Projects/Projects';
import Tips from './Tips/Tips';

export default function HomeTab() {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <Stack.Navigator initialRouteName="Home">
        {/* Similar to a Route */}

        <Stack.Screen name="Inventory" component={Inventory} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="Projects" component={Projects} />
        <Stack.Screen name="Tips" component={Tips} />
      </Stack.Navigator>
    </View>
  );
}
