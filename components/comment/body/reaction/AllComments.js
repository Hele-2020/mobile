import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import ReturnPost from './ReturnPost.js';
// import BlocInfoPost from '././infoPost/BlocInfoPost.js';
// import BlocReaction from '././reaction/BlocReaction.js';

export default class AllComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nbr: "",
            titleText: " commentaires"
        };
      }
    
  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.touchableReturnPost}>
        <Text style={styles.text} >{this.state.nbrt}{this.state.titleText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
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