import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class AllComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nbr: "121",
            titleText: " commentaires"
        };
      }
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.touchableReturnPost}>
          <Text style={styles.text} >{this.state.nbr}{this.state.titleText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    // backgroundColor: "white",
    alignSelf: "stretch",
    flexWrap: "wrap",
    justifyContent: "center",
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