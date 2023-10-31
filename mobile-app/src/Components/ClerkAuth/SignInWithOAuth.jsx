import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Button } from 'react-native';
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from './warmUpBrowser';

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

  return <Button title="Sign in with Google" onPress={onPress} />;
};
export default SignInWithOAuth;
