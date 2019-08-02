import React, { Component } from 'react';
import { Text, View } from 'react-native';
import LogoHele from './LogoHele.js';

export default class BlocHeader extends Component {
  render() {
    return (
      <View style={{ flex: 0.8, alignContent:"space-around", alignItems:"center",
      justifyContent: "left", marginLeft:40, marginTop:20, flexDirection: 'row' , width:"100%", backgroundColor:"white" }}>
        <LogoHele />
      </View>
    );
  }
}