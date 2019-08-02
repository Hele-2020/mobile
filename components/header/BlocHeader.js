import React, { Component } from 'react';
import { Text, View } from 'react-native';
import LogoHele from './LogoHele.js';

export default class BlocHeader extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "blue",width:'100%' }}>
        <LogoHele />
      </View>
    );
  }
}