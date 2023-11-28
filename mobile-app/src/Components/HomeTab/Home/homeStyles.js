import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
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
      padding: 10,
      margin: 10,
      flexWrap: 'nowrap',
    },
    buttonContent: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      height: 170,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#007AFF',
      marginTop: 10,
      textAlign: 'center',
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
      paddingRight: 10,
      ...Platform.select({
        android: {
          paddingTop: 40, // Add top padding for Android Sign Out Button
        },
      }),
    },
  });