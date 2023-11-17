import { useUser } from '@clerk/clerk-expo';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export default function UserName() {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <View>
      <Text>Hello, {user.firstName}</Text>
    </View>
  );
}
