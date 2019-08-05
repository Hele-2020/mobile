import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ReturnPost from './ReturnPost.js';
import BlocInfoPost from '././infoPost/BlocInfoPost.js';
import BlocReaction from '././reaction/BlocReaction.js';
import BlocComments from '././comments/BlocComments.js';

export default class BodyComplete extends Component {
  render() {
    return (
      <View style={styles.view}>
        <ReturnPost /> 
        <BlocInfoPost /> 
        <BlocReaction />
        <BlocComments />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 5,
    // backgroundColor: "blue",
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: "flex-start",
  }
});
