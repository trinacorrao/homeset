import {View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { homeStyles } from '../Home/homeStyles';

export default function Notifications() {
  return (
    <LinearGradient colors={['#e9eff7', '#fbdbc7']} style={homeStyles.gradientContainer}>
      <View>
        <Text>Notifications</Text>
      </View>
    </LinearGradient>
  );
}
