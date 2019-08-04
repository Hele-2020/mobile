import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

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
    position: "relative",
    paddingLeft: 10,
    backgroundColor: "green",
    alignItems: "flex-start",
    justifyContent: "center",
    alignContent: "space-around",
    height: "50%"

    // width: "100%",
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: "#59358B",
  }
});