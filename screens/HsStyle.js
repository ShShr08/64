import * as React from 'react'
import { StyleSheet } from 'react-native';

const stylez = StyleSheet.create({
    container: {
      flex: 1,
    },
    inputBox: {
      flex:0.3,
      alignItems:'center',
      justifyContent:'center'
    },
    inputBox2: {
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
    },
    searchButton: {
      width: '40%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      borderWidth: 2,
      borderRadius: 10,
    },
    searchText:{
      fontSize: 20,
      fontWeight: 'bold'
    },
    output:{
      flex:0.7,
      alignItems:'center'
    },
    details:{
      flexDirection:'row',
      alignItems:'center'
    },
    details2:{
      color:'orange',
      fontSize:20,
      fontWeight:'bold'
    }
});

export default stylez;