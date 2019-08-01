import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ReturnPost from './ReturnPost.js';

export default class BodyComplete extends Component {
  render() {
    return (
      <View style={{ flex: 5, justifyContent: "center", alignItems: "center" , backgroundColor: "white", width:'100%'}}>
      <ReturnPost /> 
        <Text>Body Complete!</Text>
        
      </View>
    );
  }
}