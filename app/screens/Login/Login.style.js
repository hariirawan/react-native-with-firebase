import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F5FCFF',
      flex:1
    },
    bgCard:{
      height:300,
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    }, 
    form:{
      backgroundColor:"#ffffff",
      marginHorizontal:20,
      borderRadius:10,
      translateY:-70,
      padding:10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      position:'relative'
    }
});
  