import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const pages = [
    { name: 'Schedule' },
    { name: 'Tips' },
    { name: 'Projects' },
    { name: 'Inventory' },
  ];
  console.log('Helllllop');
  return (
    <View>
      <Text>Home</Text>
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
            <Text>{item.name}HELLLLLLLLO</Text>
          </TouchableOpacity>
        )}
        style={{ width: '100' }}
      />
    </View>
  );
}
