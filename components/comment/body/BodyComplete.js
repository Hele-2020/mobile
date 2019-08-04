import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ReturnPost from './ReturnPost.js';
import BlocInfoPost from '././infoPost/BlocInfoPost.js';
import BlocReaction from '././reaction/BlocReaction.js';

export default class BodyComplete extends Component {
  render() {
    return (
      <View style={styles.view}>
        <ReturnPost /> 
        <BlocInfoPost /> 
        <BlocReaction /> 
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 5,
    backgroundColor: "blue",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: "flex-start",
  }
});