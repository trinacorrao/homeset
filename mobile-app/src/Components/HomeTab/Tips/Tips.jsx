import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { homeStyles } from '../Home/homeStyles';

export default function Tips() {
  return (
    <LinearGradient colors={['#e9eff7', '#fcdabf']} style={homeStyles.gradientContainer}>
      <View>
        <Text>Tips</Text>
      </View>
    </LinearGradient>
  );
}
