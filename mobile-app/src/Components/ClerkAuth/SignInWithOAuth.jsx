import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Button, View, Text } from 'react-native';
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from './warmUpBrowser';
import { LinearGradient } from 'expo-linear-gradient';
import { homeStyles } from '../HomeTab/Home/homeStyles';

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  console.log(startOAuthFlow);
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, setActive, signUp } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
        console.log('Failed to sign in or sign up', createdSessionId);
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, []);

  return (
    <LinearGradient
      colors={['#e9eff7', '#fcdabf']}
      style={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={homeStyles.container}>
        <View>
          <Text style={homeStyles.headingText}>HomeSet</Text>

        </View>
        <View>
          <Text style={homeStyles.subText}>Healthy Home • Healthy Mindset</Text>
        </View>
        <View style={homeStyles.buttonContainer}>
          <Button title="Sign in with Google" onPress={onPress} />
        </View>
      </View>
    </LinearGradient>
  )
};
export default SignInWithOAuth;
