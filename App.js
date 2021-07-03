import React, { Component } from 'react';
import { View } from 'react-native';
import Hs from './screens/Hs';
import dictionary from './screens/database';

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <Hs />
      </View> 
    )
  }
}