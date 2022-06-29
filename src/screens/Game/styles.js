import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      alignItems:'center'

    },
    hand: {
      flexDirection: 'row' ,
      justifyContent: 'center',
      marginBottom: 20,

    },
    title: {
      fontSize: 42,
      textAlign: "center",
      fontWeight: "bold",
      color: 'red',
      marginBottom: 20 ,

    },
    pontos:{
      fontSize: 32,
      color: 'white',
      alignItems: 'center',
      backgroundColor:'gray',
      padding: 5
      
    },
    carta:{
      width: 200 ,
      height:200,
      resizeMode: 'contain',
      marginHorizontal:-75,
  },
  mensagem: {
    fontSize: 24,
  },

  });