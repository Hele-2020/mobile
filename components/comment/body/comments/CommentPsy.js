import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class CommentPsy extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Oui mais non, peut être que ... ' };
      }
  render() {
    return (
      <View style={styles.view} >
        <Text style={styles.text}>{this.state.text}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color : "black",
    fontSize: 15,
  }
});