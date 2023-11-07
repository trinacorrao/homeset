import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserName from '../../ClerkAuth/UserName';

export default function Home() {
  const navigation = useNavigation();
  const pages = [
    { name: 'Schedule' },
    { name: 'Tips' },
    { name: 'Projects' },
    { name: 'Inventory' },
  ];

  return (
    <View>
      <UserName />
      <FlatList
        data={pages}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 20, borderColor: 'gray', borderBottomWidth: 1 }}
            onPress={() => {
              console.log('You pressed a button');
              navigation.navigate(item.name);
            }}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        style={{ width: '100' }}
      />
    </View>
  );
}
