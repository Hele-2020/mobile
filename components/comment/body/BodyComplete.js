import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import BlocPost from '././infoPost/BlocPost.js';
import BlocReaction from '././reaction/BlocReaction.js';
import BlocComments from '././comments/BlocComments.js';

export default class BodyComplete extends Component {
  render() {
    return (
      <View style={styles.view}>
        <BlocPost /> 
        <BlocReaction />
        <BlocComments />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 4.4,
    // backgroundColor: "blue",
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: "flex-start",
  }
});
