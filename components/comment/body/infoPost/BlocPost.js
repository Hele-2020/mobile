import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class ReturnPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: " BlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlablaBlaBlabla"
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
    backgroundColor: "orange",
    alignItems: "flex-start",
    justifyContent: "center",
    alignContent: "space-around",
    flexDirection: "column" ,
    width: "100%",
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: "#59358B",
  }
});