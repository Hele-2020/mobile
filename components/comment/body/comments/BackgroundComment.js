import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CommentPsy from './CommentPsy.js';
import NamePsyComment from './NamePsyComment.js';

export default class BackgroundComment extends Component {
    
  render() {
    return (
      <View style={styles.view} >
        <NamePsyComment />
        <CommentPsy />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: "#F1F0EF",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "80%",
    height: "auto",
    marginLeft : 15,
    padding :7,
    borderRadius: 20,
  }
});