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
      marginTop: 10,
    },
    gradientContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      flex: 1,
      backgroundColor: '#F2F2F7',
      borderRadius: 8,
      elevation: 3,
      margin: 10,
    },
    buttonContent: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 45,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
    welcomeText: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#033596',
      marginTop: 10,
    },
  });