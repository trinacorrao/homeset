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
    button: {
      flex: 1,
      backgroundColor: 'white',
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
  });