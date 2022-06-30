import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      alignItems:'center'

    },
    hand: {
      flex: .55,
      flexDirection: 'row' ,
      justifyContent: 'center',
      marginBottom: 20,

    },
    title: {
      fontSize: 42,
      textAlign: "center",
      fontWeight: "bold",
      color: 'red',
      marginTop: 10,
      marginBottom: 20 ,
      textShadowRadius: 5,
      textShadowColor:"gold",
      

    },
    pontos_view:{
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'gray',
      padding: 5,
      borderRadius: 20,
      borderColor:"white",
      borderWidth:3      
    },
    pontos_text:{
      fontSize: 32,
      color: 'white',    
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