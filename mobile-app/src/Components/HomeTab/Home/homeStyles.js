import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
    },
    gradientContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      flex: 1,
      backgroundColor: '#F2F2F7',
      borderRadius: 20,
      elevation: 3,
      margin: 10,
    },
    buttonContent: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#007AFF',
      marginTop: 10,
    },
    welcomeText: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#033596',
      marginTop: 10,
    },
    headingText: {
      fontSize: 52,
      fontWeight: 'bold',
      fontFamily: 'Georgia',
      color: '#033596',
      marginTop: 10,
    },
    subText: {
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'Georgia',
      color: '#033596',
      marginTop: 10,
    },
    signOutStyle: {
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      paddingRight: 15,
    },
  });