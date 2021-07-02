import React, { Component } from 'react';
import { View } from 'react-native';
import Hs from './screens/Hs'


export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <Hs />
      </View>
    )
  }
}