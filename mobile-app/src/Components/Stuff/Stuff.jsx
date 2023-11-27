import {View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { homeStyles } from '../HomeTab/Home/homeStyles';

export default function Stuff() {
  return (
    <LinearGradient colors={['#e9eff7', '#fbdbc7']} style={homeStyles.gradientContainer}>
      <View>
        <Text>Stuff</Text>
      </View>
    </LinearGradient>
  );
}
