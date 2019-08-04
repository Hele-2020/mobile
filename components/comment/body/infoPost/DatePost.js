import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

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
    position: "relative",
    paddingLeft: 10,
    backgroundColor: "lightblue",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "50%"
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: "#59358B",
  }
});