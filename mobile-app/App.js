import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { store } from './src/Redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/Components/0-BottomTabs';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =
  pk_test_Z2VuZXJvdXMtc2x1Zy0xMC5jbGVyay5hY2NvdW50cy5kZXYk;

export default function App() {
  return (
    <ClerkProvider publishableKey={NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <Provider store={store}>
        <SafeAreaView>
          <SignedIn>
            <NavigationContainer>
              <BottomTabs />
            </NavigationContainer>
          </SignedIn>
          <SignedOut></SignedOut>
        </SafeAreaView>
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
