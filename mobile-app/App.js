import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './src/Redux/store';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/Components/0-BottomTabs';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import Constants from 'expo-constants';

export default function App() {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
    >
      <Provider store={store}>
        <SafeAreaProvider>
          <SignedIn>
            <NavigationContainer>
              <BottomTabs />
            </NavigationContainer>
          </SignedIn>
          <SignedOut>
            <Text>You are signed out, SignIn page to live here</Text>
          </SignedOut>
        </SafeAreaProvider>
      </Provider>
    </ClerkProvider>
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
