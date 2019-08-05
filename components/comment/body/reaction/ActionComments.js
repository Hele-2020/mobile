import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class ActionComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
          titleText: "commenter"
        };
      }
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.touchableReturnPost}>
          <Text style={styles.text} >{this.state.titleText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    justifyContent: "center",
    flexWrap: "wrap",
    alignSelf: "stretch",
    },
  touchableReturnPost: {
    paddingBottom: 10,
    paddingTop: 10
    },
  text: {
    fontSize: 12,
    color: "#59358B",
    }
});