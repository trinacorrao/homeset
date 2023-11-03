import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './src/Redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/Components/0-BottomTabs';

export default function App() {

  const Overlay = ({ visible, closeModal }) => {
    if (!visible) {
      return null;
    }
  
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={closeModal}
        style={styles.overlay}
      />
    );
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Overlay> */}
          <BottomTabs />
        {/* </Overlay> */}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


