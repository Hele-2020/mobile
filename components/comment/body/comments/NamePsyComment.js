import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class NamePsyComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Dr Robin"
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
    // backgroundColor: "white",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "black",
    // color: "#59358B",
  }
});