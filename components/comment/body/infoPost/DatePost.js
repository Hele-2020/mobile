import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class DatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: " 4 aout"
    };
  }
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text} >{this.state.titleText}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    paddingLeft: 5,
    backgroundColor: "lightblue",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "20%"
  },
  text: {
    fontSize: 14,
    color: "#59358B",
  }
});