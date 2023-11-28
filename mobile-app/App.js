import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

import { store } from './src/Redux/store';
import { Provider } from 'react-redux';

import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/Components/0-BottomTabs';
import { ClerkProvider, SignedIn, SignedOut, useAuth } from '@clerk/clerk-expo';
import SignUpScreen from './src/Components/ClerkAuth/SignUpScreen';
import SignInScreen from './src/Components/ClerkAuth/SignInScreen';
import Constants from 'expo-constants';
import SignInWithOAuth from './src/Components/ClerkAuth/SignInWithOAuth';
import * as SecureStore from 'expo-secure-store';
import { homeStyles } from './src/Components/HomeTab/Home/homeStyles';

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

const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View style={homeStyles.signOutStyle}>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

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
    <ClerkProvider
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
      tokenCache={tokenCache}
    >
      <Provider store={store}>
        <SignedIn>
          <SafeAreaView>
            <SignOut />
          </SafeAreaView>
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


