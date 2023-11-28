import { useUser } from '@clerk/clerk-expo';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { homeStyles } from '../HomeTab/Home/homeStyles';

export default function UserName() {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <View>
      <Text style={homeStyles.welcomeText}>Welcome, {user.firstName}!</Text>
    </View>
  );
}
