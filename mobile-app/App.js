import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { store } from './src/Redux/store';
import { Provider } from 'react-redux';

import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/Components/0-BottomTabs';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import SignUpScreen from './src/Components/ClerkAuth/SignUpScreen';
import SignInScreen from './src/Components/ClerkAuth/SignInScreen';
import Constants from 'expo-constants';
import SignInWithOAuth from './src/Components/ClerkAuth/SignInWithOAuth';
import * as SecureStore from 'expo-secure-store';

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
      tokenCache={tokenCache}
    >
      <Provider store={store}>
        <SignedIn>
          <NavigationContainer>
            <BottomTabs />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <SafeAreaView>
            <SignInWithOAuth />
          </SafeAreaView>
        </SignedOut>
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
