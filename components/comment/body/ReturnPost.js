import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class ReturnPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: " <  Retour aux posts"
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
    alignItems: "flex-start",
    justifyContent: "center",
    alignContent: "space-around",
    flexDirection: "column" ,
    width: "100%",
  },
  touchableReturnPost: {
    width: "50%",
    alignContent: "space-around",
    paddingBottom: 10,
    paddingTop: 10
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: "#59358B",
  }
});