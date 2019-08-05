import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class NamePsy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: " Dr Jean Dupont"
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
    // backgroundColor: "green",
    alignItems: "flex-start",
    justifyContent: "center",
    alignContent: "space-around",
    height: "30%"
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "black",
    // color: "#59358B",
  }
});